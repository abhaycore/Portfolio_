'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  const contactLinks = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'abhaysinghchouhan3234@gmail.com',
      href: 'mailto:abhaysinghchouhan3234@gmail.com',
      color: 'text-cyan-400',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Abhay Singh Chouhan',
      href: 'https://www.linkedin.com/in/abhay-singh-chouhan-2b52aa353',
      color: 'text-blue-400',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: '@abhaycore',
      href: 'https://github.com/abhaycore',
      color: 'text-pink-400',
    },
  ];

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Name is required' });
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Valid email is required' });
      return false;
    }
    if (!formData.subject.trim()) {
      setStatus({ type: 'error', message: 'Subject is required' });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Message is required' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Simulate sending (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
    <section id="contact" className="min-h-screen py-20 px-4 relative">
      <div className="glow-blob glow-blob-purple" style={{ top: '-120px', left: '-80px' }} />
      <div className="glow-blob glow-blob-cyan" style={{ bottom: '-120px', right: '-90px' }} />
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
            data-text="Let's Build Something Remarkable"
          >
            <span className="accent">Let&apos;s Build</span> Something Remarkable
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="contact-form-heading">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label className="contact-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="contact-input"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label className="contact-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="contact-input"
                />
              </motion.div>

              {/* Subject */}
              <motion.div variants={itemVariants}>
                <label className="contact-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="contact-input"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="contact-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={4}
                  className="contact-input contact-textarea"
                />
              </motion.div>

              {/* Status Message */}
              {status.type !== 'idle' && (
                <motion.div
                  className={`p-3 rounded-lg flex items-center gap-2 ${
                    status.type === 'success'
                      ? 'bg-green-400/10 border border-green-400/30 text-green-400'
                      : status.type === 'error'
                      ? 'bg-red-400/10 border border-red-400/30 text-red-400'
                      : 'bg-cyan-400/10 border border-cyan-400/30 text-cyan-400'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.type === 'success' ? (
                    <CheckCircle size={18} />
                  ) : status.type === 'error' ? (
                    <AlertCircle size={18} />
                  ) : (
                    <div className="w-4 h-4 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
                  )}
                  <span className="text-sm">{status.message}</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status.type === 'loading'}
                className="btn-primary w-full justify-center disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status.type === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send size={18} />
                    Send Message
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 className="contact-info-heading" variants={itemVariants}>
              Get In Touch
            </motion.h3>

            {/* Contact Links */}
            <div className="space-y-6 mb-8">
              {contactLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card contact-link-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <div className={`contact-link-icon ${link.color}`}>{link.icon}</div>
                  <h4 className="contact-link-label">
                    {link.label}
                  </h4>
                  <p className="contact-link-value">{link.value}</p>
                </motion.a>
              ))}
            </div>

            {/* Quick CTA */}
            <motion.div className="glass-card p-6" variants={itemVariants}>
              <p className="text-gray-300 mb-4">
                Whether you have a question or want to collaborate, feel free to reach out.
                I&apos;m always interested in hearing about new opportunities and innovative projects.
              </p>
              <p className="contact-response-time">
                Response time: Usually within 24 hours
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
