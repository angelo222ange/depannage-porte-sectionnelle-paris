import { Zone, zones, siteConfig } from "@/config/site";
import { localData } from "@/lib/zone-content";

export interface EntretienZoneContent {
  intro: string;
  seo1Title: string;
  seo1: string;
  seo2Title: string;
  seo2: string;
  entretienProcess: { step: string; description: string }[];
  faq: { question: string; answer: string }[];
}

// Helper: get zone index for template rotation
function getZoneIndex(zone: Zone): number {
  const idx = zones.findIndex(z => z.slug === zone.slug);
  return idx >= 0 ? idx : Math.abs(zone.slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0)) % 6;
}

function pick<T>(arr: T[], idx: number): T {
  return arr[idx % arr.length];
}

type LocalDataEntry = {
  landmarks: string[];
  streets: string[];
  neighborhoods: string[];
  metros: string[];
};

const defaultLocal: LocalDataEntry = {
  landmarks: ["le centre-ville"],
  streets: ["les axes principaux"],
  neighborhoods: ["le quartier"],
  metros: ["la gare"],
};

// ===============================================
// INTRO templates — 6 entretien-specific intros
// ===============================================

type IntroFn = (zone: Zone, data: LocalDataEntry, prep: string) => string;

const introTemplates: IntroFn[] = [
  // 0: contrat maintenance annuel
  (zone, data, prep) => `L'entretien regulier de votre porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}) est la garantie d'un fonctionnement fiable et silencieux pendant toute la duree de vie de votre equipement. Notre equipe de techniciens specialises realise des visites de maintenance programmees dans un rayon immediat autour de ${data.landmarks[0]}, dans les quartiers de ${data.neighborhoods[0]} et le long de ${data.streets[0]}. Avec plus de 25 ans d'experience en entretien de portes sectionnelles en region parisienne, nous avons developpe un protocole de maintenance en 20 points de controle qui couvre l'integralite des composants mecaniques, electroniques et de securite. Chaque visite d'entretien est documentee dans un rapport technique complet, transmis par email, qui detaille l'etat de chaque element et les preconisations pour la periode suivante. Un contrat de maintenance annuel vous offre la tranquillite d'esprit : deux visites programmees, une priorite d'intervention en cas de panne et des tarifs preferentiels sur les pieces de remplacement.`,

  // 1: lubrification et graissage
  (zone, data, prep) => `Le graissage et la lubrification des composants mecaniques de votre porte sectionnelle ${prep} ${zone.name}, secteur ${zone.postalCode}, constituent l'intervention d'entretien la plus frequente et la plus efficace pour prolonger la duree de vie de votre equipement. Les galets en nylon, les charnieres inter-panneaux, les ressorts de torsion, les rails de guidage et les paliers de roulement — chaque element mobile necessite une lubrification adaptee a sa nature et a sa fonction. Nos techniciens qui interviennent quotidiennement dans ${data.neighborhoods[0]} et aux abords de ${data.landmarks[0]} utilisent des produits specifiques pour chaque composant : graisse au lithium longue duree pour les galets et charnieres, spray silicone pour les rails et joints, huile de vaseline pour les serrures et verrous. Le long de ${data.streets[0]}, nos vehicules d'intervention sont equipes d'une gamme complete de lubrifiants professionnels adaptes a chaque marque et chaque type de mecanisme. Un graissage correctement realise reduit les frottements de 40 a 60 %, diminue le bruit de fonctionnement et allege la charge sur la motorisation.`,

  // 2: reglage tension ressorts
  (zone, data, prep) => `Le reglage de la tension des ressorts est l'operation d'entretien la plus technique sur une porte sectionnelle ${prep} ${zone.name}. Les ressorts de torsion compensent le poids du tablier — entre 60 et 150 kg selon les dimensions — et leur tension doit etre calibree au gramme pres pour garantir un equilibrage parfait. Dans les garages de ${data.neighborhoods[0]}, nos techniciens verifient la tension a chaque visite de maintenance a l'aide d'un dynamometre de precision. La norme de reference fixe l'effort de manoeuvre maximal a 400 Newtons (environ 40 kg) en position mi-course — au-dela, le ressort est considere comme fatigue et doit etre retendu ou remplace. Nos specialistes qui interviennent pres de ${data.landmarks[0]} ajustent la tension en calculant le nombre exact de tours supplementaires necessaires en fonction du diametre du fil, du poids du tablier et de la hauteur de la porte. Le long de ${data.streets[0]}, chaque reglage est valide par un test de force de fermeture sur dix cycles complets. Un ressort correctement tendu garantit un fonctionnement equilibre et prolonge la duree de vie de la motorisation en reduisant l'effort mecanique de 25 a 35 %.`,

  // 3: verification securite
  (zone, data, prep) => `La verification des dispositifs de securite de votre porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}) est une etape critique de chaque visite d'entretien. Les cellules photoelectriques, les aretes sensibles, le systeme anti-chute (parachute) et le limiteur d'effort constituent un ensemble de protections reglementaires qui garantissent la securite des personnes et des vehicules. Nos techniciens, presents chaque semaine dans ${data.neighborhoods[0]} et autour de ${data.landmarks[0]}, testent systematiquement chaque dispositif selon le protocole defini par la norme EN 13241-1. Le test du parachute verifie que le tablier se bloque instantanement en cas de rupture de ressort ou de cable — un mecanisme vital dans les parkings de copropriete ou les enfants et les personnes agees circulent regulierement. Les cellules photoelectriques sont nettoyees, recalibrees et leur temps de reaction est mesure au chronometre. Le long de ${data.streets[0]}, nos vehicules embarquent l'equipement de test complet pour valider chaque dispositif de securite et delivrer une attestation de conformite apres chaque visite de maintenance.`,

  // 4: nettoyage et esthetique
  (zone, data, prep) => `L'entretien esthetique et le nettoyage methodique de votre porte sectionnelle ${prep} ${zone.name} preservent non seulement l'apparence de votre equipement mais participent activement a son bon fonctionnement mecanique. Les panneaux en acier double peau, les joints peripheriques, les rails de guidage et les composants electroniques accumulent poussieres, pollens, graisses et residus de circulation urbaine qui accelerent l'usure et le grippage des mecanismes. Dans les immeubles de ${data.neighborhoods[0]}, ou la pollution et les particules fines sont particulierement presentes, nos techniciens procedent a un nettoyage complet lors de chaque visite d'entretien. Les panneaux sont nettoyes avec des produits non abrasifs et non corrosifs, adaptes au type de finition — laquage, rainurage, imitation bois. Les rails de guidage sont debarasses des depots de graisse seche et des poussieres metalliques qui s'y accumulent. Pres de ${data.landmarks[0]}, nos equipes nettoient et verifient les capteurs optiques dont l'encrassement est la premiere cause de dysfonctionnement. Le long de ${data.streets[0]}, chaque visite inclut le nettoyage des joints d'etancheite peripheriques qui, une fois propres, retrouvent leur souplesse et leur capacite d'isolation thermique et acoustique.`,

  // 5: diagnostic preventif
  (zone, data, prep) => `Le diagnostic preventif est la pierre angulaire de notre service d'entretien de portes sectionnelles ${prep} ${zone.name}. Contrairement a une approche curative qui intervient apres la panne, notre methode preventive anticipe les defaillances en detectant les signes precurseurs d'usure avant qu'ils ne provoquent un dysfonctionnement. Nos techniciens, forts de plus de 25 ans d'experience en region parisienne, inspectent chaque composant avec un regard expert affute par des milliers d'interventions dans ${data.neighborhoods[0]}. L'usure des cables se detecte a l'apparition des premiers brins effiloches, bien avant la rupture. La fatigue des ressorts se mesure au dynamometre par une perte de tension progressive. Le jeu des galets se controle visuellement et au toucher — un galet oval annonce un blocage imminent. Pres de ${data.landmarks[0]}, nos techniciens etablissent une fiche de sante complete de votre equipement avec un pronostic d'usure pour chaque composant. Ce diagnostic permet de planifier les remplacements preventifs lors de la visite suivante, au lieu de subir une panne imprevue. Le long de ${data.streets[0]}, cette approche anticipative reduit les pannes de plus de 70 % et prolonge la duree de vie globale de l'equipement de 30 a 40 %.`,
];

