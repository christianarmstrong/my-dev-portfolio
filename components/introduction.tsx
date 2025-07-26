"use client"

import { MailIcon, MapPinIcon, LinkedinIcon, GithubIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface IntroductionProps {
  name: string
  title: string
  location: string
  email: string
  linkedin?: string
  github?: string
  profileImage: string
  introduction: string
}

export function Introduction({
  name,
  title,
  location,
  email,
  linkedin,
  github,
  profileImage,
  introduction,
}: IntroductionProps) {
  return (
    <Card className="w-full bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={profileImage || "/placeholder.svg"}
                alt={`${name} profile picture`}
                className="h-32 w-32 rounded-full object-cover ring-4 ring-primary/10 shadow-md"
              />
              <div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-green-500 ring-4 ring-white shadow-sm" />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{name}</h1>
              <p className="text-xl text-primary font-medium">{title}</p>
              <div className="mt-2 flex items-center justify-center gap-1 text-muted-foreground md:justify-start">
                <MapPinIcon className="h-4 w-4" />
                <span className="text-sm">{location}</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-2xl">{introduction}</p>

            {/* Contact Information */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button
                variant="outline"
                size="sm"
                className="shadow-sm hover:shadow-md transition-shadow bg-transparent"
                asChild
              >
                <a href={`mailto:${email}`}>
                  <MailIcon className="h-4 w-4" />
                  Email
                </a>
              </Button>

              {linkedin && (
                <Button
                  variant="outline"
                  size="sm"
                  className="shadow-sm hover:shadow-md transition-shadow bg-transparent"
                  asChild
                >
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              )}

              {github && (
                <Button
                  variant="outline"
                  size="sm"
                  className="shadow-sm hover:shadow-md transition-shadow bg-transparent"
                  asChild
                >
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              )}

            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
