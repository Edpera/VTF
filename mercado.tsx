'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Globe2, TrendingUp, Users } from 'lucide-react'
import AnimatedCounter from '@/components/animated-counter'

const MercadoChart = dynamic(() => import('./mercado-chart'), { ssr: false, loading: () => <div className="h-[360px] flex items-center justify-center text-white/50">Carregando gráfico…</div> })

const stats = [
  { icon: Users, label: 'Deficientes visuais (Brasil)', value: 7900000, suffix: '' },
  { icon: Globe2, label: 'Mercado global potencial', value: 5.0, prefix: 'US$ ', suffix: ' bi', decimals: 1 },
  { icon: TrendingUp, label: 'Mercado Brasil (R$)', value: 417, prefix: 'R$ ', suffix: ' mi' },
]

export default function Mercado() {
  return (
    <section id="mercado" className="section-alt py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
          <div className="text-vtf-green text-sm font-semibold tracking-wider uppercase mb-3">Potencial de Mercado</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">Um mercado de <span className="text-vtf-green">US$ 5 bilhões</span> aguardando solução.</h2>
          <p className="mt-5 text-white/70 text-lg">Estimativas considerando 5% de adoção, 20% da malha urbana pavimentada e densidade de 1 beacon a cada 100 m em cada região.</p>
        </motion.div>
        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          {stats?.map((s, i) => {
            const Icon = s?.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-glass rounded-xl p-6">
                <Icon className="w-5 h-5 text-vtf-green mb-3" />
                <div className="font-display text-3xl md:text-4xl font-bold text-white">
                  <AnimatedCounter value={s?.value ?? 0} prefix={s?.prefix ?? ''} suffix={s?.suffix ?? ''} decimals={s?.decimals ?? 0} />
                </div>
                <div className="text-sm text-white/65 mt-1">{s?.label}</div>
              </motion.div>
            )
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 card-glass rounded-xl p-6">
          <h3 className="font-display text-lg font-semibold text-white mb-4">Mercado total estimado por região (US$ bilhões)</h3>
          <div className="h-[360px]">
            <MercadoChart />
          </div>
          <p className="text-xs text-white/50 mt-3">Fonte: Análise de Potencial de Mercado VTF (IBGE 2022, CDC, EBU). Premissas: cobertura 20%, adoção 5%, 1 beacon a cada 100 m.</p>
        </motion.div>
      </div>
    </section>
  )
}
