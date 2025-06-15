import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8">
          Have a project in mind or just want to say hi? Fill out the form below, and I'll get back to you as soon as
          possible!
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xnnvdweo"
          method="POST"
          className="space-y-4"
        >
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-pink-400 focus:border-pink-400"
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-pink-400 focus:border-pink-400"
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-pink-400 focus:border-pink-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium py-2 rounded-md shadow-md transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <Link
            href="mailto:kartika.yuliana@email.com"
            className="flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm font-medium">Email Me</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/kartika-yuliana-a21684334/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm font-medium">LinkedIn</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
