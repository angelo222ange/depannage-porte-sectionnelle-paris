import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAForm from "@/components/CTAForm";
import { siteConfig, installationZones } from "@/config/site";

export const metadata: Metadata = {
  title: "Installation Porte Sectionnelle Paris | Poseur Agree",
  description:
    "Installation porte sectionnelle a Paris par techniciens certifies. Pose neuve, remplacement, mise aux normes. Devis gratuit au 09 72 12 41 41.",
  alternates: {
    canonical: "https://porte-sectionnelle-paris.fr/installation-porte-sectionnelle-paris/",
  },
  openGraph: {
    title: "Installation Porte Sectionnelle Paris | Poseur Agree",
    description: "Installation porte sectionnelle a Paris par techniciens certifies. Pose neuve, remplacement, mise aux normes. Devis gratuit au 09 72 12 41 41.",
    url: "https://porte-sectionnelle-paris.fr/installation-porte-sectionnelle-paris/",
    images: ["/images/portes/installation-porte-sectionnelle.webp"],
  },
};

export default function InstallationPorteSectionnelleParis() {
  const interventions = [
    {
      title: "Pose neuve complète",
      desc: "Installation intégrale de votre porte sectionnelle avec motorisation, rails, panneaux isolants et finitions. Notre équipe prend en charge le dimensionnement, la préparation du tableau et la mise en service dans la journée.",
      image: "/images/portes/installation-porte-sectionnelle.webp",
    },
    {
      title: "Remplacement de porte existante",
      desc: "Dépose de votre ancien équipement et installation d'une porte sectionnelle dernière génération. Nous adaptons le nouveau système à votre configuration existante sans travaux de maçonnerie supplémentaires.",
      image: "/images/portes/installation-porte-sectionnelle-multi.webp",
    },
    {
      title: "Installation sur mesure",
      desc: "Portes sectionnelles fabriquées aux dimensions exactes de votre ouverture. Choix des matériaux, coloris, hublots et accessoires pour un résultat parfaitement adapté à votre bâtiment.",
      image: "/images/portes/installation-porte-sectionnelle-industrielle.webp",
    },
    {
      title: "Mise aux normes et sécurisation",
      desc: "Mise en conformité de votre installation selon les normes EN 13241-1. Ajout de dispositifs anti-chute, cellules photoélectriques et systèmes de sécurité obligatoires.",
      image: "/images/portes/installation-porte-sectionnelle-garage.webp",
    },
  ];

  const faqs = [
    {
      q: "Qui appeler pour l'installation d'une porte sectionnelle a Paris ?",
      a: `Contactez notre equipe de poseurs agrees au ${siteConfig.telephone}. Avec plus de 25 ans d'experience en installation de portes sectionnelles a Paris, nous assurons la pose neuve, le remplacement et la mise aux normes dans tous les arrondissements. Devis gratuit et intervention rapide garantie.`,
    },
    {
      q: "Combien de temps dure l'installation d'une porte sectionnelle ?",
      a: "La pose d'une porte sectionnelle standard dure entre 4 et 6 heures pour une installation residentielle. Pour les configurations complexes — grande hauteur, ouverture non standard, motorisation connectee — comptez une journee complete. Nos techniciens preparent l'ensemble du materiel en amont pour optimiser le temps d'intervention sur site.",
    },
    {
      q: "Quel est le prix d'une installation de porte sectionnelle a Paris ?",
      a: "Le tarif depend des dimensions de l'ouverture, du type de panneaux choisis (simple ou double paroi), de la motorisation et des accessoires. Nous proposons un devis gratuit apres visite technique. La fourchette debute a partir de 1 200 euros pose comprise pour une porte sectionnelle residentielle standard avec motorisation.",
    },
    {
      q: "Faut-il un permis de construire pour installer une porte sectionnelle ?",
      a: "Dans la majorite des cas, aucun permis de construire n'est necessaire pour le remplacement d'une porte de garage existante. En revanche, si l'installation modifie l'aspect exterieur du batiment ou s'il s'agit d'une creation d'ouverture, une declaration prealable de travaux en mairie peut etre requise. Nos techniciens vous conseillent sur les demarches administratives specifiques a votre arrondissement parisien.",
    },
    {
      q: "Quelles marques de portes sectionnelles installez-vous ?",
      a: "Nous sommes poseurs agrees pour les principales marques du marche : Hormann, Novoferm, Crawford, Came et FAAC. Chaque fabricant propose des gammes adaptees a differents usages — residentiel, collectif ou industriel. Nous selectionnons la marque et le modele les plus pertinents en fonction de votre configuration technique et de votre budget.",
    },
    {
      q: "L'installation comprend-elle la motorisation et la telecommande ?",
      a: "Oui, nos installations incluent systematiquement la motorisation, la programmation des telecommandes (2 fournies de serie), le reglage des fins de course et le test complet des dispositifs de securite. Nous proposons egalement des options de connectivite pour piloter votre porte depuis un smartphone ou l'integrer a votre systeme domotique.",
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
            backgroundImage: "url('/images/portes/fond-installation-porte-sectionnelle.webp')",
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
              Installation Porte
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
              Pose professionnelle de <strong>portes sectionnelles</strong> pour particuliers et professionnels. Techniciens certifies, materiel premium, garantie decennale.
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
          <a href="/" style={{ color: "#FF6333" }}>Accueil</a>
          <span style={{ margin: "0 8px" }}>&gt;</span>
          <span><strong>Installation porte sectionnelle Paris</strong></span>
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
              src="/images/portes/installation-porte-sectionnelle.webp"
              alt="Installation porte sectionnelle Paris - technicien en intervention"
              title="Installation porte sectionnelle a Paris"
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
              Notre expertise
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
              Specialiste de la pose de <strong>portes sectionnelles</strong> a <strong>Paris</strong>
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
              Depuis plus de <strong>25 ans</strong>, notre entreprise accompagne les Parisiens dans le choix et l&apos;<strong>installation de portes sectionnelles</strong>. Que vous soyez proprietaire d&apos;un pavillon en banlieue, gestionnaire d&apos;un immeuble dans le centre de <strong>Paris</strong> ou responsable d&apos;un entrepot en zone industrielle, nous concevons des solutions adaptees a chaque configuration architecturale et a chaque contrainte technique.
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
              Nos techniciens certifies maitrisent toutes les etapes de la pose : prise de mesures precises, preparation du tableau, fixation des rails verticaux et horizontaux, assemblage des panneaux sandwich isolants, raccordement de la motorisation et programmation des telecommandes. Chaque <strong>installation</strong> respecte les normes europeennes EN 13241-1 et beneficie d&apos;une garantie decennale sur la pose.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              Nous travaillons exclusivement avec des fabricants reconnus — <strong>Hormann</strong>, <strong>Novoferm</strong>, <strong>Crawford</strong> — pour vous garantir des equipements durables, performants et esthetiques. Du premier rendez-vous technique a la reception des travaux, un interlocuteur unique vous accompagne pour un suivi sans faille.
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
            Nos prestations
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
            Nos types d&apos;<strong>installation de porte sectionnelle</strong> a <strong>Paris</strong>
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
              Pourquoi choisir une <strong>porte sectionnelle</strong> pour votre batiment a <strong>Paris</strong> ?
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
              La <strong>porte sectionnelle</strong> est devenue la reference en matiere de fermeture pour les garages et locaux professionnels a <strong>Paris</strong>. Son systeme d&apos;ouverture verticale permet un gain de place considerable par rapport aux portes basculantes ou battantes, un atout majeur dans les immeubles parisiens ou chaque metre carre compte. Les panneaux sandwich en acier double paroi offrent une isolation thermique et acoustique superieure, reduisant significativement les deperditions energetiques de votre batiment.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              En faisant appel a notre equipe pour l&apos;<strong>installation</strong> de votre <strong>porte sectionnelle</strong> a <strong>Paris</strong>, vous beneficiez d&apos;un accompagnement complet : visite technique gratuite, proposition de solutions adaptees a votre budget et a vos contraintes architecturales, pose realisee dans les regles de l&apos;art et service apres-vente reactif. Nous intervenons dans tous les arrondissements de <strong>Paris</strong> ainsi qu&apos;en proche banlieue pour des installations residentielles et professionnelles.
            </p>
          </div>
          <div style={{ flex: "1 1 50%" }}>
            <img
              src="/images/portes/installation-porte-sectionnelle-multi.webp"
              alt="Pose porte sectionnelle sur mesure a Paris"
              title="Pose sur mesure porte sectionnelle Paris"
              width={640}
              height={420}
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "420px",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section style={{ padding: "120px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#FF6333", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "16px", textAlign: "center" }}>Pourquoi nous choisir</span>
          <h2 style={{ fontSize: "42px", fontWeight: 600, color: "#000000", lineHeight: "48px", marginBottom: "60px", textAlign: "center" }}>
            Les avantages de notre <strong>installation de porte sectionnelle</strong> a <strong>Paris</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { num: "01", title: "Garantie decennale sur la pose", desc: "Chaque installation de porte sectionnelle realisee par nos equipes est couverte par une garantie decennale. Cette assurance protege votre investissement contre tout defaut de pose pendant 10 ans, conformement a la legislation francaise sur les travaux de construction." },
              { num: "02", title: "Visite technique gratuite et sans engagement", desc: "Avant toute intervention, un technicien se deplace gratuitement pour evaluer votre configuration : dimensions de l'ouverture, hauteur sous linteau, type de refoulement possible, alimentation electrique disponible. Le devis detaille est remis sous 48 heures." },
              { num: "03", title: "Pose en une journee, sans travaux lourds", desc: "Nos techniciens realisent l'installation complete de votre porte sectionnelle en une seule journee. La preparation du chantier, le montage, le raccordement electrique et la mise en service sont effectues sans intervention de maconnerie dans la majorite des cas." },
              { num: "04", title: "Marques premium exclusivement", desc: "Nous selectionnons uniquement des fabricants de premier plan — Hormann, Novoferm, Crawford — pour garantir la qualite, la durabilite et la performance de chaque porte sectionnelle installee. Aucun compromis sur les materiaux ni sur les composants." },
              { num: "05", title: "Intervention dans tout Paris et Ile-de-France", desc: "Notre reseau de techniciens couvre l'ensemble des 20 arrondissements de Paris ainsi que la petite et grande couronne. Que vous soyez a Montmartre, dans le Marais ou a La Defense, nous intervenons avec le meme niveau d'exigence et de rapidite." },
              { num: "06", title: "SAV reactif et pieces detachees en stock", desc: "Apres l'installation, notre service apres-vente reste a votre disposition. En cas de besoin, un technicien intervient sous 24 heures avec les pieces detachees necessaires. Nous assurons le suivi de votre equipement sur toute sa duree de vie." },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "#F6F7F9", borderRadius: "16px", padding: "32px", border: "1px solid #E5E7EB" }}>
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
      <section style={{ padding: "120px 30px", backgroundColor: "#F6F7F9" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center" }}>
          <div style={{ flex: "1 1 50%" }}>
            <img
              src="/images/portes/installation-porte-sectionnelle-industrielle.webp"
              alt="Installation porte sectionnelle industrielle Paris"
              title="Porte sectionnelle industrielle installation Paris"
              width={640}
              height={420}
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "16px" }}
            />
          </div>
          <div style={{ flex: "1 1 50%" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "24px" }}>
              Une <strong>installation</strong> de <strong>porte sectionnelle</strong> a <strong>Paris</strong> conforme aux normes europeennes
            </h2>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", marginBottom: "16px" }}>
              Chaque <strong>installation de porte sectionnelle</strong> realisee par nos equipes a <strong>Paris</strong> respecte scrupuleusement la norme EN 13241-1 relative aux portes et portails industriels, commerciaux et residentiels. Cette conformite n&apos;est pas une option : elle conditionne la validite de votre assurance et la securite des utilisateurs au quotidien. Nos techniciens, forts de plus de <strong>25 ans</strong> de metier, verifient systematiquement le bon fonctionnement des dispositifs anti-chute, des cellules photoelectriques de detection d&apos;obstacles et du systeme de deverrouillage manuel d&apos;urgence.
            </p>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", marginBottom: "24px" }}>
              Au-dela de la securite, une pose professionnelle garantit la longevite de votre equipement. Un rail mal aligne, un ressort mal calibre ou un panneau mal ajuste provoquent une usure prematuree de l&apos;ensemble du mecanisme. En confiant votre projet a un <strong>installateur agree</strong>, vous protegez votre investissement et vous assurez des annees de fonctionnement sans souci. Contactez-nous au <strong>{siteConfig.telephone}</strong> pour planifier votre <strong>installation</strong>.
            </p>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "12px", backgroundColor: "#FF6333", padding: "14px 32px", borderRadius: "50px", fontSize: "16px", fontWeight: 600, color: "#FFFFFF", }}>
              Demander un devis gratuit
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
              { href: "/depannage-porte-sectionnelle-paris/", label: "Depannage", image: "/images/portes/depannage-porte-sectionnelle.webp" },
              { href: "/reparation-porte-sectionnelle-paris/", label: "Reparation", image: "/images/portes/reparation-porte-sectionnelle.webp" },
              { href: "/entretien-porte-sectionnelle-paris/", label: "Entretien", image: "/images/portes/entretien-porte-sectionnelle.webp" },
              { href: "/motorisation-porte-sectionnelle-paris/", label: "Motorisation", image: "/images/portes/moteur-porte-sectionnelle.webp" },
              { href: "/porte-sectionnelle-industrielle-paris/", label: "Industrielle", image: "/images/portes/porte-sectionnelle-industrielle.webp" },
            ].map((link, i) => (
              <a key={i} href={link.href} style={{ display: "block", borderRadius: "16px", overflow: "hidden", backgroundColor: "#F6F7F9", border: "1px solid #E5E7EB", textDecoration: "none" }}>
                <img src={link.image} alt={link.label + " porte sectionnelle Paris"} title={link.label} width={400} height={180} loading="lazy" decoding="async" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                <div style={{ padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}><span style={{ fontSize: "16px", fontWeight: 600, color: "#000000", }}>{link.label}</span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#FF6333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
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
            <strong>Installation porte sectionnelle</strong> dans toute la region parisienne
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
            Avis clients — <strong>Installation porte sectionnelle</strong> a <strong>Paris</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { name: "Laurent M.", location: "Paris 15e", color: "#FF6333", text: "Installation impeccable de notre porte sectionnelle dans le 15e. L'equipe a adapte les dimensions au millimetre pres malgre notre linteau bas. Motorisation Somfy ultra silencieuse, on ne l'entend meme pas depuis le salon." },
              { name: "Catherine D.", location: "Boulogne-Billancourt", color: "#2563EB", text: "Pose realisee en une journee comme promis. Le technicien a pris le temps d'expliquer le fonctionnement de la telecommande et du deverrouillage manuel. Porte Hormann tres bien isolee, on sent la difference de temperature dans le garage." },
              { name: "Marc P.", location: "Paris 8e", color: "#10B981", text: "Remplacement de notre vieille porte basculante par une sectionnelle motorisee. Le resultat est bluffant, l'ouverture est fluide et silencieuse. L'installateur a meme adapte le nouveau systeme a notre ancien cadre sans travaux supplementaires." },
              { name: "Nathalie V.", location: "Neuilly-sur-Seine", color: "#8B5CF6", text: "Tres satisfaite de l'installation de notre porte sectionnelle avec hublots. La pose sur mesure s'est parfaitement integree a la facade de notre maison. Equipe ponctuelle et soigneuse, chantier laisse propre." },
              { name: "Philippe R.", location: "Paris 12e", color: "#F59E0B", text: "Installation dans notre copropriete du 12e arrondissement. Le poseur a gere les contraintes d'acces etroit avec professionnalisme. La porte fonctionne parfaitement depuis six mois, aucun souci a signaler. Je recommande." },
              { name: "Isabelle G.", location: "Levallois-Perret", color: "#EF4444", text: "Deuxieme installation que nous confions a cette equipe apres celle de notre commerce. Travail rapide, propre et conforme au devis initial. La garantie decennale sur la pose nous a rassures pour cet investissement important." },
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
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#FF6333", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "16px", textAlign: "center" }}>Questions frequentes</span>
          <h2 style={{ fontSize: "42px", fontWeight: 600, color: "#000000", lineHeight: "48px", marginBottom: "60px", textAlign: "center" }}>
            Tout savoir sur l&apos;<strong>installation de porte sectionnelle</strong> a <strong>Paris</strong>
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
        name: "Installation de porte sectionnelle a Paris",
        provider: { "@type": "LocalBusiness", name: "Porte Sectionnelle Paris", telephone: "09 72 12 41 41" },
        areaServed: { "@type": "City", name: "Paris" },
        description: "Installation de porte sectionnelle a Paris par des techniciens certifies. Pose neuve, remplacement, mise aux normes. Devis gratuit au 09 72 12 41 41.",
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://porte-sectionnelle-paris.fr/" },
          { "@type": "ListItem", position: 2, name: "Installation", item: "https://porte-sectionnelle-paris.fr/installation-porte-sectionnelle-paris/" },
        ],
      }) }} />

      {/* Zones d'intervention installation — subcity pages */}
      <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#FF6333", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "12px" }}>Installation par zone</span>
          <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "32px" }}>
            <strong>Installation porte sectionnelle</strong> — nos zones d&apos;intervention
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {installationZones.map((iz, i) => (
              <a
                key={i}
                href={`/${iz.slug}/`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#F6F7F9",
                  borderRadius: "12px",
                  padding: "18px 22px",
                  textDecoration: "none",
                  border: "1px solid #E5E7EB",
                }}
              >
                <div>
                  <span style={{ fontSize: "15px", fontWeight: 600, color: "#000000", display: "block" }}>
                    Installation {iz.name}
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: 400, color: "#999999" }}>
                    {iz.department}
                  </span>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#FF6333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTAForm heading="Un projet d'installation a Paris ?" subtitle="Demandez votre releve de cotes gratuit. Nos poseurs agrees vous proposent une solution sur mesure avec pose en une journee et garantie decennale." />
      <Footer />
    </>
  );
}
