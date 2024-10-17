const Experience = () => {
    const experiences = [
      {
        title: "Service Booking Website",
        technologies: "React.js, Tailwind CSS, Git",
        description: "Developed a user-friendly, scalable service booking platform with real-time data fetching and a seamless experience across devices."
      },
      {
        title: "Weather Dashboard",
        technologies: "React, AWS Amplify",
        description: "Created a weather tracking application utilizing public APIs, deployed using AWS Amplify for real-time data and global accessibility."
      },
      {
        title: "E-commerce Product Catalog",
        technologies: "AWS S3, Lambda, API Gateway",
        description: "Designed and deployed a scalable product catalog system using AWS S3 and Lambda, reducing infrastructure costs while handling dynamic loads."
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
  