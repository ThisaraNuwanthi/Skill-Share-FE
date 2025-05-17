"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Circle } from "lucide-react";

export function LearningPlans() {
  const [plans, setPlans] = useState<any[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
        if (!userId) {
          setPlans([]);
          return;
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/learning-plan/user/${userId}`);
        const data = await response.json();
        setPlans(data);
      } catch (error) {
        setPlans([]);
      }
    };
    fetchPlans();
  }, []);

  // Helper to map backend status to UI status
  const getStatus = (status: string | null) => {
    if (!status || status === "Not Started") return "next";
    if (status === "In Progress") return "in-progress";
    if (status === "Completed") return "completed";
    if (status === "Next Step") return "next";
    return "next";
  };

  return (
    <div className="mt-6 space-y-6">
      {plans.length === 0 ? (
        <div className="text-center text-gray-500">No learning plans found.</div>
      ) : (
        plans.map((plan) => (
          <div key={plan.id} className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold">{plan.title}</h3>
            <ul className="space-y-3">
              {plan.steps && plan.steps.length > 0 ? (
                [...plan.steps]
                  .sort((a: any, b: any) => {
                    const getOrder = (status: string | null) => {
                      if (!status || status === "Not Started" || status === "Next Step") return 2;
                      if (status === "In Progress") return 1;
                      if (status === "Completed") return 0;
                      return 2;
                    };
                    return getOrder(a.status) - getOrder(b.status);
                  })
                  .map((item: any, index: number) => {
                    const status = getStatus(item.status);
                    return (
                      <li key={index} className="flex items-center gap-2">
                        {status === "completed" ? (
                          <>
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>{item.title || "Untitled Step"}</span>
                            <span className="ml-auto text-green-500">Completed</span>
                          </>
                        ) : status === "in-progress" ? (
                          <>
                            <Circle className="h-5 w-5 text-[#6c5ce7]" />
                            <span>{item.title || "Untitled Step"}</span>
                            <span className="ml-auto text-[#6c5ce7]">In Progress</span>
                          </>
                        ) : (
                          <>
                            <Circle className="h-5 w-5 text-gray-300" />
                            <span>{item.title || "Untitled Step"}</span>
                            <span className="ml-auto rounded-md bg-orange-100 px-2 py-1 text-sm text-orange-600">
                              Next Step
                            </span>
                          </>
                        )}
                      </li>
                    );
                  })
              ) : (
                <li className="text-gray-400">No steps defined.</li>
              )}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
