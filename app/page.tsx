'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight} from "lucide-react"
// import OptionsPage from '@/components/ui/optionspage'
import Footer from '@/components/ui/footer'
import Link from 'next/link'

export default function HomePage() {
  // const [showOptions, setShowOptions] = useState(false)

  const HomePageContent = () => (
    <>
    <div className="min-h-screen w-full relative flex items-center justify-center bg-white dark:bg-black">
      <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]" />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="relative flex flex-col items-center justify-center text-center px-4">
        <main className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-black dark:text-white">
            Your Ultimate Test Prep and PDF Assistant
          </h1>
          <p className="text-xl text-muted-foreground mb-8 sm:text-2xl dark:text-gray-300">
            Create and prepare tests, learn and summarize PDFs, and ask questions to enhance your study experience.
          </p>
          <Link href="/login">
          <Button
            size="lg"
            className="text-lg px-8 py-6 group transition-all duration-300 ease-in-out bg-primary text-primary-foreground hover:bg-primary/90"
            // onClick={() => setShowOptions(true)}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Button>
          </Link>
        </main>
      </div>
      <Footer />
    </div>
    </>
  )

  return <HomePageContent />
}