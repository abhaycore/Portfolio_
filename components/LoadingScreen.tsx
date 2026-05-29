'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 30;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  const name = 'ABHAY SINGH';

  return (
    <motion.div
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-gradient-to-br from-[#050508] via-[#0a0a0f] to-[#050508] overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: -window.innerHeight,
              opacity: [0.3, 0, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Glowing logo circle */}
        <motion.div
          className="mb-8 w-24 h-24 rounded-full border-2 border-cyan-400 flex items-center justify-center"
          animate={{
            boxShadow: [
              '0 0 20px rgba(0, 217, 255, 0.5)',
              '0 0 40px rgba(0, 217, 255, 1)',
              '0 0 20px rgba(0, 217, 255, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          variants={itemVariants}
        >
          <span className="text-4xl font-bold text-cyan-400" style={{ fontFamily: "'Orbitron', sans-serif" }}>AS</span>
        </motion.div>

        {/* Animated name */}
        <motion.div className="flex justify-center gap-0 mb-8" variants={itemVariants}>
          {name.split('').map((letter, i) => (
            <motion.span
              key={i}
              className="text-4xl font-bold text-cyan-400 glow-text"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
              custom={i}
              variants={letterVariants}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-cyan-300 text-sm font-mono mb-12"
          variants={itemVariants}
        >
          Initializing Portfolio System...
        </motion.p>

        {/* Progress bar */}
        <motion.div
          className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden"
          variants={itemVariants}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-cyan-300"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Loading percentage */}
        <motion.p
          className="text-cyan-300 text-xs mt-4 font-mono"
          variants={itemVariants}
        >
          {Math.min(Math.floor(progress), 100)}%
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
