import Image from "next/image"
import { Button } from "@/src/components/ui/button"

const users = [
  {
    id: "1",
    name: "Pavith Bimsara",
    role: "Frontend Developer & React Enthusiast",
    avatar: "/placeholder.svg?height=50&width=50",
  },
]

export function NewUsers() {
  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div key={user.id} className="flex items-center justify-between rounded-lg border p-4">
          <div className="flex items-center gap-3">
            <Image
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h3 className="font-medium">{user.name}</h3>
              <p className="text-sm text-gray-600">{user.role}</p>
            </div>
          </div>
          <Button className="bg-[#6c5ce7] hover:bg-[#5b4fc7]">Follow</Button>
        </div>
      ))}
    </div>
  )
}
