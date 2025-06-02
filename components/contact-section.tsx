import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">Let's Work Together</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          I'm always excited to take on new challenges and collaborate on innovative projects. Let's create something
          amazing together!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="mailto:kartika.yuliana@email.com"
            className="group flex items-center gap-3 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">krtkayullian18@email.com</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/kartika-yuliana-a21684334/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-medium">LinkedIn Profile</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
