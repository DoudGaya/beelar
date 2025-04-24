"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, MapPin, Phone, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { BackgroundGradient } from "@/components/background-gradient"
import { FadeIn } from "@/components/fade-in"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Mock API call to send email
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }
      toast({
        title: "Message sent!",
        description: "Thank you for your message. Nabilah will get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <BackgroundGradient className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col gap-4 mb-12">
              <Link href="/">
                <Button variant="ghost" className="w-fit group">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to Home
                </Button>
              </Link>
              <FadeIn>
                <div className="inline-flex items-center rounded-full border border-teal-200/30 bg-teal-50/50 px-3 py-1 text-sm backdrop-blur-sm dark:border-teal-500/30 dark:bg-teal-900/20 w-fit">
                  <span className="text-teal-700 dark:text-teal-400">Contact</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-teal-700 dark:from-white dark:to-teal-400">
                  Get in Touch
                </h1>
                <p className="text-gray-600 md:text-xl mt-2 max-w-[600px] dark:text-gray-300">
                  Have a question or want to collaborate? Feel free to reach out and I'll get back to you soon.
                </p>
              </FadeIn>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <FadeIn className="flex flex-col justify-center space-y-8">
                <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-950 dark:border dark:border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-lg">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        <a
                          href="mailto:nabilah.mohammed@alfenergyng.com"
                          className="hover:text-teal-600 transition-colors dark:hover:text-teal-400"
                        >
                          nabilah.mohammed@alfenergyng.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Feel free to email me directly for any inquiries.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-950 dark:border dark:border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-lg">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Location</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        Center for Climate-Smart Agriculture (CCSA)
                        <br />
                        Cosmopolitan University
                        <br />
                        Abuja, Nigeria
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Available for in-person meetings by appointment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-950 dark:border dark:border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-lg">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Connect</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        <a
                          href="http://linkedin.com/in/nabilah-sani-mohammed-41b665145"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-teal-600 transition-colors dark:hover:text-teal-400"
                        >
                          LinkedIn Profile
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Connect with me professionally on LinkedIn.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <ScrollReveal>
                <div className="relative overflow-hidden rounded-2xl bg-white p-1 shadow-lg dark:bg-gray-950">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-[0.15]"></div>
                  <div className="relative overflow-hidden rounded-xl bg-white p-6 dark:bg-gray-950">
                    <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="border-gray-200 focus:border-teal-500 focus:ring-teal-500 dark:border-gray-800"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          className="border-gray-200 focus:border-teal-500 focus:ring-teal-500 dark:border-gray-800"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="What is this regarding?"
                          className="border-gray-200 focus:border-teal-500 focus:ring-teal-500 dark:border-gray-800"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Your message"
                          className="min-h-[150px] border-gray-200 focus:border-teal-500 focus:ring-teal-500 dark:border-gray-800"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white shadow-lg shadow-teal-500/20 transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="animate-spin h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </BackgroundGradient>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm dark:border-teal-500/30 dark:bg-teal-900/20">
                  <span className="text-teal-700 dark:text-teal-400">Frequently Asked Questions</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-teal-700 dark:from-white dark:to-teal-400">
                    Common Questions
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Answers to questions I'm frequently asked.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="mx-auto grid max-w-5xl gap-8 py-12">
              <ScrollReveal>
                <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-950 dark:border dark:border-gray-800">
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-teal-500 to-emerald-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                  <h3 className="text-xl font-bold">What areas of research are you currently focused on?</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    I'm currently focused on sustainable energy integration in agricultural practices, particularly
                    looking at how renewable energy technologies can enhance productivity for smallholder farmers while
                    reducing environmental impact.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-950 dark:border dark:border-gray-800">
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-teal-500 to-emerald-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                  <h3 className="text-xl font-bold">Do you offer consulting services?</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Yes, I provide consulting services in the areas of sustainable energy policy, climate-smart
                    agriculture, and energy access solutions. Please reach out via the contact form to discuss potential
                    collaborations.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-950 dark:border dark:border-gray-800">
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-teal-500 to-emerald-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                  <h3 className="text-xl font-bold">Are you available for speaking engagements?</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    I regularly participate in conferences, workshops, and panel discussions on sustainable energy,
                    public policy, and climate-smart agriculture. Please contact me with details about your event, and
                    I'll be happy to consider your invitation.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
