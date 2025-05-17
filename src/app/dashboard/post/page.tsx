"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { Header } from "@/src/components/header";
import { LoadingSpinner } from "@/src/components/ui/loading-spinner";

export default function PostDashboardPage() {
  const [userPosts, setUserPosts] = useState<any[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [refreshPosts, setRefreshPosts] = useState(false);
  const router = useRouter();
  const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  useEffect(() => {
    if (!userId) return;
    setLoadingPosts(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/user/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserPosts(data))
      .catch(() => setUserPosts([]))
      .finally(() => setLoadingPosts(false));
  }, [userId, refreshPosts]);

  const handleDelete = async (postId: string) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    const token = localStorage.getItem("token");
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setRefreshPosts((v) => !v);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-2xl mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">My Posts</h1>
        {loadingPosts ? (
          <LoadingSpinner />
        ) : userPosts.length === 0 ? (
          <div className="text-center text-gray-500">No posts found.</div>
        ) : (
          <div className="space-y-4">
            {userPosts.map((post) => (
              <div key={post.id} className="rounded border p-4 bg-gray-50 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{post.title}</span>
                  {post.content?.image && (
                    <img
                      src={post.content.image}
                      alt={post.title}
                      className="h-8 w-8 object-cover rounded ml-2"
                    />
                  )}
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2 md:mt-0">
                  <Button
                    variant="outline"
                    className="border-[#6c5ce7] text-[#6c5ce7]"
                    type="button"
                    onClick={() => router.push(`/post/${post.id}`)}
                  >
                    View
                  </Button>
                  <Button
                    variant="outline"
                    className="border-red-500 text-red-500"
                    type="button"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
