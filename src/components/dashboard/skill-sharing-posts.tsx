"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MessageCircle, Heart } from "lucide-react"

const posts = [
  {
    id: "1",
    author: {
      name: "Tharushi Fernando",
      avatar: "/placeholder.svg?height=50&width=50",
      timeAgo: "2 hours ago",
    },
    content: {
      title: "Learned a new trick in Java! 🚀",
      description: "Check out my code snippet!",
      image: "/placeholder.svg?height=300&width=400",
    },
    engagement: {
      comments: 12,
      likes: 25,
    },
    trending: true,
  },
  {
    id: "2",
    author: {
      name: "Thisara Nuwanthi",
      avatar: "/placeholder.svg?height=50&width=50",
      timeAgo: "Yesterday",
    },
    content: {
      title: "Baked my first pizza! 🍕",
      description: "Here's the recipe I followed!",
      image: "/placeholder.svg?height=300&width=400",
    },
    engagement: {
      comments: 92,
      likes: 75,
    },
    trending: true,
  },
  {
    id: "3",
    author: {
      name: "Tharushi Fernando",
      avatar: "/placeholder.svg?height=50&width=50",
      timeAgo: "8 hours ago",
    },
    content: {
      title: "Learned a new trick in Java! 🚀",
      description: "Check out my code snippet!",
      image: "/placeholder.svg?height=300&width=400",
    },
    engagement: {
      comments: 12,
      likes: 25,
    },
    trending: true,
  },
  {
    id: "4",
    author: {
      name: "Thisara Nuwanthi",
      avatar: "/placeholder.svg?height=50&width=50",
      timeAgo: "Yesterday",
    },
    content: {
      title: "Baked my first pizza! 🍕",
      description: "Here's the recipe I followed!",
      image: "/placeholder.svg?height=300&width=400",
    },
    engagement: {
      comments: 92,
      likes: 75,
    },
    trending: false,
  },
]

export function SkillSharingPosts() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(posts.length / 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(posts.length / 3)) % Math.ceil(posts.length / 3))
  }

  const visiblePosts = posts.slice(currentIndex * 3, currentIndex * 3 + 3)

  return (
    <div className="relative mt-4">
      <button
        onClick={prevSlide}
        className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <div className="flex gap-4 overflow-hidden">
        {visiblePosts.map((post) => (
          <Link href={`/post/${post.id}`} key={post.id} className="w-full flex-shrink-0 sm:w-1/2 md:w-1/3">
            <div className="overflow-hidden rounded-lg border bg-white">
              <div className="flex items-center gap-2 p-4">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-gray-500">Posted {post.author.timeAgo}</p>
                </div>
                {post.trending && <span className="ml-auto text-xl">🔥</span>}
              </div>
              <Image
                src={post.content.image || "/placeholder.svg"}
                alt={post.content.title}
                width={400}
                height={300}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">{post.content.title}</h3>
                <p className="text-sm text-gray-700">{post.content.description}</p>
              </div>
              <div className="flex items-center justify-between border-t p-4">
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">{post.engagement.comments} Comments</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span className="text-sm text-gray-500">{post.engagement.likes} Likes</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
