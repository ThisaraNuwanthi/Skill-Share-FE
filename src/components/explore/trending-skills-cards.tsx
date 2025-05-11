const skills = [
  {
    id: "ml",
    icon: "💻",
    title: "Machine Learning",
    learners: "1.2k learners",
    trending: true,
  },
  {
    id: "python",
    icon: "🐍",
    title: "Python Basics",
    learners: "900 learners",
    trending: true,
  },
  {
    id: "food",
    icon: "📸",
    title: "Food Photography",
    learners: "750 learners",
    trending: false,
  },
  {
    id: "crafts",
    icon: "🧶",
    title: "DIY Crafts",
    learners: "620 learners",
    trending: false,
  },
];

export function TrendingSkillsCards() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">🔥 Trending Skills</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {skills.map((skill) => (
          <div key={skill.id} className="rounded-lg bg-white p-4 shadow-sm">
            <div className="mb-2 text-center text-2xl">{skill.icon}</div>
            <h3 className="mb-1 text-center font-medium">{skill.title}</h3>
            <p className="text-center text-sm text-gray-500">
              {skill.learners} {skill.trending && "🔥"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
