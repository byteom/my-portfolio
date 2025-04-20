import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
     
    {
      title: "CertifyO – E-Learning & Assessment Platform",
      description:
        "A feature-rich platform for exams, hackathons, competitions, resume building, AI mock interviews, and more.",
      technologies:
        "React, Express.js, Supabase, PostgreSQL, Cloudflare, TypeScript, JavaScript",
      image: "https://i.postimg.cc/44KzDWVg/image.png",
      liveLink: "https://certifyo.tech/",
      githubLink: "#",
    },
    {
      title: "AlgoVidya – DSA Practice Portal",
      description:
        "Interactive platform to practice Data Structures and Algorithms with animations and clean UI.",
      technologies: "React, Tailwind CSS, GSAP",
      image: "https://i.postimg.cc/kgw66SKs/image.png",
      liveLink: "https://algovidya.netlify.app/",
      githubLink: "https://github.com/byteom/algovidya",
    },
    {
      title: "ServicesCo – Booking Website",
      description:
        "A modern and scalable service booking platform with real-time UI updates and seamless UX.",
      technologies: "React, Tailwind CSS, Git",
      image: "https://i.postimg.cc/K85LPwSn/image.png",
      liveLink: "https://main--servicesco.netlify.app/",
      githubLink: "https://github.com/byteom/ServicesWebsite",
    },
    {
      title: "FlexiBot – PDF Chatbot",
      description:
        "AI-powered chatbot that allows users to interact with PDFs using LLMs like Claude and Llama 3 through AWS Bedrock.",
      technologies: "Python, AWS Bedrock, Boto3, Langchain",
      image: "https://i.postimg.cc/NfzZgJPk/image.png",
      liveLink: "#",
      githubLink:
        "https://github.com/byteom/Reportify-Medical-Report-Rag-chatbot",
    },
    {
      title: "AlgoPatterns – Algorithm Visualizer",
      description:
        "Visualize classic algorithms step-by-step in the browser. Great for learning and teaching.",
      technologies: "HTML, CSS, JavaScript",
      image: "https://i.postimg.cc/PxS2SJgQ/image.png",
      liveLink: "https://algo-patterns.vercel.app/",
      githubLink: "https://github.com/byteom/AlgoPatterns",
    },
  ];

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen font-mono">
      <h2 className="text-4xl font-extrabold text-teal-600 dark:text-teal-300 text-center mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
``