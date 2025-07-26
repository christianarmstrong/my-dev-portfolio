"use client"

import { AwardCard } from "./award-card"

interface AwardItem {
  id: string
  title: string
  organization: string
  date: string
  description: string
  category: string
  certificateUrl?: string
  imageUrl?: string
}

interface AwardsTimelineProps {
  awards: AwardItem[]
}

export function AwardsTimeline({ awards }: AwardsTimelineProps) {
  // Sort awards by date (most recent first)
  const sortedAwards = [...awards].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Awards & Recognition</h2>
        <p className="text-muted-foreground">Achievements and honors received throughout my career</p>
      </div>

      <div className="space-y-6">
        {sortedAwards.map((award, index) => (
          <div key={award.id} className="relative">
            {index < sortedAwards.length - 1 && <div className="absolute left-6 top-full h-6 w-px bg-border" />}
            <AwardCard award={award} />
          </div>
        ))}
      </div>
    </div>
  )
}
