import type { Metadata } from 'next';
import Script from 'next/script';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: 'WhatsApp AI Chatbot Singapore | Business Automation | AI Super',
  description: 'Singapore\'s leading WhatsApp AI chatbot for business automation. Boost sales by 40%, automate customer service 24/7. Free demo available!',
  keywords: ['WhatsApp chatbot Singapore', 'AI customer service', 'business automation Singapore', 'WhatsApp AI', 'chatbot Singapore', 'automated customer support', 'lead generation Singapore', 'real estate chatbot'],
  authors: [{ name: 'AI Super Private Limited' }],
  creator: 'AI Super Private Limited',
  publisher: 'AI Super Private Limited',
  openGraph: {
    title: 'WhatsApp AI Chatbot Singapore | Business Automation | AI Super',
    description: 'Singapore\'s leading WhatsApp AI chatbot for business automation. Boost sales by 40%, automate customer service 24/7. Free demo available!',
    url: 'https://asi.sg',
    siteName: 'AI Super Private Limited',
    images: [
      {
        url: '/logo_final5.png',
        width: 1200,
        height: 630,
        alt: 'AI Super WhatsApp Chatbot Singapore - Business Automation',
      },
    ],
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp AI Chatbot Singapore | Business Automation',
    description: 'Singapore\'s leading WhatsApp AI chatbot for business automation. Boost sales by 40%, automate customer service 24/7.',
    images: ['/logo_final5.png'],
  },
  verification: {
    google: 'your-google-verification-code',
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