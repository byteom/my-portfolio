import CertificationCard from '../components/CertificationCard';

const Certifications = () => {
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

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-extrabold text-teal-600 mb-6 text-center">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {certifications.map((cert, idx) => (
          <CertificationCard
            key={idx}
            name={cert.name}
            title={cert.title}
            description={cert.description}
            imagePath={cert.imagePath}
            link={cert.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
