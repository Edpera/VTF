'use client'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="hero-bg pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden>
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <defs>
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#2ecc71" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#dots)" />
        </svg>
      </div>
      <div className="mx-auto max-w-[1200px] px-5 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vtf-green/10 border border-vtf-green/30 text-vtf-green text-xs font-medium mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          Patente BR 10 2026 008075-6
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl">
            Acessibilidade <span className="text-vtf-green">invisível</span><br />para uma cidade que enxerga por todos.
          </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl">
            VTF — Piso Tátil Virtual: o primeiro sistema híbrido de orientação espacial do mundo. Combina trilha magnética passiva, beacons Bluetooth e dispositivos portáteis para devolver autonomia, segurança e dignidade a milhões de pessoas com deficiência visual.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-9 flex flex-wrap gap-4">
          <a href="#apoie" className="btn-green px-6 py-3 rounded-md inline-flex items-center gap-2">Apoie o Projeto <ArrowRight className="w-4 h-4" /></a>
          <a href="#video" className="btn-outline-green px-6 py-3 rounded-md inline-flex items-center gap-2"><PlayCircle className="w-4 h-4" /> Assistir vídeo</a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            { k: '7,9 mi', v: 'Deficientes visuais no Brasil' },
            { k: '80%', v: 'Mais barato que piso tátil' },
            { k: '20+', v: 'Anos de durabilidade' },
            { k: '0 W', v: 'Energia na infraestrutura' },
          ]?.map((s, i) => (
            <div key={i} className="card-glass rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-display font-bold text-vtf-green">{s?.k}</div>
              <div className="text-xs text-white/65 mt-1">{s?.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
