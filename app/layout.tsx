import type { Metadata } from 'next';
import Script from 'next/script';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: 'AI Super Private Limited | No.1 WhatsApp Chatbot in Singapore',
  description: 'Boost your business with AI Super\'s WhatsApp Chatbot—24/7 customer support, automated responses, and affordable pricing starting at $19/month.',
  generator: 'v0.dev',
  keywords: ['WhatsApp Chatbot', 'AI Customer Support', 'Singapore AI', 'AI Super', 'Business Automation'],
  openGraph: {
    title: 'AI Super Private Limited | No.1 WhatsApp Chatbot in Singapore',
    description: 'Boost your business with AI Super\'s WhatsApp Chatbot—24/7 customer support, automated responses, and affordable pricing starting at $19/month.',
    url: 'https://asi.sg',
    siteName: 'AI Super Private Limited',
    images: [
      {
        url: 'logo_final5.png',
        width: 120,
        height: 120,
        alt: 'AI Super Private Limited Logo',
      },
    ],
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Super Private Limited | No.1 WhatsApp Chatbot in Singapore',
    description: 'Boost your business with AI Super\'s WhatsApp Chatbot—24/7 customer support, automated responses, and affordable pricing starting at $19/month.',
    images: ['logo_final5.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="logo_final5.png" type="image/jpeg" />
        <link rel="apple-touch-icon" href="logo_final5.png" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          {/* Google Analytics Script */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-16922868318"
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
          >
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16922868318');
            `}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  );
}