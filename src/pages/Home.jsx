const Home = () => {
    return (
      <div className="text-center py-12 bg-gray-100 min-h-screen">
        <h1 className="text-5xl font-extrabold text-teal-600 mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          I am <span className="font-semibold">Om Singh</span>, a Full Stack Developer passionate about building scalable applications and integrating AI-driven solutions to solve real-world problems. With a deep focus on efficiency, scalability, and clean code, I aim to deliver solutions that are not only functional but also future-proof.
        </p>
  
        {/* Technical Thoughts Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-teal-500 mb-4">
            My Approach to Technology
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            In today's fast-paced tech landscape, staying adaptable is key. I believe in combining proven engineering principles with emerging technologies like cloud computing, AI, and serverless architectures to deliver optimal solutions. I focus on writing clean, maintainable code and leveraging automation to improve efficiency.
          </p>
        </div>
  
        {/* Core Skills Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-teal-500 mb-6">
            Core Skills & Technologies
          </h2>
          <ul className="flex flex-wrap justify-center space-x-4 text-lg text-gray-700">
            <li className="p-2 bg-white shadow-lg rounded-lg">
              <span className="font-semibold text-teal-600">React.js</span>
            </li>
            <li className="p-2 bg-white shadow-lg rounded-lg">
              <span className="font-semibold text-teal-600">Node.js</span>
            </li>
            <li className="p-2 bg-white shadow-lg rounded-lg">
              <span className="font-semibold text-teal-600">AWS Cloud</span>
            </li>
            <li className="p-2 bg-white shadow-lg rounded-lg">
              <span className="font-semibold text-teal-600">Tailwind CSS</span>
            </li>
            <li className="p-2 bg-white shadow-lg rounded-lg">
              <span className="font-semibold text-teal-600">AI/ML Integration</span>
            </li>
            <li className="p-2 bg-white shadow-lg rounded-lg">
              <span className="font-semibold text-teal-600">Git & DevOps</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Home;
  