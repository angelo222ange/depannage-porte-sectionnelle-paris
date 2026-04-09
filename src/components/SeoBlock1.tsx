export default function SeoBlock1() {
  return (
    <section
      data-section-lg
      style={{
        padding: "120px 30px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        data-two-col
        style={{
          maxWidth: "1312px",
          margin: "0 auto",
          display: "flex",
          gap: "48px",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <div
          data-two-col-image
          style={{
            flex: "1 1 50%",
            minHeight: "450px",
            borderRadius: "16px",
            backgroundImage: "url('/images/portes/fond-porte-sectionnelle.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content */}
        <div data-two-col-content style={{ flex: "1 1 50%" }}>
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
            Expertise reconnue
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
            Specialiste de la Porte Sectionnelle a Paris depuis plus de 25 ans
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
            La <strong>porte sectionnelle</strong> est devenue la solution de fermeture privilegiee des Parisiens, tant pour les residences particulieres que pour les locaux professionnels et industriels. Composee de <strong>panneaux articules</strong> qui coulissent verticalement puis se logent sous le plafond, elle offre un gain de place considerable dans les espaces souvent contraints de la capitale. Nos techniciens installent et entretiennent ces systemes depuis plus de <strong>25 ans</strong> dans tous les arrondissements de <strong>Paris</strong>.
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
            Que vous possediez une <strong>porte sectionnelle a refoulement plafond</strong> classique ou un modele a <strong>deplacement lateral</strong> adapte aux garages parisiens aux plafonds bas, notre equipe maitrise l&apos;ensemble des configurations. Nous travaillons exclusivement avec des pieces d&apos;origine des plus grandes marques — <strong>Hormann, Novoferm, Wayne Dalton, Crawford</strong> — pour garantir la fiabilite et la longevite de chaque intervention.
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#3B3B3B",
              lineHeight: "26px",
                          }}
          >
            L&apos;urgence est notre specialite : un <strong>ressort casse</strong>, un cable detache, des panneaux endommages suite a un choc ou une <strong>motorisation defaillante</strong>, nos techniciens interviennent dans les <strong>30 minutes</strong> partout dans Paris. Chaque vehicule d&apos;intervention est equipe d&apos;un stock de <strong>pieces detachees</strong> permettant de resoudre la majorite des pannes en un seul passage.
          </p>
          <a
            href="tel:0972124141"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "24px",
              backgroundColor: "#FF6333",
              padding: "12px 28px",
              borderRadius: "50px",
              fontSize: "15px",
              fontWeight: 600,
              color: "#FFFFFF",
                            textDecoration: "none",
            }}
          >
            09 72 12 41 41 — Appelez maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
