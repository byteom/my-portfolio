import React, { useEffect, useState } from 'react';

const Header = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
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
    <header className="p-6 md:p-10 text-center shadow-lg dark:bg-gray-800 bg-gray-100 font-mono">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-6">
        {/* GitHub Profile Image */}
        <img
          src="https://github.com/byteom.png"
          alt="Om Singh"
          className="w-32 h-32 rounded-full shadow-lg border-4 border-teal-500"
        />

        {/* Title and Description */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-teal-600 dark:text-white drop-shadow-lg">
            Om Singh
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-2">
            Full Stack Developer | Cloud Computing Enthusiast | Generative AI Integrator
          </p>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-500 dark:hover:bg-teal-600 transition duration-300"
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>

      {/* Resume Download */}
      <a
        href="https://drive.google.com/file/d/1RMjoTx1KfTpIg2uD3gsSCq13NsjWJ5vs/view?usp=sharing"
        download
        className="mt-4 inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 dark:bg-teal-700 dark:hover:bg-teal-800"
      >
        Download Resume
      </a>
    </header>
  );
};

export default Header;
