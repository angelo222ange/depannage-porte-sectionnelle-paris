import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAForm from "@/components/CTAForm";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Porte Sectionnelle Sur Mesure Paris | Guide Expert",
  description:
    "Porte sectionnelle sur mesure a Paris : dimensions atypiques, linteau bas, couleurs RAL, hublots, facades classees. Fabrication personnalisee et installation.",
  alternates: { canonical: "https://depannage-porte-sectionnelle-paris.fr/blog/porte-sectionnelle-sur-mesure-paris/" },
  openGraph: {
    title: "Porte Sectionnelle Sur Mesure Paris | Guide Expert",
    description: "Porte sectionnelle sur mesure Paris : dimensions atypiques, couleurs RAL, hublots, facades classees.",
    url: "https://depannage-porte-sectionnelle-paris.fr/blog/porte-sectionnelle-sur-mesure-paris/",
    images: ["/images/portes/porte-sectionnelle-sur-mesure.webp"],
  },
};

export default function Article() {
  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div style={{ maxWidth: "1312px", margin: "0 auto", padding: "180px 30px 0" }}>
        <nav style={{ fontSize: "14px", color: "#3B3B3B" }}>
          <a href="/" style={{ color: "#E63946" }}>Accueil</a>
          <span style={{ margin: "0 8px" }}>&gt;</span>
          <a href="/blog/" style={{ color: "#E63946" }}>Blog</a>
          <span style={{ margin: "0 8px" }}>&gt;</span>
          <span>Porte sectionnelle sur mesure Paris</span>
        </nav>
      </div>

      {/* Article hero */}
      <section style={{ padding: "40px 30px 0", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ display: "inline-block", backgroundColor: "#FFEEF0", color: "#E63946", padding: "6px 14px", borderRadius: "50px", fontSize: "13px", fontWeight: 600, marginBottom: "20px" }}>
            Sur Mesure
          </span>
          <h1 style={{ fontSize: "48px", fontWeight: 600, color: "#000000", lineHeight: "56px", marginBottom: "16px" }}>
            Porte Sectionnelle Sur Mesure a Paris : Guide Expert
          </h1>
          <p style={{ fontSize: "15px", color: "#999999", marginBottom: "32px" }}>
            30 mars 2026 &bull; 8 min de lecture
          </p>
          <img src="/images/portes/porte-sectionnelle-sur-mesure.webp" alt="Porte sectionnelle sur mesure installee sur facade parisienne" title="Porte sectionnelle sur mesure Paris - fabrication personnalisee" width={800} height={400} loading="eager" decoding="async" style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "16px" }} />
        </div>
      </section>

      {/* Article content */}
      <BlogArticleLayout>

          <p style={{ marginBottom: "24px" }}>
            Les garages parisiens ne sont pas standards. Ouvertures etroites d&apos;immeubles haussmanniens, linteaux bas de sous-sols, facades classees aux Batiments de France : autant de contraintes qui rendent une <strong>porte sectionnelle sur mesure</strong> indispensable. Ce guide detaille les possibilites de personnalisation, les delais de fabrication et les points de vigilance pour reussir votre projet a Paris.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Dimensions atypiques : les solutions techniques
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Les dimensions standard (2,40 m x 2 m ou 2,50 m x 2,125 m) ne conviennent qu&apos;a une minorite des garages parisiens. Les immeubles anciens presentent souvent des ouvertures de <strong>largeur irreguliere</strong>, parfois cintrees ou en plein cintre. Les hauteurs varient de 1,80 m dans certains sous-sols a plus de 3 m pour les portes cocheres reconverties en garages.
          </p>
          <p style={{ marginBottom: "20px" }}>
            La fabrication sur mesure permet de s&apos;adapter au millimetre pres. Les panneaux sont decoupes et assembles en usine selon les cotes exactes relevees par le technicien. Les rails de guidage sont egalement adaptes : rails standard, rails a faible retombee de linteau (a partir de 8 cm seulement) ou rails verticaux pour les garages sans plafond horizontal.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Le <strong>linteau bas</strong> constitue le defi le plus frequent a Paris. Les garages souterrains d&apos;immeubles des annees 1960-1970 disposent rarement de plus de 15 cm de retombee. Les systemes a ressorts arriere ou a ressorts lateraux permettent de reduire l&apos;espace necessaire au-dessus de l&apos;ouverture, la ou un systeme a ressort de torsion standard exige au minimum 21 cm.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Couleurs RAL et finitions personnalisees
          </h2>
          <p style={{ marginBottom: "20px" }}>
            La palette de <strong>couleurs RAL</strong> offre plus de 200 teintes pour harmoniser votre porte sectionnelle avec la facade de votre immeuble. Le blanc RAL 9016, le gris anthracite RAL 7016 et le brun RAL 8014 sont les plus demandes a Paris. Mais toute teinte du nuancier RAL est disponible sur commande.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Les finitions de surface ajoutent une dimension esthetique supplementaire. Le <strong>woodgrain</strong> reproduit fidelement les veines du bois naturel sans ses contraintes d&apos;entretien. Le micrograin offre un aspect contemporain mat. Le lisse convient aux styles minimalistes. Certains fabricants proposent meme des impressions numeriques qui imitent la pierre, le beton ou les textures metalliques brossees.
          </p>

          <img src="/images/portes/porte-sectionnelle-garage-residentiel.webp" alt="Porte sectionnelle sur mesure garage residentiel parisien" title="Porte sectionnelle personnalisee - garage residentiel Paris" width={800} height={350} loading="lazy" decoding="async" style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "12px", margin: "32px 0" }} />

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Hublots et vitrages : lumiere naturelle dans le garage
          </h2>
          <p style={{ marginBottom: "20px" }}>
            L&apos;ajout de <strong>hublots</strong> dans les panneaux apporte de la lumiere naturelle dans le garage sans compromettre la securite. Les hublots en verre acrylique double paroi conservent les proprietes isolantes du panneau. Ils sont disponibles en forme ronde, rectangulaire ou panoramique. Leur positionnement se definit librement sur un ou plusieurs panneaux.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Pour les garages donnant sur une cour interieure ou un jardin, des <strong>panneaux entierement vitres</strong> en aluminium et verre securit creent une facade lumineuse et moderne. Cette option est particulierement prisee dans les maisons de ville parisiennes ou l&apos;apport de lumiere valorise l&apos;espace et renforce l&apos;attrait esthetique de la propriete.
          </p>

          {/* CTA mid-article */}
          <div style={{ backgroundColor: "#FFEEF0", borderRadius: "16px", padding: "32px", margin: "40px 0", textAlign: "center" as const }}>
            <p style={{ fontSize: "18px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>
              Besoin d&apos;une porte sur mesure ? Visite technique gratuite
            </p>
            <a href={siteConfig.telephoneHref} style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E63946", color: "#FFFFFF", padding: "14px 28px", borderRadius: "50px", fontSize: "16px", fontWeight: 600, textDecoration: "none" }}>
              Appelez le {siteConfig.telephone}
            </a>
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Facades classees et contraintes architecturales
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Paris compte des milliers d&apos;immeubles situes en <strong>secteur sauvegarde</strong> ou dans le perimetre des Monuments Historiques. Toute modification de facade, y compris le remplacement d&apos;une porte de garage, necessite l&apos;accord de l&apos;Architecte des Batiments de France (ABF). Les exigences portent sur la couleur, le materiau apparent, la forme des panneaux et parfois la conservation des elements d&apos;origine.
          </p>
          <p style={{ marginBottom: "20px" }}>
            La porte sectionnelle sur mesure s&apos;adapte parfaitement a ces contraintes. Les panneaux peuvent reproduire l&apos;aspect d&apos;une porte en bois traditionnel tout en beneficiant des performances thermiques et mecaniques de l&apos;acier. Des moulures, des ferrures decoratives et des teintes specifiques permettent de respecter le cahier des charges de l&apos;ABF sans sacrifier la fonctionnalite.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Delais de fabrication et installation
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Une porte sectionnelle sur mesure necessite un <strong>delai de fabrication de 3 a 6 semaines</strong> selon la complexite de la commande. Les modeles avec finitions speciales, vitrages ou coloris hors stock standard allongent le delai vers le haut de cette fourchette. L&apos;installation elle-meme prend une journee complete pour un technicien experimente.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Chez <strong>Depannage Porte Sectionnelle Paris</strong>, nous gerons l&apos;integralite du processus : prise de cotes precise, conseil sur les options, commande en usine, livraison et <a href="/installation-porte-sectionnelle-paris/" style={{ color: "#E63946", fontWeight: 600 }}>installation professionnelle</a>. Notre experience de plus de 25 ans sur les garages parisiens nous permet d&apos;anticiper les difficultes et de vous proposer les solutions techniques les plus adaptees. Pour un <a href="/depannage-porte-sectionnelle-paris/" style={{ color: "#E63946", fontWeight: 600 }}>depannage</a> ou une <a href="/reparation-porte-sectionnelle-paris/" style={{ color: "#E63946", fontWeight: 600 }}>reparation</a>, nous intervenons egalement sur toutes les marques et tous les types de portes sur mesure.
          </p>

      </BlogArticleLayout>

      {/* Schema Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Porte Sectionnelle Sur Mesure a Paris : Guide Expert",
        author: { "@type": "Organization", name: "Depannage Porte Sectionnelle Paris" },
        datePublished: "2026-03-30",
        image: "https://depannage-porte-sectionnelle-paris.fr/images/portes/porte-sectionnelle-sur-mesure.webp",
      }) }} />

      <CTAForm />
      <Footer />
    </>
  );
}
