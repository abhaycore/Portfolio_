'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalLine {
  type: 'command' | 'output';
  text: string;
  delay: number;
}

export default function About() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const terminalContent: TerminalLine[] = [
    { type: 'command', text: '> whoami', delay: 0 },
    {
      type: 'output',
      text: 'Abhay Singh Chouhan — ECE Student @ SRMIST, Chennai',
      delay: 800,
    },
    { type: 'command', text: '> cat about.txt', delay: 1600 },
    {
      type: 'output',
      text: 'B.Tech Electronics & Communication Engineering',
      delay: 2400,
    },
    { type: 'output', text: 'Graduation: 2028', delay: 2900 },
    {
      type: 'output',
      text: 'Focus: Embedded Systems | AI | PCB Design | IoT | Computer Vision',
      delay: 3400,
    },
    { type: 'command', text: '> ls interests/', delay: 4200 },
    {
      type: 'output',
      text: 'embedded_systems/  pcb_design/  computer_vision/',
      delay: 5000,
    },
    {
      type: 'output',
      text: 'arduino/  ai_applications/  automation/  game_dev/',
      delay: 5500,
    },
    { type: 'command', text: '> cat philosophy.txt', delay: 6300 },
    {
      type: 'output',
      text: '"I don&apos;t just write code — I build experiences.',
      delay: 7100,
    },
    {
      type: 'output',
      text: ' Hardware meets software. Logic meets creativity.',
      delay: 7700,
    },
    {
      type: 'output',
      text: ' Every project is a step toward something remarkable."',
      delay: 8300,
    },
    { type: 'command', text: '> status', delay: 9100 },
    { type: 'output', text: 'Currently: Building futuristic projects 🚀', delay: 9900 },
    {
      type: 'output',
      text: 'Open to: Collaborations, internships, innovative ideas',
      delay: 10500,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => {
      if (terminalRef.current) {
        observer.unobserve(terminalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    terminalContent.forEach((line) => {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, line]);
      }, line.delay);

      return () => clearTimeout(timer);
    });
  }, [isInView]);

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative">
      <div className="glow-blob glow-blob-purple" style={{ top: '-100px', right: '-120px' }} />
      <div className="glow-blob glow-blob-cyan" style={{ bottom: '-120px', left: '-80px' }} />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-heading glow-heading" data-text="About Me">
            <span className="accent">About</span> Me
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        {/* Terminal */}
        <motion.div
          ref={terminalRef}
          className="terminal-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Terminal header */}
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <div className="terminal-title">abhay@portfolio:~</div>
          </div>

          {/* Terminal content */}
          <div className="terminal-body">
            {lines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={line.type === 'command' ? 'terminal-command' : 'terminal-output'}
              >
                {line.text}
                {line.type === 'command' && index === lines.length - 1 && (
                  <span className="animate-blink ml-1">▌</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Info Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-6">
            <h3 className="about-card-heading">Background</h3>
            <p className="about-card-text">
              I&apos;m a passionate ECE student at SRMIST Chennai, driven by the intersection of
              hardware and software. My journey spans from PCB design to AI-powered applications,
              always seeking to push boundaries.
            </p>
          </div>

          <div className="glass-card p-6">
            <h3 className="about-card-heading">Approach</h3>
            <p className="about-card-text">
              I believe in innovative problem-solving that combines technical excellence with
              creative vision. Every project is an opportunity to learn, experiment, and build
              something that matters.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
