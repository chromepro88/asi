import type { Metadata } from 'next'
import Head from 'next/head'
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
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="logo.png" type="image/x-icon" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16922868318"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16922868318');
          `}
        </script>
      </Head>
      <body>{children}</body>
    </>
  )
}