import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAForm from "@/components/CTAForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Porte Sectionnelle Industrielle Paris | Pro",
  description:
    "Porte sectionnelle industrielle a Paris. Installation, depannage et maintenance pour entrepots, usines et locaux commerciaux. Devis au 09 72 12 41 41.",
  alternates: {
    canonical: "https://porte-sectionnelle-paris.fr/porte-sectionnelle-industrielle-paris/",
  },
  openGraph: {
    title: "Porte Sectionnelle Industrielle Paris | Pro",
    description: "Porte sectionnelle industrielle a Paris. Installation, depannage et maintenance pour entrepots, usines et locaux commerciaux. Devis gratuit.",
    url: "https://porte-sectionnelle-paris.fr/porte-sectionnelle-industrielle-paris/",
    images: ["/images/portes/porte-sectionnelle-industrielle.webp"],
  },
};

export default function PorteSectionnelleIndustrielleParis() {
  const interventions = [
    {
      title: "Porte sectionnelle pour entrepôt",
      desc: "Installation de portes sectionnelles grand format pour entrepôts logistiques et zones de stockage. Dimensions jusqu'à 8 mètres de large et 6 mètres de haut, avec panneaux renforcés de 80 mm d'épaisseur pour une isolation thermique maximale et une résistance aux chocs adaptée aux manoeuvres de chariots élévateurs.",
      image: "/images/portes/porte-sectionnelle-industrielle.webp",
    },
    {
      title: "Porte à ouverture rapide",
      desc: "Pour les sites à fort trafic, nous installons des portes sectionnelles à ouverture rapide (jusqu'à 0,5 m/s) qui limitent les déperditions thermiques et les courants d'air. Equipées de variateurs de fréquence, elles offrent un cycle complet en moins de 15 secondes tout en préservant les moteurs.",
      image: "/images/portes/porte-sectionnelle-industrielle-blanc.webp",
    },
    {
      title: "Porte coupe-feu sectionnelle",
      desc: "Portes sectionnelles certifiées EI60 et EI120 pour le compartimentage de vos locaux industriels. Elles se ferment automatiquement en cas de détection de fumée ou d'incendie et sont raccordées à votre système de sécurité incendie (SSI). Installation conforme aux réglementations ICPE et ERP.",
      image: "/images/portes/reparation-porte-sectionnelle-industrielle.webp",
    },
    {
      title: "Quai de chargement complet",
      desc: "Aménagement intégral de quais de chargement : porte sectionnelle avec sas d'étanchéité, butoirs, niveleurs hydrauliques et guidage de camion. Solution clé en main pour optimiser vos flux logistiques tout en maintenant l'isolation thermique de votre bâtiment.",
      image: "/images/portes/installation-porte-sectionnelle.webp",
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
            backgroundImage: "url('/images/portes/reparation-porte-sectionnelle-industrielle-fond.webp')",
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
              Porte Sectionnelle
              <br />
              Industrielle Paris
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
              Solutions professionnelles pour entrepôts, usines et locaux commerciaux. Portes grand format, haute isolation, ouverture rapide et coupe-feu.
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
          <span>Porte sectionnelle industrielle Paris</span>
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
              src="/images/portes/porte-sectionnelle-industrielle.webp"
              alt="Porte sectionnelle industrielle Paris - installation entrepot"
              title="Porte sectionnelle industrielle a Paris"
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
                color: "#FF6333",
                textTransform: "uppercase" as const,
                letterSpacing: "1.5px",
                                display: "block",
                marginBottom: "16px",
              }}
            >
              Secteur industriel
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
              Portes sectionnelles industrielles sur mesure à Paris
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
              Les exigences d&apos;un bâtiment industriel ou commercial diffèrent radicalement de celles d&apos;un garage résidentiel. Les portes sectionnelles industrielles doivent supporter des milliers de cycles quotidiens, résister aux chocs des engins de manutention, offrir une isolation thermique performante pour réduire les coûts énergétiques et se conformer aux réglementations strictes en matière de sécurité incendie.
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
              Avec plus de 25 ans d&apos;expérience dans l&apos;équipement de sites industriels en Ile-de-France, notre entreprise conçoit et installe des portes sectionnelles sur mesure adaptées à chaque secteur d&apos;activité : logistique et transport, agroalimentaire avec normes d&apos;hygiène, pharmaceutique en salle blanche, automobile pour les ateliers et concessions, grande distribution pour les quais de livraison.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              Nous proposons des solutions complètes : étude technique sur site, fabrication sur mesure, pose par nos équipes spécialisées, raccordement aux systèmes de contrôle d&apos;accès et contrat de maintenance adapté à votre cadence d&apos;utilisation. Un interlocuteur dédié coordonne chaque projet de A à Z.
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
              color: "#FF6333",
              textTransform: "uppercase" as const,
              letterSpacing: "1.5px",
                            display: "block",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Solutions industrielles
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
            Nos equipements de <strong>porte sectionnelle industrielle</strong> a <strong>Paris</strong>
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
                  alt={`${item.title} - porte sectionnelle industrielle Paris`}
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

      {/* SEO content section */}
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
              Les avantages de la <strong>porte sectionnelle</strong> pour les <strong>bâtiments industriels à Paris</strong>
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
              Dans un contexte où les coûts énergétiques ne cessent d&apos;augmenter, la <strong>porte sectionnelle industrielle</strong> représente un investissement stratégique pour les entreprises parisiennes. Grâce à ses <strong>panneaux sandwich en acier galvanisé</strong> avec âme en mousse polyuréthane de 60 à 80 mm, elle offre un coefficient d&apos;<strong>isolation thermique</strong> (valeur U) parmi les meilleurs du marché. Pour un entrepôt chauffé ou réfrigéré, le retour sur investissement s&apos;observe dès la première année grâce aux économies sur la facture énergétique.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              Au-delà de l&apos;isolation, la <strong>porte sectionnelle industrielle</strong> apporte une sécurité renforcée contre les intrusions grâce à ses systèmes de <strong>verrouillage multipoints</strong> et sa construction robuste. Les modèles avec hublots en polycarbonate permettent de conserver un apport de lumière naturelle sans compromettre la résistance. Pour les sites soumis aux réglementations <strong>ICPE</strong> ou <strong>Seveso</strong>, nos <strong>portes coupe-feu certifiées</strong> assurent le compartimentage réglementaire.
            </p>
            <a href={siteConfig.telephoneHref} style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#FF6333", fontSize: "15px", fontWeight: 600, textDecoration: "none", marginTop: "20px" }}>
              Devis gratuit : {siteConfig.telephone}
            </a>
          </div>
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <img src="/images/portes/depannage-porte-sectionnelle.webp" alt="Porte sectionnelle industrielle Paris - avantages isolation et securite" title="Avantages porte sectionnelle industrielle a Paris" width={640} height={480} loading="lazy" decoding="async" style={{ width: "100%", height: "480px", objectFit: "cover", borderRadius: "16px" }} />
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section style={{ padding: "120px 30px", backgroundColor: "#F6F7F9" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#FF6333", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "16px", textAlign: "center" }}>
            Pourquoi nous choisir
          </span>
          <h2 style={{ fontSize: "42px", fontWeight: 600, color: "#000000", lineHeight: "48px", marginBottom: "60px", textAlign: "center" }}>
            Les atouts de nos portes sectionnelles industrielles a <strong>Paris</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { num: "01", title: "Haute endurance", desc: "Nos portes industrielles sont conçues pour supporter plus de 200 000 cycles d'ouverture. Ressorts calibrés, charnières renforcées et rails en acier galvanisé garantissent une longévité exceptionnelle même en utilisation intensive 24h/24." },
              { num: "02", title: "Isolation thermique renforcée", desc: "Panneaux sandwich de 60 à 80 mm d'épaisseur avec âme en mousse polyuréthane injectée. Coefficient thermique U jusqu'à 0,5 W/m2K pour réduire vos factures énergétiques et maintenir la chaîne du froid dans vos entrepôts." },
              { num: "03", title: "Sécurité certifiée", desc: "Systèmes anti-chute par ressort de sécurité, parachute mécanique intégré, détection d'obstacles par cellules photoélectriques et barre palpeuse. Conformité aux normes EN 13241-1 et marquage CE obligatoire." },
              { num: "04", title: "Motorisation haute vitesse", desc: "Moteurs industriels à variateur de fréquence permettant des vitesses d'ouverture jusqu'à 0,5 m/s. Réduction des déperditions thermiques et optimisation du flux logistique avec un cycle complet en moins de 15 secondes." },
              { num: "05", title: "Sur mesure intégral", desc: "Fabrication sur mesure jusqu'à 12 mètres de large et 8 mètres de haut. Choix de finitions (couleur RAL, hublots, grilles de ventilation), adaptation aux contraintes architecturales et raccordement aux systèmes de contrôle d'accès existants." },
              { num: "06", title: "Maintenance préventive", desc: "Contrats de maintenance adaptés à votre cadence d'utilisation : trimestriel, semestriel ou annuel. Nos techniciens vérifient ressorts, câbles, joints, motorisation et systèmes de sécurité pour prévenir toute panne." },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "32px", border: "1px solid #E5E7EB" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "#FFF1EC", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <span style={{ fontSize: "20px", fontWeight: 700, color: "#FF6333" }}>{item.num}</span>
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
            <img src="/images/portes/porte-sectionnelle-industrielle-vue.webp" alt="Entretien et maintenance porte sectionnelle industrielle Paris" title="Maintenance porte sectionnelle industrielle Paris" width={640} height={480} loading="lazy" decoding="async" style={{ width: "100%", height: "480px", objectFit: "contain", backgroundColor: "#F6F7F9", borderRadius: "16px" }} />
          </div>
          <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "24px" }}>
              Maintenance et <strong>dépannage porte sectionnelle industrielle</strong> à Paris
            </h2>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", marginBottom: "16px" }}>
              Une <strong>porte sectionnelle industrielle</strong> en panne, c&apos;est une ligne de production ralentie, des livraisons bloquées et des coûts qui s&apos;accumulent. Notre service de <strong>dépannage urgent à Paris</strong> intervient sous 2 heures sur l&apos;ensemble de l&apos;Ile-de-France pour remettre votre équipement en service dans les plus brefs délais. Nos véhicules d&apos;intervention sont équipés des pièces détachées les plus courantes : ressorts de torsion, câbles acier, galets de roulement, moteurs et cartes électroniques.
            </p>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", marginBottom: "16px" }}>
              Au-delà du dépannage, nous recommandons un <strong>contrat de maintenance préventive</strong> adapté à l&apos;intensité d&apos;utilisation de vos <strong>portes industrielles</strong>. Les visites programmées permettent de détecter l&apos;usure des composants avant qu&apos;elle ne provoque une panne : tension des ressorts, état des joints d&apos;étanchéité, lubrification des rails, vérification des dispositifs de sécurité et mise à jour des systèmes de commande. Un investissement préventif qui évite des arrêts coûteux et prolonge la durée de vie de vos équipements.
            </p>
            <a href={siteConfig.telephoneHref} style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#FF6333", fontSize: "15px", fontWeight: 600, textDecoration: "none", marginTop: "20px" }}>
              Dépannage urgent : {siteConfig.telephone}
            </a>
          </div>
        </div>
      </section>

      {/* Maillage — Nos autres solutions */}
      <section style={{ padding: "120px 30px", backgroundColor: "#F6F7F9" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#FF6333", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "16px", textAlign: "center" }}>
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
              { href: "/motorisation-porte-sectionnelle-paris", title: "Motorisation porte sectionnelle", image: "/images/portes/porte-garage-sectionnelle.webp" },
              { href: "/porte-de-garage-paris", title: "Porte de garage Paris", image: "/images/portes/porte-garage-maison.webp" },
              { href: "/entretien-porte-sectionnelle-paris", title: "Entretien porte sectionnelle", image: "/images/portes/entretien-porte-sectionnelle.webp" },
            ].map((item, i) => (
              <a key={i} href={item.href} style={{ display: "block", backgroundColor: "#FFFFFF", borderRadius: "16px", overflow: "hidden", border: "1px solid #E5E7EB", textDecoration: "none" }}>
                <img src={item.image} alt={`${item.title} Paris`} title={item.title} width={400} height={180} loading="lazy" decoding="async" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                <div style={{ padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#000000", }}>{item.title}</h3>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginLeft: "8px" }}>
                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#FF6333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
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
            <strong>Porte sectionnelle industrielle</strong> dans toute la region parisienne
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
            Avis clients — <strong>Porte sectionnelle industrielle</strong> a <strong>Paris</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { name: "Jacques T.", location: "Saint-Denis", color: "#FF6333", text: "Installation de deux portes sectionnelles industrielles pour notre entrepot logistique a Saint-Denis. Panneaux de 80mm, isolation remarquable. La temperature interieure ne varie plus malgre les ouvertures frequentes pour les camions." },
              { name: "Veronique S.", location: "Nanterre", color: "#2563EB", text: "Remplacement de nos anciennes portes a enroulement par des sectionnelles industrielles Crawford. Le gain d'isolation est enorme, nos couts de chauffage ont baisse de 25%. Le service technique a ete tres professionnel du debut a la fin." },
              { name: "Frederic O.", location: "Montreuil", color: "#10B981", text: "Porte sectionnelle industrielle de 6 metres de large avec motorisation haute vitesse pour notre atelier. Le cycle d'ouverture est rapide, les chariots elevateurs passent sans attendre. Maintenance trimestrielle incluse dans le contrat." },
              { name: "Martine Q.", location: "Ivry-sur-Seine", color: "#8B5CF6", text: "Porte coupe-feu EI60 installee pour la mise en conformite de notre site classe ICPE. Toute la documentation reglementaire a ete fournie, certificat CE et attestation de conformite. Raccordement au SSI effectue par l'equipe, sans sous-traitance." },
              { name: "Pierre-Louis G.", location: "Argenteuil", color: "#F59E0B", text: "Quatre portes sectionnelles industrielles pour notre plateforme de cross-docking. Hauteur de 5 metres, largeur de 4 metres chacune, hublots polycarbonate pour la lumiere naturelle. Projet mene dans les delais annonces, equipe competente." },
              { name: "Sabine K.", location: "Creteil", color: "#EF4444", text: "Depannage en urgence de notre porte industrielle bloquee un lundi matin. Le technicien etait la en deux heures, ressort casse remplace avec du materiel adapte aux grandes dimensions. Redemarrage rapide de l'activite. Service fiable." },
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
      <section style={{ padding: "120px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#FF6333", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "16px", textAlign: "center" }}>
            Questions fréquentes
          </span>
          <h2 style={{ fontSize: "42px", fontWeight: 600, color: "#000000", lineHeight: "48px", marginBottom: "60px", textAlign: "center" }}>
            FAQ — Porte sectionnelle industrielle Paris
          </h2>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: "32px" }}>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>Quelles dimensions maximales pour une porte sectionnelle industrielle ?</h3>
              <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", }}>Les portes sectionnelles industrielles que nous installons à Paris atteignent jusqu&apos;à 12 mètres de largeur et 8 mètres de hauteur. Pour les ouvertures hors standard, nous réalisons des études techniques sur site afin de concevoir une solution sur mesure adaptée aux contraintes structurelles de votre bâtiment.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>Quelle isolation thermique offre une porte sectionnelle industrielle ?</h3>
              <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", }}>Nos panneaux sandwich en acier galvanisé avec mousse polyuréthane de 60 à 80 mm d&apos;épaisseur atteignent un coefficient U de 0,5 W/m2K. Pour les entrepôts frigorifiques ou chauffés, cette performance réduit significativement les coûts énergétiques et assure le maintien de la chaîne du froid.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>Quelles normes s&apos;appliquent aux portes sectionnelles industrielles ?</h3>
              <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", }}>Toutes nos portes sont conformes à la norme européenne EN 13241-1 et portent le marquage CE. Pour les sites classés ICPE ou Seveso, nous proposons des portes coupe-feu certifiées EI60 et EI120 raccordées à votre système de sécurité incendie (SSI). Un certificat de conformité est remis à chaque installation.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>Quel type de motorisation pour une porte industrielle à fort trafic ?</h3>
              <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", }}>Pour les sites à fort trafic, nous installons des moteurs industriels avec variateur de fréquence permettant des vitesses d&apos;ouverture jusqu&apos;à 0,5 m/s. Le cycle complet (ouverture + fermeture) s&apos;effectue en moins de 15 secondes, limitant les pertes thermiques et optimisant le flux de véhicules et de chariots élévateurs.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>À quelle fréquence entretenir une porte sectionnelle industrielle ?</h3>
              <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", }}>La fréquence dépend de l&apos;intensité d&apos;utilisation. Pour un site logistique avec plus de 100 cycles quotidiens, nous recommandons une maintenance trimestrielle. Pour une utilisation modérée (moins de 50 cycles/jour), un entretien semestriel suffit. Chaque visite inclut la vérification des ressorts, câbles, joints, motorisation et dispositifs de sécurité.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>Quel est le prix d&apos;une porte sectionnelle industrielle à Paris ?</h3>
              <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", }}>Le tarif varie en fonction des dimensions, du niveau d&apos;isolation, du type de motorisation et des options de sécurité. Pour une porte standard de 4 x 4 mètres avec motorisation, comptez à partir de 3 500 euros pose comprise. Les portes coupe-feu et les modèles grand format nécessitent un devis personnalisé. Contactez-nous au {siteConfig.telephone} pour une estimation gratuite.</p>
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
                  "name": "Quelles dimensions maximales pour une porte sectionnelle industrielle ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Les portes sectionnelles industrielles que nous installons a Paris atteignent jusqu'a 12 metres de largeur et 8 metres de hauteur. Pour les ouvertures hors standard, nous realisons des etudes techniques sur site afin de concevoir une solution sur mesure adaptee aux contraintes structurelles de votre batiment." }
                },
                {
                  "@type": "Question",
                  "name": "Quelle isolation thermique offre une porte sectionnelle industrielle ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Nos panneaux sandwich en acier galvanise avec mousse polyurethane de 60 a 80 mm d'epaisseur atteignent un coefficient U de 0,5 W/m2K. Pour les entrepots frigorifiques ou chauffes, cette performance reduit significativement les couts energetiques." }
                },
                {
                  "@type": "Question",
                  "name": "Quelles normes s'appliquent aux portes sectionnelles industrielles ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Toutes nos portes sont conformes a la norme europeenne EN 13241-1 et portent le marquage CE. Pour les sites classes ICPE ou Seveso, nous proposons des portes coupe-feu certifiees EI60 et EI120." }
                },
                {
                  "@type": "Question",
                  "name": "Quel type de motorisation pour une porte industrielle a fort trafic ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Pour les sites a fort trafic, nous installons des moteurs industriels avec variateur de frequence permettant des vitesses d'ouverture jusqu'a 0,5 m/s. Le cycle complet s'effectue en moins de 15 secondes." }
                },
                {
                  "@type": "Question",
                  "name": "A quelle frequence entretenir une porte sectionnelle industrielle ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Pour un site logistique avec plus de 100 cycles quotidiens, nous recommandons une maintenance trimestrielle. Pour une utilisation moderee, un entretien semestriel suffit." }
                },
                {
                  "@type": "Question",
                  "name": "Quel est le prix d'une porte sectionnelle industrielle a Paris ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Pour une porte standard de 4 x 4 metres avec motorisation, comptez a partir de 3 500 euros pose comprise. Les portes coupe-feu et les modeles grand format necessitent un devis personnalise." }
                }
              ]
            })
          }}
        />
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Porte sectionnelle industrielle",
        description: "Porte sectionnelle industrielle a Paris. Installation, depannage et maintenance pour entrepots, usines et locaux commerciaux.",
        brand: { "@type": "Organization", name: "Porte Sectionnelle Paris" },
        offers: { "@type": "Offer", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://porte-sectionnelle-paris.fr/" },
          { "@type": "ListItem", position: 2, name: "Porte sectionnelle industrielle", item: "https://porte-sectionnelle-paris.fr/porte-sectionnelle-industrielle-paris/" },
        ],
      }) }} />

      <CTAForm />
      <Footer />
    </>
  );
}
