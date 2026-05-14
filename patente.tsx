'use client'
import { motion } from 'framer-motion'
import { ShieldCheck, FileText, Calendar, Building2 } from 'lucide-react'

const infos = [
  { icon: FileText, label: 'Número do processo', value: 'BR 10 2026 008075-6' },
  { icon: Calendar, label: 'Data de depósito', value: '02/04/2026' },
  { icon: Building2, label: 'Órgão', value: 'INPI — Brasil' },
  { icon: ShieldCheck, label: 'Natureza', value: 'Patente de Invenção (PI)' },
]

export default function Patente() {
  return (
    <section id="patente" className="section-deep py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
          <div className="text-vtf-green text-sm font-semibold tracking-wider uppercase mb-3">A Patente</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">Tecnologia <span className="text-vtf-green">protegida</span> e brasileira.</h2>
          <p className="mt-5 text-white/70 text-lg">"Sistema híbrido de orientação espacial para deficientes visuais baseado em trilha magnética passiva e beacons de radiofrequência." Depositada no INPI em abril de 2026.
          </p>
        </motion.div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {infos?.map((it, i) => {
            const Icon = it?.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="card-glass rounded-xl p-6">
                <Icon className="w-5 h-5 text-vtf-green mb-3" />
                <div className="text-xs text-white/55 uppercase tracking-wider">{it?.label}</div>
                <div className="mt-1 font-display text-lg font-semibold text-white">{it?.value}</div>
              </motion.div>
            )
          })}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 card-glass rounded-xl p-8">
          <h3 className="font-display text-xl font-semibold text-white mb-4">Diferenciais inovadores</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-white/75">
            <p><span className="text-vtf-green font-semibold">Arquitetura híbrida inédita:</span> primeira solução que combina navegação passiva contínua (magnetismo) com informação ativa pontual (BLE).</p>
            <p><span className="text-vtf-green font-semibold">Codificação magnética:</span> uso inovador de padrões variáveis (intensidade, espaçamento, clusters) sem necessidade de energia.</p>
            <p><span className="text-vtf-green font-semibold">Invisibilidade total:</span> única solução completamente invisível, preservando a estética urbana.</p>
            <p><span className="text-vtf-green font-semibold">Modularidade & escalabilidade:</span> implantação gradual e custo decrescente em escala municipal e nacional.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