// ===============================================
// SEO1 — 6 entretien-specific angles
// ===============================================

type ContentFn = (zone: Zone, data: LocalDataEntry, prep: string) => string;

const seo1Titles: ((zone: Zone, prep: string) => string)[] = [
  (zone, prep) => `Contrat de maintenance annuel pour porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Lubrification et graissage de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Reglage de tension des ressorts de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Verification securite de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Nettoyage et entretien esthetique de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Diagnostic preventif de porte sectionnelle ${prep} ${zone.name}`,
];

const seo1Templates: ContentFn[] = [
  // 0: Contrat maintenance annuel — 2 visites/an, checklist 20 points, tarif forfaitaire
  (zone, data, prep) => `Le contrat de maintenance annuel est la formule la plus complete pour garantir le bon fonctionnement de votre porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}). Il comprend deux visites programmees par an — idealement au printemps et a l'automne — au cours desquelles un technicien specialise realise une checklist exhaustive de 20 points de controle couvrant l'integralite du mecanisme. Chaque visite dans les garages de ${data.neighborhoods[0]} dure environ 45 minutes et suit un protocole rigoureux : verification de la tension des ressorts au dynamometre, inspection visuelle et tactile des cables toron par toron, controle de l'usure des galets en nylon, mesure de l'alignement des rails au laser, test des cellules photoelectriques et de la barre palpeuse, etat des joints d'etancheite, couple de serrage des fixations, graissage de toutes les articulations et test complet de la motorisation sur dix cycles. Nos techniciens pres de ${data.landmarks[0]} documentent chaque observation dans un rapport technique transmis par email sous 24 heures. Le tarif forfaitaire du contrat inclut les deux visites, les petites fournitures (graisse, spray silicone, serre-cables) et une priorite d'intervention en cas de panne entre les visites le long de ${data.streets[0]}. Les pieces de remplacement identifiees comme necessaires lors de la visite sont proposees a tarif preferentiel, avec un devis separe et aucune obligation d'achat. Pour les coproprietes de ${pick(data.neighborhoods, 1)}, nous proposons un tarif degressif par nombre de portes et un interlocuteur unique pour le syndic.`,

  // 1: Lubrification et graissage — galets, charnieres, ressorts, rails, produits adaptes
  (zone, data, prep) => `La lubrification professionnelle de votre porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}) est une operation d'entretien essentielle qui requiert la connaissance precise des produits adaptes a chaque composant. Contrairement aux idees recues, un seul type de lubrifiant ne convient pas a l'ensemble du mecanisme — les galets en nylon exigent une graisse au lithium complexe resistant aux temperatures extremes, les charnieres inter-panneaux necessitent une graisse blanche non salissante, les ressorts de torsion demandent un film de protection anti-corrosion, et les rails de guidage fonctionnent mieux avec un spray silicone qui n'attire pas la poussiere. Dans les parkings de ${data.neighborhoods[0]}, nos techniciens appliquent chaque lubrifiant avec dosage et methode : trop de graisse sur un galet attire les impuretes et forme une pate abrasive, trop peu laisse le contact metal-nylon provoquer une usure prematuree. Les roulements a billes des galets haut de gamme sont lubrifies par injection laterale avec une graisse synthetique de grade alimentaire, compatible avec les joints d'etancheite du roulement. Pres de ${data.landmarks[0]}, nos equipes nettoient chaque point de graissage avant d'appliquer le lubrifiant neuf — la graisse ancienne chargee de particules metalliques doit etre eliminee pour ne pas contaminer la nouvelle. Le long de ${data.streets[0]}, chaque operation de lubrification est suivie d'un test de fonctionnement sur cinq cycles pour verifier la reduction effective du bruit et de l'effort moteur. Un graissage professionnel correctement realise dans les garages de ${pick(data.neighborhoods, 1)} prolonge la duree de vie des galets de 40 %, des charnieres de 50 % et reduit la consommation electrique du moteur de 15 a 20 %.`,

  // 2: Reglage tension ressorts — equilibrage tablier, test force fermeture, norme 400N
  (zone, data, prep) => `Le reglage de la tension des ressorts de votre porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}) est une operation de maintenance critique qui conditionne directement l'equilibrage du tablier, la charge sur la motorisation et la securite d'utilisation. La norme EN 13241-1 fixe un seuil maximal de 400 Newtons (environ 40 kg de force) pour l'effort de manoeuvre manuelle en position mi-course — au-dela, la porte est consideree comme dangereuse et le ressort doit etre regle ou remplace. Dans les garages de ${data.neighborhoods[0]}, nos techniciens mesurent cette force a chaque visite d'entretien a l'aide d'un dynamometre electronique de precision. Le ressort de torsion, monte sur l'arbre horizontal au-dessus de l'ouverture, accumule de l'energie elastique lors de la fermeture et la restitue lors de l'ouverture pour compenser le poids du tablier. Sa tension diminue progressivement au fil des cycles — environ 0,5 a 1 % de perte par tranche de 1 000 cycles, soit 2 a 4 % par an en usage residentiel standard. Nos specialistes pres de ${data.landmarks[0]} effectuent le reajustement en calculant le nombre exact de fractions de tour supplementaires necessaires, en tenant compte du diametre du fil (4,5 a 8 mm), du poids du tablier et de la geometrie de la porte. L'operation exige des barres de tension calibrees et une maitrise parfaite de la mecanique — l'energie stockee dans un ressort de torsion est considerable et toute manipulation sans competence est dangereuse. Le long de ${data.streets[0]}, chaque reglage est valide par un test complet sur dix cycles avec mesure de l'effort a trois positions du tablier : bas, mi-course et haut. Un equilibrage optimal dans les parkings de ${pick(data.neighborhoods, 1)} garantit un fonctionnement fluide, silencieux et une motorisation qui travaille sans effort excessif.`,

  // 3: Verification securite — cellules, aretes sensibles, anti-chute, test parachute
  (zone, data, prep) => `La verification des dispositifs de securite lors de l'entretien de votre porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}) est une obligation reglementaire pour les installations en copropriete et dans les etablissements recevant du public, et une recommandation imperative pour les installations residentielles. Les cellules photoelectriques, positionnees de part et d'autre de l'ouverture, detectent la presence d'un obstacle dans la course du tablier et commandent l'inversion immediate du mouvement. Nos techniciens dans ${data.neighborhoods[0]} verifient l'alignement des cellules, nettoient les lentilles optiques et mesurent le temps de reaction — un delai superieur a 0,5 seconde entre la detection et l'inversion signale un dysfonctionnement a corriger. Les aretes sensibles — barre palpeuse souple sur la traverse inferieure du tablier — detectent le contact physique avec un obstacle et declenchent le meme mecanisme de protection. Pres de ${data.landmarks[0]}, nos equipes testent la sensibilite de detection en placant un obstacle de reference (cylindre de 50 mm de diametre) dans la course du tablier. Le systeme anti-chute, communement appele parachute, bloque mecaniquement le tablier en cas de rupture de ressort ou de cable — nos techniciens simulent une rupture de cable en decrochant volontairement un cable et verifient que le parachute se declenche instantanement et bloque le tablier en position. Le long de ${data.streets[0]}, le limiteur d'effort electronique integre a la motorisation est teste en augmentant progressivement la resistance au mouvement pour verifier que le moteur s'arrete et inverse sa course avant d'atteindre la force maximale autorisee. Un rapport de verification complet est etabli apres chaque visite dans les coproprietes de ${pick(data.neighborhoods, 1)}, conforme aux exigences des assureurs et de la reglementation.`,

  // 4: Nettoyage et esthetique — panneaux, joints, rails, produits non abrasifs
  (zone, data, prep) => `Le nettoyage professionnel de votre porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}) fait partie integrante de chaque visite d'entretien et contribue autant a l'esthetique qu'au bon fonctionnement mecanique de l'equipement. Les panneaux en acier double peau, qu'ils soient lisses, nervures ou a finition imitation bois, accumulent au fil des mois poussieres, pollens, traces de doigts, projections de vehicule et micro-depots de pollution urbaine particulierement presents dans les quartiers de ${data.neighborhoods[0]}. Nos techniciens nettoient chaque panneau avec un produit detergent neutre (pH 6 a 8), applique a l'aide d'une eponge douce non abrasive, puis rince a l'eau claire. Les produits acides, chlores ou a base de solvants sont proscrits car ils attaquent la couche de laquage et accelerent la corrosion. Les joints peripheriques — joint bas en EPDM, joints lateraux a brosse ou a levre, joint superieur — sont debarasses des saletees incrustees et verifies quant a leur souplesse et leur capacite d'etancheite. Un joint durci par les UV ou le froid pres de ${data.landmarks[0]} perd sa fonction isolante et doit etre remplace. Les rails de guidage verticaux et horizontaux sont nettoyes a l'aide d'un chiffon imbibe de degraissant puis relubrifies au spray silicone. Le long de ${data.streets[0]}, les capteurs photoelectriques et la barre palpeuse sont nettoyes avec un chiffon microfibre sec pour eliminer les depots de poussiere qui alterent leur sensibilite. Ce nettoyage methodique dans les garages de ${pick(data.neighborhoods, 1)} maintient l'aspect neuf de votre porte et garantit le fonctionnement optimal de chaque composant.`,

  // 5: Diagnostic preventif — usure cables, fatigue ressorts, jeu galets, anticipation pannes
  (zone, data, prep) => `Le diagnostic preventif realise lors de l'entretien de votre porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}) est une inspection methodique de chaque composant destinee a detecter les signes d'usure avant qu'ils ne provoquent une panne. Cette approche anticipative, developpee par notre equipe au fil de 25 ans d'interventions en region parisienne, repose sur des criteres objectifs et mesurables pour chaque organe du mecanisme. Les cables en acier galvanise sont inspectes toron par toron dans les garages de ${data.neighborhoods[0]} — l'apparition du premier brin effiloche signale le debut de la fatigue, bien avant la rupture qui peut survenir 2 000 a 3 000 cycles plus tard. Les ressorts de torsion sont evalues par mesure dynamometrique — une perte de tension superieure a 10 % par rapport au calibrage nominal indique une fatigue significative qui justifie un remplacement programme plutot qu'une retension provisoire. Les galets en nylon sont controles visuellement et au toucher pres de ${data.landmarks[0]} — un galet qui commence a s'ovaliser ou qui presente un jeu lateral excessif dans la gorge du rail sera remplace preventivement pour eviter un deraillement du tablier. Les charnieres sont testees une a une pour detecter un jeu, un craquement ou une amorce de fissure de fatigue. Le long de ${data.streets[0]}, la motorisation est evaluee en mesurant l'intensite electrique absorbee — un moteur qui consomme 15 a 20 % de plus que la valeur nominale compense un frottement mecanique excessif quelque part dans la chaine cinematique. Chaque observation est consignee dans le rapport de diagnostic avec un niveau d'urgence : immediat, prochaine visite ou surveillance dans les coproprietes de ${pick(data.neighborhoods, 1)}.`,
];

