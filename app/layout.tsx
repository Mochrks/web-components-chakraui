import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import SmoothScrolling from "../src/components/SmoothScrolling"
import "./globals.css"

export const metadata: Metadata = {
  title: "Web Component Chakra Base",
  description: "Created with @mochrks",
  generator: "@mochrks",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <SmoothScrolling>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Analytics />
        </SmoothScrolling>
      </body>
    </html>
  )
}
