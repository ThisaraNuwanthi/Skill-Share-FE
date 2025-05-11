import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Search } from "lucide-react";

export function ExploreHeader() {
  return (
    <div className="my-6">
      <h1 className="mb-6 text-3xl font-bold">
        <Search className="mr-2 inline-block h-8 w-8" />
        Explore & Discover
      </h1>
      <div className="flex gap-2">
        <Input
          placeholder="Find skills, users, posts..."
          className="flex-grow"
        />
        <Button className="bg-[#6c5ce7] hover:bg-[#5b4fc7]">Search</Button>
      </div>
    </div>
  );
}
