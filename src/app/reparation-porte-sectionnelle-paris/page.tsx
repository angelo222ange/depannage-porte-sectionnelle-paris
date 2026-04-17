import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAForm from "@/components/CTAForm";
import { siteConfig, reparationZones } from "@/config/site";

export const metadata: Metadata = {
  title: "Reparation Porte Sectionnelle Paris | Toutes Marques",
  description:
    "Reparation porte sectionnelle a Paris. Ressorts, cables, panneaux, motorisation. Technicien certifie, toutes marques. Devis gratuit au 09 72 12 41 41.",
  alternates: {
    canonical: "https://depannage-porte-sectionnelle-paris.fr/reparation-porte-sectionnelle-paris/",
  },
  openGraph: {
    title: "Reparation Porte Sectionnelle Paris | Toutes Marques",
    description: "Reparation porte sectionnelle a Paris. Ressorts, cables, panneaux, motorisation. Technicien certifie, toutes marques. Devis gratuit au 09 72 12 41 41.",
    url: "https://depannage-porte-sectionnelle-paris.fr/reparation-porte-sectionnelle-paris/",
    images: ["/images/portes/reparation-porte-sectionnelle.webp"],
  },
};

export default function ReparationPorteSectionnelleParis() {
  const interventions = [
    {
      title: "Remplacement de ressorts",
      desc: "Les ressorts de torsion ou d'extension ont une duree de vie limitee (environ 15 000 cycles). Lorsqu'ils se deteriorent ou cassent, la porte devient lourde voire impossible a manoeuvrer. Nous remplacons les ressorts par des modeles haute durabilite calibres pour le poids exact de votre porte.",
      image: "/images/portes/reparation-porte-sectionnelle.webp",
    },
    {
      title: "Reparation de cables et galets",
      desc: "Cables effiloches, galets uses ou rails tordus provoquent des frottements, du bruit et un fonctionnement saccade. Notre intervention comprend le remplacement des cables en acier tresse, la pose de galets neufs et le realignement complet du systeme de guidage.",
      image: "/images/portes/reparation-porte-sectionnelle-industrielle.webp",
    },
    {
      title: "Reparation de panneaux",
      desc: "Un panneau fendu, bossele ou perce compromet l'isolation et la securite de votre fermeture. Nous remplacons les sections endommagees a l'identique en conservant le coloris et la finition d'origine, sans avoir a demonter la totalite de la porte.",
      image: "/images/portes/depannage-porte-sectionnelle.webp",
    },
    {
      title: "Reparation de motorisation",
      desc: "Carte electronique defaillante, condensateur grille, engrenage use ou capteur de fin de course decale : nous diagnostiquons et reparons tous les composants de votre motorisation. Si la reparation n'est pas economiquement viable, nous vous orientons vers un remplacement adapte.",
      image: "/images/portes/moteur-porte-sectionnelle.webp",
    },
  ];

  const faqs = [
    {
      q: "Qui appeler pour la reparation d'une porte sectionnelle a Paris ?",
      a: `Pour toute reparation de porte sectionnelle a Paris, contactez nos techniciens certifies au ${siteConfig.telephone}. Forts de plus de 25 ans d'experience, nous intervenons sur toutes les marques — Hormann, Novoferm, Crawford — avec des pieces d'origine et une garantie de 12 mois sur chaque reparation.`,
    },
    {
      q: "Quelle est la difference entre depannage et reparation de porte sectionnelle ?",
      a: "Le depannage vise a retablir le fonctionnement immediat de votre porte en urgence. La reparation est une intervention approfondie qui traite la cause racine du probleme : remplacement des pieces usees, realignement du mecanisme, recalibrage complet. La reparation est plus durable et evite les pannes repetitives.",
    },
    {
      q: "Combien coute la reparation d'un ressort de porte sectionnelle ?",
      a: "Le cout de remplacement d'un ressort de torsion depend du type de porte (residentielle ou industrielle) et du poids du tablier. Les tarifs debutent a partir de 180 euros pieces et main-d'oeuvre comprises pour un ressort residentiel standard. Un devis precis est remis apres diagnostic sur place.",
    },
    {
      q: "Peut-on reparer un seul panneau de porte sectionnelle sans tout changer ?",
      a: "Oui, dans la majorite des cas, il est possible de remplacer uniquement le ou les panneaux endommages. Nous commandons les sections a l'identique aupres du fabricant — meme epaisseur, meme coloris, meme finition — pour une reparation invisible. Cette solution represente une economie significative par rapport au remplacement complet de la porte.",
    },
    {
      q: "Ma porte sectionnelle grince, faut-il la faire reparer ?",
      a: "Un grincement est souvent le signe de galets uses, de rails encombres ou d'un manque de lubrification. Si un simple graissage ne resout pas le probleme, une reparation est recommandee avant que l'usure ne s'aggrave. Nos techniciens identifient la source exacte du bruit et remplacent les composants concernes.",
    },
    {
      q: "Garantissez-vous les reparations effectuees ?",
      a: "Oui, toutes nos reparations beneficient d'une garantie de 12 mois sur les pieces remplacees et la main-d'oeuvre. Si le meme composant tombe en panne dans le delai de garantie, nous reintervenons gratuitement. Les pieces d'origine des fabricants beneficient parfois d'une garantie etendue que nous repercutons a nos clients.",
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
            backgroundImage: "url('/images/portes/hero-reparation-porte-sectionnelle.webp')",
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
              Reparation Porte
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
              <strong>Reparation</strong> de tous types de <strong>portes sectionnelles</strong>. Ressorts, cables, panneaux, motorisation. Pieces d&apos;origine, garantie pieces et main-d&apos;oeuvre.
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
          <span><strong>Reparation porte sectionnelle Paris</strong></span>
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
              src="/images/portes/reparation-porte-sectionnelle.webp"
              alt="Reparation porte sectionnelle Paris - technicien reparant un mecanisme"
              title="Reparation porte sectionnelle Paris"
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
              Expertise technique
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
              <strong>Reparation</strong> professionnelle de <strong>portes sectionnelles</strong> a <strong>Paris</strong>
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
              Avec plus de <strong>25 ans</strong> de metier, nos techniciens connaissent chaque composant d&apos;une <strong>porte sectionnelle</strong> sur le bout des doigts. Qu&apos;il s&apos;agisse d&apos;un ressort de torsion fatigue, d&apos;un cable en acier effiloche, d&apos;un panneau fissure apres un choc ou d&apos;un mecanisme d&apos;enroulement grippe, nous disposons du savoir-faire et des pieces necessaires pour remettre votre equipement en etat de marche.
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
              Contrairement au depannage d&apos;urgence qui vise a retablir le fonctionnement immediat, la <strong>reparation</strong> approfondie traite la cause racine du probleme. Nous inspectons l&apos;ensemble du mecanisme, identifions les pieces fragilisees et procedons a leur remplacement preventif pour eviter une nouvelle panne dans les semaines suivantes. Cette approche garantit la longevite de votre installation.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              Nous intervenons sur toutes les marques du marche — <strong>Hormann</strong>, <strong>Novoferm</strong>, <strong>Crawford</strong>, Came, FAAC — et utilisons exclusivement des pieces d&apos;origine ou de qualite equivalente certifiee. Chaque <strong>reparation</strong> est accompagnee d&apos;une garantie pieces et main-d&apos;oeuvre de 12 mois minimum.
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
            Reparations courantes
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
            Nos interventions de <strong>reparation de porte sectionnelle</strong> a <strong>Paris</strong>
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
              Quand faut-il faire reparer sa <strong>porte sectionnelle</strong> a <strong>Paris</strong> ?
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
              Plusieurs signes avant-coureurs doivent vous alerter sur la necessite de faire reparer votre <strong>porte sectionnelle</strong>. Un fonctionnement plus lent que d&apos;habitude, des grincements inhabituels lors de l&apos;ouverture, un decalage visible entre les panneaux ou une porte qui peine a rester en position ouverte sont autant de symptomes indiquant qu&apos;un composant est en fin de vie. Ignorer ces signaux conduit souvent a une panne complete, plus couteuse a resoudre.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              Notre recommandation : faites intervenir un technicien des les premiers signes d&apos;usure. Une <strong>reparation</strong> preventive coute en moyenne trois fois moins cher qu&apos;un remplacement complet et prolonge la duree de vie de votre equipement de plusieurs annees. Contactez-nous au <strong>{siteConfig.telephone}</strong> pour un diagnostic gratuit a domicile dans tout <strong>Paris</strong>.
            </p>
          </div>
          <div style={{ flex: "1 1 50%" }}>
            <img
              src="/images/portes/reparation-porte-sectionnelle-industrielle.webp"
              alt="Reparation mecanisme porte sectionnelle Paris"
              title="Reparation mecanisme porte sectionnelle a Paris"
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
            Les avantages de notre <strong>reparation de porte sectionnelle</strong> a <strong>Paris</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { num: "01", title: "Diagnostic approfondi avant intervention", desc: "Contrairement a un simple depannage, notre reparation commence par une inspection complete de tous les composants de votre porte sectionnelle. Nous identifions non seulement la piece defaillante, mais aussi les elements fragilises qui pourraient causer une prochaine panne." },
              { num: "02", title: "Pieces d'origine garanties", desc: "Nous utilisons exclusivement des pieces d'origine des fabricants — Hormann, Novoferm, Crawford — ou des pieces de qualite equivalente certifiee. Aucun composant generique ou de contrefacon. Cette exigence garantit la compatibilite parfaite et la longevite de la reparation." },
              { num: "03", title: "Garantie 12 mois pieces et main-d'oeuvre", desc: "Chaque reparation effectuee par nos techniciens est couverte par une garantie de 12 mois. Si le composant repare ou remplace presente un defaut dans ce delai, nous reintervenons gratuitement. Cette garantie temoigne de la confiance que nous avons dans la qualite de notre travail." },
              { num: "04", title: "Techniciens specialises multi-marques", desc: "Nos reparateurs sont formes en continu sur les evolutions techniques de chaque fabricant. Cette expertise multi-marques acquise en 25 ans nous permet de reparer aussi bien une porte residentielle Hormann qu'un portail industriel Crawford, avec le meme niveau de precision." },
              { num: "05", title: "Reparation durable, pas de rustine", desc: "Nous privilegions toujours la reparation perenne a la solution de fortune. Si un composant est en fin de vie, nous le remplacons plutot que de le rafistoler. Cette approche vous evite les pannes a repetition et les frais cumules de multiples interventions." },
              { num: "06", title: "Devis detaille et tarif juste", desc: "Avant chaque reparation, nous vous remettons un devis chiffre detaillant les pieces necessaires, le temps d'intervention estime et le cout total. Pas de supplement cache, pas de majoration abusive. Le prix annonce est le prix facture." },
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
              src="/images/portes/depannage-porte-sectionnelle.webp"
              alt="Reparation cable et ressort porte sectionnelle Paris"
              title="Reparation cable et ressort porte sectionnelle Paris"
              width={640}
              height={420}
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "16px" }}
            />
          </div>
          <div style={{ flex: "1 1 50%" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "24px" }}>
              <strong>Reparation</strong> ou remplacement de <strong>porte sectionnelle</strong> a <strong>Paris</strong> : comment faire le bon choix ?
            </h2>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", marginBottom: "16px" }}>
              La question se pose legitimement lorsqu&apos;une <strong>porte sectionnelle</strong> presente plusieurs dysfonctionnements simultanement. Nos techniciens, avec <strong>25 ans</strong> d&apos;experience sur le terrain a <strong>Paris</strong>, evaluent objectivement la situation. Si les composants structurels (panneaux, rails, cadre) sont en bon etat et que seuls les elements d&apos;usure doivent etre remplaces, la <strong>reparation</strong> reste largement plus avantageuse financierement. Le remplacement complet ne se justifie que lorsque la porte est obsolete, que les pieces ne sont plus disponibles ou que les couts cumules de reparation depassent 50 % de la valeur d&apos;une porte neuve.
            </p>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#3B3B3B", lineHeight: "26px", marginBottom: "24px" }}>
              Dans tous les cas, nous vous presentons les deux options chiffrees pour vous permettre de prendre une decision eclairee. Notre conseil est toujours guide par votre interet, pas par le montant de la facture. Appelez le <strong>{siteConfig.telephone}</strong> pour un diagnostic complet et gratuit de votre <strong>porte sectionnelle</strong> a <strong>Paris</strong>.
            </p>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "12px", backgroundColor: "#E63946", padding: "14px 32px", borderRadius: "50px", fontSize: "16px", fontWeight: 600, color: "#FFFFFF", }}>
              Obtenir un diagnostic gratuit
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
              { href: "/entretien-porte-sectionnelle-paris/", label: "Entretien", image: "/images/portes/entretien-porte-sectionnelle.webp" },
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

      {/* Zones de reparation — subcity pages */}
      <section style={{ padding: "80px 30px", backgroundColor: "#F6F7F9" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#E63946", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "12px" }}>Reparation par zone</span>
          <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "32px" }}>
            <strong>Reparation porte sectionnelle</strong> — nos zones d&apos;intervention
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {reparationZones.map((rz, i) => (
              <a
                key={i}
                href={`/${rz.slug}/`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  padding: "18px 22px",
                  textDecoration: "none",
                  border: "1px solid #E5E7EB",
                }}
              >
                <div>
                  <span style={{ fontSize: "15px", fontWeight: 600, color: "#000000", display: "block" }}>
                    Reparation {rz.name}
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: 400, color: "#999999" }}>
                    {rz.department}
                  </span>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#E63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
            Avis clients — <strong>Reparation porte sectionnelle</strong> a <strong>Paris</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { name: "Franck S.", location: "Paris 14e", color: "#E63946", text: "Ressort de torsion casse sur notre porte sectionnelle Novoferm. Le reparateur avait le ressort exact dans son camion. Reparation terminee en 45 minutes, tension parfaitement reglee. Porte comme neuve." },
              { name: "Helene M.", location: "Paris 3e", color: "#2563EB", text: "Deux panneaux fissures apres un choc de vehicule dans notre parking du Marais. Les sections ont ete remplacees a l'identique, meme coloris, meme finition. Impossible de voir la difference avec les panneaux d'origine." },
              { name: "Bruno K.", location: "Saint-Denis", color: "#10B981", text: "Porte sectionnelle qui grincait de plus en plus fort depuis des mois. Le technicien a remplace les galets uses et realigne les rails. Fonctionnement silencieux retrouve, on regrette de ne pas avoir appele plus tot." },
              { name: "Sandrine F.", location: "Paris 18e", color: "#8B5CF6", text: "Reparation de la carte electronique de notre motorisation Somfy. Le diagnostic a ete rapide et le technicien m'a montre le composant grille. Reparation sur place, pas besoin de changer tout le moteur. Economie appreciable." },
              { name: "Antoine J.", location: "Creteil", color: "#F59E0B", text: "Cable en acier effiloche repere lors d'un controle visuel. Intervention programmee le lendemain, remplacement des deux cables et verification complete du mecanisme. Travail methodique et garantie 12 mois sur la reparation." },
              { name: "Marie-Claire D.", location: "Nanterre", color: "#EF4444", text: "Notre porte sectionnelle de 15 ans montrait des signes de fatigue. Le technicien a fait un diagnostic complet et propose un remplacement cible des pieces usees plutot qu'un changement total. Approche honnete et economique." },
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
            Tout savoir sur la <strong>reparation de porte sectionnelle</strong> a <strong>Paris</strong>
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
        name: "Reparation de porte sectionnelle a Paris",
        provider: { "@type": "LocalBusiness", name: "Depannage Porte Sectionnelle Paris", telephone: "09 72 12 41 41" },
        areaServed: { "@type": "City", name: "Paris" },
        description: "Reparation de porte sectionnelle a Paris. Ressorts, cables, panneaux, motorisation. Toutes marques. Devis gratuit au 09 72 12 41 41.",
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://depannage-porte-sectionnelle-paris.fr/" },
          { "@type": "ListItem", position: 2, name: "Reparation", item: "https://depannage-porte-sectionnelle-paris.fr/reparation-porte-sectionnelle-paris/" },
        ],
      }) }} />

      <CTAForm heading="Votre porte sectionnelle a besoin d'une reparation ?" subtitle="Expliquez-nous la panne : ressort, cable, panneau ou moteur. Nos techniciens reparent toutes marques a Paris avec pieces d'origine garanties 12 mois." />
      <Footer />
    </>
  );
}
