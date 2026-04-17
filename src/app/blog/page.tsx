import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Depannage Porte Sectionnelle Paris - Conseils",
  description:
    "Articles et conseils sur les portes sectionnelles : installation, entretien, motorisation. Guides par nos experts a Paris. Appelez le 09 72 12 41 41.",
  alternates: { canonical: "https://depannage-porte-sectionnelle-paris.fr/blog/" },
};

const articles = [
  {
    title: "Porte Sectionnelle Industrielle : Guide Pro",
    slug: "porte-sectionnelle-industrielle-guide",
    image: "/images/portes/porte-sectionnelle-industrielle.webp",
    excerpt:
      "Guide complet sur les portes sectionnelles industrielles : types (classique, rapide, coupe-feu), normes ICPE, usages professionnels en Ile-de-France et bonnes pratiques d'entretien pour les entreprises.",
    date: "9 avril 2026",
    category: "Industriel",
    readTime: "10 min",
  },
  {
    title: "Somfy vs Hormann : Quel Moteur Choisir ?",
    slug: "motorisation-somfy-hormann-comparatif",
    image: "/images/portes/moteur-porte-sectionnelle.webp",
    excerpt:
      "Comparatif objectif entre Somfy et Hormann pour motoriser votre porte sectionnelle. Domotique, fiabilite, vitesse, prix : tous les criteres pour choisir le bon moteur adapte a votre usage.",
    date: "8 avril 2026",
    category: "Comparatif",
    readTime: "9 min",
  },
  {
    title: "Remplacement Porte de Garage Paris",
    slug: "remplacement-porte-garage-paris",
    image: "/images/portes/installation-porte-sectionnelle.webp",
    excerpt:
      "Quand et comment remplacer votre porte de garage a Paris ? Signes d'usure a surveiller, types de remplacement possibles, delais d'intervention et budget previsionnel detaille.",
    date: "7 avril 2026",
    category: "Guide",
    readTime: "8 min",
  },
  {
    title: "Porte Sectionnelle Copropriete Paris",
    slug: "porte-sectionnelle-copropriete-paris",
    image: "/images/portes/porte-sectionnelle-automatique.webp",
    excerpt:
      "Installer une porte sectionnelle en copropriete a Paris : vote en AG, role du syndic, normes de securite, systemes d'acces par badges et couts partages entre coproprietaires.",
    date: "6 avril 2026",
    category: "Copropriete",
    readTime: "9 min",
  },
  {
    title: "Porte Sectionnelle Motorisee : 7 Avantages",
    slug: "porte-sectionnelle-motorisee-avantages",
    image: "/images/portes/porte-sectionnelle-motorisee.webp",
    excerpt:
      "Decouvrez les 7 avantages concrets d'une porte sectionnelle motorisee : confort quotidien, securite anti-effraction, domotique, reduction du bruit et valorisation immobiliere.",
    date: "5 avril 2026",
    category: "Motorisation",
    readTime: "8 min",
  },
  {
    title: "Isolation Porte Sectionnelle : Tout Savoir",
    slug: "isolation-thermique-porte-sectionnelle",
    image: "/images/portes/porte-sectionnelle-isolation-thermique.webp",
    excerpt:
      "Guide technique sur l'isolation des portes sectionnelles : coefficient Uc, panneaux sandwich, economies d'energie reelles, comparatif polyurethane vs polystyrene et isolation phonique.",
    date: "4 avril 2026",
    category: "Isolation",
    readTime: "8 min",
  },
  {
    title: "Depannage Porte Sectionnelle : Guide Urgence",
    slug: "depannage-porte-sectionnelle-urgence",
    image: "/images/portes/depannage-porte-sectionnelle.webp",
    excerpt:
      "Porte sectionnelle bloquee ? Les causes les plus frequentes, les gestes d'urgence a effectuer vous-meme, quand appeler un professionnel et combien coute un depannage a Paris.",
    date: "3 avril 2026",
    category: "Urgence",
    readTime: "7 min",
  },
  {
    title: "Prix Depannage Porte Sectionnelle Paris : Tarifs 2026",
    slug: "prix-porte-sectionnelle-paris",
    image: "/images/portes/porte-garage-sectionnelle.webp",
    excerpt:
      "Combien coute une porte sectionnelle a Paris en 2026 ? Fourchettes de prix par type, facteurs influencant le cout, TVA a 10 % et conseils pour obtenir le meilleur rapport qualite-prix.",
    date: "2 avril 2026",
    category: "Guide Tarifs",
    readTime: "9 min",
  },
  {
    title: "Securite Porte Sectionnelle : Normes 2026",
    slug: "securite-porte-sectionnelle-normes",
    image: "/images/portes/porte-sectionnelle-securite-renforcee.webp",
    excerpt:
      "Normes de securite EN 13241, photocellules, aretes palpeuses, anti-chute, marquage CE : tout savoir sur les obligations legales et la mise aux normes de votre porte sectionnelle.",
    date: "1 avril 2026",
    category: "Securite",
    readTime: "8 min",
  },
  {
    title: "Porte Sectionnelle Sur Mesure Paris",
    slug: "porte-sectionnelle-sur-mesure-paris",
    image: "/images/portes/porte-sectionnelle-sur-mesure.webp",
    excerpt:
      "Dimensions atypiques, linteau bas, couleurs RAL, hublots, facades classees : les solutions sur mesure pour installer une porte sectionnelle dans les garages parisiens aux contraintes uniques.",
    date: "30 mars 2026",
    category: "Sur Mesure",
    readTime: "8 min",
  },
  {
    title: "Comment Choisir sa Porte Sectionnelle",
    slug: "comment-choisir-sa-porte-sectionnelle",
    image: "/images/portes/porte-garage-sectionnelle.webp",
    excerpt:
      "Le choix d'une porte sectionnelle depend de nombreux criteres : isolation thermique, securite, motorisation, dimensions et budget. Decouvrez notre guide complet pour faire le bon choix et investir dans un equipement durable adapte a vos besoins.",
    date: "28 mars 2026",
    category: "Guide",
    readTime: "8 min",
  },
  {
    title: "Entretien Porte Sectionnelle : Les Gestes qui Sauvent",
    slug: "entretien-porte-sectionnelle-gestes-qui-sauvent",
    image: "/images/portes/entretien-porte-sectionnelle.webp",
    excerpt:
      "Un entretien regulier de votre porte sectionnelle prolonge sa duree de vie et previent les pannes couteuses. Lubrification des rails, verification des ressorts, controle de la motorisation : les gestes essentiels a connaitre.",
    date: "22 mars 2026",
    category: "Entretien",
    readTime: "6 min",
  },
  {
    title: "Porte Sectionnelle vs Basculante : Le Comparatif",
    slug: "porte-sectionnelle-vs-basculante",
    image: "/images/portes/porte-garage-basculante.webp",
    excerpt:
      "Porte sectionnelle ou basculante ? Deux solutions populaires pour votre garage a Paris. Isolation, encombrement, prix, securite, motorisation : decouvrez notre comparatif complet pour choisir la porte de garage ideale.",
    date: "15 mars 2026",
    category: "Comparatif",
    readTime: "9 min",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main
        style={{
                    backgroundColor: "#F6F7F9",
          paddingTop: "152px",
        }}
      >
        {/* Hero */}
        <section
          style={{
            maxWidth: "1312px",
            margin: "0 auto",
            padding: "60px 30px 40px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-block",
              backgroundColor: "rgba(255,99,51,0.1)",
              color: "#E63946",
              fontSize: "14px",
              fontWeight: 600,
              padding: "6px 16px",
              borderRadius: "50px",
              marginBottom: "20px",
                          }}
          >
            Notre Blog
          </span>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "#111111",
              lineHeight: 1.15,
              marginBottom: "16px",
                          }}
          >
            Conseils et actualites portes sectionnelles
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#666666",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: 1.6,
                          }}
          >
            Guides pratiques, comparatifs et conseils d'experts pour
            l'installation, l'entretien et la reparation de votre porte
            sectionnelle.
          </p>
        </section>

        {/* Intro text */}
        <section
          style={{
            maxWidth: "1312px",
            margin: "0 auto",
            padding: "0 30px 60px",
          }}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "48px 56px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#111111",
                marginBottom: "20px",
              }}
            >
              Pourquoi entretenir votre porte sectionnelle est essentiel
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#555555",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              Votre porte sectionnelle est sollicitee plusieurs fois par jour : ouvertures, fermetures, exposition aux intemperies et aux variations de temperature. Sans un entretien adapte, les ressorts perdent leur tension, les rails s'encrassent et la motorisation s'use prematurement. <strong style={{ color: "#111111" }}>Un entretien regulier previent les pannes couteuses</strong> et prolonge la duree de vie de votre equipement de plusieurs annees. A Paris, ou les conditions climatiques et la pollution accelerent l'usure, cette vigilance est d'autant plus importante.
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "#555555",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              Sur ce blog, nos techniciens specialises partagent leur expertise acquise au fil de <strong style={{ color: "#111111" }}>plus de 25 ans d'interventions sur portes sectionnelles a Paris et en Ile-de-France</strong>. Vous y trouverez des guides pratiques detailles, des comparatifs objectifs entre les differents types de portes et des conseils concrets pour diagnostiquer les problemes courants avant qu'ils ne s'aggravent.
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "#555555",
                lineHeight: 1.7,
              }}
            >
              Que vous soyez proprietaire d'un pavillon en banlieue parisienne, gerant d'un parking en copropriete ou responsable d'un local commercial, chaque article est concu pour vous aider a <strong style={{ color: "#111111" }}>prendre les bonnes decisions</strong> : choisir le bon modele, planifier la maintenance, identifier les signes d'usure et savoir quand faire appel a un professionnel. Notre objectif : vous rendre autonome sur les gestes simples et vous accompagner pour les interventions techniques.
            </p>
          </div>
        </section>

        {/* Articles grid */}
        <section
          style={{
            maxWidth: "1312px",
            margin: "0 auto",
            padding: "0 30px 100px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "28px",
            }}
          >
            {articles.map((article) => (
              <a
                key={article.slug}
                href={`/blog/${article.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
              <article
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  height: "100%",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: "100%",
                    height: "220px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={article.image}
                    alt={`${article.title} - porte sectionnelle Paris`}
                    title={article.title}
                    width={400}
                    height={220}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      backgroundColor: "#E63946",
                      color: "#FFFFFF",
                      fontSize: "12px",
                      fontWeight: 600,
                      padding: "4px 12px",
                      borderRadius: "50px",
                                          }}
                  >
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: "28px 24px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#999999",
                                              }}
                    >
                      {article.date}
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#999999",
                                              }}
                    >
                      {article.readTime} de lecture
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#111111",
                      lineHeight: 1.3,
                      marginBottom: "12px",
                                          }}
                  >
                    {article.title}
                  </h2>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "#777777",
                      lineHeight: 1.6,
                      marginBottom: "20px",
                                          }}
                  >
                    {article.excerpt}
                  </p>

                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#E63946",
                                          }}
                  >
                    Lire l'article
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3.333 8h9.334M8.667 4L12.667 8l-4 4"
                        stroke="#E63946"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </article>
              </a>
            ))}
          </div>
        </section>

        {/* CTA section */}
        <section
          style={{
            maxWidth: "1312px",
            margin: "0 auto",
            padding: "0 30px 100px",
          }}
        >
          <div
            style={{
              backgroundColor: "#111111",
              borderRadius: "16px",
              padding: "60px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "16px",
                              }}
            >
              Besoin d'un specialiste porte sectionnelle ?
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "32px",
                maxWidth: "500px",
                margin: "0 auto 32px",
                              }}
            >
              Nos techniciens interviennent dans tout Paris en moins de 30
              minutes. Devis gratuit et sans engagement.
            </p>
            <a
              href="tel:0972124141"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#E63946",
                color: "#FFFFFF",
                padding: "16px 32px",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
                              }}
            >
              Appeler le 09 72 12 41 41
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
