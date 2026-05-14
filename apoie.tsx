'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, ExternalLink, HandCoins, QrCode, Heart } from 'lucide-react'
import { toast } from 'sonner'

const PIX = 'ed.p@terra.com.br'

const platforms = [
  { name: 'Catarse', desc: 'Crowdfunding all-or-nothing', color: '#2ecc71', url: '#' },
  { name: 'Kickante', desc: 'Financiamento coletivo flexível', color: '#4CAF50', url: '#' },
  { name: 'Vakinha', desc: 'Vaquinha online', color: '#27ae60', url: '#' },
]

export default function Apoie() {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    try {
      await navigator?.clipboard?.writeText?.(PIX)
      setCopied(true)
      toast?.success?.('Chave PIX copiada!')
      setTimeout(() => setCopied(false), 2200)
    } catch {
      toast?.error?.('Não foi possível copiar. Selecione manualmente.')
    }
  }
  return (
    <section id="apoie" className="section-deep py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-vtf-green/10 blur-3xl pointer-events-none" aria-hidden />
      <div className="mx-auto max-w-[1200px] px-5 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl text-center mx-auto">
          <div className="inline-flex items-center gap-2 text-vtf-green text-sm font-semibold tracking-wider uppercase mb-3"><Heart className="w-4 h-4" /> Apoie o Projeto</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">Sua contribuição faz o VTF <span className="text-vtf-green">virar realidade</span>.</h2>
          <p className="mt-5 text-white/75 text-lg">Orçamento previsto para 2026: <span className="text-vtf-green font-semibold">R$ 300.000,00</span> · Estimativa de impacto direto: <span className="text-vtf-green font-semibold">100 mil pessoas</span>.</p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {/* PIX */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-lg bg-vtf-green/15 flex items-center justify-center"><QrCode className="w-5 h-5 text-vtf-green" /></div>
              <div>
                <div className="font-display text-xl font-bold text-white">Doação direta via PIX</div>
                <div className="text-sm text-white/60">Rápido, seguro e sem taxas.</div>
              </div>
            </div>
            <div className="text-xs text-white/55 uppercase tracking-wider mb-2">Chave PIX (e-mail)</div>
            <div className="flex items-stretch gap-2">
              <div className="flex-1 px-4 py-3 rounded-lg bg-[#0f1822] border border-white/10 font-mono text-vtf-green select-all overflow-x-auto">{PIX}</div>
              <button onClick={handleCopy} className="btn-green px-4 rounded-lg inline-flex items-center gap-2 text-sm whitespace-nowrap" aria-label="Copiar chave PIX">
                {copied ? <><Check className="w-4 h-4" /> Copiado</> : <><Copy className="w-4 h-4" /> Copiar</>}
              </button>
            </div>
            <p className="text-xs text-white/55 mt-4">Beneficiário: Edmilson Pereira · Brusque/SC — Toda doação será aplicada no desenvolvimento do protótipo, testes de campo e proteção da patente.</p>
          </motion.div>

          {/* Plataformas */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card-glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-lg bg-vtf-green/15 flex items-center justify-center"><HandCoins className="w-5 h-5 text-vtf-green" /></div>
              <div>
                <div className="font-display text-xl font-bold text-white">Plataformas de crowdfunding</div>
                <div className="text-sm text-white/60">Em breve — campanhas oficiais.</div>
              </div>
            </div>
            <div className="space-y-3">
              {platforms?.map((p) => (
                <a key={p?.name} href={p?.url} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-lg bg-[#0f1822] border border-white/10 hover:border-vtf-green/50 hover:bg-[#13202c] transition group">
                  <div>
                    <div className="font-display font-semibold text-white group-hover:text-vtf-green transition">{p?.name}</div>
                    <div className="text-xs text-white/55">{p?.desc}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-vtf-green transition" />
                </a>
              ))}
            </div>
            <p className="text-xs text-white/55 mt-5">As campanhas serão lançadas em breve. Cadastre seu interesse pelo e-mail abaixo para ser avisado.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
