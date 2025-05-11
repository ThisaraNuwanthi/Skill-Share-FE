"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import { Label } from "@/src/components/ui/label";
import { Switch } from "@/src/components/ui/switch";
import { Button } from "@/src/components/ui/button";

export function PrivacySettings() {
  const [profileVisibility, setProfileVisibility] = useState("public");
  const [allowSearch, setAllowSearch] = useState(true);

  return (
    <div className="rounded-lg bg-gray-50 p-6">
      <div className="mb-4 flex items-center gap-2">
        <Lock className="h-6 w-6 text-[#6c5ce7]" />
        <h2 className="text-xl font-bold">Privacy Settings</h2>
      </div>

      <div className="space-y-6">
        <RadioGroup
          value={profileVisibility}
          onValueChange={setProfileVisibility}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="public" id="public" />
            <Label htmlFor="public">
              Public Profile (Anyone can see your posts & profile)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="private" id="private" />
            <Label htmlFor="private">
              Private Profile (Only approved followers can see your profile)
            </Label>
          </div>
        </RadioGroup>

        <div className="flex items-center justify-between">
          <label className="text-sm">
            Allow search engines to index my profile
          </label>
          <Switch checked={allowSearch} onCheckedChange={setAllowSearch} />
        </div>

        <Button className="bg-[#6c5ce7] hover:bg-[#5b4fc7]">
          Save Changes
        </Button>
      </div>
    </div>
  );
}
