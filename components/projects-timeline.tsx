"use client"

import { ProjectCard } from "./projects-card"

interface ProjectItem {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  startDate: string
  endDate: string | null
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  status: "completed" | "in-progress" | "planned"
}

interface ProjectsTimelineProps {
  projects: ProjectItem[]
}

export function ProjectsTimeline({ projects }: ProjectsTimelineProps) {
  // Sort projects by start date (most recent first)
  const sortedProjects = [...projects].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Personal Projects</h2>
        <p className="text-muted-foreground">Side projects and personal development work</p>
      </div>

      <div className="space-y-6">
        {sortedProjects.map((project, index) => (
          <div key={project.id} className="relative">
            {index < sortedProjects.length - 1 && <div className="absolute left-6 top-full h-6 w-px bg-border" />}
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}
