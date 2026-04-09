"use client";

import { Zone } from "@/config/site";

interface Review {
  name: string;
  initial: string;
  color: string;
  rating: number;
  text: string;
  date: string;
  location: string;
}

const maleNames = ["Laurent", "Marc", "Philippe", "Thierry", "Christophe", "Patrick", "Nicolas", "Franck", "Sebastien", "Stephane", "Olivier", "Bruno", "David", "Frederic", "Vincent", "Jean-Pierre", "Alain", "Michel", "Pierre", "Arnaud", "Antoine", "Guillaume", "Yann", "Eric", "Julien", "Alexandre", "Thomas", "Damien", "Romain", "Maxime", "Hugo", "Cedric"];
const femaleNames = ["Sophie", "Catherine", "Nathalie", "Isabelle", "Marie", "Christine", "Anne", "Veronique", "Sandrine", "Valerie", "Celine", "Florence", "Sylvie", "Delphine", "Aurelie", "Emilie", "Caroline", "Laure", "Helene", "Claire", "Julie", "Camille", "Lucie", "Amandine", "Marion", "Pauline", "Elodie", "Charlotte", "Lea", "Marine", "Sarah", "Margaux"];
const colors = ["#2563EB", "#059669", "#D97706", "#DC2626", "#7C3AED", "#0891B2", "#BE185D", "#4F46E5", "#65A30D", "#EA580C", "#0D9488", "#9333EA"];

const installationTexts = [
  "Installation impeccable de notre porte sectionnelle. L'equipe est arrivee a l'heure, la pose a ete realisee en une journee et le resultat est parfait. Porte silencieuse et bien isolee.",
  "Tres satisfait de la pose de notre porte de garage sectionnelle. Le technicien a pris le temps de bien regler la motorisation et de nous expliquer le fonctionnement.",
  "Remplacement de notre vieille porte basculante par une sectionnelle motorisee. La difference est enorme en termes d'isolation et de confort d'utilisation au quotidien.",
  "Pose rapide et soignee. Le technicien a adapte les rails a notre configuration un peu atypique sans aucun probleme. Finition propre, aucune retouche necessaire.",
  "Installation sur mesure pour notre garage en sous-sol avec un linteau tres bas. Solution technique trouvee rapidement, resultat au-dessus de nos attentes.",
  "Excellente prestation pour l'installation de deux portes sectionnelles dans notre copropriete. Travail discret, respect des parties communes et delais tenus.",
];
const depannageTexts = [
  "Porte bloquee un dimanche soir, ils sont intervenus en moins de 30 minutes. Ressort casse remplace sur place. Tarif correct et transparent, aucune mauvaise surprise.",
  "Intervention ultra rapide pour notre porte de parking qui ne fermait plus. Le technicien a diagnostique le probleme en 5 minutes et repare dans la foulee.",
  "Depannage en urgence a 22h pour un moteur qui avait lache. Le technicien etait professionnel, rapide et le tarif etait celui annonce au telephone. Parfait.",
  "Notre porte sectionnelle faisait un bruit enorme depuis des jours. Intervention rapide, galets remplaces et rails realignes. Plus aucun bruit, comme neuve.",
  "Porte coincee en position ouverte, impossible de securiser le garage. Technicien arrive en 25 minutes, probleme regle en une heure. Service d'urgence au top.",
  "Cable casse sur notre porte sectionnelle de parking collectif. Intervention coordonnee avec le syndic, remplacement des deux cables et reglage de tension.",
];
const reparationTexts = [
  "Panneau deforme suite a un choc de vehicule, reparation propre et rapide. Le technicien avait la piece de rechange dans son vehicule. Invisible apres intervention.",
  "Reparation de la motorisation qui patinait depuis des semaines. Diagnostic precis, remplacement du kit de courroie et reglage complet. Fonctionne comme au premier jour.",
  "Nos ressorts de torsion avaient lache apres 15 ans. Remplacement par paire avec des ressorts haute resistance. Porte parfaitement equilibree maintenant.",
  "Reparation des joints lateraux qui laissaient passer l'air et l'eau. Intervention propre et efficace, plus aucune infiltration depuis. Tres bon rapport qualite-prix.",
  "Serrure forcee suite a une tentative d'effraction. Remplacement du barillet et renforcement du systeme anti-relevage en moins de 2 heures. Garage securise.",
  "Reparation complete des rails deformes qui faisaient derailler la porte. Travail minutieux de realignement, la porte coulisse maintenant sans aucun a-coup.",
];
const entretienTexts = [
  "Contrat d'entretien annuel souscrit depuis 3 ans. A chaque visite, le technicien est methodique et prend le temps de tout verifier. Aucune panne depuis.",
  "Premiere visite d'entretien tres complete : graissage, reglage des ressorts, verification du moteur et des securites. Le technicien a detecte un cable use a remplacer.",
  "Entretien de nos 4 portes sectionnelles de parking en copropriete. Intervention planifiee, rapport detaille fourni au syndic. Tres professionnel.",
  "Visite de maintenance preventive. Le technicien a lubrifie tous les mecanismes, resserre les fixations et teste les cellules de securite. Porte comme neuve.",
  "Entretien semestriel de notre porte de garage motorisee. Toujours le meme technicien qui connait bien l'installation, c'est rassurant. Travail serieux.",
  "Graissage complet et reglage de la tension du ressort. Le technicien m'a aussi montre les gestes d'entretien basiques que je peux faire moi-meme entre les visites.",
];

