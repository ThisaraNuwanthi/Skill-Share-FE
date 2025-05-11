"use client";

import { useState } from "react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Calendar } from "lucide-react";

export function CreatePlanForm() {
  const [planName, setPlanName] = useState("");

  return (
    <div className="mt-4 space-y-4">
      <Input
        placeholder="Plan Name (e.g., Full-Stack Development)"
        value={planName}
        onChange={(e) => setPlanName(e.target.value)}
        className="w-full"
      />

      <div className="relative">
        <Input placeholder="Pick a Date" className="w-full pl-10" />
        <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
      </div>

      <Button className="w-full bg-[#6c5ce7] hover:bg-[#5b4fc7]">Create</Button>
    </div>
  );
}
