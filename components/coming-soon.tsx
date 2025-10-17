"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function ComingSoon() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    setIsSubmitted(true)
    setTimeout(() => {
      setEmail("")
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="Körtüll" width={400} height={100} className="w-auto h-16 md:h-20" priority />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1] text-foreground">
            Coming Soon
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed">
            We're working on something exciting. Be the first to know when we launch.
          </p>
        </div>

        {/* Email Form */}
        <div className="max-w-md mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="sr-only">
                  Email address
                </Label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 px-4 text-base bg-card border-border"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 px-6 gap-2 text-white"
                    style={{ backgroundColor: "#00545D" }}
                  >
                    Notify Me
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Get notified when we launch. No spam, ever.</p>
            </form>
          ) : (
            <div className="py-8 space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "rgba(0, 84, 93, 0.1)" }}
              >
                <Sparkles className="w-6 h-6" style={{ color: "#00545D" }} />
              </div>
              <h3 className="text-xl font-semibold">You're on the list!</h3>
              <p className="text-muted-foreground">We'll notify you as soon as we launch.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
