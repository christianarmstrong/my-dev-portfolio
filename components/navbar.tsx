"use client"

import { Button } from "@/components/ui/button"

interface NavbarProps {
  name: string
}

export function Navbar({ name }: NavbarProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Name/Logo */}
          <div className="flex-shrink-0">
            <Button 
              variant="ghost"
              className="text-xl font-bold"
              onClick={() => scrollToSection("home")}
            >
                {name}
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium"
              onClick={() => scrollToSection("awards")}
            >
              Awards
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
