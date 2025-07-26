import * as Babel from "@babel/standalone";
import React, {
  useState, useEffect, useRef, useMemo, useCallback,
  useContext, useReducer, useLayoutEffect,
  useImperativeHandle, useId, useTransition,
  useDeferredValue, useSyncExternalStore
} from "react";
import * as motionLib from "framer-motion";
import * as RadixIcons from "react-icons";
import * as LucideIcons from "lucide-react";
import * as HeroIcons from "@heroicons/react/24/outline";
import * as MaterialIcons from "react-icons/md";
import * as TailwindElements from "tw-elements";

type Props = {
  code: string; // hanya isi function component
};

export const LiveTSXRenderer: React.FC<Props> = ({ code }) => {
    
    const Component = useMemo(() => {
        try {
            const isFullComponent =
                /\bexport\s+default/.test(code) ||
                /\bfunction\s+[A-Z][a-zA-Z0-9_]*\s*\(/.test(code) ||
                /\bconst\s+[A-Z][a-zA-Z0-9_]*\s*=\s*\(?\)?\s*=>/.test(code);

            let wrappedCode = "";

            if (isFullComponent) {
                // Tangkap nama komponen jika bukan export default
                let fallbackName = "App";

                if (!code.includes("export default")) {
                    const match = code.match(/\bconst\s+([A-Z][a-zA-Z0-9_]*)\s*=\s*\(?\)?\s*=>/);
                    fallbackName = match?.[1] || fallbackName;
                    code += `\nexports.default = ${fallbackName};`;
                }

                wrappedCode = `
                const App = (() => {
                    ${code}
                    return exports.default;
                })();
                module.exports = App;
                `;
            } else {
                wrappedCode = `
                const RenderedComponent = (() => {
                    return () => {
                    ${code}
                    };
                })();
                module.exports = RenderedComponent;
                `;
            }

            const { motion, AnimatePresence } = motionLib;

            const transpiled = Babel.transform(wrappedCode, {
            presets: ["typescript", "react"],
            filename: "file.tsx",
            }).code;

            if (!transpiled) {
            throw new Error("Transpiled code is null or undefined");
            }

            const iconMap = {
            ...LucideIcons,
            ...HeroIcons,
            ...MaterialIcons,
            ...RadixIcons,
            };
            

            const usedIconNames = Object.keys(iconMap).filter(name => new RegExp(`\\b${name}\\b`).test(transpiled));
            const iconDeclarations = usedIconNames.map(name => `const ${name} = iconMap["${name}"];`).join('\n');

            console.log("🔧 Transpiled code:\n", transpiled);
            console.log("🔍 Used icons:", usedIconNames);

            if (usedIconNames.length === 0) {
            console.log("ℹ️ No icon components used.");
            }


            const fn = new Function(
            "React", "motionLib", "RadixIcons", "LucideIcons", "HeroIcons", "MaterialIcons", "TailwindElements", "module", "exports",
            `
                const {
                useState, useEffect, useRef, useMemo, useCallback,
                useContext, useReducer, useLayoutEffect,
                useImperativeHandle, useId, useTransition,
                useDeferredValue, useSyncExternalStore
                } = React;

                const { motion, AnimatePresence } = motionLib;

                const iconMap = {
                ...LucideIcons,
                ...HeroIcons,
                ...MaterialIcons,
                ...RadixIcons,
                };

                ${iconDeclarations}

                ${transpiled}
                return module.exports.default || module.exports;
            `
            );

            const module = { exports: {} };
            const exports = module.exports;

            const RenderedComponent = fn(
            React,
            { motion, AnimatePresence },
            RadixIcons,
            LucideIcons,
            HeroIcons,
            MaterialIcons,
            TailwindElements,
            module,
            exports,
            );

            return RenderedComponent;
        } catch (err) {
            return () => (
            <div className="text-red-500 font-mono text-sm whitespace-pre-wrap">
                <pre>Error in code: {(err as Error).message}</pre>
            </div>
            );
        }
    }, [code]);

    return (
        <div className="live-preview w-full h-full">
        <Component />
        </div>
    );
};
