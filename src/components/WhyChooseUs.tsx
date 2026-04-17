export default function WhyChooseUs() {
  const features = [
    {
      title: "Techniciens certifiés",
      desc: "Chaque technicien possède au minimum <strong>8 ans d'expérience</strong> terrain sur les <strong>portes sectionnelles</strong> résidentielles et industrielles.",
    },
    {
      title: "Disponible 24h/24",
      desc: "Porte sectionnelle bloquée en pleine nuit ? Notre astreinte est opérationnelle <strong>24h/24, 7j/7</strong>, dimanches et fériés inclus.",
    },
    {
      title: "Devis transparent",
      desc: "<strong>Devis détaillé</strong> par SMS en 15 minutes. <strong>Prix fermes</strong>, aucune surprise. Paiement en 3x disponible pour les installations.",
    },
    {
      title: "Pièces d'origine en stock",
      desc: "Chaque véhicule d'intervention transporte les pièces courantes : <strong>ressorts, câbles, moteurs</strong>. 85% des pannes résolues sur place.",
    },
    {
      title: "Garantie complète",
      desc: "Garantie de <strong>1 à 10 ans</strong> sur toutes les interventions. Pièces d'origine <strong>Hörmann, Novoferm, Somfy</strong>, Wayne Dalton.",
    },
    {
      title: "Intervention en 30 min",
      desc: "Notre maillage de techniciens dans chaque <strong>arrondissement de Paris</strong> garantit une arrivée en <strong>moins d'une demi-heure</strong>.",
    },
  ];

  return (
    <section
      data-section-lg
      style={{
        padding: "120px 30px",
        backgroundColor: "#FFFFFF",
        minHeight: "858px",
      }}
    >
      <div
        style={{
          maxWidth: "1312px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#E63946",
              textTransform: "uppercase" as const,
              letterSpacing: "1.5px",
                            display: "block",
              marginBottom: "16px",
            }}
          >
            Nos Avantages
          </span>
          <h2
            style={{
              fontSize: "56px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "62px",
                          }}
          >
            Pourquoi choisir <strong>Depannage Porte Sectionnelle Paris</strong> ?
          </h2>
        </div>

        {/* Features grid — 3 cols */}
        <div
          data-features-grid
          data-grid-3
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {features.map((feature, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#F6F7F9",
                borderRadius: "16px",
                padding: "32px 28px",
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "#FFEEF0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"
                    stroke="#E63946"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#000000",
                                    marginBottom: "12px",
                  lineHeight: "28px",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#3B3B3B",
                  lineHeight: "24px",
                                  }}
                dangerouslySetInnerHTML={{ __html: feature.desc }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
