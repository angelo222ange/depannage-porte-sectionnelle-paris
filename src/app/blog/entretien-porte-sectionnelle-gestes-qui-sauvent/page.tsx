import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAForm from "@/components/CTAForm";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Entretien Porte Sectionnelle Paris : Les Gestes qui Sauvent",
  description:
    "Lubrification, ressorts, cables, moteur : decouvrez les gestes d'entretien essentiels pour prolonger la duree de vie de votre porte sectionnelle a Paris.",
  alternates: { canonical: "https://porte-sectionnelle-paris.fr/blog/entretien-porte-sectionnelle-gestes-qui-sauvent/" },
  openGraph: {
    title: "Entretien Porte Sectionnelle Paris : Les Gestes qui Sauvent",
    description: "Lubrification, ressorts, cables, moteur : decouvrez les gestes d'entretien essentiels pour prolonger la duree de vie de votre porte sectionnelle a Paris.",
    url: "https://porte-sectionnelle-paris.fr/blog/entretien-porte-sectionnelle-gestes-qui-sauvent/",
    images: ["/images/portes/entretien-porte-sectionnelle.webp"],
  },
};

export default function Article() {
  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div style={{ maxWidth: "1312px", margin: "0 auto", padding: "180px 30px 0" }}>
        <nav style={{ fontSize: "14px", color: "#3B3B3B", }}>
          <a href="/" style={{ color: "#FF6333" }}>Accueil</a>
          <span style={{ margin: "0 8px" }}>&gt;</span>
          <a href="/blog/" style={{ color: "#FF6333" }}>Blog</a>
          <span style={{ margin: "0 8px" }}>&gt;</span>
          <span>Entretien porte sectionnelle : les gestes qui sauvent</span>
        </nav>
      </div>

      {/* Article hero */}
      <section style={{ padding: "40px 30px 0", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
          <span style={{ display: "inline-block", backgroundColor: "#FFF1EC", color: "#FF6333", padding: "6px 14px", borderRadius: "50px", fontSize: "13px", fontWeight: 600, marginBottom: "20px" }}>
            Entretien
          </span>
          <h1 style={{ fontSize: "48px", fontWeight: 600, color: "#000000", lineHeight: "56px", marginBottom: "16px" }}>
            Entretien Porte Sectionnelle a Paris : Les Gestes qui Sauvent
          </h1>
          <p style={{ fontSize: "15px", color: "#999999", marginBottom: "32px" }}>
            22 mars 2026 &bull; 6 min de lecture
          </p>
          <img src="/images/portes/entretien-porte-sectionnelle.webp" alt="Entretien professionnel d'une porte sectionnelle a Paris" title="Entretien porte sectionnelle - gestes essentiels Paris" width={800} height={400} loading="eager" decoding="async" style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "16px" }} />
        </div>
      </section>

      {/* Article content */}
      <BlogArticleLayout>

          <p style={{ marginBottom: "24px" }}>
            Une <strong>porte sectionnelle</strong> bien entretenue dure en moyenne 20 a 25 ans. Sans entretien, cette duree chute a 10 ans, avec des pannes de plus en plus frequentes. A Paris, ou les portes de garage subissent la pollution urbaine, les ecarts de temperature et un usage intensif, un entretien regulier n&apos;est pas un luxe mais une necessite. Voici les gestes concrets qui preservent votre equipement.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            A quelle frequence entretenir sa porte sectionnelle ?
          </h2>
          <p style={{ marginBottom: "20px" }}>
            La regle de base est simple : <strong>deux interventions par an</strong>, idealement au printemps et a l&apos;automne. Ces deux periodes correspondent aux changements de temperature qui affectent la dilatation des materiaux et la viscosite des lubrifiants.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Pour un usage professionnel ou un parking collectif avec des cycles quotidiens eleves, un entretien trimestriel est recommande. Un technicien specialise detectera les signes d&apos;usure avant qu&apos;ils ne deviennent des pannes couteuses.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Etape 1 : Nettoyage des panneaux et des joints
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Commencez par nettoyer les <strong>panneaux</strong> avec de l&apos;eau tiede et un detergent doux. A Paris, les poussieres fines, la suie et les residus de pollution s&apos;accumulent rapidement sur les surfaces. Un nettoyage semestriel evite la corrosion prematuree de l&apos;acier et preserve l&apos;aspect esthetique de la porte.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Inspectez les <strong>joints peripheriques</strong> en caoutchouc. Ils assurent l&apos;etancheite a l&apos;air et a l&apos;eau. S&apos;ils sont fendilles, durcis ou deformes, remplacez-les immediatement. Un joint defaillant laisse passer l&apos;humidite qui accelere l&apos;usure des composants metalliques.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Etape 2 : Lubrification des rails et des charniere
          </h2>
          <p style={{ marginBottom: "20px" }}>
            La <strong>lubrification</strong> est le geste d&apos;entretien le plus important. Appliquez un lubrifiant silicone en spray sur toute la longueur des rails verticaux et horizontaux. Evitez absolument les graisses epaisses qui attirent la poussiere et forment un depot abrasif.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Lubrifiez chaque <strong>charniere</strong> entre les panneaux ainsi que les roulettes. Un grincement a l&apos;ouverture ou a la fermeture signale un manque de lubrification. Si le bruit persiste apres lubrification, la roulette est probablement usee et doit etre remplacee.
          </p>

          <img src="/images/portes/ressort-porte-sectionnelle.webp" alt="Ressort de torsion d'une porte sectionnelle" title="Ressort porte sectionnelle - verification et entretien Paris" width={800} height={350} loading="lazy" decoding="async" style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "12px", margin: "32px 0" }} />

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Etape 3 : Verification des ressorts de torsion
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Les <strong>ressorts de torsion</strong> supportent la quasi-totalite du poids de la porte. Ils sont sous haute tension et representent le composant le plus dangereux. Ne tentez jamais de les regler vous-meme. Verifiez visuellement qu&apos;ils ne presentent pas de deformation, de rouille ou de fissure.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Un test simple : debrayez le moteur et soulevez la porte a mi-hauteur. Si elle reste en place, les ressorts sont correctement equilibres. Si elle retombe ou remonte, le reglage est necessaire et doit etre confie a un <a href="/reparation-porte-sectionnelle-paris/" style={{ color: "#FF6333", fontWeight: 600 }}>technicien qualifie en reparation</a>.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Etape 4 : Controle des cables et des fixations
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Les <strong>cables de levage</strong> en acier galvanise travaillent a chaque cycle d&apos;ouverture. Inspectez-les pour reperer tout effilochage, brin casse ou signe de corrosion. Un cable endommage peut ceder brutalement et provoquer la chute de la porte.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Verifiez le serrage de toutes les <strong>fixations</strong> : vis des rails, supports de ressort, pattes de fixation des panneaux. Les vibrations repetees desserrent progressivement les assemblages. Utilisez une cle adaptee pour resserrer sans forcer.
          </p>

          {/* CTA mid-article */}
          <div style={{ backgroundColor: "#FFF1EC", borderRadius: "16px", padding: "32px", margin: "40px 0", textAlign: "center" as const }}>
            <p style={{ fontSize: "18px", fontWeight: 600, color: "#000000", marginBottom: "12px" }}>
              Besoin d&apos;un entretien professionnel ?
            </p>
            <a href={siteConfig.telephoneHref} style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#FF6333", color: "#FFFFFF", padding: "14px 28px", borderRadius: "50px", fontSize: "16px", fontWeight: 600, textDecoration: "none" }}>
              Appelez le {siteConfig.telephone}
            </a>
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Etape 5 : Entretien du moteur et de l&apos;electronique
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Si votre porte est motorisee, le <strong>moteur</strong> merite une attention particuliere. Depoussierer le boitier du moteur avec un chiffon sec. Verifiez que les cellules photoelectriques de securite ne sont pas obstruees par de la poussiere ou des toiles d&apos;araignee. Un capteur encrasse peut empecher la fermeture ou, pire, ne pas detecter un obstacle.
          </p>

          <img src="/images/portes/moteur-porte-sectionnelle.webp" alt="Moteur de porte sectionnelle a entretenir" title="Entretien moteur porte sectionnelle - verification Paris" width={800} height={350} loading="lazy" decoding="async" style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "12px", margin: "32px 0" }} />

          <p style={{ marginBottom: "20px" }}>
            Testez le <strong>systeme de debrayage manuel</strong> en simulant une coupure de courant. Vous devez pouvoir ouvrir la porte a la main sans effort excessif. Si la porte est lourde a manipuler, les ressorts ont besoin d&apos;un reglage ou le moteur force sur un mecanisme gripe.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Changez les piles de la telecommande une fois par an. Verifiez que le recepteur reagit correctement. Si la portee de la telecommande diminue, le recepteur peut etre interfere par un appareil electronique proche.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Les 5 signes d&apos;usure a ne jamais ignorer
          </h2>
          <ul style={{ marginBottom: "24px", paddingLeft: "24px", display: "flex", flexDirection: "column" as const, gap: "8px" }}>
            <li><strong>Bruit anormal :</strong> grincement, claquement ou vibration inhabituelle a l&apos;ouverture ou la fermeture</li>
            <li><strong>Mouvement saccade :</strong> la porte avance par a-coups au lieu de glisser fluidement</li>
            <li><strong>Ecart entre les panneaux :</strong> un jour visible entre deux sections signale une charniere cassee ou un rail deforme</li>
            <li><strong>Porte qui ne reste pas en position :</strong> elle redescend ou remonte toute seule, signe de ressorts fatigues</li>
            <li><strong>Traces de rouille :</strong> surtout aux points de contact metal-metal, les rails et les charniere sont les zones sensibles</li>
          </ul>
          <p style={{ marginBottom: "20px" }}>
            Si vous observez un ou plusieurs de ces signes, ne tardez pas. Un probleme mineur non traite se transforme rapidement en panne majeure. Contactez un specialiste en <a href="/entretien-porte-sectionnelle-paris/" style={{ color: "#FF6333", fontWeight: 600 }}>entretien de porte sectionnelle a Paris</a> pour un diagnostic rapide.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#000000", lineHeight: "36px", marginTop: "48px", marginBottom: "20px" }}>
            Contrat de maintenance : la tranquillite d&apos;esprit
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Un <strong>contrat de maintenance annuel</strong> inclut generalement deux visites preventives, le remplacement des pieces d&apos;usure courante (joints, roulettes, piles) et une intervention prioritaire en cas de panne. C&apos;est la solution la plus economique sur le long terme.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Chez <strong>Porte Sectionnelle Paris</strong>, nos contrats d&apos;entretien couvrent l&apos;ensemble des composants mecaniques et electroniques. Nos techniciens connaissent toutes les marques installees en region parisienne. Une porte bien entretenue, c&apos;est une porte qui fonctionne sans surprise, hiver comme ete.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Ces conseils d&apos;entretien s&apos;appliquent a tous les types de fermetures : <a href="/porte-de-garage-enroulable-paris/" style={{ color: "#FF6333", fontWeight: 600 }}>portes de garage enroulables</a>, <a href="/porte-de-garage-basculante-paris/" style={{ color: "#FF6333", fontWeight: 600 }}>portes basculantes</a>, <a href="/rideau-metallique-industriel-paris/" style={{ color: "#FF6333", fontWeight: 600 }}>rideaux metalliques industriels</a> et <a href="/porte-souple-rapide-paris/" style={{ color: "#FF6333", fontWeight: 600 }}>portes souples rapides</a>. Chaque type de porte a ses specificites d&apos;entretien, mais les principes de base restent les memes : lubrification, controle visuel et intervention rapide au moindre signe d&apos;usure.
          </p>

      </BlogArticleLayout>

      {/* Schema Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Entretien Porte Sectionnelle a Paris : Les Gestes qui Sauvent",
        author: { "@type": "Organization", name: "Porte Sectionnelle Paris" },
        datePublished: "2026-03-22",
        image: "https://porte-sectionnelle-paris.fr/images/portes/entretien-porte-sectionnelle.webp",
      }) }} />

      <CTAForm />
      <Footer />
    </>
  );
}
