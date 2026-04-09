const articles = [
  {
    title: "Comment Choisir sa Porte Sectionnelle",
    slug: "comment-choisir-sa-porte-sectionnelle",
    image: "/images/portes/porte-garage-sectionnelle.webp",
    excerpt: "Le choix d'une porte sectionnelle depend de nombreux criteres : isolation, securite, motorisation et budget.",
    category: "Guide",
    readTime: "8 min",
  },
  {
    title: "Entretien Porte Sectionnelle : Les Gestes Essentiels",
    slug: "entretien-porte-sectionnelle-gestes-qui-sauvent",
    image: "/images/portes/entretien-porte-sectionnelle.webp",
    excerpt: "Un entretien regulier prolonge la duree de vie et previent les pannes couteuses.",
    category: "Entretien",
    readTime: "6 min",
  },
  {
    title: "Porte Sectionnelle vs Basculante : Le Comparatif",
    slug: "porte-sectionnelle-vs-basculante",
    image: "/images/portes/porte-garage-basculante.webp",
    excerpt: "Isolation, encombrement, prix, securite : decouvrez quelle porte de garage choisir.",
    category: "Comparatif",
    readTime: "7 min",
  },
];

export default function BlogPreview() {
  return (
    <section style={{ padding: "80px 30px", backgroundColor: "#F6F7F9" }}>
      <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
        <div data-blog-header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px" }}>
          <div>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#FF6333",
                textTransform: "uppercase" as const,
                letterSpacing: "1.5px",
                                display: "block",
                marginBottom: "8px",
              }}
            >
              Blog
            </span>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 600,
                color: "#000000",
                lineHeight: "42px",
                              }}
            >
              Blog — <strong>Porte sectionnelle Paris</strong>
            </h2>
          </div>
          <a
            href="/blog/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#FFFFFF",
              padding: "12px 24px",
              borderRadius: "50px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#000000",
                            textDecoration: "none",
              border: "1px solid #E5E7EB",
            }}
          >
            Voir tous les articles
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="#FF6333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div data-blog-grid data-grid-3 style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/blog/${article.slug}`}
              style={{
                display: "block",
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                overflow: "hidden",
                textDecoration: "none",
                border: "1px solid #E5E7EB",
                transition: "box-shadow 0.2s",
              }}
            >
              <img
                src={article.image}
                alt={`${article.title} - porte sectionnelle Paris`}
                title={article.title}
                width={400}
                height={200}
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#FF6333",
                      backgroundColor: "#FFF1EC",
                      padding: "4px 10px",
                      borderRadius: "50px",
                                          }}
                  >
                    {article.category}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      color: "#999999",
                                          }}
                  >
                    {article.readTime}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#000000",
                                        marginBottom: "8px",
                    lineHeight: "24px",
                  }}
                >
                  {article.title}
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
                  {article.excerpt}
                </p>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#FF6333",
                                        display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Lire l&apos;article
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="#FF6333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
