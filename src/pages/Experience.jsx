const Experience = () => {
  const experiences = [
    {
      title: "Service Booking Platform",
      technologies: "React.js, Tailwind CSS, Git",
      description: "Built a responsive and scalable platform for service bookings, featuring real-time data integration and optimized for seamless cross-device functionality."
    },
    {
      title: "Global Weather Dashboard",
      technologies: "React, AWS Amplify",
      description: "Developed a weather tracking tool utilizing public APIs, deployed with AWS Amplify to enable real-time data access and global reach."
    },
    {
      title: "E-commerce Product Catalog System",
      technologies: "AWS S3, Lambda, API Gateway",
      description: "Engineered a scalable product catalog system using AWS S3 and Lambda, effectively managing dynamic traffic while minimizing infrastructure costs."
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-extrabold text-teal-600 text-center mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
            <p className="text-lg text-teal-600">{exp.technologies}</p>
            <p className="text-gray-600 mt-4">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
