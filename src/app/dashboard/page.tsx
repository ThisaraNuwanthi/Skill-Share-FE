import { DashboardActions } from "@/src/components/dashboard/dashboard-actions";
import { DashboardHeader } from "@/src/components/dashboard/dashboard-header";
import { LearningProgress } from "@/src/components/dashboard/learning-progress";
import { SkillSharingPosts } from "@/src/components/dashboard/skill-sharing-posts";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <DashboardHeader />
      <main className="container mx-auto px-4 pb-20">
        <DashboardActions />
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Skill Sharing Posts</h2>
          <SkillSharingPosts />
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Learning Progress & Plans</h2>
          <LearningProgress />
        </section>
      </main>
    </div>
  );
}
