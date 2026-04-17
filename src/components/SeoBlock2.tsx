export default function SeoBlock2() {
  return (
    <section
      data-section-lg
      style={{
        padding: "120px 30px",
        backgroundColor: "#F6F7F9",
      }}
    >
      <div
        data-two-col-reverse
        data-two-col
        style={{
          maxWidth: "1312px",
          margin: "0 auto",
          display: "flex",
          gap: "48px",
          alignItems: "center",
        }}
      >
        {/* Content */}
        <div data-two-col-content style={{ flex: "1 1 50%" }}>
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
            Residentiel &amp; industriel
          </span>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "48px",
                            marginBottom: "20px",
            }}
          >
            Portes Sectionnelles pour Tous les Usages a Paris
          </h2>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#3B3B3B",
              lineHeight: "26px",
                            marginBottom: "16px",
            }}
          >
            <strong>Paris</strong> presente des contraintes architecturales uniques pour l&apos;<strong>installation de portes sectionnelles</strong>. Dans les immeubles haussmanniens du 8e ou du 16e arrondissement, les entrees de garage imposent souvent des dimensions non standard et des <strong>hauteurs sous linteau</strong> reduites. Nos techniciens realisent chaque installation sur mesure, avec des releves dimensionnels precis et une adaptation parfaite au bati existant.
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#3B3B3B",
              lineHeight: "26px",
                            marginBottom: "16px",
            }}
          >
            Pour les professionnels parisiens — parkings souterrains, entrepots logistiques du 13e et du 19e arrondissement, ateliers artisanaux de Belleville ou du Marais — nous proposons des <strong>portes sectionnelles industrielles</strong> haute performance capables de supporter un usage intensif depassant <strong>200 cycles quotidiens</strong>. Les <strong>panneaux sandwich en acier double paroi de 40 mm</strong> offrent une isolation thermique et phonique optimale.
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#3B3B3B",
              lineHeight: "26px",
                          }}
          >
            La <strong>securite</strong> constitue une priorite absolue dans nos installations parisiennes. Chaque <strong>porte sectionnelle</strong> est equipee de dispositifs anti-chute conformes a la <strong>norme EN 13241-1</strong>, de capteurs photoelectriques detectant tout obstacle, et d&apos;un systeme de deverrouillage manuel en cas de panne electrique.
          </p>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "24px",
              backgroundColor: "#E63946",
              padding: "12px 28px",
              borderRadius: "50px",
              fontSize: "15px",
              fontWeight: 600,
              color: "#FFFFFF",
                            textDecoration: "none",
            }}
          >
            Demander un devis gratuit
          </a>
        </div>

        {/* Image sans fond */}
        <div
          data-two-col-image
          style={{
            flex: "1 1 50%",
            minHeight: "450px",
            borderRadius: "16px",
            backgroundColor: "#ECEDEF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <img
            src="/images/portes/porte-sectionnelle-industrielle.webp"
            alt="Porte sectionnelle industrielle Paris - residentiel et professionnel"
            title="Porte sectionnelle pour usage residentiel et industriel a Paris"
            width={600}
            height={400}
            loading="lazy"
            decoding="async"
            style={{
              maxWidth: "100%",
              maxHeight: "400px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
}
