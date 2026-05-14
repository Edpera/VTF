'use client'
import { motion } from 'framer-motion'
import { AlertTriangle, MapPinOff, Coins, EyeOff } from 'lucide-react'
import AnimatedCounter from '@/components/animated-counter'

const items = [
  { icon: EyeOff, title: '7,9 milhões', desc: 'de brasileiros com deficiência visual (IBGE 2022).' },
  { icon: MapPinOff, title: '85%', desc: 'enfrentam barreiras de mobilidade no dia a dia.' },
  { icon: AlertTriangle, title: '< 5%', desc: 'dos espaços públicos têm acessibilidade adequada.' },
  { icon: Coins, title: 'Alto custo', desc: 'manutenção difícil e poluição visual dos pisos podotáteis.' },
]

export default function Problema() {
  return (
    <section id="problema" className="section-deep py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <div className="text-vtf-green text-sm font-semibold tracking-wider uppercase mb-3">O Problema</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">A cidade ainda <span className="text-vtf-green">não foi feita</span> para todos.</h2>
          <p className="mt-5 text-white/70 text-lg">
            Os pisos táteis tradicionais (podotáteis) são caros, de manutenção difícil, esteticamente invasivos e criam barreiras para cadeirantes, ciclistas e pedestres. Pior: eles apenas indicam que existe um caminho — sem dizer para onde leva, o que há ao redor ou onde estão os pontos de interesse.
          </p>
        </motion.div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items?.map((it, i) => {
            const Icon = it?.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="card-glass rounded-xl p-6">
                <div className="w-11 h-11 rounded-lg bg-vtf-green/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-vtf-green" />
                </div>
                <div className="font-display text-2xl font-bold text-white">{it?.title}</div>
                <div className="mt-2 text-sm text-white/65">{it?.desc}</div>
              </motion.div>
            )
          })}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 card-glass rounded-xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="text-center md:text-left">
            <div className="font-display text-4xl md:text-5xl font-bold text-vtf-green">
              <AnimatedCounter value={100000} suffix="+" />
            </div>
            <div className="text-white/65 text-sm mt-1">pessoas impactadas diretamente na primeira fase de implantação.</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/10" />
          <p className="text-white/75">A exclusão urbana custa caro — em segurança, autonomia e dignidade. O VTF nasceu para mudar essa realidade com tecnologia de baixo custo, escalável e invisível.</p>
        </motion.div>
      </div>
    </section>
  )
}
