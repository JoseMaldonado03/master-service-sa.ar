import { type PropsWithChildren } from 'react'
import { type Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import { Anton } from 'next/font/google'

import './globals.css'

import NavBar from '@/components/NavBar'
import NavBarItem from '@/components/NavBarItem'
import Container from '@/components/Container'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'

const anton = Anton({
  variable: '--font-title',
  subsets: ['latin'],
  weight: ['400'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: { default: 'MasterServiceSa.ar', template: '%s | MasterServiceSa.ar' },
  description: 'Control de Plagas',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${anton.variable} ${geistMono.variable}`}>
        <Marquee />
        <Container>
          <NavBar>
            <NavBarItem href="/"> Inicio </NavBarItem>
            <NavBarItem href="services"> Servicios </NavBarItem>
            <NavBarItem href="tips"> Tips </NavBarItem>
            <NavBarItem href="users"> Usuarios </NavBarItem>
          </NavBar>
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  )
}
