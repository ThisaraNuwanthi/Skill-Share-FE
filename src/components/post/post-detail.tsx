"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, MessageSquare } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

interface PostDetailProps {
  id: string;
}

export function PostDetail({ id }: PostDetailProps) {
  const [post, setPost] = useState<any>(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div className="text-center py-6">Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-3xl py-6">
      <div className="rounded-lg bg-[#6c5ce7] p-6 text-white">
        <div className="mb-4 flex items-center gap-3">
          <Image
            src={post.author.avatarr || "/placeholder.svg"}
            alt={post.author.name || "Unknown"}
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">
              {post.author.name || "Unknown"}
            </h2>
            <p>
              Posted {post.author.timeAgo || "Unknown"} |{" "}
              {post.content.tags && post.content.tags[0]
                ? `#${post.content.tags[0]}`
                : "No Tags"}
            </p>
          </div>
          <button className="ml-auto text-2xl">≡</button>
        </div>

        <div className="mb-6 space-y-4">
          {post.content.image && (
            <Image
              src={post.content.imagee || "/placeholder.svg"}
              alt="Post image"
              width={600}
              height={400}
              className="w-full rounded-lg"
            />
          )}

          <h3 className="text-lg font-medium">
            {post.content.title || "No Title"}
          </h3>

          {post.content.contentBody && (
            <p className="text-white/90">{post.content.contentBody}</p>
          )}

          <div className="flex flex-wrap gap-2">
            {post.content.tags
              ? post.content.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="rounded-full bg-white/20 px-3 py-1 text-sm"
                  >
                    #{tag}
                  </span>
                ))
              : "No Tags"}
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
          {post.commentsList.map((comment: any) => (
            <div key={comment.id} className="rounded-lg bg-white/10 p-4">
              <h4 className="font-medium text-white">
                {comment.author || "Anonymous"}
              </h4>
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
          <svg
            className="mr-2 h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
          <svg
            className="mr-2 h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
  );
}
