const CertificationCard = ({ name, title, description, imagePath, link }) => {
    return (
      <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-4 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white text-lg font-bold text-center"
        >
          <img
            src={imagePath} // Dummy image path, replace later
            alt={name}
            className="w-full h-40 object-cover rounded-t-xl mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-white mb-4">{description}</p>
        </a>
      </div>
    );
  };
  
  export default CertificationCard;
  