import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaNpm } from 'react-icons/fa';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          Hi, I'm{' '}
          <span className="gradient-text">Bhuvan S</span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-gray-600 mb-4"
          variants={itemVariants}
        >
          Software Development Engineer
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-gray-500 mb-8 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Passionate about building production-grade UI and backend systems using React, TypeScript, .NET, and SQL.
          Experienced in end-to-end feature development from UI to database design.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6 mb-8"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/BSBHUVI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 hover:text-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sce19cs090"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 hover:text-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:bhuvansbhuvan467@gmail.com"
            className="text-3xl text-gray-700 hover:text-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="https://www.npmjs.com/package/bhuvi-quickcmd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 hover:text-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaNpm />
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#projects"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-16"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="text-gray-400 text-sm">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto mt-2 relative">
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mx-auto"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </motion.div>
      </motion.div>


    </section>
  );
};

export default Hero;