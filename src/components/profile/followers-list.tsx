import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { UserPlus } from "lucide-react";

const followers = [
  {
    id: "1",
    name: "Pavith Bimsara",
    role: "UI Developer",
    avatar: "/placeholder.svg?height=50&width=50",
    isFollowing: true,
  },
  {
    id: "2",
    name: "Udana Nimsara",
    role: "Backend Developer",
    avatar: "/placeholder.svg?height=50&width=50",
    isFollowing: false,
  },
  {
    id: "3",
    name: "Pavith Bimsara",
    role: "UX Developer",
    avatar: "/placeholder.svg?height=50&width=50",
    isFollowing: false,
  },
  {
    id: "4",
    name: "Nimsara Udana",
    role: "Frontend Developer",
    avatar: "/placeholder.svg?height=50&width=50",
    isFollowing: false,
  },
  {
    id: "5",
    name: "Pavith Bimsara",
    role: "UI Developer",
    avatar: "/placeholder.svg?height=50&width=50",
    isFollowing: false,
  },
];

export function FollowersList() {
  return (
    <div className="mt-6 space-y-4">
      {followers.map((follower) => (
        <div
          key={follower.id}
          className="rounded-lg bg-[#6c5ce7] p-4 text-white"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={follower.avatar || "/placeholder.svg"}
                alt={follower.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="font-medium">{follower.name}</h3>
                <p className="text-sm text-purple-200">{follower.role}</p>
              </div>
            </div>

            {follower.isFollowing ? (
              <Button variant="outline" className="bg-white text-[#6c5ce7]">
                Following
              </Button>
            ) : (
              <Button variant="outline" className="bg-white text-[#6c5ce7]">
                <UserPlus className="mr-2 h-4 w-4" />
                Follow
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
