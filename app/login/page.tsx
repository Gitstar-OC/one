'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from 'next/link'
import Footer from '@/components/ui/footer'


export default function Component() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/20 px-4 dark:from-neutral-950 dark:to-black">
      <Link href="/">
      <Button
        variant="ghost"
        className="absolute top-4 left-4 p-2"
        // onClick={() => setShowOptions(false)}
      >
        
        <ArrowLeft className="h-6 w-6" />
      </Button>
      </Link>
      <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">Choose Your Role</h1>
      <div className="flex flex-col sm:flex-row gap-8 w-full max-w-2xl">
        <div className="flex-1 rounded-lg bg-white dark:bg-neutral-900 shadow-lg transition-transform hover:scale-105">
          <Link href="/home?=student" className="block h-full">
            <div className="aspect-square relative bg-white">
              <Image
                src="/Student.webp"
                alt="Student"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 dark:text-white">Student</h2>
              <p className="text-muted-foreground dark:text-gray-300">Prepare for tests and learn efficiently</p>
            </div>
          </Link>
        </div>
        <div className="flex-1 rounded-lg bg-white dark:bg-neutral-900 shadow-lg transition-transform hover:scale-105">
          <Link href="/home?=teacher" className="block h-full">
            <div className="aspect-square relative bg-white">
              <Image
                src="/Teacher.webp"
                alt="Teacher"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 dark:text-white">Teacher</h2>
              <p className="text-muted-foreground dark:text-gray-300">Create tests and manage student progress</p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}