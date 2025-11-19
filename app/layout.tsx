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
        url: '/api/og',
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
    images: ['/api/og'],
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
        <meta property="fb:app_id" content="1846789336144846" />
        <link rel="icon" href="/logo_white.png" type="image/png" id="favicon" />
        <link rel="apple-touch-icon" href="/logo_white.png" id="apple-touch-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
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
      <body>
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