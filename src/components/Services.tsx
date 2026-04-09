export default function Services() {
  const services = [
    {
      icon: "thermostat",
      title: "Installation",
      desc: "<strong>Installation sur mesure</strong> de porte sectionnelle résidentielle et industrielle. Pose en <strong>une journée</strong>, motorisation incluse.",
      img: "installation-porte-sectionnelle.webp",
      href: "/installation-porte-sectionnelle-paris/",
    },
    {
      icon: "heat",
      title: "Dépannage",
      desc: "Intervention en <strong>30 minutes</strong> pour porte sectionnelle bloquée. Disponible <strong>24h/24, 7j/7</strong> dans tout Paris.",
      img: "depannage-porte-sectionnelle.webp",
      href: "/depannage-porte-sectionnelle-paris/",
    },
    {
      icon: "duct",
      title: "Réparation",
      desc: "Remplacement de <strong>panneaux, ressorts, câbles</strong> et rails. Pièces d'origine <strong>Hörmann, Novoferm</strong>, Wayne Dalton.",
      img: "reparation-porte-sectionnelle.webp",
      href: "/reparation-porte-sectionnelle-paris/",
    },
    {
      icon: "maintenance",
      title: "Motorisation",
      desc: "Automatisation de <strong>porte sectionnelle manuelle</strong>. Moteurs <strong>Somfy, Hörmann, Liftmaster</strong> avec télécommande.",
      img: "moteur-porte-sectionnelle.webp",
      href: "/motorisation-porte-sectionnelle-paris/",
    },
    {
      icon: "ventilation",
      title: "Entretien",
      desc: "<strong>Maintenance préventive</strong> annuelle. Lubrification, réglages, test sécurité. Prolonge la durée de vie de <strong>30%</strong>.",
      img: "entretien-porte-sectionnelle.webp",
      href: "/entretien-porte-sectionnelle-paris/",
    },
    {
      icon: "emergency",
      title: "Porte de Garage",
      desc: "Sectionnelle, basculante, coulissante, enroulable. <strong>Installation et dépannage</strong> tous types de <strong>portes de garage</strong>.",
      img: "porte-garage-maison.webp",
      href: "/porte-de-garage-paris/",
    },
  ];

  // Icons removed — cards use background images only

  return (
    <section
      data-section-lg
      style={{
        padding: "120px 30px",
        backgroundColor: "#F6F7F9",
        minHeight: "1178px",
      }}
    >
      {/* Inner bg container */}
      <div
        style={{
          maxWidth: "1408px",
          margin: "0 auto",
          backgroundColor: "#F6F7F9",
          borderRadius: "16px",
        }}
      >
        <div
          style={{
            maxWidth: "1312px",
            margin: "0 auto",
          }}
        >
          {/* Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
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
              Nos Services
            </span>
            <h2
              style={{
                fontSize: "56px",
                fontWeight: 600,
                color: "#000000",
                lineHeight: "62px",
                                marginBottom: "16px",
              }}
            >
              Services Porte
              <br />
              Sectionnelle Paris
            </h2>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              De l&apos;<strong>installation</strong> au <strong>dépannage en urgence</strong>, nos techniciens interviennent sur tous types de <strong>portes sectionnelles à Paris</strong>.
            </p>
          </div>

          {/* Grid 3x2 */}
          <div
            data-services-grid
            data-grid-3
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {services.map((service, i) => (
              <a
                key={i}
                href={service.href}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  minHeight: "320px",
                  backgroundImage: `url('/images/portes/${service.img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  textDecoration: "none",
                }}
              >
                {/* Dark overlay */}
                <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)", zIndex: 1 }} />
                <div style={{ position: "relative", zIndex: 2, padding: "32px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ flex: 1 }} />
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                                        marginBottom: "12px",
                    lineHeight: "28px",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "24px",
                                        marginBottom: "20px",
                    flex: 1,
                  }}
                  dangerouslySetInnerHTML={{ __html: service.desc }}
                />
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#FF6333",
                                        display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  En savoir plus
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="#FF6333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