// ===============================================
// SEO2 — 6 entretien-specific angles
// ===============================================

const seo2Titles: ((zone: Zone, prep: string) => string)[] = [
  (zone, prep) => `Frequence d'entretien ideale pour votre porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Entretien porte sectionnelle ${prep} ${zone.name} : ce que vous pouvez faire vous-meme`,
  (zone, prep) => `Economies long terme grace a l'entretien de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Entretien de porte sectionnelle en copropriete ${prep} ${zone.name}`,
  (zone, prep) => `Entretien de porte sectionnelle motorisee ${prep} ${zone.name}`,
  (zone, prep) => `Entretien saisonnier de porte sectionnelle ${prep} ${zone.name}`,
];

const seo2Templates: ContentFn[] = [
  // 0: Frequence entretien — 1x/an minimum, 2x/an parking collectif, entre-saisons ideal
  (zone, data, prep) => `La frequence d'entretien optimale d'une porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}) depend directement de l'intensite d'utilisation et du contexte d'installation. Pour un garage residentiel individuel avec une moyenne de 3 a 5 cycles par jour (soit 1 000 a 1 800 cycles par an), un entretien annuel professionnel suffit a maintenir l'ensemble du mecanisme en parfait etat de fonctionnement. Dans les parkings collectifs de ${data.neighborhoods[0]}, ou la porte sectionnelle est sollicitee 20 a 50 fois par jour par les allers et venues de multiples vehicules, deux visites de maintenance par an sont indispensables pour prevenir l'usure acceleree des composants mecaniques. Les entre-saisons — mars-avril et septembre-octobre — constituent les periodes ideales pour programmer ces visites pres de ${data.landmarks[0]}, car elles permettent de preparer l'equipement aux contraintes thermiques de l'ete et de l'hiver. La chaleur estivale provoque la dilatation des rails et des panneaux metalliques, tandis que le froid hivernal durcit les joints en caoutchouc et modifie la viscosité des lubrifiants. Le long de ${data.streets[0]}, nos techniciens adaptent les reglages et les produits de lubrification en fonction de la saison pour garantir un fonctionnement optimal toute l'annee. Pour les portes sectionnelles industrielles a tres forte frequentation (plus de 100 cycles par jour), nous recommandons un entretien trimestriel avec un suivi rapproche de l'usure des galets, des cables et de la motorisation dans les locaux de ${pick(data.neighborhoods, 1)}.`,

  // 1: Entretien DIY vs professionnel — ce qu'on peut faire soi-meme vs ce qui necessite un pro
  (zone, data, prep) => `L'entretien d'une porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}) se divise en deux categories distinctes : les gestes simples realisables par le proprietaire et les operations techniques qui exigent l'intervention d'un professionnel qualifie. Ce que vous pouvez faire vous-meme chaque trimestre dans votre garage de ${data.neighborhoods[0]} : nettoyer les panneaux avec un detergent doux et une eponge non abrasive, passer un chiffon sec sur les cellules photoelectriques, verifier visuellement l'etat des cables (absence de brins effiloches visibles), tester le systeme de deverrouillage manuel et lubrifier les rails de guidage avec un spray silicone disponible en grande surface. Ces gestes simples prennent 15 minutes et contribuent significativement au bon fonctionnement quotidien. En revanche, certaines operations pres de ${data.landmarks[0]} sont strictement reservees aux professionnels : le reglage de la tension des ressorts de torsion (energie stockee dangereuse), le remplacement des cables et des galets (risque de chute du tablier), la reprogrammation de la motorisation et le test des dispositifs de securite (norme EN 13241-1). Le long de ${data.streets[0]}, nos techniciens disposent de l'outillage specifique — dynamometre, barres de tension, laser d'alignement, testeur electronique — indispensable pour ces interventions. Tenter de retendre un ressort sans formation et sans equipement adapte expose a un risque grave d'accident : l'energie liberee par un ressort qui se deroule brutalement peut projeter la barre de tension avec une force considerable. Notre conseil pour les proprietaires de ${pick(data.neighborhoods, 1)} : assurez l'entretien courant vous-meme et confiez la maintenance technique annuelle a un professionnel certifie.`,

  // 2: Economies long terme — +30% duree de vie, -60% pannes, ROI du contrat maintenance
  (zone, data, prep) => `L'entretien regulier de votre porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}) represente un investissement modeste au regard des economies qu'il genere sur la duree de vie de l'equipement. Les statistiques compilees sur nos interventions en region parisienne au cours des dix dernieres annees sont eloquentes : les portes sectionnelles sous contrat de maintenance dans ${data.neighborhoods[0]} ont une duree de vie superieure de 30 a 40 % a celles qui ne beneficient d'aucun suivi regulier. En termes concrets, cela signifie qu'une porte correctement entretenue fonctionne 20 a 25 ans au lieu de 12 a 15 ans sans entretien. Les pannes imprevues — ressort casse, cable rompu, moteur bloque — sont reduites de plus de 60 % par la detection anticipee des composants en fin de vie pres de ${data.landmarks[0]}. Le cout cumule des reparations d'urgence evitees depasse largement le prix du contrat de maintenance annuel : le remplacement en urgence d'un ressort de torsion coute 250 a 400 euros, tandis que son remplacement preventif lors d'une visite de maintenance programmee revient a 180 a 280 euros pieces et main-d'oeuvre incluses. Le long de ${data.streets[0]}, le retour sur investissement du contrat d'entretien est positif des la deuxieme annee pour les installations residentielles et des la premiere annee pour les parkings collectifs. Au-dela de l'aspect financier, l'entretien regulier garantit la securite des utilisateurs, preserve la valeur de l'equipement et evite les desagrements d'une porte bloquee dans les garages de ${pick(data.neighborhoods, 1)} — un confort qui n'a pas de prix.`,

  // 3: Entretien copropriete/syndic — obligation legale, PV visite, rapport annuel, AG
  (zone, data, prep) => `L'entretien des portes sectionnelles en copropriete ${prep} ${zone.name} (${zone.postalCode}) obeit a un cadre reglementaire strict qui engage la responsabilite du syndic et du conseil syndical. L'article 2 de l'arrete du 21 novembre 1990 impose une maintenance periodique des portes automatiques de parking, avec verification des dispositifs de securite par un professionnel qualifie. Nos techniciens interviennent regulierement dans les coproprietes de ${data.neighborhoods[0]} en suivant un protocole conforme a cette reglementation. Chaque visite fait l'objet d'un proces-verbal detaille incluant l'identification de l'equipement, la liste des controles effectues, l'etat de chaque dispositif de securite et les preconisations de travaux. Ce document est transmis au syndic par email en format PDF dans les 24 heures suivant l'intervention pres de ${data.landmarks[0]}. Il constitue la preuve de la diligence du syndic en matiere de maintenance et de securite, un document indispensable en cas de sinistre ou de litige. Nous preparons egalement un rapport annuel recapitulatif pour l'assemblee generale, detaillant l'ensemble des interventions realisees, les pieces remplacees et le budget previsionnel de maintenance pour l'exercice suivant. Le long de ${data.streets[0]}, nos contrats de copropriete incluent une astreinte 24h/24 avec intervention prioritaire, garantissant un temps de reponse inferieur a 2 heures pour les pannes bloquantes. Le tarif degressif par nombre de portes et le paiement trimestriel simplifient la gestion budgetaire pour les syndics de ${pick(data.neighborhoods, 1)}.`,

  // 4: Entretien porte motorisee — batterie secours, reprogrammation, mise a jour firmware
  (zone, data, prep) => `L'entretien d'une porte sectionnelle motorisee ${prep} ${zone.name} (${zone.postalCode}) comprend, en plus des controles mecaniques, un volet electronique et informatique specifique a la motorisation. Les moteurs modernes — Somfy, Hormann, Marantec, Came, Nice — integrent des cartes electroniques programmables avec parametres de vitesse, d'effort, de temporisation et de gestion des accessoires. Nos techniciens dans ${data.neighborhoods[0]} verifient le bon fonctionnement de chaque parametre et le reajustent si necessaire. La batterie de secours, presente sur les motorisations haut de gamme, permet la manoeuvre de la porte en cas de coupure de courant — un dispositif critique dans les parkings souterrains ou une porte bloquee en position fermee empeche l'evacuation des vehicules. Nos specialistes pres de ${data.landmarks[0]} testent la capacite de la batterie en simulant une coupure secteur et en verifiant que le moteur peut effectuer au moins cinq cycles complets sur batterie. Les batteries lithium-ion ou plomb-gel ont une duree de vie de 3 a 5 ans et doivent etre remplacees preventivement avant de perdre leur capacite. Le long de ${data.streets[0]}, nos techniciens verifient egalement la compatibilite des telecommandes et des recepteurs radio, le bon fonctionnement de la connexion Wi-Fi ou Bluetooth pour les motorisations connectees, et la mise a jour du firmware lorsque le fabricant propose des correctifs de securite ou des ameliorations fonctionnelles. L'ensemble des reglages electroniques est consigne dans le rapport de maintenance pour reference lors de la prochaine visite dans les immeubles de ${pick(data.neighborhoods, 1)}.`,

  // 5: Entretien saisonnier — hiver (gel joints), ete (dilatation), automne (feuilles rails)
  (zone, data, prep) => `Les saisons imposent des contraintes specifiques aux portes sectionnelles ${prep} ${zone.name} (${zone.postalCode}) qui justifient un entretien adapte a chaque periode de l'annee. En hiver, les temperatures negatives dans les garages de ${data.neighborhoods[0]} provoquent le durcissement des joints en caoutchouc EPDM, la cristallisation des graisses conventionnelles et l'epaississement des huiles de lubrification. Nos techniciens appliquent des lubrifiants basse temperature (performants jusqu'a -30 degres Celsius) et verifient que les joints peripheriques conservent leur souplesse malgre le froid — un joint gele perd son etancheite et laisse penetrer l'humidite dans le garage. Au printemps, pres de ${data.landmarks[0]}, la visite de maintenance permet de constater les effets de l'hiver et de remplacer les lubrifiants hivernaux par des produits standard. Les pollens et les poussieres vegetales qui s'accumulent dans les rails et sur les capteurs optiques sont nettoyes pour eviter tout dysfonctionnement. En ete, la chaleur provoque la dilatation thermique des rails metalliques et des panneaux en acier — un phenomene qui peut modifier les jeux de fonctionnement et generer des frottements anormaux. Le long de ${data.streets[0]}, nos techniciens controlent les jeux de dilatation et ajustent les fixations si necessaire. En automne, les feuilles mortes, les brindilles et les debris vegetaux s'accumulent dans les rails de guidage au sol et dans les mecanismes des parkings ouverts ou semi-ouverts. Le nettoyage automnal previent le blocage des galets et le grippage des composants mecaniques dans les immeubles de ${pick(data.neighborhoods, 1)}.`,
];

