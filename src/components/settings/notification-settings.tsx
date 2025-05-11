"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import { Switch } from "@/src/components/ui/switch";
import { Button } from "@/src/components/ui/button";

export function NotificationSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [followNotifications, setFollowNotifications] = useState(true);
  const [trendingNotifications, setTrendingNotifications] = useState(true);

  return (
    <div className="rounded-lg bg-gray-50 p-6">
      <div className="mb-4 flex items-center gap-2">
        <Bell className="h-6 w-6 text-[#6c5ce7]" />
        <h2 className="text-xl font-bold">Notification Preferences</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm">Receive email notifications</label>
          <Switch
            checked={emailNotifications}
            onCheckedChange={setEmailNotifications}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm">Receive push notifications</label>
          <Switch
            checked={pushNotifications}
            onCheckedChange={setPushNotifications}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm">Notify me when someone follows me</label>
          <Switch
            checked={followNotifications}
            onCheckedChange={setFollowNotifications}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm">
            Notify me about trending skills & new posts
          </label>
          <Switch
            checked={trendingNotifications}
            onCheckedChange={setTrendingNotifications}
          />
        </div>

        <Button className="bg-[#6c5ce7] hover:bg-[#5b4fc7]">
          Save Preference
        </Button>
      </div>
    </div>
  );
}
