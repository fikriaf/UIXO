
import React from 'react';
import { motion } from 'framer-motion';

const CoolBg = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-cyan-400/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rotate-45" animate={{
            rotate: [45, 135,225, 315, 405],
            scale: [1, 1.1, 1, 0.9, 1],
          }} transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-lg"
          animate={{
            y: [0, -30, 0],
            x: [0, 20,0],
            rotate: [0,90, 180, 270, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        /> <motion.div
          className="absolute bottom-1/3 right-1/3 w-40 h-40 border-4 border-pink-500/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Pulsing Circles */} <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/10 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-400/10 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-pink-400/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Floating Code Brackets */} <motion.div
          className="absolute top-1/4 left-1/6 text-6xl text-cyan-400/20 font-mono"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'{'}
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/6 text-6xl text-pink-400/20 font-mono"
          animate={{
            y: [0, 20,0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          {'}'}
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 left-1/5 text-4xl text-purple-400/20 font-mono"
          animate={{
            x: [0, 15, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        >
          {'<>'}
        </motion.div>
        
        {/* UI Component Icons */}
        <motion.div
          className="absolute top-1/5 right-1/3 text-2xl text-cyan-300/30"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          ⬜
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/5 right-1/4 text-3xl text-pink-300/30"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ○
        </motion.div>
        
        <motion.div
          className="absolute top-2/5 left-1/4 text-xl text-purple-300/30"
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          △
        </motion.div>
        
        {/* Grid Lines Effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{ top: `${(i + 1) * 5}%` }}
              animate={{
                width: ['0%', '100%', '0%'], }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Particle Effects */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
       {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[--uixo-primary] via-[--uixo-hover] to-[--uixo-accent] bg-clip-text text-transparent drop-shadow-[0_0_20px_var(--uixo-secondary)] mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }} transition={{ duration:1 }}
          > UIXO </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          > Auto Generate UI Components
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              Get Started </button>
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105">
              View Components
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
};

export default CoolBg