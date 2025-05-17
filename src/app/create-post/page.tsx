"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Header } from "@/src/components/header";
import { LoadingSpinner } from "@/src/components/ui/loading-spinner";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [contentBody, setContentBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();
  const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImageUrl("");
    }
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
    setImageFile(null);
  };

  const handleImageUpload = async (): Promise<string | null> => {
    if (!imageFile) return null;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", imageFile);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    setUploading(false);
    return data.url || null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    let finalImageUrl = imageUrl;
    if (imageFile) {
      const uploadedUrl = await handleImageUpload();
      if (uploadedUrl) finalImageUrl = uploadedUrl;
    }
    const token = localStorage.getItem("token");
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: title || null,
        content: contentBody || null,
        imageUrl: finalImageUrl || null,
      }),
    });
    setSubmitting(false);
    setTitle("");
    setContentBody("");
    setImageUrl("");
    setImageFile(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-2xl mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
          <textarea
            value={contentBody}
            onChange={(e) => setContentBody(e.target.value)}
            placeholder="Content"
            className="w-full border rounded p-2"
            rows={6}
            required
          />
          <div>
            <label className="block mb-1 font-medium">Image</label>
            <div className="flex flex-col gap-2">
              <Input
                type="text"
                placeholder="Paste image URL"
                value={imageUrl}
                onChange={handleImageUrlChange}
                disabled={!!imageFile}
              />
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileChange}
                  disabled={!!imageUrl}
                />
                {uploading && <span className="text-sm text-gray-500">Uploading...</span>}
              </div>
              {(imageUrl || imageFile) && (
                <img
                  src={imageFile ? URL.createObjectURL(imageFile) : imageUrl}
                  alt="Preview"
                  className="mt-2 h-32 rounded border object-contain"
                />
              )}
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#6c5ce7] text-white"
            disabled={uploading || submitting}
          >
            {submitting ? <LoadingSpinner className="h-5 w-5" /> : "Create Post"}
          </Button>
        </form>
      </div>
    </div>
  );
}
