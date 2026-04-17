import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAForm from "@/components/CTAForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Motorisation Porte Sectionnelle Paris | Somfy Hormann",
  description:
    "Motorisation porte sectionnelle a Paris. Moteur Somfy, Hormann, Marantec. Automatisation, telecommande, domotique. Devis gratuit au 09 72 12 41 41.",
  alternates: {
    canonical: "https://depannage-porte-sectionnelle-paris.fr/motorisation-porte-sectionnelle-paris/",
  },
  openGraph: {
    title: "Motorisation Porte Sectionnelle Paris | Somfy Hormann",
    description: "Motorisation porte sectionnelle a Paris. Moteur Somfy, Hormann, Marantec. Automatisation, telecommande, domotique. Devis gratuit au 09 72 12 41 41.",
    url: "https://depannage-porte-sectionnelle-paris.fr/motorisation-porte-sectionnelle-paris/",
    images: ["/images/portes/moteur-porte-sectionnelle.webp"],
  },
};

export default function MotorisationPorteSectionnelleParis() {
  const interventions = [
    {
      title: "Installation de moteur neuf",
      desc: "Motorisation de votre porte sectionnelle manuelle avec un moteur adapte au poids et aux dimensions de votre tablier. Nous installons les moteurs deportes au plafond ou integres dans l'axe, selon la configuration de votre garage et la hauteur sous linteau disponible.",
      image: "/images/portes/moteur-porte-sectionnelle.webp",
    },
    {
      title: "Remplacement de motorisation",
      desc: "Votre moteur actuel montre des signes de fatigue — lenteur, a-coups, surchauffe ? Nous le remplacons par un modele de derniere generation offrant un fonctionnement silencieux, une consommation reduite et une compatibilite avec les systemes de domotique.",
      image: "/images/portes/installation-porte-sectionnelle.webp",
    },
    {
      title: "Automatisation et connectivite",
      desc: "Transformez votre porte sectionnelle en un equipement connecte. Commande depuis votre smartphone, integration aux box domotiques (Somfy TaHoma, Google Home, Alexa), programmation horaire et detection d'obstacles automatique pour une securite optimale.",
      image: "/images/portes/porte-sectionnelle-industrielle.webp",
    },
    {
      title: "Moteur de secours avec batterie",
      desc: "En cas de coupure de courant, votre porte reste fonctionnelle grace a un systeme de batterie de secours integre. Ideal pour les garages en sous-sol sans acces pieton alternatif ou les locaux professionnels necessitant un acces permanent.",
      image: "/images/portes/entretien-porte-sectionnelle.webp",
    },
  ];

  const faqs = [
    {
      q: "Qui appeler pour la motorisation d'une porte sectionnelle a Paris ?",
      a: `Pour motoriser votre porte sectionnelle a Paris, contactez nos specialistes au ${siteConfig.telephone}. Forts de plus de 25 ans d'experience, nous installons les motorisations Somfy, Hormann, Marantec et Nice. Visite technique gratuite et devis detaille sous 48 heures.`,
    },
    {
      q: "Peut-on motoriser une porte sectionnelle manuelle existante ?",
      a: "Oui, dans la grande majorite des cas, il est possible d'ajouter une motorisation a une porte sectionnelle initialement manuelle. Nos techniciens verifient que la structure existante — rails, ressorts, panneaux — est compatible et en bon etat. Si necessaire, nous renforcons ou remplacons les composants pour supporter le fonctionnement motorise en toute securite.",
    },
    {
      q: "Quel type de moteur choisir pour une porte sectionnelle ?",
      a: "Le choix depend du poids du tablier, de la frequence d'utilisation et de vos besoins en connectivite. Pour un garage residentiel, un moteur a courroie offre silence et durabilite. Pour un parking collectif ou un local commercial, un moteur a chaine ou tubulaire supporte une utilisation intensive. Nos techniciens vous orientent vers la solution la mieux adaptee apres visite technique.",
    },
    {
      q: "La motorisation est-elle compatible avec la domotique ?",
      a: "Les motorisations de derniere generation sont nativement compatibles avec les principaux ecosystemes domotiques : Somfy TaHoma, Google Home, Amazon Alexa, Apple HomeKit via des modules additionnels. Vous pouvez piloter votre porte depuis votre smartphone, programmer des horaires d'ouverture et recevoir des notifications en temps reel.",
    },
    {
      q: "Combien coute la motorisation d'une porte sectionnelle a Paris ?",
      a: "Le tarif depend du type de moteur choisi et de la complexite de l'installation. Les motorisations residentielles debutent a partir de 450 euros pose comprise pour un moteur a chaine standard. Les solutions connectees haut de gamme avec batterie de secours se situent autour de 900 a 1 200 euros installation incluse. Devis gratuit sur place.",
    },
    {
      q: "Que se passe-t-il en cas de coupure de courant avec une porte motorisee ?",
      a: "Toutes les motorisations que nous installons disposent d'un systeme de deverrouillage manuel d'urgence permettant d'ouvrir la porte a la main en cas de panne electrique. Pour les installations ou l'acces permanent est critique, nous proposons des moteurs equipes d'une batterie de secours offrant une autonomie de 24 a 48 heures selon le nombre de cycles.",
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
            backgroundImage: "url('/images/portes/hero-porte-sectionnelle-fond.webp')",
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
              Motorisation Porte
              <br />
              Sectionnelle Paris
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
              Automatisez votre <strong>porte sectionnelle</strong> avec les meilleures motorisations du marche. <strong>Somfy</strong>, <strong>Hormann</strong>, Marantec, Nice — installation et programmation par nos experts.
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
              Devis gratuit — {siteConfig.telephone}
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
          <span><strong>Motorisation porte sectionnelle Paris</strong></span>
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
              src="/images/portes/moteur-porte-sectionnelle.webp"
              alt="Motorisation porte sectionnelle Paris - moteur automatique installe"
              title="Motorisation porte sectionnelle Paris"
              width={640}
              height={420}
              loading="eager"
              decoding="async"
              style={{
                width: "100%",
                height: "420px",
                objectFit: "contain",
                backgroundColor: "#F6F7F9",
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
              Automatisation
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
              <strong>Motoriser</strong> votre <strong>porte sectionnelle</strong> a <strong>Paris</strong>
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
              La <strong>motorisation</strong> d&apos;une <strong>porte sectionnelle</strong> transforme radicalement le confort d&apos;utilisation de votre garage ou local professionnel. Finis les efforts physiques pour soulever un tablier de plusieurs dizaines de kilos, les manoeuvres sous la pluie ou le froid. D&apos;une simple pression sur la telecommande, votre porte s&apos;ouvre et se ferme en silence, avec une precision millimetrique et une securite renforcee grace aux capteurs d&apos;obstacles integres.
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
              Notre equipe de techniciens, forte de plus de <strong>25 ans</strong> d&apos;experience en <strong>motorisation</strong> de <strong>portes sectionnelles</strong> a <strong>Paris</strong>, selectionne le moteur ideal en fonction du poids de votre tablier, de la frequence d&apos;utilisation et de vos besoins en connectivite. Pour un garage residentiel utilise deux fois par jour, un moteur a chaine standard suffit. Pour un parking d&apos;immeuble ou un local commercial a forte frequentation, nous preconisons des moteurs industriels a variation de vitesse.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              Nous travaillons avec les leaders du secteur — <strong>Somfy</strong>, <strong>Hormann</strong>, Marantec, Nice, Came — et proposons des solutions adaptees a tous les budgets, du moteur d&apos;entree de gamme fiable au systeme connecte haut de gamme pilotable depuis votre smartphone.
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
            Solutions de motorisation
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
            Nos prestations de <strong>motorisation de porte sectionnelle</strong> a <strong>Paris</strong>
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
                <img src={item.image} alt={item.title + " - porte sectionnelle Paris"} title={item.title} width={400} height={200} loading="lazy" decoding="async" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                <div style={{ padding: "32px" }}>
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

      {/* SEO content section — 2 columns */}
      <section
        style={{
          padding: "120px 30px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div style={{ maxWidth: "1312px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center" }}>
          <div style={{ flex: "1 1 50%" }}>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 600,
                color: "#000000",
                lineHeight: "42px",
                                marginBottom: "24px",
              }}
            >
              Quel moteur choisir pour votre <strong>porte sectionnelle</strong> a <strong>Paris</strong> ?
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
              Le choix d&apos;un moteur pour <strong>porte sectionnelle</strong> depend de plusieurs criteres techniques que nos techniciens evaluent lors de la visite prealable. Le poids du tablier est le facteur principal : un moteur sous-dimensionne s&apos;usera prematurement, tandis qu&apos;un moteur surdimensionne consommera inutilement de l&apos;energie. La hauteur de refoulement, le type de ressorts et la frequence d&apos;utilisation quotidienne determinent egalement le modele adapte.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              Pour les garages residentiels a <strong>Paris</strong>, les moteurs a courroie offrent le meilleur compromis entre silence de fonctionnement et durabilite. Pour les installations professionnelles et les parkings collectifs, les moteurs tubulaires ou a arbre creux garantissent des milliers de cycles quotidiens sans maintenance. Notre equipe vous conseille objectivement, sans chercher a vous orienter vers le produit le plus cher mais vers celui qui correspond reellement a votre usage.
            </p>
          </div>
          <div style={{ flex: "1 1 50%" }}>
            <img
              src="/images/portes/installation-porte-sectionnelle.webp"
              alt="Choix moteur porte sectionnelle Paris"
              title="Choix moteur porte sectionnelle Paris"
              width={640}
              height={420}
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "16px" }}
            />
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section style={{ padding: "120px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#E63946", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "16px", textAlign: "center" }}>Pourquoi nous choisir</span>
          <h2 style={{ fontSize: "42px", fontWeight: 600, color: "#000000", lineHeight: "48px", marginBottom: "60px", textAlign: "center" }}>
            Les avantages de notre <strong>motorisation de porte sectionnelle</strong> a <strong>Paris</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { num: "01", title: "Moteurs des leaders du marche", desc: "Nous installons exclusivement les motorisations des fabricants de reference — Somfy, Hormann, Marantec, Nice, Came. Ces marques garantissent fiabilite, silence de fonctionnement et compatibilite avec les derniers standards de securite et de connectivite." },
              { num: "02", title: "Installation propre en demi-journee", desc: "La pose d'une motorisation sur une porte sectionnelle existante est realisee en une demi-journee par nos techniciens. Le raccordement electrique, la programmation des telecommandes et le reglage des fins de course sont effectues avec precision pour un fonctionnement immediat et optimal." },
              { num: "03", title: "Compatibilite domotique native", desc: "Toutes les motorisations que nous proposons sont compatibles avec les principaux ecosystemes domotiques : Somfy TaHoma, Google Home, Amazon Alexa. Pilotez votre porte sectionnelle depuis votre smartphone, programmez des horaires et recevez des alertes en temps reel." },
              { num: "04", title: "Securite renforcee avec capteurs integres", desc: "Chaque motorisation installee integre des dispositifs de securite avances : detection d'obstacles par cellules photoelectriques, systeme anti-ecrasement, deverrouillage manuel d'urgence. Ces equipements sont conformes a la norme EN 13241-1 et proteges contre toute utilisation accidentelle." },
              { num: "05", title: "Garantie constructeur de 2 a 5 ans", desc: "Les moteurs que nous installons beneficient de la garantie constructeur — 2 ans pour les modeles standard, jusqu'a 5 ans pour les gammes professionnelles. En complement, notre garantie main-d'oeuvre de 12 mois couvre l'ensemble de l'installation realisee par nos equipes." },
              { num: "06", title: "Conseil objectif adapte a votre usage", desc: "Nous ne surdimensionnons pas les installations pour gonfler la facture. Notre approche consiste a evaluer precisement vos besoins — poids du tablier, frequence d'utilisation, budget — et a vous proposer le moteur qui offre le meilleur rapport performance-prix pour votre situation specifique." },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "#F6F7F9", borderRadius: "16px", padding: "32px", border: "1px solid #E5E7EB" }}>
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
      <section style={{ padding: "120px 30px", backgroundColor: "#F6F7F9" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center" }}>
          <div style={{ flex: "1 1 50%" }}>
            <img
              src="/images/portes/porte-sectionnelle-industrielle.webp"
              alt="Motorisation porte sectionnelle connectee Paris"
              title="Motorisation connectee porte sectionnelle Paris"
              width={640}
              height={420}
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "420px", objectFit: "contain", backgroundColor: "#F6F7F9", borderRadius: "16px" }}
            />
          </div>
          <div style={{ flex: "1 1 50%" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "24px" }}>
              La <strong>motorisation</strong> connectee <strong>porte sectionnelle Paris</strong> : confort et securite au quotidien
            </h2>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", marginBottom: "16px" }}>
              Les <strong>motorisations</strong> de derniere generation vont bien au-dela du simple confort d&apos;ouverture automatique. Integrees a votre ecosysteme domotique, elles offrent un controle total sur votre <strong>porte sectionnelle</strong> a <strong>Paris</strong>. Verifiez a distance si votre porte est bien fermee, programmez une ouverture automatique a votre heure de retour du travail, recevez une alerte instantanee en cas d&apos;ouverture non prevue. Avec <strong>25 ans</strong> d&apos;expertise, nos techniciens configurent chaque parametre pour que la technologie soit au service de votre tranquillite.
            </p>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", marginBottom: "24px" }}>
              La <strong>motorisation</strong> ameliore egalement la securite de votre bien immobilier. Un moteur equipe d&apos;un systeme de verrouillage automatique rend votre porte inviolable une fois fermee, contrairement a une porte manuelle qui peut etre soulevee par un intrus. C&apos;est un argument de poids pour les garages parisiens situes en rez-de-chaussee ou en sous-sol. Contactez-nous au <strong>{siteConfig.telephone}</strong> pour decouvrir nos solutions de <strong>motorisation</strong>.
            </p>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "12px", backgroundColor: "#E63946", padding: "14px 32px", borderRadius: "50px", fontSize: "16px", fontWeight: 600, color: "#FFFFFF", }}>
              Decouvrir nos motorisations
            </a>
          </div>
        </div>
      </section>

      {/* Maillage */}
      <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "32px", textAlign: "center" }}>Nos autres services de <strong>porte sectionnelle</strong> a <strong>Paris</strong></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { href: "/installation-porte-sectionnelle-paris/", label: "Installation", image: "/images/portes/installation-porte-sectionnelle.webp" },
              { href: "/depannage-porte-sectionnelle-paris/", label: "Depannage", image: "/images/portes/depannage-porte-sectionnelle.webp" },
              { href: "/reparation-porte-sectionnelle-paris/", label: "Reparation", image: "/images/portes/reparation-porte-sectionnelle.webp" },
              { href: "/entretien-porte-sectionnelle-paris/", label: "Entretien", image: "/images/portes/entretien-porte-sectionnelle.webp" },
              { href: "/porte-sectionnelle-industrielle-paris/", label: "Industrielle", image: "/images/portes/porte-sectionnelle-industrielle.webp" },
            ].map((link, i) => (
              <a key={i} href={link.href} style={{ display: "block", borderRadius: "16px", overflow: "hidden", backgroundColor: "#F6F7F9", border: "1px solid #E5E7EB", textDecoration: "none" }}>
                <img src={link.image} alt={link.label + " porte sectionnelle Paris"} title={link.label} width={400} height={180} loading="lazy" decoding="async" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                <div style={{ padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}><span style={{ fontSize: "16px", fontWeight: 600, color: "#000000", }}>{link.label}</span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#E63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
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
            <strong>Motorisation porte sectionnelle</strong> dans toute la region parisienne
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
            Avis clients — <strong>Motorisation porte sectionnelle</strong> a <strong>Paris</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { name: "Gerard F.", location: "Paris 7e", color: "#E63946", text: "Motorisation Somfy installee sur notre porte sectionnelle manuelle. Le confort est incomparable, plus besoin de soulever 60 kg a chaque passage. La telecommande fonctionne depuis la voiture, un vrai plus les jours de pluie." },
              { name: "Valerie P.", location: "Paris 13e", color: "#2563EB", text: "Remplacement de notre vieux moteur par un Hormann ProMatic connecte. Pilotage depuis le smartphone, integration parfaite avec notre box Somfy TaHoma. Le technicien a tout configure et explique en detail. Excellent travail." },
              { name: "Nicolas E.", location: "Boulogne-Billancourt", color: "#10B981", text: "Installation d'un moteur avec batterie de secours pour notre garage en sous-sol. Indispensable en cas de coupure de courant puisqu'on n'a pas d'acces pieton alternatif. Pose soignee, fonctionnement silencieux, tres satisfait." },
              { name: "Muriel T.", location: "Paris 4e", color: "#8B5CF6", text: "Motorisation de la porte de notre atelier dans le Marais. Le technicien a choisi un moteur a courroie adapte au poids de notre tablier. Ouverture et fermeture ultra silencieuses, les voisins apprecient autant que nous." },
              { name: "Alain C.", location: "Montreuil", color: "#F59E0B", text: "Automatisation de notre porte sectionnelle de parking collectif. Le moteur industriel supporte les 80 cycles quotidiens sans broncher. Programmation des badges d'acces pour les 12 copropriétaires realisee le jour de la pose." },
              { name: "Florence H.", location: "Saint-Denis", color: "#EF4444", text: "Motorisation d'urgence apres que ma mere agee ne pouvait plus manoeuvrer sa porte manuellement. Intervention rapide, moteur adapte a sa porte existante. Elle retrouve son autonomie, c'est le plus important. Merci a l'equipe." },
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
      <section style={{ padding: "120px 30px", backgroundColor: "#F6F7F9" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#E63946", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "16px", textAlign: "center" }}>Questions frequentes</span>
          <h2 style={{ fontSize: "42px", fontWeight: 600, color: "#000000", lineHeight: "48px", marginBottom: "60px", textAlign: "center" }}>
            Tout savoir sur la <strong>motorisation de porte sectionnelle</strong> a <strong>Paris</strong>
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "32px" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "24px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>{faq.q}</h3>
                <p style={{ fontSize: "15px", fontWeight: 400, color: "#3B3B3B", lineHeight: "24px", }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Motorisation de porte sectionnelle a Paris",
        provider: { "@type": "LocalBusiness", name: "Depannage Porte Sectionnelle Paris", telephone: "09 72 12 41 41" },
        areaServed: { "@type": "City", name: "Paris" },
        description: "Motorisation de porte sectionnelle a Paris. Installation moteur Somfy, Hormann, Marantec. Devis gratuit 09 72 12 41 41.",
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://depannage-porte-sectionnelle-paris.fr/" },
          { "@type": "ListItem", position: 2, name: "Motorisation", item: "https://depannage-porte-sectionnelle-paris.fr/motorisation-porte-sectionnelle-paris/" },
        ],
      }) }} />

      <CTAForm />
      <Footer />
    </>
  );
}
