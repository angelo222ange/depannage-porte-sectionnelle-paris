import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAForm from "@/components/CTAForm";
import { siteConfig, depannageZones } from "@/config/site";

export const metadata: Metadata = {
  title: "Depannage Porte Sectionnelle Paris | Urgence 24h/24",
  description:
    "Depannage porte sectionnelle Paris, urgence 24h/24 7j/7. Technicien sur place en 30 min. Panne moteur, ressort casse, porte bloquee. Tel : 09 72 12 41 41.",
  alternates: {
    canonical: "https://porte-sectionnelle-paris.fr/depannage-porte-sectionnelle-paris/",
  },
  openGraph: {
    title: "Depannage Porte Sectionnelle Paris | Urgence 24h/24",
    description: "Depannage porte sectionnelle Paris en urgence 24h/24, 7j/7. Technicien sur place en 30 minutes. Appelez le 09 72 12 41 41.",
    url: "https://porte-sectionnelle-paris.fr/depannage-porte-sectionnelle-paris/",
    images: ["/images/portes/depannage-porte-sectionnelle.webp"],
  },
};

export default function DepannagePorteSectionnelleParis() {
  const interventions = [
    {
      title: "Porte sectionnelle bloquee",
      desc: "Votre porte ne monte plus ou reste coincee a mi-course ? Nos techniciens diagnostiquent rapidement l'origine du blocage — cable deraille, ressort casse, rail deforme — et remettent votre equipement en fonctionnement dans l'heure.",
      image: "/images/portes/depannage-porte-sectionnelle.webp",
    },
    {
      title: "Panne de motorisation",
      desc: "Le moteur ne repond plus, fait un bruit anormal ou se declenche de maniere intempestive ? Nous intervenons sur toutes les marques de motorisation (Somfy, Hormann, Marantec, Nice) pour reparer ou remplacer le bloc moteur defaillant.",
      image: "/images/portes/hero-depannage-porte-sectionnelle.webp",
    },
    {
      title: "Ressort de torsion casse",
      desc: "La rupture d'un ressort de torsion rend votre porte inutilisable et potentiellement dangereuse. Notre equipe dispose des ressorts de remplacement en stock pour une reparation immediate, avec reglage de la tension et test complet de securite.",
      image: "/images/portes/reparation-porte-sectionnelle.webp",
    },
    {
      title: "Panneau endommage apres choc",
      desc: "Un vehicule a percute votre porte sectionnelle ? Nous remplacons les panneaux abimes a l'identique, sans necessiter le changement complet de la porte. Prise en charge possible avec votre assurance habitation.",
      image: "/images/portes/hero-reparation-porte-sectionnelle.webp",
    },
  ];

  const faqs = [
    {
      q: "Qui appeler pour le depannage d'une porte sectionnelle a Paris ?",
      a: `Pour un depannage rapide de votre porte sectionnelle a Paris, appelez le ${siteConfig.telephone}. Notre service d'urgence fonctionne 24 heures sur 24, 7 jours sur 7, y compris les jours feries. Un technicien est depeche sur place en moins de 30 minutes dans tous les arrondissements de Paris.`,
    },
    {
      q: "Quel est le delai d'intervention pour un depannage en urgence ?",
      a: "Nos techniciens sont positionnes dans differents secteurs de Paris pour garantir un temps d'intervention inferieur a 30 minutes. En heure creuse, le delai moyen est de 20 minutes. Le week-end et la nuit, comptez entre 30 et 45 minutes selon votre localisation dans la capitale.",
    },
    {
      q: "Combien coute un depannage de porte sectionnelle a Paris ?",
      a: "Le tarif d'un depannage depend de la nature de la panne et des pieces a remplacer. Le deplacement et le diagnostic sont inclus dans le forfait d'intervention. Nous remettons systematiquement un devis transparent avant de commencer les travaux — aucune surprise sur la facture finale. Les interventions debutent a partir de 89 euros pour un deblocage simple.",
    },
    {
      q: "Ma porte sectionnelle fait un bruit anormal, est-ce une urgence ?",
      a: "Un bruit inhabituel — grincement metallique, claquement, vibration excessive — est souvent le signe d'un composant en fin de vie : galet use, cable effiloche ou ressort fatigue. Bien que ce ne soit pas toujours une urgence immediate, il est fortement recommande de faire intervenir un technicien rapidement pour eviter une panne complete et des reparations plus couteuses.",
    },
    {
      q: "Intervenez-vous sur toutes les marques de portes sectionnelles ?",
      a: "Oui, nos techniciens sont formes pour intervenir sur toutes les marques du marche : Hormann, Novoferm, Crawford, Came, FAAC, Somfy, Marantec, Nice. Nous disposons de pieces detachees compatibles dans nos vehicules pour la majorite des modeles residentiels et industriels.",
    },
    {
      q: "Que faire si ma porte sectionnelle reste bloquee en position ouverte ?",
      a: "Ne tentez pas de forcer la fermeture manuellement, surtout si la porte est motorisee. Coupez l'alimentation electrique du moteur, securisez la zone sous la porte et contactez immediatement notre service de depannage au " + siteConfig.telephone + ". Un technicien vous guidera par telephone pour une mise en securite provisoire en attendant son arrivee.",
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
            backgroundImage: "url('/images/portes/hero-depannage-porte-sectionnelle-fond.webp')",
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
              Depannage Porte
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
              Intervention d&apos;urgence 24h/24, 7j/7. Technicien a votre porte en 30 minutes partout a <strong>Paris</strong> et en Ile-de-France.
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
              Urgence — {siteConfig.telephone}
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
          <span><strong>Depannage porte sectionnelle Paris</strong></span>
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
              src="/images/portes/depannage-porte-sectionnelle.webp"
              alt="Depannage porte sectionnelle Paris - intervention urgente"
              title="Depannage urgent porte sectionnelle Paris"
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
              Intervention rapide
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
              <strong>Depannage</strong> express de votre <strong>porte sectionnelle</strong> a <strong>Paris</strong>
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
              Une <strong>porte sectionnelle</strong> en panne represente un probleme de securite et un blocage immediat pour votre quotidien. Que votre garage soit inaccessible, que votre local commercial ne puisse plus ouvrir ou que votre entrepot soit expose, chaque minute compte. Notre service de <strong>depannage</strong> a <strong>Paris</strong> fonctionne 24 heures sur 24, 365 jours par an, avec des techniciens positionnes dans chaque secteur de la capitale pour garantir un temps d&apos;intervention inferieur a 30 minutes.
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
              Nos vehicules sont equipes de pieces detachees courantes — ressorts, cables, galets, moteurs — pour resoudre la majorite des pannes en une seule visite. Le diagnostic est precis : nous identifions la cause exacte du dysfonctionnement avant toute intervention et vous presentons un devis transparent avant de commencer les travaux. Pas de surprise, pas de frais caches.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              Fort de plus de <strong>25 ans</strong> d&apos;experience, notre reseau de depanneurs couvre l&apos;ensemble des arrondissements parisiens et les communes limitrophes. Nous intervenons sur toutes les marques et tous les modeles de <strong>portes sectionnelles</strong>, qu&apos;il s&apos;agisse d&apos;installations residentielles ou de portes industrielles grand format.
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
            Pannes courantes
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
            Nos interventions de <strong>depannage de porte sectionnelle</strong> a <strong>Paris</strong>
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
              Comment reagir face a une panne de <strong>porte sectionnelle</strong> a <strong>Paris</strong> ?
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
              Lorsque votre <strong>porte sectionnelle</strong> tombe en panne, le premier reflexe est de ne pas forcer le mecanisme. Tenter de manipuler manuellement une porte dont le ressort est casse ou dont le cable a lache peut aggraver les degats et provoquer des blessures. Coupez l&apos;alimentation electrique du moteur si la porte fait des bruits inhabituels, et contactez immediatement un professionnel qualifie.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              Notre equipe de <strong>depannage</strong> a <strong>Paris</strong> est joignable au <strong>{siteConfig.telephone}</strong>, de jour comme de nuit. Un technicien vous guide par telephone pour securiser votre installation en attendant son arrivee. Grace a notre maillage de techniciens repartis dans la capitale, l&apos;intervention est rapide et le probleme generalement resolu dans l&apos;heure. Nous fournissons systematiquement une facture detaillee et une garantie sur les pieces remplacees.
            </p>
          </div>
          <div style={{ flex: "1 1 50%" }}>
            <img
              src="/images/portes/hero-reparation-porte-sectionnelle.webp"
              alt="Technicien depannage porte sectionnelle Paris"
              title="Technicien intervention porte sectionnelle Paris"
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
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#FF6333", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "16px", textAlign: "center" }}>Pourquoi nous choisir</span>
          <h2 style={{ fontSize: "42px", fontWeight: 600, color: "#000000", lineHeight: "48px", marginBottom: "60px", textAlign: "center" }}>
            Les avantages de notre <strong>depannage de porte sectionnelle</strong> a <strong>Paris</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { num: "01", title: "Disponibilite 24h/24, 7j/7", desc: "Notre service de depannage ne connait pas de jour de repos. De nuit, le week-end ou un jour ferie, un technicien qualifie est toujours disponible pour intervenir sur votre porte sectionnelle en panne a Paris. Une astreinte permanente garantit une reponse immediate a chaque appel." },
              { num: "02", title: "Intervention en moins de 30 minutes", desc: "Nos techniciens sont strategiquement positionnes dans differents arrondissements de Paris. Cette organisation nous permet de garantir un temps d'arrivee inferieur a 30 minutes, quel que soit votre emplacement dans la capitale ou en proche banlieue." },
              { num: "03", title: "Diagnostic transparent et devis sur place", desc: "Avant toute intervention, notre technicien identifie precisement la cause de la panne et vous remet un devis detaille. Aucun travail n'est engage sans votre accord prealable. Cette transparence totale elimine les mauvaises surprises sur la facture finale." },
              { num: "04", title: "Pieces detachees en stock dans nos vehicules", desc: "Chaque vehicule d'intervention est equipe d'un stock de pieces detachees courantes : ressorts de torsion, cables en acier, galets, moteurs Somfy et Hormann, panneaux de remplacement. La majorite des pannes sont resolues en une seule visite, sans besoin de revenir." },
              { num: "05", title: "Garantie pieces et main-d'oeuvre", desc: "Toutes les pieces remplacees lors d'un depannage sont couvertes par une garantie de 12 mois minimum. La main-d'oeuvre est egalement garantie. Si le meme probleme se reproduit dans le delai de garantie, nous reintervenons gratuitement." },
              { num: "06", title: "Plus de 25 ans d'experience toutes marques", desc: "Nos depanneurs maitrisent l'ensemble des marques presentes sur le marche : Hormann, Novoferm, Crawford, Came, FAAC, Somfy, Marantec. Cette expertise multi-marque acquise en 25 ans de terrain nous permet de diagnostiquer et resoudre les pannes les plus complexes." },
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
              src="/images/portes/hero-depannage-porte-sectionnelle.webp"
              alt="Depannage urgent porte sectionnelle Paris - reparation express"
              title="Depannage express porte sectionnelle Paris"
              width={640}
              height={420}
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "16px" }}
            />
          </div>
          <div style={{ flex: "1 1 50%" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "24px" }}>
              Les pannes les plus frequentes sur les <strong>portes sectionnelles</strong> a <strong>Paris</strong>
            </h2>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", marginBottom: "16px" }}>
              En <strong>25 ans</strong> de <strong>depannage de portes sectionnelles</strong> a <strong>Paris</strong>, nous avons identifie les pannes recurrentes qui affectent ces equipements. La rupture de ressort de torsion represente pres de 40 % de nos interventions : ce composant supporte l&apos;integralite du poids du tablier et sa duree de vie est limitee a environ 15 000 cycles. Les pannes de motorisation — carte electronique grillee, condensateur defaillant, engrenage use — constituent le deuxieme motif d&apos;appel le plus frequent.
            </p>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", marginBottom: "24px" }}>
              Les cables en acier qui se dereglent ou cassent, les galets aplatis provoquant un fonctionnement bruyant et les panneaux endommages suite a un choc de vehicule completent le tableau des pannes courantes. Quel que soit le probleme rencontre, notre equipe dispose de l&apos;expertise et du materiel pour intervenir efficacement. Appelez le <strong>{siteConfig.telephone}</strong> pour un <strong>depannage</strong> immediat.
            </p>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "12px", backgroundColor: "#FF6333", padding: "14px 32px", borderRadius: "50px", fontSize: "16px", fontWeight: 600, color: "#FFFFFF", }}>
              Appeler un technicien maintenant
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
            <strong>Depannage porte sectionnelle</strong> dans toute la region parisienne
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
            Avis clients — <strong>Depannage porte sectionnelle</strong> a <strong>Paris</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { name: "Sophie R.", location: "Paris 11e", color: "#FF6333", text: "Porte sectionnelle bloquee un dimanche soir. Appel au 09 72 12 41 41, technicien sur place en 25 minutes boulevard Voltaire. Ressort casse remplace dans l'heure. Service exceptionnel." },
              { name: "Thierry B.", location: "Paris 17e", color: "#2563EB", text: "Le moteur de notre porte sectionnelle s'est mis a faire un bruit terrible a 22h. Le depanneur est arrive rapidement rue de Tocqueville, a diagnostique un condensateur grille et l'a remplace sur place. Professionnel et efficace." },
              { name: "Amandine L.", location: "Montreuil", color: "#10B981", text: "Cable deraille sur notre porte de garage sectionnelle. Intervention rapide, le technicien avait la piece dans son vehicule. Depannage termine en 40 minutes, porte comme neuve. Tarif conforme au devis annonce par telephone." },
              { name: "Jean-Pierre H.", location: "Paris 5e", color: "#8B5CF6", text: "Panne de motorisation Hormann un matin de semaine. Le depanneur a identifie une carte electronique defaillante et l'a changee dans la foullee. Garage de nouveau operationnel avant midi. Tres reactif." },
              { name: "Virginie C.", location: "Vincennes", color: "#F59E0B", text: "Notre porte sectionnelle refusait de descendre completement depuis deux jours. Un galet use bloquait le rail. Le technicien a remplace les deux galets et realigne le tablier. Fonctionnement impeccable depuis." },
              { name: "Olivier T.", location: "Issy-les-Moulineaux", color: "#EF4444", text: "Depannage en urgence apres qu'un vehicule a percute notre porte sectionnelle de parking. Intervention dans l'heure, panneaux endommages remplaces le lendemain. Suivi serieux du dossier avec notre assurance." },
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
            Tout savoir sur le <strong>depannage de porte sectionnelle</strong> a <strong>Paris</strong>
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
        name: "Depannage de porte sectionnelle a Paris",
        provider: { "@type": "LocalBusiness", name: "Porte Sectionnelle Paris", telephone: "09 72 12 41 41" },
        areaServed: { "@type": "City", name: "Paris" },
        description: "Depannage porte sectionnelle Paris en urgence 24h/24, 7j/7. Technicien sur place en 30 minutes. Appelez le 09 72 12 41 41.",
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://porte-sectionnelle-paris.fr/" },
          { "@type": "ListItem", position: 2, name: "Depannage", item: "https://porte-sectionnelle-paris.fr/depannage-porte-sectionnelle-paris/" },
        ],
      }) }} />

      {/* Zones d'intervention depannage — subcity pages */}
      <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#FF6333", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "12px" }}>Depannage par zone</span>
          <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "32px" }}>
            <strong>Depannage porte sectionnelle</strong> — nos zones d&apos;intervention
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {depannageZones.map((dz, i) => (
              <a
                key={i}
                href={`/${dz.slug}/`}
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
                    Depannage {dz.name}
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: 400, color: "#999999" }}>
                    {dz.department}
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

      <CTAForm heading="Porte sectionnelle en panne a Paris ?" subtitle="Decrivez votre probleme et un technicien vous rappelle sous 5 minutes. Depannage en 30 min, diagnostic offert, tarification transparente." />
      <Footer />
    </>
  );
}
