"use client";

import { zones, siteConfig } from "@/config/site";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import CTAForm from "@/components/CTAForm";
import Footer from "@/components/Footer";

export default function ZonesPageClient() {
  // Group zones by department
  const grouped: Record<string, typeof zones> = {};
  for (const zone of zones) {
    if (!grouped[zone.department]) {
      grouped[zone.department] = [];
    }
    grouped[zone.department].push(zone);
  }

  const departmentOrder = [
    "Paris",
    "Hauts-de-Seine (92)",
    "Seine-Saint-Denis (93)",
    "Val-de-Marne (94)",
    "Val-d'Oise (95)",
    "Yvelines (78)",
  ];

  const sortedDepartments = departmentOrder.filter((d) => grouped[d]);

  return (
    <>
      <TopBar />
      <Header />

      {/* Hero */}
      <section
        style={{
          padding: "213px 30px 76px",
          backgroundColor: "#F6F7F9",
          minHeight: "500px",
        }}
      >
        <div
          style={{
            maxWidth: "1408px",
            margin: "0 auto",
            borderRadius: "16px",
            backgroundColor: "#000000",
            position: "relative",
            overflow: "hidden",
            minHeight: "350px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              maxWidth: "1312px",
              margin: "0 auto",
              padding: "80px 48px",
              position: "relative",
              zIndex: 2,
              width: "100%",
            }}
          >
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#FF6333",
                color: "#FFFFFF",
                padding: "6px 16px",
                borderRadius: "50px",
                fontSize: "13px",
                fontWeight: 600,
                                textTransform: "uppercase" as const,
                letterSpacing: "1px",
                marginBottom: "20px",
              }}
            >
              {zones.length} zones couvertes
            </span>
            <h1
              style={{
                fontSize: "56px",
                fontWeight: 600,
                color: "#FFFFFF",
                lineHeight: "64px",
                                marginBottom: "20px",
                maxWidth: "700px",
              }}
            >
              Nos zones d&apos;intervention
            </h1>
            <p
              style={{
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.8)",
                                maxWidth: "560px",
                lineHeight: "28px",
              }}
            >
              Porte sectionnelle a Paris et en Ile-de-France. Nos techniciens interviennent dans les 20 arrondissements de Paris et dans les principales villes de la region.
            </p>
          </div>
        </div>
      </section>

      {/* Intro text */}
      <section style={{ padding: "80px 30px 0", backgroundColor: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: "1312px",
            margin: "0 auto",
            backgroundColor: "#F6F7F9",
            borderRadius: "16px",
            padding: "48px 56px",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#111111",
              marginBottom: "20px",
            }}
          >
            Votre specialiste porte sectionnelle dans tout Paris et l&apos;Ile-de-France
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#555555",
              lineHeight: 1.7,
              marginBottom: "16px",
            }}
          >
            Notre reseau de techniciens specialises couvre l&apos;integralite de Paris — des 20 arrondissements de la capitale jusqu&apos;aux principales villes de la petite et grande couronne. Chaque zone d&apos;intervention est desservie par une equipe de proximite, ce qui nous permet de garantir un <strong style={{ color: "#111111" }}>delai d&apos;intervention moyen de 30 minutes</strong>, de jour comme de nuit, 7 jours sur 7.
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "#555555",
              lineHeight: 1.7,
              marginBottom: "16px",
            }}
          >
            Pourquoi l&apos;expertise locale fait toute la difference ? Un technicien qui connait votre quartier intervient plus vite, comprend les contraintes specifiques de votre immeuble ou de votre local commercial, et dispose des pieces detachees adaptees aux installations les plus courantes de votre secteur. <strong style={{ color: "#111111" }}>C&apos;est cette connaissance du terrain qui nous distingue des plateformes nationales.</strong>
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "#555555",
              lineHeight: 1.7,
            }}
          >
            Que ce soit pour une installation neuve, un depannage urgent ou un contrat d&apos;entretien, selectionnez votre zone ci-dessous pour decouvrir les services disponibles pres de chez vous et obtenir un devis gratuit en quelques minutes.
          </p>
        </div>
      </section>

      {/* Zones grouped by department */}
      <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          {sortedDepartments.map((dept) => (
            <div key={dept} style={{ marginBottom: "64px" }}>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: 600,
                  color: "#000000",
                  lineHeight: "40px",
                                    marginBottom: "8px",
                }}
              >
                {dept}
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#3B3B3B",
                                    marginBottom: "24px",
                }}
              >
                {grouped[dept].length} zone{grouped[dept].length > 1 ? "s" : ""} d&apos;intervention
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "16px",
                }}
              >
                {grouped[dept].map((zone) => (
                  <a
                    key={zone.slug}
                    href={`/${zone.slug}/`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: "#F6F7F9",
                      borderRadius: "16px",
                      padding: "20px 24px",
                      textDecoration: "none",
                      transition: "background-color 0.2s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "10px",
                          backgroundColor: "#FFF1EC",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M10 10.833C11.3807 10.833 12.5 9.714 12.5 8.333C12.5 6.953 11.3807 5.833 10 5.833C8.6193 5.833 7.5 6.953 7.5 8.333C7.5 9.714 8.6193 10.833 10 10.833Z"
                            stroke="#FF6333"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M10 18.333C10 18.333 16.667 13.333 16.667 8.333C16.667 4.651 13.682 1.667 10 1.667C6.318 1.667 3.333 4.651 3.333 8.333C3.333 13.333 10 18.333 10 18.333Z"
                            stroke="#FF6333"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#000000",
                                                  }}
                      >
                        {zone.name}
                      </span>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#FF6333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO text block */}
      <section style={{ padding: "0 30px 80px", backgroundColor: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: "1312px",
            margin: "0 auto",
            backgroundColor: "#F6F7F9",
            borderRadius: "16px",
            padding: "48px 56px",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#111111",
              marginBottom: "20px",
            }}
          >
            Installation et depannage porte sectionnelle : une couverture complete en Ile-de-France
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#555555",
              lineHeight: 1.7,
              marginBottom: "16px",
            }}
          >
            Avec plus de 25 ans d&apos;experience dans le secteur des portes sectionnelles, nous avons developpe un maillage territorial dense qui nous permet de repondre a toutes les demandes en region parisienne. Nos techniciens certifies interviennent aussi bien dans les quartiers residentiels de Paris que dans les zones industrielles et commerciales de banlieue. Chaque intervention suit un protocole rigoureux : diagnostic sur place, devis gratuit detaille, reparation ou installation avec des pieces de qualite, et verification complete du fonctionnement avant de quitter les lieux.
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "#555555",
              lineHeight: 1.7,
              marginBottom: "16px",
            }}
          >
            La proximite est au coeur de notre engagement. En positionnant nos equipes dans chaque departement d&apos;Ile-de-France, nous reduisons considerablement les temps de trajet et donc les couts pour nos clients. Que vous ayez besoin d&apos;un <strong style={{ color: "#111111" }}>depannage en urgence a Paris 11e</strong>, d&apos;une <strong style={{ color: "#111111" }}>installation de porte sectionnelle motorisee a Nanterre</strong> ou d&apos;un <strong style={{ color: "#111111" }}>contrat de maintenance a Montreuil</strong>, un professionnel qualifie est toujours a moins de 30 minutes de chez vous.
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "#555555",
              lineHeight: 1.7,
            }}
          >
            Notre zone de couverture s&apos;etend sur 6 departements : Paris (75), les Hauts-de-Seine (92), la Seine-Saint-Denis (93), le Val-de-Marne (94), le Val-d&apos;Oise (95) et les Yvelines (78). Pour connaitre les services disponibles dans votre secteur et obtenir un devis personnalise, appelez-nous au <strong style={{ color: "#FF6333" }}>09 72 12 41 41</strong> ou selectionnez votre ville dans la liste ci-dessus.
          </p>
        </div>
      </section>

      {/* CTA phone banner */}
      <section style={{ padding: "60px 30px", backgroundColor: "#FF6333" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 600,
              color: "#FFFFFF",
              lineHeight: "44px",
                            marginBottom: "16px",
            }}
          >
            Besoin d&apos;une intervention rapide ?
          </h2>
          <p
            style={{
              fontSize: "17px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.9)",
              lineHeight: "26px",
                            marginBottom: "32px",
            }}
          >
            Nos techniciens interviennent dans toutes ces zones en moins de 30 minutes, 24h/24 et 7j/7.
          </p>
          <a
            href={siteConfig.telephoneHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#FFFFFF",
              color: "#000000",
              padding: "16px 36px",
              borderRadius: "50px",
              fontSize: "18px",
              fontWeight: 700,
                            textDecoration: "none",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M17.5 14.19V16.44C17.5 16.98 17.08 17.43 16.54 17.475C16.12 17.505 15.775 17.52 15.5 17.52C8.045 17.52 2 11.475 2 4.02C2 3.745 2.015 3.4 2.045 2.98C2.09 2.44 2.54 2.02 3.08 2.02H5.33C5.595 2.02 5.82 2.215 5.855 2.48C5.885 2.715 5.915 2.905 5.945 3.055C6.18 4.27 6.61 5.415 7.21 6.46L6.025 7.25C6.025 7.25 6.62 8.85 8.64 10.87C10.66 12.89 12.27 13.495 12.27 13.495L13.055 12.305C14.105 12.905 15.25 13.34 16.465 13.575C15.615 13.605 15.805 13.635 16.04 13.665C16.305 13.7 16.5 13.925 16.5 14.19Z"
                stroke="#FF6333"
                strokeWidth="1.5"
              />
            </svg>
            {siteConfig.telephone}
          </a>
        </div>
      </section>

      {/* CTA Form */}
      <CTAForm />

      {/* Footer */}
      <Footer />
    </>
  );
}
