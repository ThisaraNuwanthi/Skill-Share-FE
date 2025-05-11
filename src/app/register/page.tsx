"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Checkbox } from "@/src/components/ui/checkbox";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would handle registration here
    window.location.href = "/dashboard";
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex w-full items-center justify-center bg-[#f5f6fa] p-8 md:w-1/2">
        <div className="p-8">
          <Link href="/">
            <h1 className="mb-8 text-4xl font-bold text-[#6c5ce7]">
              SkillShare
            </h1>
          </Link>
          <Image
            src="/placeholder.svg?height=500&width=600"
            alt="Learning illustration"
            width={600}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center p-8 md:w-1/2">
        <div className="w-full max-w-md">
          <h2 className="mb-6 text-center text-3xl font-bold">
            Join Us! Create an Account to Start Sharing & Learning.
          </h2>
          <Button
            variant="outline"
            className="mb-3 w-full bg-[#4CAF50] text-white hover:bg-[#45a049]"
          >
            Register with Google
          </Button>
          <Button
            variant="outline"
            className="mb-6 w-full bg-[#5b5fc7] text-white hover:bg-[#4a4da6]"
          >
            Register with Facebook
          </Button>
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">
                Register with Email & Password
              </span>
            </div>
          </div>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <Input
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <Input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="mb-6">
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="mb-6 flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
              />
              <label htmlFor="terms" className="text-sm">
                Agree to Terms & Conditions
              </label>
            </div>
            <Button
              type="submit"
              className="w-full bg-[#6c5ce7] hover:bg-[#5b4fc7]"
            >
              Login
            </Button>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-[#6c5ce7]">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
