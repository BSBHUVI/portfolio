import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaNpm, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: 'https://github.com/BSBHUVI',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/sce19cs090',
      label: 'LinkedIn'
    },
    {
      icon: <FaNpm />,
      href: 'https://www.npmjs.com/package/bhuvi-quickcmd',
      label: 'NPM'
    },
    {
      icon: <FaEnvelope />,
      href: 'mailto:bhuvansbhuvan467@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Bhuvan S
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Software Development Engineer passionate about creating efficient, 
                scalable solutions with modern web technologies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3 text-gray-300">
                <div>
                  <strong>Email:</strong>
                  <br />
                  <a 
                    href="mailto:bhuvansbhuvan467@gmail.com"
                    className="hover:text-white transition-colors duration-300"
                  >
                    bhuvansbhuvan467@gmail.com
                  </a>
                </div>
                <div>
                  <strong>Phone:</strong>
                  <br />
                  <a 
                    href="tel:+919632042071"
                    className="hover:text-white transition-colors duration-300"
                  >
                    +91 96320 42071
                  </a>
                </div>
                <div>
                  <strong>Location:</strong>
                  <br />
                  Bengaluru, India
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              © {currentYear} Bhuvan S. Made with{' '}
              <motion.span
                className="text-red-500 inline-block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <FaHeart className="inline" />
              </motion.span>{' '}
              using React & TypeScript
            </motion.p>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full text-white hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                title="Back to top"
              >
                <FaArrowUp />
              </motion.button>
            </motion.div>
          </div>

          {/* Status Indicator */}
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for new opportunities</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
    </footer>
  );
};

export default Footer;