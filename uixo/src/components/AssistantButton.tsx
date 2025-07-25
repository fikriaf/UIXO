import React, { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMessageCircle, FiMic, FiSend } from "react-icons/fi";

export default function AssistantButton() {
const [open, setOpen] = useState(false);

return (
    <>
    {/* FAB Button */}
    <motion.button
        onClick={() => setOpen(true)}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 overflow-hidden right-6 z-50 bg-[hsl(195,100%,50%)] hover:bg-[hsl(195,100%,45%)] hover:w-48 w-16 h-16 p-4 rounded-full shadow-xl transition-all duration-300"
        aria-label="Assistant"
    >
        <div className="absolute flex gap-3 top-3 left-3 font-semibold">
            <img src="/logo-nobg.png" alt="UX Assistant" className="w-10 h-10" />
            <div className="flex-column text-left mt-[-10px]">
                <p className="p-0 m-0 text-lg color-gradient-uixo">UIXO</p>
                <p className="p-0 m-0 text-lg color-gradient-uixo">Assistant</p>
            </div>
        </div>
    </motion.button>

    {/* Modal */}
    <AnimatePresence>
        {open && (
        <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0, scale: 0.97 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="w-full max-w-md h-[500px] bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
            >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <div className="flex items-center gap-2">
                <img src="/logo-nobg.png" alt="Logo" className="w-6 h-6" />
                <h2 className="text-base font-semibold text-gray-900 dark:text-white">UX Assistant</h2>
                </div>
                <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-red-500 transition"
                aria-label="Close"
                >
                <X size={20} />
                </button>
            </div>

            {/* Chat area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100">
                <div className="bg-[hsl(195,100%,50%)] text-white px-4 py-2 rounded-xl shadow w-max">
                Hai! Saya siap membantu 🚀
                </div>
            </div>

            {/* Input area */}
            <div className="border-t border-gray-200 dark:border-gray-800 bg-transparent">
            <div className="flex items-center gap-2">
                <div className="flex items-center flex-1 bg-white/90 dark:bg-gray-900/80 px-3 py-2 rounded-xl">
                <textarea
                    placeholder="Tulis sesuatu..."
                    className="flex-1 h-[3rem] bg-transparent text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-none"
                />
                </div>
                <div>
                    <button className="text-white px-4 py-2 rounded-xl text-sm font-medium">
                        <FiMic className="w-5 h-5" />
                    </button>
                    <button className="text-white px-4 py-2 rounded-xl text-sm font-medium">
                        <FiSend className="w-5 h-5" />
                    </button>
                </div>
            </div>
            </div>
            </motion.div>
        </motion.div>
        )}
    </AnimatePresence>
    </>
);
}
