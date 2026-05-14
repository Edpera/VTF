'use client'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const data = [
  { regiao: 'Brasil', valor: 0.084 },
  { regiao: 'EUA', valor: 1.085 },
  { regiao: 'Europa', valor: 1.546 },
  { regiao: 'Ásia', valor: 1.926 },
  { regiao: 'Oriente Médio', valor: 0.376 },
]

export default function MercadoChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 30 }}>
        <XAxis dataKey="regiao" tickLine={false} tick={{ fontSize: 11, fill: '#cbd5e1' }} />
        <YAxis tickLine={false} tick={{ fontSize: 10, fill: '#cbd5e1' }} label={{ value: 'US$ bilhões', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: 11, fill: '#94a3b8' } }} />
        <Tooltip contentStyle={{ background: '#1a2332', border: '1px solid #2ecc71', borderRadius: 8, fontSize: 12 }} formatter={(v: any) => [`US$ ${v} bi`, 'Mercado total']} />
        <Legend verticalAlign="top" wrapperStyle={{ fontSize: 11, color: '#cbd5e1' }} />
        <Bar dataKey="valor" name="Mercado total (US$ bi)" fill="#2ecc71" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
