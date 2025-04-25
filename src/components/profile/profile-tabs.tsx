"use client"
import Link from "next/link"
import { cn } from "@/src/lib/utils"

interface ProfileTabsProps {
  activeTab?: string
}

export function ProfileTabs({ activeTab = "posts" }: ProfileTabsProps) {
  return (
    <div className="border-b">
      <div className="flex">
        <Link
          href="/profile"
          className={cn(
            "border-b-2 px-4 py-2 text-sm font-medium",
            activeTab === "posts"
              ? "border-[#6c5ce7] text-[#6c5ce7]"
              : "border-transparent text-gray-500 hover:text-gray-700",
          )}
        >
          Posts
        </Link>
        <Link
          href="/profile/plans"
          className={cn(
            "border-b-2 px-4 py-2 text-sm font-medium",
            activeTab === "plans"
              ? "border-[#6c5ce7] text-[#6c5ce7]"
              : "border-transparent text-gray-500 hover:text-gray-700",
          )}
        >
          Learning Plans
        </Link>
        <Link
          href="/profile/followers"
          className={cn(
            "border-b-2 px-4 py-2 text-sm font-medium",
            activeTab === "followers"
              ? "border-[#6c5ce7] text-[#6c5ce7]"
              : "border-transparent text-gray-500 hover:text-gray-700",
          )}
        >
          Followers
        </Link>
      </div>
    </div>
  )
}
