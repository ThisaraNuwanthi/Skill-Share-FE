import { Bell, Settings, User } from "lucide-react"
import Link from "next/link"
import { Input } from "../ui/input"

export function DashboardHeader() {
  return (
    <div className="bg-[#6c5ce7] pb-8 pt-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="text-2xl font-bold text-white">
            SkillShare
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/notifications">
              <Bell className="h-6 w-6 text-white" />
            </Link>
            <Link href="/settings">
              <Settings className="h-6 w-6 text-white" />
            </Link>
            <Link href="/profile">
              <User className="h-6 w-6 text-white" />
            </Link>
          </div>
        </div>
        <div className="mt-4">
          <Input placeholder="Find skills, users, posts..." className="w-full rounded-full bg-white" />
        </div>
        <div className="mt-6 text-center text-white">
          <h1 className="text-2xl font-bold">
            <span className="mr-2">👋</span> Hello, Thisara! Ready to learn and share?
          </h1>
        </div>
      </div>
    </div>
  )
}
