import Link from "next/link";

const progressSteps = [
  {
    id: "1",
    title: "Frontend Mastery",
    description:
      "Completed a full React.js crash course today! 🚀 Excited to build more projects!",
    step: "3/10",
  },
  {
    id: "2",
    title: "Frontend Mastery",
    description:
      "Completed a full React.js crash course today! 🚀 Excited to build more projects!",
    step: "4/10",
  },
  {
    id: "3",
    title: "Frontend Mastery",
    description:
      "Completed a full React.js crash course today! 🚀 Excited to build more projects!",
    step: "5/10",
  },
];

export function LearningProgress() {
  return (
    <div className="mt-4 flex flex-wrap gap-4">
      {progressSteps.map((step) => (
        <Link
          href={`/plans/${step.id}`}
          key={step.id}
          className="flex w-full flex-col rounded-lg bg-[#6c5ce7] p-6 text-white md:w-[calc(33.333%-1rem)]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
          }}
        >
          <h3 className="mb-4 text-xl font-bold">{step.title}</h3>
          <p className="mb-4 flex-grow text-sm">{step.description}</p>
          <p className="mt-auto text-right font-bold">Step {step.step}</p>
        </Link>
      ))}
    </div>
  );
}
