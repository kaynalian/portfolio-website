import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { link } from "fs"

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Recruitment Website",
      description:
        "Complete UI/UX design for a fashion e-commerce mobile application with user-centered design approach.",
      image: "/photos/recru.jpg",
      tags: ["Mobile Design", "E-commerce", "User Research"],
      link: "#",
    },
    {
      title: "Ignitor",
      description: "Modern dashboard design for a project management SaaS platform with data visualization.",
      image: "/photos/gameeee.jpg",
      tags: ["Web Design", "Dashboard", "Data Viz"],
      link: "#",
    },
    {
      title: "Selin",
      description:
        "Complete brand identity design including logo, color palette, and brand guidelines for a tech startup.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Branding", "Logo Design", "Guidelines"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-pink-25">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-16">Featured Projects</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <Button
                    size="sm"
                    className="bg-white text-gray-800 hover:bg-gray-100"
                    onClick={() => window.open(project.link, "_blank")} // Gunakan link dari objek project
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-pink-100 text-pink-700 hover:bg-pink-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
