"use client"
import { useEffect, useState } from "react"
import {  Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"


export default function Footer() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
  
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) return null
  
    return (
      <footer className="fixed bottom-0 right-0 p-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon">
              {theme === 'light' && <Sun className="h-[1.2rem] w-[1.2rem]" />}
              {theme === 'dark' && <Moon className="h-[1.2rem] w-[1.2rem]" />}
              {(theme === 'system' || !theme) && <Laptop className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-40" align="end">
            <div className="grid gap-2">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setTheme('light')}
              >
                <Sun className="mr-2 h-4 w-4" />
                Light
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setTheme('dark')}
              >
                <Moon className="mr-2 h-4 w-4" />
                Dark
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setTheme('system')}
              >
                <Laptop className="mr-2 h-4 w-4" />
                System
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </footer>
    )
  }