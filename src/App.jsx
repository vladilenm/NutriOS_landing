import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import CommandCenter from './components/CommandCenter'
import Features from './components/Features'
import Personalization from './components/Personalization'
import Safety from './components/Safety'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        К основному контенту
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Problem />
        <HowItWorks />
        <CommandCenter />
        <Features />
        <Personalization />
        <Safety />
      </main>
      <Footer />
      <Analytics />
    </>
  )
}
