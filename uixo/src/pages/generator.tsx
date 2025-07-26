import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Zap, Trash2, Sparkles } from "lucide-react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import LoadingOverlay from "../components/loading-overlay";
import CodeOutput from "../components/code-output";
import AbstractBackground from "../components/abstract-background";
import { startStreaming } from "@/services/getStream";
import { LiveTSXRenderer } from "@/components/LiveTSXRenderer";
import PreviewReady from "@/components/PreviewReady";
// import CoolBg from "@/components/coolBG";

// interface GenerateRequest {
//   prompt: string;
//   language: string;
// }

// interface GenerateResponse {
//   code: string;
//   language: string;
// }
function generateRandomHash(length = 12) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

function extractFunctionBody(code: string): string {
  const lines = code.split('\n');

  // Buang semua baris import di paling atas, termasuk baris kosong
  let i = 0;
  while (
    i < lines.length &&
    (lines[i].trim() === '' || lines[i].trim().startsWith('import'))
  ) {
    i++;
  }

  const cleanedLines = lines.slice(i)
    .map(line => line.replace(/\bexport\s+default\b\s*/g, '')) // Hapus export default
    .filter(line => line.trim() !== '' && line.trim() !== ';' && !/^[A-Za-z0-9_$]+\s*;$/.test(line.trim())); // Hapus baris kosong dan sisa ekspresi export

  const result = cleanedLines.join('\n').trim();
  // console.log(result);
  return result;
}




