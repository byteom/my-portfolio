import React, { useEffect, useState } from 'react';

const Header = () => {
  const [theme, setTheme] = useState('light');

  // Check for saved theme in localStorage or default to 'light'
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Toggle theme and update localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className="bg-gradient-to-r from-teal-600 to-teal-800 dark:from-gray-800 dark:to-gray-900 text-white p-8 text-center shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
          Om Singh
        </h1>
        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-lg shadow-md focus:outline-none"
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
      <p className="mt-3 text-lg md:text-xl font-medium text-gray-200 dark:text-gray-400">
        Full Stack Developer | Cloud Computing Enthusiast | Generative AI Integrator
      </p>
    </header>
  );
};

export default Header;
