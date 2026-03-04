import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'SORoyal Solutions | Premium Souvenirs & Event Planning',
  description: 'Premium Souvenirs, Event Planning, and Student Training in Nigeria. Elevating your celebrations with class and culture.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="font-sans bg-stone-50 text-stone-900">
        {children}
      </body>
    </html>
  );
}
