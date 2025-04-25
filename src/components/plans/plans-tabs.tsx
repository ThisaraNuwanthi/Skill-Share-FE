"use client"

import { cn } from "@/src/lib/utils"
import { useState, useEffect } from "react"

interface PlansTabsProps {
  activeTab?: string
}

export function PlansTabs({ activeTab: initialActiveTab = "active" }: PlansTabsProps) {
  const [activeTab, setActiveTab] = useState(initialActiveTab)

  useEffect(() => {
    setActiveTab(initialActiveTab)
  }, [initialActiveTab])

  return (
    <div className="inline-flex rounded-lg border">
      <button
        className={cn(
          "px-4 py-2 text-sm",
          activeTab === "active" ? "rounded-l-lg bg-[#6c5ce7] text-white" : "rounded-l-lg bg-white text-gray-700",
        )}
        onClick={() => setActiveTab("active")}
      >
        Active Plans
      </button>
      <button
        className={cn(
          "px-4 py-2 text-sm",
          activeTab === "progress" ? "rounded-r-lg bg-[#6c5ce7] text-white" : "rounded-r-lg bg-white text-gray-700",
        )}
        onClick={() => setActiveTab("progress")}
      >
        Progress Tracking
      </button>
    </div>
  )
}
