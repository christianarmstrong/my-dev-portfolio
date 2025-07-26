"use client"

import { ExperienceCard } from "./experience-card"

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

interface ExperienceTimelineProps {
  experiences: ExperienceItem[]
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  // Sort experiences by start date (most recent first)
  const sortedExperiences = [...experiences].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  )

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Professional Experience</h2>
        <p className="text-muted-foreground">My career journey and key accomplishments</p>
      </div>

      <div className="space-y-6">
        {sortedExperiences.map((experience, index) => (
          <div key={experience.id} className="relative">
            {index < sortedExperiences.length - 1 && <div className="absolute left-6 top-full h-6 w-px bg-border" />}
            <ExperienceCard experience={experience} />
          </div>
        ))}
      </div>
    </div>
  )
}
