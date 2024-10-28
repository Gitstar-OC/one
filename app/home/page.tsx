"use client"

import React, { useState, useEffect } from "react"
import { FileUpload } from "@/components/ui/file-upload"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Footer from '@/components/ui/footer'

// Custom hook for typing effect
function useTypingEffect(texts: string[], typingSpeed = 50, deletingSpeed = 30, pauseDuration = 1000) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (currentText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(texts[currentTextIndex].slice(0, currentText.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => setIsTyping(false), pauseDuration)
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deletingSpeed)
      } else {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isTyping, texts, typingSpeed, deletingSpeed, pauseDuration])

  return currentText
}

export default function Component() {
  const [files, setFiles] = useState([])

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  const placeholders = [
    "Enter your thoughts...",
    "What's on your mind?",
    "Type something amazing...",
    "Share your ideas...",
  ]

  const currentPlaceholder = useTypingEffect(placeholders)

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-4xl mx-auto shadow-xl">
        <CardContent className="p-6 space-y-6">
          <div className="w-full min-h-[24rem] border-2 border-dashed bg-white dark:bg-black border-gray-300 dark:border-white rounded-lg flex items-center justify-center">
            <FileUpload onChange={handleFileUpload} />
          </div>
          <div className="relative">
            <Input
              type="text"
              className="w-full p-4 text-lg transition-all duration-300 ease-in-out bg-white dark:bg-black border-2 border-gray-300 dark:border-white rounded-lg focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800"
              placeholder={currentPlaceholder}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              {/* <span className="text-gray-400 animate-pulse">|</span> */}
            </div>
          </div>
        </CardContent>
      </Card>
      <Footer />
    </div>
  )
}