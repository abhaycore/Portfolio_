'use client';

import { motion } from 'framer-motion';
import { Cpu, Zap, Code, Palette } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Embedded & Hardware',
      icon: <Cpu size={24} />,
      color: 'cyan',
      skills: [
        { name: 'Arduino', level: 95, category: 'hardware' },
        { name: 'C/C++', level: 90, category: 'hardware' },
        { name: 'PCB Design', level: 85, category: 'hardware' },
        { name: 'Circuit Design', level: 85, category: 'hardware' },
        { name: 'Sensor Integration', level: 88, category: 'hardware' },
        { name: 'Motor Control', level: 82, category: 'hardware' },
      ],
    },
    {
      title: 'AI & Computer Vision',
      icon: <Zap size={24} />,
      color: 'pink',
      skills: [
        { name: 'Python', level: 92, category: 'ai' },
        { name: 'OpenCV', level: 88, category: 'ai' },
        { name: 'MediaPipe', level: 90, category: 'ai' },
        { name: 'Computer Vision', level: 87, category: 'ai' },
        { name: 'AI Workflows', level: 85, category: 'ai' },
        { name: 'ML Models', level: 80, category: 'ai' },
      ],
    },
    {
      title: 'Software & Web',
      icon: <Code size={24} />,
      color: 'blue',
      skills: [
        { name: 'JavaScript', level: 90, category: 'web' },
        { name: 'Next.js', level: 88, category: 'web' },
        { name: 'React', level: 92, category: 'web' },
        { name: 'TypeScript', level: 85, category: 'web' },
        { name: 'Tailwind CSS', level: 93, category: 'web' },
        { name: 'Git/GitHub', level: 91, category: 'web' },
      ],
    },
    {
      title: 'Design & Creative',
      icon: <Palette size={24} />,
      color: 'amber',
      skills: [
        { name: 'UI/UX Design', level: 85, category: 'design' },
        { name: 'Figma', level: 82, category: 'design' },
        { name: 'Canva', level: 88, category: 'design' },
        { name: 'Animations', level: 90, category: 'design' },
        { name: 'Creative Coding', level: 87, category: 'design' },
      ],
    },
  ];

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
      transition: { duration: 0.6 },
    },
  };

  const colorMap: Record<string, { text: string; border: string; bg: string }> = {
    cyan: { text: 'text-cyan-400', border: 'border-cyan-400/30', bg: 'from-cyan-400' },
    pink: { text: 'text-pink-400', border: 'border-pink-400/30', bg: 'from-pink-400' },
    blue: { text: 'text-blue-400', border: 'border-blue-400/30', bg: 'from-blue-400' },
    amber: { text: 'text-amber-400', border: 'border-amber-400/30', bg: 'from-amber-400' },
  };

  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative">
      <div className="glow-blob glow-blob-cyan" style={{ top: '-120px', left: '-120px' }} />
      <div className="glow-blob glow-blob-purple" style={{ bottom: '-80px', right: '-80px' }} />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            className="section-heading glow-heading"
            data-text="Skills & Tech Stack"
          >
            <span className="accent">Skills</span> & Tech Stack
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, catIdx) => {
            const color = colorMap[category.color as keyof typeof colorMap];

            return (
              <motion.div
                key={catIdx}
                className="glass-card p-6"
                variants={itemVariants}
              >
                {/* Category Header */}
                <div className="skill-category-title">
                  <div className={colorMap[category.color].text}>
                    {category.icon}
                  </div>
                  <h3>{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-bar-track">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.2 + idx * 0.1, duration: 1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="skill-percent">{skill.level}%</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Languages', value: '10+' },
            { label: 'Technologies', value: '20+' },
            { label: 'Projects', value: '8+' },
            { label: 'Years Exp', value: '3+' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-4 text-center"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
            >
              <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
