"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);

  const bgs = [
    "/images/portes/hero-porte-sectionnelle-fond.webp",
  ];

  const products = [
    "/images/portes/porte-sectionnelle-produit.webp",
    "/images/portes/porte-garage-souple-industrielle.webp",
    "/images/portes/porte-sectionnelle-industrielle.webp",
    "/images/portes/rideau-metallique-basculante.webp",
    "/images/portes/porte-garage-sectionnelle.webp",
    "/images/portes/porte-garage-basculante.webp",
  ];

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgs.length);
    }, 5000);
    const prodInterval = setInterval(() => {
      setProductIndex((prev) => (prev + 1) % products.length);
    }, 3500);
    return () => {
      clearInterval(bgInterval);
      clearInterval(prodInterval);
    };
  }, []);

  return (
    <section
      data-hero
      data-section-lg
      style={{
        padding: "213px 30px 76px",
        backgroundColor: "#F6F7F9",
        minHeight: "923px",
      }}
    >
      <div
        data-hero-container
        style={{
          maxWidth: "1408px",
          margin: "0 auto",
          borderRadius: "16px",
          position: "relative",
          overflow: "hidden",
          minHeight: "700px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Sliding backgrounds */}
        {bgs.map((bg, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url('${bg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: bgIndex === i ? 1 : 0,
              transition: "opacity 1.5s ease-in-out",
              zIndex: 0,
            }}
          />
        ))}

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
            zIndex: 1,
          }}
        />

        {/* Rating card — bottom right */}
        <div
          data-hero-rating-card
          style={{
            position: "absolute",
            bottom: "24px",
            right: "24px",
            zIndex: 3,
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            padding: "16px 20px",
            width: "210px",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "3px", marginBottom: "6px" }}>
            <span style={{ fontSize: "32px", fontWeight: 700, color: "#000000", lineHeight: "1" }}>4.9</span>
            <span style={{ fontSize: "14px", fontWeight: 400, color: "#3B3B3B" }}>/5</span>
          </div>
          <div style={{ display: "flex", gap: "2px", marginBottom: "8px" }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#E63946">
                <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" />
              </svg>
            ))}
          </div>
          <p style={{ fontSize: "12px", fontWeight: 400, color: "#3B3B3B", lineHeight: "17px", marginBottom: "10px" }}>
            {"Bas\u00E9 sur"} <strong>850+</strong> {"avis clients v\u00E9rifi\u00E9s \u00E0 Paris"}
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            {["laurent", "sophie", "marc", "catherine"].map((name, i) => (
              <img
                key={name}
                src={`/images/avatars/${name}.webp`}
                alt={`Avis client ${name} porte sectionnelle Paris`}
                title={`Client ${name}`}
                width={28}
                height={28}
                loading="lazy"
                decoding="async"
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  border: "2px solid #FFFFFF",
                  marginLeft: i > 0 ? "-8px" : "0",
                  objectFit: "cover",
                }}
              />
            ))}
          </div>
        </div>

        <div
          data-hero-inner
          style={{
            maxWidth: "1312px",
            margin: "0 auto",
            padding: "80px 48px",
            position: "relative",
            zIndex: 2,
            width: "100%",
            display: "flex",
            gap: "48px",
          }}
        >
          {/* LEFT — Text */}
          <div data-hero-text style={{ flex: "1 1 55%", display: "flex", flexDirection: "column" }}>
            <h1
              style={{
                fontSize: "clamp(38px, 5.5vw, 82px)",
                fontWeight: 600,
                color: "#FFFFFF",
                lineHeight: "1.05",
                marginBottom: "24px",
              }}
            >
              D&eacute;pannage Porte
              <br />
              Sectionnelle Paris
              <br />
              24h/24 &amp; 7j/7
            </h1>
            <p
              style={{
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.85)",
                maxWidth: "520px",
                lineHeight: "28px",
                marginBottom: "40px",
              }}
            >
              <strong>Intervention en 30 minutes</strong> dans tout Paris et l&rsquo;Ile-de-France. Ressort cass&eacute;, moteur en panne, porte bloqu&eacute;e ou d&eacute;raill&eacute;e&nbsp;: nos techniciens certifi&eacute;s r&eacute;parent toutes marques, 24h/24 et 7j/7.
            </p>



            {/* CTA row */}
            <div
              data-hero-cta-row
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              {/* CTA Button */}
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
                    backgroundColor: "#E63946",
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

              {/* Phone */}
              <a href="tel:0972124141" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
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
                    <path
                      d="M16.5 12.69V14.94C16.5 15.48 16.08 15.93 15.54 15.975C15.12 16.005 14.775 16.02 14.5 16.02C7.045 16.02 1 9.975 1 2.52C1 2.245 1.015 1.9 1.045 1.48C1.09 0.94 1.54 0.52 2.08 0.52H4.33C4.595 0.52 4.82 0.715 4.855 0.98C4.885 1.215 4.915 1.405 4.945 1.555C5.18 2.77 5.61 3.915 6.21 4.96L5.025 5.75C5.025 5.75 5.62 7.35 7.64 9.37C9.66 11.39 11.27 11.995 11.27 11.995L12.055 10.805C13.105 11.405 14.25 11.84 15.465 12.075C15.615 12.105 15.805 12.135 16.04 12.165C16.305 12.2 16.5 12.425 16.5 12.69Z"
                      stroke="#FFFFFF"
                      strokeWidth="1.2"
                    />
                  </svg>
                </div>
                <span style={{ fontSize: "16px", fontWeight: 500, color: "#FFFFFF" }}>
                  09 72 12 41 41
                </span>
              </a>

            </div>
          </div>

          {/* RIGHT — Product slideshow */}
          <div
            data-hero-product
            style={{
              flex: "1 1 45%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              minHeight: "500px",
            }}
          >
            {products.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Porte sectionnelle Paris - modele ${i + 1}`}
                title="Porte sectionnelle installation Paris"
                width={480}
                height={480}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                style={{
                  position: "absolute",
                  maxHeight: "480px",
                  maxWidth: "90%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.4))",
                  opacity: productIndex === i ? 1 : 0,
                  transform: productIndex === i ? "scale(1)" : "scale(0.9)",
                  transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
