export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Appel & Diagnostic",
      desc: "Contactez le <strong>09 72 12 41 41</strong>. <strong>Diagnostic téléphonique gratuit</strong> et estimation du coût.",
    },
    {
      num: "02",
      title: "Devis Gratuit",
      desc: "Technicien sur place en <strong>30 min</strong>. <strong>Devis détaillé</strong> sans engagement, prix ferme.",
    },
    {
      num: "03",
      title: "Intervention",
      desc: "Réparation avec <strong>pièces d'origine</strong>. <strong>85% des pannes</strong> résolues en un seul passage.",
    },
    {
      num: "04",
      title: "Test & Garantie",
      desc: "Tests complets de la porte. <strong>Certificat de garantie</strong> pièces et main-d'oeuvre.",
    },
  ];

  return (
    <section
      data-section-lg
      style={{
        padding: "120px 30px",
        backgroundColor: "#FFFFFF",
        minHeight: "1127px",
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
            Notre Processus
          </span>
          <h2
            style={{
              fontSize: "56px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "62px",
                          }}
          >
            Comment fonctionne une <strong>porte sectionnelle</strong> a <strong>Paris</strong> ?
          </h2>
        </div>

        {/* Top row — text + image */}
        <div
          data-two-col
          style={{
            display: "flex",
            gap: "24px",
            marginBottom: "48px",
            alignItems: "stretch",
          }}
        >
          {/* Left text block */}
          <div
            data-process-text
            style={{
              flex: "1 1 50%",
              backgroundColor: "#F6F7F9",
              borderRadius: "16px",
              padding: "48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                fontSize: "32px",
                fontWeight: 600,
                color: "#000000",
                lineHeight: "40px",
                                marginBottom: "16px",
              }}
            >
              Des milliers de Parisiens nous font confiance
            </h3>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              Notre processus <strong>simple et transparent</strong> garantit chaque intervention. Du premier appel à la <strong>remise en service</strong>, vous êtes informé à chaque étape.
            </p>
          </div>

          {/* Right image placeholder */}
          <div
            data-process-image
            data-two-col-image
            style={{
              flex: "1 1 50%",
              minHeight: "360px",
              borderRadius: "16px",
              backgroundImage: "url('/images/portes/depannage-porte-sectionnelle.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
          />
        </div>

        {/* Bottom — 4 step cards */}
        <div
          data-process-steps
          style={{
            display: "flex",
            gap: "24px",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                flex: "1 1 25%",
                backgroundColor: "#F6F7F9",
                borderRadius: "16px",
                padding: "32px 24px",
              }}
            >
              <span
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "#E63946",
                                    display: "block",
                  marginBottom: "20px",
                  lineHeight: "1",
                }}
              >
                {step.num}
              </span>
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#000000",
                                    marginBottom: "12px",
                  lineHeight: "28px",
                }}
              >
                {step.title}
              </h4>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#3B3B3B",
                  lineHeight: "24px",
                                  }}
                dangerouslySetInnerHTML={{ __html: step.desc }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
