"use client"

import { useState } from "react"
import { User } from "lucide-react"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"

export function ProfileSettings() {
  const [username, setUsername] = useState("Thisara Nuwanthi")
  const [email, setEmail] = useState("nuwanthi@gmail.com")

  return (
    <div className="rounded-lg bg-gray-50 p-6">
      <div className="mb-4 flex items-center gap-2">
        <User className="h-6 w-6 text-[#6c5ce7]" />
        <h2 className="text-xl font-bold">Profile Settings</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium">Username:</label>
          <Input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full" />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Email:</label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full" />
        </div>

        <Button className="bg-[#6c5ce7] hover:bg-[#5b4fc7]">Save Changes</Button>
      </div>
    </div>
  )
}
