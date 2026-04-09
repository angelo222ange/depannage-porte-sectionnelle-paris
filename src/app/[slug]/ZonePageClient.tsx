"use client";

import { useState } from "react";
import { getZoneBySlug, getNeighborZones, services, siteConfig, zones } from "@/config/site";
import { getZoneContent } from "@/lib/zone-content";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import CTAForm from "@/components/CTAForm";
import LocalReviews from "@/components/LocalReviews";
import Footer from "@/components/Footer";

// Transform a big text block into structured HTML: short paragraphs + bold keywords
function formatSeoText(text: string, zoneName: string): string {
  // Split into sentences
  const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.trim());

  // Group into paragraphs of 2-3 sentences
  const paragraphs: string[] = [];
  for (let i = 0; i < sentences.length; i += 2) {
    const chunk = sentences.slice(i, i + 2).join(" ");
    if (chunk.trim()) paragraphs.push(chunk);
  }

  // Detect if text has a list pattern (contains ":" followed by items)
  const colonIdx = text.indexOf(" : ");

  // Bold keywords
  let html = paragraphs
    .map(p => {
      let formatted = p
        .replace(/portes? sectionnelles?/gi, (m) => `<strong>${m}</strong>`)
        .replace(new RegExp(`(${zoneName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "gi"), "<strong>$1</strong>")
        .replace(/\b(installation|depannage|dépannage|reparation|réparation|entretien|motorisation)\b/gi, "<strong>$1</strong>")
        .replace(/24h\/24/g, "<strong>24h/24</strong>")
        .replace(/30 minutes/g, "<strong>30 minutes</strong>")
        .replace(/25 ans/g, "<strong>25 ans</strong> ")
        // Fix double-strong and extra spaces
        .replace(/<strong><strong>/g, "<strong>")
        .replace(/<\/strong><\/strong>/g, "</strong>")
        .replace(/<\/strong>(\w)/g, "</strong> $1")
        .replace(/(\w)<strong>/g, "$1 <strong>")
        .replace(/  +/g, " ");
      return `<p style="margin-bottom:16px;font-size:16px;font-weight:400;color:#3B3B3B;line-height:28px;font-family:var(--font-figtree),sans-serif">${formatted}</p>`;
    })
    .join("");

  // If text mentions a checklist/process (contains ":"), extract items as a list
  if (colonIdx > -1 && text.includes("verification") || text.includes("controle") || text.includes("graissage")) {
    // Find the sentence with ":" and split what follows into list items
    const listMatch = text.match(/:\s*([^.]+(?:,\s*[^.]+){2,})/);
    if (listMatch) {
      const items = listMatch[1].split(/,\s*/).filter(item => item.trim().length > 10);
      if (items.length >= 3) {
        const listHtml = `<ul style="margin:16px 0;padding-left:20px;display:flex;flex-direction:column;gap:8px">${items.map(item =>
          `<li style="font-size:15px;color:#3B3B3B;line-height:24px;font-family:var(--font-figtree),sans-serif">${item.trim()}</li>`
        ).join("")}</ul>`;
        // Insert list after first paragraph
        const parts = html.split("</p>");
        if (parts.length > 1) {
          html = parts[0] + "</p>" + listHtml + parts.slice(1).join("</p>");
        }
      }
    }
  }

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

export default function ZonePageClient({ slug }: { slug: string }) {
  const zone = getZoneBySlug(slug);
  if (!zone) return null;

  const content = getZoneContent(zone);
  const neighbors = getNeighborZones(slug, 6);
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
          minHeight: "700px",
        }}
      >
        <div
          style={{
            maxWidth: "1408px",
            margin: "0 auto",
            borderRadius: "16px",
            backgroundImage: "url('/images/portes/hero-porte-sectionnelle-paris.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden",
            minHeight: "600px",
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
              {zone.department}
            </span>
            <h1
              style={{
                fontSize: "64px",
                fontWeight: 600,
                color: "#FFFFFF",
                lineHeight: "72px",
                                marginBottom: "24px",
                maxWidth: "800px",
              }}
            >
              Porte Sectionnelle {preposition} {zone.name}
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
              Installation, depannage et reparation de portes sectionnelles {preposition} {zone.name}. Intervention en 30 minutes sur le {zone.postalCode}, 24h/24. Devis gratuit.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <a
                href="#contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0px",
                  backgroundColor: "#FFFFFF",
                  padding: "8px 8px 8px 24px",
                  borderRadius: "50px",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#000000",
                                  }}
              >
                Devis Gratuit
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    backgroundColor: "#FF6333",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "12px",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
              <a
                href={siteConfig.telephoneHref}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: 500,
                                    textDecoration: "none",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(255,255,255,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M16.5 12.69V14.94C16.5 15.48 16.08 15.93 15.54 15.975C15.12 16.005 14.775 16.02 14.5 16.02C7.045 16.02 1 9.975 1 2.52C1 2.245 1.015 1.9 1.045 1.48C1.09 0.94 1.54 0.52 2.08 0.52H4.33C4.595 0.52 4.82 0.715 4.855 0.98C4.885 1.215 4.915 1.405 4.945 1.555C5.18 2.77 5.61 3.915 6.21 4.96L5.025 5.75C5.025 5.75 5.62 7.35 7.64 9.37C9.66 11.39 11.27 11.995 11.27 11.995L12.055 10.805C13.105 11.405 14.25 11.84 15.465 12.075C15.615 12.105 15.805 12.135 16.04 12.165C16.305 12.2 16.5 12.425 16.5 12.69Z" stroke="#FFFFFF" strokeWidth="1.2" />
                  </svg>
                </div>
                {siteConfig.telephone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro — image + texte */}
      <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" as const }}>
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <img
              src="/images/portes/installation-porte-sectionnelle.webp"
              alt={`Porte sectionnelle ${preposition} ${zone.name} - installation et depannage`}
              title={`Porte sectionnelle ${zone.name} - ${siteConfig.name}`}
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
            <h2
              style={{
                fontSize: "40px",
                fontWeight: 600,
                color: "#000000",
                lineHeight: "48px",
                                marginBottom: "24px",
              }}
            >
              Votre specialiste <strong>porte sectionnelle</strong> {preposition} {zone.name}
            </h2>
            <div
              style={{ marginBottom: "20px" }}
              dangerouslySetInnerHTML={{ __html: formatSeoText(content.intro, zone.name) }}
            />
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
              }}
            >
              Appelez-nous : {siteConfig.telephone}
            </a>
          </div>
        </div>
      </section>

      {/* Services grid */}
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
            Nos services
          </span>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "48px",
                            marginBottom: "48px",
            }}
          >
            Nos prestations porte sectionnelle {preposition} {zone.name}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {services.map((service) => {
              const serviceImages: Record<string, string> = {
                "installation-porte-sectionnelle": "/images/portes/installation-porte-sectionnelle.webp",
                "depannage-porte-sectionnelle": "/images/portes/depannage-porte-sectionnelle.webp",
                "reparation-porte-sectionnelle": "/images/portes/reparation-porte-sectionnelle.webp",
                "entretien-porte-sectionnelle": "/images/portes/entretien-porte-sectionnelle.webp",
                "motorisation-porte-sectionnelle": "/images/portes/moteur-porte-sectionnelle.webp",
                "porte-sectionnelle-industrielle": "/images/portes/porte-sectionnelle-industrielle.webp",
                "porte-de-garage": "/images/portes/porte-garage-sectionnelle.webp",
              };
              const img = serviceImages[service.slug] || "/images/portes/installation-porte-sectionnelle.webp";
              // Services with subcity pages link to the zone-specific page
              const subcityServices = ["installation-porte-sectionnelle", "depannage-porte-sectionnelle", "reparation-porte-sectionnelle", "entretien-porte-sectionnelle"];
              const zoneSuffix = zone.slug.replace("porte-sectionnelle-", "");
              const serviceHref = subcityServices.includes(service.slug)
                ? `/${service.slug}-${zoneSuffix}/`
                : `/${service.slug}-paris/`;
              return (
                <a
                  key={service.slug}
                  href={serviceHref}
                  style={{
                    display: "block",
                    borderRadius: "16px",
                    overflow: "hidden",
                    textDecoration: "none",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "160px",
                      backgroundImage: `url('${img}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div style={{ padding: "24px 24px 28px" }}>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "#000000",
                                                marginBottom: "8px",
                      }}
                    >
                      {service.title} {preposition} {zone.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#3B3B3B",
                        lineHeight: "22px",
                                                marginBottom: "16px",
                      }}
                    >
                      {service.shortTitle} de <strong>porte sectionnelle</strong> {preposition} <strong>{zone.name}</strong> par nos techniciens qualifies.
                    </p>
                    <span style={{ fontSize: "14px", fontWeight: 600, color: "#FF6333", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      En savoir plus
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#FF6333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Section 1 — texte + image */}
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
            <div
              dangerouslySetInnerHTML={{ __html: formatSeoText(content.seo1, zone.name) }}
            />
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
              }}
            >
              Devis gratuit : {siteConfig.telephone}
            </a>
          </div>
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <img
              src="/images/portes/depannage-porte-sectionnelle.webp"
              alt={`Installation et depannage porte sectionnelle ${preposition} ${zone.name}`}
              title={`Porte sectionnelle ${zone.name} - ${siteConfig.name}`}
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

      {/* Why Us */}
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
            Pourquoi nous choisir
          </span>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "48px",
                            marginBottom: "48px",
              maxWidth: "600px",
            }}
          >
            Les avantages de notre service de <strong>porte sectionnelle</strong> {preposition} {zone.name}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {content.whyUs.map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "32px 28px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#FFF1EC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#FF6333",
                                      }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#000000",
                                        marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#3B3B3B",
                    lineHeight: "22px",
                                      }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Section 2 — image + texte (alternance inversee) */}
      <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" as const }}>
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <img
              src="/images/portes/entretien-porte-sectionnelle.webp"
              alt={`Reparation et entretien porte sectionnelle ${preposition} ${zone.name}`}
              title={`Entretien porte sectionnelle ${zone.name} - ${siteConfig.name}`}
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
            <div
              dangerouslySetInnerHTML={{ __html: formatSeoText(content.seo2, zone.name) }}
            />
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#FF6333",
                fontSize: "15px",
                fontWeight: 600,
                                textDecoration: "none",
              }}
            >
              Demander un devis
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="#FF6333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Local Expertise — texte + image */}
      <section style={{ padding: "80px 30px", backgroundColor: "#F6F7F9" }}>
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
              Notre expertise en <strong>porte sectionnelle</strong> {preposition} {zone.name}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: formatSeoText(content.localExpertise, zone.name) }}
            />
            <a
              href={siteConfig.telephoneHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#FF6333",
                fontSize: "16px",
                fontWeight: 600,
                                textDecoration: "none",
              }}
            >
              Contactez-nous : {siteConfig.telephone}
            </a>
          </div>
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <img
              src="/images/portes/installation-porte-sectionnelle-multi.webp"
              alt={`Expertise locale porte sectionnelle ${preposition} ${zone.name}`}
              title={`Notre equipe ${preposition} ${zone.name} - ${siteConfig.name}`}
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

      {/* Avis clients locaux */}
      <LocalReviews zone={zone} service={
        (["installation", "depannage", "reparation", "entretien"] as ("installation" | "depannage" | "reparation" | "entretien")[])[zones.indexOf(zone) % 4]
      } />

      {/* FAQ */}
      <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
            Questions frequentes
          </span>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "48px",
                            marginBottom: "32px",
            }}
          >
            FAQ — Porte sectionnelle {preposition} {zone.name}
          </h2>
          <FAQAccordion faq={content.faq} />
        </div>
      </section>

      {/* Neighbor zones */}
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
            Zones d&apos;intervention
          </span>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "48px",
                            marginBottom: "32px",
            }}
          >
            <strong>Porte sectionnelle</strong> : nous intervenons aussi pres de {zone.name}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            {neighbors.map((z) => (
              <a
                key={z.slug}
                href={`/${z.slug}/`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "20px 24px",
                  textDecoration: "none",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#000000",
                                            display: "block",
                    }}
                  >
                    {z.name}
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "#3B3B3B",
                                          }}
                  >
                    {z.department}
                  </span>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#FF6333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <a
              href="/zones/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#FF6333",
                color: "#FFFFFF",
                padding: "14px 32px",
                borderRadius: "50px",
                fontSize: "15px",
                fontWeight: 600,
                                textDecoration: "none",
              }}
            >
              Voir toutes nos zones d&apos;intervention
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <CTAForm
        heading={`Besoin d'un specialiste porte sectionnelle ${preposition} ${zone.name} (${zone.postalCode}) ?`}
        subtitle={`Notre equipe intervient ${preposition} ${zone.name} pour l'installation, le depannage et l'entretien de votre porte sectionnelle. Devis gratuit sous 24h.`}
      />

      {/* Schema.org LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Porte Sectionnelle ${zone.name}`,
            telephone: siteConfig.telephone,
            url: `https://porte-sectionnelle-paris.fr/${slug}/`,
            address: {
              "@type": "PostalAddress",
              addressLocality: zone.name,
              postalCode: zone.postalCode,
              addressRegion: zone.department,
              addressCountry: "FR",
            },
            areaServed: { "@type": "City", name: zone.name },
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
              { "@type": "ListItem", position: 2, name: zone.name, item: `https://porte-sectionnelle-paris.fr/${slug}/` },
            ],
          }),
        }}
      />

      {/* Footer */}
      <Footer />
    </>
  );
}
