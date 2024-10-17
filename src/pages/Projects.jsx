import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Service Booking Website",
      description: "A scalable platform for booking various services with a seamless user experience and real-time data fetching.",
      technologies: "React.js, Tailwind CSS, Git",
      link: "https://github.com/om-singh/service-booking-website"
    },
    {
      title: "Weather Dashboard",
      description: "A weather tracking app with real-time data using public APIs, deployed via AWS Amplify for global accessibility.",
      technologies: "React, AWS Amplify",
      link: "https://github.com/om-singh/weather-dashboard"
    },
    {
      title: "E-commerce Product Catalog",
      description: "Scalable product catalog system using AWS S3 and Lambda for dynamic data, designed to reduce infrastructure costs.",
      technologies: "AWS S3, Lambda, API Gateway",
      link: "https://github.com/om-singh/e-commerce-catalog"
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-extrabold text-teal-600 text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
