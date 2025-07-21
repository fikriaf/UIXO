import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Zap, Trash2, Sparkles } from "lucide-react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import LoadingOverlay from "../components/loading-overlay";
import CodeOutput from "../components/code-output";
import AbstractBackground from "../components/abstract-background";

interface GenerateRequest {
  prompt: string;
  language: string;
}

interface GenerateResponse {
  code: string;
  language: string;
}

export default function Generator() {
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState("tsx");
  const [generatedCode, setGeneratedCode] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast();

  const generateMutation = useMutation({
    mutationFn: async (data: GenerateRequest): Promise<GenerateResponse> => {
      const response = await apiRequest("POST", "/api/generate", data);
      return await response.json();
    },
    onSuccess: (data) => {
      setGeneratedCode(data.code);
      setError("");
      toast({
        title: "Success!",
        description: "Code generated successfully!",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to generate code. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleGenerate = () => {
    if (!prompt.trim()) {
      setError("Please enter a component description");
      return;
    }
    setError("");
    generateMutation.mutate({ prompt: prompt.trim(), language });
  };

  const handleClear = () => {
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
      <LoadingOverlay 
        isVisible={generateMutation.isPending}
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
          <motion.div className="xl:col-span-2 lg:col-span-1" variants={itemVariants}>
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
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[200px] resize-none transition-all duration-300 focus:ring-2 focus:ring-[hsl(195,100%,50%)] focus:border-[hsl(195,100%,50%)] hover:border-gray-400 dark:hover:border-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400"
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
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="css">CSS</SelectItem>
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
                    onClick={handleGenerate}
                    disabled={generateMutation.isPending}
                    className="w-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl group bg-[hsl(225,95%,18%)] dark:bg-[hsl(195,100%,50%)] dark:text-[hsl(225,95%,18%)] hover:bg-[hsl(217,95%,30%)] dark:hover:bg-[hsl(195,100%,60%)]"
                  >
                    <motion.div
                      animate={generateMutation.isPending ? { rotate: 360 } : {}}
                      transition={{ duration: 1, repeat: generateMutation.isPending ? Infinity : 0, ease: "linear" }}
                    >
                      <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    </motion.div>
                    {generateMutation.isPending ? "Generating..." : "Generate"}
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
          <motion.div className="xl:col-span-3 lg:col-span-2" variants={itemVariants}>
            <CodeOutput 
              code={generatedCode}
              language={language}
              placeholder="// Click 'Generate' to see your component code here..."
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
