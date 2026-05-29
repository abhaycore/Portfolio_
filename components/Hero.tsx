'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const textIndex = useRef(0);
  const currentRoleIndex = useRef(0);

  const roles = [
    'Embedded Systems Developer',
    'AI Engineer',
    'PCB Designer',
    'Computer Vision Builder',
    'IoT Innovator',
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }

    const particles: Particle[] = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 2,
      });
    }

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 217, 255, 0.1)';
      ctx.strokeStyle = 'rgba(0, 217, 255, 0.2)';

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw lines to nearby particles
        particles.forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Typing animation
  useEffect(() => {
    const currentRole = roles[currentRoleIndex.current];
    const typingSpeed = 50;
    const deletingSpeed = 30;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (isTyping) {
        if (textIndex.current < currentRole.length) {
          setDisplayedText(currentRole.slice(0, textIndex.current + 1));
          textIndex.current++;
        } else {
          setIsTyping(false);
        }
      } else {
        if (textIndex.current > 0) {
          setDisplayedText(currentRole.slice(0, textIndex.current - 1));
          textIndex.current--;
        } else {
          currentRoleIndex.current = (currentRoleIndex.current + 1) % roles.length;
          setIsTyping(true);
        }
      }
    }, isTyping ? typingSpeed : textIndex.current === 0 ? pauseTime : deletingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isTyping]);

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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="hero-section relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />

      <div className="relative z-10 w-full">
        <motion.div
          className="text-center max-w-5xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p className="hero-greeting" variants={itemVariants}>
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1 className="hero-name" variants={itemVariants}>
            Abhay <span className="accent">Singh Chouhan</span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div className="flex items-center justify-center mb-8" variants={itemVariants}>
            <p className="hero-subtitle">
              {displayedText}
              <span className="animate-blink ml-1">|</span>
            </p>
          </motion.div>

          {/* One-liner */}
          <motion.p className="hero-tagline" variants={itemVariants}>
            Engineering the intersection of hardware and intelligence. Building futuristic
            projects with cutting-edge tech and creative vision.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="hero-cta-group mb-12" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-ghost"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect With Me
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            variants={itemVariants}
          >
            <ChevronDown size={32} className="text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
