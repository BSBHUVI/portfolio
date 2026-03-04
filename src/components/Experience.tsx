import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience: React.FC = () => {
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
  const experiences = [
    {
      title: 'Software Development Engineer I',
      company: 'Johnson Controls Pvt. Ltd.',
      duration: 'Nov 2023 - Present',
      location: 'Pune, India',
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
      location: 'Pune, India',
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
        staggerChildren: shouldUseSimpleAnimations ? 0.1 : 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: shouldUseSimpleAnimations ? 0 : -50, y: shouldUseSimpleAnimations ? 20 : 0, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldUseSimpleAnimations ? 0.3 : 0.5,
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
        viewport={{ once: true, amount: shouldUseSimpleAnimations ? 0.1 : 0.3 }}
      >
        <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 md:border-4 border-white shadow-lg z-10 mt-2 md:mt-0"></div>

                {/* Content */}
                <motion.div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-6 lg:pr-8' : 'md:pl-6 lg:pl-8'
                  }`}
                  whileHover={shouldUseSimpleAnimations ? {} : { scale: 1.02 }}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl shadow-lg card-hover border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                      <div className="flex items-center">
                        <FaBriefcase className="text-blue-600 mr-2 text-sm" />
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'Full-time' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-base md:text-lg font-semibold text-blue-600 mb-3">
                      {exp.company}
                    </h4>

                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 mb-4 text-gray-600">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-xs" />
                        <span className="text-xs md:text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-xs" />
                        <span className="text-xs md:text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-700 text-xs md:text-sm leading-relaxed flex items-start">
                          <span className="text-blue-500 mr-2 mt-1 text-xs">•</span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                          whileHover={shouldUseSimpleAnimations ? {} : { scale: 1.1 }}
                          transition={{ duration: shouldUseSimpleAnimations ? 0.1 : 0.2 }}
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
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
        >
          <motion.div
            className="text-center p-4 md:p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl"
            variants={itemVariants}
            whileHover={shouldUseSimpleAnimations ? {} : { scale: 1.05 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">2+</div>
            <div className="text-gray-700 text-sm md:text-base">Years of Experience</div>
          </motion.div>
          <motion.div
            className="text-center p-4 md:p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl"
            variants={itemVariants}
            whileHover={shouldUseSimpleAnimations ? {} : { scale: 1.05 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">100+</div>
            <div className="text-gray-700 text-sm md:text-base">Users Impacted</div>
          </motion.div>
          <motion.div
            className="text-center p-4 md:p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl"
            variants={itemVariants}
            whileHover={shouldUseSimpleAnimations ? {} : { scale: 1.05 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">30%</div>
            <div className="text-gray-700 text-sm md:text-base">Efficiency Improvement</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;