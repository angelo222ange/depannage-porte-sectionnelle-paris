import { Zone, zones, siteConfig } from "@/config/site";
import { localData } from "@/lib/zone-content";

export interface DepannageZoneContent {
  intro: string;
  seo1Title: string;
  seo1: string;
  seo2Title: string;
  seo2: string;
  emergencyProcess: { step: string; description: string }[];
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
// INTRO templates — 6 depannage-specific intros
// ===============================================

type IntroFn = (zone: Zone, data: LocalDataEntry, prep: string) => string;

const introTemplates: IntroFn[] = [
  // 0: urgence + reactivite
  (zone, data, prep) => `Votre porte sectionnelle est bloquee ${prep} ${zone.name} (${zone.postalCode}) et vous ne pouvez plus acceder a votre garage ni a votre local ? Chaque minute d'immobilisation represente une gene considerable, voire un risque de securite si la porte reste ouverte. Notre service de depannage specialise intervient dans un rayon immediat autour de ${data.landmarks[0]} avec un delai garanti inferieur a 30 minutes, 24 heures sur 24, 365 jours par an. Nos techniciens depanneurs sont positionnes en permanence dans les secteurs de ${data.neighborhoods[0]} et le long de ${data.streets[0]}, vehicules equipes de plus de 400 references de pieces detachees pour resoudre la majorite des pannes en une seule visite. Fort de plus de 25 ans d'experience en depannage de portes sectionnelles en region parisienne, notre equipe traite chaque intervention avec methode : securisation, diagnostic precis, reparation durable et essai complet avant de quitter les lieux.`,

  // 1: expertise technique
  (zone, data, prep) => `Le depannage d'une porte sectionnelle ${prep} ${zone.name}, secteur ${zone.postalCode}, requiert une expertise technique pointue que seuls des specialistes experimentes peuvent garantir. Les mecanismes d'une porte sectionnelle — ressorts de torsion sous haute tension, cables acier sollicites a chaque cycle, motorisation electronique complexe — ne tolerent pas l'improvisation. Nos techniciens certifies interviennent quotidiennement dans ${data.neighborhoods[0]} et aux abords de ${data.landmarks[0]} pour diagnostiquer et reparer tous les types de dysfonctionnements. Qu'il s'agisse d'un moteur Somfy, Hormann, Marantec ou Came, d'un tablier desaxe dans les rails ou d'un ressort de torsion rompu, nos depanneurs maitrisent parfaitement chaque composant. Chaque vehicule d'intervention qui circule le long de ${data.streets[0]} embarque un outillage complet — dynamometre, testeur de carte electronique, laser d'alignement — ainsi qu'un stock de pieces d'origine pour les marques les plus courantes.`,

  // 2: proximite locale
  (zone, data, prep) => `Implantes depuis plus de 25 ans en region parisienne, nos techniciens depanneurs connaissent parfaitement le terrain ${prep} ${zone.name}. Les specificites du bati local — parkings souterrains aux acces etroits pres de ${data.landmarks[0]}, garages d'immeubles anciens dans ${data.neighborhoods[0]}, locaux commerciaux le long de ${data.streets[0]} — n'ont aucun secret pour notre equipe. Cette connaissance du terrain nous permet d'anticiper les contraintes techniques propres a chaque intervention et de preparer le materiel adapte avant meme d'arriver sur place. Notre maillage de techniciens dans le secteur de ${zone.name} garantit un temps de reponse inferieur a 30 minutes, y compris la nuit, le week-end et les jours feries. Nous intervenons sur toutes les marques et tous les modeles de portes sectionnelles, residentielles comme industrielles, et chaque reparation est accompagnee d'une garantie pieces et main-d'oeuvre.`,

  // 3: pannes frequentes
  (zone, data, prep) => `Les portes sectionnelles installees ${prep} ${zone.name} subissent des contraintes specifiques liees a l'usage intensif en milieu urbain : cycles d'ouverture-fermeture multiplies, vibrations du trafic, variations de temperature entre parking souterrain et exterieur. Ces sollicitations provoquent des pannes recurrentes que nos techniciens traitent chaque semaine dans le secteur de ${data.neighborhoods[0]} et autour de ${data.landmarks[0]}. Ressort de torsion casse apres 12 000 a 15 000 cycles, cable acier effiloche aux points de frottement sur les tambours, moteur en surchauffe par depassement de la cadence nominale, carte electronique grillee par une surtension — chaque type de panne appelle un protocole de reparation precis. Nos depanneurs qui interviennent le long de ${data.streets[0]} sont formes a ces diagnostics et disposent des pieces de remplacement dans leur vehicule pour une remise en service immediate.`,

  // 4: securite + devis transparent
  (zone, data, prep) => `Quand votre porte sectionnelle tombe en panne ${prep} ${zone.name}, deux priorites s'imposent : securiser l'installation et retrouver un fonctionnement normal dans les meilleurs delais. Notre protocole de depannage commence systematiquement par la mise en securite de la zone — blocage du tablier, coupure electrique, balisage si necessaire — avant toute manipulation technique. Cette rigueur protege les occupants de l'immeuble dans ${data.neighborhoods[0]} comme les passants le long de ${data.streets[0]}. Le diagnostic qui suit est precis et documente : chaque anomalie est identifiee, photographiee et expliquee clairement. Vous recevez un devis detaille avant le debut de toute reparation — pas de surprise, pas de frais caches. Nos techniciens presents autour de ${data.landmarks[0]} resolvent la grande majorite des pannes en une seule visite, avec des pieces detachees certifiees et une garantie de 12 mois sur chaque intervention.`,

  // 5: disponibilite + toutes marques
  (zone, data, prep) => `Notre cellule de depannage dediee aux portes sectionnelles ${prep} ${zone.name} fonctionne sans interruption : 24 heures sur 24, 7 jours sur 7, jours feries inclus. Un simple appel au ${siteConfig.telephone} declenche l'envoi d'un technicien qualifie dans votre secteur, que vous soyez pres de ${data.landmarks[0]}, dans ${data.neighborhoods[0]} ou le long de ${data.streets[0]}. Hormann, Novoferm, Crawford, Came, FAAC, Somfy, Marantec, Nice — nos depanneurs sont habilites sur toutes les marques du marche et disposent des pieces compatibles dans chaque vehicule d'intervention. En 25 ans d'activite, notre equipe a traite des milliers de depannages en region parisienne, des simples deblocages de telecommande aux reparations complexes de tabliers apres collision vehicule. Chaque intervention fait l'objet d'un rapport technique complet et d'une facture detaillee remise sur place.`,
];

// ===============================================
// SEO1 — 6 depannage-specific angles
// ===============================================

type ContentFn = (zone: Zone, data: LocalDataEntry, prep: string) => string;

const seo1Titles: ((zone: Zone, prep: string) => string)[] = [
  (zone, prep) => `Depannage porte sectionnelle en urgence nuit et week-end ${prep} ${zone.name}`,
  (zone, prep) => `Diagnostic moteur et electronique de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Remplacement ressorts et cables de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Reparation de panneaux et lames de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Deblocage de porte sectionnelle coincee ${prep} ${zone.name}`,
  (zone, prep) => `Depannage telecommande et automatisme de porte sectionnelle ${prep} ${zone.name}`,
];

const seo1Templates: ContentFn[] = [
  // 0: Urgence nuit/weekend — protocole intervention hors horaires, astreinte, securisation immediate
  (zone, data, prep) => `Une porte sectionnelle qui tombe en panne a 23 heures un samedi soir ${prep} ${zone.name} (${zone.postalCode}) ne peut pas attendre le lundi matin. Le garage reste ouvert, le local commercial est expose, le parking de copropriete est inaccessible. Notre astreinte nuit et week-end fonctionne avec un effectif complet de techniciens positionnes en permanence dans le secteur de ${data.neighborhoods[0]}, prets a intervenir en moins de 30 minutes, y compris les jours feries. Le protocole d'intervention nocturne suit des etapes rigoureuses adaptees aux contraintes de l'heure : arrivee discrete pour ne pas deranger le voisinage pres de ${data.landmarks[0]}, eclairage autonome par projecteur LED pour travailler sans dependre de l'installation electrique du batiment, securisation immediate de la porte par serre-joints et etais provisoires si le tablier menace de descendre. Le technicien procede ensuite au diagnostic complet a l'aide d'un testeur multifonction et d'une camera endoscopique pour inspecter les zones d'ombre dans les rails et derriere le tablier. Les interventions les plus frequentes en urgence nocturne dans les quartiers de ${pick(data.neighborhoods, 1)} et le long de ${data.streets[0]} concernent la rupture de ressort de torsion, le deraillement de cable apres une tentative de manoeuvre forcee et la panne de carte electronique suite a une coupure de courant. Nos vehicules embarquent les references les plus courantes pour ces trois pannes, ce qui nous permet de remettre 85 % des portes en service avant le lever du jour. Le tarif de nuit est annonce clairement par telephone avant l'envoi du technicien — aucune majoration surprise a l'arrivee. Un rapport d'intervention horodate est remis des la fin du depannage, utilisable aupres de votre assureur si la panne resulte d'une tentative d'effraction ou d'un sinistre.`,

  // 1: Diagnostic moteur/electronique — variateur, carte, capteur fin de course, reprogrammation
  (zone, data, prep) => `Le diagnostic d'une panne electronique ou moteur sur une porte sectionnelle ${prep} ${zone.name} exige un equipement de mesure professionnel et une formation continuellement mise a jour. Les motorisations actuelles — Somfy Dexxo Pro, Hormann SupraMatic, Came VER, Marantec Comfort — integrent des cartes electroniques a microprocesseur gerant variateur de vitesse, detection d'obstacles, compteur de cycles et communication radio. Quand le moteur ne repond plus dans votre garage de ${data.neighborhoods[0]}, nos techniciens commencent par une lecture des codes erreur sur le boitier : LED clignotante rouge pour defaut thermique, orange pour surcharge, alternance rapide pour perte de signal fin de course. Cette premiere analyse oriente le diagnostic vers le composant defaillant sans demontage inutile. Le condensateur de demarrage, composant le plus sollicite, perd progressivement sa capacite et provoque un bourdonnement au demarrage suivi d'un arret du moteur — une panne tres repandue dans les installations vieillissantes pres de ${data.landmarks[0]}. Son remplacement prend moins de 20 minutes. La carte electronique elle-meme peut etre victime d'une surtension, d'un court-circuit ou simplement de l'age : nos techniciens testent chaque composant au multimetre et au testeur de composants CMS avant de conclure au remplacement. Les capteurs de fin de course magnetiques ou mecaniques, positionnes en haut et en bas des rails le long de ${data.streets[0]}, derivent parfois de leur position d'origine a force de vibrations, provoquant un arret premature ou un depassement de course. Le recalibrage s'effectue au millimetre et l'ensemble est valide par dix cycles complets. Enfin, la reprogrammation de la centrale — appairage des telecommandes, reglage de la force et de la vitesse, activation des securites — finalise l'intervention pour un fonctionnement optimal.`,

  // 2: Remplacement ressorts/cables — torsion, lateral, cable acier, equilibrage tablier
  (zone, data, prep) => `Le ressort de torsion est le composant le plus critique d'une porte sectionnelle : il supporte l'integralite du poids du tablier — entre 60 et 150 kg selon les dimensions — et se deforme elastiquement a chaque cycle d'ouverture. Apres 12 000 a 20 000 cycles, la fatigue du fil d'acier provoque une rupture nette accompagnee d'un claquement violent qui resonne dans tout le parking. ${prep.charAt(0).toUpperCase() + prep.slice(1)} ${zone.name}, nos techniciens traitent cette panne plusieurs fois par semaine dans les immeubles de ${data.neighborhoods[0]} et les garages le long de ${data.streets[0]}. Le remplacement d'un ressort de torsion n'est pas une operation anodine : l'arbre supporte une energie stockee considerable et toute manipulation sans outillage adapte presente un risque de blessure grave. Nos depanneurs utilisent des barres de tension calibrees, un tour de cle dynamometrique et des etaux de blocage homologues pour demonter l'ancien ressort et poser le nouveau en toute securite. Le diametre du fil, le diametre interieur du ressort, la longueur et le nombre de spires sont determines par le poids exact du tablier — un calcul que nos equipes maitrisent pour chaque configuration rencontree pres de ${data.landmarks[0]}. Les cables en acier galvanise de 3 a 5 mm de diametre travaillent en synergie avec les ressorts : ils s'enroulent sur les tambours lateraux et transmettent la force de rappel au tablier. Un cable effiloche, detoronne ou decroche de son tambour provoque un desequilibre dangereux — la porte penche d'un cote et force sur les rails. Nos techniciens remplacent systematiquement les deux cables en meme temps, meme si un seul est endommage, pour garantir un equilibrage parfait. Chaque remplacement est suivi d'un reglage de la tension au dynamometre et d'un test de dix cycles complets avec verification du debrayage manuel.`,

  // 3: Reparation panneaux/lames — collision vehicule, deformation, remplacement partiel, assurance
  (zone, data, prep) => `Un panneau de porte sectionnelle endommage ${prep} ${zone.name} resulte le plus souvent d'un choc de vehicule lors d'une manoeuvre de parking. Le pare-chocs heurte le panneau inferieur et provoque un enfoncement, une pliure ou une fissure de l'acier qui compromet l'etancheite, l'isolation et le fonctionnement mecanique de l'ensemble du tablier. Dans les parkings des immeubles de ${data.neighborhoods[0]}, ou les places sont souvent etroites et les manoeuvres delicates, nos techniciens constatent ce type de degat chaque semaine. La bonne nouvelle est qu'il n'est pas toujours necessaire de remplacer la totalite de la porte : les portes sectionnelles sont conçues par panneaux modulaires, et nous pouvons intervenir sur un ou deux panneaux sans toucher aux autres. Le remplacement partiel commence par le reperage exact de la reference du panneau — fabricant, epaisseur, profil de nervure, teinte RAL, dimensions — pour commander une piece strictement identique. Nos fournisseurs Hormann, Novoferm et Crawford maintiennent des stocks de panneaux standards en entrepot regional, ce qui nous permet d'obtenir la piece sous 48 a 72 heures pour les modeles courants. Le jour de l'intervention pres de ${data.landmarks[0]}, le technicien desolidarise les charnieres du panneau abime, le retire du tablier, insere le panneau neuf et reconnecte les liaisons mecaniques. L'alignement est verifie au niveau laser sur toute la largeur, puis le tablier est teste en cycle complet pour valider le guidage dans les rails le long de ${data.streets[0]}. En cas de sinistre automobile, nous etablissons un devis detaille conforme aux exigences des assureurs, avec photos avant-apres et bordereau de pieces. La prise en charge par votre assurance multirisque habitation ou automobile couvre generalement l'integralite du remplacement. Dans ${pick(data.neighborhoods, 1)}, nous accompagnons regulierement les coproprietes dans les demarches de declaration de sinistre et de suivi du remboursement.`,

  // 4: Deblocage porte coincee — rail desaxe, galets uses, obstruction, manoeuvre secours
  (zone, data, prep) => `Une porte sectionnelle coincee ${prep} ${zone.name} se manifeste de plusieurs façons : le tablier refuse de monter, s'arrete a mi-course, descend de travers ou produit un raclement metallique anormal. Chaque symptome oriente le diagnostic vers une cause specifique que nos techniciens identifient methodiquement dans les garages de ${data.neighborhoods[0]}. Le rail desaxe est la cause numero un de blocage : un choc lateral, un tassement du gros-oeuvre ou simplement le desserrage progressif des fixations decale le rail de quelques millimetres, suffisamment pour que les galets du tablier coincent dans la gorge de guidage. Nos depanneurs mesurent l'ecart au laser et rectifient l'alignement en resserrant ou en reposant les pattes de fixation le long de ${data.streets[0]}. Les galets en nylon, soumis a des milliers de passages, s'usent en s'aplatissant : leur profil rond devient ovale, le jeu dans le rail augmente et le tablier commence a vibrer puis a se bloquer. Nos vehicules transportent des galets de toutes les tailles courantes — diametre 50, 65 et 75 mm — pour un remplacement immediat pres de ${data.landmarks[0]}. L'obstruction physique du rail par un objet tombe, un debris ou de la poussiere accumulee constitue une troisieme cause frequente, surtout dans les garages en sous-sol ou la ventilation est limitee. Un nettoyage complet des rails suivi d'une lubrification au spray silicone retablit le glissement normal. Enfin, pour les portes motorisees bloquees en position fermee suite a une panne electrique, nos techniciens actionnent la manoeuvre de secours — poignee de debrayage interne ou serrure a barillet exterieure — pour ouvrir la porte manuellement en toute securite, une operation que les residents de ${pick(data.neighborhoods, 1)} nous demandent regulierement lors des coupures de courant.`,

  // 5: Panne telecommande/automatisme — recepteur, emetteur, cellules, interference radio
  (zone, data, prep) => `Votre telecommande de porte sectionnelle ne repond plus ${prep} ${zone.name} ? Avant de conclure a une panne moteur, nos techniciens verifient systematiquement la chaine de communication radio entre l'emetteur de poche et le recepteur integre a la motorisation. Cette approche methodique, appliquee quotidiennement dans les immeubles de ${data.neighborhoods[0]}, permet de resoudre le probleme sans intervenir sur des composants couteux. La premiere cause de non-reponse est simplement la pile de la telecommande : une pile CR2032 en fin de vie emet un signal trop faible pour atteindre le recepteur a travers les murs en beton du parking. Nos techniciens testent la puissance du signal a l'aide d'un frequencemetre portable et remplacent la pile si necessaire. La deuxieme cause, plus subtile, est le desappairage entre l'emetteur et le recepteur : une coupure de courant prolongee, un orage electrique ou l'ajout d'une telecommande supplementaire peut effacer la memoire du recepteur. La reprogrammation suit un protocole precis propre a chaque marque — appui simultane sur deux boutons pour Somfy, sequence de LED pour Hormann, code PIN sur l'ecran pour Came — que nos depanneurs connaissent par coeur. Les interferences radio representent un troisieme facteur de dysfonctionnement, particulierement frequent le long de ${data.streets[0]} ou la densite d'emetteurs Wi-Fi, Bluetooth et domotique est elevee. Les portes fonctionnant sur la frequence 433 MHz sont les plus exposees ; la migration vers un systeme 868 MHz a rolling code elimine definitivement ce probleme. Les cellules photoelectriques de securite, fixees de part et d'autre de l'ouverture pres de ${data.landmarks[0]}, peuvent aussi provoquer un refus de fermeture si elles sont desalignees, encrassees ou perturbees par un reflet lumineux. Nos techniciens nettoient les lentilles, recalibrent l'axe infrarouge et verifient le cablage pour retablir un fonctionnement fiable dans les garages de ${pick(data.neighborhoods, 1)}.`,
];

// ===============================================
// SEO2 — 6 depannage-specific angles
// ===============================================

const seo2Titles: ((zone: Zone, prep: string) => string)[] = [
  (zone, prep) => `Maintenance preventive apres depannage ${prep} ${zone.name}`,
  (zone, prep) => `Depannage porte sectionnelle de copropriete ${prep} ${zone.name}`,
  (zone, prep) => `Depannage porte sectionnelle commerciale et industrielle ${prep} ${zone.name}`,
  (zone, prep) => `Securisation apres effraction de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Mise aux normes apres depannage de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Depannage connecte et diagnostic a distance ${prep} ${zone.name}`,
];

const seo2Templates: ContentFn[] = [
  // 0: Maintenance preventive post-depannage — contrat suivi, checklist, eviter recidive
  (zone, data, prep) => `Un depannage reussi ne suffit pas a garantir la perennite de votre porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}). Sans programme de maintenance preventive, la meme panne — ou une panne differente sur un autre composant fragilise — risque de se reproduire dans les mois qui suivent. C'est pourquoi nos techniciens proposent systematiquement un contrat de suivi apres chaque intervention dans ${data.neighborhoods[0]}. Ce contrat comprend deux visites annuelles programmees, au printemps et a l'automne, durant lesquelles un technicien effectue une checklist de 28 points de controle : tension des ressorts au dynamometre, integrite des cables toron par toron, usure des galets en nylon, alignement des rails au laser, fonctionnement des cellules photoelectriques, etat des joints d'etancheite, couple de serrage des fixations et test complet de la motorisation sur dix cycles. Chaque visite dans le secteur de ${data.landmarks[0]} donne lieu a un rapport ecrit avec photos et preconisations, transmis par email sous 24 heures. Les coproprietes le long de ${data.streets[0]} beneficient d'un tarif degressif par porte et d'une priorite d'intervention en cas de panne imprevue entre deux visites. Ce suivi preventif prolonge la duree de vie des composants de 30 a 40 % et reduit le risque de panne bloquante de plus de 70 %, selon les statistiques de nos interventions en region parisienne sur les cinq dernieres annees.`,

  // 1: Depannage copropriete/parking collectif — syndic, acces, multi-utilisateurs, badge
  (zone, data, prep) => `Le depannage d'une porte sectionnelle en copropriete ${prep} ${zone.name} obeit a des contraintes organisationnelles supplementaires par rapport a un garage individuel. Le syndic, le gardien, les coproprietaires et parfois les locataires sont tous concernes par l'acces au parking souterrain, et une panne bloquante paralyse l'ensemble de l'immeuble dans ${data.neighborhoods[0]}. Notre service dedie aux coproprietes prend en charge l'integralite du processus : reception de l'appel du gardien ou du syndic, envoi d'un technicien en moins de 30 minutes, securisation provisoire de l'acces et reparation definitive. En cas de blocage en position fermee, nos depanneurs activent la manoeuvre de secours pour retablir un acces pietionnier et vehiculaire temporaire pendant la reparation. Le systeme de controle d'acces par badge RFID, utilise dans la majorite des parkings collectifs le long de ${data.streets[0]}, peut lui-meme etre la source du probleme : centrale saturee, lecteur defaillant, cablage coupe par des travaux dans l'immeuble. Nos techniciens diagnostiquent et reparent l'ensemble du systeme — porte mecanique et controle d'acces electronique — en une seule intervention pres de ${data.landmarks[0]}. Apres chaque depannage en copropriete, un rapport detaille est adresse au syndic par email sous format PDF, facilitant la communication avec les coproprietaires et la justification des depenses lors de l'assemblee generale. Nous proposons egalement des contrats de maintenance collective avec passage trimestriel et astreinte 24h/24.`,

  // 2: Depannage commercial/industriel — rideau metallique, porte rapide, continuite activite
  (zone, data, prep) => `Pour les commerces, entrepots et ateliers ${prep} ${zone.name}, une porte sectionnelle en panne represente bien plus qu'un desagrement : c'est une interruption d'activite, une rupture de la chaine logistique et un risque pour la securite des marchandises. Nos techniciens specialises en portes sectionnelles industrielles interviennent en priorite absolue dans les zones d'activite de ${data.neighborhoods[0]} et le long de ${data.streets[0]} pour retablir la continuite d'exploitation dans les meilleurs delais. Les portes sectionnelles industrielles — panneaux de 60 a 80 mm d'epaisseur, largeurs jusqu'a 6 metres, hauteurs jusqu'a 5 metres — subissent des cadences d'utilisation tres superieures aux modeles residentiels : 50 a 100 cycles par jour dans les entrepots logistiques, contre 4 a 8 cycles dans un garage particulier. Cette sollicitation intensive use prematurement les ressorts, les cables, les galets et les rails de guidage. Nos fourgons qui circulent pres de ${data.landmarks[0]} transportent des pieces dimensionnees pour ces portes grand format : ressorts haute resistance de 80 a 120 mm de diametre, cables acier de 5 mm, galets renforces a roulement a billes. Nous intervenons egalement sur les portes a ouverture rapide a enroulement, les rideaux metalliques a lames acier et les portes coupe-feu sectionnelles EI60 installees dans les locaux industriels de ${pick(data.neighborhoods, 1)}. Chaque intervention professionnelle est documentee pour repondre aux exigences des assureurs et des inspecteurs du travail.`,

  // 3: Securisation temporaire apres effraction — consolidation, remplacement urgence, devis assurance
  (zone, data, prep) => `Une porte sectionnelle forcee lors d'une tentative d'effraction ${prep} ${zone.name} presente une double urgence : securiser immediatement le local pour empecher une nouvelle intrusion et conserver les preuves necessaires a la declaration de sinistre. Nos techniciens d'astreinte, joignables au ${siteConfig.telephone} a toute heure, interviennent en mode securisation rapide dans le secteur de ${data.neighborhoods[0]} et pres de ${data.landmarks[0]}. La premiere etape consiste a evaluer l'ampleur des degats sans alterer la scene : les lames ou panneaux arraches, les rails tordus et les serrures fracturees sont documentes par photographies horodatees et un rapport technique circonstancie. Ce dossier servira de piece justificative aupres de votre compagnie d'assurance. Le technicien procede ensuite a la consolidation provisoire : fixation de plaques de securite en acier sur les breches, verrouillage renforce par cadenas haute securite, condamnation temporaire du mecanisme de levage pour empecher toute ouverture exterieure. Cette securisation tient le temps necessaire a la commande et la pose de panneaux neufs — generalement 48 a 72 heures pour les modeles courants disponibles chez nos fournisseurs le long de ${data.streets[0]}. Nous etablissons un devis de remplacement conforme aux attendus des assureurs — ventilation pieces et main-d'oeuvre, references exactes, photos avant-apres — qui facilite et accelere le traitement de votre dossier d'indemnisation. A la demande des coproprietaires de ${pick(data.neighborhoods, 1)}, nous integrons lors du remplacement des dispositifs anti-intrusion supplementaires : verrouillage multipoints, barre anti-soulevement renforcee, detection d'ouverture reliee a la centrale d'alarme de l'immeuble.`,

  // 4: Mise aux normes apres depannage — conformite EN 13241, photocellules, aretes securite
  (zone, data, prep) => `Chaque depannage de porte sectionnelle ${prep} ${zone.name} est l'occasion de verifier la conformite de l'installation aux normes en vigueur — un point souvent neglige par les depanneurs qui se contentent de reparer le composant defaillant sans regarder l'ensemble. La norme EN 13241-1, obligatoire pour toute porte motorisee accessible au public, impose cinq dispositifs de securite que nos techniciens controlent systematiquement dans les immeubles de ${data.neighborhoods[0]}. Les cellules photoelectriques, installees a 25 centimetres du sol de chaque cote de l'ouverture, doivent etre presentes, alignees et fonctionnelles : un faisceau coupe provoque l'inversion immediate du mouvement de la porte. Dans les parkings anciens pres de ${data.landmarks[0]}, ces cellules sont souvent absentes ou hors service. La barre palpeuse, fixee sur la traverse basse du tablier, detecte tout obstacle par compression et coupe le moteur en 0,2 seconde — un equipement vital dans les lieux frequentes par des enfants ou des pietons le long de ${data.streets[0]}. Le limiteur d'effort electronique mesure en continu la force exercee par le moteur : au-dela de 400 newtons, la course s'arrete automatiquement. Le parachute anti-chute, monte sur l'arbre de torsion, bloque instantanement le tablier si un cable rompt. Enfin, le verrouillage anti-relevage empeche le soulevement exterieur de la porte. Apres chaque depannage, nos techniciens emettent un certificat de conformite ou, si l'installation presente des manquements, un devis de mise aux normes detaille avec planning d'intervention pour les coproprietes de ${pick(data.neighborhoods, 1)}.`,

  // 5: Depannage connecte — diagnostic a distance, camera, historique pannes, alerte smartphone
  (zone, data, prep) => `Les portes sectionnelles de nouvelle generation installees ${prep} ${zone.name} integrent des modules connectes qui transforment radicalement la gestion des pannes et du depannage. Le boitier Somfy TaHoma, le module Hormann BiSecur Gateway ou l'interface Came Connect transmettent en temps reel l'etat de la porte a une application smartphone : position du tablier, nombre de cycles effectues, temperature du moteur, historique des erreurs. Quand un dysfonctionnement est detecte dans votre garage de ${data.neighborhoods[0]}, l'application envoie une notification push sur votre telephone avant meme que la panne ne devienne bloquante. Notre centre technique, connecte aux memes plateformes, recoit simultanement l'alerte et peut souvent poser un pre-diagnostic a distance : code erreur de la carte electronique, surchauffe du moteur, defaut de capteur de fin de course. Cette analyse prealable permet a nos techniciens de partir vers ${data.landmarks[0]} ou le long de ${data.streets[0]} avec la piece de remplacement deja identifiee, reduisant le temps d'intervention de 30 a 50 % par rapport a un depannage classique. Pour les coproprietes de ${pick(data.neighborhoods, 1)}, nous installons des cameras IP dediees au parking qui permettent de visualiser a distance l'etat de la porte et de detecter les anomalies de fonctionnement — porte restee ouverte, mouvement inhabituel, presence non autorisee. L'ensemble des donnees de fonctionnement est archive sur un serveur securise accessible par le syndic, offrant un historique precieux pour anticiper les remplacements de composants et optimiser le budget maintenance de l'immeuble.`,
];

// ===============================================
// Emergency process — 4 steps per set, 6 sets
// ===============================================

const emergencyProcessSets: ((zone: Zone, prep: string) => { step: string; description: string }[])[] = [
  (zone, prep) => [
    { step: "Appel au " + siteConfig.telephone, description: `Notre standard de depannage est accessible 24h/24, 7j/7. Decrivez les symptomes de la panne et communiquez votre adresse ${prep} ${zone.name} pour un envoi immediat.` },
    { step: "Arrivee du technicien en 30 min", description: `Un technicien equipe se deplace dans votre secteur avec un stock complet de pieces detachees pour portes sectionnelles.` },
    { step: "Diagnostic et devis sur place", description: `Le depanneur identifie la cause exacte de la panne, vous explique le probleme et vous remet un devis transparent avant toute intervention.` },
    { step: "Reparation et essai complet", description: `La reparation est effectuee immediatement. Dix cycles d'ouverture-fermeture sont realises pour valider le fonctionnement et les securites.` },
  ],
  (zone, prep) => [
    { step: "Contact telephonique immediat", description: `Joignez notre cellule d'urgence au ${siteConfig.telephone}. Un conseiller technique evalue la gravite de la panne et vous guide pour securiser votre porte ${prep} ${zone.name}.` },
    { step: "Deplacement express", description: `Nos techniciens positionnes dans votre secteur arrivent en moins de 30 minutes, vehicule equipe de plus de 400 references de pieces.` },
    { step: "Inspection et chiffrage", description: `Diagnostic complet des organes mecaniques et electroniques. Devis ecrit remis avant le debut des travaux — pas de surprise.` },
    { step: "Remise en service garantie", description: `Reparation definitive, test de securite complet et garantie 12 mois pieces et main-d'oeuvre sur chaque intervention.` },
  ],
  (zone, prep) => [
    { step: "Prise en charge de l'urgence", description: `Un appel au ${siteConfig.telephone} suffit pour declencher l'intervention d'un technicien specialise dans le depannage de portes sectionnelles ${prep} ${zone.name}.` },
    { step: "Securisation de la zone", description: `A son arrivee, le depanneur bloque le tablier en position sure, coupe l'alimentation electrique et protege la zone pour empecher tout accident.` },
    { step: "Reparation ciblee", description: `Le composant defaillant est identifie et remplace grace au stock embarque. Ressorts, cables, galets, moteurs : tout est disponible dans le vehicule.` },
    { step: "Validation et compte-rendu", description: `Tests de fonctionnement complets, remise d'un rapport d'intervention et facture detaillee. Garantie 12 mois sur chaque piece remplacee.` },
  ],
  (zone, prep) => [
    { step: "Signalement de la panne", description: `Appelez le ${siteConfig.telephone} a toute heure. Notre operateur recueille les details de la panne et localise le technicien le plus proche ${prep} ${zone.name}.` },
    { step: "Intervention rapide sur site", description: `Le depanneur arrive equipe en moins de 30 minutes. Son vehicule contient tout le necessaire pour traiter les pannes les plus courantes.` },
    { step: "Diagnostic precis", description: `Chaque organe est inspecte : ressorts, cables, galets, rails, moteur, carte electronique, telecommande. La cause exacte est identifiee avant toute reparation.` },
    { step: "Reparation et garantie", description: `Remplacement des pieces defectueuses, reglages fins, essai complet. Un certificat d'intervention et une garantie de 12 mois vous sont remis.` },
  ],
  (zone, prep) => [
    { step: "Appel d'urgence 24h/24", description: `Composez le ${siteConfig.telephone} pour signaler la panne de votre porte sectionnelle ${prep} ${zone.name}. Nous intervenons de jour comme de nuit, week-end et jours feries.` },
    { step: "Technicien en 30 minutes", description: `Un professionnel qualifie rejoint votre adresse en moins d'une demi-heure, equipe du materiel de diagnostic et des pieces de rechange necessaires.` },
    { step: "Devis clair avant travaux", description: `Le technicien vous presente le diagnostic complet et un devis ferme. Aucune intervention n'est engagee sans votre accord ecrit.` },
    { step: "Porte operationnelle", description: `La panne est resolue, la porte testee sur dix cycles complets et les securites verifiees. Vous retrouvez l'usage normal de votre equipement.` },
  ],
  (zone, prep) => [
    { step: "Contact immediat", description: `Le ${siteConfig.telephone} est votre ligne directe vers un technicien specialise en depannage de portes sectionnelles ${prep} ${zone.name}. Reponse garantie en moins de 2 minutes.` },
    { step: "Deplacement sous 30 minutes", description: `Nos equipes de terrain sont reparties dans votre secteur pour garantir un temps d'arrivee minimal, meme aux heures de pointe.` },
    { step: "Analyse et solution", description: `Le diagnostic s'appuie sur des instruments de mesure professionnels. Le technicien identifie la panne et vous propose la solution la plus durable.` },
    { step: "Fin d'intervention", description: `Reparation finalisee, essais valides, rapport et facture remis. La garantie de 12 mois couvre les pieces et la main-d'oeuvre.` },
  ],
];

// ===============================================
// FAQ — 6 sets of 5 questions, all depannage-focused
// ===============================================

const faqSets: ((zone: Zone, data: LocalDataEntry, prep: string) => { question: string; answer: string }[])[] = [
  // Set 0: reactivite + urgence
  (zone, data, prep) => [
    { question: `Quel est le delai d'intervention pour un depannage de porte sectionnelle ${prep} ${zone.name} ?`, answer: `Nos techniciens arrivent sur place en moins de 30 minutes dans le secteur ${zone.postalCode} ${zone.name}, 24 heures sur 24. Des equipes sont positionnees en permanence dans votre secteur, pres de ${data.landmarks[0]}, pour garantir ce delai, y compris la nuit, le week-end et les jours feries.` },
    { question: `Intervenez-vous la nuit et le week-end pour les portes sectionnelles ${prep} ${zone.name} ?`, answer: `Oui, notre service de depannage fonctionne sans interruption. L'astreinte nuit et week-end dispose du meme effectif et du meme stock de pieces que l'equipe de jour. Le tarif est annonce clairement par telephone avant l'envoi du technicien.` },
    { question: `Quel est le cout d'un depannage de porte sectionnelle ${prep} ${zone.name} ?`, answer: `Le tarif depend de la nature de la panne et des pieces a remplacer. Le deplacement et le diagnostic sont inclus dans le forfait. Un devis detaille est remis sur place avant toute intervention. Les depannages simples — deblocage, recalibrage — debutent a partir de 89 euros.` },
    { question: `Le technicien a-t-il les pieces necessaires dans son vehicule ?`, answer: `Chaque vehicule d'intervention transporte plus de 400 references de pieces detachees : ressorts de torsion, cables acier, galets, moteurs Somfy et Hormann, cartes electroniques, telecommandes. 85 % des pannes sont resolues en une seule visite sans commande de piece.` },
    { question: `Delivrez-vous une garantie apres un depannage de porte sectionnelle ?`, answer: `Oui, chaque intervention est couverte par une garantie de 12 mois sur les pieces remplacees et la main-d'oeuvre. Un certificat d'intervention detaille vous est remis a la fin du depannage ${prep} ${zone.name}.` },
  ],
  // Set 1: pannes mecaniques
  (zone, data, prep) => [
    { question: `Mon ressort de porte sectionnelle a casse ${prep} ${zone.name}, que faire ?`, answer: `Surtout, ne tentez pas de manipuler la porte. Un ressort de torsion stocke une energie considerable et sa manipulation sans outillage adapte est dangereuse. Appelez le ${siteConfig.telephone} : un technicien equipe de ressorts de remplacement intervient en 30 minutes dans le ${zone.postalCode}.` },
    { question: `Peut-on remplacer un seul panneau de porte sectionnelle endommage ?`, answer: `Oui, les panneaux sont modulaires. Nous commandons la reference exacte — meme profil, meme epaisseur, meme teinte RAL — et remplacons uniquement le ou les panneaux abimes. Le delai de livraison est de 48 a 72 heures pour les modeles courants.` },
    { question: `Ma porte sectionnelle fait un bruit de grincement metallique, est-ce grave ?`, answer: `Un grincement signale generalement des galets uses, un rail mal aligne ou un manque de lubrification. Ce n'est pas une urgence immediate, mais le probleme s'aggravera sans intervention. Nos techniciens diagnostiquent et corrigent ce type de panne en moins d'une heure.` },
    { question: `Le cable de ma porte sectionnelle est sorti du tambour, que faire ?`, answer: `Un cable deraille provoque un desequilibre dangereux du tablier. N'essayez pas de le remettre en place vous-meme. Nos depanneurs remplacent les deux cables simultanement, reglent la tension au dynamometre et verifient l'equilibrage complet du tablier.` },
    { question: `Ma porte sectionnelle descend de 3 cm apres fermeture, est-ce normal ?`, answer: `Non. Un recul de 2 a 3 centimetres apres fermeture indique des ressorts fatigues qui n'exercent plus assez de tension pour maintenir le tablier en position. Il est recommande de faire verifier et eventuellement remplacer les ressorts avant qu'ils ne cassent.` },
  ],
  // Set 2: motorisation + electronique
  (zone, data, prep) => [
    { question: `Le moteur de ma porte sectionnelle fait un bruit mais la porte ne bouge pas, pourquoi ?`, answer: `Le moteur tourne mais n'entraine pas le tablier : cela pointe vers un engrenage casse dans le bloc moteur, une courroie rompue ou un embrayage use. Nos techniciens disposent des pieces de remplacement pour les moteurs Somfy, Hormann, Came et Marantec dans chaque vehicule.` },
    { question: `Ma telecommande de porte sectionnelle ne fonctionne plus ${prep} ${zone.name}, que faire ?`, answer: `Commencez par remplacer la pile (CR2032). Si le probleme persiste, la telecommande est peut-etre desappairee du recepteur. Nos techniciens effectuent le reappairage en quelques minutes selon le protocole specifique de votre marque.` },
    { question: `La porte sectionnelle s'arrete a mi-course et refuse de continuer, pourquoi ?`, answer: `Un arret en milieu de course indique generalement un capteur de fin de course decale, un limiteur d'effort qui se declenche ou un obstacle detecte par les cellules photoelectriques. Le diagnostic de nos techniciens permet d'identifier et corriger la cause precise rapidement.` },
    { question: `Peut-on ajouter une motorisation sur une porte sectionnelle manuelle ?`, answer: `Oui, la motorisation d'une porte sectionnelle manuelle est possible dans la grande majorite des cas. Nous installons des moteurs Somfy, Hormann ou Came adaptes a la taille et au poids de votre tablier, avec telecommande, securites reglementaires et option domotique.` },
    { question: `La carte electronique de mon moteur de porte sectionnelle est-elle reparable ?`, answer: `Dans certains cas, le remplacement d'un composant isole — condensateur, relais, fusible — suffit. Nos techniciens testent chaque composant au multimetre avant de proposer un remplacement complet de la carte. Le diagnostic electronique est inclus dans le forfait d'intervention.` },
  ],
  // Set 3: copropriete + assurance
  (zone, data, prep) => [
    { question: `La porte du parking de ma copropriete est en panne, qui doit appeler le depanneur ?`, answer: `Le gardien ou le syndic de copropriete peut contacter directement notre service de depannage au ${siteConfig.telephone}. L'intervention est facturee a la copropriete. Nous envoyons un rapport complet au syndic apres chaque depannage pour faciliter la gestion administrative.` },
    { question: `Mon vehicule a endommage la porte sectionnelle du parking, comment proceder ?`, answer: `Prenez des photos des degats, declarez le sinistre a votre assurance automobile et contactez-nous pour un devis de reparation. Nous etablissons un dossier conforme aux exigences des assureurs — photos horodatees, bordereau de pieces, facture detaillee — pour une prise en charge simplifiee.` },
    { question: `Proposez-vous des contrats de maintenance pour les coproprietes ${prep} ${zone.name} ?`, answer: `Oui, nos contrats de maintenance collective comprennent 2 a 4 visites preventives par an, une astreinte 24h/24 avec intervention prioritaire et un tarif degressif par nombre de portes. Le syndic recoit un rapport ecrit apres chaque passage.` },
    { question: `La porte de mon garage a ete forcee lors d'un cambriolage, que faire ?`, answer: `Deposez plainte et contactez-nous immediatement. Nos techniciens d'astreinte securisent la porte en urgence — plaques acier, verrouillage renforce — puis etablissent un devis de remplacement avec dossier complet pour votre assurance multirisque habitation.` },
    { question: `Le badge d'acces au parking ne fonctionne plus, est-ce lie a la porte sectionnelle ?`, answer: `Pas necessairement. Le probleme peut venir du badge lui-meme, du lecteur RFID ou de la centrale de controle d'acces. Nos techniciens diagnostiquent l'ensemble de la chaine — porte mecanique et systeme electronique — en une seule intervention.` },
  ],
  // Set 4: securite + normes
  (zone, data, prep) => [
    { question: `Ma porte sectionnelle est-elle aux normes de securite actuelles ?`, answer: `Les portes motorisees accessibles au public doivent respecter la norme EN 13241-1 : cellules photoelectriques, barre palpeuse, parachute anti-chute, limiteur d'effort et verrouillage anti-relevage. Nos techniciens verifient ces cinq dispositifs lors de chaque intervention et signalent les manquements.` },
    { question: `Que faire si la porte sectionnelle reste bloquee en position ouverte ?`, answer: `Ne tentez pas de forcer la fermeture. Coupez l'alimentation electrique du moteur et contactez le ${siteConfig.telephone}. Un technicien vous guidera par telephone pour securiser la zone en attendant son arrivee, puis diagnostiquera et reparera la panne sur place.` },
    { question: `Une porte sectionnelle en panne est-elle dangereuse ?`, answer: `Oui, potentiellement. Un ressort casse peut provoquer la chute brutale du tablier (60 a 150 kg). Un cable deraille desequilibre la porte. Un moteur defaillant peut actionner la porte de maniere imprevisible. Il est imperatif de ne pas utiliser la porte et de faire appel a un professionnel.` },
    { question: `Faut-il un entretien regulier pour eviter les pannes de porte sectionnelle ?`, answer: `Absolument. Deux visites preventives par an — graissage, controle des ressorts et cables, verification des securites — reduisent le risque de panne de plus de 70 % et prolongent la duree de vie de l'installation de 30 a 40 %.` },
    { question: `Que couvre la garantie apres un depannage de porte sectionnelle ?`, answer: `Notre garantie de 12 mois couvre les pieces remplacees et la main-d'oeuvre associee. Si le meme probleme se reproduit dans ce delai, nous reintervenons sans frais supplementaires ${prep} ${zone.name}.` },
  ],
  // Set 5: marques + modeles
  (zone, data, prep) => [
    { question: `Intervenez-vous sur les portes sectionnelles Hormann ${prep} ${zone.name} ?`, answer: `Oui, Hormann est l'une de nos specialites. Nos techniciens sont formes aux gammes LPU 42, LPU 67, SPU F42 et aux motorisations SupraMatic et ProMatic. Nous disposons de pieces d'origine Hormann dans chaque vehicule d'intervention.` },
    { question: `Pouvez-vous depanner une porte sectionnelle Novoferm ou Crawford ?`, answer: `Absolument. Nous intervenons sur toutes les marques du marche : Hormann, Novoferm, Crawford, Came, FAAC, Somfy, Marantec, Nice. Nos depanneurs disposent des pieces detachees compatibles pour la majorite des modeles residentiels et industriels.` },
    { question: `Le depannage d'une porte sectionnelle industrielle est-il plus long ?`, answer: `Les portes industrielles sont plus grandes et plus lourdes, ce qui peut allonger le temps d'intervention de 30 a 60 minutes selon la panne. Cependant, nos techniciens sont specialement equipes pour ces formats et interviennent dans les memes delais.` },
    { question: `Comment savoir si ma porte sectionnelle doit etre reparee ou remplacee ?`, answer: `Quand le cumul des reparations depasse 40 % du prix d'une porte neuve, ou que les panneaux presentent de la rouille perforante et les ressorts une fatigue avancee, le remplacement complet est plus economique a long terme. Nos techniciens vous conseillent en toute objectivite.` },
    { question: `Combien de temps dure un depannage de porte sectionnelle en moyenne ?`, answer: `La majorite des depannages sont resolus en 45 minutes a 1h30 selon la complexite de la panne. Un deblocage simple prend 20 a 30 minutes. Un remplacement de ressort de torsion environ 1 heure. Un changement de moteur entre 1h et 1h30.` },
  ],
];

// ===============================================
// Main export function
// ===============================================

export function getDepannageZoneContent(zone: Zone): DepannageZoneContent {
  const data = localData[zone.slug] || null;
  const preposition = zone.department === "Paris" ? "dans le" : "a";
  const zoneIdx = getZoneIndex(zone);

  const local: LocalDataEntry = data
    ? { landmarks: data.landmarks, streets: data.streets, neighborhoods: data.neighborhoods, metros: data.metros }
    : defaultLocal;

  // Rotate intro among 6 templates
  const introIdx = zoneIdx % 6;
  const rawIntro = introTemplates[introIdx](zone, local, preposition);
  const intro = rawIntro + ` Pour les residents et commercants du ${zone.postalCode} ${zone.name}, notre equipe garantit une prise en charge rapide et professionnelle.`;

  // Rotate SEO1 among 6 templates
  const seo1Idx = zoneIdx % 6;
  const seo1Title = seo1Titles[seo1Idx](zone, preposition);
  const seo1 = seo1Templates[seo1Idx](zone, local, preposition);

  // Rotate SEO2 — offset by 3
  const seo2Idx = (zoneIdx + 3) % 6;
  const seo2Title = seo2Titles[seo2Idx](zone, preposition);
  const seo2 = seo2Templates[seo2Idx](zone, local, preposition);

  // Rotate emergency process
  const processIdx = (zoneIdx + 2) % 6;
  const emergencyProcess = emergencyProcessSets[processIdx](zone, preposition);

  // Rotate FAQ — offset by 1
  const faqIdx = (zoneIdx + 1) % 6;
  const faq = faqSets[faqIdx](zone, local, preposition);

  return { intro, seo1Title, seo1, seo2Title, seo2, emergencyProcess, faq };
}
