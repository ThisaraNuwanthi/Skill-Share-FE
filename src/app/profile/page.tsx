import { ProfileHeader } from "@/src/components/profile/profile-header"
import { ProfileTabs } from "@/src/components/profile/profile-tabs"
import { ProfilePosts } from "@/src/components/profile/profile-posts"
import { Header } from "@/src/components/header"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pb-20">
        <ProfileHeader />
        <div className="container mx-auto px-4">
          <ProfileTabs />
          <ProfilePosts />
        </div>
      </main>
    </div>
  )
}
