const Skills = () => {
    const skills = [
      { name: "JavaScript", color: "hover:shadow-yellow-400" },
      { name: "React.js", color: "hover:shadow-blue-400" },
      { name: "Node.js", color: "hover:shadow-green-400" },
      { name: "MongoDB", color: "hover:shadow-green-500" },
      { name: "SQL", color: "hover:shadow-indigo-400" },
      { name: "Docker", color: "hover:shadow-blue-500" },
      { name: "AWS Cloud", color: "hover:shadow-orange-400" },
      { name: "CI/CD", color: "hover:shadow-teal-400" },
      { name: "Git", color: "hover:shadow-red-400" },
      { name: "Generative AI", color: "hover:shadow-purple-400" },
    ];
  
    return (
      <div className="p-8 bg-gray-100 min-h-screen">
        <h2 className="text-4xl font-extrabold text-teal-600 text-center mb-8">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <li
              key={idx}
              className={`bg-white p-4 rounded-xl text-center text-lg font-semibold text-gray-800 transition-shadow duration-500 hover:text-teal-600 ${skill.color} hover:shadow-lg`}
            >
              <span className="block skill-text" data-text={skill.name}>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Skills;
  