import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Copy, Download, Eye, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeOutputProps {
  code: string;
  language: string;
  placeholder?: string;
}

export default function CodeOutput({ code, language, placeholder }: CodeOutputProps) {

  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [code]);


  const { toast } = useToast();
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    if (!code) return;
    
    try {
      await navigator.clipboard.writeText(code);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
      toast({
        title: "Success!",
        description: "Code copied to clipboard!",
      });
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
      toast({
        title: "Success!",
        description: "Code copied to clipboard!",
      });
    }
  };

  const handleDownload = () => {
    if (!code) return;

    const extensions: Record<string, string> = {
      tsx: 'tsx',
      html: 'html',
      javascript: 'js',
      python: 'py',
      css: 'css'
    };

    const filename = `component.${extensions[language] || 'txt'}`;
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Success!",
      description: `File downloaded as ${filename}!`,
    });
  };

  const handlePreview = () => {
    if (!code) return;

    if (language === 'html') {
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(code);
        newWindow.document.close();
        toast({
          title: "Success!",
          description: "Preview opened in new tab!",
        });
      }
    } else {
      toast({
        title: "Info",
        description: "Live preview only available for HTML code!",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
            <Eye className="w-5 h-5 mr-2 text-[hsl(195,100%,50%)]" />
            Generated Code
          </CardTitle>
          <div className="flex gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleCopy}
                disabled={!code}
                variant="outline"
                size="sm"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  {copySuccess ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.05 }}
                      className="flex items-center"
                    >
                      <Check className="w-4 h-4 mr-1 text-green-600" />
                      Copied!
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center"
                    >
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleDownload}
                disabled={!code}
                variant="outline"
                size="sm"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-1" />
                Download
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -1 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handlePreview}
                disabled={!code}
                size="sm"
                className="px-4 py-2 text-white text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                style={{ 
                  backgroundColor: 'hsl(195, 100%, 50%)',
                }}
              >
                <Eye className="w-4 h-4 mr-1" />
                Preview
              </Button>
            </motion.div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="md:px-6 px-3">
        <motion.div
          ref={outputRef}
          className="rounded-lg p-0 h-[500px] overflow-auto code-output border"
          style={{ 
            backgroundColor: 'hsl(225, 95%, 8%)',
            color: 'hsl(220, 13%, 91%)',
            borderColor: 'hsl(225, 95%, 15%)',
            whiteSpace: "pre",
            height: "500px",
            overflow: "auto", 
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <pre className="text-sm font-mono"> */}
            {/* <AnimatePresence mode="wait">
              <motion.code 
                key={code ? 'code' : 'placeholder'}
                className={`language-${language}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {code || placeholder || `// Click "Generate" to see your component code here...`}
              </motion.code>
            </AnimatePresence> */}
            <SyntaxHighlighter
              language={language}
              style={oneDark}
              showLineNumbers
              wrapLines={false}
              wrapLongLines={false}
              customStyle={{
                background: "transparent",
                margin: 0,
                padding: 0,
                overflow: "visible",
              }}
              codeTagProps={{
                style: {
                  display: "inline-block",
                  minWidth: "100%",
                  whiteSpace: "pre",
                  overflow: "visible",
                },
              }}
            >
              {code}
            </SyntaxHighlighter>
        </motion.div>
      </CardContent>
    </Card>
  );
}
