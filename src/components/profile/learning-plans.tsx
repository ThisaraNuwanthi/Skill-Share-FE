import { CheckCircle, Circle } from "lucide-react"

const plans = [
  {
    id: "1",
    title: "Frontend Mastery Plan",
    items: [
      { name: "HTML & CSS Basics", status: "completed" },
      { name: "JavaScript Deep Dive", status: "in-progress" },
      { name: "React Project Development", status: "next" },
    ],
  },
  {
    id: "2",
    title: "Photography Skills Plan",
    items: [
      { name: "Camera Basics", status: "completed" },
      { name: "Editing with Lightroom", status: "in-progress" },
      { name: "Landscape Photography Techniques", status: "next" },
    ],
  },
]

export function LearningPlans() {
  return (
    <div className="mt-6 space-y-6">
      {plans.map((plan) => (
        <div key={plan.id} className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-bold">{plan.title}</h3>

          <ul className="space-y-3">
            {plan.items.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {item.status === "completed" ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{item.name}</span>
                    <span className="ml-auto text-green-500">Completed</span>
                  </>
                ) : item.status === "in-progress" ? (
                  <>
                    <Circle className="h-5 w-5 text-[#6c5ce7]" />
                    <span>{item.name}</span>
                    <span className="ml-auto text-[#6c5ce7]">In Progress</span>
                  </>
                ) : (
                  <>
                    <Circle className="h-5 w-5 text-gray-300" />
                    <span>{item.name}</span>
                    <span className="ml-auto rounded-md bg-orange-100 px-2 py-1 text-sm text-orange-600">
                      Next Step
                    </span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
