import type { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-head', weight: ['500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: { default: 'VIB Tech | Telecommunications & Network Infrastructure, Australia', template: '%s | VIB Tech' },
  description: 'VIB Tech Pty Ltd designs, builds and supports data cabling, fibre, enterprise Wi-Fi, wireless links and business connectivity across Australia.',
};
export const viewport: Viewport = { themeColor: '#0b1b3a', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
