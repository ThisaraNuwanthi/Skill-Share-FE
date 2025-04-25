const challenges = [
  {
    id: "1",
    icon: "👨‍💻",
    title: "7-Day Coding Challenge",
    description: "Complete 5 projects in 7 days!",
  },
  {
    id: "2",
    icon: "📸",
    title: "Photography Challenge",
    description: "Capture & upload a creative photo daily!",
  },
]

export function SkillChallenges() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {challenges.map((challenge) => (
        <div key={challenge.id} className="rounded-lg border p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{challenge.icon}</span>
            <h3 className="font-medium">{challenge.title}</h3>
          </div>
          <p className="mt-2 text-sm text-gray-600">{challenge.description}</p>
        </div>
      ))}
    </div>
  )
}
