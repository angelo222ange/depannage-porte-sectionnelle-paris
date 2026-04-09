import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions Legales | Porte Sectionnelle Paris",
  description:
    "Mentions legales du site porte-sectionnelle-paris.fr. Informations sur l'editeur, l'hebergement et les conditions d'utilisation.",
  alternates: { canonical: "https://porte-sectionnelle-paris.fr/mentions-legales/" },
};

export default function MentionsLegalesPage() {
  const sections = [
    {
      title: "Editeur du site",
      content: [
        "Raison sociale : Porte Sectionnelle Paris",
        "Activite : Installation, depannage et reparation de portes sectionnelles",
        "Telephone : 09 72 12 41 41",
        "Email : contact@porte-sectionnelle-paris.fr",
        "Site web : https://porte-sectionnelle-paris.fr",
      ],
    },
    {
      title: "Hebergement",
      content: [
        "Le site porte-sectionnelle-paris.fr est heberge par :",
        "OVH SAS",
        "2 rue Kellermann, 59100 Roubaix, France",
        "Telephone : 1007",
        "Site web : https://www.ovhcloud.com",
      ],
    },
    {
      title: "Propriete intellectuelle",
      content: [
        "L'ensemble du contenu de ce site (textes, images, videos, logos, icones) est protege par le droit d'auteur et le droit de la propriete intellectuelle.",
        "Toute reproduction, representation, modification, publication, adaptation de tout ou partie des elements du site, quel que soit le moyen ou le procede utilise, est interdite sans autorisation ecrite prealable.",
        "Toute exploitation non autorisee du site ou de l'un quelconque des elements qu'il contient sera consideree comme constitutive d'une contrefacon et poursuivie conformement aux dispositions des articles L.335-2 et suivants du Code de Propriete Intellectuelle.",
      ],
    },
    {
      title: "Limitation de responsabilite",
      content: [
        "Les informations contenues sur ce site sont aussi precises que possible et le site est periodiquement remis a jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.",
        "Porte Sectionnelle Paris ne pourra etre tenu responsable des dommages directs et indirects causes au materiel de l'utilisateur, lors de l'acces au site porte-sectionnelle-paris.fr.",
        "Porte Sectionnelle Paris decline toute responsabilite quant a l'utilisation qui pourrait etre faite des informations et contenus presents sur porte-sectionnelle-paris.fr.",
      ],
    },
    {
      title: "Liens hypertextes",
      content: [
        "Le site porte-sectionnelle-paris.fr peut contenir des liens hypertextes vers d'autres sites internet. Les liens vers ces autres ressources vous font quitter le site porte-sectionnelle-paris.fr.",
        "Il est possible de creer un lien vers la page de presentation de ce site sans autorisation expresse de l'editeur. Aucune autorisation ou demande d'information prealable ne peut etre exigee par l'editeur a l'egard d'un site qui souhaite etablir un lien vers le site de l'editeur.",
      ],
    },
    {
      title: "Droit applicable",
      content: [
        "Tout litige en relation avec l'utilisation du site porte-sectionnelle-paris.fr est soumis au droit francais.",
        "L'utilisateur reconnait la competence exclusive des tribunaux competents de Paris.",
      ],
    },
  ];

  return (
    <>
      <Header />
      <main
        style={{
                    backgroundColor: "#F6F7F9",
          paddingTop: "152px",
        }}
      >
        <section
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            padding: "60px 30px 100px",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              fontWeight: 800,
              color: "#111111",
              marginBottom: "16px",
                          }}
          >
            Mentions legales
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "#999999",
              marginBottom: "48px",
                          }}
          >
            Derniere mise a jour : 6 avril 2026
          </p>

          {sections.map((section) => (
            <div key={section.title} style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#111111",
                  marginBottom: "16px",
                                  }}
              >
                {section.title}
              </h2>
              {section.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: "15px",
                    color: "#555555",
                    lineHeight: 1.7,
                    marginBottom: "10px",
                                      }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
