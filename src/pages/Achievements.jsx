import { motion } from "framer-motion";

const achievements = [
  {
    title: "1st Rank - WEB-A-STAN Hackathon",
    desc: "Secured 1st rank in WEB-A-STAN hackathon organized by LPU, Phagwara.",
    badge: "🏆 1st Place",
    icon: "💻",
  },
  {
    title: "Top 10 - Code-A-Haunt",
    desc: "Ranked in top 10 in Code-A-Haunt state-level hackathon by LPU, Phagwara.",
    badge: "🔥 Top 10",
    icon: "🧠",
  },
  {
    title: "Hacktoberfest 2025",
    desc: "Contributed to open-source and completed all 4 PRs in Hacktoberfest 2025.",
    badge: "🎯 4 PRs Done",
    icon: "🌐",
  },
  {
    title: "Contributor - GSSoC 2025",
    desc: "Successfully completed 10 PRs in GirlScript Summer of Code 2025.",
    badge: "🔧 10 PRs",
    icon: "👩‍💻",
  },
];

const Achievements = () => {
  return (
    <div className="p-6 md:p-12 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 min-h-screen font-mono">
      <h2 className="text-4xl font-extrabold text-center text-teal-600 dark:text-teal-300 mb-12">
        🚀 Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative p-6 bg-white/30 dark:bg-gray-700/30 backdrop-blur-xl border border-white/20 dark:border-gray-500/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{item.desc}</p>
            <span className="inline-block bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              {item.badge}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
