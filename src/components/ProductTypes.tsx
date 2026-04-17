"use client";

import { useState } from "react";

const categories = [
  { id: "garage", label: "Porte de garage" },
  { id: "industrielle", label: "Porte industrielle" },
];

const products: Record<string, { title: string; description: string; image: string; href: string }[]> = {
  garage: [
    {
      title: "Porte de garage sectionnelle",
      description:
        "<strong>Panneaux sandwich articulés</strong>, à refoulement vertical, dont l'ensemble assure <strong>gain d'espace</strong> et sécurité des garages.",
      image: "/images/portes/porte-garage-sectionnelle.webp",
      href: "/porte-de-garage-paris/",
    },
    {
      title: "Porte de garage basculante",
      description:
        "Structure monobloc équilibrée par un <strong>système de compensation à ressorts</strong>, ce dispositif permet d'optimiser l'espace disponible dans votre garage.",
      image: "/images/portes/porte-garage-basculante.webp",
      href: "/porte-de-garage-basculante-paris/",
    },
    {
      title: "Porte de garage enroulable",
      description:
        "Tablier à <strong>lames pleines enroulables</strong> dans un coffre en linteau, ce système permet un gain d'espace sous plafond et le long des parois latérales, avec une <strong>ouverture verticale rapide</strong>.",
      image: "/images/portes/rideau-metallique-basculante.webp",
      href: "/porte-de-garage-enroulable-paris/",
    },
  ],
  industrielle: [
    {
      title: "Porte sectionnelle industrielle",
      description:
        "Composée de <strong>panneaux métalliques à double paroi</strong> injectée de mousse en polyuréthane, cette porte assure une <strong>isolation renforcée</strong>, adaptée aux environnements industriels exigeants.",
      image: "/images/portes/porte-sectionnelle-industrielle.webp",
      href: "/porte-sectionnelle-industrielle-paris/",
    },
    {
      title: "Rideau métallique industriel",
      description:
        "Cortège de <strong>lames pleines et renforcées</strong>, actionné par un <strong>moteur tubulaire ou central</strong>, il assure la protection de larges baies et une fiabilité cyclique conforme aux exigences des sites industriels.",
      image: "/images/portes/porte-rideau-metallique.webp",
      href: "/rideau-metallique-industriel-paris/",
    },
    {
      title: "Porte souple rapide",
      description:
        "Dispositif d'ouverture à <strong>haute fréquence</strong> doté d'une <strong>toile PVC flexible</strong>, qui assure la séparation thermique ou hygiénique entre zones.",
      image: "/images/portes/porte-garage-souple-industrielle.webp",
      href: "/porte-souple-rapide-paris/",
    },
  ],
};

export default function ProductTypes() {
  const [active, setActive] = useState("garage");

  return (
    <section style={{ padding: "100px 30px", backgroundColor: "#FFFFFF" }}>
      <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#E63946",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
                            display: "block",
              marginBottom: "16px",
            }}
          >
            Nos fermetures
          </span>
          <h2
            style={{
              fontSize: "44px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "52px",
                            marginBottom: "16px",
            }}
          >
            Nos types de <strong>portes sectionnelles</strong> a <strong>Paris</strong>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#3B3B3B",
                            maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "26px",
            }}
          >
            Découvrez notre gamme complète de portes de garage et fermetures industrielles, adaptées à tous les besoins.
          </p>
        </div>

        {/* Tab filters */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "48px",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                padding: "12px 28px",
                borderRadius: "50px",
                border: active === cat.id ? "2px solid #E63946" : "2px solid #E0E0E0",
                backgroundColor: active === cat.id ? "#E63946" : "#FFFFFF",
                color: active === cat.id ? "#FFFFFF" : "#1A1A1A",
                fontSize: "15px",
                fontWeight: 600,
                                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product cards */}
        <div
          data-product-grid
          data-grid-3
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {products[active].map((product, i) => (
            <a
              key={i}
              href={product.href}
              style={{
                display: "block",
                backgroundColor: "#F6F7F9",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "transform 0.2s ease",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "280px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px",
                  backgroundColor: "#F0F1F3",
                }}
              >
                <img
                  src={product.image}
                  alt={`${product.title} Paris - installation et depannage`}
                  title={`${product.title} a Paris`}
                  width={400}
                  height={280}
                  loading="lazy"
                  decoding="async"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#000000",
                                        marginBottom: "12px",
                  }}
                >
                  {product.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#3B3B3B",
                                        lineHeight: "22px",
                    marginBottom: "16px",
                  }}
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#E63946",
                                        display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Voir plus
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="#E63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
