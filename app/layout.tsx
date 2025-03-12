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
        <link rel="icon" href="logo.png" type="image/x-icon" />
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16922868318"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16922868318');
        </script>
      </head>
      <body>{children}</body>
    </html>
  )
}
