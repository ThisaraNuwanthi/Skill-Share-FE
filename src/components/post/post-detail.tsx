"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, MessageSquare } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"

interface PostDetailProps {
  id: string
}

export function PostDetail({ id }: PostDetailProps) {
  const [comment, setComment] = useState("")

  // This would be fetched from an API in a real app
  const post = {
    id,
    author: {
      name: "Pavith Bimsara",
      avatar: "/placeholder.svg?height=80&width=80",
      timeAgo: "2 hours ago",
    },
    content: {
      title: "Built a simple REST API with Java Spring Boot! ⚡ Sharing my learning experience",
      tags: ["Java", "SpringBoot", "BackendDevelopment", "Learning"],
      image: "/placeholder.svg?height=400&width=600",
      code: "/placeholder.svg?height=300&width=500",
    },
    engagement: {
      likes: 150,
      comments: 72,
    },
    commentsList: [
      {
        id: "1",
        author: "Dulshan Perera",
        content: "This is awesome! 🔥 Can you share the repo?",
        likes: 43,
      },
      {
        id: "2",
        author: "Tharushi Fernando",
        content: "Great explanation! Will try this out. 🚀",
        likes: 74,
      },
    ],
  }

  return (
    <div className="mx-auto max-w-3xl py-6">
      <div className="rounded-lg bg-[#6c5ce7] p-6 text-white">
        <div className="mb-4 flex items-center gap-3">
          <Image
            src={post.author.avatar || "/placeholder.svg"}
            alt={post.author.name}
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">{post.author.name}</h2>
            <p>
              Posted {post.author.timeAgo} | #{post.content.tags[0]}
            </p>
          </div>
          <button className="ml-auto text-2xl">≡</button>
        </div>

        <div className="mb-6 space-y-4">
          <Image
            src={post.content.code || "/placeholder.svg"}
            alt="Code screenshot"
            width={600}
            height={300}
            className="w-full rounded-lg"
          />

          <Image
            src={post.content.image || "/placeholder.svg"}
            alt="Post image"
            width={600}
            height={400}
            className="w-full rounded-lg"
          />

          <h3 className="text-lg font-medium">{post.content.title}</h3>

          <div className="flex flex-wrap gap-2">
            {post.content.tags.map((tag, index) => (
              <span key={index} className="rounded-full bg-white/20 px-3 py-1 text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6" />
            <span>{post.engagement.likes} Like</span>
          </div>

          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6" />
            <span>{post.engagement.comments} Comment</span>
          </div>
        </div>

        <div className="space-y-4">
          {post.commentsList.map((comment) => (
            <div key={comment.id} className="rounded-lg bg-white/10 p-4">
              <h4 className="font-medium text-white">{comment.author}</h4>
              <p className="mt-1">{comment.content}</p>
              <div className="mt-2 flex items-center justify-end">
                <Button variant="ghost" size="sm" className="text-white">
                  <span className="mr-1">👍</span> {comment.likes} Like
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Input
            placeholder="Add Comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="bg-white/10 text-white placeholder:text-white/70"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <Button variant="outline" className="bg-[#6c5ce7] text-white">
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 5L5 15M5 5H15V15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Edit
        </Button>

        <Button variant="outline" className="bg-red-500 text-white">
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Delete
        </Button>
      </div>
    </div>
  )
}
