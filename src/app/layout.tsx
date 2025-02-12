import './globals.css'
import { ThemeProvider } from "./contexts/ThemeContext"
import ThemeToggle from "./components/ThemeToggle"
import Navigation from "./components/Navigation"
import type React from "react"

export const metadata = {
  title: "Shanti Rai - Junior Software Developer",
  description:
    "Portfolio of Shanti Rai, a solutions-driven Junior Software Developer focused on building engaging, user-centric applications with clean, maintainable code.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-matrix-black text-matrix-lightGreen matrix-bg">
        <div className="matrix-rain"></div>
        <ThemeProvider>
          <Navigation />
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}

