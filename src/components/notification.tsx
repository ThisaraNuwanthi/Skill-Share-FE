"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";

interface Notification {
  _id: string;
  title: string;
  message: string;
  createdAt: string;
  visibility: string;
}

export default function NotificationTable() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchAnnouncements = async (): Promise<void> => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/announcements`,
        );

        if (response.status === 401 || response.status === 400) {
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          localStorage.removeItem("role");
          router.push("/login");
          return;
        }

        const data = await response.json();

        if (data.success) {
          const messages = data.data.sort(
            (a: Notification, b: Notification) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          );
          setNotifications(messages);
        }
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, [router]);

  // Function to format the date
  const formatTime = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60),
    );
    const diffInHours = Math.floor(diffInMinutes / 60);

    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} days ago`;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="relative">
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          <Bell className="h-6 w-6" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-indigo-900">
            Notifications
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          {notifications.map((notification) => (
            <div key={notification._id} className="border-b pb-3">
              <h3 className="font-semibold text-indigo-900">
                {notification.title}
              </h3>
              <p className="text-sm text-gray-600">{notification.message}</p>
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-gray-400">
                  {formatTime(notification.createdAt)}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                  {notification.visibility}
                </span>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
