// src/components/DayNightToggle.jsx
import React, { useState, useEffect } from 'react';

const DayNightToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.classList.toggle('night-mode', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('night-mode', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full"
    >
      {theme === 'light' ? 'Switch to Night Mode' : 'Switch to Day Mode'}
    </button>
  );
};

export default DayNightToggle;
