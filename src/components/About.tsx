export default function About() {
  const stats = [
    { value: "4.9/5", label: "Note Google" },
    { value: "25+", label: "Ans d'expérience" },
    { value: "15K+", label: "Interventions" },
  ];

  return (
    <section
      data-section-lg
      style={{
        padding: "120px 30px",
        backgroundColor: "#F6F7F9",
        minHeight: "775px",
      }}
    >
      <div
        data-two-col
        style={{
          maxWidth: "1312px",
          margin: "0 auto",
          display: "flex",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        {/* LEFT — Image placeholder */}
        <div
          data-two-col-image
          style={{
            flex: "1 1 50%",
            minHeight: "535px",
            borderRadius: "16px",
            backgroundImage: "url('/images/portes/installation-porte-sectionnelle-garage.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* RIGHT — Content */}
        <div
          data-two-col-content
          style={{
            flex: "1 1 50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 0 0 24px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#E63946",
              textTransform: "uppercase" as const,
              letterSpacing: "1.5px",
                            marginBottom: "16px",
            }}
          >
            Qui sommes-nous
          </span>
          <h2
            style={{
              fontSize: "56px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "62px",
                            marginBottom: "20px",
            }}
          >
            Votre Expert
            <br />
            Porte Sectionnelle
            <br />
            à Paris
          </h2>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#3B3B3B",
              lineHeight: "26px",
                            marginBottom: "32px",
              maxWidth: "480px",
            }}
          >
            Depuis plus de <strong>25 ans</strong>, notre entreprise est le partenaire de référence des particuliers et professionnels parisiens pour la <strong>porte sectionnelle</strong>. Installation, dépannage, réparation et motorisation — disponibles <strong>24h/24</strong> dans tout <strong>Paris</strong>.
          </p>

          {/* Learn More Button */}
          <a
            href="tel:0972124141"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0px",
              backgroundColor: "#E63946",
              padding: "8px 8px 8px 24px",
              borderRadius: "50px",
              fontSize: "15px",
              fontWeight: 600,
              color: "#FFFFFF",
                            width: "fit-content",
              marginBottom: "40px",
            }}
          >
            09 72 12 41 41
            <div
              style={{
                width: "28px",
                height: "28px",
                backgroundColor: "rgba(255,255,255,0.25)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "12px",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>

          {/* Stats Row */}
          <div
            data-stats-row
            style={{
              display: "flex",
              gap: "40px",
            }}
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <span
                  style={{
                    fontSize: "36px",
                    fontWeight: 700,
                    color: "#000000",
                                        display: "block",
                    lineHeight: "1.2",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#3B3B3B",
                                      }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
