import Link from "next/link";
import { Bell, Settings, User } from "lucide-react";
import { Input } from "@/src/components/ui/input";
import NotificationTable from "./notification";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/dashboard" className="text-2xl font-bold text-[#6c5ce7]">
          SkillShare
        </Link>
        <div className="hidden md:block md:w-1/3">
          <Input
            placeholder="Find skills, users, posts..."
            className="rounded-full bg-gray-100"
          />
        </div>
        <div className="flex items-center space-x-4">
          <NotificationTable />
          <Link href="/settings">
            <Settings className="h-6 w-6" />
          </Link>
          <Link href="/profile">
            <User className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}
