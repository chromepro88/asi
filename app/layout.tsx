import type { Metadata } from 'next';
import Script from 'next/script'; // Import Script from next/script
import './globals.css';
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'ASI',
  description: 'AI Customer Support',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Metadata is handled automatically by Next.js from the metadata object */}
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body>
        {children}
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16922868318"
          strategy="afterInteractive" // Load after the page is interactive
        />
        <Script
          id="google-analytics" // Unique ID for the inline script
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16922868318');
          `}
        </Script>
      </body>
    </html>
  );
}