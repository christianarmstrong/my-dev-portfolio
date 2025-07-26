import { Navbar } from "@/components/navbar"
import { Introduction } from "@/components/introduction"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { ProjectsTimeline } from "@/components/projects-timeline"
import { AwardsTimeline } from "@/components/awards-timeline"

const introductionData = {
  name: "Christian Armstrong",
  title: "Software Engineer",
  location: "Springfield, MO",
  email: "contact@christianarmstrong.dev",
  linkedin: "https://www.linkedin.com/in/christianarmstrongdev/",
  github: "https://github.com/christianarmstrong",
  profileImage: "/images/trixxiescary.jpg",
  introduction:
    "Software Engineer with 4 years of professional experience in building scalable APIs and web applications. Experienced in full-stack development with a focus on backend systems and API design.",
}

const experienceData = [
  {
    id: "1",
    company: "Expedia Partner Solutions",
    position: "Software Engineer 2",
    location: "Springfield, MO",
    startDate: "2023-01-01",
    endDate: null, // Current position
    description:
      "Working on Expedia's Rapid API to power travel worldwide.",
    achievements: [
      "Designed and led development of a distributed auto-cancellation system for a book now pay later functionality, handling millions of itineraries and expected to drive $1.5 billion in GBV.",
      "Built an end-to-end testing framework across 30 services, reducing manual QA time by 10+ hours per week.",
      "Architected and developing a merchandising system to automate searching for campaigns and promotions, expected to increase bookings by 10% ($11B GBV per year).",
    ],
    skills: ["Java", "AWS", "Opensearch", "PostgreSQL", "Docker", "REST API", "React", "TypeScript", "Jest"],
  },
  {
    id: "2",
    company: "Square One Supply Company",
    position: "Software Engineer",
    location: "Springfield, MO",
    startDate: "2022-07-01",
    endDate: "2023-02-01",
    description:
      "Helped automate the production process for concentrate product.",
    achievements: [
      "Led development of an Android app that automated the production process for THC purification, improving accuracy and efficiency.",
    ],
    skills: ["Kotlin", "Arduino"],
  },
  {
    id: "3",
    company: "Christian Armstrong Development",
    position: "Freelance Web Developer",
    location: "Remote",
    startDate: "2019-01-15",
    endDate: "2020-05-31",
    description:
      "Helped the tabernacle in Branson, MO with their web presence.",
    achievements: [
      "Designed, developed, and maintained a website enabling 100+ members to access tabernacle services.",
    ],
    skills: ["HTML", "CSS"],
  },
]

const projectsData = [
{
    id: "1",
    title: "Opener",
    description: "Webapp that creates AI generated icebreakers for social media",
    longDescription:
      "Developed an AI powered web application that generates personalized icebreakers for social media platforms. Utilized OpenAI's GPT-3 to create engaging content based on user bios.",
    technologies: ["NextJS", "Tailwind CSS", "Javascript", "OpenAI API", "PostgreSQL", "Clerk"],
    startDate: "2022-12-01",
    endDate: "2023-03-01",
    githubUrl: "https://github.com/christianarmstrong/opener",
    imageUrl: "/images/opener-banner.jpg",
    status: "completed" as const,
  },
  {
    id: "2",
    title: "Freelance Portfolio",
    description: "My freelance portfolio showcasing my work and skills",
    longDescription:
      "I built this when I was freelancing to showcase my work and skills. It includes a blog, portfolio, and contact form.",
    technologies: ["HTML", "CSS"],
    startDate: "2021-01-01",
    endDate: "2021-06-01",
    status: "completed" as const,
  },
  {
    id: "3",
    title: "FBLA Game",
    description: "Video game built for the Future Business Leaders of America game programming competition",
    longDescription:
      "Built an open-world game where players can explore, complete tests, and earn points. Once enough points are earned, you win the game and get cool ending cutscenes.",
    technologies: ["Gamemaker"],
    startDate: "2017-06-01",
    endDate: "2017-12-30",
    status: "completed" as const,
  },
]

const awardsData = [
  {
    id: "1",
    title: "1st Place - Competitive Programming",
    organization: "Hack4Good",
    date: "2018-11-28",
    description:
      "Won 1st place in the Hack4Good competitive programming competition against 22 other teams from schools around the state.",
    category: "Competition",
    imageUrl: "/images/hacking4good.jpg",
  },
  {
    id: "2",
    title: "11th Place - FBLA Game Programming",
    organization: "Future Business Leaders of America",
    date: "2023-08-20",
    description:
      "Achieved 11th place in the FBLA Game Programming competition, showcasing skills in game design and development.",
    category: "Competition",
    imageUrl: "/images/computerProgrammingWin.jpg",
  },
]

export default function HomePage() {
  return (
    <div id="home" className="min-h-screen" style={{ backgroundColor: "#f5eee7" }}>
      <Navbar name={introductionData.name} />
      <div className="container mx-auto max-w-4xl px-4 py-8 space-y-8">
        <Introduction {...introductionData} />
        <div id="experience">
          <ExperienceTimeline experiences={experienceData} />
        </div>
        <div id="projects">
          <ProjectsTimeline projects={projectsData} />
        </div>
        <div id="awards">
          <AwardsTimeline awards={awardsData} />
        </div>
      </div>
    </div>
  )
}
