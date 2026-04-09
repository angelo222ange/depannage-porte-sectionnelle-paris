import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Plan du Site | Porte Sectionnelle Paris",
  description:
    "Plan du site porte-sectionnelle-paris.fr. Retrouvez toutes nos pages : services, zones d'intervention, blog et informations legales.",
  alternates: { canonical: "https://porte-sectionnelle-paris.fr/plan-du-site/" },
};

const services = [
  { name: "Installation porte sectionnelle", href: "/installation-porte-sectionnelle-paris/" },
  { name: "Depannage porte sectionnelle", href: "/depannage-porte-sectionnelle-paris/" },
  { name: "Reparation porte sectionnelle", href: "/reparation-porte-sectionnelle-paris/" },
  { name: "Motorisation porte sectionnelle", href: "/motorisation-porte-sectionnelle-paris/" },
  { name: "Entretien porte sectionnelle", href: "/entretien-porte-sectionnelle-paris/" },
  { name: "Porte sectionnelle industrielle", href: "/porte-sectionnelle-industrielle-paris/" },
  { name: "Porte de garage", href: "/porte-de-garage-paris/" },
  { name: "Porte de garage basculante", href: "/porte-de-garage-basculante-paris/" },
  { name: "Porte de garage enroulable", href: "/porte-de-garage-enroulable-paris/" },
  { name: "Porte souple rapide", href: "/porte-souple-rapide-paris/" },
  { name: "Rideau metallique industriel", href: "/rideau-metallique-industriel-paris/" },
];

const zones = [
  { name: "Paris 11e", href: "/porte-sectionnelle-paris-11/" },
  { name: "Paris 15e", href: "/porte-sectionnelle-paris-15/" },
  { name: "Paris 18e", href: "/porte-sectionnelle-paris-18/" },
  { name: "Paris 20e", href: "/porte-sectionnelle-paris-20/" },
  { name: "Boulogne-Billancourt", href: "/porte-sectionnelle-boulogne-billancourt/" },
  { name: "Saint-Denis", href: "/porte-sectionnelle-saint-denis/" },
  { name: "Montreuil", href: "/porte-sectionnelle-montreuil/" },
  { name: "Nanterre", href: "/porte-sectionnelle-nanterre/" },
  { name: "Creteil", href: "/porte-sectionnelle-creteil/" },
  { name: "Versailles", href: "/porte-sectionnelle-versailles/" },
];

const blogArticles = [
  { name: "Comment choisir sa porte sectionnelle", href: "/blog/comment-choisir-sa-porte-sectionnelle/" },
  { name: "Entretien porte sectionnelle : les gestes qui sauvent", href: "/blog/entretien-porte-sectionnelle-gestes-qui-sauvent/" },
  { name: "Porte sectionnelle vs basculante", href: "/blog/porte-sectionnelle-vs-basculante/" },
];

const staticPages = [
  { name: "Accueil", href: "/" },
  { name: "Contact", href: "/contact/" },
  { name: "Blog", href: "/blog/" },
  { name: "Zones d'intervention", href: "/zones/" },
  { name: "Mentions legales", href: "/mentions-legales/" },
  { name: "Politique de confidentialite", href: "/politique-de-confidentialite/" },
];

export default function PlanDuSitePage() {
  const sectionStyle = {
    marginBottom: "48px",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: 700 as const,
    color: "#111111",
    marginBottom: "20px",
        display: "flex" as const,
    alignItems: "center" as const,
    gap: "10px",
  };

  const linkStyle = {
    fontSize: "15px",
    color: "#555555",
    textDecoration: "none" as const,
        lineHeight: 1.4,
    display: "block" as const,
    padding: "8px 0",
    borderBottom: "1px solid #EEEEEE",
    transition: "color 0.2s ease",
  };

  return (
    <>
      <Header />
      <main
        style={{
                    backgroundColor: "#F6F7F9",
          paddingTop: "152px",
        }}
      >
        <section
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "60px 30px 100px",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              fontWeight: 800,
              color: "#111111",
              marginBottom: "16px",
                          }}
          >
            Plan du site
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#888888",
              marginBottom: "56px",
                          }}
          >
            Retrouvez l'ensemble des pages du site porte-sectionnelle-paris.fr
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
            }}
          >
            {/* Left column */}
            <div>
              {/* Pages principales */}
              <div style={sectionStyle}>
                <h2 style={headingStyle}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "#FF6333",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  />
                  Pages principales
                </h2>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "8px 24px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  {staticPages.map((page) => (
                    <a key={page.href} href={page.href} style={linkStyle}>
                      {page.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div style={sectionStyle}>
                <h2 style={headingStyle}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "#FF6333",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  />
                  Nos services
                </h2>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "8px 24px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  {services.map((service) => (
                    <a key={service.href} href={service.href} style={linkStyle}>
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — Zones + Blog */}
            <div>
              <div style={sectionStyle}>
                <h2 style={headingStyle}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "#FF6333",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  />
                  Zones d'intervention ({zones.length} zones)
                </h2>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "8px 24px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  {zones.map((zone) => (
                    <a key={zone.href} href={zone.href} style={linkStyle}>
                      Porte sectionnelle {zone.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Blog */}
              <div style={sectionStyle}>
                <h2 style={headingStyle}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "#FF6333",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  />
                  Articles de blog
                </h2>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "8px 24px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  {blogArticles.map((article) => (
                    <a key={article.href} href={article.href} style={linkStyle}>
                      {article.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