// ===============================================
// Entretien process — 4 steps per set, 6 sets
// ===============================================

const entretienProcessSets: ((zone: Zone, prep: string) => { step: string; description: string }[])[] = [
  (zone, prep) => [
    { step: "Prise de rendez-vous", description: `Appelez le ${siteConfig.telephone} ou remplissez notre formulaire en ligne. Nous programmons la visite d'entretien ${prep} ${zone.name} au creneau qui vous convient.` },
    { step: "Inspection complete 20 points", description: `Le technicien realise une checklist exhaustive : ressorts, cables, galets, rails, panneaux, joints, motorisation, securites, alignement et lubrification.` },
    { step: "Maintenance et reglages", description: `Graissage des composants mobiles, reglage de la tension des ressorts, nettoyage des capteurs, ajustement des fins de course et verification de l'equilibrage.` },
    { step: "Rapport et preconisations", description: `Un rapport technique detaille vous est remis avec l'etat de chaque composant, les operations effectuees et les recommandations pour la prochaine visite.` },
  ],
  (zone, prep) => [
    { step: "Contact et planification", description: `Contactez-nous au ${siteConfig.telephone} pour programmer votre visite d'entretien ${prep} ${zone.name}. Creneaux disponibles du lundi au samedi, matin et apres-midi.` },
    { step: "Diagnostic de l'equipement", description: `Le technicien evalue l'etat general de votre porte sectionnelle avec des instruments de mesure professionnels : dynamometre, laser d'alignement, testeur electronique.` },
    { step: "Entretien methodique", description: `Chaque composant est nettoye, lubrifie et ajuste selon les specifications du fabricant. Les pieces en fin de vie sont identifiees et un devis de remplacement est propose.` },
    { step: "Attestation de conformite", description: `Un certificat d'entretien est delivre, attestant du bon fonctionnement de la porte et de la conformite des dispositifs de securite aux normes en vigueur.` },
  ],
  (zone, prep) => [
    { step: "Demande d'entretien", description: `Un appel au ${siteConfig.telephone} suffit pour programmer la visite de maintenance de votre porte sectionnelle ${prep} ${zone.name}. Disponibilite sous 48 heures.` },
    { step: "Controle mecanique et electronique", description: `Inspection de chaque organe du mecanisme : tension des ressorts, etat des cables, usure des galets, alignement des rails, fonctionnement moteur et capteurs.` },
    { step: "Operations de maintenance", description: `Lubrification de tous les points de graissage, nettoyage des rails et capteurs, reglage de la tension et verification de l'equilibrage du tablier.` },
    { step: "Bilan et suivi", description: `Rapport d'entretien complet avec photos, preconisations et planification de la prochaine visite. Devis separe pour les pieces a remplacer si necessaire.` },
  ],
  (zone, prep) => [
    { step: "Reservation en ligne ou par telephone", description: `Programmez votre entretien ${prep} ${zone.name} en appelant le ${siteConfig.telephone} ou via notre formulaire. Confirmation du creneau par SMS sous 2 heures.` },
    { step: "Visite technique approfondie", description: `Le technicien ausculte l'ensemble du mecanisme avec methode et rigueur. Chaque composant est evalue, mesure et compare aux valeurs de reference du fabricant.` },
    { step: "Maintenance preventive", description: `Les operations de graissage, nettoyage et reglage sont effectuees. Les composants identifies comme critiques sont remplaces preventivement pour eviter toute panne.` },
    { step: "Documentation complete", description: `Rapport technique, attestation de conformite et recommandations d'entretien vous sont remis. Pour les coproprietes, le rapport est transmis directement au syndic.` },
  ],
  (zone, prep) => [
    { step: "Premier contact", description: `Composez le ${siteConfig.telephone} pour planifier l'entretien de votre porte sectionnelle ${prep} ${zone.name}. Notre equipe est disponible 7 jours sur 7.` },
    { step: "Bilan de sante complet", description: `Inspection visuelle, mesures au dynamometre, test des securites, verification de l'alignement — chaque point de controle est methodiquement examine et documente.` },
    { step: "Interventions de maintenance", description: `Graissage professionnel, nettoyage integral, ajustement des tensions et recalibrage des capteurs. Votre porte retrouve son fonctionnement optimal.` },
    { step: "Remise du dossier technique", description: `Le dossier complet comprend le rapport d'entretien, les photos, l'attestation de conformite et la date preconisee pour la prochaine visite de maintenance.` },
  ],
  (zone, prep) => [
    { step: "Souscription du contrat", description: `Appelez le ${siteConfig.telephone} pour souscrire un contrat de maintenance adapte a votre installation ${prep} ${zone.name}. Formules annuelles et semestrielles disponibles.` },
    { step: "Premiere visite de reference", description: `Le technicien etablit un etat des lieux complet de votre porte sectionnelle qui servira de reference pour le suivi de l'usure au fil des visites suivantes.` },
    { step: "Entretien complet", description: `Lubrification, nettoyage, reglage des tensions, verification des securites et test de fonctionnement sur dix cycles. Chaque geste est execute avec precision et methode.` },
    { step: "Planification du suivi", description: `La date de la prochaine visite est programmee. Vous recevez un rappel automatique par email et SMS une semaine avant le rendez-vous.` },
  ],
];

