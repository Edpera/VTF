'use client'
import { motion } from 'framer-motion'
import { Film } from 'lucide-react'

export default function VideoSection() {
  return (
    <section id="video" className="section-deep py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-8">
          <div className="text-vtf-green text-sm font-semibold tracking-wider uppercase mb-3 inline-flex items-center gap-2"><Film className="w-4 h-4" /> Vídeo Institucional</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">Veja o VTF <span className="text-vtf-green">em ação</span>.</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="card-glass rounded-xl overflow-hidden">
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/8w46DAcsJa4"
              title="VTF — Piso Tátil Virtual"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
