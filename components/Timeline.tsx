'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  align: 'left' | 'right';
  icon: React.ReactNode;
}

export default function Timeline() {
  const events: TimelineEvent[] = [
    {
      year: '2024',
      title: 'SRMIST Enrollment',
      description: 'Started B.Tech in ECE with focus on embedded systems and AI',
      align: 'left',
      icon: <CheckCircle size={24} />,
    },
    {
      year: '2024',
      title: 'Built GestureMouse Pro',
      description:
        'Created AI-powered hand gesture virtual mouse using MediaPipe and OpenCV',
      align: 'right',
      icon: <CheckCircle size={24} />,
    },
    {
      year: '2024',
      title: 'Developed StudyAI',
      description:
        'Built intelligent learning platform with adaptive AI tutoring features',
      align: 'left',
      icon: <CheckCircle size={24} />,
    },
    {
      year: '2025',
      title: 'PCB Design Expertise',
      description:
        'Designed and manufactured PCBs for various IoT and embedded projects',
      align: 'right',
      icon: <CheckCircle size={24} />,
    },
    {
      year: '2025',
      title: 'Anti-Sleep Alarm Concept',
      description: 'Developed startup concept for driver safety using drowsiness detection',
      align: 'left',
      icon: <CheckCircle size={24} />,
    },
    {
      year: '2026',
      title: 'Advanced AI Projects',
      description: 'Building sophisticated computer vision and machine learning applications',
      align: 'right',
      icon: <CheckCircle size={24} />,
    },
    {
      year: '2028',
      title: 'Expected Graduation',
      description: 'B.Tech degree completion with industry experience',
      align: 'left',
      icon: <CheckCircle size={24} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="timeline" className="min-h-screen py-20 px-4 relative">
      <div className="glow-blob glow-blob-cyan" style={{ top: '-120px', left: '-80px' }} />
      <div className="glow-blob glow-blob-purple" style={{ bottom: '-140px', right: '-90px' }} />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-heading glow-heading" data-text="Experience Timeline">
            <span className="accent">Experience</span> Timeline
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-pink-400 to-amber-400"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            style={{ transformOrigin: 'top' }}
          />

          {/* Timeline Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className={`flex ${event.align === 'left' ? 'flex-row' : 'flex-row-reverse'}`}
                variants={itemVariants}
              >
                {/* Content */}
                <div className="w-1/2 pr-8 pl-0">
                  <motion.div
                    className={`glass-card timeline-card ${
                      event.align === 'right' ? 'text-right ml-auto' : 'mr-auto'
                    }`}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                    }}
                  >
                    <div className="timeline-year">{event.year}</div>
                    <h3 className="timeline-title">{event.title}</h3>
                    <p className="timeline-desc">{event.description}</p>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="w-0 flex justify-center items-start pt-6">
                  <motion.div
                    className="w-6 h-6 rounded-full bg-cyan-400 border-4 border-gray-900 flex items-center justify-center"
                    whileInView={{
                      scale: [1, 1.3, 1],
                      boxShadow: '0 0 20px rgba(0, 217, 255, 0.6)',
                    }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-gray-900 rounded-full" />
                  </motion.div>
                </div>

                {/* Empty space */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
