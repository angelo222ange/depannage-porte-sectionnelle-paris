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
  title: 'Porte Sectionnelle Paris | Installation & Depannage 24h/24',
  description: 'Specialiste porte sectionnelle a Paris. Installation, depannage, reparation et motorisation. Intervention 30 min, 24h/24. Devis gratuit au 09 72 12 41 41.',
  alternates: { canonical: 'https://porte-sectionnelle-paris.fr/' },
  openGraph: {
    title: 'Porte Sectionnelle Paris | Installation & Depannage 24h/24',
    description: 'Specialiste porte sectionnelle a Paris. Installation, depannage, reparation et motorisation. Intervention en 30 min. Devis gratuit au 09 72 12 41 41.',
    url: 'https://porte-sectionnelle-paris.fr/',
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
            name: "Porte Sectionnelle Paris",
            description: "Specialiste porte sectionnelle a Paris. Installation, depannage, reparation et motorisation. Intervention en 30 min, 24h/24, 7j/7.",
            telephone: "09 72 12 41 41",
            email: "contact@porte-sectionnelle-paris.fr",
            url: "https://porte-sectionnelle-paris.fr",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Paris",
              addressRegion: "Ile-de-France",
              postalCode: "75000",
              addressCountry: "FR",
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
            name: "Porte Sectionnelle Paris",
            url: "https://porte-sectionnelle-paris.fr",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://porte-sectionnelle-paris.fr/?s={search_term_string}",
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
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://porte-sectionnelle-paris.fr/" },
            ],
          }),
        }}
      />
    </>
  );
}
