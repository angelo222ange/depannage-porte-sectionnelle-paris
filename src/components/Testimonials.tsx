"use client";

export default function Testimonials() {
  const reviews = [
    {
      avatar: "/images/avatars/laurent.webp",
      name: "Laurent M. — Paris 15e",
      rating: 5,
      text: "Porte sectionnelle bloquee un dimanche soir. Le technicien etait la en <strong>25 minutes</strong>. Ressort casse remplace en moins d'une heure. <strong>Travail propre et professionnel</strong>.",
    },
    {
      avatar: "/images/avatars/sophie.webp",
      name: "Sophie D. — Boulogne",
      rating: 5,
      text: "<strong>Installation complete</strong> d'une porte sectionnelle Hormann motorisee dans notre copropriete. <strong>Devis respecte, delai tenu</strong>, finitions impeccables. Les voisins veulent la meme.",
    },
    {
      avatar: "/images/avatars/marc.webp",
      name: "Marc P. — Paris 11e",
      rating: 5,
      text: "<strong>Motorisation</strong> de notre vieille porte sectionnelle manuelle. Moteur <strong>Somfy</strong> installe en une matinee. On ouvre maintenant depuis la voiture avec la telecommande.",
    },
    {
      avatar: "/images/avatars/catherine.webp",
      name: "Catherine B. — Neuilly",
      rating: 5,
      text: "Contrat d'entretien annuel pour les 4 portes sectionnelles de notre parking residentiel. <strong>Zero panne depuis 3 ans</strong> grace a la <strong>maintenance preventive</strong>.",
    },
    {
      avatar: "/images/avatars/thomas.webp",
      name: "Thomas R. — Paris 8e",
      rating: 5,
      text: "Suite a un choc de vehicule, deux panneaux de notre porte sectionnelle etaient enfonces. <strong>Remplacement realise dans la journee</strong> avec des panneaux identiques.",
    },
    {
      avatar: "/images/avatars/isabelle.webp",
      name: "Isabelle G. — Montreuil",
      rating: 5,
      text: "J'ai fait installer une <strong>porte sectionnelle laterale</strong> dans mon atelier car le plafond est trop bas. <strong>Solution sur mesure</strong> parfaitement adaptee. Isolation phonique remarquable.",
    },
  ];

  return (
    <section
      data-section-lg
      style={{
        padding: "120px 30px",
        backgroundColor: "#FFFFFF",
        minHeight: "920px",
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
            Avis Clients
          </span>
          <h2
            style={{
              fontSize: "56px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "62px",
                          }}
          >
            Avis clients — <strong>Porte sectionnelle Paris</strong>
          </h2>
        </div>

        {/* Review Cards */}
        <div
          data-testimonials-grid
          data-grid-3
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#F6F7F9",
                borderRadius: "16px",
                padding: "32px",
              }}
            >
              {/* Google logo row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                {/* Google G icon */}
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#3B3B3B",
                                      }}
                >
                  Avis de Google
                </span>
              </div>

              {/* Stars */}
              <div
                style={{
                  display: "flex",
                  gap: "3px",
                  marginBottom: "16px",
                }}
              >
                {[...Array(review.rating)].map((_, j) => (
                  <svg
                    key={j}
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="#FBBC05"
                  >
                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#3B3B3B",
                  lineHeight: "26px",
                                    marginBottom: "24px",
                }}
                dangerouslySetInnerHTML={{ __html: `&ldquo;${review.text}&rdquo;` }}
              />

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {/* Avatar photo */}
                <img
                  src={review.avatar}
                  alt={`Avis client ${review.name} porte sectionnelle Paris`}
                  title={review.name}
                  width={44}
                  height={44}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000000",
                                      }}
                >
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
