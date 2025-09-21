import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Racks Academy - Especial Aniversario | 20 Septiembre Madrid',
  description: 'Únete al evento especial de aniversario de Racks Academy. IA en el pasado y presente, casos de éxito, networking y mucho más. 20 de septiembre en Madrid.',
  keywords: 'Racks Academy, IA, Inteligencia Artificial, evento, Madrid, networking, programación',
  authors: [{ name: 'Racks Academy' }],
  openGraph: {
    title: 'Racks Academy - Especial Aniversario',
    description: 'Evento presencial sobre IA - 20 de septiembre en Madrid',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${dmSans.className} bg-bg-100 text-text-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}