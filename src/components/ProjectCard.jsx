import React from 'react';

const ProjectCard = ({ title, description, technologies, image, liveLink, githubLink }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col font-mono transition hover:shadow-xl">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{description}</p>
          <p className="text-xs text-teal-600 dark:text-teal-400 mb-4">{technologies}</p>
        </div>
        <div className="flex justify-between gap-4 mt-auto">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 text-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
          >
            Live Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 text-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
