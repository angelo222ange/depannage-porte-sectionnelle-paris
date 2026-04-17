import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import MobileCallButton from "@/components/MobileCallButton";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://depannage-porte-sectionnelle-paris.fr'),
  title: "Depannage Porte Sectionnelle Paris 24h/24 | Intervention 30 min",
  description:
    "Depannage porte sectionnelle a Paris 24h/24, 7j/7. Technicien sur place en 30 min. Ressort casse, panne moteur, deraillement. Tel : 09 72 12 41 41.",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Depannage Porte Sectionnelle Paris',
    images: [{
      url: 'https://depannage-porte-sectionnelle-paris.fr/images/portes/hero-porte-sectionnelle-paris.webp',
      width: 1200,
      height: 630,
      alt: 'Depannage Porte Sectionnelle Paris — Installation et Depannage',
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${figtree.variable} ${inter.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/portes/hero-porte-sectionnelle-fond.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/portes/porte-sectionnelle-produit.webp"
          type="image/webp"
        />
      </head>
      <body style={{ }}>
        {children}
        <ScrollToTop />
        <MobileCallButton />
      </body>
    </html>
  );
}
