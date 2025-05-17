"use client";

import { Bell, Settings, User } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";

export function DashboardHeader() {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const fetchName = async () => {
      const userId =
        typeof window !== "undefined" ? localStorage.getItem("userId") : null;
      if (!userId) return;
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/user/${userId}`
        );
        const data = await res.json();
        setName(data.fullName || "");
      } catch {
        setName("");
      }
    };
    fetchName();
  }, []);

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
          <Input
            placeholder="Find skills, users, posts..."
            className="w-full rounded-full bg-white"
          />
        </div>
        <div className="mt-6 text-center text-white">
          <h1 className="text-2xl font-bold">
            <span className="mr-2">👋</span> Hello,{" "}
            {name ? name : "User"}! Ready to learn and share?
          </h1>
        </div>
      </div>
    </div>
  );
}
