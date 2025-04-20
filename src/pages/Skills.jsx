import {
  FaLinux, FaReact, FaDocker, FaGit, FaAws,
} from "react-icons/fa";
import {
  SiCplusplus, SiJavascript, SiTailwindcss, SiMongodb, SiMysql,
  SiOpenai, SiKubernetes, SiHtml5, SiCss3, SiC, SiGithub, SiExpress,
} from "react-icons/si";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { RiDatabase2Line } from "react-icons/ri";

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: <SiCplusplus />, color: "hover:shadow-blue-400" },
      { name: "C", icon: <SiC />, color: "hover:shadow-gray-400" },
      { name: "JavaScript", icon: <SiJavascript />, color: "hover:shadow-yellow-400" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <SiHtml5 />, color: "hover:shadow-orange-400" },
      { name: "CSS", icon: <SiCss3 />, color: "hover:shadow-blue-400" },
      { name: "React", icon: <FaReact />, color: "hover:shadow-blue-300" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "hover:shadow-teal-400" },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      { name: "AWS", icon: <FaAws />, color: "hover:shadow-orange-400" },
      { name: "Cloud Computing", icon: "☁️", color: "hover:shadow-sky-400" },
      { name: "Microservices", icon: "📦", color: "hover:shadow-purple-400" },
      { name: "API", icon: "🔗", color: "hover:shadow-indigo-400" },
      { name: "Express", icon: <SiExpress />, color: "hover:shadow-gray-500" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: <FaGit />, color: "hover:shadow-red-400" },
      { name: "GitHub", icon: <SiGithub />, color: "hover:shadow-gray-400" },
      { name: "Docker", icon: <FaDocker />, color: "hover:shadow-blue-500" },
      { name: "Kubernetes", icon: <SiKubernetes />, color: "hover:shadow-blue-300" },
    ],
  },
  {
    title: "Other Technologies",
    skills: [
      { name: "DSA", icon: <MdOutlineDeveloperMode />, color: "hover:shadow-purple-400" },
      { name: "AI", icon: "🧠", color: "hover:shadow-pink-400" },
      { name: "OpenAI", icon: <SiOpenai />, color: "hover:shadow-purple-400" },
      { name: "Vector DB", icon: <RiDatabase2Line />, color: "hover:shadow-green-400" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-extrabold text-teal-600 dark:text-teal-300 text-center mb-8">
        Skills
      </h2>

      {categories.map((category, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4">{category.title}</h3>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {category.skills.map((skill, sidx) => (
              <li
                key={sidx}
                className={`bg-white dark:bg-gray-800 p-2 rounded-lg text-center text-sm font-mono text-gray-800 dark:text-gray-200 transition-shadow duration-300 hover:text-teal-600 ${skill.color} hover:shadow-md`}
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="text-xl">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
