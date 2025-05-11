export function ProgressBars() {
  const progressData = [
    { name: "Frontend Mastery", progress: 75 },
    { name: "Photography Skills", progress: 50 },
    { name: "New Plan", progress: 20 },
  ];

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">
        Your Overall learning Progress
      </h2>
      <div className="space-y-6">
        {progressData.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">{item.name}</span>
              <span className="text-lg font-medium">{item.progress}%</span>
            </div>
            <div className="h-8 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-[#6c5ce7]"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
