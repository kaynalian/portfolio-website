import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { link } from "fs"

export default function ProjectsSection() {
  const projects = [
     {
      title: "Personal Portofolio",
      description:
        "A personal website designed to present my projects, skills, and professional background as a web and mobile developer, aimed at showcasing my expertise and attracting clients or employers.",
      image: "/photos/kena.jpg",
      tags: ["Mobile", "Portofolio", "Frontend"],
      link: "#",
    },
    {
      title: "E-Recruitment Website",
      description:
        "E-Recruitment is a web-based platform that streamlines the hiring process by allowing companies to post job vacancies, manage applications, and conduct online candidate selection, while providing applicants with easy access to job info and remote application features.",
      image: "/photos/mitrarec.jpg",
      tags: ["Web", "Recruitment", "UI/UX Designer"],
      link: "https://www.figma.com/design/r15lPnkpeG6FnAxVHd5Qnz/Aplikasi-system-HRD-Management-untuk-Proses-recruitment%2C-magang%2C-dan-training%2C-dan-penilaian-kinerja?node-id=144-111&t=Eey64HJcEzhznJ7Q-0",
    },
    {
      title: "Ignitor",
      description: "Our team created three educational games on culture, sports, and health to engage youth with fun, interactive learning—promoting cultural awareness, sportsmanship, and healthy habits.",
      image: "/photos/gameeee.jpg",
      tags: ["Game", "Game Education", "UI/UX Designer&Game Developer"],
      link: "https://ignitor.codewithwan.tech/",
    },
    {
      title: "Selin",
      description:
        "Selin is an online attendance application designed to simplify presence tracking for lecturers and staff, equipped with face recognition and geolocation features for secure and accurate verification.",
      image: "/photos/selin.jpg",
      tags: ["Mobile", "Attendance", "Mobile Developer&Video Editor"],
      link: "https://drive.google.com/file/d/1uT2qWhDghJf2q3M-ZD2FMzkmWodi4DTV/view?usp=sharing",
    },
    {
      title: "Giggles",
      description:
        "Giggles is a health app that helps users identify skin issues and simplifies shopping for skincare products tailored to their needs.",
      image: "/photos/gles.jpg",
      tags: ["Mobile", "Skincare", "UI Research&UI/UX Designer"],
      link: "https://www.figma.com/design/bLC1qf4ThEslYdAnKP9sJN/giggles?node-id=2001-826&t=I5t5JUhY7Ai9lDKO-0",
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
