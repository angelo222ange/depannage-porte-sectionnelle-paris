import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAForm from "@/components/CTAForm";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Isolation Porte Sectionnelle : Tout Savoir en 2026",
  description:
    "Guide complet sur l'isolation thermique des portes sectionnelles : coefficient U, panneaux sandwich, economies d'energie, comparatif materiaux. Expert Paris.",
  alternates: { canonical: "https://depannage-porte-sectionnelle-paris.fr/blog/isolation-thermique-porte-sectionnelle/" },
  openGraph: {
    title: "Isolation Porte Sectionnelle : Tout Savoir en 2026",
    description: "Guide complet isolation thermique porte sectionnelle : coefficient U, panneaux sandwich, economies.",
    url: "https://depannage-porte-sectionnelle-paris.fr/blog/isolation-thermique-porte-sectionnelle/",
    images: ["/images/portes/porte-sectionnelle-isolation-thermique.webp"],
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
          <span>Isolation thermique porte sectionnelle</span>
        </nav>
      </div>

      {/* Article hero */}
      <section style={{ padding: "40px 30px 0", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ display: "inline-block", backgroundColor: "#FFEEF0", color: "#E63946", padding: "6px 14px", borderRadius: "50px", fontSize: "13px", fontWeight: 600, marginBottom: "20px" }}>
            Isolation
          </span>
          <h1 style={{ fontSize: "48px", fontWeight: 600, color: "#000000", lineHeight: "56px", marginBottom: "16px" }}>
            Isolation Thermique Porte Sectionnelle : Tout Savoir
          </h1>
          <p style={{ fontSize: "15px", color: "#999999", marginBottom: "32px" }}>
            4 avril 2026 &bull; 8 min de lecture
          </p>
          <img src="/images/portes/porte-sectionnelle-isolation-thermique.webp" alt="Porte sectionnelle avec isolation thermique performante" title="Isolation thermique porte sectionnelle - panneaux isolants Paris" width={800} height={400} loading="eager" decoding="async" style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "16px" }} />
        </div>
      </section>

      {/* Article content */}
      <BlogArticleLayout>

          <p style={{ marginBottom: "24px" }}>
            L&apos;<strong>isolation thermique d&apos;une porte sectionnelle</strong> impacte directement votre confort et votre facture energetique. A Paris, ou les garages sont frequemment attenants a l&apos;habitation ou situes en sous-sol d&apos;immeubles, une porte mal isolee cree un pont thermique majeur. Ce guide technique detaille les indicateurs de performance, les technologies disponibles et les economies reelles que vous pouvez attendre d&apos;une porte bien isolee.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Comprendre le coefficient thermique Uc
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Le <strong>coefficient Uc</strong> (coefficient de transmission thermique) mesure la quantite de chaleur qui traverse la porte par unite de surface et de temps. Il s&apos;exprime en W/m2.K (watts par metre carre par kelvin). Plus la valeur est basse, meilleure est l&apos;isolation. Une porte sectionnelle performante affiche un Uc compris entre 0,9 et 1,4 W/m2.K.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Attention a ne pas confondre le coefficient Up du panneau seul avec le Uc de la porte entiere. Le Uc prend en compte les joints, les liaisons entre panneaux et le cadre. C&apos;est cette valeur globale qui determine la performance reelle de votre porte en conditions d&apos;utilisation. Les fabricants serieux communiquent toujours le Uc et non uniquement le Up, bien plus flatteur.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Les panneaux sandwich : la technologie de reference
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Les <strong>panneaux sandwich</strong> constituent le standard de l&apos;industrie pour l&apos;isolation des portes sectionnelles. Ils se composent de deux parois en acier galvanise encadrant une ame isolante en mousse polyurethane injectee sous haute pression. Cette structure assure a la fois la rigidite mecanique et la performance thermique du panneau.
          </p>
          <p style={{ marginBottom: "20px" }}>
            L&apos;epaisseur du panneau determine directement la qualite de l&apos;isolation. Un panneau de <strong>40 mm</strong> offre un Uc d&apos;environ 1,2 W/m2.K, adapte a la plupart des garages residentiels. Un panneau de <strong>45 mm</strong> abaisse le Uc sous 1,0 W/m2.K, recommande pour les garages attenants a des pieces de vie. Les portes industrielles peuvent atteindre 80 mm d&apos;epaisseur avec des Uc inferieurs a 0,5 W/m2.K.
          </p>

          <img src="/images/portes/porte-sectionnelle-panneau-sandwich.webp" alt="Detail panneau sandwich isolant pour porte sectionnelle" title="Panneau sandwich polyurethane - isolation porte sectionnelle" width={800} height={350} loading="lazy" decoding="async" style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "12px", margin: "32px 0" }} />

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Joints et etancheite : les details qui comptent
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Meme avec des panneaux parfaitement isoles, une porte sectionnelle perd une partie significative de sa performance thermique par les <strong>joints peripheriques</strong>. Le joint de sol en caoutchouc EPDM epouse les irregularites du sol et bloque les infiltrations d&apos;air froid. Les joints lateraux entre les panneaux et les montants empechent les courants d&apos;air sur toute la hauteur de la porte.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Les joints entre panneaux meritent une attention particuliere. Les systemes a double levre offrent une etancheite superieure aux simples joints plats. Avec le temps, ces joints se deforment et perdent leur souplesse. Un remplacement tous les 5 a 7 ans maintient la performance d&apos;isolation a son niveau optimal. Nos techniciens verifient systematiquement l&apos;etat des joints lors de chaque <a href="/entretien-porte-sectionnelle-paris/" style={{ color: "#E63946", fontWeight: 600 }}>visite d&apos;entretien</a>.
          </p>

          {/* CTA mid-article */}
          <div style={{ backgroundColor: "#FFEEF0", borderRadius: "16px", padding: "32px", margin: "40px 0", textAlign: "center" as const }}>
            <p style={{ fontSize: "18px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>
              Ameliorez l&apos;isolation de votre garage a Paris
            </p>
            <a href={siteConfig.telephoneHref} style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E63946", color: "#FFFFFF", padding: "14px 28px", borderRadius: "50px", fontSize: "16px", fontWeight: 600, textDecoration: "none" }}>
              Appelez le {siteConfig.telephone}
            </a>
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Economies d&apos;energie : des chiffres concrets
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Un garage mal isole represente jusqu&apos;a <strong>30 % des deperditions thermiques</strong> d&apos;un logement lorsqu&apos;il est attenant a l&apos;habitation. Remplacer une vieille porte de garage sans isolation par une porte sectionnelle double paroi avec un Uc de 1,2 W/m2.K reduit ces pertes de 60 a 75 %. Sur une annee, l&apos;economie sur la facture de chauffage peut atteindre 150 a 300 euros selon la surface du garage et la zone climatique.
          </p>
          <p style={{ marginBottom: "20px" }}>
            A Paris, la temperature hivernale moyenne descend autour de 4 degres en janvier. Un garage non isole attenant a un sejour maintient une temperature interieure de 5 a 8 degres. Avec une porte sectionnelle isolee, cette temperature remonte a 12-15 degres, reduisant considerablement l&apos;effort de chauffage de la piece adjacente. L&apos;ete, l&apos;isolation fonctionne en sens inverse et preserve la fraicheur du garage.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Comparatif des materiaux isolants
          </h2>
          <p style={{ marginBottom: "20px" }}>
            La <strong>mousse polyurethane (PUR)</strong> domine le marche des portes sectionnelles grace a son excellent rapport conductivite/epaisseur. Son coefficient lambda de 0,022 a 0,028 W/m.K en fait l&apos;isolant le plus performant a epaisseur egale. Elle est injectee entre les parois lors de la fabrication et adhere parfaitement a l&apos;acier.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Le <strong>polystyrene expanse (PSE)</strong> equipe certains modeles d&apos;entree de gamme. Moins performant que le polyurethane (lambda de 0,032 a 0,038 W/m.K), il necessite une epaisseur plus importante pour atteindre le meme niveau d&apos;isolation. Son avantage reside dans son cout inferieur, mais a performance egale, le polyurethane reste plus compact et donc plus adapte aux garages parisiens aux dimensions contraintes.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Isolation phonique : un bonus appreciable en ville
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Les panneaux sandwich offrent egalement une <strong>isolation acoustique significative</strong>. Un panneau de 42 mm attenue le bruit de 25 a 28 dB, ce qui divise par quatre l&apos;intensite sonore percue. Dans les rues bruyantes de Paris, cette attenuation fait une difference tangible au quotidien, surtout si le garage donne directement sur une avenue passante ou un boulevard peripherique.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Pour maximiser l&apos;isolation thermique et phonique de votre garage, faites confiance a nos specialistes. Nous vous recommandons la solution adaptee a votre configuration et votre budget lors d&apos;une <a href="/installation-porte-sectionnelle-paris/" style={{ color: "#E63946", fontWeight: 600 }}>visite technique gratuite</a>. Nos interventions couvrent tout Paris et l&apos;Ile-de-France, du <a href="/depannage-porte-sectionnelle-paris/" style={{ color: "#E63946", fontWeight: 600 }}>depannage</a> a l&apos;<a href="/installation-porte-sectionnelle-paris/" style={{ color: "#E63946", fontWeight: 600 }}>installation complete</a>.
          </p>

      </BlogArticleLayout>

      {/* Schema Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Isolation Thermique Porte Sectionnelle : Tout Savoir",
        author: { "@type": "Organization", name: "Depannage Porte Sectionnelle Paris" },
        datePublished: "2026-04-04",
        image: "https://depannage-porte-sectionnelle-paris.fr/images/portes/porte-sectionnelle-isolation-thermique.webp",
      }) }} />

      <CTAForm />
      <Footer />
    </>
  );
}
