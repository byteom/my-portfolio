import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 text-center shadow-lg">
      <p className="text-lg font-semibold neon animate-pulse">&copy; 2024 Om Singh. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-6">
        <a
          href="https://github.com/om-singh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-teal-400 transition-colors duration-300 neon"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://linkedin.com/in/om-singh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-teal-400 transition-colors duration-300 neon"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://twitter.com/om_singh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-teal-400 transition-colors duration-300 neon"
        >
          <FaTwitter size={32} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
