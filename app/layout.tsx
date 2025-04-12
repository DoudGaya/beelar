import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nabilah Sani Mohammed - Policy Expert & Sustainable Energy Specialist",
  description:
    "Nabilah Sani Mohammed is a policy expert specializing in sustainable energy and public policy, with a focus on climate-smart agricultural practices.",
  keywords: [
    "Nabilah Sani Mohammed",
    "policy expert",
    "sustainable energy",
    "public policy",
    "climate-smart agriculture",
    "energy law",
    "Cosmopolitan University",
    "CCSA",
  ],
  authors: [{ name: "Nabilah Sani Mohammed" }],
  creator: "Nabilah Sani Mohammed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nabilahsani.com",
    title: "Nabilah Sani Mohammed - Policy Expert & Sustainable Energy Specialist",
    description:
      "Nabilah Sani Mohammed is a policy expert specializing in sustainable energy and public policy, with a focus on climate-smart agricultural practices.",
    siteName: "Nabilah Sani Mohammed",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabilah Sani Mohammed - Policy Expert & Sustainable Energy Specialist",
    description:
      "Nabilah Sani Mohammed is a policy expert specializing in sustainable energy and public policy, with a focus on climate-smart agricultural practices.",
    creator: "@nabilahsani",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-gray-950/80 dark:border-gray-800">
              <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                    N
                  </div>
                  <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-teal-700 dark:from-white dark:to-teal-400">
                    Nabilah Sani Mohammed
                  </span>
                </Link>
                <nav className="hidden md:flex gap-6">
                  <Link
                    href="/"
                    className="text-sm font-medium hover:text-teal-600 transition-colors dark:hover:text-teal-400"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium hover:text-teal-600 transition-colors dark:hover:text-teal-400"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm font-medium hover:text-teal-600 transition-colors dark:hover:text-teal-400"
                  >
                    Contact
                  </Link>
                </nav>
                <div className="flex items-center gap-4">
                  <a
                    href="http://linkedin.com/in/nabilah-sani-mohammed-41b665145"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-teal-600 transition-colors dark:text-gray-400 dark:hover:text-teal-400"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:nabilah.sani@cosmopolitan.edu.ng"
                    className="text-gray-500 hover:text-teal-600 transition-colors dark:text-gray-400 dark:hover:text-teal-400"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                  <MobileNav />
                </div>
              </div>
            </header>
            {children}
            <footer className="border-t bg-white dark:bg-gray-950 dark:border-gray-800">
              <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                        N
                      </div>
                      <span className="text-lg font-bold">Nabilah Sani Mohammed</span>
                    </Link>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Policy expert specializing in sustainable energy and public policy, with a focus on climate-smart
                      agricultural practices.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Quick Links</h3>
                    <nav className="flex flex-col gap-2">
                      <Link
                        href="/"
                        className="text-sm text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className="text-sm text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                      >
                        About
                      </Link>
                      <Link
                        href="/contact"
                        className="text-sm text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                      >
                        Contact
                      </Link>
                    </nav>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Contact</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Center for Climate-Smart Agriculture (CCSA)
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Cosmopolitan University, Abuja</p>
                      <a
                        href="mailto:nabilah.sani@cosmopolitan.edu.ng"
                        className="text-sm text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                      >
                        nabilah.sani@cosmopolitan.edu.ng
                      </a>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Connect</h3>
                    <div className="flex gap-4">
                      <a
                        href="http://linkedin.com/in/nabilah-sani-mohammed-41b665145"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-teal-100 hover:text-teal-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-teal-900/30 dark:hover:text-teal-400"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                      <a
                        href="mailto:nabilah.sani@cosmopolitan.edu.ng"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-teal-100 hover:text-teal-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-teal-900/30 dark:hover:text-teal-400"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-12 border-t pt-6 dark:border-gray-800">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} Nabilah Sani Mohammed. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'