const ProjectCard = ({ title, description, technologies, link }) => {
    return (
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-transform duration-300 ease-in-out">
        <h3 className="text-2xl font-extrabold text-teal-400 mb-2">{title}</h3>
        <p className="text-sm font-medium text-gray-400 mb-4">{technologies}</p>
        <p className="text-gray-300 mb-6">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 font-semibold mt-4 inline-block hover:text-teal-300 transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    );
  };
  
  export default ProjectCard;