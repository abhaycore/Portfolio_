'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  category: 'AI' | 'Hardware' | 'Game' | 'App';
  image?: string;
  github?: string;
  live?: string;
  impact: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'GestureMouse Pro',
    description: 'AI-powered virtual mouse using hand gesture recognition',
    fullDescription:
      'Advanced hand gesture recognition system that tracks hand movements in real-time to control computer cursor and perform clicks. Built with MediaPipe for hand tracking and OpenCV for image processing.',
    category: 'AI',
    tags: ['Computer Vision', 'AI', 'Python'],
    technologies: ['Python', 'MediaPipe', 'OpenCV', 'PyAutoGUI'],
    github: 'https://github.com/abhaycore',
    impact: 'Enables touchless control with 95% accuracy',
  },
  {
    id: 2,
    title: 'StudyAI',
    description: 'AI-powered personalized study assistant platform',
    fullDescription:
      'Intelligent tutoring system that adapts learning paths based on student performance. Uses AI to generate custom quizzes, summarize content, and provide real-time feedback.',
    category: 'App',
    tags: ['AI', 'Web', 'Education'],
    technologies: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL'],
    github: 'https://github.com/abhaycore',
    impact: 'Improves learning efficiency by 40%',
  },
  {
    id: 3,
    title: 'Tower of Hanoi AI',
    description: 'Animated AI puzzle solver with visual step-by-step solution',
    fullDescription:
      'Interactive implementation of the classic Tower of Hanoi puzzle with recursive algorithm visualization. Features smooth animations showing each move and optimal solution path.',
    category: 'Game',
    tags: ['Algorithm', 'Visualization', 'Web'],
    technologies: ['React', 'Framer Motion', 'TypeScript'],
    github: 'https://github.com/abhaycore',
    impact: 'Educational tool used to understand recursion',
  },
  {
    id: 4,
    title: 'NeonPongX',
    description: 'Futuristic next-gen Pong game with neon aesthetics',
    fullDescription:
      'Modern interpretation of classic Pong with cyberpunk neon design. Features AI opponents, particle effects, and immersive audio feedback.',
    category: 'Game',
    tags: ['Game Dev', 'Web', 'Interactive'],
    technologies: ['Canvas API', 'JavaScript', 'Web Audio API'],
    github: 'https://github.com/abhaycore',
    impact: 'Demonstrates real-time game mechanics and particle systems',
  },
  {
    id: 5,
    title: 'Sudoku Solver AI',
    description: 'Intelligent Sudoku solver with backtracking algorithm',
    fullDescription:
      'High-performance Sudoku solver using backtracking algorithm. Includes puzzle generator, step-by-step visualization, and difficulty levels.',
    category: 'AI',
    tags: ['Algorithm', 'Optimization', 'Python'],
    technologies: ['Python', 'Pygame', 'Algorithms'],
    github: 'https://github.com/abhaycore',
    impact: 'Solves any valid Sudoku in milliseconds',
  },
  {
    id: 6,
    title: 'Pocket Pilot App',
    description: 'Smart productivity assistant for mobile devices',
    fullDescription:
      'Cross-platform productivity app that helps users manage tasks, set reminders, and track habits. Features voice commands and AI-powered suggestions.',
    category: 'App',
    tags: ['Mobile', 'Productivity', 'AI'],
    technologies: ['React Native', 'Firebase', 'TensorFlow Lite'],
    github: 'https://github.com/abhaycore',
    impact: 'Used by 500+ users for daily productivity',
  },
  {
    id: 7,
    title: 'Line Following Robot',
    description: 'Autonomous robot with IR sensor-based path tracking',
    fullDescription:
      'Hardware robotics project featuring an Arduino-based robot that autonomously follows black lines on white surfaces. Uses IR sensors for precise line detection.',
    category: 'Hardware',
    tags: ['Embedded', 'Robotics', 'Arduino'],
    technologies: ['Arduino', 'C++', 'IR Sensors', 'Motors'],
    impact: 'Foundation for autonomous navigation systems',
  },
  {
    id: 8,
    title: 'Anti-Sleep Alarm for Drivers',
    description: 'PCB-based driver safety system (startup concept)',
    fullDescription:
      'Innovative PCB design for detecting driver drowsiness through eye closure detection. Includes custom circuit design, sensor integration, and alert mechanism.',
    category: 'Hardware',
    tags: ['PCB Design', 'IoT', 'Safety'],
    technologies: ['PCB Design', 'Arduino', 'Sensors', 'IoT'],
    impact: 'Potential to reduce drowsy driving accidents by 30%',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'All' | 'AI' | 'Hardware' | 'Game' | 'App'>('All');

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

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

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
      <div className="glow-blob glow-blob-cyan" style={{ top: '-120px', right: '-100px' }} />
      <div className="glow-blob glow-blob-purple" style={{ bottom: '-140px', left: '-90px' }} />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-heading glow-heading" data-text="Featured Projects">
            <span className="accent">Featured</span> Projects
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {['All', 'AI', 'Hardware', 'Game', 'App'].map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`btn-ghost filter-button ${filter === cat ? 'filter-button-active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group"
              >
                <motion.div
                  className="glass-card project-card"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
                  }}
                >
                  {/* Category Tag */}
                  <div className="mb-4">
                    <span className="project-card-tag">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="project-card-title group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="project-card-desc line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="tech-stack-badges mb-4">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="tech-badge"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="project-card-buttons">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost flex-1 justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} /> GitHub
                    </motion.a>
                    <motion.button
                      className="btn-primary flex-1 justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Details
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal */}
            <motion.div
              className="relative max-w-2xl w-full glass-card p-8 max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>

              {/* Content */}
              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono text-cyan-400 border border-cyan-400/30 bg-cyan-400/5">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-cyan-400">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-400">{selectedProject.description}</p>
                </div>

                {/* Full Description */}
                <div className="mb-6 pb-6 border-b border-cyan-400/20">
                  <h3 className="text-lg font-bold text-white mb-3">Overview</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {selectedProject.fullDescription}
                  </p>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 mb-2">Impact</h4>
                    <p className="text-gray-300 text-sm">{selectedProject.impact}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-3">Technologies Used</h3>
                  <div className="tech-stack-badges">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="tech-badge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                  <div className="project-card-buttons">
                  {selectedProject.github && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="btn-ghost flex-1 justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} /> View on GitHub
                    </motion.a>
                  )}
                  {selectedProject.live && (
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="btn-primary flex-1 justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} /> Visit Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
