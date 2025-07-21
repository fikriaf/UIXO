import { motion } from "framer-motion";

export default function AbstractBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        {/* Animated floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[hsl(195,100%,50%)] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Geometric Grid */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-gray-600 dark:text-gray-400" />
        </svg>
      </div>

      {/* Abstract shapes */}
      <div className="absolute inset-0 opacity-5 dark:opacity-15">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[hsl(225,95%,18%)] to-[hsl(195,100%,50%)] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-40 h-40 bg-gradient-to-br from-[hsl(195,100%,50%)] to-[hsl(207,90%,35%)] rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-br from-[hsl(207,90%,35%)] to-[hsl(225,95%,18%)] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Circuit-like lines */}
      <div className="absolute inset-0 opacity-5 dark:opacity-15">
        <svg width="100%" height="100%" className="absolute inset-0">
          <motion.path
            d="M100,200 Q400,100 800,300 T1400,200"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.path
            d="M200,400 Q600,300 1000,500 T1600,400"
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(195,100%,50%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(195,100%,50%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(195,100%,50%)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(225,95%,18%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(225,95%,18%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(225,95%,18%)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Digital rain effect */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-[hsl(195,100%,50%)] to-transparent"
            style={{
              left: `${(i * 7) % 100}%`,
            }}
            animate={{
              y: ["-100px", "100vh"],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}