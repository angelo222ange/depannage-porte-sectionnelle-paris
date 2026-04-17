import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAForm from "@/components/CTAForm";
import { siteConfig, entretienZones, zones, getZoneBySlug } from "@/config/site";

export const metadata: Metadata = {
  title: "Entretien Porte Sectionnelle Paris | Maintenance",
  description:
    "Entretien et maintenance porte sectionnelle a Paris. Contrat annuel, visite preventive, graissage, reglage ressorts. Devis gratuit au 09 72 12 41 41.",
  alternates: {
    canonical: "https://depannage-porte-sectionnelle-paris.fr/entretien-porte-sectionnelle-paris/",
  },
  openGraph: {
    title: "Entretien Porte Sectionnelle Paris | Maintenance",
    description: "Entretien et maintenance porte sectionnelle a Paris. Contrat annuel, visite preventive, graissage, reglage ressorts. Devis gratuit au 09 72 12 41 41.",
    url: "https://depannage-porte-sectionnelle-paris.fr/entretien-porte-sectionnelle-paris/",
    images: ["/images/portes/entretien-porte-sectionnelle.webp"],
  },
};

export default function EntretienPorteSectionnelleParis() {
  const interventions = [
    {
      title: "Visite de maintenance preventive",
      desc: "Inspection complete de votre porte sectionnelle : verification des ressorts et de leur tension, controle des cables et galets, test de la motorisation, graissage des axes et charnieres, nettoyage des rails de guidage. Un rapport detaille vous est remis apres chaque visite.",
      image: "/images/portes/entretien-porte-sectionnelle.webp",
    },
    {
      title: "Contrat d'entretien annuel",
      desc: "Souscrivez un contrat de maintenance pour beneficier d'une ou deux visites programmees par an, d'une priorite en cas de depannage et de tarifs preferentiels sur les pieces de rechange. La formule ideale pour prolonger la duree de vie de votre equipement sans y penser.",
      image: "/images/portes/hero-entretien-porte-sectionnelle.webp",
    },
    {
      title: "Mise en conformite securite",
      desc: "Verification et mise a niveau des dispositifs de securite obligatoires selon la norme EN 13241-1 : cellules photoelectriques, systeme anti-chute, barre palpeuse, deverrouillage manuel d'urgence. Indispensable pour les assurances et les ERP.",
      image: "/images/portes/installation-porte-sectionnelle.webp",
    },
    {
      title: "Remplacement preventif de pieces",
      desc: "Lors de chaque visite, nous identifions les composants en fin de vie — ressorts fatigues, joints uses, galets aplatis — et les remplacons avant qu'ils ne provoquent une panne. Cette approche proactive reduit considerablement les risques d'immobilisation imprevue.",
      image: "/images/portes/moteur-porte-sectionnelle.webp",
    },
  ];

  const faqs = [
    {
      q: "Qui appeler pour l'entretien d'une porte sectionnelle a Paris ?",
      a: `Pour programmer l'entretien de votre porte sectionnelle a Paris, appelez le ${siteConfig.telephone}. Nos techniciens specialises realisent des visites de maintenance preventive dans tous les arrondissements. Contrat annuel disponible avec priorite depannage et tarifs preferentiels sur les pieces.`,
    },
    {
      q: "A quelle frequence faut-il entretenir une porte sectionnelle ?",
      a: "Pour une utilisation residentielle standard (3 a 5 cycles par jour), un entretien annuel suffit. Pour les installations professionnelles a forte frequentation — parkings d'immeubles, quais de chargement, ateliers — nous recommandons deux visites par an, idealement au printemps et a l'automne, pour anticiper les effets des variations de temperature sur les ressorts.",
    },
    {
      q: "Que comprend une visite d'entretien de porte sectionnelle ?",
      a: "Notre visite d'entretien couvre 18 points de controle : verification de la tension des ressorts, inspection des cables en acier, controle de l'usure des galets, lubrification de tous les axes et charnieres, nettoyage des rails de guidage, test de la motorisation et des capteurs de securite, verification de l'equilibrage du tablier et controle des joints peripheriques d'etancheite.",
    },
    {
      q: "Combien coute un contrat d'entretien annuel ?",
      a: "Le tarif d'un contrat d'entretien annuel depend du type de porte (residentielle ou industrielle) et du nombre de visites incluses. Les contrats residentiels debutent a partir de 149 euros par an pour une visite annuelle complete. Les formules professionnelles avec deux visites et priorite depannage sont proposees a partir de 249 euros par an.",
    },
    {
      q: "L'entretien est-il obligatoire pour une porte sectionnelle motorisee ?",
      a: "Pour les particuliers, l'entretien n'est pas legalement obligatoire mais fortement recommande pour la securite et la garantie. En revanche, pour les portes motorisees installees dans les coproprietes et les etablissements recevant du public (ERP), la maintenance periodique est une obligation legale. Nous delivrons une attestation de conformite apres chaque visite.",
    },
    {
      q: "Un entretien regulier prolonge-t-il vraiment la duree de vie de la porte ?",
      a: "Un entretien professionnel annuel peut doubler la duree de vie de votre porte sectionnelle, la faisant passer de 10-12 ans a plus de 20 ans. Les ressorts entretenus conservent leur tension optimale plus longtemps, les galets lubrifies s'usent moins vite et les defauts sont detectes avant de provoquer des degats en cascade sur d'autres composants.",
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
            backgroundImage: "url('/images/portes/hero-entretien-porte-sectionnelle.webp')",
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
              Entretien Porte
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
              Maintenance preventive et contrats d&apos;<strong>entretien</strong> pour garantir la longevite et la securite de votre <strong>porte sectionnelle</strong>. Interventions programmees dans tout <strong>Paris</strong>.
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
          <span><strong>Entretien porte sectionnelle Paris</strong></span>
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
              src="/images/portes/entretien-porte-sectionnelle.webp"
              alt="Entretien porte sectionnelle Paris - technicien effectuant une maintenance"
              title="Entretien porte sectionnelle Paris"
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
              Maintenance preventive
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
              <strong>Entretien</strong> regulier de votre <strong>porte sectionnelle</strong> a <strong>Paris</strong>
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
              Une <strong>porte sectionnelle</strong> est un equipement mecanique sollicite quotidiennement. Avec une moyenne de 4 cycles par jour pour un garage residentiel, cela represente pres de 1 500 ouvertures et fermetures par an. Sans <strong>entretien</strong> regulier, les ressorts perdent leur tension, les cables s&apos;effilochent, les galets s&apos;usent et la motorisation force davantage, accelerant l&apos;usure generale du systeme.
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
              Nos techniciens, forts de plus de <strong>25 ans</strong> d&apos;experience sur les <strong>portes sectionnelles</strong> a <strong>Paris</strong>, realisent un <strong>entretien</strong> methodique en 18 points de controle. Chaque composant est inspecte, lubrifie et ajuste pour garantir un fonctionnement optimal et silencieux. Les joints peripheriques sont verifies pour maintenir l&apos;etancheite et l&apos;isolation thermique de votre fermeture.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              L&apos;<strong>entretien</strong> preventif est aussi une obligation legale pour les portes motorisees dans les etablissements recevant du public (ERP) et les coproprietes. Nous delivrons une attestation de conformite apres chaque intervention, document indispensable pour votre assurance et la responsabilite du gestionnaire du batiment.
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
            Nos formules
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
            Nos prestations d&apos;<strong>entretien de porte sectionnelle</strong> a <strong>Paris</strong>
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
              A quelle frequence entretenir sa <strong>porte sectionnelle</strong> a <strong>Paris</strong> ?
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
              Pour une <strong>porte sectionnelle</strong> residentielle a usage standard (3 a 5 cycles par jour), un <strong>entretien</strong> annuel suffit a maintenir l&apos;ensemble du mecanisme en parfait etat. Pour les installations professionnelles soumises a une utilisation intensive — parkings d&apos;immeubles, quais de chargement, ateliers — nous recommandons deux visites par an, idealement au printemps et a l&apos;automne, pour preparer l&apos;equipement aux variations de temperature qui affectent la tension des ressorts.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              Entre deux visites professionnelles, quelques gestes simples prolongent la duree de vie de votre porte : nettoyage des rails a l&apos;aide d&apos;un chiffon sec, verification visuelle des cables, test du systeme de deverrouillage manuel. En cas de bruit anormal ou de ralentissement du mouvement, contactez-nous au <strong>{siteConfig.telephone}</strong> sans attendre la prochaine visite programmee. Un <strong>entretien</strong> bien suivi peut doubler la duree de vie de votre <strong>porte sectionnelle</strong>.
            </p>
          </div>
          <div style={{ flex: "1 1 50%" }}>
            <img
              src="/images/portes/hero-entretien-porte-sectionnelle.webp"
              alt="Maintenance preventive porte sectionnelle Paris"
              title="Maintenance porte sectionnelle Paris"
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
            Les avantages de notre <strong>entretien de porte sectionnelle</strong> a <strong>Paris</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { num: "01", title: "18 points de controle systematiques", desc: "Chaque visite d'entretien suit un protocole rigoureux de 18 verifications couvrant l'integralite des composants mecaniques, electriques et de securite de votre porte sectionnelle. Rien n'est laisse au hasard, du ressort de torsion au joint d'etancheite peripherique." },
              { num: "02", title: "Rapport detaille apres chaque visite", desc: "A l'issue de chaque intervention, vous recevez un rapport complet indiquant l'etat de chaque composant, les operations effectuees et les preconisations pour la prochaine visite. Ce document sert egalement de justificatif pour votre assurance et votre syndic de copropriete." },
              { num: "03", title: "Priorite depannage pour les clients sous contrat", desc: "Les detenteurs d'un contrat d'entretien beneficient d'une prise en charge prioritaire en cas de panne. Votre dossier technique est deja enregistre dans notre systeme, ce qui accelere le diagnostic et l'intervention. Un avantage precieux en situation d'urgence." },
              { num: "04", title: "Tarifs preferentiels sur les pieces", desc: "Les clients sous contrat de maintenance beneficient de remises sur les pieces de rechange necessaires lors des visites d'entretien. Les ressorts, galets, cables et autres composants d'usure sont factures au tarif prefere, reduisant significativement le cout de possession de votre equipement." },
              { num: "05", title: "Attestation de conformite officielle", desc: "Apres chaque visite d'entretien, nous delivrons une attestation de conformite attestant que votre porte sectionnelle respecte les normes de securite en vigueur (EN 13241-1). Ce document est exige par les assureurs et obligatoire pour les ERP et les coproprietes." },
              { num: "06", title: "Duree de vie doublee de votre equipement", desc: "Un entretien professionnel regulier prolonge la duree de vie de votre porte sectionnelle de 10-12 ans a plus de 20 ans. Les couts d'entretien annuels representent une fraction du prix d'un remplacement premature, faisant du contrat de maintenance un investissement rentable des la premiere annee." },
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
              src="/images/portes/installation-porte-sectionnelle.webp"
              alt="Entretien preventif porte sectionnelle Paris"
              title="Entretien preventif porte sectionnelle Paris"
              width={640}
              height={420}
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "16px" }}
            />
          </div>
          <div style={{ flex: "1 1 50%" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "24px" }}>
              <strong>Entretien</strong> preventif <strong>porte sectionnelle Paris</strong> : l&apos;investissement qui vous fait economiser
            </h2>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", marginBottom: "16px" }}>
              Le cout d&apos;un <strong>entretien</strong> annuel de <strong>porte sectionnelle</strong> a <strong>Paris</strong> represente en moyenne 5 a 8 % du prix d&apos;un remplacement complet. C&apos;est un calcul simple : en investissant dans la maintenance preventive, vous evitez les pannes imprevues, les reparations d&apos;urgence majorees et le remplacement premature de votre equipement. Sur <strong>25 ans</strong>, un contrat d&apos;<strong>entretien</strong> regulier vous fait economiser plusieurs milliers d&apos;euros par rapport a une approche curative.
            </p>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", marginBottom: "24px" }}>
              Au-dela de l&apos;aspect financier, un equipement bien entretenu fonctionne en silence, consomme moins d&apos;energie et garantit la securite de tous les utilisateurs. Les ressorts correctement tendus, les galets lubrifies et les capteurs de securite testes eliminant tout risque de dysfonctionnement dangereux. Appelez le <strong>{siteConfig.telephone}</strong> pour souscrire un contrat d&apos;<strong>entretien</strong> adapte a votre installation.
            </p>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "12px", backgroundColor: "#E63946", padding: "14px 32px", borderRadius: "50px", fontSize: "16px", fontWeight: 600, color: "#FFFFFF", }}>
              Souscrire un contrat d&apos;entretien
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
              { href: "/motorisation-porte-sectionnelle-paris/", label: "Motorisation", image: "/images/portes/moteur-porte-sectionnelle.webp" },
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

      {/* Zones d'intervention — entretien subcity */}
      <section style={{ padding: "80px 30px", backgroundColor: "#F6F7F9" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#E63946", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "12px" }}>Zones d&apos;intervention</span>
          <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "32px" }}>
            <strong>Entretien porte sectionnelle</strong> dans toute la region parisienne
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
            {entretienZones.map((ez, i) => {
              const parentZone = getZoneBySlug(ez.zoneSlug);
              const postalCode = parentZone?.postalCode || "";
              return (
                <a key={i} href={`/${ez.slug}/`} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#FFFFFF", borderRadius: "12px", padding: "14px 18px", textDecoration: "none", border: "1px solid #E5E7EB" }}>
                  <div>
                    <span style={{ fontSize: "14px", fontWeight: 500, color: "#1A1A1A", display: "block" }}>Entretien {ez.name}</span>
                    <span style={{ fontSize: "11px", fontWeight: 400, color: "#999999" }}>{postalCode}</span>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="#E63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#E63946", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "12px", textAlign: "center" }}>Temoignages</span>
          <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "40px", textAlign: "center" }}>
            Avis clients — <strong>Entretien porte sectionnelle</strong> a <strong>Paris</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { name: "Patrick L.", location: "Paris 16e", color: "#E63946", text: "Contrat d'entretien annuel souscrit il y a trois ans. Le technicien vient chaque automne, verifie les 18 points de controle et regle les ressorts. Notre porte sectionnelle fonctionne comme au premier jour. Investissement intelligent." },
              { name: "Corinne A.", location: "Paris 9e", color: "#2563EB", text: "Premiere visite d'entretien sur notre porte Hormann. Le technicien a detecte un galet fissure que je n'avais pas remarque et l'a remplace preventivement. Rapport detaille remis a notre syndic. Travail serieux et methodique." },
              { name: "Stephane W.", location: "Argenteuil", color: "#10B981", text: "Entretien de nos trois portes sectionnelles d'entrepot. L'equipe a graisse l'ensemble des mecanismes, regle la tension des ressorts et verifie les capteurs de securite. Tout est consigne dans un rapport officiel. Parfait pour notre conformite." },
              { name: "Dominique B.", location: "Paris 20e", color: "#8B5CF6", text: "La visite de maintenance a revele que nos joints peripheriques etaient uses. Remplacement effectue dans la foulee avec des pieces d'origine. L'isolation du garage est bien meilleure depuis, on sent la difference en hiver." },
              { name: "Christelle N.", location: "Versailles", color: "#F59E0B", text: "Tres contente du contrat de maintenance. La priorite depannage m'a ete utile quand le moteur a eu un probleme : intervention le jour meme au lieu de trois jours d'attente. Le tarif preferentiel sur les pieces est un vrai plus." },
              { name: "Yves G.", location: "Ivry-sur-Seine", color: "#EF4444", text: "Entretien complet de notre porte sectionnelle de copropriete. Le technicien a pris le temps de tout verifier, y compris le systeme anti-chute et les cellules photoelectriques. Attestation de conformite delivree pour notre assurance." },
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
            Tout savoir sur l&apos;<strong>entretien de porte sectionnelle</strong> a <strong>Paris</strong>
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
        name: "Entretien de porte sectionnelle a Paris",
        provider: { "@type": "LocalBusiness", name: "Depannage Porte Sectionnelle Paris", telephone: "09 72 12 41 41" },
        areaServed: { "@type": "City", name: "Paris" },
        description: "Entretien et maintenance de porte sectionnelle a Paris. Contrat annuel, visite preventive, graissage, reglage ressorts. Devis gratuit au 09 72 12 41 41.",
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://depannage-porte-sectionnelle-paris.fr/" },
          { "@type": "ListItem", position: 2, name: "Entretien", item: "https://depannage-porte-sectionnelle-paris.fr/entretien-porte-sectionnelle-paris/" },
        ],
      }) }} />

      <CTAForm heading="Programmez l'entretien de votre porte sectionnelle" subtitle="Souscrivez un contrat de maintenance adapte a votre usage. Visites preventives, graissage, reglages et controle securite par nos techniciens certifies." />
      <Footer />
    </>
  );
}
