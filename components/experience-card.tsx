"use client"

import { CalendarIcon, MapPinIcon, ExternalLinkIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ExperienceItem {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string | null
  description: string
  achievements: string[]
  skills: string[]
  companyUrl?: string
  logo?: string
}

interface ExperienceCardProps {
  experience: ExperienceItem
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
  }

  const getDuration = (start: string, end: string | null) => {
    const startDate = new Date(start)
    const endDate = end ? new Date(end) : new Date()

    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth())

    const years = Math.floor(months / 12)
    const remainingMonths = months % 12

    if (years === 0) {
      return `${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`
    } else if (remainingMonths === 0) {
      return `${years} ${years === 1 ? "year" : "years"}`
    } else {
      return `${years} ${years === 1 ? "year" : "years"} ${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`
    }
  }

  return (
    <Card className="w-full bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="space-y-2">
          <CardTitle className="text-lg font-semibold">{experience.position}</CardTitle>
          <CardDescription className="flex items-center gap-2 text-base font-medium">
            {experience.companyUrl ? (
              <Button variant="link" className="h-auto p-0 text-base font-medium text-primary hover:underline" asChild>
                <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer">
                  {experience.company}
                  <ExternalLinkIcon className="ml-1 h-3 w-3" />
                </a>
              </Button>
            ) : (
              experience.company
            )}
          </CardDescription>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <span>
              {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : "Present"}
            </span>
            <span className="text-xs">({getDuration(experience.startDate, experience.endDate)})</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPinIcon className="h-4 w-4" />
            <span>{experience.location}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{experience.description}</p>

        {experience.achievements.length > 0 && (
          <div>
            <h4 className="mb-2 text-sm font-medium">Key Achievements</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {experience.skills.length > 0 && (
          <div>
            <h4 className="mb-2 text-sm font-medium">Skills & Technologies</h4>
            <div className="flex flex-wrap gap-1.5">
              {experience.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs shadow-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
