import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-10 px-4 sm:px-8 font-mono">
      <div className="max-w-screen-lg mx-auto text-center space-y-6">
        {/* Footer Text */}
        <p className="text-base font-medium text-gray-600 dark:text-gray-300">
          &copy; 2024 Om Singh. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/byteom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition transform hover:scale-125"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/byteom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition transform hover:scale-125"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://twitter.com/byteom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition transform hover:scale-125"
          >
            <FaTwitter size={28} />
          </a>
        </div>

        {/* Download Resume Button */}
        <a
          href="/path-to-your-resume.pdf" // Update this
          download
          className="inline-block px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800 transition transform hover:scale-105"
        >
          Download Resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;
