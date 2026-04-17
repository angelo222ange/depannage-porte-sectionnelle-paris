import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Page introuvable | Depannage Porte Sectionnelle Paris",
  description: "La page recherchee n'existe pas. Retrouvez nos services de porte sectionnelle a Paris : installation, depannage 24h/24. Appelez le 09 72 12 41 41.",
};

export default function NotFound() {
  return (
    <>
      <Header />

      <section
        style={{
          padding: "220px 30px 120px",
          backgroundColor: "#FFFFFF",
          textAlign: "center",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <span
            style={{
              fontSize: "120px",
              fontWeight: 700,
              color: "#E63946",
                            lineHeight: "1",
              display: "block",
              marginBottom: "16px",
            }}
          >
            404
          </span>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "44px",
                            marginBottom: "16px",
            }}
          >
            Page introuvable
          </h1>
          <p
            style={{
              fontSize: "17px",
              fontWeight: 400,
              color: "#3B3B3B",
              lineHeight: "28px",
                            marginBottom: "40px",
            }}
          >
            La page que vous recherchez n&apos;existe pas ou a ete deplacee.
            Retrouvez nos services ci-dessous ou contactez-nous au{" "}
            <a href={siteConfig.telephoneHref} style={{ color: "#E63946", fontWeight: 600 }}>
              {siteConfig.telephone}
            </a>.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap" as const,
              gap: "12px",
              justifyContent: "center",
              marginBottom: "32px",
            }}
          >
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#E63946",
                color: "#FFFFFF",
                padding: "14px 28px",
                borderRadius: "50px",
                fontSize: "15px",
                fontWeight: 600,
                                textDecoration: "none",
              }}
            >
              Retour a l&apos;accueil
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/contact/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                padding: "14px 28px",
                borderRadius: "50px",
                fontSize: "15px",
                fontWeight: 600,
                                textDecoration: "none",
                border: "1px solid #E5E7EB",
              }}
            >
              Nous contacter
            </a>
          </div>

          <div
            style={{
              backgroundColor: "#F6F7F9",
              borderRadius: "16px",
              padding: "32px",
              textAlign: "left",
            }}
          >
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#000000",
                                marginBottom: "20px",
              }}
            >
              Pages populaires
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
              {[
                { href: "/installation-porte-sectionnelle-paris/", label: "Installation" },
                { href: "/depannage-porte-sectionnelle-paris/", label: "Depannage 24h/24" },
                { href: "/reparation-porte-sectionnelle-paris/", label: "Reparation" },
                { href: "/motorisation-porte-sectionnelle-paris/", label: "Motorisation" },
                { href: "/entretien-porte-sectionnelle-paris/", label: "Entretien" },
                { href: "/porte-de-garage-paris/", label: "Porte de garage" },
                { href: "/porte-de-garage-basculante-paris/", label: "Porte basculante" },
                { href: "/porte-de-garage-enroulable-paris/", label: "Porte enroulable" },
                { href: "/zones/", label: "Zones d'intervention" },
                { href: "/blog/", label: "Blog" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1A1A1A",
                                        textDecoration: "none",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="#E63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
