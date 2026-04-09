import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAForm from "@/components/CTAForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Rideau Metallique Industriel Paris | Depannage",
  description:
    "Rideau metallique industriel a Paris. Installation, depannage et reparation pour entrepots, commerces et parkings. Devis gratuit au 09 72 12 41 41.",
  alternates: {
    canonical: "https://porte-sectionnelle-paris.fr/rideau-metallique-industriel-paris/",
  },
  openGraph: {
    title: "Rideau Metallique Industriel Paris | Depannage",
    description: "Rideau metallique industriel a Paris. Installation, depannage et reparation pour entrepots, commerces et parkings. Devis gratuit.",
    url: "https://porte-sectionnelle-paris.fr/rideau-metallique-industriel-paris/",
    images: ["/images/portes/rideau-metallique-industriel.webp"],
  },
};

export default function RideauMetalliqueIndustrielParis() {
  const interventions = [
    {
      title: "Rideau à lames pleines",
      desc: "Le rideau métallique à lames pleines en acier galvanisé constitue la référence en matière de protection anti-effraction pour les locaux industriels parisiens. Ses lames emboîtées de 77 mm s\u2019enroulent autour d\u2019un axe dimensionné selon la largeur de la baie, jusqu\u2019à 12 mètres de portée. L\u2019épaisseur de l\u2019acier et le traitement anti-corrosion garantissent une durée de vie supérieure à 20 ans, même en environnement urbain exposé à la pollution.",
      image: "/images/portes/porte-rideau-metallique.webp",
    },
    {
      title: "Rideau à lames micro-perforées",
      desc: "Pour les commerces et showrooms qui souhaitent conserver une visibilité sur leur vitrine après fermeture, le rideau à lames micro-perforées offre un compromis idéal entre sécurité et transparence. Les perforations calibrées laissent passer la lumière et le regard tout en résistant aux tentatives d\u2019intrusion. Solution très prisée dans les arrondissements commerçants de Paris pour protéger sans occulter.",
      image: "/images/portes/reparation-porte-sectionnelle-industrielle.webp",
    },
    {
      title: "Motorisation rideau métallique",
      desc: "Nous installons des motorisations tubulaires et centrales adaptées au poids et aux dimensions de chaque rideau. Moteur tubulaire pour les rideaux légers jusqu\u2019à 200 kg, moteur central avec frein électromagnétique pour les rideaux industriels lourds jusqu\u2019à 1 500 kg. Commande par bouton-poussoir, télécommande radio, clé à débrayage ou intégration au système de contrôle d\u2019accès du bâtiment.",
      image: "/images/portes/moteur-porte-sectionnelle.webp",
    },
    {
      title: "Dépannage rideau métallique urgence",
      desc: "Un rideau métallique bloqué en position ouverte expose votre local à l\u2019effraction. Notre service d\u2019urgence intervient 7j/7 dans tout Paris en moins de 45 minutes. Diagnostic sur place, remplacement de lames déformées, reprogrammation moteur, changement de ressorts ou de coulisses. Nous transportons les pièces détachées les plus courantes pour un dépannage en une seule intervention.",
      image: "/images/portes/depannage-porte-sectionnelle.webp",
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
            backgroundImage: "url('/images/portes/rideau-metallique-industriel.webp')",
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
              Rideau Métallique
              <br />
              Industriel Paris
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
              Fabrication sur mesure, pose et dépannage de rideaux métalliques pour entrepôts, commerces et parkings à Paris. Lames acier galvanisé, motorisation professionnelle, intervention urgence 7j/7.
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                backgroundColor: "#FF6333",
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
          <a href="/" style={{ color: "#FF6333" }}>Accueil</a>
          <span style={{ margin: "0 8px" }}>&gt;</span>
          <span>Rideau métallique industriel Paris</span>
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
              src="/images/portes/rideau-metallique-industriel-vue.webp"
              alt="Rideau metallique industriel Paris - installation entrepot"
              title="Rideau metallique industriel a Paris"
              width={640}
              height={420}
              loading="eager"
              decoding="async"
              style={{
                width: "100%",
                height: "420px",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </div>
          <div style={{ flex: "1 1 50%" }}>
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
              Protection industrielle
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
              Rideaux métalliques industriels sur mesure à Paris
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
              Le rideau métallique reste la solution de fermeture la plus répandue pour sécuriser les locaux professionnels à Paris. Contrairement aux portes sectionnelles ou battantes, il s&apos;enroule dans un coffre compact au-dessus de la baie, libérant l&apos;intégralité de l&apos;ouverture sans empiéter sur l&apos;espace intérieur ni sur le trottoir. Cette compacité est un atout décisif dans le tissu urbain dense de la capitale, où chaque mètre carré compte.
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
              Forts de plus de 25 ans d&apos;expérience dans l&apos;installation de rideaux métalliques en Ile-de-France, nous fabriquons chaque tablier sur mesure en acier galvanisé à chaud selon la norme NF EN 10346. Coulisses en U renforcées, axe d&apos;enroulement dimensionné au poids réel du tablier, verrous de sécurité intégrés : chaque composant est sélectionné pour résister aux contraintes spécifiques de votre activité, qu&apos;il s&apos;agisse d&apos;un entrepôt logistique, d&apos;un commerce de détail ou d&apos;un parking souterrain.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              Notre bureau d&apos;études réalise un relevé de cotes sur site avant chaque fabrication. Nous intégrons les contraintes architecturales (linteau réduit, imposte vitrée, passage de gaines) et proposons le type de lames adapté à vos besoins : pleines pour la sécurité maximale, micro-perforées pour la visibilité, ou ajourées pour la ventilation des parkings.
            </p>
            <a
              href="https://rideau-metallique.fr/rideau-metallique-industriel"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#FF6333",
                color: "#FFFFFF",
                padding: "14px 28px",
                borderRadius: "50px",
                fontSize: "15px",
                fontWeight: 600,
                                textDecoration: "none",
                marginTop: "20px",
              }}
            >
              En savoir plus sur les rideaux metalliques industriels
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
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
              color: "#FF6333",
              textTransform: "uppercase" as const,
              letterSpacing: "1.5px",
                            display: "block",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Types de rideaux et services
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
            Nos rideaux metalliques pour professionnels a <strong>Paris</strong>
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
                  alt={`${item.title} - rideau metallique industriel Paris`}
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
              color: "#FF6333",
              textTransform: "uppercase" as const,
              letterSpacing: "1.5px",
                            display: "block",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Pourquoi nous choisir
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
            Les avantages de nos rideaux metalliques industriels a <strong>Paris</strong>
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
                title: "Acier galvanise haute resistance",
                desc: "Nos lames en acier galvanise a chaud selon la norme NF EN 10346 resistent a la corrosion, aux intemperies et a la pollution urbaine parisienne. Un traitement de surface qui garantit une duree de vie superieure a 20 ans sans entretien lourd.",
              },
              {
                num: "02",
                title: "Fabrication sur mesure toutes dimensions",
                desc: "Chaque rideau metallique est fabrique aux cotes exactes de votre baie, de 2 a 12 metres de largeur. Notre bureau d&apos;etudes integre les contraintes architecturales specifiques de votre local parisien : linteau reduit, imposte vitree, passage de gaines.",
              },
              {
                num: "03",
                title: "Depannage urgence 24h/24",
                desc: "Un rideau bloque met en danger la securite de votre local. Notre equipe de techniciens intervient 7j/7, 24h/24 dans tout Paris et proche banlieue. Diagnostic sur place, pieces detachees embarquees, depannage en une seule intervention dans 90% des cas.",
              },
              {
                num: "04",
                title: "Conformite normes NF EN et CE",
                desc: "Tous nos rideaux metalliques sont conformes a la directive europeenne NF EN 13241-1 et portent le marquage CE obligatoire. Certification qui atteste la resistance mecanique, la securite d&apos;utilisation et la durabilite de chaque installation.",
              },
              {
                num: "05",
                title: "Motorisation manuelle ou electrique",
                desc: "Moteur tubulaire pour les rideaux legers jusqu&apos;a 200 kg, moteur central avec frein electromagnetique pour les rideaux industriels lourds jusqu&apos;a 1 500 kg. Commande par bouton-poussoir, telecommande radio ou integration domotique complete.",
              },
              {
                num: "06",
                title: "Garantie jusqu&apos;a 10 ans",
                desc: "Nous garantissons nos rideaux metalliques jusqu&apos;a 10 ans pieces et main-d&apos;oeuvre. Un engagement de qualite qui couvre la structure du tablier, les coulisses, l&apos;axe d&apos;enroulement et le moteur. Service apres-vente reactif base en Ile-de-France.",
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
                    backgroundColor: "#FFF1EC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ fontSize: "20px", fontWeight: 700, color: "#FF6333" }}>{item.num}</span>
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

      {/* Second SEO block — Lames pleines vs micro-perforees */}
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
              <strong>Lames pleines</strong> vs <strong>micro-perforees</strong> : quel <strong>rideau metallique</strong> pour votre local a <strong>Paris</strong>
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
              Le choix entre <strong>lames pleines</strong> et <strong>lames micro-perforees</strong> depend avant tout de la nature de votre activite et de l&apos;emplacement de votre local a <strong>Paris</strong>. Les lames pleines en <strong>acier galvanise</strong> de 77 mm offrent une occultation totale et une resistance maximale aux tentatives d&apos;effraction. Elles sont recommandees pour les entrepots de stockage, les ateliers de production, les parkings souterrains et tous les locaux ou la securite prime sur la visibilite.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              Les <strong>lames micro-perforees</strong> constituent la solution privilegiee dans les arrondissements commercants de Paris, notamment le Marais, Saint-Germain-des-Pres, les Grands Boulevards et le quartier de l&apos;Opera. Leurs perforations calibrees laissent filtrer la lumiere et le regard tout en conservant une resistance mecanique suffisante pour decourager les intrusions. Ce type de rideau prolonge l&apos;effet marketing de votre devanture 24 heures sur 24.
            </p>
            <a href={siteConfig.telephoneHref} style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#FF6333", fontSize: "15px", fontWeight: 600, textDecoration: "none", marginTop: "20px" }}>
              Devis gratuit : {siteConfig.telephone}
            </a>
          </div>
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <img src="/images/portes/rideau-metallique-industriel-paris.webp" alt="Rideau metallique industriel Paris - lames pleines et micro-perforees" title="Rideau metallique lames pleines vs micro-perforees a Paris" width={640} height={480} loading="lazy" decoding="async" style={{ width: "100%", height: "480px", objectFit: "cover", borderRadius: "16px" }} />
          </div>
        </div>
      </section>

      {/* Maillage — Liens internes */}
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
            Decouvrez nos autres solutions a <strong>Paris</strong>
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            {[
              { href: "/porte-de-garage-paris", label: "Porte de garage" },
              { href: "/porte-sectionnelle-industrielle-paris", label: "Porte industrielle" },
              { href: "/porte-souple-rapide-paris", label: "Porte souple rapide" },
              { href: "/installation-porte-sectionnelle-paris", label: "Installation" },
              { href: "/depannage-porte-sectionnelle-paris", label: "Depannage" },
              { href: "/reparation-porte-sectionnelle-paris", label: "Reparation" },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  borderRadius: "50px",
                  border: "1px solid #E5E7EB",
                  backgroundColor: "#F6F7F9",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#3B3B3B",
                                    textDecoration: "none",
                  transition: "all 0.2s",
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
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#FF6333", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "12px" }}>Zones d&apos;intervention</span>
          <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "32px" }}>
            <strong>Rideau metallique industriel</strong> dans toute la region parisienne
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
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="#FF6333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#FF6333", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "12px", textAlign: "center" }}>Temoignages</span>
          <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "40px", textAlign: "center" }}>
            Avis clients — <strong>Rideau metallique industriel</strong> a <strong>Paris</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { name: "Bernard Z.", location: "Paris 3e", color: "#FF6333", text: "Rideau metallique en lames micro-perforees installe pour notre boutique du Marais. La vitrine reste visible meme rideau baisse, l'effet commercial est preserv la nuit. Les passants voient nos produits 24h/24, c'est un vrai atout marketing." },
              { name: "Jocelyne F.", location: "Paris 9e", color: "#2563EB", text: "Remplacement de notre vieux rideau metallique de commerce pres des Grands Boulevards. Le nouveau modele motorise s'ouvre en 15 secondes, fini les efforts du matin. Les lames en acier galvanise 77mm sont robustes et bien finies." },
              { name: "Fabien R.", location: "Boulogne-Billancourt", color: "#10B981", text: "Installation d'un rideau metallique industriel pour notre atelier. Lames pleines en acier pour une securite maximale. Le moteur central avec frein electromagnetique bloque le rideau en position, aucun risque de descente intempestive." },
              { name: "Marie-Helene C.", location: "Paris 20e", color: "#8B5CF6", text: "Pose d'un rideau metallique a lames pleines pour notre entrepot de stockage. Le tablier est solide, l'axe d'enroulement ne vibre pas. Le technicien a regle la fin de course avec precision. On sent les 25 ans d'experience de l'equipe." },
              { name: "Sebastien A.", location: "Levallois-Perret", color: "#F59E0B", text: "Rideau metallique pour notre parking souterrain de copropriete. La motorisation electrique supporte les passages quotidiens de 30 vehicules sans broncher. Le systeme de debrayage manuel fonctionne bien en cas de coupure, teste et approuve." },
              { name: "Nadia L.", location: "Saint-Denis", color: "#EF4444", text: "Depannage puis remplacement de notre rideau metallique de local commercial. L'ancien modele etait irreparable, le nouveau a ete pose en une journee. Finition soignee, coloris assortis a notre enseigne. Le devis a ete respecte a l'euro pres." },
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

      {/* FAQ section */}
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
              color: "#FF6333",
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
                            marginBottom: "60px",
              textAlign: "center",
            }}
          >
            Vos questions sur les rideaux metalliques industriels a <strong>Paris</strong>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            {[
              {
                q: "Quel type de rideau metallique pour un commerce a Paris ?",
                a: "Pour un commerce parisien, nous recommandons le rideau a lames micro-perforees qui allie securite anti-effraction et visibilite sur la vitrine. Les perforations calibrees laissent passer la lumiere et le regard des passants, prolongeant l&apos;effet vitrine 24h/24. Pour les commerces stockant des marchandises de valeur, le rideau a lames pleines en acier galvanise offre une occultation et une resistance maximales.",
              },
              {
                q: "Combien coute un rideau metallique industriel ?",
                a: "Le prix d&apos;un rideau metallique industriel varie selon les dimensions, le type de lames et la motorisation. A titre indicatif, comptez a partir de 1 200 euros HT pour un rideau manuel de 3 metres de large, et a partir de 2 500 euros HT avec motorisation electrique. Pour les grandes portees industrielles au-dela de 6 metres, un devis sur mesure est indispensable. Contactez-nous au 09 72 12 41 41 pour une estimation precise.",
              },
              {
                q: "Peut-on motoriser un rideau metallique manuel ?",
                a: "Oui, la motorisation d&apos;un rideau metallique existant est une intervention courante que nous realisons regulierement a Paris. Nous installons un moteur tubulaire ou central adapte au poids et aux dimensions de votre tablier. L&apos;operation necessite une alimentation electrique a proximite et prend generalement une demi-journee. Le systeme inclut un debrayage manuel de securite en cas de coupure de courant.",
              },
              {
                q: "Quelle est la duree de vie d&apos;un rideau metallique ?",
                a: "Un rideau metallique industriel en acier galvanise correctement installe et entretenu a une duree de vie de 20 a 30 ans pour la structure (tablier, coulisses, axe). Le moteur, sollicite quotidiennement, a une esperance de 10 a 15 ans selon la frequence d&apos;utilisation. Nous proposons des contrats d&apos;entretien annuels qui incluent la lubrification, le reglage des ressorts et le controle du moteur pour maximiser la longevite.",
              },
              {
                q: "Comment securiser un rideau metallique contre les effractions ?",
                a: "Plusieurs dispositifs renforcent la securite d&apos;un rideau metallique : verrous a cle ou a cylindre europeen integres aux coulisses, serrure centrale trois points, lames renforcees double paroi, et detecteur d&apos;arrachement relie a une alarme. Pour les locaux sensibles, nous installons des barres de renfort anti-levier qui empechent le soulevement force du tablier. L&apos;ensemble forme une protection certifiee contre les tentatives d&apos;intrusion.",
              },
              {
                q: "Quel delai pour l&apos;installation d&apos;un rideau metallique a Paris ?",
                a: "Apres validation du devis et prise de cotes sur site, la fabrication de votre rideau metallique sur mesure prend 10 a 15 jours ouvrables. La pose elle-meme dure une journee pour un rideau standard et jusqu&apos;a deux jours pour les grandes portees industrielles. En cas d&apos;urgence (remplacement apres sinistre), nous disposons de rideaux en stock pour une installation sous 48 heures.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "32px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#000000",
                                        marginBottom: "12px",
                    lineHeight: "26px",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "#3B3B3B",
                    lineHeight: "24px",
                                      }}
                >
                  {item.a}
                </p>
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
            <img src="/images/portes/reparation-porte-sectionnelle-industrielle.webp" alt="Rideau metallique professionnel Paris - securisation locaux industriels" title="Securiser vos locaux industriels avec un rideau metallique a Paris" width={640} height={480} loading="lazy" decoding="async" style={{ width: "100%", height: "480px", objectFit: "cover", borderRadius: "16px" }} />
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
              Sécuriser vos <strong>locaux industriels à Paris</strong> avec un <strong>rideau métallique</strong> professionnel
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
              <strong>Paris</strong> concentre des milliers de locaux commerciaux, entrepôts de stockage et parkings qui nécessitent une fermeture fiable et dissuasive. Le <strong>rideau métallique industriel</strong> en <strong>acier galvanisé</strong> répond à cette exigence grâce à sa résistance mécanique éprouvée et sa conformité aux normes <strong>NF EN 13241</strong> et marquage CE. Les lames en acier traité anti-corrosion supportent les agressions climatiques, les chocs accidentels et les tentatives d&apos;effraction, offrant une protection pérenne sans entretien lourd.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              Notre atelier fabrique chaque rideau aux dimensions exactes de votre baie, qu&apos;il s&apos;agisse d&apos;une devanture de boutique de 3 mètres ou d&apos;un portail d&apos;entrepôt de 12 mètres de large. L&apos;installation comprend la pose des <strong>coulisses en acier galvanisé</strong>, le réglage de la tension des ressorts de compensation, le raccordement électrique du <strong>moteur</strong> et la mise en service avec programmation de la télécommande. En cas de panne, notre équipe intervient dans tous les arrondissements de <strong>Paris</strong> avec un stock de pièces embarqué.
            </p>
            <a href={siteConfig.telephoneHref} style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#FF6333", fontSize: "15px", fontWeight: 600, textDecoration: "none", marginTop: "20px" }}>
              Devis gratuit : {siteConfig.telephone}
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Rideau metallique industriel",
        description: "Rideau metallique industriel a Paris. Installation, depannage et reparation pour entrepots, commerces et parkings. Lames acier galvanise, motorisation sur mesure.",
        brand: { "@type": "Organization", name: "Porte Sectionnelle Paris" },
        offers: { "@type": "Offer", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://porte-sectionnelle-paris.fr/" },
          { "@type": "ListItem", position: 2, name: "Rideau metallique industriel", item: "https://porte-sectionnelle-paris.fr/rideau-metallique-industriel-paris/" },
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
                name: "Quel type de rideau metallique pour un commerce a Paris ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pour un commerce parisien, nous recommandons le rideau a lames micro-perforees qui allie securite anti-effraction et visibilite sur la vitrine. Les perforations calibrees laissent passer la lumiere et le regard des passants, prolongeant l'effet vitrine 24h/24. Pour les commerces stockant des marchandises de valeur, le rideau a lames pleines en acier galvanise offre une occultation et une resistance maximales.",
                },
              },
              {
                "@type": "Question",
                name: "Combien coute un rideau metallique industriel ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le prix d'un rideau metallique industriel varie selon les dimensions, le type de lames et la motorisation. A titre indicatif, comptez a partir de 1 200 euros HT pour un rideau manuel de 3 metres de large, et a partir de 2 500 euros HT avec motorisation electrique. Pour les grandes portees industrielles au-dela de 6 metres, un devis sur mesure est indispensable. Contactez-nous au 09 72 12 41 41 pour une estimation precise.",
                },
              },
              {
                "@type": "Question",
                name: "Peut-on motoriser un rideau metallique manuel ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, la motorisation d'un rideau metallique existant est une intervention courante que nous realisons regulierement a Paris. Nous installons un moteur tubulaire ou central adapte au poids et aux dimensions de votre tablier. L'operation necessite une alimentation electrique a proximite et prend generalement une demi-journee. Le systeme inclut un debrayage manuel de securite en cas de coupure de courant.",
                },
              },
              {
                "@type": "Question",
                name: "Quelle est la duree de vie d'un rideau metallique ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un rideau metallique industriel en acier galvanise correctement installe et entretenu a une duree de vie de 20 a 30 ans pour la structure (tablier, coulisses, axe). Le moteur, sollicite quotidiennement, a une esperance de 10 a 15 ans selon la frequence d'utilisation. Nous proposons des contrats d'entretien annuels qui incluent la lubrification, le reglage des ressorts et le controle du moteur pour maximiser la longevite.",
                },
              },
              {
                "@type": "Question",
                name: "Comment securiser un rideau metallique contre les effractions ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Plusieurs dispositifs renforcent la securite d'un rideau metallique : verrous a cle ou a cylindre europeen integres aux coulisses, serrure centrale trois points, lames renforcees double paroi, et detecteur d'arrachement relie a une alarme. Pour les locaux sensibles, nous installons des barres de renfort anti-levier qui empechent le soulevement force du tablier. L'ensemble forme une protection certifiee contre les tentatives d'intrusion.",
                },
              },
              {
                "@type": "Question",
                name: "Quel delai pour l'installation d'un rideau metallique a Paris ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Apres validation du devis et prise de cotes sur site, la fabrication de votre rideau metallique sur mesure prend 10 a 15 jours ouvrables. La pose elle-meme dure une journee pour un rideau standard et jusqu'a deux jours pour les grandes portees industrielles. En cas d'urgence (remplacement apres sinistre), nous disposons de rideaux en stock pour une installation sous 48 heures.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
