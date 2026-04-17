import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de Confidentialite | Depannage Porte Sectionnelle Paris",
  description:
    "Politique de confidentialite et protection des donnees personnelles du site depannage-porte-sectionnelle-paris.fr. RGPD et droits des utilisateurs.",
  alternates: { canonical: "https://depannage-porte-sectionnelle-paris.fr/politique-de-confidentialite/" },
};

export default function PolitiqueConfidentialitePage() {
  const sections = [
    {
      title: "Collecte des donnees personnelles",
      content: [
        "Dans le cadre de l'utilisation du site depannage-porte-sectionnelle-paris.fr, nous sommes amenes a collecter les donnees personnelles suivantes :",
        "- Nom et prenom : pour identifier votre demande",
        "- Adresse email : pour vous recontacter suite a votre demande",
        "- Numero de telephone : pour vous joindre dans le cadre d'une intervention",
        "- Adresse postale : pour localiser le lieu d'intervention",
        "- Message : pour comprendre votre besoin et y repondre de maniere adaptee",
        "Ces donnees sont collectees via le formulaire de contact present sur le site. Elles ne sont en aucun cas transmises a des tiers sans votre consentement.",
      ],
    },
    {
      title: "Finalite du traitement",
      content: [
        "Les donnees personnelles collectees sont utilisees exclusivement pour :",
        "- Repondre a vos demandes de devis et d'information",
        "- Planifier et realiser les interventions demandees",
        "- Assurer le suivi client apres intervention",
        "- Ameliorer la qualite de nos services",
        "Vos donnees ne sont jamais utilisees a des fins de prospection commerciale non sollicitee.",
      ],
    },
    {
      title: "Duree de conservation",
      content: [
        "Les donnees personnelles collectees sont conservees pour une duree maximale de 3 ans a compter du dernier contact.",
        "A l'issue de cette periode, les donnees sont automatiquement supprimees de nos systemes.",
        "Les donnees relatives aux devis et factures sont conservees conformement aux obligations legales et fiscales en vigueur (10 ans).",
      ],
    },
    {
      title: "Droits des utilisateurs (RGPD)",
      content: [
        "Conformement au Reglement General sur la Protection des Donnees (RGPD) et a la loi Informatique et Libertes, vous disposez des droits suivants :",
        "- Droit d'acces : obtenir la confirmation que vos donnees sont traitees et en obtenir une copie",
        "- Droit de rectification : corriger des donnees inexactes ou incompletes",
        "- Droit a l'effacement : demander la suppression de vos donnees personnelles",
        "- Droit a la limitation : restreindre le traitement de vos donnees",
        "- Droit a la portabilite : recevoir vos donnees dans un format structure et lisible",
        "- Droit d'opposition : vous opposer au traitement de vos donnees personnelles",
        "Pour exercer ces droits, contactez-nous par email a contact@depannage-porte-sectionnelle-paris.fr ou par telephone au 09 72 12 41 41.",
        "Vous pouvez egalement introduire une reclamation aupres de la CNIL (Commission Nationale de l'Informatique et des Libertes) : www.cnil.fr.",
      ],
    },
    {
      title: "Cookies",
      content: [
        "Le site depannage-porte-sectionnelle-paris.fr utilise des cookies pour assurer son bon fonctionnement et ameliorer l'experience utilisateur.",
        "Les cookies utilises sont :",
        "- Cookies techniques : necessaires au fonctionnement du site (session, preferences d'affichage)",
        "- Cookies analytiques : pour mesurer la frequentation du site et ameliorer nos services (Google Analytics)",
        "Vous pouvez a tout moment desactiver les cookies dans les parametres de votre navigateur. La desactivation des cookies techniques peut neanmoins alterer le fonctionnement du site.",
      ],
    },
    {
      title: "Securite des donnees",
      content: [
        "Nous mettons en oeuvre toutes les mesures techniques et organisationnelles necessaires pour garantir la securite et la confidentialite de vos donnees personnelles.",
        "L'ensemble des communications entre votre navigateur et notre site sont chiffrees via le protocole HTTPS/SSL.",
        "L'acces aux donnees personnelles est strictement limite aux personnes habilitees au sein de notre equipe.",
      ],
    },
    {
      title: "Modification de la politique",
      content: [
        "Nous nous reservons le droit de modifier la presente politique de confidentialite a tout moment. Les modifications prennent effet des leur publication sur le site.",
        "Nous vous invitons a consulter regulierement cette page pour prendre connaissance d'eventuelles modifications.",
      ],
    },
    {
      title: "Contact",
      content: [
        "Pour toute question relative a la protection de vos donnees personnelles :",
        "Depannage Porte Sectionnelle Paris",
        "Email : contact@depannage-porte-sectionnelle-paris.fr",
        "Telephone : 09 72 12 41 41",
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
            Politique de confidentialite
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
