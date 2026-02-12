import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://asi.sg'),
  title: {
    default: 'Singapore WhatsApp Chatbot | AI Business Automation | AI Super',
    template: '%s | AI Super',
  },
  description: 'Singapore\'s #1 WhatsApp chatbot for business. Automate customer service 24/7, boost sales by 40%. Free setup in 5 minutes. Try free demo!',
  keywords: ['singapore whatsapp chatbot', 'whatsapp chatbot singapore', 'WhatsApp AI chatbot', 'chatbot singapore', 'whatsapp automation singapore', 'AI customer service singapore', 'business automation Singapore', 'WhatsApp AI', 'automated customer support', 'lead generation Singapore', 'real estate chatbot singapore'],
  authors: [{ name: 'AI Super Private Limited' }],
  creator: 'AI Super Private Limited',
  publisher: 'AI Super Private Limited',
  alternates: {
    canonical: 'https://asi.sg',
  },
  openGraph: {
    title: 'Singapore WhatsApp Chatbot | AI Business Automation | AI Super',
    description: 'Singapore\'s #1 WhatsApp chatbot for business. Automate customer service 24/7, boost sales by 40%. Free setup in 5 minutes. Try free demo!',
    url: 'https://asi.sg',
    siteName: 'AI Super Private Limited',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'AI Super - Singapore WhatsApp Chatbot for Business Automation',
      },
    ],
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Singapore WhatsApp Chatbot | AI Business Automation',
    description: 'Singapore\'s #1 WhatsApp chatbot for business. Automate customer service 24/7, boost sales by 40%. Try free demo!',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // TODO: Replace with your actual Google Search Console verification code
  // Get it from https://search.google.com/search-console
  // verification: {
  //   google: 'YOUR_ACTUAL_VERIFICATION_CODE',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta property="fb:app_id" content="1846789336144846" />
        <link rel="icon" href="/logo_white.png" type="image/png" id="favicon" />
        <link rel="apple-touch-icon" href="/logo_white.png" id="apple-touch-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function updateFavicon() {
                  const isDark = document.documentElement.classList.contains('dark') || 
                    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  const favicon = document.getElementById('favicon');
                  const appleTouchIcon = document.getElementById('apple-touch-icon');
                  const iconPath = isDark ? '/logo_white.png' : '/logo_black.png';
                  
                  if (favicon) favicon.href = iconPath;
                  if (appleTouchIcon) appleTouchIcon.href = iconPath;
                }
                
                updateFavicon();
                
                // Listen for theme changes
                const observer = new MutationObserver(updateFavicon);
                observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
                
                // Listen for system theme changes
                if (window.matchMedia) {
                  window.matchMedia('(prefers-color-scheme: dark)').addListener(updateFavicon);
                }
              })();
            `
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
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