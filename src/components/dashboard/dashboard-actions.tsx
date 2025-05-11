import Link from "next/link";
import { Zap, BookOpen, PenTool } from "lucide-react";

export function DashboardActions() {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-4">
      <Link
        href="/progress"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#6c5ce7] px-4 py-3 text-white sm:w-auto"
      >
        <Zap className="h-5 w-5" />
        <span className="font-medium">Track Progress</span>
      </Link>
      <Link
        href="/plans"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#6c5ce7] px-4 py-3 text-white sm:w-auto"
      >
        <BookOpen className="h-5 w-5" />
        <span className="font-medium">View Learning Plans</span>
      </Link>
      <Link
        href="/create-post"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#6c5ce7] px-4 py-3 text-white sm:w-auto"
      >
        <PenTool className="h-5 w-5" />
        <span className="font-medium">Create Post</span>
      </Link>
    </div>
  );
}
