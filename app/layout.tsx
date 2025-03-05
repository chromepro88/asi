import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ASI',
  description: 'AI Customer Support',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo 3.png" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}
