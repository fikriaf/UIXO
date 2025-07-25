import { motion } from "framer-motion";

export default function AbstractBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

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

      {/* Digital rain effect */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-20 bg-gradient-to-b from-transparent via-[hsl(195,100%,50%)] to-transparent"
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