const zones = [
  { label: "Paris 11eme", href: "/porte-sectionnelle-paris-11/" },
  { label: "Paris 15eme", href: "/porte-sectionnelle-paris-15/" },
  { label: "Paris 18eme", href: "/porte-sectionnelle-paris-18/" },
  { label: "Paris 20eme", href: "/porte-sectionnelle-paris-20/" },
  { label: "Boulogne-Billancourt", href: "/porte-sectionnelle-boulogne-billancourt/" },
  { label: "Saint-Denis", href: "/porte-sectionnelle-saint-denis/" },
  { label: "Montreuil", href: "/porte-sectionnelle-montreuil/" },
  { label: "Nanterre", href: "/porte-sectionnelle-nanterre/" },
  { label: "Creteil", href: "/porte-sectionnelle-creteil/" },
  { label: "Versailles", href: "/porte-sectionnelle-versailles/" },
];

export default function ZonesGrid() {
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
            textAlign: "center",
          }}
        >
          Zones d&apos;intervention
        </span>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#000000",
            lineHeight: "42px",
                        marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <strong>Porte sectionnelle</strong> dans toute la region parisienne
        </h2>
        <div data-zones-grid data-grid-4 style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
          {zones.map((zone, i) => (
            <a
              key={i}
              href={zone.href}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                padding: "14px 18px",
                textDecoration: "none",
                border: "1px solid #E5E7EB",
                transition: "border-color 0.2s",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#1A1A1A",
                                  }}
              >
                {zone.label}
              </span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="#FF6333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
