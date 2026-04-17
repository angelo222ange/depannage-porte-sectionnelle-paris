import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAForm from "@/components/CTAForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Porte de Garage Basculante Paris | Pose & Reparation",
  description:
    "Porte de garage basculante a Paris. Installation, reparation et motorisation de portes debordantes et non debordantes. Devis gratuit au 09 72 12 41 41.",
  alternates: {
    canonical: "https://depannage-porte-sectionnelle-paris.fr/porte-de-garage-basculante-paris/",
  },
  openGraph: {
    title: "Porte de Garage Basculante Paris | Installation & Reparation",
    description: "Porte de garage basculante a Paris. Installation, reparation et motorisation de portes basculantes debordantes et non debordantes. Devis gratuit.",
    url: "https://depannage-porte-sectionnelle-paris.fr/porte-de-garage-basculante-paris/",
    images: ["/images/portes/porte-garage-basculante.webp"],
  },
};

export default function PorteDeGarageBasculanteParis() {
  const interventions = [
    {
      title: "Basculante debordante",
      desc: "La porte basculante debordante fonctionne grace a un systeme de rails de guidage lateraux : le panneau pivote vers l\u2019exterieur avant de se loger au plafond du garage. Ce modele, le plus repandu a Paris, offre un excellent rapport qualite-prix et convient parfaitement aux garages disposant d\u2019un degagement suffisant devant l\u2019ouverture. Panneau acier simple ou double paroi selon vos besoins d\u2019isolation.",
      image: "/images/portes/porte-garage-basculante-exterieur.webp",
    },
    {
      title: "Basculante non debordante",
      desc: "Ideale pour les garages donnant directement sur le trottoir parisien, la porte basculante non debordante utilise un mecanisme a bras articules et contrepoids. Le panneau bascule vers l\u2019interieur sans jamais depasser le cadre du tableau. Solution privilegiee dans les arrondissements ou le recul est inexistant, elle respecte les contraintes d\u2019urbanisme tout en assurant une fermeture fiable et securisee.",
      image: "/images/portes/porte-garage-basculante-interieur.webp",
    },
    {
      title: "Motorisation porte basculante",
      desc: "Transformez votre porte basculante manuelle en acces motorise avec nos kits de motorisation adaptes. Moteur deporte ou a chaine, telecommande multi-frequence, detection d\u2019obstacle et arret automatique : nos techniciens installent et reglent l\u2019ensemble pour un fonctionnement silencieux et securise. Compatible avec toutes les marques de portes basculantes presentes sur le marche parisien.",
      image: "/images/portes/moteur-porte-sectionnelle.webp",
    },
    {
      title: "Reparation porte basculante",
      desc: "Ressorts casses, rails deformes, panneau emboutit, serrure bloquee : notre equipe intervient dans tout Paris pour reparer votre porte basculante en urgence ou sur rendez-vous. Nous diagnostiquons la panne sur place, remplacons les pieces defectueuses avec des composants certifies et reglons la tension des ressorts pour retrouver un fonctionnement optimal et securise des le premier passage.",
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
            backgroundImage: "url('/images/portes/porte-garage-basculante-maison.webp')",
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
              Porte de Garage
              <br />
              Basculante Paris
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
              Installation, reparation et motorisation de portes basculantes debordantes et non debordantes. La solution la plus economique pour securiser votre garage a Paris.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" as const }}>
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
                                    textDecoration: "none",
                }}
              >
                Devis gratuit
              </a>
              <a
                href={siteConfig.telephoneHref}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#FFFFFF",
                  fontSize: "18px",
                  fontWeight: 600,
                                    textDecoration: "none",
                }}
              >
                {siteConfig.telephone}
              </a>
            </div>
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
          <span>Porte de garage basculante Paris</span>
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
              src="/images/portes/porte-garage-basculante.webp"
              alt="Porte de garage basculante Paris - installation et reparation"
              title="Porte de garage basculante a Paris"
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
                color: "#E63946",
                textTransform: "uppercase" as const,
                letterSpacing: "1.5px",
                                display: "block",
                marginBottom: "16px",
              }}
            >
              Porte basculante
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
              Comment fonctionne une porte de garage basculante a <strong>Paris</strong>
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
              La porte de garage basculante est constituee d&apos;un panneau unique rigide qui pivote autour d&apos;un axe horizontal pour passer de la position verticale (fermee) a la position horizontale (ouverte, logee sous le plafond). Deux technologies coexistent : la version debordante, ou le panneau sort legerement a l&apos;exterieur lors de l&apos;ouverture en suivant des rails de guidage, et la version non debordante a bras articules et contrepoids, ou le panneau reste strictement dans l&apos;emprise du garage.
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
              Depuis plus de 25 ans, notre equipe installe et repare des portes basculantes dans l&apos;ensemble des arrondissements parisiens. Nous travaillons avec des panneaux en acier simple paroi pour les garages non isoles, et en acier double paroi avec mousse polyurethane injectee pour les garages attenants a l&apos;habitation necessitant une isolation thermique et phonique renforcee. Chaque porte est fabriquee sur mesure selon les dimensions exactes de votre tableau.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              Parmi toutes les typologies de portes de garage, la basculante reste la plus economique a l&apos;achat comme a l&apos;entretien. Son mecanisme simple limite les pannes et facilite les reparations. Elle peut etre equipee d&apos;un portillon pieton integre pour un acces quotidien sans avoir a ouvrir l&apos;ensemble du panneau, et d&apos;une motorisation optionnelle commandee par telecommande ou smartphone.
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
            Nos interventions
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
            Porte basculante : nos prestations a Paris
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
                  overflow: "hidden",
                  border: "1px solid #E5E7EB",
                }}
              >
                <img
                  src={item.image}
                  alt={`${item.title} a Paris - porte de garage basculante`}
                  title={`${item.title} - Depannage Porte Sectionnelle Paris`}
                  width={400}
                  height={200}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
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
            Les avantages de la porte basculante a <strong>Paris</strong>
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
                title: "Prix le plus competitif du marche",
                desc: "La porte basculante reste la solution la plus economique parmi toutes les typologies de portes de garage. Un investissement maitrise sans compromis sur la qualite ni la securite de votre garage parisien.",
              },
              {
                num: "02",
                title: "Mecanisme simple et fiable",
                desc: "Ressorts de torsion ou contrepoids, le systeme de la porte basculante comporte peu de pieces mobiles. Moins de composants signifie moins de pannes, moins d&apos;entretien et une duree de vie superieure a 20 ans avec un suivi adapte.",
              },
              {
                num: "03",
                title: "Portillon pieton integrable",
                desc: "Accedez a votre garage au quotidien sans ouvrir l&apos;ensemble du panneau grace a un portillon pieton decoupe directement dans la porte. Ideal pour les usages frequents dans les arrondissements parisiens ou le garage sert aussi de local velo.",
              },
              {
                num: "04",
                title: "Motorisation compatible toutes marques",
                desc: "Nos techniciens installent des moteurs compatibles avec l&apos;ensemble des marques de portes basculantes presentes sur le marche : Hormann, Novoferm, Tubauto, Crawford. Telecommande, smartphone ou badge : vous choisissez votre mode de commande.",
              },
              {
                num: "05",
                title: "Fabrication sur mesure au mm",
                desc: "Chaque porte basculante que nous posons a Paris est fabriquee aux dimensions exactes de votre tableau. Largeurs de 2 000 a 5 000 mm, hauteurs de 1 800 a 3 000 mm, en acier simple ou double paroi selon vos besoins d&apos;isolation.",
              },
              {
                num: "06",
                title: "Securite antieffraction renforcee",
                desc: "Serrure multipoints, renforts lateraux anti-levage, verrous de sol manuels ou automatiques : nous securisons votre porte basculante contre les tentatives d&apos;intrusion, un critere essentiel dans les quartiers parisiens exposes.",
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

      {/* SEO block 2 - Entretien — image + texte */}
      <section
        style={{
          padding: "120px 30px",
          backgroundColor: "#F6F7F9",
        }}
      >
        <div style={{ maxWidth: "1312px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" as const }}>
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <img
              src="/images/portes/entretien-porte-sectionnelle.webp"
              alt="Entretien porte de garage basculante a Paris - maintenance preventive"
              title="Entretien de porte basculante Paris - Depannage Porte Sectionnelle Paris"
              width={640}
              height={480}
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "480px",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
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
              Entretien et duree de vie d&apos;une <strong>porte basculante a Paris</strong>
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
              Une <strong>porte de garage basculante</strong> correctement entretenue affiche une duree de vie de 20 a 30 ans. Les ressorts de torsion ou d&apos;extension, soumis a plusieurs milliers de cycles d&apos;ouverture et de fermeture chaque annee, constituent la piece d&apos;usure principale : leur remplacement intervient en moyenne tous les 10 a 15 ans selon l&apos;intensite d&apos;utilisation. Nos contrats de maintenance annuels incluent la verification de la tension des ressorts, la lubrification des axes, charnieres et rails de guidage, le controle des cables de securite anti-chute et l&apos;inspection de l&apos;ensemble du mecanisme de verrouillage.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              A <strong>Paris</strong>, les conditions environnementales specifiques influent directement sur la longevite de votre porte basculante. L&apos;humidite liee a la proximite de la Seine, les ecarts de temperature et les particules fines accelerent la corrosion des pieces metalliques. Nos techniciens, forts de plus de 25 ans d&apos;experience dans les arrondissements parisiens, adaptent chaque intervention aux contraintes locales. Contactez-nous au <a href={siteConfig.telephoneHref} style={{ color: "#E63946", fontWeight: 600 }}>{siteConfig.telephone}</a> pour un contrat d&apos;entretien adapte.
            </p>
          </div>
        </div>
      </section>

      {/* Maillage interne — cards avec images */}
      <section
        style={{
          padding: "80px 30px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "42px",
                            marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Decouvrez nos autres solutions a Paris
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {[
              { href: "/porte-de-garage-paris/", label: "Porte de garage sectionnelle", image: "/images/portes/porte-garage-sectionnelle.webp" },
              { href: "/porte-de-garage-enroulable-paris/", label: "Porte enroulable", image: "/images/portes/porte-garage-coulissante.webp" },
              { href: "/porte-sectionnelle-industrielle-paris/", label: "Porte sectionnelle industrielle", image: "/images/portes/porte-sectionnelle-industrielle.webp" },
              { href: "/installation-porte-sectionnelle-paris/", label: "Installation porte sectionnelle", image: "/images/portes/installation-porte-sectionnelle.webp" },
              { href: "/depannage-porte-sectionnelle-paris/", label: "Depannage porte sectionnelle", image: "/images/portes/depannage-porte-sectionnelle.webp" },
              { href: "/reparation-porte-sectionnelle-paris/", label: "Reparation porte sectionnelle", image: "/images/portes/reparation-porte-sectionnelle.webp" },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                style={{
                  display: "block",
                  borderRadius: "16px",
                  overflow: "hidden",
                  backgroundColor: "#F6F7F9",
                  border: "1px solid #E5E7EB",
                  textDecoration: "none",
                  transition: "box-shadow 0.2s",
                }}
              >
                <img
                  src={link.image}
                  alt={`${link.label} a Paris`}
                  title={`${link.label} - Depannage Porte Sectionnelle Paris`}
                  width={400}
                  height={180}
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
                <div style={{ padding: "20px 24px" }}>
                  <span style={{ fontSize: "16px", fontWeight: 600, color: "#000000", }}>
                    {link.label}
                  </span>
                </div>
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
            <strong>Porte de garage basculante</strong> dans toute la region parisienne
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
            Avis clients — <strong>Porte de garage basculante</strong> a <strong>Paris</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { name: "Michel V.", location: "Paris 6e", color: "#E63946", text: "Remplacement de notre vieille porte basculante par un modele neuf avec portillon pieton. Le technicien a adapte le mecanisme a contrepoids pour un fonctionnement fluide. Tres content du resultat, la porte s'ouvre d'un doigt." },
              { name: "Agnes R.", location: "Paris 10e", color: "#2563EB", text: "Installation d'une porte basculante motorisee dans notre garage du 10e. Le rapport qualite-prix est imbattable comparee a une sectionnelle. Le panneau en acier double paroi isole bien, on a gagne deux degres dans le garage cet hiver." },
              { name: "Daniel M.", location: "Levallois-Perret", color: "#10B981", text: "Porte basculante Hormann posee en une journee. Le mecanisme a ressorts de torsion est costaud et silencieux. Le technicien a meme installe un portillon integre pour acceder au garage sans ouvrir tout le panneau. Pratique au quotidien." },
              { name: "Christine L.", location: "Paris 19e", color: "#8B5CF6", text: "Notre ancienne porte basculante avait des ressorts fatigues. Remplacement complet des ressorts et mise en securite du mecanisme anti-chute. La porte fonctionne de nouveau parfaitement, sans forcer. Intervention rapide et propre." },
              { name: "Eric B.", location: "Argenteuil", color: "#F59E0B", text: "Pose d'une porte basculante sur mesure pour notre garage atypique de 2m10 de haut. Les dimensions exactes ont ete respectees, l'ajustement est parfait. Le verrouillage multipoints nous rassure cote securite." },
              { name: "Sylvie J.", location: "Neuilly-sur-Seine", color: "#EF4444", text: "Motorisation ajoutee sur notre porte basculante existante. Le moteur Somfy est compatible et l'installation a pris moins de trois heures. Plus besoin de descendre de voiture sous la pluie, la telecommande fait tout." },
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
                            marginBottom: "60px",
              textAlign: "center",
            }}
          >
            Tout savoir sur la porte basculante a Paris
          </h2>
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column" as const, gap: "32px" }}>
            {[
              {
                q: "Quelle est la difference entre basculante debordante et non debordante ?",
                a: "La porte basculante debordante utilise des rails de guidage lateraux : le panneau sort legerement a l&apos;exterieur avant de se loger au plafond. Elle necessite un degagement d&apos;environ 1 metre devant le garage. La version non debordante fonctionne avec des bras articules et des contrepoids, le panneau reste strictement dans l&apos;emprise du garage. A Paris, la non debordante est privilegiee pour les garages donnant directement sur le trottoir, conformement aux regles d&apos;urbanisme.",
              },
              {
                q: "Combien coute l&apos;installation d&apos;une porte basculante a Paris ?",
                a: `Le prix d'une porte basculante posee a Paris demarre a partir de 800 euros pour un modele debordant en acier simple paroi, et a partir de 1 200 euros pour une version non debordante ou double paroi isolee. La motorisation represente un supplement a partir de 350 euros. Chaque devis est personnalise selon les dimensions exactes de votre tableau, le type de mecanisme choisi et les finitions souhaitees. Contactez-nous au ${siteConfig.telephone} pour un chiffrage gratuit sous 24 heures.`,
              },
              {
                q: "Peut-on motoriser une porte basculante existante ?",
                a: "Oui, la quasi-totalite des portes basculantes existantes peuvent etre motorisees. Nos techniciens installent un moteur deporte a chaine ou a courroie, adapte au poids et aux dimensions de votre panneau. L&apos;operation comprend la pose du moteur, le raccordement electrique, la programmation de la telecommande et le reglage de la detection d&apos;obstacle. L&apos;intervention dure en moyenne 2 a 3 heures et ne necessite aucune modification structurelle de votre garage.",
              },
              {
                q: "Quelle est la duree de vie d&apos;une porte basculante ?",
                a: "Une porte basculante en acier galvanise correctement entretenue dure entre 20 et 30 ans. Les ressorts, principale piece d&apos;usure, se remplacent tous les 10 a 15 ans selon la frequence d&apos;utilisation. A Paris, l&apos;humidite et la pollution urbaine peuvent accelerer la corrosion : un entretien annuel avec lubrification des mecanismes et controle de la tension des ressorts permet de maximiser la longevite de votre equipement.",
              },
              {
                q: "Comment securiser une porte basculante contre les cambriolages ?",
                a: "Plusieurs dispositifs renforcent la securite d&apos;une porte basculante : serrure multipoints a cylindre europeen, renforts lateraux anti-levage qui empechent le soulevement force du panneau, verrous de sol manuels ou automatiques, et detecteur d&apos;ouverture relie a votre alarme. La motorisation ajoute un niveau de protection supplementaire car le moteur bloque mecaniquement le panneau en position fermee. Nous adaptons les solutions aux risques specifiques de chaque quartier parisien.",
              },
              {
                q: "Quelles dimensions pour une porte basculante standard ?",
                a: "Les dimensions standard couvrent des largeurs de 2 400 a 3 000 mm et des hauteurs de 2 000 a 2 500 mm. Cependant, a Paris, les garages presentent souvent des dimensions atypiques liees a l&apos;anciennete des immeubles. C&apos;est pourquoi chaque porte que nous installons est fabricable sur mesure au millimetre pres, avec des largeurs possibles de 2 000 a 5 000 mm et des hauteurs de 1 800 a 3 000 mm, pour s&apos;adapter parfaitement a votre ouverture existante.",
              },
            ].map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "24px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#000000",
                                        marginBottom: "12px",
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "#3B3B3B",
                    lineHeight: "24px",
                                      }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQPage Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quelle est la difference entre basculante debordante et non debordante ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La porte basculante debordante utilise des rails de guidage lateraux : le panneau sort legerement a l'exterieur avant de se loger au plafond. Elle necessite un degagement d'environ 1 metre devant le garage. La version non debordante fonctionne avec des bras articules et des contrepoids, le panneau reste strictement dans l'emprise du garage. A Paris, la non debordante est privilegiee pour les garages donnant directement sur le trottoir, conformement aux regles d'urbanisme.",
                },
              },
              {
                "@type": "Question",
                name: "Combien coute l'installation d'une porte basculante a Paris ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Le prix d'une porte basculante posee a Paris demarre a partir de 800 euros pour un modele debordant en acier simple paroi, et a partir de 1 200 euros pour une version non debordante ou double paroi isolee. La motorisation represente un supplement a partir de 350 euros. Chaque devis est personnalise selon les dimensions exactes de votre tableau, le type de mecanisme choisi et les finitions souhaitees. Contactez-nous au ${siteConfig.telephone} pour un chiffrage gratuit sous 24 heures.`,
                },
              },
              {
                "@type": "Question",
                name: "Peut-on motoriser une porte basculante existante ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, la quasi-totalite des portes basculantes existantes peuvent etre motorisees. Nos techniciens installent un moteur deporte a chaine ou a courroie, adapte au poids et aux dimensions de votre panneau. L'operation comprend la pose du moteur, le raccordement electrique, la programmation de la telecommande et le reglage de la detection d'obstacle. L'intervention dure en moyenne 2 a 3 heures et ne necessite aucune modification structurelle de votre garage.",
                },
              },
              {
                "@type": "Question",
                name: "Quelle est la duree de vie d'une porte basculante ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Une porte basculante en acier galvanise correctement entretenue dure entre 20 et 30 ans. Les ressorts, principale piece d'usure, se remplacent tous les 10 a 15 ans selon la frequence d'utilisation. A Paris, l'humidite et la pollution urbaine peuvent accelerer la corrosion : un entretien annuel avec lubrification des mecanismes et controle de la tension des ressorts permet de maximiser la longevite de votre equipement.",
                },
              },
              {
                "@type": "Question",
                name: "Comment securiser une porte basculante contre les cambriolages ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Plusieurs dispositifs renforcent la securite d'une porte basculante : serrure multipoints a cylindre europeen, renforts lateraux anti-levage qui empechent le soulevement force du panneau, verrous de sol manuels ou automatiques, et detecteur d'ouverture relie a votre alarme. La motorisation ajoute un niveau de protection supplementaire car le moteur bloque mecaniquement le panneau en position fermee. Nous adaptons les solutions aux risques specifiques de chaque quartier parisien.",
                },
              },
              {
                "@type": "Question",
                name: "Quelles dimensions pour une porte basculante standard ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Les dimensions standard couvrent des largeurs de 2 400 a 3 000 mm et des hauteurs de 2 000 a 2 500 mm. Cependant, a Paris, les garages presentent souvent des dimensions atypiques liees a l'anciennete des immeubles. C'est pourquoi chaque porte que nous installons est fabricable sur mesure au millimetre pres, avec des largeurs possibles de 2 000 a 5 000 mm et des hauteurs de 1 800 a 3 000 mm, pour s'adapter parfaitement a votre ouverture existante.",
                },
              },
            ],
          }),
        }}
      />

      {/* SEO content section — texte + image */}
      <section
        style={{
          padding: "120px 30px",
          backgroundColor: "#FFFFFF",
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
              Choisir la bonne <strong>porte basculante</strong> pour votre garage parisien
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
              Le choix entre une <strong>porte basculante</strong> debordante et non debordante depend avant tout de la configuration de votre garage a <strong>Paris</strong>. Si votre entree donne directement sur la voie publique — ce qui est frequent dans les 11e, 12e, 18e ou 20e arrondissements — la version non debordante s&apos;impose. En revanche, si vous disposez d&apos;une allee privee ou d&apos;un recul d&apos;au moins un metre, la basculante debordante constitue le choix le plus economique.
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
              Cote materiaux, l&apos;acier galvanise reste la reference pour sa resistance aux chocs et sa longevite face aux conditions climatiques parisiennes. Les finitions disponibles — laquage blanc, gris anthracite, imitation bois — s&apos;adaptent a l&apos;esthetique de votre facade et aux exigences des coproprietes de <strong>Paris</strong>.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              Contactez-nous au <a href={siteConfig.telephoneHref} style={{ color: "#E63946", fontWeight: 600 }}>{siteConfig.telephone}</a> pour un diagnostic gratuit et un devis detaille sous 24 heures.
            </p>
          </div>
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <img
              src="/images/portes/porte-garage-maison.webp"
              alt="Porte de garage basculante pour maison parisienne - choix et conseil"
              title="Choisir sa porte basculante a Paris - Depannage Porte Sectionnelle Paris"
              width={640}
              height={480}
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "480px",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Porte de garage basculante",
        description: "Porte de garage basculante a Paris. Installation, reparation et motorisation de portes basculantes debordantes et non debordantes.",
        brand: { "@type": "Organization", name: "Depannage Porte Sectionnelle Paris" },
        offers: { "@type": "Offer", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://depannage-porte-sectionnelle-paris.fr/" },
          { "@type": "ListItem", position: 2, name: "Porte de garage basculante", item: "https://depannage-porte-sectionnelle-paris.fr/porte-de-garage-basculante-paris/" },
        ],
      }) }} />

      <CTAForm />
      <Footer />
    </>
  );
}
