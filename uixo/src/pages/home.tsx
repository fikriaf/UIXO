import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Zap, Code, CheckCircle, ArrowRight } from "lucide-react";
import { motion, easeInOut, easeOut } from "framer-motion";
import RotatingCoreWithOrbit from "@/components/RotatingCore";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easeInOut
    }
  };

  return (
    <div className="min-h-screen">
      <RotatingCoreWithOrbit />
      {/* Hero Section */}
      <div className="relative uixo-gradient dark:uixo-gradient-dark overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10 dark:opacity-20"></div>
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              Generate your next<br />
              <motion.span 
                style={{ color: 'hsl(195, 100%, 50%)' }}
                animate={floatAnimation}
                className="inline-block"
              >
                UI component
              </motion.span><br />
              in seconds
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              UIXO is an AI-powered application that transforms your component descriptions into production-ready code in React TSX, HTML, Python, JavaScript, and more.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <Link href="/generator">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button 
                    className="px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl group"
                    style={{ 
                      backgroundColor: 'hsl(195, 100%, 50%)',
                      color: 'hsl(225, 95%, 18%)'
                    }}
                  >
                    Try Now 
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </Link>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline"
                  className="border-2 border-white text-dark hover:bg-white hover:text-[hsl(225,95%,18%)] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div 
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose UIXO?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Transform your ideas into code faster than ever before with our AI-powered component generator.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                color: 'hsl(195, 100%, 50%)',
                title: 'Lightning Fast',
                description: 'Generate components in seconds, not hours. Save time and focus on what matters.',
                delay: 0
              },
              {
                icon: Code,
                color: 'hsl(207, 90%, 35%)',
                title: 'Multi-Language',
                description: 'Support for React TSX, HTML, Python, JavaScript, CSS, and more languages.',
                delay: 0.2
              },
              {
                icon: CheckCircle,
                color: 'hsl(225, 95%, 18%)',
                title: 'Production Ready',
                description: 'Clean, optimized code that\'s ready to use in your projects immediately.',
                delay: 0.4
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: feature.color }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[hsl(225,95%,18%)] dark:group-hover:text-[hsl(195,100%,50%)] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
