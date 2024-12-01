import React, { useState } from 'react';
import Modal from '../components/Modal';

const Certifications = () => {
  const [modalImage, setModalImage] = useState(null);

  const certifications = [
    {
      name: 'GitHub Foundation',
      title: 'GitHub Basics and Workflow',
      description: 'Learn the basics of GitHub, version control, and collaborative development.',
      imagePath: 'https://i.postimg.cc/ZnnyWxZD/image.png', // Replace this with the actual path
      link: '#',
    },
    {
      name: 'AWS Cloud Computing',
      title: 'Introduction to AWS Cloud',
      description: 'An overview of AWS services and cloud infrastructure.',
      imagePath: 'https://i.postimg.cc/ZnnyWxZD/image.png', // Replace this with the actual path
      link: '#',
    },
    {
      name: 'Mastering Data Structures & Algorithms',
      title: 'DSA Mastery',
      description: 'In-depth knowledge of data structures and algorithms.',
      imagePath: '/path-to-dsa-image.jpg', // Replace this with the actual path
      link: '#',
    },
    {
      name: 'Machine Learning & AI',
      title: 'AI & ML Fundamentals',
      description: 'A complete course on AI and Machine Learning techniques.',
      imagePath: '/path-to-ml-ai-image.jpg', // Replace this with the actual path
      link: '#',
    },
  ];

  // Function to open the modal with the clicked image
  const openModal = (image) => {
    setModalImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-extrabold text-teal-600 dark:text-teal-300 mb-6 text-center">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="bg-teal-100 dark:bg-teal-800 shadow-md rounded-lg p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg w-full h-72 flex flex-col justify-between"
          >
            <h3 className="text-xl font-extrabold text-gray-800 dark:text-gray-200 mb-2">{cert.title}</h3>
            <p className="text-sm font-semibold text-teal-600 dark:text-teal-300">{cert.name}</p>
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-4">{cert.description}</p>

            {/* Image with click event to open modal */}
            <div
              className="cursor-pointer mt-4 flex justify-center"
              onClick={() => openModal(cert.imagePath)}
            >
              <img
                src={cert.imagePath}
                alt={cert.title}
                className="w-32 h-32 object-contain rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>

            {/* Link to view certification */}
            <a
              href={cert.link}
              className="text-teal-600 dark:text-teal-300 mt-4 inline-block text-xs font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certification
            </a>
          </div>
        ))}
      </div>

      {/* Modal to view the clicked image */}
      <Modal image={modalImage} onClose={closeModal} />
    </div>
  );
};

export default Certifications;