export default function Generator() {
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState("tsx");
  // const [generatedCode, setGeneratedCode] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast();
  const [streamedOutput, setStreamedOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [ loadingPreview, setLoadingPreview ] = useState(false);
  const [isStreamingDone, setIsStreamingDone] = useState(false);


  const [ hash, setHash ] = useState("");
  useEffect(() => {
    const session_hash = generateRandomHash();
    setHash(session_hash);
  }, []);

  const streamMutation = useMutation({
    mutationFn: async (prompt: string) => {
      setIsLoading(true);
      setStreamedOutput("");

      const hashnya = generateRandomHash();
      
      let finalPrompt;
      if (language === "tsx") {
        finalPrompt = `${prompt}. HARUS pakai bahasa ${language}. Tanpa framer-motion.`
      } else {
        finalPrompt = `${prompt}. HARUS pakai bahasa ${language}.`
      }

      // Step 1: POST
      const res = await fetch("https://qwen-qwen3-coder-webdev.hf.space/gradio_api/queue/join?__theme=system", {
        method: "POST",
        headers: {
            "Host": "https://qwen-qwen3-coder-webdev.hf.space",
            "User-Agent": "Mozilla/5.0 (Linux; Android 11; Infinix X662 Build/RP1A.200720.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.7204.157 Mobile Safari/537.36",
            "Origin": "https://qwen-qwen3-coder-webdev.hf.space",
            "Referer": "https://qwen-qwen3-coder-webdev.hf.space/?__theme=system",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: [finalPrompt, '', null],
          event_data: null,
          fn_index: 19,
          trigger_id: 18,
          session_hash: hashnya,
        }),
      });

      if (!res.ok) throw new Error("POST failed");

      setLoadingPreview(true);

      await startStreaming(hashnya, (chunk, language) => {
        setIsLoading(false);
        setLanguage(language)
        setStreamedOutput((prev) => prev + chunk);
      }, () => {
        setIsStreamingDone(true);
      });
    },
    onError: () => {
      setIsLoading(false);
      setLoadingPreview(false)
      toast({
        title: "Error",
        description: "Failed to stream code. Please try again.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      console.log(streamedOutput)
      setLoadingPreview(false)
      toast({
        title: "Done!",
        description: "Streaming finished.",
      });
    },
  });

  const handleClear = () => {
    setStreamedOutput("");
    setPrompt("");
    setError("");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative transition-colors duration-300">
      <AbstractBackground />
      {/* <CoolBg /> */}
      <LoadingOverlay
        isVisible={isLoading}
        message="Generating your component..."
      />
      
      <motion.div 
        className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <div className="flex items-center justify-center mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-[hsl(195,100%,50%)] mr-3" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              AI Component Generator
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Describe your component and let AI generate production-ready code for you
          </p>
        </motion.div>

        {/* Generator Interface - Made Much Wider */}
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 gap-8">
          {/* Input Section - Smaller width */}
          <motion.div className="xl:col-span-2 lg:col-span-1 w-full overflow-x-hidden" variants={itemVariants}>
            <Card className="shadow-xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-[hsl(195,100%,50%)]" />
                  Describe Your Component
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
              {/* Input Textarea */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
              >
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  transition={{  ease: "easeInOut" }}
                >
                  <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[200px] transition-all duration-100 w-full resize-none
                                focus:outline-none focus:ring-0 focus:ring-transparent
                                placeholder:font-normal placeholder:not-italic
                                border-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                                placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    placeholder="Buatkan form login dengan email dan password, gunakan styling modern dengan border radius dan shadow..."
                  />
                </motion.div>
                <AnimatePresence>
                  {error && (
                    <motion.p 
                      className="text-red-500 text-sm mt-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Language Selection */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Output Language
                </label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-full transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 focus:ring-2 focus:ring-[hsl(195,100%,50%)] focus:border-[hsl(195,100%,50%)] bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tsx">React TSX</SelectItem>
                    <SelectItem value="html">HTML</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.div 
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => streamMutation.mutate(prompt)}
                    disabled={isLoading}
                    className="w-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl group bg-[hsl(225,95%,18%)] dark:bg-[hsl(195,100%,50%)] dark:text-[hsl(225,95%,18%)] hover:bg-[hsl(217,95%,30%)] dark:hover:bg-[hsl(195,100%,60%)]"
                  >
                    <motion.div
                      animate={isLoading ? { rotate: 360 } : {}}
                      transition={{ duration: 1, repeat: isLoading ? Infinity : 0, ease: "linear" }}
                    >
                      <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    </motion.div>
                    {isLoading ? "Generating..." : "Generate"}
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={handleClear}
                    variant="outline"
                    className="px-6 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear
                  </Button>
                </motion.div>
              </div>
            </CardContent>
            </Card>
          </motion.div>

          {/* Output Section - Wider width */}
          <motion.div className="xl:col-span-3 lg:col-span-2 w-full overflow-x-hidden" variants={itemVariants}>
            <CodeOutput 
              code={streamedOutput}
              language={language}
              placeholder="// Click 'Generate' to see your component code here..."
            />
          </motion.div>
        </div>

        {/* Live Preview */}
          <div className="mt-8 w-full">
            <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                Live Preview
              </h2>
            </div>
            <div className="w-full border rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-md animated-bg p-1">
              {streamMutation.isPending || streamedOutput.length === 0 ? (
                loadingPreview ? (
                  // Loader saat masih kosong atau sedang loading
                  <div className="w-full h-[100vh] transition-all duration-300">
                    <div className="w-full h-full flex items-center justify-center bg-gray-900 text-green-400 font-mono text-sm">
                      <div className="space-y-1 animate-pulse">
                        {language === "tsx" ? (
                          // Loader untuk TSX/React
                          <>
                            <div>{`Generating React component...`}</div>
                            <div>{`export default function `}<span className="animate-blink">|</span></div>
                            <div>{`return (`}</div>
                            <div className="pl-4">{`<div>AI is writing TSX...</div>`}</div>
                            <div>{`)`}</div>
                          </>
                        ) : (
                          // Loader untuk HTML
                          <>
                            <div>{`Generating HTML...`}</div>
                            <div>{`<!DOCTYPE html>`}</div>
                            <div>{`<html>`}</div>
                            <div className="pl-4">{`<body>`}</div>
                            <div className="pl-8">{`<!-- AI writing HTML... -->`}</div>
                            <div className="pl-4">{`</body>`}</div>
                            <div>{`</html>`}</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-[100vh] transition-all duration-300">
                    <PreviewReady/>
                  </div>
                )
              ) : language === "html" ? (
                <div className="bg-gray-900 rounded">
                  <iframe
                    title="Live Preview"
                    sandbox="allow-scripts allow-same-origin"
                    className="w-full h-[100vh] transition-all rounded duration-300"
                    srcDoc={streamedOutput}
                  />
                </div>
              ) : isStreamingDone && (
                <div className="w-full h-[100vh] transition-all rounded duration-300 bg-gray-900">
                  <LiveTSXRenderer code={extractFunctionBody(streamedOutput)} />
                </div>
              )}
            </div>
          </div>
      </motion.div>
    </div>
  );
}
