'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, GitBranch, Star } from 'lucide-react';
import { fetchGitHubStats, GitHubRepo } from '@/lib/github';

interface GitHubStats {
  user: {
    login: string;
    name: string;
    avatar_url: string;
    followers: number;
    public_repos: number;
  };
  repos: GitHubRepo[];
  totalStars: number;
  languages: Record<string, number>;
  lastUpdated: string;
}

export default function GitHubSection() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGitHubStats();
      setStats(data);
      setLoading(false);
    };

    fetchData();
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
      transition: { duration: 0.6 },
    },
  };

  if (loading) {
    return (
      <section id="github" className="min-h-screen py-20 px-4 relative">
        <div className="glow-blob glow-blob-cyan" style={{ top: '-120px', right: '-80px' }} />
        <div className="glow-blob glow-blob-purple" style={{ bottom: '-120px', left: '-90px' }} />
        <div className="section-container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card inline-block px-4 py-2">
              <p className="text-cyan-400 font-mono animate-pulse">Loading GitHub data...</p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (!stats) {
    return null;
  }

  const topLanguages = Object.entries(stats.languages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  return (
    <section id="github" className="min-h-screen py-20 px-4 relative">
      <div className="glow-blob glow-blob-cyan" style={{ top: '-120px', right: '-80px' }} />
      <div className="glow-blob glow-blob-purple" style={{ bottom: '-120px', left: '-90px' }} />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-heading glow-heading" data-text="GitHub Activity">
            <span className="accent">GitHub</span> Activity
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { label: 'Repositories', value: stats.user.public_repos, icon: <GitBranch /> },
            { label: 'Total Stars', value: stats.totalStars, icon: <Star /> },
            { label: 'Followers', value: stats.user.followers, icon: <Github /> },
            { label: 'Repositories', value: stats.repos.length, icon: <Github /> },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-6 text-center"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
              }}
            >
              <motion.div
                className="github-stat-icon"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className="github-stat-value"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <p className="github-stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top Languages */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="github-sub-heading">Top Languages</h3>
            <div className="space-y-3">
              {topLanguages.map(([lang, count], idx) => (
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-300 font-mono text-sm">{lang}</span>
                    <span className="text-cyan-400 text-sm">{count}</span>
                  </div>
                  <motion.div
                    className="h-2 bg-gray-800 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.15 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-pink-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(count / topLanguages[0][1]) * 100}%` }}
                      transition={{ delay: 0.2 + idx * 0.1, duration: 0.8 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Repos */}
          <motion.div
            className="lg:col-span-2 glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="github-sub-heading">Recent Repositories</h3>
            <div className="space-y-3">
              {stats.repos.slice(0, 5).map((repo, idx) => (
                <motion.a
                  key={repo.id}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 border border-transparent hover:border-cyan-400/30 transition-all block group"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {repo.name}
                      </h4>
                      <p className="text-gray-400 text-xs line-clamp-1">
                        {repo.description}
                      </p>
                    </div>
                    {repo.stargazers_count > 0 && (
                      <div className="flex items-center gap-1 ml-2 text-yellow-400 text-sm">
                        <Star size={14} />
                        {repo.stargazers_count}
                      </div>
                    )}
                  </div>
                  {repo.language && (
                    <div className="mt-2">
                      <span className="text-xs px-2 py-1 rounded bg-gray-800/50 text-gray-300">
                        {repo.language}
                      </span>
                    </div>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Last Updated */}
        <motion.div
          className="text-center mt-12 text-gray-400 text-sm font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          Last synced: {new Date(stats.lastUpdated).toLocaleTimeString()}
        </motion.div>
      </div>
    </section>
  );
}
