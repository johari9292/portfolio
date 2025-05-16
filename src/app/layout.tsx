import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Ishaq Ali Johari - Senior Software Engineer',
  description: 'Senior Software Engineer specializing in React JS, React Native, Node JS, Express JS, and Angular. Full-stack developer with expertise in building scalable solutions.',
  keywords: [
    'Ishaq Ali Johari',
    'Senior Software Engineer',
    'React JS',
    'React Native',
    'Node JS',
    'Express JS',
    'Angular',
    'Full Stack Developer',
    'Pakistan'
  ].join(', '),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
} 