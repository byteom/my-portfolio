import CertificationCard from '../components/CertificationCard';

const OtherTraining = () => {
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

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-extrabold text-teal-600 text-center mb-12">
        Other Training & Workshops
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainings.map((training, idx) => (
          <CertificationCard
            key={idx}
            name={training.name}
            title={training.title}
            description={training.description}
            imagePath={training.imagePath}
            link={training.link}
          />
        ))}
      </div>
    </div>
  );
}

export default OtherTraining;
