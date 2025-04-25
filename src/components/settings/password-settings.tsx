"use client"

import { useState } from "react"
import { Key } from "lucide-react"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"

export function PasswordSettings() {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <div className="rounded-lg bg-gray-50 p-6">
      <div className="mb-4 flex items-center gap-2">
        <Key className="h-6 w-6 text-[#6c5ce7]" />
        <h2 className="text-xl font-bold">Change Password</h2>
      </div>

      <div className="space-y-4">
        <div>
          <Input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <Input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <Input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full"
          />
        </div>

        <Button className="bg-[#6c5ce7] hover:bg-[#5b4fc7]">Update Password</Button>
      </div>
    </div>
  )
}
