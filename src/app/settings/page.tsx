import { SettingsHeader } from "@/src/components/settings/settings-header";
import { ProfileSettings } from "@/src/components/settings/profile-settings";
import { PasswordSettings } from "@/src/components/settings/password-settings";
import { NotificationSettings } from "@/src/components/settings/notification-settings";
import { PrivacySettings } from "@/src/components/settings/privacy-settings";
import { Header } from "@/src/components/header";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pb-20">
        <SettingsHeader />
        <div className="grid gap-8 md:grid-cols-2">
          <ProfileSettings />
          <PasswordSettings />
          <NotificationSettings />
          <PrivacySettings />
        </div>
      </main>
    </div>
  );
}
