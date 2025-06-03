import { Card, CardContent } from "@/components/ui/card"
import { PenTool, Palette, Layers, Award } from "lucide-react"

export default function SkillsSection() {
  const skills = [
    { name: "Figma", icon: PenTool, description: "UI/UX Design & Prototyping" },
    { name: "Canva", icon: Palette, description: "Graphic Design & Branding" },
    { name: "CorelDRAW", icon: Layers, description: "Vector Graphics & Illustration" },
    { name: "Capcut", icon: Layers, description: "Editing & creating videos with effects and music." },
    { name: "HTML", icon: Layers, description: "Semantic markup, responsive layout, flexbox & grid, styling consistency" },
    { name: "Flutter", icon: Layers, description: "A framework for building cross-platform mobile apps with a single codebase." },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-16">Skills & Expertise</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-pink-100"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Certifications</h3>
          <div className="flex justify-center gap-6 flex-wrap"> {/* Tambahkan gap untuk jarak horizontal */}

            <div className="inline-flex items-center bg-gradient-to-r from-pink-50 to-pink-100 rounded-full px-8 py-4 border border-pink-200">
              <Award className="w-6 h-6 text-pink-500 mr-3" />
              <a
                href="/docs/Cisco.pdf" // Ganti dengan path file PDF atau URL tujuan
                target="_blank" // Membuka di tab baru
                rel="noopener noreferrer" // Keamanan tambahan untuk link eksternal
                className="text-lg font-medium text-gray-800 hover:underline"
              >
                CCNA: Switching, Routing, and Wireless Essentials
              </a>
            </div>

            <div className="inline-flex items-center bg-gradient-to-r from-pink-50 to-pink-100 rounded-full px-8 py-4 border border-pink-200">
              <Award className="w-6 h-6 text-pink-500 mr-3" />
              <a
                href="/docs/DatabaseDesign.pdf" // Ganti dengan path file PDF atau URL tujuan
                target="_blank" // Membuka di tab baru
                rel="noopener noreferrer" // Keamanan tambahan untuk link eksternal
                className="text-lg font-medium text-gray-800 hover:underline"
              >
                Database Design with SQL
              </a>
            </div>

            <div className="inline-flex items-center bg-gradient-to-r from-pink-50 to-pink-100 rounded-full px-8 py-4 border border-pink-200">
              <Award className="w-6 h-6 text-pink-500 mr-3" />
              <a
                href="/docs/DatabaseProgramming.pdf" // Ganti dengan path file PDF atau URL tujuan
                target="_blank" // Membuka di tab baru
                rel="noopener noreferrer" // Keamanan tambahan untuk link eksternal
                className="text-lg font-medium text-gray-800 hover:underline"
              >
                Database Programming with SQL
              </a>
            </div>

                        <div className="inline-flex items-center bg-gradient-to-r from-pink-50 to-pink-100 rounded-full px-8 py-4 border border-pink-200">
              <Award className="w-6 h-6 text-pink-500 mr-3" />
              <a
                href="/docs/SertifAI.pdf" // Ganti dengan path file PDF atau URL tujuan
                target="_blank" // Membuka di tab baru
                rel="noopener noreferrer" // Keamanan tambahan untuk link eksternal
                className="text-lg font-medium text-gray-800 hover:underline"
              >
                Career Essentials in Generative AI
              </a>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
