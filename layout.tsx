import type {Metadata} from 'next';
import './globals.css';
import {Navbar} from '@/components/layout/Navbar';
import {Footer} from '@/components/layout/Footer';
import {WhatsAppFab} from '@/components/ui/WhatsAppFab';
import {Toaster} from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'SREE RECORRA PINNACLE TRADING LLP | Global Metal Trading Leaders',
  description: 'SREE RECORRA PINNACLE TRADING LLP: Global leader in metal trading, logistics, and industrial resilience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-brand-gold selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
        <Toaster />
      </body>
    </html>
  );
}
