import Image from "next/image"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"

const posts = [
  {
    id: "1",
    title: "What is React.js?",
    image: "/placeholder.svg?height=200&width=300",
    description: "Just completed a React tutorial! Excited to share my project!",
  },
  {
    id: "2",
    title: "REACT BEST PRACTICES",
    image: "/placeholder.svg?height=200&width=300",
    description: "Just completed a React tutorial! Excited to share my project!",
  },
  {
    id: "3",
    title: "What is ReactJS and Why to Use",
    image: "/placeholder.svg?height=200&width=300",
    description: "Just completed a React tutorial! Excited to share my project!",
  },
]

export function FeaturedPosts() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-[#6c5ce7]">Featured Skill Sharing Posts</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="overflow-hidden rounded-lg border bg-white shadow-sm">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={300}
              height={200}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="mb-2 text-center text-lg font-medium text-[#6c5ce7]">{post.title}</h3>
              <p className="mb-4 text-center text-sm text-gray-600">{post.description}</p>
              <div className="text-center">
                <Link href={`/post/${post.id}`}>
                  <Button variant="outline" className="border-[#6c5ce7] text-[#6c5ce7]">
                    View Post
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
