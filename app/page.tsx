import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Mail } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"
import { BackgroundGradient } from "@/components/background-gradient"
import { FadeIn } from "@/components/fade-in"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <BackgroundGradient className="w-full py-20 md:py-32 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <FadeIn className="flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center rounded-full border border-teal-200/30 bg-teal-50/50 px-3 py-1 text-sm backdrop-blur-sm dark:border-teal-500/30 dark:bg-teal-900/20 w-fit">
                  <span className="text-teal-700 dark:text-teal-400">
                    Policy Expert & Sustainable Energy Specialist
                  </span>
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-teal-700 dark:from-white dark:to-teal-400">
                    Nabilah Sani Mohammed (Ph.D.)
                  </h1>
                  <p className="text-2xl text-teal-700 font-medium dark:text-teal-400">
                    Director, Corporate Services at Alfuttaim Nigeria Limited
                  </p>
                  <p className="max-w-[600px] text-gray-600 md:text-md dark:text-gray-300">
                  Head of Communication and 
                  Engagement at the Center for Climate-Smart Agriculture, Cosmopolitan University, Abuja
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Link href="/about">
                    <Button className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white shadow-lg shadow-teal-500/20 transition-all duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-teal-200 hover:bg-teal-50 dark:border-teal-700 dark:hover:bg-teal-900/30"
                    >
                      Get in Touch
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href="http://linkedin.com/in/nabilah-sani-mohammed-41b665145"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors dark:text-gray-300 dark:hover:text-teal-400"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:nabilah.sani@cosmopolitan.edu.ng"
                    className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors dark:text-gray-300 dark:hover:text-teal-400"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </FadeIn>
              <div className="mx-auto lg:mx-0 relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 opacity-30"></div>
                <div className="relative">
                  <Image
                    src="/beelar.jpg"
                    alt="Nabilah Sani Mohammed"
                    width={500}
                    height={600}
                    className="mx-auto h-[500px] aspect-auto rounded-2xl object-top object-cover shadow-2xl"
                    priority
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 "></div>
                </div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full border border-teal-200 bg-white p-5 shadow-xl dark:border-teal-700 dark:bg-gray-900">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30"></div>
                  <div className="absolute inset-0 rounded-full bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
                  <div className="relative h-full w-full rounded-full bg-gradient-to-br from-teal-600 to-emerald-600"></div>
                </div>
              </div>
            </div>
          </div>
        </BackgroundGradient>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm dark:border-teal-500/30 dark:bg-teal-900/20">
                  <span className="text-teal-700 dark:text-teal-400">Areas of Expertise</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-teal-700 dark:from-white dark:to-teal-400">
                    Driving Sustainable Change
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Combining academic rigor with practical insights to address the global energy transition.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-8 lg:grid-cols-3 lg:gap-12">
              <ScrollReveal className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-teal-50 to-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:from-gray-900 dark:to-gray-950 dark:border dark:border-gray-800">
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-lg mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M12 2v8"></path>
                      <path d="m4.93 10.93 1.41 1.41"></path>
                      <path d="M2 18h2"></path>
                      <path d="M20 18h2"></path>
                      <path d="m19.07 10.93-1.41 1.41"></path>
                      <path d="M22 22H2"></path>
                      <path d="m8 22 4-10 4 10"></path>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Sustainable Energy</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Promoting sustainable energy technologies to enhance energy efficiency in rural and underserved 
                      communities.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal className="group" delay={0.2}>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-teal-50 to-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:from-gray-900 dark:to-gray-950 dark:border dark:border-gray-800">
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-lg mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Public Policy</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Driving policy research and analysis to deliver practical solutions for energy access challenges and develop sustainable
                      data driven energy frameworks.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal className="group" delay={0.4}>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-teal-50 to-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:from-gray-900 dark:to-gray-950 dark:border dark:border-gray-800">
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-lg mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M18 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"></path>
                      <path d="M12 16c-2.9 0-5.4 2.2-5.9 5"></path>
                      <path d="M20 21h-8"></path>
                      <path d="M2 21h4"></path>
                      <path d="M2 16h8"></path>
                      <path d="M2 11h6"></path>
                      <path d="M2 6h4"></path>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Climate-Smart Agriculture</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Leading initiatives focused on integrating energy solutions into agricultural practices for
                      sustainable development.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm dark:border-teal-500/30 dark:bg-teal-900/20">
                  <span className="text-teal-700 dark:text-teal-400">Academic Background</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-teal-700 dark:from-white dark:to-teal-400">
                    Education & Research
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    A strong academic foundation in energy law and public policy.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="mx-auto grid max-w-4xl gap-8 py-8">
              <ScrollReveal>
                <div className="relative overflow-hidden rounded-2xl bg-white p-1 shadow-lg dark:bg-gray-950 dark:border dark:border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-[0.15]"></div>
                  <div className="relative overflow-hidden rounded-xl bg-white p-6 dark:bg-gray-950">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 rounded-full border-8 border-white bg-gradient-to-br from-teal-500 to-emerald-500 dark:border-gray-950"></div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-2xl font-bold">PhD in Public Policy</h3>
                      <p className="text-teal-600 dark:text-teal-400">Universiti Brunei Darussalam</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Research on sustainable energy policies and their impact on energy access, economic development, and environmental sustainability in emerging economies, with a focus on the use of biomass for electricity generation in Nigerian.
                      </p>
                      <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                        {/* <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-700 dark:border-teal-500/30 dark:bg-teal-900/20 dark:text-teal-400">
                          Currently pursuing
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="relative overflow-hidden rounded-2xl bg-white p-1 shadow-lg dark:bg-gray-950 dark:border dark:border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-[0.15]"></div>
                  <div className="relative overflow-hidden rounded-xl bg-white p-6 dark:bg-gray-950">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 rounded-full border-8 border-white bg-gradient-to-br from-teal-500 to-emerald-500 dark:border-gray-950"></div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-2xl font-bold">Master's in Energy Law and Policy</h3>
                      <p className="text-teal-600 dark:text-teal-400">The Pennsylvania State University</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Specialized in renewable energy regulations and international energy policy frameworks.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <div className="relative overflow-hidden rounded-2xl bg-white p-1 shadow-lg dark:bg-gray-950 dark:border dark:border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-[0.15]"></div>
                  <div className="relative overflow-hidden rounded-xl bg-white p-6 dark:bg-gray-950">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 rounded-full border-8 border-white bg-gradient-to-br from-teal-500 to-emerald-500 dark:border-gray-950"></div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-2xl font-bold">Bachelor of Laws</h3>
                      <p className="text-teal-600 dark:text-teal-400">Baze University</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Foundation in legal principles with focus on environmental and energy law.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm dark:border-teal-500/30 dark:bg-teal-900/20">
                  <span className="text-teal-700 dark:text-teal-400">Impact & Achievements</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-teal-700 dark:from-white dark:to-teal-400">
                    Making a Difference
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Driving sustainable change through policy innovation and research.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-3">
              <ScrollReveal>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-950 dark:border dark:border-gray-800">
                  <div className="text-4xl font-bold text-teal-600 dark:text-teal-400">
                    <AnimatedCounter value={12} duration={2000} />+
                  </div>
                  <h3 className="text-xl font-medium">Research Papers</h3>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Published in international journals on sustainable energy policy
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-950 dark:border dark:border-gray-800">
                  <div className="text-4xl font-bold text-teal-600 dark:text-teal-400">
                    <AnimatedCounter value={8} duration={2000} />+
                  </div>
                  <h3 className="text-xl font-medium">Policy Initiatives</h3>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Led successful policy development projects for renewable energy integration and climate-smart agriculture
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-950 dark:border dark:border-gray-800">
                  <div className="text-4xl font-bold text-teal-600 dark:text-teal-400">
                    <AnimatedCounter value={5} duration={2000} />+
                  </div>
                  <h3 className="text-xl font-medium">Years Experience</h3>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Working at the intersection of energy policy, renewable energy deployment, and climate-smart practices to promote sustainable development
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-gray-900 dark:to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <ScrollReveal>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm w-fit dark:border-teal-500/30 dark:bg-teal-900/20">
                    <span className="text-teal-700 dark:text-teal-400">Get in Touch</span>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-teal-700 dark:from-white dark:to-teal-400">
                      Let's Connect
                    </h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                      Interested in collaborating on sustainable energy initiatives or policy research? Reach out to
                      discuss potential opportunities.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/contact">
                      <Button className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white shadow-lg shadow-teal-500/20 transition-all duration-300">
                        Contact Me
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/about">
                      <Button
                        variant="outline"
                        className="border-teal-200 hover:bg-teal-50 dark:border-teal-700 dark:hover:bg-teal-900/30"
                      >
                        Learn More About Me
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="relative mx-auto aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/20"></div>
                  <Image
                    src="/beelar.png"
                    alt="Nabilah Sani Mohammed discussing policy"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 p-4 backdrop-blur-sm dark:bg-gray-900/90">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      "Policy formulation is the foundation for effective climate action and sustainable energy implementation."
                    </p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      — Nabilah Sani Mohammed
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
