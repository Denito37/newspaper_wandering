import Image from 'next/image'
import Header from '@/components/header'
import Hero from '@/components/hero'
import FOTD from '@/components/FOTD'
import Activity from '@/components/actvity'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="flex flex-col items-center mx-auto max-w-5xl">
      <Header />
      <Hero />
      <div className=' md:flex md:flex-row'>
        <FOTD />
        <Activity />
      </div>
      <Footer />
    </main>
  )
}
