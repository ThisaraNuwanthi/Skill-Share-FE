import Link from "next/link"

const categories = [
  { id: "coding", name: "Coding" },
  { id: "photography", name: "Photography" },
  { id: "cooking", name: "Cooking" },
  { id: "music", name: "Music" },
  { id: "business", name: "Business" },
]

export function CategoryTags() {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/explore/${category.id}`}
          className="rounded-full bg-gray-100 px-4 py-1 text-sm hover:bg-gray-200"
        >
          #{category.name}
        </Link>
      ))}
    </div>
  )
}
