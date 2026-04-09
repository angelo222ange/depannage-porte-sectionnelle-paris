import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAForm from "@/components/CTAForm";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Securite Porte Sectionnelle : Normes 2026",
  description:
    "Normes de securite porte sectionnelle EN 13241, photocellules, anti-chute, marquage CE, mise aux normes 2026. Guide complet pour Paris et Ile-de-France.",
  alternates: { canonical: "https://porte-sectionnelle-paris.fr/blog/securite-porte-sectionnelle-normes/" },
  openGraph: {
    title: "Securite Porte Sectionnelle : Normes 2026",
    description: "Normes securite porte sectionnelle EN 13241, photocellules, anti-chute, marquage CE.",
    url: "https://porte-sectionnelle-paris.fr/blog/securite-porte-sectionnelle-normes/",
    images: ["/images/portes/porte-sectionnelle-securite-renforcee.webp"],
  },
};

export default function Article() {
  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div style={{ maxWidth: "1312px", margin: "0 auto", padding: "180px 30px 0" }}>
        <nav style={{ fontSize: "14px", color: "#3B3B3B" }}>
          <a href="/" style={{ color: "#FF6333" }}>Accueil</a>
          <span style={{ margin: "0 8px" }}>&gt;</span>
          <a href="/blog/" style={{ color: "#FF6333" }}>Blog</a>
          <span style={{ margin: "0 8px" }}>&gt;</span>
          <span>Securite porte sectionnelle normes</span>
        </nav>
      </div>

      {/* Article hero */}
      <section style={{ padding: "40px 30px 0", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ display: "inline-block", backgroundColor: "#FFF1EC", color: "#FF6333", padding: "6px 14px", borderRadius: "50px", fontSize: "13px", fontWeight: 600, marginBottom: "20px" }}>
            Securite
          </span>
          <h1 style={{ fontSize: "48px", fontWeight: 600, color: "#000000", lineHeight: "56px", marginBottom: "16px" }}>
            Securite Porte Sectionnelle : Normes et Obligations 2026
          </h1>
          <p style={{ fontSize: "15px", color: "#999999", marginBottom: "32px" }}>
            1 avril 2026 &bull; 8 min de lecture
          </p>
          <img src="/images/portes/porte-sectionnelle-securite-renforcee.webp" alt="Porte sectionnelle avec systeme de securite renforcee" title="Securite porte sectionnelle - normes EN 13241 Paris" width={800} height={400} loading="eager" decoding="async" style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "16px" }} />
        </div>
      </section>

      {/* Article content */}
      <BlogArticleLayout>

          <p style={{ marginBottom: "24px" }}>
            La <strong>securite d&apos;une porte sectionnelle</strong> repose sur un cadre reglementaire strict en France et en Europe. Chaque annee, des accidents domestiques lies a des portes de garage non conformes sont signales. Ce guide detaille les normes applicables en 2026, les dispositifs de protection obligatoires et les demarches pour mettre aux normes une installation existante a Paris.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            La norme EN 13241 : le cadre europeen de reference
          </h2>
          <p style={{ marginBottom: "20px" }}>
            La <strong>norme EN 13241</strong> (anciennement EN 13241-1) definit les exigences de performance et de securite pour toutes les portes et portails industriels, commerciaux et residentiels motorises. Cette norme harmonisee au niveau europeen couvre la resistance mecanique, l&apos;isolation thermique, la permeabilite a l&apos;air, l&apos;etancheite a l&apos;eau et surtout les dispositifs de securite pour la protection des utilisateurs.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Tout fabricant ou installateur doit s&apos;assurer que la porte sectionnelle qu&apos;il met en service est conforme a cette norme. L&apos;analyse des risques est obligatoire : elle identifie les dangers potentiels (ecrasement, cisaillement, happement, impact) et definit les mesures de protection correspondantes. Cette analyse doit etre documentee et conservee dans le dossier technique de l&apos;installation.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Les dispositifs de securite obligatoires
          </h2>

          <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#000000", lineHeight: "30px", marginTop: "32px", marginBottom: "16px" }}>
            Photocellules de detection
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Les <strong>photocellules infrarouges</strong> constituent la premiere ligne de defense. Positionnees de chaque cote du tableau a 20-30 cm du sol, elles emettent un faisceau invisible. Si un objet, un enfant ou un animal interrompt ce faisceau pendant la fermeture, la porte s&apos;arrete immediatement et remonte. Cette protection est obligatoire sur toute porte motorisee accessible au public.
          </p>

          <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#000000", lineHeight: "30px", marginTop: "32px", marginBottom: "16px" }}>
            Bord sensible ou arete palpeuse
          </h3>
          <p style={{ marginBottom: "20px" }}>
            L&apos;<strong>arete palpeuse</strong> (ou bord sensible) est un profil en caoutchouc fixe sur le bord inferieur de la porte. En cas de contact avec un obstacle lors de la descente, elle declenche l&apos;arret et l&apos;inversion du mouvement. Ce dispositif complete les photocellules en protegeant contre les obstacles situes hors du champ de detection des cellules, notamment les objets bas ou les pieds.
          </p>

          <img src="/images/portes/porte-sectionnelle-pose-professionnelle.webp" alt="Installation professionnelle porte sectionnelle avec securites" title="Pose porte sectionnelle conforme aux normes - securite Paris" width={800} height={350} loading="lazy" decoding="async" style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "12px", margin: "32px 0" }} />

          <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#000000", lineHeight: "30px", marginTop: "32px", marginBottom: "16px" }}>
            Dispositif anti-chute
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Le <strong>systeme anti-chute</strong> bloque instantanement la porte en cas de rupture d&apos;un ressort ou d&apos;un cable de levage. Sans ce dispositif, une porte dont le ressort cede peut tomber avec une force considerable et causer des blessures graves voire mortelles. Le parachute de securite agrippe les rails et immobilise les panneaux en moins d&apos;une seconde. Son bon fonctionnement doit etre verifie lors de chaque visite d&apos;entretien.
          </p>

          <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#000000", lineHeight: "30px", marginTop: "32px", marginBottom: "16px" }}>
            Systeme anti-relevage
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Le <strong>verrouillage anti-relevage</strong> empeche de soulever la porte depuis l&apos;exterieur lorsqu&apos;elle est fermee. Sur les portes motorisees, le moteur assure cette fonction automatiquement. Sur les portes manuelles, un verrou mecanique integre au rail bloque les panneaux. Ce systeme protege contre les tentatives d&apos;effraction par levier, une methode couramment utilisee par les cambrioleurs.
          </p>

          {/* CTA mid-article */}
          <div style={{ backgroundColor: "#FFF1EC", borderRadius: "16px", padding: "32px", margin: "40px 0", textAlign: "center" as const }}>
            <p style={{ fontSize: "18px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>
              Votre porte est-elle aux normes ? Verification gratuite
            </p>
            <a href={siteConfig.telephoneHref} style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#FF6333", color: "#FFFFFF", padding: "14px 28px", borderRadius: "50px", fontSize: "16px", fontWeight: 600, textDecoration: "none" }}>
              Appelez le {siteConfig.telephone}
            </a>
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Le marquage CE : une obligation legale
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Le <strong>marquage CE</strong> est obligatoire pour toute porte sectionnelle mise sur le marche europeen. Il atteste que le fabricant a realise les tests requis et que le produit respecte les exigences essentielles de la directive Machines 2006/42/CE. La plaque signaletique CE doit etre fixee de maniere visible et durable sur la porte. Elle indique le nom du fabricant, l&apos;annee de fabrication, le poids et les references normatives.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Un installateur qui pose une porte sans marquage CE engage sa responsabilite penale en cas d&apos;accident. De meme, un particulier ou une copropriete qui fait installer une porte non conforme s&apos;expose a des sanctions et a un defaut de couverture d&apos;assurance. Verifiez systematiquement la presence du marquage CE avant de valider toute installation.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Mise aux normes d&apos;une porte existante
          </h2>
          <p style={{ marginBottom: "20px" }}>
            De nombreuses portes sectionnelles installees avant 2005 ne disposent pas de tous les <strong>dispositifs de securite</strong> desormais obligatoires. La mise aux normes consiste a ajouter les equipements manquants : photocellules, arete palpeuse, feu clignotant et systeme anti-chute. Le cout de cette mise a niveau se situe a partir de 350 euros selon les elements a installer.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Dans certains cas, la structure de la porte est trop ancienne pour recevoir les equipements modernes. Un remplacement complet s&apos;impose alors. Nos techniciens realisent un diagnostic gratuit pour evaluer si une mise aux normes est possible ou si un <a href="/installation-porte-sectionnelle-paris/" style={{ color: "#FF6333", fontWeight: 600 }}>remplacement de la porte</a> est necessaire. Nous assurons egalement le <a href="/depannage-porte-sectionnelle-paris/" style={{ color: "#FF6333", fontWeight: 600 }}>depannage</a> et la <a href="/reparation-porte-sectionnelle-paris/" style={{ color: "#FF6333", fontWeight: 600 }}>reparation</a> de tous les systemes de securite sur les portes sectionnelles a Paris.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Responsabilite du proprietaire et de l&apos;installateur
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Le proprietaire de la porte (particulier, copropriete ou entreprise) est responsable du maintien en etat de conformite de son installation. L&apos;<a href="/entretien-porte-sectionnelle-paris/" style={{ color: "#FF6333", fontWeight: 600 }}>entretien regulier</a> par un professionnel qualifie est indispensable pour garantir le bon fonctionnement des securites dans la duree. En cas d&apos;accident, l&apos;absence de carnet d&apos;entretien a jour peut constituer une circonstance aggravante et compromettre la prise en charge par l&apos;assurance.
          </p>

      </BlogArticleLayout>

      {/* Schema Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Securite Porte Sectionnelle : Normes et Obligations 2026",
        author: { "@type": "Organization", name: "Porte Sectionnelle Paris" },
        datePublished: "2026-04-01",
        image: "https://porte-sectionnelle-paris.fr/images/portes/porte-sectionnelle-securite-renforcee.webp",
      }) }} />

      <CTAForm />
      <Footer />
    </>
  );
}
