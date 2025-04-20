import { useState } from 'react';

const Certifications = () => {
  const [modalData, setModalData] = useState({
    isOpen: false,
    image: null,
    title: '',
    subtitle: ''
  });

  const certifications = [
    {
      name: 'GitHub Foundation',
      title: 'GitHub Foundation',
      description: 'Learn GitHub fundamentals, version control, branching, and collaboration workflows.',
      imagePath: 'https://i.postimg.cc/ZnnyWxZD/image.png',
      link: '#',
    },
    {
      name: 'MERN Stack',
      title: 'MERN Stack Development',
      description: 'Master full-stack web development using MongoDB, Express.js, React.js, and Node.js.',
      imagePath: 'https://i.postimg.cc/3R1mBpQt/image.png',
      link: '#',
    },
    {
      name: 'Cloud Computing with AWS',
      title: 'AWS Cloud',
      description: 'Learn the fundamentals of cloud computing and core AWS services and architecture.',
      imagePath: 'https://i.postimg.cc/v8PS8xx7/image.png',
      link: '#',
    },
    {
      name: 'RC Xtreme 3.0 Workshop',
      title: 'RC Xtreme 3.0 – 15hr RC Making Workshop',
      description: 'Hands-on workshop on building and understanding remote-controlled (RC) cars.',
      imagePath: 'https://i.postimg.cc/1tL04FwX/image.png',
      link: '#',
    },
    {
      name: 'DSA with C++',
      title: 'Data Structures & Algorithms in C++',
      description: 'Strengthen your problem-solving skills with key DSA concepts implemented in C++.',
      imagePath: 'https://i.postimg.cc/x82kW3Lv/image.png',
      link: '#',
    },
    {
      name: 'Generative AI',
      title: 'Generative AI for Everyone',
      description: 'Explore how generative AI works and how it’s applied in real-world scenarios.',
      imagePath: 'https://i.postimg.cc/yxLVvmjY/image.png',
      link: '#',
    },
    {
      name: 'Object-Oriented Programming (C++)',
      title: 'Object-Oriented Programming in C++',
      description: 'Understand core OOP principles like classes, inheritance, and encapsulation using C++.',
      imagePath: 'https://i.postimg.cc/d1vwFHSV/image.png',
      link: '#',
    },
    {
      name: 'Python Bootcamp',
      title: 'Python Programming Bootcamp',
      description: 'Kickstart your journey in Python with hands-on practice and foundational concepts.',
      imagePath: 'https://i.postimg.cc/bwhhkFpH/image.png',
      link: '#',
    },
  ];

  const openModal = (image, cert) => {
    setModalData({
      isOpen: true,
      image,
      title: cert.title,
      subtitle: cert.name
    });
  };

  const closeModal = () => {
    setModalData(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen font-mono">
      <h2 className="text-3xl font-extrabold text-teal-600 dark:text-teal-300 mb-8 text-center">
        Certifications
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
          >
            <div 
              className="relative h-48 bg-gray-200 dark:bg-gray-700 cursor-pointer"
              onClick={() => openModal(cert.imagePath, cert)}
            >
              <img
                src={cert.imagePath}
                alt={cert.title}
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
                {cert.title}
              </h3>
              <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-2">
                {cert.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {cert.description}
              </p>
              
              <a
                href={cert.link}
                className="inline-block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
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

export default Certifications;