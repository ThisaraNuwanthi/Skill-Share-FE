import { Calendar } from "lucide-react";

const sessions = [
  {
    id: "1",
    title: "Intro to React.js",
    instructor: "Dilusha Perera",
    date: "Mar 10, 5 PM",
  },
  {
    id: "2",
    title: "Photography Editing in Lightroom",
    instructor: "Tharushi Fernando",
    date: "Mar 12, 7 PM",
  },
];

export function UpcomingSessions() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {sessions.map((session) => (
        <div key={session.id} className="rounded-lg border p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-[#6c5ce7]" />
            <h3 className="font-medium">"{session.title}"</h3>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            with {session.instructor} - {session.date}
          </p>
        </div>
      ))}
    </div>
  );
}
