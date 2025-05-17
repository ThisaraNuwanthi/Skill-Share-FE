"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/src/components/ui/loading-spinner";

interface Plan {
  id: string;
  title: string;
  description: string | null;
  stepNumber: number;
  totalSteps: number;
}

export function LearningProgress() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      const userId =
        typeof window !== "undefined"
          ? localStorage.getItem("userId")
          : null;
      if (!userId) {
        setPlans([]);
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/learning-plan/user/${userId}`
        );
        const data = await response.json();
        setPlans(data);
      } catch {
        setPlans([]);
      }
      setLoading(false);
    };
    fetchPlans();
  }, []);

  if (loading) {
    return (
      <div className="py-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (!plans.length) {
    return (
      <div className="py-8 text-center text-gray-500">
        No learning progress found.
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-wrap gap-4">
      {plans.map((plan) => (
        <Link
          href={`/plans/${plan.id}`}
          key={plan.id}
          className="flex w-full flex-col rounded-lg bg-[#6c5ce7] p-6 text-white md:w-[calc(33.333%-1rem)]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
          }}
        >
          <h3 className="mb-4 text-xl font-bold">{plan.title}</h3>
          <p className="mb-4 flex-grow text-sm">
            {plan.description || "No description"}
          </p>
          <p className="mt-auto text-right font-bold">
            Step {plan.stepNumber + 1}/{plan.totalSteps}
          </p>
        </Link>
      ))}
    </div>
  );
}
