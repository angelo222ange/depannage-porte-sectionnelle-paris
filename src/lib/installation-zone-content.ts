import { Zone, zones, siteConfig } from "@/config/site";
import { localData } from "@/lib/zone-content";

export interface InstallationZoneContent {
  intro: string;
  seo1Title: string;
  seo1: string;
  seo2Title: string;
  seo2: string;
  installationProcess: { step: string; description: string }[];
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
// INTRO templates — 6 installation-specific intros
// ===============================================

type IntroFn = (zone: Zone, data: LocalDataEntry, prep: string) => string;

const introTemplates: IntroFn[] = [
  // 0: expertise pose neuve
  (zone, data, prep) => `Vous envisagez l'installation d'une porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}) pour votre garage, votre local professionnel ou le parking de votre copropriete ? Choisir le bon installateur est la garantie d'une pose durable, conforme aux normes et parfaitement adaptee a votre configuration. Nos techniciens poseurs interviennent quotidiennement dans le secteur de ${data.neighborhoods[0]} et aux abords de ${data.landmarks[0]} pour realiser des installations completes — de la prise de cotes jusqu'a la mise en service de la motorisation. Fort de plus de 25 ans d'experience en pose de portes sectionnelles en region parisienne, notre equipe maitrise toutes les contraintes du bati local : linteaux bas, ouvertures non standards, parkings souterrains etroits le long de ${data.streets[0]} et coproprietes avec acces restreints. Chaque installation est realisee dans les regles de l'art, avec des materiaux certifies, une motorisation fiable et l'ensemble des dispositifs de securite imposes par la norme EN 13241-1.`,

  // 1: remplacement porte existante
  (zone, data, prep) => `Le remplacement de votre ancienne porte de garage par une porte sectionnelle moderne ${prep} ${zone.name} transforme radicalement le confort, la securite et l'isolation thermique de votre local. Qu'il s'agisse de remplacer une porte basculante vetuste, un rideau metallique fatigue ou une porte a battants encombrante, nos installateurs certifies prennent en charge la depose complete de l'ancien equipement et la pose de votre nouvelle porte sectionnelle dans la journee. Les immeubles de ${data.neighborhoods[0]} et les residences le long de ${data.streets[0]} presentent souvent des configurations particulieres — hauteur de linteau reduite, largeur non standard, passage de gaines electriques — que notre equipe sait parfaitement gerer grace a 25 ans de pratique sur le terrain parisien. Nos vehicules d'intervention, stationnes en permanence pres de ${data.landmarks[0]}, embarquent tout le materiel necessaire : rails de guidage, panneaux isolants, motorisation, quincaillerie et outillage specialise pour une installation propre et rapide.`,

  // 2: isolation thermique
  (zone, data, prep) => `L'installation d'une porte sectionnelle isolante ${prep} ${zone.name} (${zone.postalCode}) est un investissement rentable qui ameliore sensiblement le confort thermique de votre garage et reduit vos depenses energetiques. Les panneaux sandwich de 40 a 45 millimetres d'epaisseur, mousse polyurethane haute densite, offrent un coefficient d'isolation thermique U aussi bas que 1,0 W/m2K — une performance qui transforme un garage froid et humide en un espace tempere. Dans les immeubles de ${data.neighborhoods[0]} ou les maisons le long de ${data.streets[0]}, la porte de garage represente souvent la plus grande ouverture du batiment et constitue un pont thermique majeur si elle n'est pas correctement isolee. Nos installateurs, bases en permanence a proximite de ${data.landmarks[0]}, selectionnent des panneaux certifies avec joints d'etancheite perimetriques sur les quatre cotes — bas, haut et lateraux — pour supprimer toute infiltration d'air. L'installation comprend egalement un seuil au sol en aluminium avec joint brosse anti-poussiere et un joint de linteau superieur a double levre, garantissant une etancheite optimale meme en cas de vent fort.`,

  // 3: motorisation integree
  (zone, data, prep) => `Nos installations de portes sectionnelles ${prep} ${zone.name} integrent systematiquement une motorisation de derniere generation pour un confort d'utilisation optimal. Les moteurs Somfy, Hormann et Marantec que nous posons dans les garages de ${data.neighborhoods[0]} et les parkings le long de ${data.streets[0]} offrent une ouverture silencieuse, une fermeture securisee et une compatibilite totale avec les systemes domotiques : pilotage par smartphone, integration avec les assistants vocaux, programmation horaire automatique. Chaque motorisation est selectionnee en fonction du poids et de la surface du tablier pour garantir un fonctionnement fluide sur plus de 20 000 cycles. Les capteurs de securite — cellules photoelectriques, barre palpeuse, parachute anti-chute — sont inclus de serie dans chaque installation realisee par nos techniciens pres de ${data.landmarks[0]}. La telecommande multicanaux permet de piloter jusqu'a quatre equipements simultanement : porte de garage, portail, eclairage exterieur et alarme. Nos installateurs assurent egalement la programmation complete du systeme et forment chaque client a l'utilisation de l'ensemble des fonctionnalites.`,

  // 4: porte sur mesure
  (zone, data, prep) => `Chaque garage ${prep} ${zone.name} possede des dimensions uniques, et c'est pourquoi nous proposons exclusivement des installations de portes sectionnelles sur mesure, fabriquees aux cotes exactes de votre ouverture. Dans les parkings des immeubles haussmanniens de ${data.neighborhoods[0]}, les hauteurs de linteau descendant parfois sous les 200 millimetres imposent des systemes de refoulement specifiques — deport lateral ou refoulement arriere bas — que nos installateurs maitrisent parfaitement. Les facades le long de ${data.streets[0]} et les residences autour de ${data.landmarks[0]} exigent souvent des teintes RAL personnalisees pour s'harmoniser avec l'architecture environnante. Nous proposons un catalogue de plus de 200 coloris, des finitions bois (chene dore, noyer, wenge), des hublots en acrylique ou en verre securit, des grilles de ventilation integrees et des portillons pietons pour un passage quotidien sans manipulation de la porte complete. Chaque configuration est validee par un technicien-metreur qui se deplace gratuitement pour relever les dimensions exactes et identifier les contraintes specifiques de votre installation.`,

  // 5: installation copropriete
  (zone, data, prep) => `L'installation d'une porte sectionnelle en copropriete ${prep} ${zone.name} (${zone.postalCode}) necessite une approche specifique qui tient compte des contraintes collectives : decision en assemblee generale, coordination avec le syndic, respect du voisinage et planning de chantier adapte. Notre equipe accompagne les coproprietes de ${data.neighborhoods[0]} depuis la phase de devis jusqu'a la reception des travaux, en passant par la redaction du dossier technique destine au conseil syndical. Les parkings souterrains le long de ${data.streets[0]} et dans les immeubles proches de ${data.landmarks[0]} presentent des contraintes d'acces — rampes etroites, plafonds bas, ventilation mecanique — que nos installateurs connaissent parfaitement pour y travailler quotidiennement. Nous planifions les travaux pour minimiser la gene : installation en une seule journee, protection du sol et des murs, evacuation des dechets le jour meme. Le systeme de controle d'acces par badge RFID, interphone ou digicode est integre a la motorisation de la porte pour une gestion collective securisee et pratique.`,
];

// ===============================================
// SEO1 — 6 installation-specific angles
// ===============================================

type ContentFn = (zone: Zone, data: LocalDataEntry, prep: string) => string;

const seo1Titles: ((zone: Zone, prep: string) => string)[] = [
  (zone, prep) => `Pose neuve de porte sectionnelle ${prep} ${zone.name} — prise de cotes et reglage`,
  (zone, prep) => `Remplacement de porte de garage par porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Isolation thermique et phonique de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Motorisation et domotique de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Porte sectionnelle sur mesure ${prep} ${zone.name} — dimensions atypiques`,
  (zone, prep) => `Installation porte sectionnelle de copropriete ${prep} ${zone.name}`,
];

const seo1Templates: ContentFn[] = [
  // 0: Pose neuve — prise de cotes, preparation tableau, fixation rails, reglage
  (zone, data, prep) => `La pose neuve d'une porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}) commence bien avant l'arrivee du technicien le jour de l'installation. Notre metreur se deplace gratuitement dans votre garage de ${data.neighborhoods[0]} pour effectuer un releve precis de l'ouverture : largeur au sol et au linteau, hauteur sous plafond, profondeur disponible pour le refoulement, etat du gros-oeuvre et position des alimentations electriques. Ces mesures determinent le type de porte, le systeme de refoulement (plafond standard, deport lateral ou arriere haut) et la motorisation adaptee. Le jour de l'installation, nos techniciens preparent le tableau de l'ouverture : verification de l'aplomb et du niveau, traitement des irregularites de maçonnerie, pose de corniere de finition si necessaire. Les rails verticaux et horizontaux sont fixes avec des pattes reglables tous les 50 centimetres sur des chevilles chimiques adaptees au support — parpaing, beton, brique ou pierre dans les immeubles anciens pres de ${data.landmarks[0]}. L'assemblage des panneaux s'effectue de bas en haut, chaque section etant reliee a la precedente par des charnieres articulees avec galets de guidage en nylon. Les ressorts de torsion sont calcules au gramme pres en fonction du poids du tablier — entre 60 et 180 kg selon les dimensions — et montes sur un arbre en acier galvanise avec paliers a roulements etanches. La motorisation est fixee au plafond sur un rail de guidage central, puis raccordee electriquement avec un cable souple sous gaine. Le reglage final comprend la calibration de la force moteur, le positionnement des fins de course haute et basse, l'appairage des telecommandes et le test des dispositifs de securite sur dix cycles complets. Chaque installation realisee le long de ${data.streets[0]} fait l'objet d'un proces-verbal de reception signe par le client, accompagne du carnet d'entretien et du certificat de conformite EN 13241-1.`,

  // 1: Remplacement porte existante — depose ancienne, adaptation chassis, mise aux normes
  (zone, data, prep) => `Le remplacement d'une porte de garage existante par une porte sectionnelle ${prep} ${zone.name} est l'une de nos interventions les plus demandees dans les immeubles de ${data.neighborhoods[0]} et les maisons individuelles le long de ${data.streets[0]}. Les anciennes portes basculantes a contrepoids, installees dans les annees 1970 a 1990, presentent des defauts majeurs : isolation thermique inexistante, mecanisme de ressorts lateraux dangereux, encombrement du debattement exterieur qui empiete sur le trottoir ou la voie privee. La porte sectionnelle supprime ces inconvenients : ouverture verticale sans debattement, isolation par panneaux sandwich de 40 a 45 mm, motorisation silencieuse et securites reglementaires. Notre processus de remplacement demarre par la depose soigneuse de l'ancien equipement : demontage du tablier, retrait des rails et des ressorts, debranchement electrique et evacuation de l'ensemble. Le technicien inspecte ensuite le chassis de maçonnerie — linteau, piedroits et seuil — pour evaluer les adaptations necessaires. Dans les garages anciens pres de ${data.landmarks[0]}, il est frequent de devoir retailler le linteau pour gagner les centimetres necessaires au passage du ressort de torsion, ou de reprendre les piedroits pour obtenir un aplomb parfait. Ces travaux preparatoires sont realises le matin, la pose de la porte sectionnelle l'apres-midi, pour une mise en service en fin de journee. L'installation inclut systematiquement la mise aux normes electrique du tableau de garage — disjoncteur dedie, prise a proximite du moteur, eclairage automatique declenche par la motorisation — conformement aux prescriptions de la norme NF C 15-100. Le remplacement complet, de la depose a la mise en service, est garanti pour une duree de dix ans sur la structure et deux ans sur la motorisation.`,

  // 2: Isolation thermique — panneaux sandwich, joints, coefficient U, economies energie
  (zone, data, prep) => `L'isolation thermique est l'un des criteres determinants dans le choix d'une porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}), et nos installations exploitent les technologies les plus performantes du marche pour garantir un confort optimal dans votre garage. Les panneaux sandwich que nous posons dans les garages de ${data.neighborhoods[0]} se composent de deux toles d'acier laquees enserrant une mousse polyurethane expansee haute densite de 42 millimetres d'epaisseur. Cette structure atteint un coefficient de transmission thermique U de 1,0 W/m2K pour l'ensemble du panneau, une performance comparable a un mur isole aux normes RT 2020. Mais l'isolation d'une porte sectionnelle ne se limite pas aux panneaux : les deperditions se concentrent aux joints perimetriques, aux liaisons entre sections et au seuil au sol. Nos installateurs posent des joints en EPDM haute resilience sur les quatre cotes de la porte — lateraux, superieur et inferieur — avec un double niveau d'etancheite pour bloquer a la fois l'air et l'eau. Le joint de seuil en aluminium avec brosse anti-poussiere compense les irregularites du sol et empeche les remontees d'humidite. Les liaisons entre panneaux sont equipees de joints inter-sections qui maintiennent la continuite thermique meme en position fermee. Dans les garages chauffes ou attenants a un espace de vie le long de ${data.streets[0]}, cette isolation complete reduit les deperditions thermiques par la porte de 60 a 75 % par rapport a une porte non isolee. Traduit en economies d'energie, cela represente une reduction de la facture de chauffage de 150 a 300 euros par an selon la surface de l'ouverture et la zone climatique. L'installation de la porte isolante est eligible a la TVA reduite a 10 % dans le cadre de travaux d'amelioration energetique, un avantage fiscal dont beneficient les proprietaires des immeubles proches de ${data.landmarks[0]}.`,

  // 3: Motorisation integree — Somfy/Hormann, domotique, telecommande, programmation
  (zone, data, prep) => `La motorisation constitue le coeur technologique de chaque porte sectionnelle que nous installons ${prep} ${zone.name}. Nos installateurs travaillent exclusivement avec les trois leaders mondiaux de la motorisation de portes — Somfy, Hormann et Marantec — dont les moteurs offrent la fiabilite, la securite et la connectivite indispensables a une installation durable. Le choix du moteur est determine par le poids du tablier, la frequence d'utilisation et les fonctionnalites souhaitees par le client. Pour un garage residentiel dans ${data.neighborhoods[0]}, le Somfy Dexxo Pro 1000 ou le Hormann ProMatic 4 assurent une ouverture silencieuse en 12 a 15 secondes pour des tabliers jusqu'a 130 kg. Les parkings de copropriete le long de ${data.streets[0]}, avec des portes plus lourdes et une cadence de 30 a 50 cycles par jour, necessitent des moteurs industriels comme le Hormann SupraMatic HT ou le Marantec Comfort 380 avec variateur de vitesse integre. L'ensemble de nos motorisations est compatible avec les systemes domotiques courants : Somfy TaHoma, Apple HomeKit, Google Home et Amazon Alexa. Le pilotage par smartphone permet d'ouvrir et fermer la porte a distance, de verifier son etat en temps reel et de recevoir une notification en cas d'ouverture non programmee. Nos techniciens configurent egalement la programmation horaire — fermeture automatique a 22 heures, ouverture programmee le matin — et l'eclairage integre au moteur qui s'active pendant 3 minutes apres chaque manoeuvre. Chaque installation pres de ${data.landmarks[0]} inclut deux telecommandes multicanaux, un recepteur mural avec bouton-poussoir et l'activation de l'ensemble des protocoles de securite : detection d'obstacles par capteur de force, inversion automatique et coupure de securite en cas de blocage.`,

  // 4: Porte sur mesure — dimensions atypiques, linteau bas, couleurs RAL, hublots
  (zone, data, prep) => `L'installation d'une porte sectionnelle sur mesure ${prep} ${zone.name} repond aux configurations atypiques que les modeles standards ne peuvent pas satisfaire. Dans les garages des immeubles anciens de ${data.neighborhoods[0]}, les ouvertures presentent frequemment des largeurs superieures a 3 metres, des hauteurs sous linteau inferieures a 150 millimetres ou des formes irregulieres dues aux tassements du bati. Nos techniciens-metreurs effectuent un releve tridimensionnel de l'ouverture — six points de mesure en largeur, quatre en hauteur, verification de l'equerre et du niveau — pour commander une porte fabriquee aux dimensions exactes avec une tolerance de plus ou moins 2 millimetres. Les systemes de refoulement sur mesure resolvent les contraintes de linteau bas : le refoulement arriere bas (Low Headroom) ne demande que 95 millimetres de degagement, contre 350 millimetres pour un refoulement standard. Le deport lateral, ou la porte coulisse le long du mur plutot qu'au plafond, est la solution ideale pour les garages dont le plafond est encombre de canalisations ou de conduits de ventilation le long de ${data.streets[0]}. Le choix esthetique est tout aussi important dans les quartiers residentiels proches de ${data.landmarks[0]} : notre catalogue propose plus de 200 teintes RAL, des finitions bois thermoformees — chene dore, noyer, mahogany, teck — et des surfaces lisses, nervurees ou micrograinurees. Les hublots rectangulaires, carres ou ronds en acrylique transparent ou depoli apportent une lumiere naturelle au garage tout en preservant l'intimite. Les options de ventilation — grilles integrees aux panneaux inferieurs — assurent le renouvellement de l'air dans les garages fermes. Enfin, le portillon pieton integre au tablier permet un passage quotidien sans actionner l'ensemble de la porte, une option particulierement appreciee dans les residences de ${pick(data.neighborhoods, 1)}.`,

  // 5: Installation copropriete — AG, syndic, respect voisinage, planning chantier
  (zone, data, prep) => `L'installation d'une porte sectionnelle de copropriete ${prep} ${zone.name} obeit a un processus rigoureux qui implique plusieurs interlocuteurs et des contraintes reglementaires specifiques. La decision d'installer ou de remplacer la porte du parking commun est votee en assemblee generale des coproprietaires, generalement a la majorite absolue de l'article 25. Avant cette assemblee, notre equipe prepare un dossier technique complet pour le syndic des immeubles de ${data.neighborhoods[0]} : diagnostic de l'installation existante, specifications techniques de la porte proposee, plan d'implantation cote, planning d'intervention et devis detaille avec ventilation des postes. Ce dossier permet aux coproprietaires de voter en toute connaissance de cause. Une fois le vote acquis, nous coordonnons le calendrier d'installation avec le syndic et le gardien pour minimiser la gene des residents. Le chantier est generalement programme sur une journee ouvree, de 8 heures a 18 heures, avec un acces au parking maintenu par une securisation provisoire. Nos techniciens qui interviennent le long de ${data.streets[0]} et dans les immeubles proches de ${data.landmarks[0]} respectent strictement les horaires autorises par le reglement de copropriete et les dispositions municipales sur les nuisances sonores. L'installation inclut le raccordement au systeme de controle d'acces existant — badge RFID, interphone, digicode — ou la pose d'un nouveau systeme si necessaire. La programmation des badges pour l'ensemble des coproprietaires est realisee le jour de la mise en service. Un proces-verbal de reception detaille est adresse au syndic, accompagne du certificat de conformite, du carnet d'entretien et de la documentation technique complete. Nous proposons ensuite un contrat de maintenance collective avec deux visites preventives annuelles et une astreinte de depannage prioritaire pour les coproprietes de ${pick(data.neighborhoods, 1)}.`,
];

// ===============================================
// SEO2 — 6 installation-specific angles
// ===============================================

const seo2Titles: ((zone: Zone, prep: string) => string)[] = [
  (zone, prep) => `Choisir la bonne porte sectionnelle ${prep} ${zone.name} selon votre configuration`,
  (zone, prep) => `Normes et garanties d'installation de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Prix et financement d'une porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Delais et planning d'installation de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Accessoires et options pour porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `SAV et entretien apres installation de porte sectionnelle ${prep} ${zone.name}`,
];

const seo2Templates: ContentFn[] = [
  // 0: Choix du bon modele — sectionnelle vs enroulable vs basculante selon config
  (zone, data, prep) => `Le choix entre une porte sectionnelle, une porte enroulable et une porte basculante depend etroitement de la configuration de votre garage ${prep} ${zone.name} (${zone.postalCode}). La porte sectionnelle est la solution la plus polyvalente : elle s'adapte a pratiquement toutes les ouvertures, offre la meilleure isolation thermique grace a ses panneaux sandwich, et ne genere aucun debattement exterieur puisque le tablier se replie au plafond. Dans les garages des immeubles de ${data.neighborhoods[0]}, ou l'espace est souvent contraint, la porte sectionnelle exploite chaque centimetre de hauteur sous plafond sans empieter sur la voie de circulation. La porte enroulable, dont le tablier s'enroule dans un coffre au-dessus de l'ouverture, est adaptee aux configurations ou le plafond n'est pas disponible — canalisations, conduits de ventilation, eclairage encastre. Son coffre compact de 300 millimetres de diametre libere la totalite du plafond, mais son isolation thermique reste inferieure a celle de la sectionnelle et elle ne propose pas d'option portillon pieton. La porte basculante, encore presente dans de nombreux garages le long de ${data.streets[0]}, est la technologie la plus ancienne : son tablier d'un seul tenant pivote vers l'exterieur a l'ouverture, ce qui empiete de 1,5 metre sur le trottoir ou la voie privee — un inconvenient redhibitoire dans les parkings a acces direct sur rue pres de ${data.landmarks[0]}. Nos techniciens-conseils se deplacent gratuitement pour evaluer votre configuration et vous recommander la solution la plus adaptee en termes d'encombrement, d'isolation, de securite et de budget. Dans la majorite des cas, la porte sectionnelle s'impose comme le meilleur rapport performances-prix pour les habitations et les locaux professionnels de ${pick(data.neighborhoods, 1)}.`,

  // 1: Normes et garanties — EN 13241, garantie decennale, assurance RC pro
  (zone, data, prep) => `L'installation d'une porte sectionnelle ${prep} ${zone.name} est encadree par des normes strictes que notre entreprise respecte rigoureusement a chaque intervention. La norme europeenne EN 13241-1, transposee en droit francais, impose cinq dispositifs de securite obligatoires pour toute porte motorisee : un systeme de detection d'obstacles (cellules photoelectriques ou barre palpeuse), un parachute anti-chute qui bloque le tablier en cas de rupture de cable ou de ressort, un limiteur d'effort electronique qui arrete le moteur si la resistance depasse 400 newtons, un verrouillage anti-relevage qui empeche le soulevement exterieur du tablier, et un dispositif de debrayage manuel accessible de l'interieur pour ouvrir la porte en cas de coupure de courant. Chaque installation que nous realisons dans les garages de ${data.neighborhoods[0]} integre ces cinq dispositifs de serie, et nos techniciens delivrent un certificat de conformite EN 13241-1 a la fin de chaque chantier. Notre entreprise est titulaire d'une assurance responsabilite civile professionnelle d'un montant de 3 millions d'euros, ainsi que d'une garantie decennale qui couvre les desordres affectant la solidite de l'ouvrage pendant dix ans apres l'installation. La motorisation beneficie d'une garantie constructeur de 2 a 5 ans selon les marques, et les panneaux du tablier sont garantis 10 ans contre la corrosion perforante. Les travaux d'installation realises le long de ${data.streets[0]} et pres de ${data.landmarks[0]} sont factures avec TVA a 10 % pour les logements de plus de deux ans dans le cadre des travaux d'amelioration de l'habitat, conformement a l'article 279-0 bis du Code general des impots. L'ensemble de ces garanties et certifications vous protege juridiquement et financierement sur le long terme.`,

  // 2: Prix et financement — devis gratuit, TVA 10%, aides renovation, echeancier
  (zone, data, prep) => `Le prix d'une installation de porte sectionnelle ${prep} ${zone.name} varie en fonction des dimensions de l'ouverture, du type de panneaux (simple ou double paroi), de la motorisation choisie et des options selectionnees. Pour une porte sectionnelle residentielle standard de 2,5 metres de large et 2,1 metres de haut avec motorisation Somfy ou Hormann, le budget se situe a partir de 1 200 euros pose comprise pour un modele d'entree de gamme avec panneaux simple paroi, et a partir de 2 500 euros pour un modele premium avec panneaux sandwich 42 millimetres et motorisation connectee. Les portes sur mesure pour les garages atypiques de ${data.neighborhoods[0]} — largeurs superieures a 3 metres, linteaux bas, finitions bois ou hublots — se situent a partir de 3 500 euros pose comprise. Nous etablissons un devis gratuit et detaille apres la visite technique de notre metreur, sans engagement et valable 30 jours. Ce devis ventile clairement les postes : fourniture de la porte, motorisation, quincaillerie, main-d'oeuvre de pose, mise en service et TVA. Les proprietaires de logements de plus de deux ans beneficient automatiquement de la TVA reduite a 10 % sur l'ensemble de la facture (fournitures et pose), conformement a la legislation sur les travaux d'amelioration de l'habitat. Cette reduction fiscale represente une economie immediate significative sur le cout total de l'installation. Pour les budgets plus importants, nous proposons un paiement en plusieurs fois sans frais — trois ou quatre echeances — pour les installations realisees dans les immeubles le long de ${data.streets[0]} et pres de ${data.landmarks[0]}. Les coproprietes beneficient d'un tarif degressif par nombre de portes installees simultanement.`,

  // 3: Delais et planning — fabrication 2-4 semaines, pose 1 journee, chantier propre
  (zone, data, prep) => `Le planning d'installation d'une porte sectionnelle ${prep} ${zone.name} s'articule en trois phases clairement definies pour une organisation sans surprise. La premiere phase est la visite technique gratuite de notre metreur dans votre garage de ${data.neighborhoods[0]} : ce rendez-vous de 30 a 45 minutes permet de relever les dimensions exactes de l'ouverture, d'evaluer l'etat du gros-oeuvre, de definir le type de refoulement et de valider les choix techniques avec le client. Le devis est transmis par email sous 24 heures. La deuxieme phase est la fabrication de la porte aux dimensions mesurees : les delais varient de 2 a 4 semaines selon le modele et les options selectionnees. Les portes standard en stock chez nos fournisseurs regionaux peuvent etre livrees sous 5 jours ouvrables, un avantage pour les installations urgentes le long de ${data.streets[0]}. Les portes sur mesure avec finitions speciales — coloris RAL, hublots, portillon pieton — necessitent un delai de fabrication de 3 a 4 semaines. La troisieme phase est la pose proprement dite, realisee en une seule journee par une equipe de deux techniciens qualifies. L'intervention commence a 8 heures par la protection du sol et des murs avec des baches, se poursuit par le montage des rails, l'assemblage du tablier et l'installation de la motorisation, et se termine en fin d'apres-midi par les reglages, les tests de securite et la formation du client. Les dechets d'emballage et l'ancienne porte (si remplacement) sont evacues le jour meme. Aucune intervention ulterieure n'est necessaire — la porte est operationnelle des la fin du chantier pres de ${data.landmarks[0]}. Nous remettons au client un dossier complet comprenant le proces-verbal de reception, le certificat de conformite, le carnet d'entretien et les notices techniques de la motorisation.`,

  // 4: Accessoires et options — hublots, grilles ventilation, portillon pieton, serrure
  (zone, data, prep) => `Les accessoires et options disponibles pour votre porte sectionnelle ${prep} ${zone.name} permettent de personnaliser l'installation selon vos besoins fonctionnels et esthetiques. Les hublots constituent l'option la plus demandee dans les garages de ${data.neighborhoods[0]} : rectangulaires, carres ou ronds, en acrylique transparent ou depoli, ils apportent une lumiere naturelle agreable dans le garage tout en preservant l'intimite. Nous proposons des hublots simple ou double vitrage avec cadre en acier inoxydable, positionnes sur un ou plusieurs panneaux selon l'effet recherche. Les grilles de ventilation integrees aux panneaux inferieurs assurent le renouvellement d'air indispensable dans les garages fermes le long de ${data.streets[0]}, ou les emanations de vehicules doivent etre evacuees conformement aux reglementations sanitaires. Le portillon pieton integre au tablier est une option extremement pratique pour un usage quotidien : il permet d'entrer et sortir du garage sans actionner la porte complete, ce qui economise l'usure de la motorisation et reduit les nuisances sonores pour le voisinage pres de ${data.landmarks[0]}. Le portillon est equipe d'une serrure a barillet trois points et d'un ferme-porte hydraulique pour une securite optimale. Pour renforcer la protection anti-intrusion, nous installons des serrures multipoints a relevage avec cylindre haute securite certifie A2P, des barres anti-soulevement renforcees et des detecteurs d'ouverture connectes a la centrale d'alarme. Les options de confort incluent l'eclairage LED integre au moteur, le detecteur de mouvement pour allumage automatique, le recepteur mural supplementaire et l'extension de telecommandes pour plusieurs utilisateurs dans les coproprietes de ${pick(data.neighborhoods, 1)}.`,

  // 5: SAV et entretien post-installation — contrat maintenance, premiere revision offerte
  (zone, data, prep) => `L'installation d'une porte sectionnelle par notre equipe ${prep} ${zone.name} (${zone.postalCode}) ne s'arrete pas a la mise en service : nous assurons un suivi complet sur la duree de vie de votre equipement. La premiere revision est offerte et programmee six mois apres l'installation. Un technicien se deplace dans votre garage de ${data.neighborhoods[0]} pour effectuer un controle complet : verification de la tension des ressorts au dynamometre, inspection des cables toron par toron, usure des galets de guidage, alignement des rails au laser, fonctionnement des capteurs de securite, etat des joints d'etancheite et test de la motorisation sur dix cycles. Cette visite de controle permet de detecter et corriger d'eventuels defauts de jeunesse avant qu'ils ne provoquent une panne ou une usure prematuree. Pour les annees suivantes, nous proposons un contrat de maintenance preventive comprenant deux visites annuelles — printemps et automne — avec une checklist de 28 points de verification. Les contrats de maintenance pour les garages le long de ${data.streets[0]} et les coproprietes proches de ${data.landmarks[0]} incluent une priorite d'intervention en cas de panne, avec un delai garanti de 2 heures en journee et 4 heures la nuit et le week-end. Le cout du contrat annuel represente une fraction du prix d'un depannage d'urgence et prolonge la duree de vie de l'installation de 30 a 40 %. En cas de panne hors contrat, notre service de depannage intervient 24 heures sur 24 dans tout le secteur de ${zone.name}. Les pieces detachees remplacees pendant la periode de garantie — 10 ans sur la structure, 2 a 5 ans sur la motorisation — sont prises en charge integralement. Nos techniciens sont egalement disponibles pour des interventions ponctuelles : remplacement de telecommande, ajout de badge dans un systeme de copropriete, modification des reglages de la motorisation ou ajout d'une option comme un hublot ou un portillon pieton.`,
];

// ===============================================
// Installation process — 4 steps per set, 6 sets
// ===============================================

const installationProcessSets: ((zone: Zone, prep: string) => { step: string; description: string }[])[] = [
  (zone, prep) => [
    { step: "Visite technique gratuite", description: `Notre metreur se deplace ${prep} ${zone.name} pour relever les dimensions exactes de votre ouverture, evaluer les contraintes et vous conseiller sur le modele adapte.` },
    { step: "Devis detaille sous 24h", description: `Vous recevez un devis complet avec ventilation des postes : fourniture, motorisation, pose et mise en service. Sans engagement, valable 30 jours.` },
    { step: "Installation en une journee", description: `Nos techniciens posent votre porte sectionnelle en une journee complete : montage des rails, assemblage des panneaux, motorisation et reglages.` },
    { step: "Mise en service et formation", description: `Tests de securite sur dix cycles, appairage des telecommandes, formation a l'utilisation. Remise du certificat de conformite et du carnet d'entretien.` },
  ],
  (zone, prep) => [
    { step: "Prise de contact", description: `Appelez le ${siteConfig.telephone} ou remplissez notre formulaire en ligne. Un conseiller evalue votre besoin et programme la visite technique ${prep} ${zone.name}.` },
    { step: "Releve et conseil personnalise", description: `Le metreur mesure votre ouverture, identifie les contraintes techniques et vous recommande la meilleure configuration : type de porte, motorisation et options.` },
    { step: "Fabrication et livraison", description: `Votre porte est fabriquee sur mesure et livree directement sur le chantier. Delai standard de 2 a 4 semaines selon le modele et les finitions selectionnees.` },
    { step: "Pose professionnelle", description: `Deux techniciens qualifies installent votre porte en une journee. Protection du sol, montage complet, tests et nettoyage du chantier avant depart.` },
  ],
  (zone, prep) => [
    { step: "Etude de faisabilite", description: `Un technicien-metreur se deplace gratuitement ${prep} ${zone.name} pour evaluer la configuration de votre garage et definir la solution technique optimale.` },
    { step: "Proposition commerciale", description: `Devis detaille transmis par email sous 24 heures. Choix du modele, des options et du planning d'intervention en concertation avec vous.` },
    { step: "Jour d'installation", description: `Notre equipe de deux poseurs arrive a 8h avec tout le materiel. Rails, panneaux, motorisation et finitions sont installes dans la journee.` },
    { step: "Reception des travaux", description: `Essais complets, verification des securites, remise des documents (PV de reception, conformite, garanties). Votre porte est operationnelle immediatement.` },
  ],
  (zone, prep) => [
    { step: "Demande de devis", description: `Contactez-nous au ${siteConfig.telephone} pour planifier la visite technique gratuite ${prep} ${zone.name}. Reponse garantie sous 2 heures en journee.` },
    { step: "Validation du projet", description: `Apres la visite du metreur, vous validez le devis et choisissez la date d'installation. Nous commandons votre porte sur mesure aupres du fabricant.` },
    { step: "Realisation du chantier", description: `Installation complete en une journee par deux techniciens experimentes. Depose de l'ancienne porte si remplacement, montage de la nouvelle et motorisation.` },
    { step: "Garantie et suivi", description: `Garantie 10 ans structure, 2 a 5 ans motorisation. Premiere revision offerte a 6 mois. Contrat de maintenance disponible pour un suivi preventif complet.` },
  ],
  (zone, prep) => [
    { step: "Premier contact", description: `Appelez le ${siteConfig.telephone} ou demandez un rappel en ligne. Nous intervenons ${prep} ${zone.name} et dans toute l'Ile-de-France.` },
    { step: "Visite et dimensionnement", description: `Notre technicien mesure votre ouverture au millimetre pres, photographie la configuration et identifie les contraintes specifiques de votre garage.` },
    { step: "Pose en une journee", description: `Le jour convenu, notre equipe installe votre porte sectionnelle de A a Z : preparation du tableau, fixation des rails, montage du tablier et motorisation.` },
    { step: "Livraison cle en main", description: `En fin de journee, votre porte est operationnelle. Vous recevez les telecommandes programmees, le certificat de conformite et la documentation complete.` },
  ],
  (zone, prep) => [
    { step: "Rendez-vous technique", description: `Un metreur se deplace gratuitement ${prep} ${zone.name} dans les 48 heures suivant votre appel pour un releve complet et un conseil personnalise.` },
    { step: "Choix et commande", description: `Vous selectionnez le modele, la couleur, les options et la motorisation. La porte est commandee aux dimensions exactes de votre ouverture.` },
    { step: "Installation soignee", description: `Deux techniciens certifies realisent la pose en une journee. Le chantier est protege, le montage methodique et le nettoyage effectue avant notre depart.` },
    { step: "Suivi post-installation", description: `Premiere revision offerte a 6 mois. Service de depannage 24h/24 et contrat de maintenance preventive disponible pour prolonger la duree de vie de votre equipement.` },
  ],
];

// ===============================================
// FAQ — 6 sets of 5 questions, all installation-focused
// ===============================================

const faqSets: ((zone: Zone, data: LocalDataEntry, prep: string) => { question: string; answer: string }[])[] = [
  // Set 0: processus d'installation
  (zone, data, prep) => [
    { question: `Combien de temps dure l'installation d'une porte sectionnelle ${prep} ${zone.name} ?`, answer: `L'installation complete d'une porte sectionnelle prend une journee, de 8h a 18h environ. Nos deux techniciens realisent le montage des rails, l'assemblage des panneaux, la pose de la motorisation et les reglages dans ce delai. La porte est operationnelle en fin de journee.` },
    { question: `Faut-il des travaux de maçonnerie pour installer une porte sectionnelle ${prep} ${zone.name} ?`, answer: `Dans la majorite des cas, non. La porte sectionnelle s'adapte a l'ouverture existante. Seuls les garages avec un linteau tres bas ou des piedroits irreguliers peuvent necessiter de legers travaux preparatoires que nos techniciens realisent le jour de la pose.` },
    { question: `Peut-on installer une porte sectionnelle dans un garage etroit ${prep} ${zone.name} ?`, answer: `Oui, la porte sectionnelle est precisement la solution ideale pour les garages etroits car elle ne genere aucun debattement exterieur. Le tablier se replie au plafond ou le long du mur avec un deport lateral. Nos metreurs evaluent chaque configuration gratuitement.` },
    { question: `L'installation inclut-elle la motorisation ?`, answer: `Oui, toutes nos installations incluent une motorisation de marque Somfy, Hormann ou Marantec avec deux telecommandes, les capteurs de securite et la programmation complete. Nous ne posons pas de portes manuelles sauf demande specifique.` },
    { question: `Quelles garanties offrez-vous apres l'installation ?`, answer: `Nous delivrons une garantie de 10 ans sur la structure (panneaux, rails, ressorts), 2 a 5 ans sur la motorisation selon la marque, et 12 mois sur la main-d'oeuvre. Un certificat de conformite EN 13241-1 est remis a la fin de l'installation.` },
  ],
  // Set 1: remplacement et depose
  (zone, data, prep) => [
    { question: `Peut-on remplacer une porte basculante par une porte sectionnelle ${prep} ${zone.name} ?`, answer: `Oui, c'est l'une de nos prestations les plus courantes. Nous deposons l'ancienne porte basculante et installons une porte sectionnelle dans la journee. L'adaptation au chassis existant est realisee sans travaux de maçonnerie supplementaires dans 90 % des cas.` },
    { question: `Que devient l'ancienne porte lors d'un remplacement ?`, answer: `Nos techniciens demontent et evacuent l'integralite de l'ancienne porte — tablier, rails, ressorts et motorisation. Les dechets sont tries et achemines vers des filieres de recyclage agreees. L'evacuation est incluse dans le devis.` },
    { question: `Le remplacement d'une porte de garage est-il eligible a la TVA a 10 % ?`, answer: `Oui, si votre logement a plus de deux ans, l'installation beneficie de la TVA reduite a 10 % sur les fournitures et la main-d'oeuvre, conformement a l'article 279-0 bis du CGI. Cette reduction est appliquee directement sur notre facture.` },
    { question: `Combien coute le remplacement d'une porte de garage par une porte sectionnelle ?`, answer: `Le budget varie selon les dimensions et les options. A partir de 1 200 euros pose comprise pour un modele standard, et a partir de 2 500 euros pour un modele premium avec panneaux isoles et motorisation connectee. Le devis est gratuit et sans engagement.` },
    { question: `Faut-il prevenir le syndic pour remplacer la porte de mon garage en copropriete ?`, answer: `Si la porte est un equipement privatif, vous pouvez la remplacer librement. Si elle fait partie des parties communes, le remplacement doit etre vote en assemblee generale. Nous preparons le dossier technique pour le syndic si necessaire.` },
  ],
  // Set 2: isolation et performance
  (zone, data, prep) => [
    { question: `Une porte sectionnelle isole-t-elle bien un garage ${prep} ${zone.name} ?`, answer: `Oui, les portes sectionnelles a panneaux sandwich de 42 mm offrent un coefficient U de 1,0 W/m2K, comparable a un mur isole. Avec les joints perimetriques sur les quatre cotes, les deperditions thermiques sont reduites de 60 a 75 % par rapport a une porte non isolee.` },
    { question: `Quelle est la difference entre simple et double paroi pour une porte sectionnelle ?`, answer: `La simple paroi est une tole acier nervuree sans isolation, adaptee aux garages non chauffes. La double paroi (panneau sandwich) integre une mousse polyurethane de 42 mm entre deux toles, offrant une isolation thermique et phonique nettement superieure.` },
    { question: `Une porte sectionnelle reduit-elle le bruit exterieur ?`, answer: `Oui, les panneaux sandwich a double paroi offrent une attenuation phonique de 20 a 25 dB, ce qui reduit sensiblement les bruits de circulation. Combine aux joints d'etancheite perimetriques, le confort acoustique du garage est significativement ameliore.` },
    { question: `L'installation d'une porte sectionnelle reduit-elle la facture de chauffage ?`, answer: `Si votre garage est attenant a votre logement, oui. Une porte sectionnelle isolee reduit les deperditions thermiques par l'ouverture de garage de 60 a 75 %, ce qui peut representer une economie de 150 a 300 euros par an sur la facture de chauffage.` },
    { question: `Les joints d'etancheite sont-ils inclus dans l'installation ?`, answer: `Oui, chaque installation inclut les joints en EPDM sur les quatre cotes (lateraux, superieur et inferieur), le joint de seuil en aluminium avec brosse et les joints inter-sections entre les panneaux. L'etancheite complete est systematique.` },
  ],
  // Set 3: motorisation et connectivite
  (zone, data, prep) => [
    { question: `Quelles marques de motorisation installez-vous pour les portes sectionnelles ${prep} ${zone.name} ?`, answer: `Nous travaillons exclusivement avec Somfy, Hormann et Marantec, les trois leaders mondiaux. Chaque moteur est selectionne en fonction du poids et de la taille de votre porte pour garantir un fonctionnement optimal sur plus de 20 000 cycles.` },
    { question: `Peut-on piloter une porte sectionnelle depuis un smartphone ?`, answer: `Oui, toutes les motorisations que nous installons sont compatibles avec le pilotage par smartphone via les applications Somfy TaHoma, Hormann BiSecur ou Marantec. Ouverture et fermeture a distance, notifications et programmation horaire sont incluses.` },
    { question: `La porte sectionnelle fonctionne-t-elle en cas de coupure de courant ?`, answer: `Oui, chaque motorisation dispose d'un debrayage manuel accessible de l'interieur. En cas de coupure prolongee, certains moteurs integrent une batterie de secours permettant 2 a 5 cycles d'ouverture-fermeture sans electricite.` },
    { question: `Combien de telecommandes recoit-on avec l'installation ?`, answer: `Deux telecommandes multicanaux sont incluses de serie. Des telecommandes supplementaires peuvent etre ajoutees sans limite. Nous proposons egalement des emetteurs muraux, des claviers a code et des recepteurs universels.` },
    { question: `La motorisation est-elle bruyante ?`, answer: `Non, les motorisations actuelles Somfy, Hormann et Marantec fonctionnent a moins de 55 dB, soit le niveau sonore d'une conversation normale. Les moteurs a courroie sont encore plus silencieux (45 dB) et conviennent parfaitement aux garages sous les chambres.` },
  ],
  // Set 4: sur mesure et esthetique
  (zone, data, prep) => [
    { question: `Peut-on installer une porte sectionnelle avec des hublots ${prep} ${zone.name} ?`, answer: `Oui, nous proposons des hublots rectangulaires, carres ou ronds en acrylique transparent ou depoli. Ils sont integres aux panneaux lors de la fabrication et apportent une lumiere naturelle agreeable au garage. Simple et double vitrage disponibles.` },
    { question: `Existe-t-il des portes sectionnelles en finition bois ?`, answer: `Oui, nos fabricants proposent des finitions bois thermoformees (chene dore, noyer, wenge, teck) qui reproduisent fidelement l'aspect et la texture du bois massif tout en conservant les avantages de l'acier : durabilite, isolation et facilite d'entretien.` },
    { question: `Peut-on choisir la couleur de sa porte sectionnelle ?`, answer: `Oui, nous proposons un catalogue de plus de 200 teintes RAL ainsi que les coloris standards (blanc, gris, marron, noir, vert). Les finitions disponibles incluent le lisse, le nervure M et L, et le micrograinure.` },
    { question: `Qu'est-ce qu'un portillon pieton integre a une porte sectionnelle ?`, answer: `C'est une porte battante decoupee dans le tablier de la porte sectionnelle, permettant de passer a pied sans actionner l'ensemble de la porte. Equipee d'une serrure 3 points et d'un ferme-porte, elle est ideale pour un usage quotidien.` },
    { question: `Comment installer une porte sectionnelle avec un linteau tres bas ?`, answer: `Nous utilisons un systeme de refoulement Low Headroom qui ne necessite que 95 mm de degagement au-dessus de l'ouverture, contre 350 mm pour un systeme standard. Le deport lateral est une autre option pour les configurations avec linteau quasi inexistant.` },
  ],
  // Set 5: copropriete et aspects pratiques
  (zone, data, prep) => [
    { question: `Comment faire installer une porte sectionnelle en copropriete ${prep} ${zone.name} ?`, answer: `L'installation d'une porte de parking commune est votee en assemblee generale a la majorite de l'article 25. Nous preparons le dossier technique complet pour le syndic (diagnostic, specifications, devis detaille) pour faciliter la prise de decision.` },
    { question: `Proposez-vous un contrat de maintenance apres l'installation ?`, answer: `Oui, nous proposons des contrats de maintenance preventive avec 2 visites annuelles (28 points de controle), une priorite d'intervention en cas de panne et un tarif degressif pour les coproprietes. La premiere revision a 6 mois est offerte.` },
    { question: `Quel est le delai entre la commande et la pose d'une porte sectionnelle ?`, answer: `Les modeles standards en stock sont livres sous 5 jours. Les portes sur mesure avec options (coloris RAL, hublots, portillon) necessitent 3 a 4 semaines de fabrication. La pose est programmee des la livraison confirmee.` },
    { question: `Intervenez-vous dans tout le secteur de ${zone.name} ?`, answer: `Oui, nos techniciens couvrent l'integralite du secteur ${zone.postalCode} ${zone.name} et les zones limitrophes. La visite technique est gratuite et sans engagement, avec un rendez-vous possible sous 48 heures.` },
    { question: `La premiere revision apres installation est-elle vraiment gratuite ?`, answer: `Oui, la premiere revision est offerte et programmee 6 mois apres la pose. Un technicien verifie les 28 points de controle : ressorts, cables, galets, rails, motorisation, joints et securites. Cette visite detecte les eventuels defauts de jeunesse.` },
  ],
];

// ===============================================
// Main export function
// ===============================================

function hashSeed(slug: string, seed: string): number {
  const s = slug + "_" + seed;
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function rotateByIdx<T>(arr: T[], idx: number, offset: number = 0): T {
  return arr[(idx + offset) % arr.length];
}

export function getInstallationZoneContent(zone: Zone): InstallationZoneContent {
  const data = localData[zone.slug] || null;
  const preposition = zone.department === "Paris" ? "dans le" : "a";

  const local: LocalDataEntry = data
    ? { landmarks: data.landmarks, streets: data.streets, neighborhoods: data.neighborhoods, metros: data.metros }
    : defaultLocal;

  // Independent hash-based picks — guarantees each zone a unique combination
  const introIdx = hashSeed(zone.slug, "intro") % 6;
  const rawIntro = introTemplates[introIdx](zone, local, preposition);
  const intro = rawIntro + ` Pour les residents et professionnels du ${zone.postalCode} ${zone.name}, notre equipe garantit une installation soignee et durable sur l'ensemble du secteur ${zone.name}.`;

  const seo1Idx = hashSeed(zone.slug, "seo1") % 6;
  const seo1Title = seo1Titles[seo1Idx](zone, preposition);
  const seo1 = seo1Templates[seo1Idx](zone, local, preposition);

  const seo2Idx = hashSeed(zone.slug, "seo2") % 6;
  const seo2Title = seo2Titles[seo2Idx](zone, preposition);
  const seo2 = seo2Templates[seo2Idx](zone, local, preposition);

  const processIdx = hashSeed(zone.slug, "process") % 6;
  const installationProcess = installationProcessSets[processIdx](zone, preposition);

  const faqIdx = hashSeed(zone.slug, "faq") % 6;
  const faq = faqSets[faqIdx](zone, local, preposition);

  return { intro, seo1Title, seo1, seo2Title, seo2, installationProcess, faq };
}
