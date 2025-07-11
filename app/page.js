"use client"
import Header from '@/components/Layout/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Resume from '@/components/sections/Resume'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}