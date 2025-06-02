"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Palette, ChevronDown } from "lucide-react"

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                  Yuliana
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 font-light">UI/UX Designer</p>
              <p className="text-lg text-gray-500 max-w-lg">
                Creating intuitive and beautiful digital experiences that connect people with technology through thoughtful design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                 onClick={() => window.open("/docs/KARTIKA-resume.pdf", "_blank")} // Ganti dengan path file PDF Anda
                className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full transition-all duration-300"
              >
                Download CV
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Tilted Square Profile Image */}
              <div className="relative transform rotate-6 hover:rotate-3 transition-transform duration-500">
                <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-pink-200 to-pink-300 p-3 shadow-2xl">
                  <Image
                    src="/photos/kay.jpg"
                    alt="Kartika Yuliana"
                    width={400}
                    height={400}
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-100 rounded-2xl rotate-12 opacity-80"></div>
                {/* <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Palette className="w-10 h-10 text-white" />
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button onClick={() => scrollToSection("about")} className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-pink-400" />
          </button>
        </div>
      </div>
    </section>
  )
}
