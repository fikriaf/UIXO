import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <motion.nav 
      className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 cursor-pointer">
              <motion.h1 
                className="flex gap-2 text-2xl font-bold text-[hsl(225,95%,18%)] dark:text-[hsl(195,100%,50%)]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="w-10 h-10">
                  <img src="/logo-nobg.png" alt="" />
                </div>
                <div>UIXO</div>
              </motion.h1>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant={location === "/" ? "default" : "ghost"}
                  className="text-white hover:text-white transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Button>
              </motion.div>
            </Link>
            <Link href="/generator">
              <motion.div
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg bg-[hsl(225,95%,18%)] dark:bg-[hsl(195,100%,50%)] dark:text-[hsl(225,95%,18%)] hover:bg-[hsl(217,95%,30%)] dark:hover:bg-[hsl(195,100%,60%)]"
                >
                  Try Generator
                </Button>
              </motion.div>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