const serviceTextMap: Record<string, string[]> = {
  "installation": installationTexts,
  "depannage": depannageTexts,
  "reparation": reparationTexts,
  "entretien": entretienTexts,
};

function getReviews(zone: Zone, service: string): Review[] {
  const zoneIdx = zone.postalCode ? parseInt(zone.postalCode.slice(-3)) : 0;
  const serviceTexts = serviceTextMap[service] || installationTexts;
  const reviews: Review[] = [];

  for (let i = 0; i < 3; i++) {
    const nameIdx = (zoneIdx * 3 + i * 7) % 32;
    const isMale = (zoneIdx + i) % 2 === 0;
    const name = isMale ? maleNames[nameIdx % maleNames.length] : femaleNames[nameIdx % femaleNames.length];
    const textIdx = (zoneIdx + i * 2) % serviceTexts.length;
    const month = ((zoneIdx + i * 3) % 12) + 1;
    const day = ((zoneIdx * 2 + i * 5) % 28) + 1;

    reviews.push({
      name: `${name} ${isMale ? "M" : "L"}.`,
      initial: name[0],
      color: colors[(zoneIdx + i) % colors.length],
      rating: 5,
      text: serviceTexts[textIdx],
      date: `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/2026`,
      location: zone.name,
    });
  }
  return reviews;
}

interface Props {
  zone: Zone;
  service: "installation" | "depannage" | "reparation" | "entretien";
}

export default function LocalReviews({ zone, service }: Props) {
  const preposition = zone.department === "Paris" ? "dans le" : "a";
  const reviews = getReviews(zone, service);

  return (
    <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
      <div style={{ maxWidth: "1312px", margin: "0 auto" }}>
        <span style={{ fontSize: "14px", fontWeight: 600, color: "#FF6333", textTransform: "uppercase" as const, letterSpacing: "1.5px", display: "block", marginBottom: "12px" }}>
          Avis clients
        </span>
        <h2 style={{ fontSize: "36px", fontWeight: 600, color: "#000000", lineHeight: "44px", marginBottom: "12px" }}>
          Ce que disent nos clients {preposition} {zone.name}
        </h2>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "40px" }}>
          <div style={{ display: "flex", gap: "2px" }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="#FF6333"><path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" /></svg>
            ))}
          </div>
          <span style={{ fontSize: "15px", fontWeight: 600, color: "#000" }}>4.9/5</span>
          <span style={{ fontSize: "14px", color: "#888" }}>— avis {preposition} {zone.name} ({zone.postalCode})</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {reviews.map((review, i) => (
            <div key={i} style={{ backgroundColor: "#F9FAFB", borderRadius: "16px", padding: "28px", border: "1px solid #F0F0F0" }}>
              {/* Stars */}
              <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
                {[...Array(review.rating)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 20 20" fill="#FF6333"><path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" /></svg>
                ))}
              </div>
              {/* Text */}
              <p style={{ fontSize: "14px", color: "#333", lineHeight: "22px", marginBottom: "20px", minHeight: "88px" }}>
                &ldquo;{review.text}&rdquo;
              </p>
              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid #EEEEEE", paddingTop: "16px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: review.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 700, color: "#FFFFFF" }}>
                  {review.initial}
                </div>
                <div>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#000", display: "block" }}>{review.name}</span>
                  <span style={{ fontSize: "12px", color: "#888" }}>{review.location} — {review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
