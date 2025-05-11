import { Settings } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function SettingsHeader() {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Settings className="h-8 w-8 text-[#6c5ce7]" />
        <h1 className="text-3xl font-bold">Settings</h1>
      </div>
      <Button className="bg-red-500 hover:bg-red-600">
        Logout Your Account
      </Button>
    </div>
  );
}
