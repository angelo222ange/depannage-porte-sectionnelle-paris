"use client";

import { Zone, services, siteConfig } from "@/config/site";

const serviceImages: Record<string, string> = {
  "installation-porte-sectionnelle": "/images/portes/installation-porte-sectionnelle.webp",
  "depannage-porte-sectionnelle": "/images/portes/depannage-porte-sectionnelle.webp",
  "reparation-porte-sectionnelle": "/images/portes/reparation-porte-sectionnelle.webp",
  "entretien-porte-sectionnelle": "/images/portes/entretien-porte-sectionnelle.webp",
  "motorisation-porte-sectionnelle": "/images/portes/moteur-porte-sectionnelle.webp",
  "porte-sectionnelle-industrielle": "/images/portes/porte-sectionnelle-industrielle.webp",
  "porte-de-garage": "/images/portes/porte-garage-sectionnelle.webp",
};

const subcityServices = [
  "installation-porte-sectionnelle",
  "depannage-porte-sectionnelle",
  "reparation-porte-sectionnelle",
  "entretien-porte-sectionnelle",
];

interface Props {
  zone: Zone;
  currentService?: string; // slug du service actuel pour l'exclure de la grille
}

export default function ZoneServicesGrid({ zone, currentService }: Props) {
  const preposition = zone.department === "Paris" ? "dans le" : "a";
  const zoneSuffix = zone.slug.replace("porte-sectionnelle-", "");

  const filteredServices = currentService
    ? services.filter((s) => s.slug !== currentService)
    : services;

  return (
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
            fontSize: "36px",
            fontWeight: 600,
            color: "#000000",
            lineHeight: "44px",
            marginBottom: "48px",
          }}
        >
          Nos autres prestations {preposition} {zone.name} ({zone.postalCode})
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredServices.map((service) => {
            const img = serviceImages[service.slug] || "/images/portes/installation-porte-sectionnelle.webp";
            const href = subcityServices.includes(service.slug)
              ? `/${service.slug}-${zoneSuffix}/`
              : `/${service.slug}-paris/`;
            return (
              <a
                key={service.slug}
                href={href}
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
                  <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#000000", marginBottom: "8px" }}>
                    {service.title} {preposition} {zone.name}
                  </h3>
                  <p style={{ fontSize: "14px", fontWeight: 400, color: "#3B3B3B", lineHeight: "22px", marginBottom: "16px" }}>
                    {service.shortTitle} de <strong>porte sectionnelle</strong> {preposition} <strong>{zone.name}</strong> ({zone.postalCode}) par nos techniciens qualifies.
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
  );
}
