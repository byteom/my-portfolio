import { useState } from 'react';
import Modal from '../components/Modal';

const OtherTraining = () => {
  const [modalImage, setModalImage] = useState(null);

  const trainings = [
    {
      name: 'Cloud Computing With AWS',
      title: 'Cloud Computing With AWS By GokBoru.in',
      description: 'Comprehensive bootcamp covering front-end and back-end web development.',
      imagePath: 'https://i.postimg.cc/cH4ccY0f/image.png', // Replace with actual image path
      link: 'https://gokboru.in',
    },
    {
      name: 'Python for Data Science',
      title: 'Data Science with Python',
      description: 'Learn how to use Python for data analysis, visualization, and machine learning.',
      imagePath: '/path-to-python-image.jpg', // Replace with actual image path
      link: 'https://coursera.org/python-data-science',
    },
    {
      name: 'React Advanced Concepts',
      title: 'React Mastery',
      description: 'Deep dive into advanced concepts of React to build dynamic applications.',
      imagePath: '/path-to-react-image.jpg', // Replace with actual image path
      link: 'https://frontendmasters.com/react-advanced',
    },
    {
      name: 'Serverless Applications on AWS',
      title: 'Serverless on AWS',
      description: 'Build scalable, serverless applications using AWS Lambda and related services.',
      imagePath: '/path-to-serverless-image.jpg', // Replace with actual image path
      link: 'https://aws.amazon.com/training/',
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
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-extrabold text-teal-600 dark:text-teal-300 mb-6 text-center">Other Training & Workshops</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {trainings.map((training, idx) => (
          <div
            key={idx}
            className="bg-teal-100 dark:bg-teal-800 shadow-md rounded-lg p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg w-full h-auto flex flex-col justify-between"
          >
            <h3 className="text-lg font-extrabold text-gray-800 dark:text-gray-200 mb-2">{training.title}</h3>
            <p className="text-sm font-semibold text-teal-600 dark:text-teal-300">{training.name}</p>
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-4">{training.description}</p>

            {/* Image with click event to open modal */}
            <div
              className="cursor-pointer mt-4 flex justify-center"
              onClick={() => openModal(training.imagePath)}
            >
              <img
                src={training.imagePath}
                alt={training.title}
                className="w-28 h-28 object-contain rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>

            {/* Link to view training */}
            <div className="mt-4 text-center">
              <a
                href={training.link}
                className="text-teal-600 dark:text-teal-300 text-sm font-semibold underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Training
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal to view the clicked image */}
      <Modal image={modalImage} onClose={closeModal} />
    </div>
  );
};

export default OtherTraining;
