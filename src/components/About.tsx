import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-white">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <motion.div
              className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-300 to-blue-300 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Personal Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FaMapMarkerAlt className="text-blue-600" />
                    <span className="text-gray-700">Bengaluru, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-blue-600" />
                    <span className="text-gray-700">+91 96320 42071</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-blue-600" />
                    <span className="text-gray-700">bhuvansbhuvan467@gmail.com</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['English', 'Hindi', 'Telugu', 'Kannada'].map((lang) => (
                      <span
                        key={lang}
                        className="bg-white/70 px-3 py-1 rounded-full text-sm text-gray-700"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Software Development Engineer
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Software Development Engineer I (SDE-1) with 2+ years of experience building 
              production-grade UI and backend systems using React, TypeScript, .NET, and SQL. 
              Strong focus on UI state management, API design and large file uploads.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Experienced in owning features end-to-end from UI development and state management 
              to database design, stored procedures, and cloud deployment. Passionate about 
              creating efficient, scalable solutions that deliver real business value.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-blue-600">2+</div>
                <div className="text-gray-600">Years Experience</div>
              </motion.div>
              <motion.div
                className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-purple-600">100+</div>
                <div className="text-gray-600">Users Impacted</div>
              </motion.div>
            </div>

            <motion.div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Education</h4>
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800">Sri Sairam College of Engineering</h5>
                <p className="text-gray-600">Bachelor's in Computer Science and Engineering</p>
                <p className="text-sm text-gray-500">CGPA: 8.2</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;