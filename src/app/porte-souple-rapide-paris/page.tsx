import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAForm from "@/components/CTAForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Porte Souple Rapide Paris | Installation Industrielle",
  description:
    "Porte souple rapide a Paris. Installation, maintenance et depannage pour entrepots, usines et plateformes logistiques. Devis gratuit au 09 72 12 41 41.",
  alternates: {
    canonical: "https://depannage-porte-sectionnelle-paris.fr/porte-souple-rapide-paris/",
  },
  openGraph: {
    title: "Porte Souple Rapide Paris | Installation Industrielle",
    description: "Porte souple rapide a Paris. Installation, maintenance et depannage pour entrepots, usines et plateformes logistiques. Devis gratuit.",
    url: "https://depannage-porte-sectionnelle-paris.fr/porte-souple-rapide-paris/",
    images: ["/images/portes/porte-garage-souple-industrielle.webp"],
  },
};

export default function PorteSoupleRapideParis() {
  const interventions = [
    {
      title: "Porte souple à enroulement",
      desc: "Installation de portes souples rapides à enroulement vertical, idéales pour les entrepôts à fort trafic. Toile PVC haute résistance de 900 à 950 g/m², vitesse d\u2019ouverture jusqu\u2019à 2,2 m/s et fermeture contrôlée à 0,8 m/s. Structure compacte qui libère l\u2019espace au plafond pour vos systèmes de ventilation et d\u2019éclairage.",
      image: "/images/portes/porte-garage-souple-industrielle.webp",
    },
    {
      title: "Porte souple à empilement",
      desc: "Pour les ouvertures de grande dimension, nous proposons des portes souples à empilement latéral ou supérieur. Les panneaux en toile polyester enduite s\u2019empilent dans un caisson compact, offrant un passage dégagé sans encombrement vertical. Solution privilégiée pour les halls logistiques avec ponts roulants ou hauteurs sous plafond limitées.",
      image: "/images/portes/porte-enroulable.webp",
    },
    {
      title: "Porte souple agro-alimentaire",
      desc: "Portes souples rapides certifiées pour les environnements agro-alimentaires et salles blanches. Toile PVC lisse sans aspérités, résistante aux produits de nettoyage et désinfection. Joints latéraux étanches, capteurs IP67 et système anti-collision auto-réparable qui remet la toile en place après un choc accidentel sans intervention manuelle.",
      image: "/images/portes/porte-enroulable-sectionnelle.webp",
    },
    {
      title: "Maintenance et dépannage",
      desc: "Contrats de maintenance préventive adaptés à votre cadence d\u2019utilisation : de 20 à 200 cycles par jour. Intervention de dépannage dans les 4 heures sur Paris et proche couronne. Remplacement de toile, reprogrammation de variateurs, recalibrage des barrières infrarouges de sécurité et mise en conformité EN 13241-1.",
      image: "/images/portes/reparation-porte-sectionnelle.webp",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section
        style={{
          padding: "213px 30px 76px",
          backgroundColor: "#F6F7F9",
          minHeight: "600px",
        }}
      >
        <div
          style={{
            maxWidth: "1408px",
            margin: "0 auto",
            borderRadius: "16px",
            backgroundImage: "url('/images/portes/hero-porte-enroulable-sectionnelle.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden",
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.55)",
              zIndex: 1,
            }}
          />
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
            <h1
              style={{
                fontSize: "64px",
                fontWeight: 600,
                color: "#FFFFFF",
                lineHeight: "70px",
                                marginBottom: "24px",
              }}
            >
              Porte Souple
              <br />
              Rapide Paris
            </h1>
            <p
              style={{
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.85)",
                                maxWidth: "540px",
                lineHeight: "28px",
                marginBottom: "32px",
              }}
            >
              Portes souples haute vitesse pour entrepôts, plateformes logistiques et sites industriels. Ouverture rapide, isolation thermique et sécurité renforcée.
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                backgroundColor: "#E63946",
                padding: "14px 32px",
                borderRadius: "50px",
                fontSize: "16px",
                fontWeight: 600,
                color: "#FFFFFF",
                              }}
            >
              Devis gratuit — 09 72 12 41 41
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div
        style={{
          maxWidth: "1312px",
          margin: "0 auto",
          padding: "20px 30px",
        }}
      >
        <nav
          style={{
            fontSize: "14px",
            color: "#3B3B3B",
                      }}
        >
          <a href="/" style={{ color: "#E63946" }}>Accueil</a>
          <span style={{ margin: "0 8px" }}>&gt;</span>
          <span>Porte souple rapide Paris</span>
        </nav>
      </div>

      {/* Intro section */}
      <section
        style={{
          padding: "80px 30px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            maxWidth: "1312px",
            margin: "0 auto",
            display: "flex",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1 1 50%" }}>
            <img
              src="/images/portes/porte-garage-souple-industrielle.webp"
              alt="Porte souple rapide Paris - installation industrielle"
              title="Porte souple rapide industrielle a Paris"
              width={640}
              height={420}
              loading="eager"
              decoding="async"
              style={{
                width: "100%",
                height: "420px",
                objectFit: "contain",
                backgroundColor: "#F0F1F3",
                borderRadius: "16px",
              }}
            />
          </div>
          <div style={{ flex: "1 1 50%" }}>
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
              Haute vitesse industrielle
            </span>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: 600,
                color: "#000000",
                lineHeight: "48px",
                                marginBottom: "20px",
              }}
            >
              Portes souples rapides sur mesure à Paris
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
              Dans les environnements industriels et logistiques parisiens, chaque seconde d&apos;ouverture de porte compte. Les portes souples rapides atteignent une vitesse d&apos;ouverture de 0,5 à 2,2 m/s, soit un cycle complet en quelques secondes seulement. Cette rapidité réduit drastiquement les déperditions thermiques, maintient la chaîne du froid et accélère les flux de marchandises entre les zones de production, de stockage et d&apos;expédition.
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
              Forts de plus de 25 ans d&apos;expérience dans l&apos;équipement de sites industriels en Ile-de-France, nous concevons des installations adaptées à chaque contrainte : chambres froides, ateliers de production, plateformes de cross-docking, tunnels de lavage ou zones de chargement à fort trafic. Nos portes en toile PVC de 900 à 950 g/m² résistent aux sollicitations intensives tout en offrant un encombrement minimal.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              De l&apos;étude technique initiale à la mise en service, en passant par le raccordement aux automates industriels et la programmation des capteurs de sécurité, notre équipe assure un accompagnement complet. Chaque porte est livrée conforme à la norme EN 13241-1 avec certificat de conformité CE.
            </p>
          </div>
        </div>
      </section>

      {/* Types d'intervention */}
      <section
        style={{
          padding: "120px 30px",
          backgroundColor: "#F6F7F9",
        }}
      >
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#E63946",
              textTransform: "uppercase" as const,
              letterSpacing: "1.5px",
                            display: "block",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Solutions haute vitesse
          </span>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "48px",
                            marginBottom: "60px",
              textAlign: "center",
            }}
          >
            Nos installations de portes souples rapides a <strong>Paris</strong>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}
          >
            {interventions.map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  border: "1px solid #E5E7EB",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.image}
                  alt={`${item.title} - porte souple rapide Paris`}
                  title={item.title}
                  width={400}
                  height={200}
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "28px 32px" }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#000000",
                                            marginBottom: "12px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "#3B3B3B",
                      lineHeight: "24px",
                                          }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages section */}
      <section
        style={{
          padding: "120px 30px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#E63946",
              textTransform: "uppercase" as const,
              letterSpacing: "1.5px",
                            display: "block",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Pourquoi choisir nos portes souples
          </span>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "48px",
                            marginBottom: "60px",
              textAlign: "center",
            }}
          >
            Les avantages d&apos;une porte souple rapide industrielle a <strong>Paris</strong>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {[
              {
                num: "01",
                title: "Vitesse d\u2019ouverture jusqu\u2019a 2.2 m/s",
                desc: "Cycle complet en 3 a 5 secondes contre 12 a 20 secondes pour une porte sectionnelle classique. Chaque passage gagne du temps, chaque minute compte sur un site a fort trafic.",
              },
              {
                num: "02",
                title: "Economies d\u2019energie de 15 a 30 %",
                desc: "La fermeture quasi instantanee limite les echanges thermiques entre zones temperees et exterieures. Vos couts de chauffage et de climatisation baissent significativement des la premiere annee.",
              },
              {
                num: "03",
                title: "Systeme auto-reparable",
                desc: "En cas de collision avec un chariot elevateur, la toile se repositionne automatiquement dans ses guides lateraux. Aucun arret de production, aucune intervention manuelle requise.",
              },
              {
                num: "04",
                title: "Securite barriere infrarouge IP67",
                desc: "Capteurs infrarouges etanches IP67 et cellules photoelectriques detectent toute presence dans la zone de manoeuvre. Arret instantane conforme a la norme EN 13241-1.",
              },
              {
                num: "05",
                title: "Toile PVC haute resistance 950 g/m\u00B2",
                desc: "Toile polyester enduite PVC de 900 a 950 g/m\u00B2 resistante aux UV, aux produits chimiques et aux temperatures extremes de -20\u00B0C a +70\u00B0C. Duree de vie superieure a 200 000 cycles.",
              },
              {
                num: "06",
                title: "Encombrement minimal",
                desc: "Le systeme d\u2019enroulement compact libere l\u2019espace au plafond pour vos reseaux de ventilation, eclairage et ponts roulants. Ideal pour les sites ou chaque metre carre compte.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#F6F7F9",
                  borderRadius: "16px",
                  padding: "32px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "#FFEEF0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ fontSize: "20px", fontWeight: 700, color: "#E63946" }}>{item.num}</span>
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#000000",
                                        marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "#3B3B3B",
                    lineHeight: "24px",
                                      }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO block 2 — Enroulement vs empilement */}
      <section
        style={{
          padding: "120px 30px",
          backgroundColor: "#F6F7F9",
        }}
      >
        <div style={{ maxWidth: "1312px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" as const }}>
          <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 600,
                color: "#000000",
                lineHeight: "42px",
                                marginBottom: "24px",
              }}
            >
              <strong>Porte souple a enroulement</strong> vs <strong>a empilement</strong> : quel systeme choisir a <strong>Paris</strong>
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
              Le choix entre une <strong>porte souple a enroulement</strong> et une <strong>porte souple a empilement</strong> depend avant tout de la configuration de votre batiment et de la nature de votre activite. La porte a enroulement vertical reste la solution la plus repandue dans les entrepots logistiques de Gennevilliers et les plateformes de cross-docking de Rungis. Son tablier en <strong>toile PVC</strong> s&apos;enroule autour d&apos;un axe situe en partie haute, ce qui offre un passage totalement degage et une <strong>vitesse d&apos;ouverture</strong> pouvant atteindre 2,2 m/s.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              La <strong>porte souple a empilement</strong>, en revanche, s&apos;impose dans les configurations ou la hauteur disponible au-dessus de l&apos;ouverture est insuffisante pour loger un mecanisme d&apos;enroulement. Les panneaux souples se replient et s&apos;empilent dans un caisson lateral ou superieur compact. On retrouve cette technologie dans les halls industriels de la Plaine Saint-Denis equipes de ponts roulants. La robustesse du systeme et sa capacite a couvrir des ouvertures jusqu&apos;a 10 metres de large en font la reference pour les sites a forte contrainte dimensionnelle.
            </p>
            <a href={siteConfig.telephoneHref} style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#E63946", fontSize: "15px", fontWeight: 600, textDecoration: "none", marginTop: "20px" }}>
              Devis gratuit : {siteConfig.telephone}
            </a>
          </div>
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <img src="/images/portes/porte-garage-souple-industrielle.webp" alt="Porte souple rapide industrielle Paris - enroulement et empilement" title="Porte souple rapide pour entrepot a Paris" width={640} height={480} loading="lazy" decoding="async" style={{ width: "100%", height: "480px", objectFit: "contain", backgroundColor: "#F6F7F9", borderRadius: "16px" }} />
          </div>
        </div>
      </section>

      {/* Maillage interne */}
      <section
        style={{
          padding: "80px 30px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div style={{ maxWidth: "1312px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "42px",
                            marginBottom: "32px",
            }}
          >
            Nos autres solutions a <strong>Paris</strong>
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap" as const,
              gap: "12px",
              justifyContent: "center",
            }}
          >
            {[
              { href: "/porte-de-garage-paris", label: "Porte de garage" },
              { href: "/porte-sectionnelle-industrielle-paris", label: "Porte industrielle" },
              { href: "/rideau-metallique-industriel-paris", label: "Rideau metallique" },
              { href: "/installation-porte-sectionnelle-paris", label: "Installation" },
              { href: "/depannage-porte-sectionnelle-paris", label: "Depannage" },
              { href: "/entretien-porte-sectionnelle-paris", label: "Entretien" },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                style={{
                  display: "inline-block",
                  padding: "12px 28px",
                  borderRadius: "50px",
                  backgroundColor: "#F6F7F9",
                  border: "1px solid #E5E7EB",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#3B3B3B",
                                    textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section style={{ padding: "80px 30px", backgroundColor: "#F6F7F9" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#E63946", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "12px" }}>Zones d&apos;intervention</span>
          <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "32px" }}>
            <strong>Porte souple rapide</strong> dans toute la region parisienne
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }}>
            {[
              { label: "Paris 11eme", href: "/porte-sectionnelle-paris-11/" },
              { label: "Paris 15eme", href: "/porte-sectionnelle-paris-15/" },
              { label: "Paris 18eme", href: "/porte-sectionnelle-paris-18/" },
              { label: "Paris 20eme", href: "/porte-sectionnelle-paris-20/" },
              { label: "Boulogne-Billancourt", href: "/porte-sectionnelle-boulogne-billancourt/" },
              { label: "Saint-Denis", href: "/porte-sectionnelle-saint-denis/" },
              { label: "Montreuil", href: "/porte-sectionnelle-montreuil/" },
              { label: "Nanterre", href: "/porte-sectionnelle-nanterre/" },
              { label: "Creteil", href: "/porte-sectionnelle-creteil/" },
              { label: "Versailles", href: "/porte-sectionnelle-versailles/" },
            ].map((zone, i) => (
              <a key={i} href={zone.href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#FFFFFF", borderRadius: "12px", padding: "14px 18px", textDecoration: "none", border: "1px solid #E5E7EB" }}>
                <span style={{ fontSize: "14px", fontWeight: 500, color: "#1A1A1A", }}>{zone.label}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="#E63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#E63946", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "12px", textAlign: "center" }}>Temoignages</span>
          <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "40px", textAlign: "center" }}>
            Avis clients — <strong>Porte souple rapide</strong> a <strong>Paris</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { name: "Xavier N.", location: "Saint-Denis", color: "#E63946", text: "Deux portes souples rapides installees sur notre plateforme logistique a la Plaine Saint-Denis. Vitesse d'ouverture impressionnante, les caristes ne ralentissent meme plus. Le systeme auto-reparable apres collision nous evite des arrets de production." },
              { name: "Laurence B.", location: "Nanterre", color: "#2563EB", text: "Porte souple agro-alimentaire pour notre laboratoire de conditionnement. La toile PVC se nettoie facilement, les joints lateraux sont parfaitement etanches. L'hygiene de notre zone de production est preservee. Installation conforme a nos exigences sanitaires." },
              { name: "Christophe V.", location: "Montreuil", color: "#10B981", text: "Remplacement de notre ancienne porte sectionnelle par une porte souple rapide. Le gain de temps sur chaque passage est considerable. Avec 150 cycles par jour, le retour sur investissement est rapide grace aux economies d'energie realisees." },
              { name: "Anne-Marie P.", location: "Argenteuil", color: "#8B5CF6", text: "Installation d'une porte souple a empilement dans notre hall equipe de ponts roulants. La solution parfaite puisqu'il n'y avait pas de place au plafond pour un systeme a enroulement. Ouverture rapide et encombrement minimal, exactement ce qu'il nous fallait." },
              { name: "Henri D.", location: "Ivry-sur-Seine", color: "#F59E0B", text: "Porte souple rapide pour notre chambre froide. La fermeture quasi instantanee maintient la chaine du froid sans effort. Nos factures d'electricite ont baisse de 20% depuis l'installation. Les capteurs infrarouges IP67 fonctionnent parfaitement en environnement humide." },
              { name: "Stephanie M.", location: "Versailles", color: "#EF4444", text: "Contrat de maintenance sur nos trois portes souples rapides. Le technicien vient chaque trimestre, recalibre les barrieres infrarouges et verifie l'etat de la toile PVC. Aucune panne depuis la mise en service il y a deux ans. Entretien preventif efficace." },
            ].map((review, i) => (
              <div key={i} style={{ backgroundColor: "#F6F7F9", borderRadius: "16px", padding: "28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "16px" }}>
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="#F59E0B"><path d="M8 1l2.2 4.5 5 .7-3.6 3.5.8 5L8 12.4 3.6 14.7l.8-5L.8 6.2l5-.7L8 1z"/></svg>
                  ))}
                </div>
                <p style={{ fontSize: "15px", fontWeight: 400, color: "#3B3B3B", lineHeight: "24px", marginBottom: "20px", fontStyle: "italic" }}>
                  &ldquo;{review.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: review.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 700, color: "#FFFFFF", }}>
                    {review.name[0]}
                  </div>
                  <div>
                    <span style={{ fontSize: "14px", fontWeight: 600, color: "#000000", display: "block" }}>{review.name}</span>
                    <span style={{ fontSize: "12px", fontWeight: 400, color: "#999999", }}>{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          padding: "120px 30px",
          backgroundColor: "#F6F7F9",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#E63946",
              textTransform: "uppercase" as const,
              letterSpacing: "1.5px",
                            display: "block",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Questions frequentes
          </span>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "48px",
                            marginBottom: "48px",
              textAlign: "center",
            }}
          >
            Tout savoir sur les portes souples rapides a <strong>Paris</strong>
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "32px" }}>
            {[
              {
                q: "Qu&apos;est-ce qu&apos;une porte souple rapide ?",
                a: "Une porte souple rapide est un equipement industriel compose d&apos;un tablier en toile PVC qui s&apos;enroule ou s&apos;empile a grande vitesse pour permettre le passage de personnes, vehicules et marchandises. Contrairement aux portes sectionnelles rigides, elle offre un cycle d&apos;ouverture-fermeture de 3 a 5 secondes, ce qui reduit les deperditions thermiques et accelere les flux logistiques.",
              },
              {
                q: "Quelle vitesse d&apos;ouverture pour une porte souple ?",
                a: "Les portes souples rapides que nous installons a Paris atteignent une vitesse d&apos;ouverture de 0,5 a 2,2 m/s selon le modele et la hauteur de passage. La vitesse de fermeture est generalement regulee entre 0,5 et 0,8 m/s pour garantir la securite des usagers. Ces performances sont certifiees selon la norme EN 13241-1.",
              },
              {
                q: "La porte souple rapide est-elle adaptee a l&apos;agroalimentaire ?",
                a: "Absolument. Nos portes souples pour l&apos;agroalimentaire disposent d&apos;une toile PVC lisse sans asperites, resistante aux produits de nettoyage et de desinfection. Les joints lateraux etanches et les capteurs IP67 permettent une utilisation en chambres froides, salles blanches et zones de conditionnement ou l&apos;hygiene est primordiale.",
              },
              {
                q: "Combien coute une porte souple rapide industrielle ?",
                a: "Le prix d&apos;une porte souple rapide varie selon les dimensions, le type de toile, les options de securite et l&apos;environnement d&apos;installation. A titre indicatif, comptez a partir de 3 500 euros HT pour un modele standard et jusqu&apos;a 12 000 euros HT pour une configuration grand format avec automatismes avances. Nous etablissons un devis gratuit apres audit sur site.",
              },
              {
                q: "Que se passe-t-il en cas de collision avec la porte ?",
                a: "Nos portes souples rapides sont equipees d&apos;un systeme auto-reparable. Lorsqu&apos;un chariot elevateur ou un vehicule percute le tablier, la toile sort de ses guides lateraux puis se repositionne automatiquement lors du cycle suivant. Aucune intervention manuelle n&apos;est necessaire, ce qui evite tout arret de production.",
              },
              {
                q: "Quel entretien pour une porte souple rapide ?",
                a: "Nous recommandons une maintenance preventive semestrielle pour les sites a usage standard (moins de 50 cycles par jour) et trimestrielle pour les sites a fort trafic (plus de 100 cycles par jour). L&apos;entretien comprend le controle des capteurs de securite, la verification de l&apos;alignement de la toile, la lubrification des mecanismes et le recalibrage des barrieres infrarouges.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#000000",
                                        marginBottom: "8px",
                  }}
                  dangerouslySetInnerHTML={{ __html: item.q }}
                />
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "#3B3B3B",
                    lineHeight: "24px",
                                      }}
                  dangerouslySetInnerHTML={{ __html: item.a }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content section */}
      <section
        style={{
          padding: "120px 30px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div style={{ maxWidth: "1312px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" as const }}>
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <img src="/images/portes/porte-enroulable-sectionnelle.webp" alt="Porte souple rapide Paris - optimisation flux logistiques" title="Porte souple rapide pour flux logistiques a Paris" width={640} height={480} loading="lazy" decoding="async" style={{ width: "100%", height: "480px", objectFit: "cover", borderRadius: "16px" }} />
          </div>
          <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 600,
                color: "#000000",
                lineHeight: "42px",
                                marginBottom: "24px",
              }}
            >
              Optimiser vos <strong>flux logistiques</strong> avec une <strong>porte souple rapide à Paris</strong>
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
              Les zones industrielles parisiennes — de Gennevilliers à Rungis, de la Plaine Saint-Denis aux quais de Seine — concentrent des milliers de sites où la productivité dépend directement de la fluidité des passages entre zones. Une <strong>porte souple rapide</strong> supprime les temps d&apos;attente : là où une porte sectionnelle classique met 12 à 20 secondes pour s&apos;ouvrir, une porte souple à enroulement réalise le même cycle en 3 à 5 secondes. Sur un site qui enregistre 200 passages quotidiens, le gain cumulé représente plusieurs heures de production récupérées chaque semaine.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              La sécurité constitue l&apos;autre atout majeur des <strong>portes souples rapides</strong>. Equipées de <strong>barrières infrarouges</strong>, de cellules photoélectriques et de bords souples sensibles à la pression, elles détectent toute présence dans la zone de manoeuvre et stoppent instantanément leur course. Le <strong>système auto-réparable</strong> permet à la toile de se repositionner automatiquement dans ses guides après un choc avec un chariot élévateur. Toutes nos installations respectent la norme <strong>EN 13241-1</strong>.
            </p>
            <a href={siteConfig.telephoneHref} style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#E63946", fontSize: "15px", fontWeight: 600, textDecoration: "none", marginTop: "20px" }}>
              Devis gratuit : {siteConfig.telephone}
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Porte souple rapide industrielle",
        description: "Porte souple rapide a Paris. Installation, maintenance et depannage pour entrepots, usines et plateformes logistiques.",
        brand: { "@type": "Organization", name: "Depannage Porte Sectionnelle Paris" },
        offers: { "@type": "Offer", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://depannage-porte-sectionnelle-paris.fr/" },
          { "@type": "ListItem", position: 2, name: "Porte souple rapide", item: "https://depannage-porte-sectionnelle-paris.fr/porte-souple-rapide-paris/" },
        ],
      }) }} />

      <CTAForm />
      <Footer />

      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Qu'est-ce qu'une porte souple rapide ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Une porte souple rapide est un equipement industriel compose d'un tablier en toile PVC qui s'enroule ou s'empile a grande vitesse pour permettre le passage de personnes, vehicules et marchandises. Contrairement aux portes sectionnelles rigides, elle offre un cycle d'ouverture-fermeture de 3 a 5 secondes, ce qui reduit les deperditions thermiques et accelere les flux logistiques.",
                },
              },
              {
                "@type": "Question",
                name: "Quelle vitesse d'ouverture pour une porte souple ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Les portes souples rapides que nous installons a Paris atteignent une vitesse d'ouverture de 0,5 a 2,2 m/s selon le modele et la hauteur de passage. La vitesse de fermeture est generalement regulee entre 0,5 et 0,8 m/s pour garantir la securite des usagers. Ces performances sont certifiees selon la norme EN 13241-1.",
                },
              },
              {
                "@type": "Question",
                name: "La porte souple rapide est-elle adaptee a l'agroalimentaire ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolument. Nos portes souples pour l'agroalimentaire disposent d'une toile PVC lisse sans asperites, resistante aux produits de nettoyage et de desinfection. Les joints lateraux etanches et les capteurs IP67 permettent une utilisation en chambres froides, salles blanches et zones de conditionnement ou l'hygiene est primordiale.",
                },
              },
              {
                "@type": "Question",
                name: "Combien coute une porte souple rapide industrielle ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le prix d'une porte souple rapide varie selon les dimensions, le type de toile, les options de securite et l'environnement d'installation. A titre indicatif, comptez a partir de 3 500 euros HT pour un modele standard et jusqu'a 12 000 euros HT pour une configuration grand format avec automatismes avances. Nous etablissons un devis gratuit apres audit sur site.",
                },
              },
              {
                "@type": "Question",
                name: "Que se passe-t-il en cas de collision avec la porte ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nos portes souples rapides sont equipees d'un systeme auto-reparable. Lorsqu'un chariot elevateur ou un vehicule percute le tablier, la toile sort de ses guides lateraux puis se repositionne automatiquement lors du cycle suivant. Aucune intervention manuelle n'est necessaire, ce qui evite tout arret de production.",
                },
              },
              {
                "@type": "Question",
                name: "Quel entretien pour une porte souple rapide ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nous recommandons une maintenance preventive semestrielle pour les sites a usage standard (moins de 50 cycles par jour) et trimestrielle pour les sites a fort trafic (plus de 100 cycles par jour). L'entretien comprend le controle des capteurs de securite, la verification de l'alignement de la toile, la lubrification des mecanismes et le recalibrage des barrieres infrarouges.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
