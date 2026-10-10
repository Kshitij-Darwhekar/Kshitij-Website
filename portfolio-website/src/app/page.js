import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics } from '@next/third-parties/google'

import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Articles from '@/components/sections/Articles'
import Contact from '@/components/sections/Contact'

export default function Home() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <>
      <main className="bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-slate-400 antialiased leading-relaxed font-poppins selection:bg-teal-500 selection:text-teal-700">
        <section className="min-h-screen">
          <Nav />
          <Hero />
          <About />
        </section>

        <Experience />
        <Skills />
        <Projects />
        <Articles />
        <Contact />
        <Footer />
      </main>
      <Analytics />
      <SpeedInsights />
      <GoogleAnalytics gaId={gaId} />
    </>
  )
}
