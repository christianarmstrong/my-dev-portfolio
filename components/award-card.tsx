"use client"

import { CalendarIcon, TrophyIcon, ExternalLinkIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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

interface AwardCardProps {
  award: AwardItem
}

export function AwardCard({ award }: AwardCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "competition":
        return "bg-blue-100 text-blue-800"
      case "professional":
        return "bg-green-100 text-green-800"
      case "competition":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="w-full bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center shadow-md">
                <TrophyIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="space-y-2 flex-1">
              <CardTitle className="text-lg font-semibold">{award.title}</CardTitle>
              <CardDescription className="text-base font-medium text-gray-700">{award.organization}</CardDescription>
            </div>
          </div>
          <Badge className={`ml-4 ${getCategoryColor(award.category)} border-0`}>{award.category}</Badge>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground ml-13">
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <span>{formatDate(award.date)}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {award.imageUrl && (
          <div className="w-full h-80 rounded-lg overflow-hidden bg-gray-100">
            <img
              src={award.imageUrl || "/placeholder.svg"}
              alt={`${award.title} certificate`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <p className="text-sm leading-relaxed text-muted-foreground">{award.description}</p>

        {award.certificateUrl && (
          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              className="shadow-sm hover:shadow-md transition-shadow bg-transparent"
              asChild
            >
              <a href={award.certificateUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon className="h-4 w-4" />
                View Certificate
              </a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
