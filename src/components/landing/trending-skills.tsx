import Image from "next/image";
import Link from "next/link";

const skills = [
  {
    id: "photography",
    title: "Photography",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "webdev",
    title: "Web Development",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "cooking",
    title: "Cooking",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export function TrendingSkills() {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold text-[#6c5ce7]">
        Trending Skills
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((skill) => (
          <Link href={`/skills/${skill.id}`} key={skill.id}>
            <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <Image
                src={skill.image || "/placeholder.svg"}
                alt={skill.title}
                width={300}
                height={200}
                className="h-48 w-full object-cover"
              />
              <div className="bg-[#6c5ce7] p-4 text-center text-white">
                <h3 className="text-xl font-medium">{skill.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
