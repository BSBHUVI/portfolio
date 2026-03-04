import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaNpm } from 'react-icons/fa';
import { SiNodedotjs, SiTypescript, SiJavascript } from 'react-icons/si';

const Projects: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldUseSimpleAnimations = isMobile || prefersReducedMotion;
  const projects = [
    {
      title: 'QuickCMD',
      subtitle: 'NPM Package - Creator & Maintainer',
      description: 'A Node.js CLI tool that allows developers to define short aliases for long terminal commands. Simplifies repetitive workflows involving Git, NPM, Docker, build scripts, and SSH commands.',
      image: '/api/placeholder/400/300',
      technologies: ['Node.js', 'CLI', 'NPM', 'JavaScript'],
      features: [
        '600+ overall downloads',
        'Command aliasing system',
        'Git workflow automation',
        'Docker command shortcuts',
        'SSH command management',
        'Open-source on GitHub'
      ],
      links: {
        github: 'https://github.com/BSBHUVI/quickcmd',
        npm: 'https://www.npmjs.com/package/bhuvi-quickcmd',
        demo: null
      },
      stats: {
        downloads: '600+',
        stars: '15+',
        version: 'v1.2.0'
      },
      color: 'from-green-400 to-blue-500'
    },
    {
      title: 'Performance Verification Tool',
      subtitle: 'Enterprise Application',
      description: 'An enterprise application for end-to-end scan ingestion, validation, and reporting of Metasys Building Automation data, reducing manual verification effort and improving reporting accuracy.',
      image: '/api/placeholder/400/300',
      technologies: ['React.js', 'TypeScript', '.NET Core', 'Azure SQL', 'Material UI'],
      features: [
        'Scan ingestion automation',
        'Data validation workflows',
        'Real-time reporting',
        'Multi-user support',
        'Cloud deployment',
        '100+ active users'
      ],
      links: {
        github: null,
        npm: null,
        demo: null
      },
      stats: {
        users: '100+',
        efficiency: '30%',
        uptime: '99.9%'
      },
      color: 'from-purple-400 to-pink-500'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldUseSimpleAnimations ? 0.1 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: shouldUseSimpleAnimations ? 10 : 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldUseSimpleAnimations ? 0.3 : 0.5,
      },
    },
  };

  const getIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'node.js':
        return <SiNodedotjs className="text-green-500" />;
      case 'typescript':
        return <SiTypescript className="text-blue-500" />;
      case 'javascript':
        return <SiJavascript className="text-yellow-500" />;
      default:
        return <span className="w-4 h-4 bg-gray-400 rounded-full"></span>;
    }
  };

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: shouldUseSimpleAnimations ? 0.1 : 0.3 }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Showcase of my development journey and technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
              variants={itemVariants}
              whileHover={shouldUseSimpleAnimations ? {} : { y: -10 }}
            >
              {/* Project Header */}
              <div className={`h-32 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition-colors"
                      whileHover={shouldUseSimpleAnimations ? {} : { scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                    </motion.a>
                  )}
                  {project.links.npm && (
                    <motion.a
                      href={project.links.npm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition-colors"
                      whileHover={shouldUseSimpleAnimations ? {} : { scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaNpm />
                    </motion.a>
                  )}
                  {project.links.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition-colors"
                      whileHover={shouldUseSimpleAnimations ? {} : { scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.subtitle}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700"
                    >
                      {getIcon(tech)}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200">
                  {Object.entries(project.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                {(project.links.github || project.links.npm) && (
                  <div className="mt-4 flex space-x-2">
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-900 text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaGithub className="inline mr-2" />
                        Code
                      </motion.a>
                    )}
                    {project.links.npm && (
                      <motion.a
                        href={project.links.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-red-500 text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaNpm className="inline mr-2" />
                        NPM
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Interested in collaborating?
          </h3>
          <p className="text-gray-600 mb-6">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <motion.a
            href="#contact"
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;