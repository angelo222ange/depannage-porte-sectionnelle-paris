import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAForm from "@/components/CTAForm";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Remplacement Porte de Garage Paris | Guide 2026",
  description:
    "Quand et comment remplacer votre porte de garage a Paris ? Signes d'usure, types de remplacement, delais, budget. Guide complet par nos experts.",
  alternates: { canonical: "https://porte-sectionnelle-paris.fr/blog/remplacement-porte-garage-paris/" },
  openGraph: {
    title: "Remplacement Porte de Garage Paris | Guide 2026",
    description: "Quand remplacer votre porte de garage a Paris ? Signes d'usure, types, delais et budget.",
    url: "https://porte-sectionnelle-paris.fr/blog/remplacement-porte-garage-paris/",
    images: ["/images/portes/installation-porte-sectionnelle.webp"],
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
          <span>Remplacement porte de garage Paris</span>
        </nav>
      </div>

      {/* Article hero */}
      <section style={{ padding: "40px 30px 0", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ display: "inline-block", backgroundColor: "#FFF1EC", color: "#FF6333", padding: "6px 14px", borderRadius: "50px", fontSize: "13px", fontWeight: 600, marginBottom: "20px" }}>
            Remplacement
          </span>
          <h1 style={{ fontSize: "48px", fontWeight: 600, color: "#000000", lineHeight: "56px", marginBottom: "16px" }}>
            Remplacement Porte de Garage a Paris : Guide Complet
          </h1>
          <p style={{ fontSize: "15px", color: "#999999", marginBottom: "32px" }}>
            7 avril 2026 &bull; 8 min de lecture
          </p>
          <img src="/images/portes/installation-porte-sectionnelle.webp" alt="Remplacement porte de garage par une porte sectionnelle a Paris" title="Remplacement porte garage Paris - installation neuve" width={800} height={400} loading="eager" decoding="async" style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "16px" }} />
        </div>
      </section>

      {/* Article content */}
      <BlogArticleLayout>

          <p style={{ marginBottom: "24px" }}>
            Votre <strong>porte de garage montre des signes de fatigue</strong> ? Grincements persistants, difficulte a l&apos;ouvrir, courants d&apos;air glacial en hiver, rouille visible sur les panneaux : autant de signaux qui indiquent qu&apos;un remplacement s&apos;impose. Ce guide vous aide a identifier le bon moment pour agir, a choisir le type de remplacement adapte et a anticiper le budget necessaire pour votre projet a Paris.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Les signes d&apos;usure qui doivent vous alerter
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Une porte de garage a une <strong>duree de vie moyenne de 15 a 25 ans</strong> selon sa qualite et son entretien. Certains signes d&apos;usure sont progressifs et faciles a negliger. Pourtant, les ignorer entraine des surcouts de reparation et des risques pour la securite de votre famille.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Les <strong>grincements et vibrations anormales</strong> lors de l&apos;ouverture trahissent une usure des roulettes, des charnires ou des rails. Si la lubrification ne resout pas le probleme, les pieces mecaniques sont en fin de vie. Le remplacement de ces elements sur une vieille porte coute souvent plus cher que l&apos;investissement dans une porte neuve.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Un <strong>desequilibre visible</strong> de la porte, qui penche d&apos;un cote ou ne reste plus en position semi-ouverte, signale une fatigue des ressorts. Les ressorts de torsion ont une duree de vie limitee a 10 000 a 15 000 cycles. Au-dela, ils perdent leur tension et la porte devient dangereuse a manipuler.
          </p>
          <p style={{ marginBottom: "20px" }}>
            La <strong>corrosion des panneaux</strong> affecte l&apos;esthetique mais aussi la solidite structurelle de la porte. Un panneau rouille ne resiste plus aux contraintes mecaniques et peut se deformer sous la pression du vent ou lors d&apos;un choc accidentel. La rouille progresse rapidement dans l&apos;environnement humide des garages souterrains parisiens.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Les types de remplacement possibles
          </h2>

          <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#000000", lineHeight: "30px", marginTop: "32px", marginBottom: "16px" }}>
            Remplacement a l&apos;identique
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Le <strong>remplacement a l&apos;identique</strong> consiste a installer une porte neuve du meme type et des memes dimensions. C&apos;est la solution la plus rapide car elle ne necessite aucune modification de la structure existante. Les rails, le cadre et le systeme de guidage sont conserves si leur etat le permet. Le delai d&apos;intervention est generalement de 2 a 3 semaines.
          </p>

          <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#000000", lineHeight: "30px", marginTop: "32px", marginBottom: "16px" }}>
            Changement de type de porte
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Passer d&apos;une <strong>porte basculante a une porte sectionnelle</strong> represente l&apos;evolution la plus frequente a Paris. La porte sectionnelle supprime le debord exterieur, ameliore l&apos;isolation et offre une meilleure exploitation de l&apos;espace. Ce changement implique la depose complete de l&apos;ancien systeme et l&apos;installation de nouveaux rails, ce qui allonge le temps de travail d&apos;une demi-journee environ.
          </p>

          <img src="/images/portes/installation-porte-sectionnelle-garage.webp" alt="Installation remplacement porte de garage sectionnelle" title="Remplacement porte garage - installation sectionnelle Paris" width={800} height={350} loading="lazy" decoding="async" style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "12px", margin: "32px 0" }} />

          <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#000000", lineHeight: "30px", marginTop: "32px", marginBottom: "16px" }}>
            Remplacement avec reprise de maconnerie
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Lorsque le tableau est deteriore, fissure ou non d&apos;equerre, une <strong>reprise de maconnerie</strong> s&apos;impose avant l&apos;installation de la nouvelle porte. Cette etape supplementaire ajoute un a deux jours de travail et un cout de 300 a 800 euros selon l&apos;ampleur des reprises. C&apos;est aussi l&apos;occasion d&apos;agrandir ou de modifier l&apos;ouverture si necessaire.
          </p>

          {/* CTA mid-article */}
          <div style={{ backgroundColor: "#FFF1EC", borderRadius: "16px", padding: "32px", margin: "40px 0", textAlign: "center" as const }}>
            <p style={{ fontSize: "18px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>
              Votre porte de garage a besoin d&apos;etre remplacee ?
            </p>
            <a href={siteConfig.telephoneHref} style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#FF6333", color: "#FFFFFF", padding: "14px 28px", borderRadius: "50px", fontSize: "16px", fontWeight: 600, textDecoration: "none" }}>
              Appelez le {siteConfig.telephone}
            </a>
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Delais d&apos;intervention a Paris
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Le remplacement d&apos;une porte de garage suit un processus en plusieurs etapes. La <strong>visite technique</strong> initiale est programmee sous 48 heures. Le technicien releve les cotes, evalue l&apos;etat du tableau et vous presente les options. Le devis est remis dans les 24 heures suivantes.
          </p>
          <p style={{ marginBottom: "20px" }}>
            La <strong>fabrication</strong> prend 2 a 4 semaines pour un modele standard et 4 a 6 semaines pour un modele sur mesure. L&apos;installation elle-meme dure une journee pour un remplacement simple et jusqu&apos;a deux jours si une reprise de maconnerie est necessaire. Nous coordonnons nos interventions pour minimiser la gene, particulierement dans les coproprietes ou l&apos;acces au parking doit etre maintenu.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Budget previsionnel pour un remplacement complet
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Le budget global d&apos;un <strong>remplacement de porte de garage a Paris</strong> se decompose en plusieurs postes :
          </p>
          <ul style={{ marginBottom: "24px", paddingLeft: "24px", display: "flex", flexDirection: "column" as const, gap: "8px" }}>
            <li><strong>Depose de l&apos;ancienne porte :</strong> a partir de 150 euros</li>
            <li><strong>Porte sectionnelle neuve double paroi :</strong> a partir de 1 200 euros</li>
            <li><strong>Motorisation :</strong> a partir de 350 euros</li>
            <li><strong>Pose professionnelle :</strong> a partir de 400 euros</li>
            <li><strong>Reprise maconnerie (si necessaire) :</strong> a partir de 300 euros</li>
          </ul>
          <p style={{ marginBottom: "20px" }}>
            Nos techniciens chez <strong>Porte Sectionnelle Paris</strong> vous accompagnent de la visite technique a la mise en service. Nous proposons une <a href="/installation-porte-sectionnelle-paris/" style={{ color: "#FF6333", fontWeight: 600 }}>installation complete</a> avec garantie sur la fourniture et la main d&apos;oeuvre. Pour toute question sur le remplacement de votre <a href="/porte-de-garage-paris/" style={{ color: "#FF6333", fontWeight: 600 }}>porte de garage</a>, n&apos;hesitez pas a nous contacter.
          </p>

      </BlogArticleLayout>

      {/* Schema Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Remplacement Porte de Garage a Paris : Guide Complet",
        author: { "@type": "Organization", name: "Porte Sectionnelle Paris" },
        datePublished: "2026-04-07",
        image: "https://porte-sectionnelle-paris.fr/images/portes/installation-porte-sectionnelle.webp",
      }) }} />

      <CTAForm />
      <Footer />
    </>
  );
}
