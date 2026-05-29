import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abhay Singh | Embedded Systems & AI Engineer',
  description:
    'Portfolio of Abhay Singh Chouhan - B.Tech ECE student specializing in Embedded Systems, AI, Computer Vision, and PCB Design.',
  keywords: [
    'Abhay Singh',
    'Portfolio',
    'Embedded Systems',
    'AI Engineer',
    'Computer Vision',
    'PCB Design',
    'SRMIST',
  ],
  authors: [{ name: 'Abhay Singh Chouhan' }],
  creator: 'Abhay Singh Chouhan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhaysingh.dev',
    title: 'Abhay Singh | Embedded Systems & AI Engineer',
    description:
      'Portfolio of Abhay Singh Chouhan - B.Tech ECE student specializing in Embedded Systems, AI, Computer Vision, and PCB Design.',
    siteName: 'Abhay Singh Portfolio',
    images: [
      {
        url: 'https://abhaysingh.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abhay Singh Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhay Singh | Embedded Systems & AI Engineer',
    description:
      'Portfolio of Abhay Singh Chouhan - B.Tech ECE student specializing in Embedded Systems, AI, Computer Vision, and PCB Design.',
    images: ['https://abhaysingh.dev/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — REQUIRED for Orbitron, Syne, JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="app-body">
        {children}
      </body>
    </html>
  );
}
