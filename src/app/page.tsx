import Link from "next/link"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import { BottomNavigation } from "@/src/components/navigation/bottom-navigation"
import { TrendingSkills } from "@/src/components/landing/trending-skills"
import { FeaturedPosts } from "@/src/components/landing/featured-posts"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between border-b bg-white px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-[#6c5ce7]">
          SkillShare
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/login" className="text-[#6c5ce7]">
            Login
          </Link>
          <Link href="/register">
            <Button className="bg-[#6c5ce7] hover:bg-[#5b4fc7]">Register</Button>
          </Link>
        </div>
      </header>

      <section className="bg-[#6c5ce7] py-16 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold">Learn & Share Skills with Others</h1>
        <p className="mb-6 text-lg">Join our community of learners and mentors today!</p>
        <Link href="/register">
          <Button className="bg-white text-[#6c5ce7] hover:bg-gray-100">Get Started</Button>
        </Link>
      </section>

      <div className="container mx-auto max-w-3xl px-4 py-8">
        <div className="mb-8 rounded-full border bg-white p-2 shadow-sm">
          <Input placeholder="Search for skills or users..." className="rounded-full" />
        </div>

        <TrendingSkills />
        <FeaturedPosts />
      </div>

      <BottomNavigation />
    </div>
  )
}
