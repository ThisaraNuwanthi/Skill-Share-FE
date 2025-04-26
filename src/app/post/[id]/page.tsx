import { PostDetail } from "@/src/components/post/post-detail";
import { Header } from "@/src/components/header";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pb-20">
        <PostDetail id={slug} />
      </main>
    </div>
  );
}
