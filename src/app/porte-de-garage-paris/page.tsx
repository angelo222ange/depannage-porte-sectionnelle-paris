import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAForm from "@/components/CTAForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Porte de Garage Paris | Installation & Reparation",
  description:
    "Porte de garage a Paris : sectionnelle, enroulable, basculante, laterale. Installation, reparation et motorisation. Devis gratuit au 09 72 12 41 41.",
  alternates: {
    canonical: "https://depannage-porte-sectionnelle-paris.fr/porte-de-garage-paris",
  },
};

export default function PorteDeGarageParis() {
  const interventions = [
    {
      title: "Porte de garage sectionnelle",
      desc: "La solution la plus populaire pour les garages parisiens. Le tablier composé de panneaux articulés coulisse verticalement le long de rails puis se loge sous le plafond. Aucun débordement extérieur, isolation thermique optimale et motorisation silencieuse. Idéale pour les garages donnant directement sur la rue.",
      image: "/images/portes/porte-garage-sectionnelle.webp",
    },
    {
      title: "Porte de garage enroulable",
      desc: "Parfaite pour les garages avec peu de recul au plafond. Le tablier en lames aluminium s'enroule dans un coffre compact placé au-dessus de l'ouverture. Gain de place maximal à l'intérieur du garage, fonctionnement similaire à un volet roulant avec une résistance adaptée aux dimensions d'un garage.",
      image: "/images/portes/porte-rideau-metallique.webp",
    },
    {
      title: "Porte de garage latérale",
      desc: "Le tablier coulisse le long du mur latéral du garage, libérant entièrement le plafond. Cette configuration permet de conserver un espace de rangement en hauteur et offre la possibilité d'une ouverture partielle pour un passage piéton quotidien sans déclencher la motorisation complète.",
      image: "/images/portes/porte-garage-coulissante.webp",
    },
    {
      title: "Porte de garage basculante",
      desc: "Solution éprouvée et économique, la porte basculante bascule vers le haut en un seul panneau rigide. Disponible en version débordante (le panneau dépasse à l'extérieur lors de l'ouverture) ou non débordante. Adaptée aux garages avec un espace suffisant devant l'entrée.",
      image: "/images/portes/porte-garage-basculante.webp",
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
            backgroundImage: "url('/images/portes/hero-porte-sectionnelle-paris.webp')",
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
              Paris
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
              Tous types de portes de garage : sectionnelle, enroulable, latérale, basculante. Installation, réparation et motorisation dans tout Paris et Ile-de-France.
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
          <span>Porte de garage Paris</span>
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
              src="/images/portes/porte-garage-maison.webp"
              alt="Porte de garage Paris - installation maison individuelle"
              title="Porte de garage installation Paris"
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
              Tous types de portes
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
              Votre spécialiste porte de garage à Paris
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
              Le choix d&apos;une porte de garage à Paris nécessite une expertise spécifique. Les contraintes architecturales de la capitale — façades haussmanniennes, garages en sous-sol, accès étroits, règles de copropriété — imposent des solutions techniques différentes de celles adaptées aux pavillons de banlieue. Notre entreprise, avec plus de 25 ans d&apos;expérience en région parisienne, maîtrise ces particularités et vous oriente vers le type de porte le plus adapté à votre situation.
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
              Sectionnelle, enroulable, latérale ou basculante : chaque technologie présente des avantages distincts en termes d&apos;encombrement, d&apos;isolation, de sécurité et de budget. Lors de notre visite technique gratuite, nous analysons les dimensions de votre ouverture, la profondeur du garage, la hauteur sous linteau, l&apos;état du tableau et vos préférences esthétiques pour vous proposer la solution optimale.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              Nous assurons également la réparation et la motorisation de tous les types de portes de garage existantes. Quel que soit le fabricant d&apos;origine, nos techniciens disposent des compétences et des pièces nécessaires pour remettre votre équipement en parfait état de fonctionnement ou pour l&apos;automatiser avec un moteur silencieux de dernière génération.
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
            Types de portes
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
            Nos solutions de portes de garage a <strong>Paris</strong>
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
                  alt={`${item.title} a Paris`}
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

      {/* SEO content section — texte + image */}
      <section style={{ padding: "120px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" as const }}>
          <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "24px" }}>
              Comment choisir sa <strong>porte de garage</strong> a <strong>Paris</strong> ?
            </h2>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", marginBottom: "16px" }}>
              Le choix d&apos;une <strong>porte de garage</strong> dans la capitale depend avant tout de la configuration de votre espace. Si votre garage donne directement sur le trottoir, une <strong>porte sectionnelle</strong> ou enroulable est preferable car elle ne deborde pas vers l&apos;exterieur.
            </p>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", marginBottom: "24px" }}>
              Une <strong>porte de garage</strong> bien isolee (panneaux de 40 mm minimum) reduit les deperditions thermiques. Pensez egalement a la securite : serrure multipoints, detection d&apos;obstacles et systeme anti-effraction sont essentiels a <strong>Paris</strong>.
            </p>
            <a href={siteConfig.telephoneHref} style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E63946", color: "#FFFFFF", padding: "14px 28px", borderRadius: "50px", fontSize: "15px", fontWeight: 600, textDecoration: "none" }}>
              Devis gratuit : {siteConfig.telephone}
            </a>
          </div>
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <img src="/images/portes/porte-garage-maison.webp" alt="Choisir sa porte de garage a Paris - conseil expert" title="Comment choisir sa porte de garage a Paris" width={640} height={480} loading="lazy" decoding="async" style={{ width: "100%", height: "480px", objectFit: "cover", borderRadius: "16px" }} />
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section style={{ padding: "120px 30px", backgroundColor: "#F6F7F9" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#E63946", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "16px", textAlign: "center" }}>
            Pourquoi nous choisir
          </span>
          <h2 style={{ fontSize: "42px", fontWeight: 600, color: "#000000", lineHeight: "48px", marginBottom: "60px", textAlign: "center" }}>
            Les avantages d&apos;une porte de garage professionnelle a <strong>Paris</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { num: "01", title: "Isolation thermique", desc: "Nos portes de garage disposent de panneaux sandwich de 40 mm minimum avec mousse polyuréthane injectée. Si votre garage communique avec les pièces de vie, cette isolation réduit les déperditions thermiques et améliore le confort de votre habitation toute l'année." },
              { num: "02", title: "Sécurité anti-effraction", desc: "Serrure multipoints, verrouillage automatique en position fermée et panneaux en acier renforcé. Nos portes de garage résistent aux tentatives d'effraction et protègent votre véhicule ainsi que les équipements stockés dans votre garage parisien." },
              { num: "03", title: "Motorisation silencieuse", desc: "Moteurs à courroie crantée de dernière génération, fonctionnant à moins de 40 dB. Idéal pour les garages situés sous les chambres ou en copropriété. Commande par télécommande, digicode ou smartphone pour un confort d'utilisation quotidien." },
              { num: "04", title: "Fabrication sur mesure", desc: "Chaque porte est fabriquée aux dimensions exactes de votre ouverture. Large choix de coloris RAL, finitions bois, hublots et grilles de ventilation. Adaptation parfaite aux contraintes architecturales des immeubles parisiens et des maisons de banlieue." },
              { num: "05", title: "Gain de place garanti", desc: "Les portes sectionnelles et enroulables n'empiètent ni sur l'extérieur ni sur l'espace intérieur du garage. Le tablier se loge sous le plafond ou dans un coffre compact, libérant la totalité de la surface au sol pour le stationnement et le rangement." },
              { num: "06", title: "Garantie et SAV réactif", desc: "Toutes nos portes de garage sont garanties pièces et main-d'oeuvre. En cas de dysfonctionnement, notre service après-vente intervient sous 24 heures dans tout Paris et l'Ile-de-France avec les pièces détachées nécessaires à bord de nos véhicules." },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "32px", border: "1px solid #E5E7EB" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "#FFEEF0", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <span style={{ fontSize: "20px", fontWeight: 700, color: "#E63946" }}>{item.num}</span>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>{item.title}</h3>
                <p style={{ fontSize: "15px", fontWeight: 400, color: "#3B3B3B", lineHeight: "24px", }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO block 2 — image LEFT + text RIGHT */}
      <section style={{ padding: "120px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" as const }}>
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <img src="/images/portes/porte-garage-sectionnelle.webp" alt="Motorisation porte de garage sectionnelle Paris" title="Motorisation et automatisme porte de garage Paris" width={640} height={480} loading="lazy" decoding="async" style={{ width: "100%", height: "480px", objectFit: "cover", borderRadius: "16px" }} />
          </div>
          <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "24px" }}>
              <strong>Motorisation</strong> et automatisme pour <strong>porte de garage à Paris</strong>
            </h2>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", marginBottom: "16px" }}>
              Automatiser votre <strong>porte de garage</strong> transforme votre quotidien : plus besoin de descendre de voiture sous la pluie, un simple appui sur la télécommande suffit. Nos techniciens installent des <strong>motorisations compatibles avec tous les types de portes</strong> — sectionnelle, enroulable, latérale ou basculante — en respectant les contraintes spécifiques de votre installation. Moteurs à chaîne pour les grandes portes, moteurs à courroie pour un fonctionnement silencieux, ou moteurs tubulaires pour les portes enroulables : chaque solution est sélectionnée en fonction de vos besoins.
            </p>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", marginBottom: "16px" }}>
              La <strong>motorisation de porte de garage</strong> intègre des dispositifs de sécurité obligatoires : détection d&apos;obstacles par cellules photoélectriques, système anti-écrasement par barre palpeuse et déverrouillage manuel de secours en cas de coupure de courant. Pour les copropriétés parisiennes, nous proposons des systèmes connectés avec gestion multi-utilisateurs, historique des ouvertures et contrôle à distance via application smartphone. Tous nos moteurs sont garantis et bénéficient d&apos;un service après-vente réactif dans tout Paris et l&apos;Ile-de-France.
            </p>
            <a href={siteConfig.telephoneHref} style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#E63946", fontSize: "15px", fontWeight: 600, textDecoration: "none", marginTop: "20px" }}>
              Devis motorisation : {siteConfig.telephone}
            </a>
          </div>
        </div>
      </section>

      {/* Maillage — Nos autres solutions */}
      <section style={{ padding: "120px 30px", backgroundColor: "#F6F7F9" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#E63946", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "16px", textAlign: "center" }}>
            Nos autres solutions
          </span>
          <h2 style={{ fontSize: "42px", fontWeight: 600, color: "#000000", lineHeight: "48px", marginBottom: "60px", textAlign: "center" }}>
            Découvrez l&apos;ensemble de nos services à Paris
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { href: "/installation-porte-sectionnelle-paris", title: "Installation porte sectionnelle", image: "/images/portes/installation-porte-sectionnelle.webp" },
              { href: "/depannage-porte-sectionnelle-paris", title: "Dépannage porte sectionnelle", image: "/images/portes/depannage-porte-sectionnelle.webp" },
              { href: "/reparation-porte-sectionnelle-paris", title: "Réparation porte sectionnelle", image: "/images/portes/reparation-porte-sectionnelle.webp" },
              { href: "/motorisation-porte-sectionnelle-paris", title: "Motorisation porte sectionnelle", image: "/images/portes/porte-sectionnelle-industrielle-blanc.webp" },
              { href: "/porte-sectionnelle-industrielle-paris", title: "Porte sectionnelle industrielle", image: "/images/portes/porte-sectionnelle-industrielle.webp" },
              { href: "/entretien-porte-sectionnelle-paris", title: "Entretien porte sectionnelle", image: "/images/portes/entretien-porte-sectionnelle.webp" },
            ].map((item, i) => (
              <a key={i} href={item.href} style={{ display: "block", backgroundColor: "#FFFFFF", borderRadius: "16px", overflow: "hidden", border: "1px solid #E5E7EB", textDecoration: "none" }}>
                <img src={item.image} alt={`${item.title} Paris`} title={item.title} width={400} height={180} loading="lazy" decoding="async" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                <div style={{ padding: "20px 24px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#000000", }}>{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "120px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#E63946", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "16px", textAlign: "center" }}>
            Questions fréquentes
          </span>
          <h2 style={{ fontSize: "42px", fontWeight: 600, color: "#000000", lineHeight: "48px", marginBottom: "60px", textAlign: "center" }}>
            FAQ — Porte de garage Paris
          </h2>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: "32px" }}>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>Porte de garage sectionnelle ou basculante : laquelle choisir ?</h3>
              <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", }}>La porte sectionnelle est préférable dans la majorité des cas parisiens car elle ne déborde pas à l&apos;extérieur lors de l&apos;ouverture, offre une meilleure isolation thermique (panneaux de 40 mm vs panneau simple) et se motorise plus facilement. La porte basculante reste pertinente pour les budgets serrés et les garages avec un recul suffisant devant l&apos;entrée.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>Peut-on motoriser une porte de garage existante ?</h3>
              <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", }}>Oui, dans la grande majorité des cas. Nos techniciens peuvent équiper une porte manuelle d&apos;un moteur adapté (chaîne, courroie ou tubulaire selon le type). Il faut simplement vérifier que la porte est en bon état, correctement équilibrée et que l&apos;alimentation électrique est disponible à proximité. L&apos;intervention prend généralement une demi-journée.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>Quelle isolation thermique pour une porte de garage ?</h3>
              <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", }}>Pour un garage attenant aux pièces de vie, nous recommandons des panneaux de 40 mm minimum avec mousse polyuréthane injectée (coefficient U d&apos;environ 1,0 W/m2K). Les joints d&apos;étanchéité périphériques et le seuil à rupture de pont thermique complètent l&apos;isolation. Cette performance réduit les déperditions et améliore le DPE de votre logement.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>Quel est le prix d&apos;une porte de garage à Paris ?</h3>
              <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", }}>Le tarif dépend du type de porte, des dimensions et des options choisies. Comptez à partir de 1 200 euros pour une porte basculante standard et à partir de 1 800 euros pour une porte sectionnelle motorisée, pose comprise. Les modèles sur mesure avec finitions haut de gamme nécessitent un devis personnalisé. Appelez-nous au {siteConfig.telephone} pour une estimation gratuite.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>Comment entretenir sa porte de garage ?</h3>
              <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", }}>Un entretien annuel suffit pour une utilisation résidentielle. Il comprend la lubrification des rails et des charnières, la vérification de la tension des ressorts, le contrôle des câbles et des dispositifs de sécurité, ainsi que le nettoyage des panneaux. Nos contrats de maintenance incluent ces opérations et un rapport détaillé de l&apos;état de votre équipement.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>Peut-on installer une porte de garage sur mesure dans un immeuble parisien ?</h3>
              <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", }}>Absolument. Les garages d&apos;immeubles parisiens présentent souvent des ouvertures non standard, des hauteurs sous linteau réduites ou des accès étroits. Nous fabriquons chaque porte aux dimensions exactes relevées lors de notre visite technique. Pour les façades classées ou en secteur ABF, nous proposons des finitions compatibles avec les exigences architecturales.</p>
            </div>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Porte de garage sectionnelle ou basculante : laquelle choisir ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "La porte sectionnelle est preferable dans la majorite des cas parisiens car elle ne deborde pas a l'exterieur lors de l'ouverture, offre une meilleure isolation thermique et se motorise plus facilement. La porte basculante reste pertinente pour les budgets serres." }
                },
                {
                  "@type": "Question",
                  "name": "Peut-on motoriser une porte de garage existante ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Oui, dans la grande majorite des cas. Nos techniciens peuvent equiper une porte manuelle d'un moteur adapte. Il faut verifier que la porte est en bon etat et correctement equilibree. L'intervention prend generalement une demi-journee." }
                },
                {
                  "@type": "Question",
                  "name": "Quelle isolation thermique pour une porte de garage ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Pour un garage attenant aux pieces de vie, nous recommandons des panneaux de 40 mm minimum avec mousse polyurethane injectee (coefficient U d'environ 1,0 W/m2K). Les joints d'etancheite peripheriques completent l'isolation." }
                },
                {
                  "@type": "Question",
                  "name": "Quel est le prix d'une porte de garage a Paris ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Comptez a partir de 1 200 euros pour une porte basculante standard et a partir de 1 800 euros pour une porte sectionnelle motorisee, pose comprise. Les modeles sur mesure necessitent un devis personnalise." }
                },
                {
                  "@type": "Question",
                  "name": "Comment entretenir sa porte de garage ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Un entretien annuel suffit pour une utilisation residentielle : lubrification des rails et charnieres, verification de la tension des ressorts, controle des cables et dispositifs de securite, nettoyage des panneaux." }
                },
                {
                  "@type": "Question",
                  "name": "Peut-on installer une porte de garage sur mesure dans un immeuble parisien ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Absolument. Nous fabriquons chaque porte aux dimensions exactes relevees lors de notre visite technique. Pour les facades classees ou en secteur ABF, nous proposons des finitions compatibles avec les exigences architecturales." }
                }
              ]
            })
          }}
        />
      </section>

      <CTAForm />
      <Footer />
    </>
  );
}
