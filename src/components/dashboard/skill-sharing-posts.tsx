"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MessageCircle, Heart } from "lucide-react";
import { formatTimeAgo } from "@/src/utils/formatTimeAgo";
import { LoadingSpinner } from "@/src/components/ui/loading-spinner";

interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    timeAgo: string;
  };
  content: {
    title: string;
    description: string;
    image: string;
  };
  engagement: {
    comments: number;
    likes: number;
  };
  trending: boolean;
}

export function SkillSharingPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/posts/`
        );
        const data: Post[] = await response.json();

        // Sort posts by likes in descending order and take the top 3
        const sortedPosts = data
          .sort((a, b) => b.engagement.likes - a.engagement.likes)
          .slice(0, 3);
        setPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + posts.length) % posts.length
    );
  };

  if (posts.length === 0) {
    return (
      <div className="text-center py-6">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="relative mt-4">
      <button
        onClick={prevSlide}
        className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <div className="flex gap-4 overflow-hidden">
        {posts.map((post) => (
          <Link
            href={`/post/${post.id}`}
            key={post.id}
            className="w-full flex-shrink-0 sm:w-1/2 md:w-1/3"
          >
            <div
              className="overflow-hidden rounded-lg border bg-white"
              style={{ width: 380, minHeight: 420 }}
            >
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
                  <p className="text-sm text-gray-500">
                    Posted {formatTimeAgo(post.author.timeAgo)}
                  </p>
                </div>
                <span className="ml-auto text-xl">🔥</span>
              </div>
              <Image
                src={post.content.image || "/placeholder.svg"}
                alt={post.content.title}
                width={350}
                height={180}
                className="object-cover"
                style={{ width: "100%", height: 180 }}
              />
              <div className="p-4">
                <h3 className="font-medium">{post.content.title}</h3>
                <p className="text-sm text-gray-700">
                  {post.content.description}
                </p>
              </div>
              <div className="flex items-center justify-between border-t p-4">
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    {post.engagement.comments} Comments
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span className="text-sm text-gray-500">
                    {post.engagement.likes} Likes
                  </span>
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
  );
}
