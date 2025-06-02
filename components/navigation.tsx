"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true) // State untuk mengontrol visibilitas navigasi
  const [lastScrollY, setLastScrollY] = useState(0) // Menyimpan posisi scroll terakhir

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll ke bawah dan posisi scroll lebih dari 50px
        setIsVisible(false)
      } else {
        // Scroll ke atas
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-pink-100 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`} // Border merah untuk debugging
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 "> {/* Border biru untuk container utama */}
        <div className="flex justify-between items-center h-16 "> {/* Border hijau untuk header */}
          <div className="text-xl font-bold text-gray-800 "> {/* Border kuning untuk teks */}
            Kartika Yuliana
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 "> {/* Border ungu untuk navigasi */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-pink-500 transition-colors " // Border oranye untuk tombol
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden " // Border pink untuk tombol menu
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 "> {/* Border abu-abu untuk menu mobile */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-gray-600 hover:text-pink-500 transition-colors " // Border indigo untuk tombol mobile
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