// ===============================================
// FAQ — 6 sets of 5 questions, all entretien-focused
// ===============================================

const faqSets: ((zone: Zone, data: LocalDataEntry, prep: string) => { question: string; answer: string }[])[] = [
  // Set 0: contrat et frequence
  (zone, data, prep) => [
    { question: `A quelle frequence faut-il faire entretenir sa porte sectionnelle ${prep} ${zone.name} ?`, answer: `Pour un usage residentiel standard (3 a 5 cycles par jour), un entretien annuel professionnel suffit. Pour les parkings collectifs et les installations a forte frequentation, nous recommandons deux visites par an, idealement au printemps et a l'automne. Les portes industrielles a tres fort usage necessitent un entretien trimestriel.` },
    { question: `Que comprend un contrat de maintenance annuel pour porte sectionnelle ${prep} ${zone.name} ?`, answer: `Le contrat inclut deux visites programmees par an avec checklist de 20 points de controle, graissage complet, reglage des tensions, verification des securites, rapport technique detaille et priorite d'intervention en cas de panne. Les petites fournitures (graisse, spray silicone) sont incluses dans le forfait.` },
    { question: `Combien coute un contrat d'entretien annuel pour porte sectionnelle ?`, answer: `Les contrats residentiels debutent a partir de 149 euros par an pour une visite annuelle complete. Les formules avec deux visites et priorite depannage sont proposees a partir de 249 euros par an. Pour les coproprietes, un tarif degressif par nombre de portes est applique.` },
    { question: `L'entretien est-il obligatoire pour une porte sectionnelle motorisee ?`, answer: `Pour les particuliers, l'entretien n'est pas legalement obligatoire mais fortement recommande. En revanche, pour les portes motorisees en copropriete et dans les ERP (etablissements recevant du public), la maintenance periodique est une obligation reglementaire. Nous delivrons une attestation de conformite apres chaque visite.` },
    { question: `Quel est le meilleur moment de l'annee pour faire entretenir sa porte sectionnelle ${prep} ${zone.name} ?`, answer: `Les entre-saisons sont les periodes ideales : mars-avril pour preparer l'equipement a l'ete (dilatation thermique) et septembre-octobre pour l'hiver (durcissement des joints, gel). Cela permet d'adapter les lubrifiants et les reglages aux conditions climatiques a venir.` },
  ],
  // Set 1: lubrification et gestes quotidiens
  (zone, data, prep) => [
    { question: `Quels produits utiliser pour lubrifier une porte sectionnelle ${prep} ${zone.name} ?`, answer: `Utilisez de la graisse au lithium pour les galets et charnieres, du spray silicone pour les rails de guidage et les joints, et de l'huile de vaseline pour les serrures. Evitez les produits a base de petrole (WD-40 classique) qui attirent la poussiere et encrassent les mecanismes.` },
    { question: `Peut-on entretenir soi-meme sa porte sectionnelle ?`, answer: `Certains gestes simples sont realisables : nettoyage des panneaux, application de spray silicone sur les rails, verification visuelle des cables et nettoyage des capteurs. En revanche, le reglage des ressorts, le remplacement des cables et le test des securites sont strictement reserves aux professionnels pour des raisons de securite.` },
    { question: `A quelle frequence faut-il graisser les galets d'une porte sectionnelle ?`, answer: `Un graissage professionnel lors de la visite annuelle de maintenance suffit pour un usage residentiel. Entre les visites, vous pouvez appliquer un spray silicone sur les rails tous les 6 mois. Pour les installations a forte frequentation, un graissage semestriel est recommande.` },
    { question: `Le bruit de ma porte sectionnelle est-il normal ${prep} ${zone.name} ?`, answer: `Un leger bruit de fonctionnement est normal, mais un grincement metallique, un claquement ou une vibration inhabituels signalent un probleme : galets uses, rails desalignes ou manque de lubrification. Contactez-nous au ${siteConfig.telephone} pour un diagnostic — une intervention rapide evite l'aggravation du probleme.` },
    { question: `Le spray silicone peut-il remplacer un entretien professionnel ?`, answer: `Non. Le spray silicone sur les rails est un geste d'entretien courant utile entre les visites professionnelles, mais il ne remplace pas le graissage specifique des galets, charnieres et ressorts, ni la verification de la tension, de l'alignement et des securites que seul un technicien qualifie peut realiser.` },
  ],
  // Set 2: ressorts et equilibrage
  (zone, data, prep) => [
    { question: `Comment savoir si les ressorts de ma porte sectionnelle necessitent un reglage ${prep} ${zone.name} ?`, answer: `Plusieurs signes indiquent un desequilibrage : la porte est plus lourde en manoeuvre manuelle, le tablier recule de quelques centimetres apres fermeture complete, le moteur force visiblement. Nos techniciens mesurent la force de manoeuvre au dynamometre — si elle depasse 400 Newtons en position mi-course, le reglage est necessaire.` },
    { question: `Peut-on retendre soi-meme les ressorts de sa porte sectionnelle ?`, answer: `Non, cette operation est strictement reservee aux professionnels. L'energie stockee dans un ressort de torsion est considerable et sa manipulation sans outillage adapte (barres de tension calibrees, etau de blocage) et sans formation presente un risque grave d'accident. Contactez un technicien qualifie.` },
    { question: `Quelle est la duree de vie d'un ressort de porte sectionnelle ?`, answer: `Un ressort de torsion standard est concu pour 15 000 a 25 000 cycles selon la qualite du fil d'acier. Pour un usage residentiel de 4 cycles par jour, cela represente 8 a 15 ans. Un entretien regulier avec graissage et controle de tension prolonge cette duree de vie de 20 a 30 %.` },
    { question: `Pourquoi ma porte sectionnelle est-elle plus dure a ouvrir manuellement ?`, answer: `Un effort accru en manoeuvre manuelle signale generalement une perte de tension du ressort de torsion, des galets uses qui freinent la course du tablier, ou des rails desalignes. Un diagnostic professionnel identifie la cause exacte et permet un reglage ou un remplacement cible.` },
    { question: `Le reglage des ressorts est-il inclus dans le contrat de maintenance ?`, answer: `Oui, la verification et l'ajustement de la tension des ressorts font partie de la checklist standard de chaque visite de maintenance. Si un ressort necessite un remplacement complet (fin de vie), les pieces sont proposees a tarif preferentiel pour les clients sous contrat.` },
  ],
  // Set 3: securite et conformite
  (zone, data, prep) => [
    { question: `Quels sont les dispositifs de securite verifies lors de l'entretien ${prep} ${zone.name} ?`, answer: `Notre checklist couvre tous les dispositifs reglementaires : cellules photoelectriques (detection d'obstacle), barre palpeuse (contact physique), systeme anti-chute/parachute (rupture de cable/ressort), limiteur d'effort electronique (force maximale autorisee) et deverrouillage manuel d'urgence (acces en cas de coupure de courant).` },
    { question: `L'entretien delivre-t-il une attestation de conformite ?`, answer: `Oui, apres chaque visite de maintenance, nous delivrons une attestation de conformite certifiant que votre porte sectionnelle respecte les exigences de la norme EN 13241-1. Ce document est exige par les assureurs et obligatoire pour les coproprietes et les ERP.` },
    { question: `Que faire si un dispositif de securite est defaillant ${prep} ${zone.name} ?`, answer: `Si nos techniciens detectent un dispositif de securite defaillant lors de l'entretien, la reparation est proposee immediatement avec un devis sur place. En attendant la remise en conformite, la porte ne doit pas etre utilisee en mode automatique. Le deverrouillage manuel reste operationnel pour les manoeuvres de secours.` },
    { question: `La verification des securites est-elle incluse dans le contrat d'entretien ?`, answer: `Oui, le test complet de tous les dispositifs de securite est systematiquement inclus dans chaque visite de maintenance. C'est l'un des points de controle les plus critiques de notre checklist de 20 points. L'attestation de conformite est delivree a l'issue de chaque visite.` },
    { question: `Mon assurance exige-t-elle un entretien regulier de la porte sectionnelle ?`, answer: `La plupart des contrats d'assurance multirisque habitation et copropriete exigent un entretien periodique des equipements de fermeture motorises. En cas de sinistre (accident corporel, degat materiel), l'absence de justificatif d'entretien peut entrainer un refus de prise en charge ou une reduction d'indemnisation.` },
  ],
  // Set 4: motorisation et electronique
  (zone, data, prep) => [
    { question: `L'entretien de la motorisation est-il different de l'entretien mecanique ${prep} ${zone.name} ?`, answer: `Oui, l'entretien de la motorisation comprend des controles specifiques : verification de la consommation electrique, test de la batterie de secours, controle de l'appairage des telecommandes, verification des fins de course et du limiteur d'effort. Ces tests s'ajoutent aux controles mecaniques standard sur les ressorts, cables et galets.` },
    { question: `Faut-il mettre a jour le firmware de mon moteur de porte sectionnelle ?`, answer: `Les motorisations connectees recentes (Somfy, Hormann BiSecur) proposent des mises a jour firmware qui corrigent des bugs ou ajoutent des fonctionnalites. Nos techniciens verifient la version du firmware lors de chaque visite et appliquent les mises a jour disponibles si elles sont pertinentes pour votre installation.` },
    { question: `La batterie de secours de mon moteur doit-elle etre verifiee lors de l'entretien ?`, answer: `Absolument. La batterie de secours permet d'ouvrir la porte en cas de coupure de courant — un dispositif critique dans les parkings souterrains. Nos techniciens testent sa capacite en simulant une coupure secteur. Les batteries ont une duree de vie de 3 a 5 ans et doivent etre remplacees preventivement.` },
    { question: `Mes telecommandes fonctionnent mal, est-ce un probleme d'entretien ?`, answer: `Un dysfonctionnement des telecommandes peut avoir plusieurs causes : pile usee (remplacement simple), desappairage du recepteur (reprogrammation en quelques minutes), ou interference radio. Nos techniciens diagnostiquent et resolvent ce type de probleme lors de la visite de maintenance.` },
    { question: `L'entretien permet-il de reduire la consommation electrique du moteur ?`, answer: `Oui, un mecanisme bien lubrifie et equilibre reduit l'effort demande au moteur de 15 a 20 %. Le graissage des galets et des charnieres, le reglage de la tension des ressorts et l'alignement des rails contribuent directement a diminuer la consommation electrique et a prolonger la duree de vie du moteur.` },
  ],
  // Set 5: saisonnier et duree de vie
  (zone, data, prep) => [
    { question: `L'hiver peut-il endommager ma porte sectionnelle ${prep} ${zone.name} ?`, answer: `Le froid hivernal durcit les joints en caoutchouc (perte d'etancheite), epaissit les graisses conventionnelles (frottements accrus) et peut provoquer du givre sur les rails et les capteurs. Un entretien automnal prepare votre porte a affronter l'hiver avec des lubrifiants basse temperature et des joints verifies.` },
    { question: `La chaleur de l'ete affecte-t-elle le fonctionnement de la porte sectionnelle ?`, answer: `La dilatation thermique des rails metalliques et des panneaux en acier peut modifier les jeux de fonctionnement et generer des frottements ou des points durs. Un entretien au printemps verifie les jeux de dilatation et ajuste les fixations pour que la porte fonctionne sans contrainte meme par forte chaleur.` },
    { question: `Un entretien regulier prolonge-t-il vraiment la duree de vie de la porte ?`, answer: `Les chiffres sont formels : une porte sectionnelle entretenue regulierement dure 20 a 25 ans, contre 12 a 15 ans sans entretien. Les composants d'usure (ressorts, cables, galets) beneficient d'une duree de vie superieure de 30 a 40 % grace au graissage, au reglage et a la detection anticipee des signes de fatigue.` },
    { question: `Les feuilles mortes en automne peuvent-elles bloquer ma porte sectionnelle ?`, answer: `Oui, les feuilles mortes, brindilles et debris vegetaux qui s'accumulent dans les rails de guidage au sol peuvent bloquer les galets et empecher la fermeture complete de la porte. Un nettoyage automnal des rails et du seuil est recommande, surtout pour les garages ouverts ou semi-ouverts.` },
    { question: `Quel est le meilleur investissement pour ma porte sectionnelle ${prep} ${zone.name} : entretien ou reparation ?`, answer: `L'entretien preventif est toujours plus economique que la reparation curative. Un contrat de maintenance a 149-249 euros par an evite des reparations d'urgence a 250-600 euros par intervention. Sur 10 ans, les economies cumulees representent plusieurs milliers d'euros, sans compter le confort d'une porte qui ne tombe jamais en panne.` },
  ],
];

