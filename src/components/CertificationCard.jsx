import { useState } from 'react';

const CertificationCard = ({ name, title, description, imagePath, link }) => {
  const [showImage, setShowImage] = useState(false);

  const handleImageClick = () => setShowImage(true);
  const handleCloseImage = () => setShowImage(false);

  return (
    <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-4 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-white text-lg font-bold text-center"
      >
        <div onClick={handleImageClick} className="relative">
          <img
            src={imagePath}
            alt={name}
            className="w-full h-40 object-cover rounded-t-xl mb-4 cursor-pointer"
          />
          {/* Image click icon */}
          <div className="absolute top-2 right-2 text-white bg-teal-600 hover:bg-teal-700 p-2 rounded-full">
            <i className="fas fa-search"></i> {/* Search icon */}
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white mb-4">{description}</p>
      </a>

      {/* Image Modal */}
      {showImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg">
            <img src={imagePath} alt={name} className="max-w-full max-h-full" />
            <button
              onClick={handleCloseImage}
              className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationCard;
