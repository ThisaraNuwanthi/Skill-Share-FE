import { ProfileHeader } from "@/src/components/profile/profile-header"
import { ProfileTabs } from "@/src/components/profile/profile-tabs"
import { LearningPlans } from "@/src/components/profile/learning-plans"
import { Header } from "@/src/components/header"

export default function ProfilePlansPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pb-20">
        <ProfileHeader />
        <div className="container mx-auto px-4">
          <ProfileTabs activeTab="plans" />
          <LearningPlans />
        </div>
      </main>
    </div>
  )
}
