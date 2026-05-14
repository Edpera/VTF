import { Mail, Phone, MapPin, Compass } from 'lucide-react'

export default function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#0c141d] border-t border-white/10 pt-14 pb-8">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-vtf-navy-2 flex items-center justify-center ring-1 ring-vtf-green/40"><Compass className="w-5 h-5 text-vtf-green" /></div>
              <div>
                <div className="font-display font-bold text-white">VTF — Piso Tátil Virtual</div>
                <div className="text-[11px] text-white/55">Patente BR 10 2026 008075-6</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/60">Sistema híbrido de orientação espacial para deficientes visuais. Acessibilidade invisível, escalável e brasileira.</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-white mb-3">Contato</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="mailto:ed.p@terra.com.br" className="flex items-center gap-2 hover:text-vtf-green transition"><Mail className="w-4 h-4 text-vtf-green" /> ed.p@terra.com.br</a></li>
              <li><a href="tel:+5547991020000" className="flex items-center gap-2 hover:text-vtf-green transition"><Phone className="w-4 h-4 text-vtf-green" /> +55 47 99102-0000</a></li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-vtf-green" /> Brusque, SC — Brasil</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white mb-3">Navegação</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a className="hover:text-vtf-green transition" href="#problema">O Problema</a></li>
              <li><a className="hover:text-vtf-green transition" href="#solucao">A Solução</a></li>
              <li><a className="hover:text-vtf-green transition" href="#mercado">Mercado</a></li>
              <li><a className="hover:text-vtf-green transition" href="#apoie">Apoie o Projeto</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <div>© {year} VTF — Piso Tátil Virtual. Inventor: Edmilson Pereira.</div>
          <div>Feito com propósito em Brusque/SC 🇧🇷</div>
        </div>
      </div>
    </footer>
  )
}
