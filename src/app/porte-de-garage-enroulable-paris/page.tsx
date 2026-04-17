import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAForm from "@/components/CTAForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Porte de Garage Enroulable Paris | Pose & Depannage",
  description:
    "Porte de garage enroulable a Paris. Installation, reparation et motorisation pour garages urbains. Zero debordement, gain de place. Tel : 09 72 12 41 41.",
  alternates: {
    canonical: "https://depannage-porte-sectionnelle-paris.fr/porte-de-garage-enroulable-paris/",
  },
  openGraph: {
    title: "Porte de Garage Enroulable Paris | Pose & Depannage",
    description: "Porte de garage enroulable a Paris. Installation, reparation et motorisation pour garages urbains. Zero debordement, gain de place. Devis gratuit.",
    url: "https://depannage-porte-sectionnelle-paris.fr/porte-de-garage-enroulable-paris/",
    images: ["/images/portes/porte-rideau-metallique.webp"],
  },
};

export default function PorteDeGarageEnroulableParis() {
  const interventions = [
    {
      title: "Porte enroulable résidentielle",
      desc: "Installation de portes de garage enroulables en aluminium pour les particuliers parisiens. Les lames à double paroi avec mousse isolante s\u2019enroulent dans un coffre compact fixé en linteau, libérant intégralement le plafond et les murs latéraux. Solution privilégiée pour les garages étroits en rez-de-chaussée d\u2019immeuble où chaque centimètre compte.",
      image: "/images/portes/porte-rideau-metallique.webp",
    },
    {
      title: "Porte enroulable motorisée",
      desc: "Toutes nos portes enroulables sont livrées avec motorisation de série, pilotée par télécommande ou smartphone. Le moteur tubulaire intégré au coffre assure une ouverture silencieuse en moins de 12 secondes. Système débrayable en cas de coupure de courant pour une manoeuvre manuelle sans effort depuis l\u2019intérieur du garage.",
      image: "/images/portes/rideau-metallique-lame-pleine.webp",
    },
    {
      title: "Coffre compact et discret",
      desc: "Le coffre d\u2019enroulement ne dépasse pas 30 cm de hauteur et se fixe directement sous le linteau, à l\u2019intérieur ou à l\u2019extérieur du garage. Aucun rail au plafond, aucun encombrement latéral : vous conservez la totalité du volume utile. Finition laquée assortie aux lames pour une intégration architecturale parfaite dans les façades parisiennes.",
      image: "/images/portes/rideau-metallique-commerce.webp",
    },
    {
      title: "Réparation et entretien",
      desc: "Intervention rapide sur toutes les pannes : lame déformée, moteur bloqué, coffre désaxé, télécommande défaillante. Nos techniciens spécialisés disposent d\u2019un stock de pièces détachées pour résoudre la majorité des dysfonctionnements en un seul passage. Contrats de maintenance préventive annuels pour prolonger la durée de vie de votre équipement.",
      image: "/images/portes/technicien-rideau-metallique.webp",
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
            backgroundImage: "url('/images/portes/rideau-metallique-lame-pleine.webp')",
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
              Enroulable Paris
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
              Zero debordement, gain de place maximal. La porte enroulable en aluminium s&apos;adapte aux garages parisiens les plus etroits grace a son coffre compact en linteau.
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
          <span>Porte de garage enroulable Paris</span>
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
              src="/images/portes/visu-porte-garage-enroulable.webp"
              alt="Porte de garage enroulable Paris - installation garage urbain"
              title="Porte de garage enroulable a Paris"
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
              Gain de place incomparable
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
              La porte enroulable, la reponse aux garages parisiens
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
              A Paris, les garages en pied d&apos;immeuble souffrent souvent d&apos;un manque criant d&apos;espace : plafonds bas, ouvertures donnant directement sur le trottoir, murs porteurs impossibles a modifier. La porte de garage enroulable repond precisement a ces contraintes urbaines. Ses lames en aluminium a double paroi s&apos;enroulent dans un coffre compact fixe en linteau, sans deborder ni a l&apos;interieur ni a l&apos;exterieur du garage. Resultat : le plafond reste entierement libre pour du rangement ou un eclairage, et les murs lateraux ne supportent aucun rail encombrant.
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
              Forte de plus de 25 ans d&apos;experience dans l&apos;installation de fermetures a Paris et en Ile-de-France, notre equipe maitrise parfaitement les specificites du bati parisien : coproprietes haussmanniennes, sous-sols etroits, facades classees. Chaque projet demarre par un releve de cotes precis pour garantir une integration sur mesure, sans modification structurelle du batiment.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              L&apos;aluminium qui compose les lames offre un rapport poids-resistance ideal : leger pour ne pas solliciter la motorisation, durable face aux intemperies et a la corrosion, et disponible dans une large palette de coloris RAL pour s&apos;harmoniser avec votre facade.
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
            Installation et reparation de portes enroulables a <strong>Paris</strong>
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
                  alt={`${item.title} - porte enroulable Paris`}
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
            Les avantages
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
            Pourquoi choisir une porte enroulable pour votre garage a Paris
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
                title: "Zero debordement interieur et exterieur",
                desc: "Les lames s\u2019enroulent dans un coffre compact fixe en linteau : aucun rail au plafond, aucun debordement sur le trottoir. La solution ideale pour les garages parisiens donnant directement sur la voie publique.",
              },
              {
                num: "02",
                title: "Gain de place maximal",
                desc: "Le plafond et les murs lateraux restent entierement libres. Vous conservez 100 % du volume utile de votre garage pour le stationnement, le rangement ou l\u2019installation d\u2019etageres et de velos.",
              },
              {
                num: "03",
                title: "Aluminium leger, durable et recyclable",
                desc: "Les lames a double paroi en aluminium offrent un rapport poids-resistance optimal. Insensibles a la corrosion et aux intemperies, elles conservent leur aspect neuf pendant des annees sans entretien particulier.",
              },
              {
                num: "04",
                title: "Motorisation silencieuse integree",
                desc: "Le moteur tubulaire loge dans le coffre assure une ouverture fluide en moins de 12 secondes. Pilotage par telecommande ou smartphone, avec systeme debrayable en cas de coupure de courant.",
              },
              {
                num: "05",
                title: "Isolation thermique et acoustique",
                desc: "La mousse polyurethane injectee dans chaque lame attenome les bruits de la rue et limite les deperditions de chaleur. Un atout considerable pour les garages en rez-de-chaussee d\u2019immeuble parisien.",
              },
              {
                num: "06",
                title: "Personnalisation couleurs et finitions RAL",
                desc: "Large palette de coloris RAL disponibles pour harmoniser votre porte avec la facade de votre immeuble. Finitions laquees, brossees ou texturees pour une integration architecturale parfaite.",
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

      {/* SEO block 2 — Enroulable vs Sectionnelle */}
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
              <strong>Porte enroulable</strong> vs <strong>porte sectionnelle</strong> : quel choix pour votre garage parisien
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
              La question revient chez la plupart de nos clients parisiens : faut-il opter pour une <strong>porte de garage sectionnelle</strong> ou une <strong>porte enroulable</strong> ? La reponse depend essentiellement de la configuration de votre garage et de l&apos;usage que vous en faites. La porte sectionnelle se compose de panneaux articules qui glissent le long de rails lateraux puis se logent sous le plafond. Elle offre une excellente <strong>isolation thermique</strong> grace a ses panneaux de 40 a 45 mm d&apos;epaisseur et convient parfaitement aux garages disposant d&apos;une hauteur sous plafond suffisante, generalement 25 cm au-dessus de l&apos;ouverture. En revanche, dans les immeubles parisiens ou la retombee de linteau est faible et le plafond bas, l&apos;installation des rails devient problematique voire impossible sans travaux de genie civil.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#3B3B3B",
                lineHeight: "26px",
                              }}
            >
              C&apos;est precisement dans ces situations que la <strong>porte enroulable</strong> prend tout son sens. Son coffre de 25 a 30 cm se fixe directement sous le linteau sans necessiter de rail au plafond ni de degagement lateral. Pour un garage etroit de 2,40 m de large donnant sur un trottoir passant du 11e ou du 18e arrondissement, la porte enroulable est souvent la seule option viable sans debordement exterieur. Les coproprietes parisiennes l&apos;apprecient aussi car elle ne modifie pas la structure du batiment et respecte les contraintes architecturales des facades classees. Notre equipe, forte de plus de <strong>25 ans d&apos;experience</strong> sur le terrain, vous conseille objectivement entre les deux solutions apres un releve de cotes gratuit et sans engagement.
            </p>
            <a href={siteConfig.telephoneHref} style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#E63946", fontSize: "15px", fontWeight: 600, textDecoration: "none", marginTop: "20px" }}>
              Devis gratuit : {siteConfig.telephone}
            </a>
          </div>
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {/* Enroulable */}
              <div>
                <img
                  src="/images/portes/rideau-metallique-enroulable.webp"
                  alt="Porte enroulable commerce Paris - modele lames aluminium"
                  title="Porte de garage enroulable Paris"
                  width={300}
                  height={360}
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "360px", objectFit: "cover", borderRadius: "16px" }}
                />
                <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#000", marginTop: "12px", marginBottom: "4px" }}>
                  {"Mod\u00E8le Enroulable"}
                </h4>
                <p style={{ fontSize: "13px", color: "#666", lineHeight: "20px" }}>
                  Coffre compact en linteau, zero encombrement plafond. Ideal pour les garages avec faible retombee de linteau.
                </p>
              </div>
              {/* Sectionnelle */}
              <div>
                <img
                  src="/images/portes/porte-garage-sectionnelle.webp"
                  alt="Porte sectionnelle residentielle Paris - panneaux isoles"
                  title="Porte de garage sectionnelle Paris"
                  width={300}
                  height={360}
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "360px", objectFit: "cover", borderRadius: "16px", backgroundColor: "#F0F1F3" }}
                />
                <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#000", marginTop: "12px", marginBottom: "4px" }}>
                  {"Mod\u00E8le Sectionnel"}
                </h4>
                <p style={{ fontSize: "13px", color: "#666", lineHeight: "20px" }}>
                  Panneaux isoles 40mm, isolation thermique et acoustique maximale. Necessite hauteur sous plafond suffisante.
                </p>
              </div>
            </div>
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
            Nos services
          </span>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "42px",
                            marginBottom: "40px",
            }}
          >
            Nos autres solutions de <strong>porte</strong> de garage a <strong>Paris</strong>
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            {[
              { href: "/porte-de-garage-paris", label: "Porte de garage sectionnelle" },
              { href: "/porte-de-garage-basculante-paris", label: "Porte basculante" },
              { href: "/porte-sectionnelle-industrielle-paris", label: "Porte industrielle" },
              { href: "/installation-porte-sectionnelle-paris", label: "Installation" },
              { href: "/depannage-porte-sectionnelle-paris", label: "Depannage" },
              { href: "/reparation-porte-sectionnelle-paris", label: "Reparation" },
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
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#E63946", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "12px" }}>Zones d&apos;intervention</span>
          <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "42px", marginBottom: "32px" }}>
            <strong>Porte de garage enroulable</strong> dans toute la region parisienne
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
            Avis clients — <strong>Porte de garage enroulable</strong> a <strong>Paris</strong>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { name: "Romain D.", location: "Paris 11e", color: "#E63946", text: "Porte enroulable en aluminium posee dans notre garage du 11e arrondissement. Le coffre compact passe inapercu sous le linteau. Parfait pour notre plafond bas, une porte sectionnelle n'aurait pas pu rentrer. Ouverture silencieuse et rapide." },
              { name: "Beatrice C.", location: "Paris 18e", color: "#2563EB", text: "Installation d'une porte enroulable isolee pour remplacer notre vieux rideau metallique de garage. La difference d'isolation est flagrante, les lames en aluminium a double paroi gardent bien la chaleur. Motorisation discrete, les voisins ne s'en plaignent pas." },
              { name: "Jean-Marc L.", location: "Vincennes", color: "#10B981", text: "Le technicien nous a conseille l'enroulable plutot que la sectionnelle vu la configuration de notre garage sans retombee de linteau. Choix parfait, le coffre se loge dans les 25 cm disponibles. Pose propre et rapide en demi-journee." },
              { name: "Pascale H.", location: "Paris 2e", color: "#8B5CF6", text: "Porte de garage enroulable posee dans notre immeuble haussmannien. L'esthetique exterieure est preservee grace au coffre invisible depuis la rue. La copropriete a valide sans souci puisqu'aucune modification de facade n'etait necessaire." },
              { name: "Didier A.", location: "Issy-les-Moulineaux", color: "#F59E0B", text: "Porte enroulable avec lames aluminium 77mm pour notre garage donne sur rue passante. Le niveau d'isolation phonique est remarquable. La motorisation tubulaire ne necessite aucun rail au plafond, on a pu garder notre systeme d'eclairage." },
              { name: "Caroline W.", location: "Creteil", color: "#EF4444", text: "Deuxieme porte enroulable posee par cette equipe, cette fois pour notre place de parking couverte. Le releve de cotes etait parfait, la porte s'ajuste au millimetre dans l'ouverture. Couleur RAL assortie a la facade du batiment." },
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
                            marginBottom: "60px",
              textAlign: "center",
            }}
          >
            Tout savoir sur la porte de garage enroulable a Paris
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#000000",
                                    marginBottom: "12px",
                }}
              >
                Comment fonctionne une porte de garage enroulable ?
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#3B3B3B",
                  lineHeight: "24px",
                                  }}
              >
                La porte enroulable se compose de lames en aluminium a double paroi qui s&apos;enroulent autour d&apos;un axe motorise loge dans un coffre compact fixe sous le linteau. A l&apos;activation par telecommande ou smartphone, le moteur tubulaire entraine l&apos;enroulement ou le deroulement des lames en moins de 12 secondes. Aucun rail au plafond ni debordement exterieur n&apos;est necessaire, ce qui rend ce systeme particulierement adapte aux garages parisiens a espace reduit.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#000000",
                                    marginBottom: "12px",
                }}
              >
                La porte enroulable est-elle adaptee aux garages parisiens etroits ?
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#3B3B3B",
                  lineHeight: "24px",
                                  }}
              >
                Absolument. C&apos;est meme la solution la plus recommandee pour les garages etroits de Paris. Le coffre d&apos;enroulement ne depasse pas 30 cm de hauteur et ne necessite aucun degagement lateral ni rail au plafond. Pour un garage de 2,40 m de large en rez-de-chaussee d&apos;immeuble haussmannien, la porte enroulable est souvent la seule option qui ne deborde ni a l&apos;interieur ni sur le trottoir.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#000000",
                                    marginBottom: "12px",
                }}
              >
                Quel est le prix d&apos;une porte de garage enroulable a Paris ?
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#3B3B3B",
                  lineHeight: "24px",
                                  }}
              >
                Le tarif varie en fonction des dimensions, du type de lames, de la motorisation et des finitions choisies. Nos portes enroulables en aluminium motorisees sont disponibles a partir de 1 500 euros pose comprise. Chaque projet fait l&apos;objet d&apos;un devis personnalise gratuit apres releve de cotes sur place. Contactez-nous au 09 72 12 41 41 pour obtenir votre estimation.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#000000",
                                    marginBottom: "12px",
                }}
              >
                Peut-on installer une porte enroulable sur une ouverture existante ?
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#3B3B3B",
                  lineHeight: "24px",
                                  }}
              >
                Oui, la porte enroulable s&apos;adapte a la grande majorite des ouvertures existantes sans modification structurelle. Le coffre se fixe sous le linteau a l&apos;interieur ou a l&apos;exterieur, et les coulisses laterales s&apos;ajustent aux dimensions exactes de votre baie. Nos techniciens, forts de plus de 25 ans d&apos;experience a Paris, realisent un releve de cotes precis pour garantir une pose parfaite sans travaux de maconnerie.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#000000",
                                    marginBottom: "12px",
                }}
              >
                Quels sont les avantages de l&apos;aluminium pour une porte enroulable ?
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#3B3B3B",
                  lineHeight: "24px",
                                  }}
              >
                L&apos;aluminium combine legerete, resistance a la corrosion et durabilite dans le temps. Il ne rouille pas, ne se deforme pas sous les variations climatiques et necessite tres peu d&apos;entretien. Les lames a double paroi injectees de mousse polyurethane offrent une isolation thermique et acoustique efficace. Enfin, l&apos;aluminium est 100 % recyclable, ce qui en fait un choix eco-responsable pour votre fermeture de garage.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#000000",
                                    marginBottom: "12px",
                }}
              >
                Comment entretenir sa porte de garage enroulable ?
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#3B3B3B",
                  lineHeight: "24px",
                                  }}
              >
                L&apos;entretien d&apos;une porte enroulable est minimal. Nous recommandons un nettoyage des lames a l&apos;eau savonneuse deux fois par an, une verification du coffre et de l&apos;axe d&apos;enroulement, ainsi qu&apos;une lubrification legere des coulisses. Pour une tranquillite totale, nous proposons des contrats de maintenance preventive annuels incluant un controle complet du moteur, des systemes de securite et de l&apos;etat general des lames.
              </p>
            </div>
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
            <img src="/images/portes/technicien-rideau-metallique.webp" alt="Porte de garage enroulable Paris - installation et securite" title="Installation porte enroulable aluminium a Paris" width={640} height={480} loading="lazy" decoding="async" style={{ width: "100%", height: "480px", objectFit: "cover", borderRadius: "16px" }} />
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
              Pourquoi la <strong>porte enroulable</strong> est le choix ideal pour les garages parisiens
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
              Contrairement a une <strong>porte sectionnelle</strong> classique qui necessite des rails au plafond, ou a une porte basculante qui deborde sur le trottoir a l&apos;ouverture, la <strong>porte de garage enroulable</strong> fonctionne sur un principe radicalement different. Les lames en <strong>aluminium a double paroi</strong>, injectees de mousse polyurethane, s&apos;enroulent autour d&apos;un axe loge dans un coffre de seulement 25 a 30 cm. Ce coffre se monte en position haute sous le linteau, a l&apos;interieur ou a l&apos;exterieur selon la configuration de votre garage. Le resultat est un zero debordement total : ni vers la rue — essentiel pour les garages donnant directement sur la voie publique a <strong>Paris</strong> — ni vers l&apos;interieur, ce qui preserve tout le volume de stationnement et de stockage.
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
              Cote securite, chaque <strong>porte enroulable</strong> que nous installons integre un systeme <strong>anti-relevage</strong> qui bloque toute tentative d&apos;ouverture forcee, une <strong>detection d&apos;obstacle</strong> qui stoppe immediatement la descente en cas de presence sous le tablier, et un dispositif stop-chute qui immobilise la porte si la tension de la sangle ou du ressort venait a faiblir. L&apos;<strong>isolation thermique et acoustique</strong> apportee par les lames a double paroi aluminium contribue egalement au confort quotidien.
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
        name: "Porte de garage enroulable",
        description: "Porte de garage enroulable a Paris. Installation, reparation et motorisation pour garages urbains. Zero debordement, gain de place maximal.",
        brand: { "@type": "Organization", name: "Depannage Porte Sectionnelle Paris" },
        offers: { "@type": "Offer", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://depannage-porte-sectionnelle-paris.fr/" },
          { "@type": "ListItem", position: 2, name: "Porte de garage enroulable", item: "https://depannage-porte-sectionnelle-paris.fr/porte-de-garage-enroulable-paris/" },
        ],
      }) }} />

      <CTAForm />
      <Footer />

      {/* Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Comment fonctionne une porte de garage enroulable ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La porte enroulable se compose de lames en aluminium a double paroi qui s\u2019enroulent autour d\u2019un axe motorise loge dans un coffre compact fixe sous le linteau. A l\u2019activation par telecommande ou smartphone, le moteur tubulaire entraine l\u2019enroulement ou le deroulement des lames en moins de 12 secondes. Aucun rail au plafond ni debordement exterieur n\u2019est necessaire, ce qui rend ce systeme particulierement adapte aux garages parisiens a espace reduit.",
                },
              },
              {
                "@type": "Question",
                name: "La porte enroulable est-elle adaptee aux garages parisiens etroits ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolument. C\u2019est meme la solution la plus recommandee pour les garages etroits de Paris. Le coffre d\u2019enroulement ne depasse pas 30 cm de hauteur et ne necessite aucun degagement lateral ni rail au plafond. Pour un garage de 2,40 m de large en rez-de-chaussee d\u2019immeuble haussmannien, la porte enroulable est souvent la seule option qui ne deborde ni a l\u2019interieur ni sur le trottoir.",
                },
              },
              {
                "@type": "Question",
                name: "Quel est le prix d\u2019une porte de garage enroulable a Paris ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le tarif varie en fonction des dimensions, du type de lames, de la motorisation et des finitions choisies. Nos portes enroulables en aluminium motorisees sont disponibles a partir de 1 500 euros pose comprise. Chaque projet fait l\u2019objet d\u2019un devis personnalise gratuit apres releve de cotes sur place. Contactez-nous au 09 72 12 41 41 pour obtenir votre estimation.",
                },
              },
              {
                "@type": "Question",
                name: "Peut-on installer une porte enroulable sur une ouverture existante ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, la porte enroulable s\u2019adapte a la grande majorite des ouvertures existantes sans modification structurelle. Le coffre se fixe sous le linteau a l\u2019interieur ou a l\u2019exterieur, et les coulisses laterales s\u2019ajustent aux dimensions exactes de votre baie. Nos techniciens, forts de plus de 25 ans d\u2019experience a Paris, realisent un releve de cotes precis pour garantir une pose parfaite sans travaux de maconnerie.",
                },
              },
              {
                "@type": "Question",
                name: "Quels sont les avantages de l\u2019aluminium pour une porte enroulable ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "L\u2019aluminium combine legerete, resistance a la corrosion et durabilite dans le temps. Il ne rouille pas, ne se deforme pas sous les variations climatiques et necessite tres peu d\u2019entretien. Les lames a double paroi injectees de mousse polyurethane offrent une isolation thermique et acoustique efficace. Enfin, l\u2019aluminium est 100 % recyclable, ce qui en fait un choix eco-responsable pour votre fermeture de garage.",
                },
              },
              {
                "@type": "Question",
                name: "Comment entretenir sa porte de garage enroulable ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "L\u2019entretien d\u2019une porte enroulable est minimal. Nous recommandons un nettoyage des lames a l\u2019eau savonneuse deux fois par an, une verification du coffre et de l\u2019axe d\u2019enroulement, ainsi qu\u2019une lubrification legere des coulisses. Pour une tranquillite totale, nous proposons des contrats de maintenance preventive annuels incluant un controle complet du moteur, des systemes de securite et de l\u2019etat general des lames.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
