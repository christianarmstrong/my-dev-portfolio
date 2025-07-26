"use client"

import { CalendarIcon, ExternalLinkIcon, GithubIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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

interface ProjectCardProps {
  project: ProjectItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "planned":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="w-full bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
            <CardDescription className="text-base">{project.description}</CardDescription>
          </div>
          <Badge className={`ml-4 ${getStatusColor(project.status)} border-0`}>
            {project.status.replace("-", " ")}
          </Badge>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <span>
              {formatDate(project.startDate)} - {project.endDate ? formatDate(project.endDate) : "Present"}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {project.imageUrl && (
          <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-100">
            <img
              src={project.imageUrl || "/placeholder.svg"}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <p className="text-sm leading-relaxed text-muted-foreground">{project.longDescription}</p>

        {project.technologies.length > 0 && (
          <div>
            <h4 className="mb-2 text-sm font-medium">Technologies Used</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs shadow-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {(project.githubUrl || project.liveUrl) && (
          <div className="flex gap-3 pt-2">
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="shadow-sm hover:shadow-md transition-shadow bg-transparent"
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="outline"
                size="sm"
                className="shadow-sm hover:shadow-md transition-shadow bg-transparent"
                asChild
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLinkIcon className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
