import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Heart } from "lucide-react";

const posts = [
  {
    id: "1",
    title: "Built my first MERN Stack App! 🚀",
    image: "/placeholder.svg?height=100&width=200",
    comments: 45,
    likes: 150,
  },
  {
    id: "2",
    title: "Tried a new photography technique today! 📸",
    image: "/placeholder.svg?height=100&width=200",
    comments: 45,
    likes: 150,
  },
  {
    id: "3",
    title: "Built my first MERN Stack App! 🚀",
    image: "/placeholder.svg?height=100&width=200",
    comments: 45,
    likes: 150,
  },
];

export function ProfilePosts() {
  return (
    <div className="mt-6 space-y-4">
      {posts.map((post) => (
        <Link href={`/post/${post.id}`} key={post.id}>
          <div className="overflow-hidden rounded-lg bg-[#6c5ce7] p-4 text-white">
            <h3 className="mb-4 text-lg font-medium">{post.title}</h3>

            {post.image && (
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={200}
                height={100}
                className="mb-4 rounded-lg"
              />
            )}

            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center gap-1">
                <MessageCircle className="h-5 w-5" />
                <span>{post.comments} Comments</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-5 w-5 text-red-300" />
                <span>{post.likes} Likes</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
