import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kartika Yuliana | Portfolio',
  description: 'Kartika Yuliana - UI/UX Designer Portfolio',
  generator: 'Next.js',
  icons: {
    icon: '/photos/kay.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
