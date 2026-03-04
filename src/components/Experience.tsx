import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Development Engineer I',
      company: 'Johnson Controls Pvt. Ltd.',
      duration: 'Nov 2023 - Present',
      location: 'Bengaluru, India',
      type: 'Full-time',
      achievements: [
        'Developed intuitive user interfaces using React.js, TypeScript and Redux, improving usability and URL-driven component rendering',
        'Developed responsive UI layouts using Material UI (MUI), ensuring consistent alignment of search, select-all, and action controls',
        'Added Jest-based UI tests for user flows and state-driven components',
        'Designed and implemented REST APIs in .NET Core for scan ingestion, validation, and reporting workflows',
        'Built chunk-based file upload to handle large scan files, supporting multipart uploads via Min-IO (Amazon S3 SDK)',
        'Worked on database sharding to separate regional data while maintaining relational integrity and reporting compatibility',
        'Worked on Performance Verification Tool, an enterprise application for end-to-end scan ingestion, validation, and reporting of Metasys Building Automation data, reducing manual verification effort and improving reporting accuracy through automation',
      ],
      skills: ['React.js', 'TypeScript', 'Redux', '.NET Core', 'Material UI', 'Jest', 'Min-IO', 'Azure SQL']
    },
    {
      title: 'Intern',
      company: 'Johnson Controls Pvt. Ltd.',
      duration: 'Feb 2023 - Oct 2023',
      location: 'Bengaluru, India',
      type: 'Internship',
      achievements: [
        'Built an internal platform using React, Redux, and .NET Core to automate scan reporting and validation workflows',
        'Delivered features used by 100+ internal users, reducing manual reporting effort by approximately 30%',
        'Gained hands-on experience with enterprise-grade .NET architecture, REST API design, SQL databases, and cloud deployments',
      ],
      skills: ['React.js', 'Redux', '.NET Core', 'SQL', 'Azure']
    },
  ];

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="section-padding bg-white">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <motion.div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg card-hover border border-gray-100">
                    <div className="flex items-center mb-3">
                      <FaBriefcase className="text-blue-600 mr-3" />
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'Full-time' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-3">
                      {exp.company}
                    </h4>

                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 text-gray-600">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-700 text-sm leading-relaxed flex items-start">
                          <span className="text-blue-500 mr-2 mt-1.5">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <motion.div
            className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">2+</div>
            <div className="text-gray-700">Years of Experience</div>
          </motion.div>
          <motion.div
            className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
            <div className="text-gray-700">Users Impacted</div>
          </motion.div>
          <motion.div
            className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl font-bold text-pink-600 mb-2">30%</div>
            <div className="text-gray-700">Efficiency Improvement</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;