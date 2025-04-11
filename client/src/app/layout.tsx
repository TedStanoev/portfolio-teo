import type { Metadata } from 'next';
import { DATA } from '@/data';
import './globals.css';
import { TooltipProvider } from '@/components/ui/tooltip';

export const metadata: Metadata = {
  title: DATA.name,
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    siteName: `${DATA.name}`,
    locale: 'en_US',
    type: 'website',
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
  twitter: {
    title: `${DATA.name}`,
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-montesserat antialiased w-full">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
