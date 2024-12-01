const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-center py-12 px-4">
      <h1 className="text-5xl font-extrabold text-teal-600 dark:text-teal-300 mb-6 animate__animated animate__fadeIn">
        Welcome to My Portfolio
      </h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
        I am <span className="font-semibold text-teal-600">Om Singh</span>, a Full Stack Developer passionate about building scalable applications and integrating AI-driven solutions to solve real-world problems. With a deep focus on efficiency, scalability, and clean code, I aim to deliver solutions that are not only functional but also future-proof.
      </p>

      {/* Technical Thoughts Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-teal-500 dark:text-teal-300 mb-4 animate__animated animate__fadeIn animate__delay-1s">
          My Approach to Technology
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          In today's fast-paced tech landscape, staying adaptable is key. I believe in combining proven engineering principles with emerging technologies like cloud computing, AI, and serverless architectures to deliver optimal solutions. I focus on writing clean, maintainable code and leveraging automation to improve efficiency.
        </p>
      </div>

      {/* Core Skills Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-teal-500 dark:text-teal-300 mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Core Skills & Technologies
        </h2>
        <ul className="flex flex-wrap justify-center gap-6 text-lg text-gray-700 dark:text-gray-300">
          <li className="p-4 bg-white shadow-lg rounded-lg dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-xl">
            <span className="font-semibold text-teal-600">React.js</span>
          </li>
          <li className="p-4 bg-white shadow-lg rounded-lg dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-xl">
            <span className="font-semibold text-teal-600">Node.js</span>
          </li>
          <li className="p-4 bg-white shadow-lg rounded-lg dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-xl">
            <span className="font-semibold text-teal-600">AWS Cloud</span>
          </li>
          <li className="p-4 bg-white shadow-lg rounded-lg dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-xl">
            <span className="font-semibold text-teal-600">Tailwind CSS</span>
          </li>
          <li className="p-4 bg-white shadow-lg rounded-lg dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-xl">
            <span className="font-semibold text-teal-600">AI/ML Integration</span>
          </li>
          <li className="p-4 bg-white shadow-lg rounded-lg dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-xl">
            <span className="font-semibold text-teal-600">Git & DevOps</span>
          </li>
        </ul>
      </div>

      {/* Download Resume Button */}
      <div className="mt-12">
        <a
          href="/path-to-resume.pdf" // Replace with actual link to your resume
          className="inline-block text-lg px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 transform hover:scale-105"
          download
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
