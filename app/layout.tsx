import LenisProvider from '@/components/ui/lenis-provider';
import { Onest } from 'next/font/google';
import type { Viewport } from 'next';
import '@/app/globals.css';

const onest = Onest({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-onest',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${onest.variable}`}
    >
      <body className="antialiased" suppressHydrationWarning>
        <LenisProvider>
          <main className="bg-background">
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}