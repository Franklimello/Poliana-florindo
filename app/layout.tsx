import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AosInit } from "./_components/aos-init";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Poliana Estética | Visagismo e Consultoria de Imagem em Lajinha',
  description: 'Transforme sua imagem com a mentoria de visagismo estratégico da Poliana Estética. Atendimento personalizado para mulheres em Lajinha e região.',
  keywords: ['visagismo', 'consultoria de imagem', 'estética', 'Lajinha', 'mentoria', 'autoestima', 'poliana florindo'],
  authors: [{ name: 'Poliana Florindo' }],
  creator: 'Poliana Estética',
  openGraph: {
    title: 'Poliana Estética | Visagismo e Consultoria de Imagem',
    description: 'Mentoria exclusiva para mulheres que desejam transformar sua imagem e atrair clientes certos.',
    url: 'https://www.polianaestetica.com.br',
    siteName: 'Poliana Estética',
    images: [
      {
        url: '/capa-site.jpg',
        width: 1200,
        height: 630,
        alt: 'Poliana Estética',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AosInit />
      </body>
    </html>
  );
}
