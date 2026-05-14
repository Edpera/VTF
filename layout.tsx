import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import GoogleAnalytics from '@/components/google-analytics'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })

export const metadata = {
  metadataBase: new URL('https://vtf.mobi'),
  title: 'VTF \u2014 Piso T\u00e1til Virtual | Acessibilidade Invis\u00edvel',
  description: 'Sistema h\u00edbrido de orienta\u00e7\u00e3o espacial para deficientes visuais. Patente BR 10 2026 008075-6. Tecnologia in\u00e9dita combinando trilha magn\u00e9tica passiva, beacons BLE e dispositivos port\u00e1teis.',
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
  openGraph: {
    title: 'VTF \u2014 Piso T\u00e1til Virtual',
    description: 'Sistema h\u00edbrido in\u00e9dito de orienta\u00e7\u00e3o para deficientes visuais. Apoie esta patente brasileira.',
    images: ['/og-image.png'],
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body className={`${dmSans.variable} ${jakartaSans.variable} font-sans antialiased`}>
        {children}
        <Toaster richColors position="top-center" />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
