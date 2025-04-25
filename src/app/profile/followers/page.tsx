import { ProfileHeader } from "@/src/components/profile/profile-header"
import { ProfileTabs } from "@/src/components/profile/profile-tabs"
import { FollowersList } from "@/src/components/profile/followers-list"
import { Header } from "@/src/components/header"

export default function ProfileFollowersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pb-20">
        <ProfileHeader />
        <div className="container mx-auto px-4">
          <ProfileTabs activeTab="followers" />
          <FollowersList />
        </div>
      </main>
    </div>
  )
}
