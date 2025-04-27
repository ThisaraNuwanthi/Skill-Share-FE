import type React from "react";
import type { Metadata } from "next/types";
import { Inter } from "next/font/google";
import "./globals.css";
import { BottomNavigation } from "../components/navigation/bottom-navigation";
import { AiChat } from "../components/landing/ai-chat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillShare",
  description: "Learn and share your skills with others",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} 
        <BottomNavigation />
        <AiChat />
      </body>
    </html>
  );
}
