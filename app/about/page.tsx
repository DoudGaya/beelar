import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Linkedin } from "lucide-react"
import { BackgroundGradient } from "@/components/background-gradient"
import { FadeIn } from "@/components/fade-in"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TimelineItem } from "@/components/timeline-item"

export default function AboutPage() {
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
                  <span className="text-teal-700 dark:text-teal-400">About Me</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-teal-700 dark:from-white dark:to-teal-400">
                  Nabilah Sani Mohammed
                </h1>
              </FadeIn>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <FadeIn className="flex flex-col justify-center space-y-6">
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Nabilah Sani Mohammed is a dynamic policy expert specializing in sustainable energy and public
                    policy. Currently, she works with the Center for Climate-Smart Agriculture (CCSA) at Cosmopolitan
                    University, Abuja, where she leads initiatives focused on integrating energy solutions into
                    climate-smart agricultural practices.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Her work involves conducting policy research, analyzing energy access challenges for smallholder
                    farmers, and promoting sustainable energy technologies (such as solar irrigation and bioenergy), to
                    enhance energy efficiency in agriculture.
                  </p>
                  <blockquote className="border-l-4 border-teal-500 pl-4 italic my-6">
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      "The intersection of energy policy and agricultural sustainability presents our greatest
                      opportunity for creating lasting positive impact in rural communities."
                    </p>
                  </blockquote>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Nabilah has extensive experience in public policy and energy law. As a PhD candidate in Public
                    Policy at Universiti Brunei Darussalam, she combines academic rigor with practical insights to
                    address the global energy transition. She holds a Master's in Energy Law and Policy from The
                    Pennsylvania State University and a Bachelor of Laws from Baze University.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Throughout her career, Nabilah has made significant contributions to the energy and policy
                    landscape, focusing on sustainable solutions that benefit both communities and the environment.
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href="http://linkedin.com/in/nabilah-sani-mohammed-41b665145"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </FadeIn>
              <div className="mx-auto lg:mx-0 space-y-8">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 opacity-30 blur-xl"></div>
                  <div className="relative">
                    <Image
                      src="/beelar.png"
                      alt="Nabilah Sani Mohammed"
                      width={500}
                      height={600}
                      className="mx-auto aspect-[4/5] rounded-2xl object-cover shadow-2xl"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-teal-50 to-white p-6 shadow-lg dark:from-gray-900 dark:to-gray-950 dark:border dark:border-gray-800">
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                  <h3 className="text-xl font-bold mb-4">Areas of Expertise</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                      <span className="text-gray-700 dark:text-gray-300">Sustainable Energy Policy</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                      <span className="text-gray-700 dark:text-gray-300">Climate-Smart Agriculture</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                      <span className="text-gray-700 dark:text-gray-300">Energy Law</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                      <span className="text-gray-700 dark:text-gray-300">Public Policy Analysis</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                      <span className="text-gray-700 dark:text-gray-300">Energy Access Solutions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                      <span className="text-gray-700 dark:text-gray-300">Renewable Energy Technologies</span>
                    </li>
                  </ul>
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
                  <span className="text-teal-700 dark:text-teal-400">Professional Journey</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-teal-700 dark:from-white dark:to-teal-400">
                    Career Timeline
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    A journey through policy innovation and sustainable energy advocacy.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="mx-auto max-w-3xl">
              <div className="relative">
                <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-teal-500 to-emerald-500"></div>
                <div className="space-y-12">
                  <TimelineItem
                    year="Present"
                    title="Head of Communications and Engagements"
                    organization="Center for Climate-Smart Agriculture (CCSA), Cosmopolitan University"
                    description="Leading initiatives focused on integrating energy solutions into climate-smart agricultural practices. Developing communication strategies to promote sustainable energy adoption."
                  />

                  <TimelineItem
                    year="2021"
                    title="Senior Policy Researcher"
                    organization="Energy and Agriculture Sector"
                    description="Conducted comprehensive policy research and analysis on energy access challenges for smallholder farmers. Developed policy recommendations for government agencies."
                  />

                  <TimelineItem
                    year="2019"
                    title="Energy Policy Consultant"
                    organization="International Development Agency"
                    description="Advised on sustainable energy integration in agricultural development projects across rural communities in Nigeria."
                  />

                  <TimelineItem
                    year="2017"
                    title="Research Associate"
                    organization="Center for Energy Studies"
                    description="Researched renewable energy technologies and their applications in agricultural settings. Published findings in peer-reviewed journals."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm dark:border-teal-500/30 dark:bg-teal-900/20">
                  <span className="text-teal-700 dark:text-teal-400">Research & Publications</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-teal-700 dark:from-white dark:to-teal-400">
                    Academic Contributions
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Selected publications and research projects.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="mx-auto grid max-w-5xl gap-8 py-8">
              <ScrollReveal>
                <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-950 dark:border dark:border-gray-800">
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-teal-500 to-emerald-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold">Sustainable Energy Integration in Agricultural Practices</h3>
                    <p className="text-teal-600 dark:text-teal-400">Journal of Sustainable Energy Policy, 2022</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      A comprehensive analysis of how sustainable energy technologies can be integrated into
                      agricultural practices to enhance productivity and reduce environmental impact.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-950 dark:border dark:border-gray-800">
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-teal-500 to-emerald-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold">Policy Frameworks for Energy Access in Rural Communities</h3>
                    <p className="text-teal-600 dark:text-teal-400">Energy Policy Review, 2021</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      An examination of policy frameworks that can enhance energy access in rural agricultural
                      communities, with case studies from Nigeria and neighboring countries.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-950 dark:border dark:border-gray-800">
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-teal-500 to-emerald-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold">The Role of Bioenergy in Climate-Smart Agriculture</h3>
                    <p className="text-teal-600 dark:text-teal-400">
                      International Journal of Agricultural Sustainability, 2020
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Research on how bioenergy can contribute to climate-smart agricultural practices, focusing on
                      sustainability and economic viability for smallholder farmers.
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
