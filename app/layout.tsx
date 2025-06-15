import { type PropsWithChildren } from "react";
import { type Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Container from "@/components/container";
import NavBar from "@/components/NavBar";
import NavBarItem from "@/components/NavBarItem";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "MasterServiceSa.ar", template: "%s | MasterServiceSa.ar" },
  description: "Control de Plagas",
};

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Container/>
          <NavBar>
            <NavBarItem href="/"> Inicio </NavBarItem>
            <NavBarItem href="services"> Servicios </NavBarItem>
            <NavBarItem href="tips"> Tips </NavBarItem>
            <NavBarItem href="users"> Usuarios </NavBarItem>
          </NavBar>
          {children}
      </body>
    </html>
  );
}
