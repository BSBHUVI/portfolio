import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaNpm
} from 'react-icons/fa';

const Contact: React.FC = () => {

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-blue-600" />,
      label: 'Email',
      value: 'bhuvansbhuvan467@gmail.com',
      href: 'mailto:bhuvansbhuvan467@gmail.com'
    },
    {
      icon: <FaPhone className="text-green-600" />,
      label: 'Phone',
      value: '+91 96320 42071',
      href: 'tel:+919632042071'
    },
    {
      icon: <FaMapMarkerAlt className="text-red-600" />,
      label: 'Location',
      value: 'Bengaluru, India',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      href: 'https://github.com/BSBHUVI',
      color: 'hover:text-gray-700'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sce19cs090',
      color: 'hover:text-blue-600'
    },
    {
      icon: <FaNpm />,
      label: 'NPM',
      href: 'https://www.npmjs.com/package/bhuvi-quickcmd',
      color: 'hover:text-red-600'
    }
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
    <section id="contact" className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. Let's connect!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Let's talk!
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              I'm currently open to Software Development opportunities, particularly in 
              frontend development with React/TypeScript or full-stack roles. I'd love to 
              hear about your project and discuss how we can work together.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 bg-white rounded-xl shadow-lg card-hover"
                  whileHover={{ x: 10 }}
                >
                  <div className="text-2xl mr-4">{info.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-800">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-gray-600">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-4xl text-gray-600 ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;