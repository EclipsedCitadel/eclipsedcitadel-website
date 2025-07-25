import './globals.css'
import { Metadata } from 'next'
import { Montserrat, Lato } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-montserrat',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'Eclipsed Citadel',
  description: 'AI-Powered Marketing & Content Solutions for Small Businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body className="bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  )
}
