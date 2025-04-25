import { PostDetail } from "@/src/components/post/post-detail"
import { Header } from "@/src/components/header"

export default function PostPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pb-20">
        <PostDetail id={params.id} />
      </main>
    </div>
  )
}
