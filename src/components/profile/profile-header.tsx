import Image from "next/image";
import { MapPin, Edit } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function ProfileHeader() {
  return (
    <div className="bg-[#6c5ce7] py-8">
      <div className="container mx-auto px-4 text-center">
        <Image
          src="/placeholder.svg?height=120&width=120"
          alt="Profile picture"
          width={120}
          height={120}
          className="mx-auto rounded-full border-4 border-white"
        />

        <h1 className="mt-4 text-2xl font-bold text-white">Thisara Nuwanthi</h1>

        <div className="mt-2 flex items-center justify-center text-white">
          <MapPin className="mr-1 h-4 w-4" />
          <span>Dodangoda, Kaluthara, Sri Lanka</span>
        </div>

        <p className="mt-2 text-white">
          Passionate about coding & sports! Learning new tech every day.🚀
        </p>

        <p className="mt-2 text-white">
          Skills: Java | React | Photography | Cooking
        </p>

        <p className="mt-2 text-white">
          <span className="mr-2">👥 350 Followers</span> |{" "}
          <span className="ml-2">200 Following</span>
        </p>

        <Button variant="outline" className="mt-4 bg-white text-[#6c5ce7]">
          <Edit className="mr-2 h-4 w-4" />
          Edit profile
        </Button>
      </div>
    </div>
  );
}
