'use client'
import { useEffect, useState } from 'react'
import { Menu, X, Compass } from 'lucide-react'

const links = [
  { href: '#problema', label: 'O Problema' },
  { href: '#solucao', label: 'A Solução' },
  { href: '#mercado', label: 'Mercado' },
  { href: '#patente', label: 'Patente' },
  { href: '#inventor', label: 'Inventor' },
  { href: '#apoie', label: 'Apoie' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled((window?.scrollY ?? 0) > 20)
    onScroll()
    window?.addEventListener('scroll', onScroll)
    return () => window?.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-[#1a2332]/80 shadow-lg' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-[1200px] px-5 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-vtf-navy-2 flex items-center justify-center ring-1 ring-vtf-green/40 group-hover:ring-vtf-green transition">
            <Compass className="w-5 h-5 text-vtf-green" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-white">VTF</div>
            <div className="text-[10px] text-white/60 -mt-0.5">Piso Tátil Virtual</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {links?.map((l) => (
            <a key={l?.href} href={l?.href} className="px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5 transition">{l?.label}</a>
          ))}
          <a href="#apoie" className="ml-2 btn-green px-4 py-2 rounded-md text-sm">Doar via PIX</a>
        </nav>
        <button className="md:hidden p-2 text-white" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#1a2332] border-t border-white/10">
          <div className="px-5 py-4 flex flex-col gap-2">
            {links?.map((l) => (
              <a key={l?.href} href={l?.href} onClick={() => setOpen(false)} className="py-2 text-white/80 hover:text-vtf-green">{l?.label}</a>
            ))}
            <a href="#apoie" onClick={() => setOpen(false)} className="btn-green px-4 py-2 rounded-md text-sm text-center mt-2">Doar via PIX</a>
          </div>
        </div>
      )}
    </header>
  )
}
