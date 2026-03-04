import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaJsSquare, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaDatabase, 
  FaAws, 
  FaDocker, 
  FaGitAlt 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiRedux, 
  SiDotnet, 
  SiCsharp, 
  SiMicrosoftazure, 
  SiRedis, 
  SiJest 
} from 'react-icons/si';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaReact className="text-blue-500" />,
      skills: [
        { name: 'React.js', level: 90, icon: <FaReact className="text-blue-500" /> },
        { name: 'TypeScript', level: 85, icon: <SiTypescript className="text-blue-600" /> },
        { name: 'JavaScript', level: 88, icon: <FaJsSquare className="text-yellow-500" /> },
        { name: 'Redux', level: 80, icon: <SiRedux className="text-purple-600" /> },
        { name: 'HTML5', level: 92, icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', level: 85, icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'Jest', level: 75, icon: <SiJest className="text-red-500" /> },
      ],
    },
    {
      title: 'Backend',
      icon: <SiDotnet className="text-purple-600" />,
      skills: [
        { name: '.NET Core', level: 85, icon: <SiDotnet className="text-purple-600" /> },
        { name: 'C#', level: 88, icon: <SiCsharp className="text-green-600" /> },
        { name: 'Node.js', level: 75, icon: <FaNodeJs className="text-green-500" /> },
        { name: 'SQL', level: 80, icon: <FaDatabase className="text-blue-600" /> },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: <SiMicrosoftazure className="text-blue-600" />,
      skills: [
        { name: 'Azure SQL', level: 82, icon: <FaDatabase className="text-blue-500" /> },
        { name: 'Redis', level: 70, icon: <SiRedis className="text-red-500" /> },
        { name: 'Azure', level: 75, icon: <SiMicrosoftazure className="text-blue-600" /> },
        { name: 'Min-IO', level: 70, icon: <FaAws className="text-orange-500" /> },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: <FaDocker className="text-blue-500" />,
      skills: [
        { name: 'Docker', level: 75, icon: <FaDocker className="text-blue-500" /> },
        { name: 'Git', level: 85, icon: <FaGitAlt className="text-orange-500" /> },
        { name: 'Azure DevOps', level: 70, icon: <SiMicrosoftazure className="text-blue-600" /> },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="skills" className="section-padding bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white p-6 rounded-xl shadow-lg card-hover"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div className="mt-16" variants={itemVariants}>
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg card-hover"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <SiDotnet className="text-3xl text-purple-600 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">Microsoft Foundational C#</h4>
                  <p className="text-gray-600 text-sm">C# fundamentals, OOP, .NET development</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg card-hover"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <FaDatabase className="text-3xl text-blue-600 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">Coursera Beginning SQL Server</h4>
                  <p className="text-gray-600 text-sm">SQL Server fundamentals, database design</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;