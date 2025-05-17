"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Header } from "@/src/components/header";

export default function EditPostPage() {
  const params = useParams();
  const slug =
    typeof params.slug === "string"
      ? params.slug
      : Array.isArray(params.slug)
      ? params.slug[0]
      : "";
  const [post, setPost] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [contentBody, setContentBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!slug) return;
    const fetchPost = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();
      setPost(data);
      setTitle(data.content.title || "");
      setContentBody(data.content.contentBody || "");
      setImageUrl(data.content.image || "");
    };
    fetchPost();
  }, [slug]);

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImageUrl(""); // Clear URL if uploading file
    }
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
    setImageFile(null); // Clear file if using URL
  };

  const handleImageUpload = async (): Promise<string | null> => {
    if (!imageFile) return null;
    setUploading(true);
    // Replace this with your actual image upload logic or endpoint
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
    const token = localStorage.getItem("token");
    let finalImageUrl = imageUrl;
    if (imageFile) {
      const uploadedUrl = await handleImageUpload();
      if (uploadedUrl) finalImageUrl = uploadedUrl;
    }
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`, {
      method: "PUT",
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
    router.push(`/post/${slug}`);
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-xl mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">Edit Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={contentBody}
            onChange={(e) => setContentBody(e.target.value)}
            placeholder="Content"
            className="w-full border rounded p-2"
            rows={6}
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
          <Button type="submit" className="w-full bg-[#6c5ce7] text-white" disabled={uploading}>
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
}
