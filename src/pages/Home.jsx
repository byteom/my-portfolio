import { FaReact, FaNodeJs, FaAws, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiOpenai } from "react-icons/si";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-center py-12 px-4 font-mono">
      <h1 className="text-5xl font-extrabold text-teal-600 dark:text-teal-300 mb-6 animate__animated animate__fadeIn">
        Welcome to My Portfolio
      </h1>

      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
        I am <span className="font-bold text-teal-600">Om Singh</span>, a Full Stack Developer passionate about building scalable applications and integrating AI-driven solutions to solve real-world problems. With a deep focus on efficiency, scalability, and clean code, I aim to deliver solutions that are not only functional but also future-proof.
      </p>

      {/* Technical Thoughts Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-teal-500 dark:text-teal-300 mb-4 animate__animated animate__fadeIn animate__delay-1s">
          My Approach to Technology
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          In today's fast-paced tech landscape, staying adaptable is key. I believe in combining proven engineering principles with emerging technologies like cloud computing, AI, and serverless architectures to deliver optimal solutions. I focus on writing clean, maintainable code and leveraging automation to improve efficiency.
        </p>
      </div>

      {/* Core Skills Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-teal-500 dark:text-teal-300 mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Core Skills & Technologies
        </h2>
        <ul className="flex flex-wrap justify-center gap-6 text-lg text-gray-700 dark:text-gray-300">
          <li className="w-36 p-4 bg-white shadow-md rounded-xl dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-xl">
            <FaReact className="text-3xl mx-auto mb-2 text-blue-400" />
            <span>React.js</span>
          </li>
          <li className="w-36 p-4 bg-white shadow-md rounded-xl dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-xl">
            <FaNodeJs className="text-3xl mx-auto mb-2 text-green-500" />
            <span>Node.js</span>
          </li>
          <li className="w-36 p-4 bg-white shadow-md rounded-xl dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-xl">
            <FaAws className="text-3xl mx-auto mb-2 text-orange-400" />
            <span>AWS Cloud</span>
          </li>
          <li className="w-36 p-4 bg-white shadow-md rounded-xl dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-xl">
            <SiTailwindcss className="text-3xl mx-auto mb-2 text-teal-400" />
            <span>Tailwind CSS</span>
          </li>
          <li className="w-36 p-4 bg-white shadow-md rounded-xl dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-xl">
            <SiOpenai className="text-3xl mx-auto mb-2 text-purple-400" />
            <span>AI/ML</span>
          </li>
          <li className="w-36 p-4 bg-white shadow-md rounded-xl dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-xl">
            <FaGitAlt className="text-3xl mx-auto mb-2 text-red-400" />
            <span>Git & DevOps</span>
          </li>
        </ul>
      </div>

      {/* Download Resume Button */}
      <div className="mt-16">
        <a
          href="/path-to-resume.pdf" // Replace with your real resume path
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
