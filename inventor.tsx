'use client'
import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Mail, Phone } from 'lucide-react'

export default function Inventor() {
  return (
    <section id="inventor" className="section-alt py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
          <div className="text-vtf-green text-sm font-semibold tracking-wider uppercase mb-3">Sobre o Inventor</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">Engenharia que <span className="text-vtf-green">muda vidas</span>.</h2>
        </motion.div>
        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-glass rounded-xl p-8 lg:col-span-1 flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#2a5478] to-[#2ecc71] flex items-center justify-center text-4xl font-display font-bold text-white shadow-lg">EP</div>
            <h3 className="mt-5 font-display text-2xl font-bold text-white">Edmilson Pereira</h3>
            <p className="text-vtf-green text-sm mt-1">Engenheiro Civil · Inventor</p>
            <div className="mt-5 space-y-2 text-sm text-white/75 w-full">
              <div className="flex items-center gap-2 justify-center"><MapPin className="w-4 h-4 text-vtf-green" /> Brusque, SC — Brasil</div>
              <div className="flex items-center gap-2 justify-center"><GraduationCap className="w-4 h-4 text-vtf-green" /> Eng. Civil + Eletrônica</div>
              <a href="mailto:ed.p@terra.com.br" className="flex items-center gap-2 justify-center hover:text-vtf-green transition"><Mail className="w-4 h-4 text-vtf-green" /> ed.p@terra.com.br</a>
              <a href="tel:+5547991020000" className="flex items-center gap-2 justify-center hover:text-vtf-green transition"><Phone className="w-4 h-4 text-vtf-green" /> +55 47 99102-0000</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card-glass rounded-xl p-8 lg:col-span-2">
            <p className="text-white/80 leading-relaxed">
              Edmilson Pereira é engenheiro civil com mais de <span className="text-vtf-green font-semibold">10 anos de experiência</span> em gestão de projetos e obras, contratos e infraestrutura urbana. Possui formação técnica em Eletrônica e conhecimentos em Elétrica e Telecomunicações, combinação rara que sustenta a visão sistêmica do VTF — do planejamento à entrega.
            </p>
            <p className="mt-5 text-white/80 leading-relaxed">
              Movido pela convicção de que <span className="text-vtf-green font-semibold">engenharia bem gerida transforma a vida das pessoas</span>, Edmilson direciona sua atuação para iniciativas de impacto, com foco em mobilidade urbana inclusiva, sustentabilidade e responsabilidade técnica. O VTF é a materialização desse propósito: uma patente brasileira pronta para ganhar escala nacional e internacional.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
