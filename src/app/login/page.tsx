"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Checkbox } from "@/src/components/ui/checkbox"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would handle authentication here
    window.location.href = "/dashboard"
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex w-full flex-col items-center justify-center p-8 md:w-1/2">
        <div className="mb-8">
          <Link href="/">
            <h1 className="text-4xl font-bold text-[#6c5ce7]">SkillShare</h1>
          </Link>
        </div>
        <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-center text-3xl font-bold">Welcome Back!</h2>
          <Button variant="outline" className="mb-3 w-full bg-[#4CAF50] text-white hover:bg-[#45a049]">
            Login with Google
          </Button>
          <Button variant="outline" className="mb-6 w-full bg-[#5b5fc7] text-white hover:bg-[#4a4da6]">
            Login with Facebook
          </Button>
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">OR</span>
            </div>
          </div>
          <form onSubmit={handleLogin}>
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
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label htmlFor="remember" className="text-sm">
                  Remember Me
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-[#6c5ce7]">
                Forgot Password?
              </Link>
            </div>
            <Button type="submit" className="w-full bg-[#6c5ce7] hover:bg-[#5b4fc7]">
              Login
            </Button>
          </form>
        </div>
      </div>
      <div className="hidden w-1/2 bg-[#f5f6fa] md:flex md:items-center md:justify-center">
        <div className="p-8">
          <Image
            src="/placeholder.svg?height=500&width=600"
            alt="Learning illustration"
            width={600}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
