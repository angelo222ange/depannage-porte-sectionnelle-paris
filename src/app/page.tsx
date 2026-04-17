import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductTypes from "@/components/ProductTypes";
import SeoBlock1 from "@/components/SeoBlock1";
import Process from "@/components/Process";
import Services from "@/components/Services";
import SeoBlock2 from "@/components/SeoBlock2";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ZonesGrid from "@/components/ZonesGrid";
import BlogPreview from "@/components/BlogPreview";
import CTAForm from "@/components/CTAForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Depannage Porte Sectionnelle Paris 24h/24 | Intervention 30 min',
  description: 'Depannage porte sectionnelle a Paris 24h/24, 7j/7. Technicien sur place en 30 min. Ressort casse, panne moteur, deraillement. Tel : 09 72 12 41 41.',
  alternates: { canonical: 'https://depannage-porte-sectionnelle-paris.fr/' },
  openGraph: {
    title: 'Depannage Porte Sectionnelle Paris 24h/24 | Intervention 30 min',
    description: 'Depannage porte sectionnelle a Paris 24h/24. Ressort casse, moteur en panne, porte bloquee. Technicien sur place en 30 min. Tel : 09 72 12 41 41.',
    url: 'https://depannage-porte-sectionnelle-paris.fr/',
    images: ['/images/portes/hero-porte-sectionnelle-fond.webp'],
  },
};

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <About />
      <ProductTypes />
      <SeoBlock1 />
      <Process />
      <Services />
      <SeoBlock2 />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ZonesGrid />
      <BlogPreview />
      <CTAForm />
      <Footer />

      {/* Schema.org LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Depannage Porte Sectionnelle Paris",
            description: "Depannage porte sectionnelle a Paris 24h/24, 7j/7. Intervention d'urgence en 30 minutes. Ressorts, moteurs, panneaux, deraillement. 25+ ans d'experience.",
            telephone: "09 72 12 41 41",
            email: "contact@depannage-porte-sectionnelle-paris.fr",
            url: "https://depannage-porte-sectionnelle-paris.fr",
            address: {
              "@type": "PostalAddress",
              streetAddress: "32 Rue Lhomond",
              addressLocality: "Paris",
              addressRegion: "Ile-de-France",
              postalCode: "75005",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 48.8442,
              longitude: 2.3486,
            },
            areaServed: [
              { "@type": "City", name: "Paris" },
              { "@type": "State", name: "Ile-de-France" },
            ],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "850",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Qui appeler pour un depannage de porte sectionnelle a Paris ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Contactez notre service au 09 72 12 41 41. Intervention en 30 minutes, 24h/24, 7j/7.",
                },
              },
              {
                "@type": "Question",
                name: "Combien coute l'installation d'une porte sectionnelle a Paris ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A partir de 1 200 euros pour une porte residentielle motorisee, pose incluse. Devis gratuit.",
                },
              },
              {
                "@type": "Question",
                name: "Quel est le delai d'intervention pour une porte sectionnelle bloquee ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "30 minutes maximum dans tous les arrondissements de Paris.",
                },
              },
            ],
          }),
        }}
      />

      {/* Schema.org WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Depannage Porte Sectionnelle Paris",
            url: "https://depannage-porte-sectionnelle-paris.fr",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://depannage-porte-sectionnelle-paris.fr/?s={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://depannage-porte-sectionnelle-paris.fr/" },
            ],
          }),
        }}
      />
    </>
  );
}
