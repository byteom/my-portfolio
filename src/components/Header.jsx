import React, { useEffect, useState } from 'react';

const Header = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    console.log('Saved theme:', savedTheme); // Debugging
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className="p-8 text-center shadow-lg dark:bg-gray-800 bg-smokey-cream">
      <div className="flex justify-between items-center mb-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-teal-600 dark:text-white drop-shadow-lg">
          Om Singh
        </h1>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-500 dark:hover:bg-teal-600 transition duration-300"
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
      {/* Description */}
      <p className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400">
        Full Stack Developer | Cloud Computing Enthusiast | Generative AI Integrator
      </p>
      
      {/* Download Resume Button */}
      <a
        href="/path-to-your-resume.pdf" // Replace with your actual resume path
        download
        className="mt-6 inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 dark:bg-teal-700 dark:hover:bg-teal-800"
      >
        Download Resume
      </a>
    </header>
  );
};

export default Header;
