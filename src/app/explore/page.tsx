import { Header } from "@/src/components/header";
import { ExploreHeader } from "@/src/components/explore/explore-header";
import { CategoryTags } from "@/src/components/explore/category-tags";
import { TrendingSkillsCards } from "@/src/components/explore/trending-skills-cards";
import { UpcomingSessions } from "@/src/components/explore/upcoming-sessions";
import { SkillChallenges } from "@/src/components/explore/skill-challenges";
import { NewUsers } from "@/src/components/explore/new-users";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pb-20">
        <ExploreHeader />
        <CategoryTags />
        <div className="mt-6 rounded-lg bg-[#e6e6fa] p-6">
          <TrendingSkillsCards />
        </div>
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">
            Upcoming Learning Sessions
          </h2>
          <UpcomingSessions />
        </div>
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">Skill Challenges</h2>
          <SkillChallenges />
        </div>
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">New Users</h2>
          <NewUsers />
        </div>
      </main>
    </div>
  );
}