// ===============================================
// Main export function
// ===============================================

export function getEntretienZoneContent(zone: Zone): EntretienZoneContent {
  const data = localData[zone.slug] || null;
  const preposition = zone.department === "Paris" ? "dans le" : "a";
  const zoneIdx = getZoneIndex(zone);

  const local: LocalDataEntry = data
    ? { landmarks: data.landmarks, streets: data.streets, neighborhoods: data.neighborhoods, metros: data.metros }
    : defaultLocal;

  // Rotate intro among 6 templates
  const introIdx = zoneIdx % 6;
  const rawIntro = introTemplates[introIdx](zone, local, preposition);
  const intro = rawIntro + ` Pour les residents et professionnels du ${zone.postalCode} ${zone.name}, notre equipe garantit un entretien rigoureux et complet.`;

  // Rotate SEO1 among 6 templates
  const seo1Idx = zoneIdx % 6;
  const seo1Title = seo1Titles[seo1Idx](zone, preposition);
  const seo1 = seo1Templates[seo1Idx](zone, local, preposition);

  // Rotate SEO2 — offset by 3
  const seo2Idx = (zoneIdx + 3) % 6;
  const seo2Title = seo2Titles[seo2Idx](zone, preposition);
  const seo2 = seo2Templates[seo2Idx](zone, local, preposition);

  // Rotate entretien process
  const processIdx = (zoneIdx + 2) % 6;
  const entretienProcess = entretienProcessSets[processIdx](zone, preposition);

  // Rotate FAQ — offset by 1
  const faqIdx = (zoneIdx + 1) % 6;
  const faq = faqSets[faqIdx](zone, local, preposition);

  return { intro, seo1Title, seo1, seo2Title, seo2, entretienProcess, faq };
}
