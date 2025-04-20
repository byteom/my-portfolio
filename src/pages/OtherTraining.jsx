import { useState } from 'react';

const OtherTraining = () => {
  const [modalData, setModalData] = useState({
    isOpen: false,
    image: null,
    title: '',
    subtitle: ''
  });

  const trainings = [
    {
      name: 'Cloud Computing with AWS',
      title: 'Cloud Computing with AWS – GokBoru Bootcamp',
      description: 'In-depth bootcamp covering AWS fundamentals, cloud architecture, and deployment strategies.',
      imagePath: 'https://i.postimg.cc/cH4ccY0f/image.png',
      link: 'https://gokboru.in',
    },
    {
      name: 'Data Science with Python',
      title: 'Machine Learning & Data Science – Python',
      description: 'Hands-on training in Python for data analysis, visualization, and machine learning techniques.',
      imagePath: 'https://i.postimg.cc/6qJHggHM/image.png',
      link: '#',
    }
    
     
  ];

  const openModal = (image, training) => {
    setModalData({
      isOpen: true,
      image,
      title: training.title,
      subtitle: training.name
    });
  };

  const closeModal = () => {
    setModalData(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen font-mono">
      <h2 className="text-3xl font-extrabold text-teal-600 dark:text-teal-300 mb-8 text-center">
        Other Training & Workshops
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {trainings.map((training, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
          >
            <div 
              className="relative h-48 bg-gray-200 dark:bg-gray-700 cursor-pointer"
              onClick={() => openModal(training.imagePath, training)}
            >
              <img
                src={training.imagePath}
                alt={training.title}
                className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-teal-600/80 text-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1 line-clamp-2">
                {training.title}
              </h3>
              <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-2">
                {training.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {training.description}
              </p>
              
              <a
                href={training.link}
                className="inline-block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Integrated Modal */}
      {modalData.isOpen && (
        <div 
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-teal-300 text-3xl transition-colors"
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img
                src={modalData.image}
                alt={modalData.title}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-4 bg-gray-800 text-center">
                <h3 className="text-xl font-bold text-white">{modalData.title}</h3>
                <p className="text-teal-400 mt-1">{modalData.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OtherTraining;