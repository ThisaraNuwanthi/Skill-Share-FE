import { CheckCircle, Circle, Edit } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function FrontendMasteryPlan() {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Frontend Mastery Plan</h2>
        <p className="text-gray-600">Goal: May 30, 2025</p>
      </div>

      <ul className="mb-6 space-y-4">
        <li className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <span>HTML & CSS Basics</span>
          <span className="ml-2 text-green-500">(Completed)</span>
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <span>JavaScript Fundamentals</span>
          <span className="ml-2 text-green-500">(Completed)</span>
        </li>
        <li className="flex items-center gap-2">
          <Circle className="h-5 w-5 text-[#6c5ce7]" />
          <span>React.js Introduction</span>
          <span className="ml-2 text-[#6c5ce7]">(In Progress)</span>
        </li>
        <li className="flex items-center gap-2">
          <Circle className="h-5 w-5 text-gray-300" />
          <span>Build a Small React Project</span>
          <span className="ml-2 text-orange-500">(Next Step)</span>
        </li>
      </ul>

      <div className="flex flex-wrap gap-2">
        <Button variant="outline" className="flex items-center gap-1">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4V20M4 12H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Update Progress
        </Button>
        <Button variant="outline" className="flex items-center gap-1">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M7 7H17V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Share Plan
        </Button>
        <Button variant="outline" className="flex items-center gap-1">
          <Edit className="h-4 w-4" />
          Edit Plan
        </Button>
      </div>
    </div>
  );
}
