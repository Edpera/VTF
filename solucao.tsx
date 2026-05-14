'use client'
import { motion } from 'framer-motion'
import { Magnet, Bluetooth, Footprints, Check } from 'lucide-react'

const tech = [
  {
    icon: Magnet,
    tag: '01 · Infraestrutura',
    title: 'Trilha Magnética Passiva',
    desc: 'Embutida no pavimento, sem qualquer consumo de energia. Invisível, durável (20+ anos) e até 80% mais barata que o piso tátil tradicional. Codificação magnética variável transmite informações de orientação contínua.',
    bullets: ['Sem bateria, sem fiação', 'Resistente a chuva, sol e tráfego', 'Retrofit em calçadas existentes'],
  },
  {
    icon: Bluetooth,
    tag: '02 · Inteligência',
    title: 'Beacons BLE Contextuais',
    desc: 'Pontos de informação inteligentes em locais estratégicos (1 a cada ~100 m). Enviam mensagens contextuais ricas via Bluetooth Low Energy: cruzamentos, pontos de ônibus, entradas, alertas de segurança.',
    bullets: ['Áudio e vibração em tempo real', 'Baixíssimo consumo de energia', 'Modular: implantação gradual'],
  },
  {
    icon: Footprints,
    tag: '03 · Pessoa',
    title: 'Dispositivos Portáteis',
    desc: 'Bengala inteligente, calçado especial ou tornozeleira com magnetômetro + receptor BLE + feedback tátil/sonoro. Compatível com itens do cotidiano e wearables.',
    bullets: ['Bengala, sapato ou tornozeleira', 'Feedback tátil e sonoro', 'Integração com smartphone'],
  },
]

export default function Solucao() {
  return (
    <section id="solucao" className="section-alt py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
          <div className="text-vtf-green text-sm font-semibold tracking-wider uppercase mb-3">A Solução VTF</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">Três tecnologias. <span className="text-vtf-green">Uma arquitetura inédita</span> no mundo.</h2>
          <p className="mt-5 text-white/70 text-lg">O VTF combina infraestrutura passiva, inteligência ativa e dispositivo pessoal em um sistema híbrido modular, escalável e totalmente invisível.</p>
        </motion.div>
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {tech?.map((t, i) => {
            const Icon = t?.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-glass rounded-xl p-7 flex flex-col">
                <div className="text-xs text-vtf-green font-semibold tracking-wider mb-4">{t?.tag}</div>
                <div className="w-14 h-14 rounded-xl bg-vtf-green/15 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-vtf-green" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">{t?.title}</h3>
                <p className="mt-3 text-sm text-white/70">{t?.desc}</p>
                <ul className="mt-5 space-y-2">
                  {t?.bullets?.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/80">
                      <Check className="w-4 h-4 text-vtf-green mt-0.5 shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
