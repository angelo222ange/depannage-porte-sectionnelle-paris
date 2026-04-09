"use client";

import { useState } from "react";
import { getInstallationZoneBySlug, getNeighborInstallationZones, getZoneBySlug, siteConfig, zones } from "@/config/site";
import { getInstallationZoneContent } from "@/lib/installation-zone-content";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import CTAForm from "@/components/CTAForm";
import ZoneServicesGrid from "@/components/ZoneServicesGrid";
import LocalReviews from "@/components/LocalReviews";
import Footer from "@/components/Footer";

function formatSeoText(text: string, zoneName: string): string {
  const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.trim());
  const paragraphs: string[] = [];
  for (let i = 0; i < sentences.length; i += 2) {
    const chunk = sentences.slice(i, i + 2).join(" ");
    if (chunk.trim()) paragraphs.push(chunk);
  }
  const html = paragraphs
    .map(p => {
      let formatted = p
        .replace(/portes? sectionnelles?/gi, (m) => `<strong>${m}</strong>`)
        .replace(new RegExp(`(${zoneName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "gi"), "<strong>$1</strong>")
        .replace(/\b(installation|pose|poseur|isolant|isolation|motorisation|sur mesure|panneaux sandwich)\b/gi, "<strong>$1</strong>")
        .replace(/25 ans/g, "<strong>25 ans</strong>")
        .replace(/EN 13241/g, "<strong>EN 13241</strong>")
        .replace(/<strong><strong>/g, "<strong>")
        .replace(/<\/strong><\/strong>/g, "</strong>")
        .replace(/<\/strong>(\w)/g, "</strong> $1")
        .replace(/(\w)<strong>/g, "$1 <strong>")
        .replace(/  +/g, " ");
      return `<p style="margin-bottom:16px;font-size:16px;font-weight:400;color:#3B3B3B;line-height:28px;font-family:var(--font-figtree),sans-serif">${formatted}</p>`;
    })
    .join("");
  return html;
}

function FAQAccordion({ faq }: { faq: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {faq.map((item, i) => (
        <div
          key={i}
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            overflow: "hidden",
            border: openIndex === i ? "1px solid #FF6333" : "1px solid #E5E7EB",
            transition: "border 0.3s ease",
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{
              width: "100%",
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "17px",
              fontWeight: 600,
              color: "#000000",
              textAlign: "left",
            }}
          >
            {item.question}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{
                transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
                flexShrink: 0,
                marginLeft: "16px",
              }}
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#FF6333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {openIndex === i && (
            <div
              style={{
                padding: "0 24px 20px",
                fontSize: "15px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
              }}
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function InstallationZonePageClient({ slug }: { slug: string }) {
  const installationZone = getInstallationZoneBySlug(slug);
  if (!installationZone) return null;

  const zone = getZoneBySlug(installationZone.zoneSlug);
  if (!zone) return null;

  const content = getInstallationZoneContent(zone);
  const neighbors = getNeighborInstallationZones(slug, 6);
  const preposition = zone.department === "Paris" ? "dans le" : "a";

  return (
    <>
      <TopBar />
      <Header />

      {/* Hero */}
      <section
        style={{
          padding: "213px 30px 76px",
          backgroundColor: "#F6F7F9",
          minHeight: "600px",
        }}
      >
        <div
          style={{
            maxWidth: "1408px",
            margin: "0 auto",
            borderRadius: "16px",
            backgroundImage: "url('/images/portes/installation-porte-sectionnelle.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden",
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.55)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              maxWidth: "1312px",
              margin: "0 auto",
              padding: "80px 48px",
              position: "relative",
              zIndex: 2,
              width: "100%",
            }}
          >
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#FF6333",
                color: "#FFFFFF",
                padding: "6px 16px",
                borderRadius: "50px",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase" as const,
                letterSpacing: "1px",
                marginBottom: "20px",
              }}
            >
              Installation professionnelle — {zone.department}
            </span>
            <h1
              style={{
                fontSize: "56px",
                fontWeight: 600,
                color: "#FFFFFF",
                lineHeight: "64px",
                marginBottom: "24px",
                maxWidth: "800px",
              }}
            >
              Installation Porte Sectionnelle {zone.name}
            </h1>
            <p
              style={{
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.85)",
                maxWidth: "560px",
                lineHeight: "28px",
                marginBottom: "32px",
              }}
            >
              {[
                `Pose neuve et remplacement de porte sectionnelle ${preposition} ${zone.name} (${zone.postalCode}). Intervention sous 48h, garantie decennale.`,
                `Installation sur mesure pour garages et parkings ${preposition} ${zone.name}. Techniciens certifies, pose en une journee. Devis gratuit.`,
                `Votre specialiste installation de porte sectionnelle sur le secteur ${zone.postalCode}. Plus de 25 ans d'experience, devis sous 24h.`,
                `Installateurs agrees ${preposition} ${zone.name}. Prise de cotes, fabrication sur mesure, pose et motorisation incluses.`,
                `De la prise de cotes a la mise en service, installation complete de votre porte sectionnelle ${preposition} ${zone.name} (${zone.postalCode}).`,
                `Equipe dediee a l'installation de portes sectionnelles dans le secteur ${zone.postalCode}. Garantie 10 ans, SAV reactif.`,
              ][zones.indexOf(zone) % 6]} Appelez le {siteConfig.telephone}.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" as const }}>
              <a
                href={siteConfig.telephoneHref}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  backgroundColor: "#FF6333",
                  padding: "14px 32px",
                  borderRadius: "50px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  textDecoration: "none",
                }}
              >
                Devis gratuit — {siteConfig.telephone}
              </a>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#FFFFFF",
                  padding: "14px 28px",
                  borderRadius: "50px",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#000000",
                  textDecoration: "none",
                }}
              >
                Demander un devis
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    backgroundColor: "#FF6333",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "4px",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ maxWidth: "1312px", margin: "0 auto", padding: "20px 30px" }}>
        <nav style={{ fontSize: "14px", color: "#3B3B3B" }}>
          <a href="/" style={{ color: "#FF6333", textDecoration: "none" }}>Accueil</a>
          <span style={{ margin: "0 8px" }}>&gt;</span>
          <a href="/installation-porte-sectionnelle-paris/" style={{ color: "#FF6333", textDecoration: "none" }}>Installation Paris</a>
          <span style={{ margin: "0 8px" }}>&gt;</span>
          <span><strong>Installation {zone.name} ({zone.postalCode})</strong></span>
        </nav>
      </div>

      {/* Intro — image + text */}
      <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" as const }}>
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <img
              src="/images/portes/installation-porte-sectionnelle-garage.webp"
              alt={`Installation porte sectionnelle ${preposition} ${zone.name} - pose professionnelle`}
              title={`Installation porte sectionnelle ${zone.name}`}
              width={640}
              height={420}
              loading="eager"
              decoding="async"
              style={{
                width: "100%",
                height: "420px",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </div>
          <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#FF6333",
                textTransform: "uppercase" as const,
                letterSpacing: "1.5px",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Pose professionnelle
            </span>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: 600,
                color: "#000000",
                lineHeight: "48px",
                marginBottom: "24px",
              }}
            >
              <strong>Installation</strong> de porte sectionnelle {preposition} <strong>{zone.name}</strong>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: formatSeoText(content.intro, zone.name) }} />
            <a
              href={siteConfig.telephoneHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#FF6333",
                color: "#FFFFFF",
                padding: "14px 28px",
                borderRadius: "50px",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                marginTop: "8px",
              }}
            >
              Appelez-nous : {siteConfig.telephone}
            </a>
          </div>
        </div>
      </section>

      {/* Installation process — 4 steps */}
      <section style={{ padding: "100px 30px", backgroundColor: "#F6F7F9" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#FF6333",
              textTransform: "uppercase" as const,
              letterSpacing: "1.5px",
              display: "block",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Notre methode
          </span>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "48px",
              marginBottom: "60px",
              textAlign: "center",
            }}
          >
            Comment se deroule une <strong>installation</strong> {preposition} <strong>{zone.name}</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {content.installationProcess.map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "32px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "#FFF1EC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ fontSize: "20px", fontWeight: 700, color: "#FF6333" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#000000",
                    marginBottom: "12px",
                  }}
                >
                  {item.step}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "#3B3B3B",
                    lineHeight: "24px",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO1 — text + image */}
      <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" as const }}>
          <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 600,
                color: "#000000",
                lineHeight: "44px",
                marginBottom: "24px",
              }}
            >
              {content.seo1Title}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: formatSeoText(content.seo1, zone.name) }} />
            <a
              href={siteConfig.telephoneHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#FF6333",
                color: "#FFFFFF",
                padding: "12px 24px",
                borderRadius: "50px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                marginTop: "8px",
              }}
            >
              Devis installation : {siteConfig.telephone}
            </a>
          </div>
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <img
              src="/images/portes/fond-installation-porte-sectionnelle.webp"
              alt={`Installation porte sectionnelle ${preposition} ${zone.name} - pose`}
              title={`Pose porte sectionnelle ${zone.name}`}
              width={640}
              height={400}
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </div>
        </div>
      </section>

      {/* SEO2 — image + text */}
      <section style={{ padding: "80px 30px", backgroundColor: "#F6F7F9" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" as const }}>
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <img
              src="/images/portes/installation-porte-sectionnelle-multi.webp"
              alt={`Installation porte sectionnelle ${preposition} ${zone.name} - modeles`}
              title={`Modeles porte sectionnelle ${zone.name}`}
              width={640}
              height={400}
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </div>
          <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 600,
                color: "#000000",
                lineHeight: "44px",
                marginBottom: "24px",
              }}
            >
              {content.seo2Title}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: formatSeoText(content.seo2, zone.name) }} />
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                backgroundColor: "#FF6333",
                padding: "14px 32px",
                borderRadius: "50px",
                fontSize: "16px",
                fontWeight: 600,
                color: "#FFFFFF",
                textDecoration: "none",
                marginTop: "8px",
              }}
            >
              Demander un devis d&apos;installation
            </a>
          </div>
        </div>
      </section>

      {/* Local Reviews */}
      <LocalReviews zone={zone} service="installation" />

      {/* Services grid */}
      <ZoneServicesGrid zone={zone} currentService="installation-porte-sectionnelle" />

      {/* FAQ Accordion */}
      <section style={{ padding: "100px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#FF6333",
              textTransform: "uppercase" as const,
              letterSpacing: "1.5px",
              display: "block",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Questions frequentes
          </span>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "48px",
              marginBottom: "60px",
              textAlign: "center",
            }}
          >
            Installation porte sectionnelle {preposition} <strong>{zone.name}</strong> — FAQ
          </h2>
          <FAQAccordion faq={content.faq} />
        </div>
      </section>

      {/* Neighbor installation zones */}
      <section style={{ padding: "80px 30px", backgroundColor: "#F6F7F9" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#FF6333",
              textTransform: "uppercase" as const,
              letterSpacing: "1.5px",
              display: "block",
              marginBottom: "12px",
            }}
          >
            Zones d&apos;installation
          </span>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "42px",
              marginBottom: "32px",
            }}
          >
            Installation porte sectionnelle dans les zones voisines
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {neighbors.map((n, i) => (
              <a
                key={i}
                href={`/${n.slug}/`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  padding: "18px 22px",
                  textDecoration: "none",
                  border: "1px solid #E5E7EB",
                }}
              >
                <div>
                  <span style={{ fontSize: "15px", fontWeight: 600, color: "#000000", display: "block" }}>
                    Installation {n.name}
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: 400, color: "#999999" }}>
                    {n.department}
                  </span>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#FF6333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Maillage — links to parent and generic zone */}
      <section style={{ padding: "60px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto", display: "flex", gap: "24px", flexWrap: "wrap" as const }}>
          <a
            href="/installation-porte-sectionnelle-paris/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#F6F7F9",
              padding: "14px 24px",
              borderRadius: "12px",
              textDecoration: "none",
              border: "1px solid #E5E7EB",
              fontSize: "15px",
              fontWeight: 500,
              color: "#000000",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="#FF6333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Installation porte sectionnelle Paris
          </a>
          <a
            href={`/${zone.slug}/`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#F6F7F9",
              padding: "14px 24px",
              borderRadius: "12px",
              textDecoration: "none",
              border: "1px solid #E5E7EB",
              fontSize: "15px",
              fontWeight: 500,
              color: "#000000",
            }}
          >
            Porte sectionnelle {zone.name}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#FF6333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: content.faq.map(f => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: siteConfig.name,
            telephone: siteConfig.telephone,
            url: siteConfig.url,
            address: {
              "@type": "PostalAddress",
              addressLocality: zone.name,
              postalCode: zone.postalCode,
              addressRegion: zone.department,
              addressCountry: "FR",
            },
            areaServed: {
              "@type": zone.department === "Paris" ? "AdministrativeArea" : "City",
              name: zone.name,
            },
            description: `Installation de porte sectionnelle ${preposition} ${zone.name} (${zone.postalCode}). Pose neuve et remplacement par techniciens certifies. Appelez le ${siteConfig.telephone}.`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteConfig.url}/` },
              { "@type": "ListItem", position: 2, name: "Installation Paris", item: `${siteConfig.url}/installation-porte-sectionnelle-paris/` },
              { "@type": "ListItem", position: 3, name: `Installation ${zone.name}`, item: `${siteConfig.url}/${slug}/` },
            ],
          }),
        }}
      />

      <CTAForm
        heading={`Projet d'installation ${preposition} ${zone.name} (${zone.postalCode}) ?`}
        subtitle={[
          `Obtenez votre devis personnalise pour l'installation d'une porte sectionnelle ${preposition} ${zone.name}. Releve de cotes offert, fabrication sur mesure.`,
          `Devis gratuit sous 24h pour votre projet d'installation ${preposition} ${zone.name} (${zone.postalCode}). Techniciens certifies, pose soignee.`,
          `Demandez une etude technique gratuite pour votre porte sectionnelle ${preposition} ${zone.name}. Nos poseurs interviennent dans tout le ${zone.postalCode}.`,
          `Installation porte sectionnelle ${preposition} ${zone.name} : contactez-nous pour un chiffrage precis adapte a votre configuration.`,
          `Vous envisagez la pose d'une porte sectionnelle sur le ${zone.postalCode} ? Remplissez ce formulaire, nous vous rappelons sous 1 heure.`,
          `Projet d'installation ${preposition} ${zone.name} ? Notre equipe vous accompagne du choix du modele a la mise en service finale.`,
        ][zones.indexOf(zone) % 6]}
      />
      <Footer />
    </>
  );
}
