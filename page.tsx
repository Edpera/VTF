import SiteHeader from '@/components/site-header'
import Hero from '@/components/sections/hero'
import Problema from '@/components/sections/problema'
import Solucao from '@/components/sections/solucao'
import Mercado from '@/components/sections/mercado'
import Patente from '@/components/sections/patente'
import Inventor from '@/components/sections/inventor'
import VideoSection from '@/components/sections/video'
import Apoie from '@/components/sections/apoie'
import SiteFooter from '@/components/site-footer'

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      <SiteHeader />
      <Hero />
      <Problema />
      <Solucao />
      <VideoSection />
      <Mercado />
      <Patente />
      <Inventor />
      <Apoie />
      <SiteFooter />
    </main>
  )
}
