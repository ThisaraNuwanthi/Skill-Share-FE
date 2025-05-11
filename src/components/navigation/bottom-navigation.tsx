import Link from "next/link";
import { Home, Search, PlusCircle, BookOpen, User } from "lucide-react";

export function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-white">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around">
        <Link href="/dashboard" className="flex flex-col items-center">
          <Home className="h-6 w-6" />
        </Link>
        <Link href="/search" className="flex flex-col items-center">
          <Search className="h-6 w-6" />
        </Link>
        <Link href="/create-post" className="flex flex-col items-center">
          <PlusCircle className="h-6 w-6" />
        </Link>
        <Link href="/plans" className="flex flex-col items-center">
          <BookOpen className="h-6 w-6" />
        </Link>
        <Link href="/profile" className="flex flex-col items-center">
          <User className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}
