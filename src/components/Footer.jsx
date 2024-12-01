import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-12 px-4 sm:px-8">
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Footer Text */}
        <p className="text-lg font-semibold mb-6 text-gray-600 dark:text-gray-300">
          &copy; 2024 Om Singh. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mb-6">
          <a
            href="https://github.com/byteom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-teal-500 transition-all duration-300 transform hover:scale-125 dark:text-gray-300 dark:hover:text-teal-400"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/in/byteom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-teal-500 transition-all duration-300 transform hover:scale-125 dark:text-gray-300 dark:hover:text-teal-400"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://twitter.com/byteom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-teal-500 transition-all duration-300 transform hover:scale-125 dark:text-gray-300 dark:hover:text-teal-400"
          >
            <FaTwitter size={32} />
          </a>
        </div>

        {/* Download Resume Button */}
        <a
          href="/path-to-your-resume.pdf" // Update with actual resume path
          download
          className="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-110 dark:bg-teal-700 dark:hover:bg-teal-800"
        >
          Download Resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;
