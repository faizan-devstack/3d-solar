import LenisProvider from '@/components/ui/lenis-provider';
import { Onest } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import '@/app/globals.css';
import GlobalLoader from '@/components/ui/global-loader';

const onest = Onest({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-onest',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: {
    default: '3D Portfolio',
    template: '%s | Muhammad Faizan>',
  },
  description:
    'Interactive 3D portfolio built with Next.js, TypeScript, React Three Fiber, GSAP, Framer Motion, and Tailwind CSS. Exploring creative web experiences.',
  keywords: [
    '3D portfolio',
    'React Three Fiber',
    'Next.js',
    'TypeScript',
    'GSAP',
    'Framer Motion',
    'Tailwind CSS',
    'creative developer',
    'webgl',
    'three.js',
    'interactive design',
  ],
  authors: [{ name: 'Muhammad Faizan', url: 'https://portfolio-muhammad-faizan.vercel.app/' }],
  creator: 'Muhammad Faizan',
  publisher: 'Muhammad Faizan',
  metadataBase: new URL('https://3d-solar-by-faizan.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '3D Portfolio',
    description:
      'Interactive 3D portfolio showcasing creative web development with React Three Fiber, GSAP, and Framer Motion.',
    url: 'https://3d-solar-by-faizan.vercel.app/',
    siteName: '3D Portfolio| Muhammad Faizan',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '3D Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name | 3D Creative Developer',
    description:
      'Interactive 3D portfolio built with Next.js, R3F, GSAP, and Framer Motion.',
    images: ['/og-image.png'],
    creator: '@ifaizan25',
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
  // verification: {
  //   google: 'your-google-site-verification-code', // Optional: add if you have GSC
  // },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${onest.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <LenisProvider>
          <GlobalLoader />
          <main className="bg-background relative">
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}