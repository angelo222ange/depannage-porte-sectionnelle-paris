import { Zone, zones, siteConfig } from "@/config/site";
import { localData } from "@/lib/zone-content";

export interface ReparationZoneContent {
  intro: string;
  seo1Title: string;
  seo1: string;
  seo2Title: string;
  seo2: string;
  reparationProcess: { step: string; description: string }[];
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
// INTRO templates — 6 reparation-specific intros
// ===============================================

type IntroFn = (zone: Zone, data: LocalDataEntry, prep: string) => string;

const introTemplates: IntroFn[] = [
  // 0: diagnostic + reparation durable
  (zone, data, prep) => `Votre porte sectionnelle presente un dysfonctionnement ${prep} ${zone.name} (${zone.postalCode}) et vous souhaitez une reparation durable plutot qu'un simple depannage de fortune ? Notre equipe de techniciens specialises intervient avec une approche methodique : diagnostic complet de l'ensemble du mecanisme, identification precise de la cause racine du probleme, reparation definitive avec des pieces de qualite equivalente ou superieure a l'origine. Nous intervenons dans un rayon immediat autour de ${data.landmarks[0]}, dans les quartiers de ${data.neighborhoods[0]} et le long de ${data.streets[0]}, avec un vehicule equipe de plus de 400 references de pieces detachees. Fort de plus de 25 ans d'experience en reparation de portes sectionnelles en region parisienne, notre equipe traite chaque intervention comme un projet technique complet : analyse, reparation, verification et garantie de 12 mois sur chaque piece remplacee.`,

  // 1: expertise composants
  (zone, data, prep) => `La reparation d'une porte sectionnelle ${prep} ${zone.name}, secteur ${zone.postalCode}, exige une connaissance approfondie de chaque composant mecanique et electronique qui constitue l'equipement. Ressorts de torsion calibres au poids exact du tablier, cables en acier galvanise de 3 a 5 mm de diametre, galets en nylon a roulement, rails de guidage en acier profile, motorisation a variateur electronique — chaque element a sa propre duree de vie et ses propres modes de defaillance. Nos techniciens interviennent quotidiennement dans ${data.neighborhoods[0]} et aux abords de ${data.landmarks[0]} pour diagnostiquer et reparer ces composants avec la precision requise. Qu'il s'agisse d'un moteur Somfy, Hormann, Marantec ou Came, d'un ressort fatigue ou d'un panneau fissure, nos reparateurs maitrisent parfaitement chaque piece du mecanisme. Chaque vehicule d'intervention qui circule le long de ${data.streets[0]} embarque un outillage complet — dynamometre, testeur electronique, laser d'alignement — ainsi qu'un stock de pieces d'origine pour les marques les plus courantes.`,

  // 2: proximite et connaissance du terrain
  (zone, data, prep) => `Implantes depuis plus de 25 ans en region parisienne, nos techniciens reparateurs connaissent parfaitement les specificites du bati ${prep} ${zone.name}. Les parkings souterrains aux acces etroits pres de ${data.landmarks[0]}, les garages d'immeubles anciens dans ${data.neighborhoods[0]}, les locaux commerciaux le long de ${data.streets[0]} — chaque configuration impose des contraintes techniques particulieres que notre equipe anticipe avant meme d'arriver sur place. Cette connaissance du terrain nous permet de preparer le materiel adapte et d'optimiser le temps d'intervention. Notre maillage de techniciens dans le secteur de ${zone.name} garantit un temps de reponse rapide. Nous intervenons sur toutes les marques et tous les modeles de portes sectionnelles, residentielles comme industrielles, et chaque reparation est accompagnee d'une garantie pieces et main-d'oeuvre de 12 mois.`,

  // 3: types de pannes courantes
  (zone, data, prep) => `Les portes sectionnelles installees ${prep} ${zone.name} subissent des contraintes specifiques liees a l'usage intensif en milieu urbain : cycles d'ouverture-fermeture multiplies dans les parkings de copropriete, vibrations du trafic le long de ${data.streets[0]}, variations hygrometriques entre parking souterrain et exterieur. Ces sollicitations accelerent l'usure des composants mecaniques et electroniques. Nos techniciens traitent chaque semaine dans le secteur de ${data.neighborhoods[0]} et autour de ${data.landmarks[0]} des reparations de ressorts fatigues, de cables effiloches, de galets aplatis, de panneaux deformes et de cartes electroniques defaillantes. Chaque type de panne appelle un protocole de reparation precis que nos equipes appliquent avec methode. Nos reparateurs disposent des pieces de remplacement dans leur vehicule pour une remise en service rapide et durable.`,

  // 4: qualite et transparence
  (zone, data, prep) => `Quand votre porte sectionnelle necessite une reparation ${prep} ${zone.name}, vous meritez un service transparent et professionnel. Notre protocole de reparation commence systematiquement par un diagnostic complet — chaque organe du mecanisme est inspecte et evalue : ressorts, cables, galets, rails, panneaux, joints, motorisation, systeme de securite. Ce bilan technique exhaustif est documente et vous est presente clairement avant toute intervention. Vous recevez un devis detaille piece par piece, sans surprise ni frais caches. Nos techniciens presents dans ${data.neighborhoods[0]} et autour de ${data.landmarks[0]} utilisent exclusivement des pieces d'origine ou de qualite equivalente certifiee. Le long de ${data.streets[0]}, chaque reparation est suivie d'un test complet sur dix cycles d'ouverture-fermeture et d'une verification de toutes les securites reglementaires.`,

  // 5: toutes marques + garantie
  (zone, data, prep) => `Notre atelier mobile de reparation de portes sectionnelles ${prep} ${zone.name} est equipe pour traiter toutes les marques et tous les modeles du marche. Hormann, Novoferm, Crawford, Came, FAAC, Somfy, Marantec, Nice — nos reparateurs sont certifies sur chaque gamme et disposent des pieces compatibles dans chaque vehicule d'intervention. Que vous soyez pres de ${data.landmarks[0]}, dans ${data.neighborhoods[0]} ou le long de ${data.streets[0]}, un technicien qualifie intervient avec le stock de pieces adapte a votre equipement. En 25 ans d'activite, notre equipe a realise des milliers de reparations en region parisienne, des simples remplacements de galets aux reconditionnements complets de tabliers apres collision vehicule. Chaque intervention fait l'objet d'un rapport technique complet, d'une facture detaillee et d'une garantie de 12 mois sur les pieces remplacees et la main-d'oeuvre.`,
];

// ===============================================
// SEO1 — 6 reparation-specific angles
// ===============================================

type ContentFn = (zone: Zone, data: LocalDataEntry, prep: string) => string;

const seo1Titles: ((zone: Zone, prep: string) => string)[] = [
  (zone, prep) => `Reparation de ressorts de torsion de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Reparation de cables acier de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Reparation de panneaux endommages de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Reparation de rails et galets de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Reparation de joints et isolation de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Reparation de serrure et securite de porte sectionnelle ${prep} ${zone.name}`,
];

const seo1Templates: ContentFn[] = [
  // 0: Ressorts torsion — diagnostic, remplacement, equilibrage, duree vie
  (zone, data, prep) => `Le ressort de torsion est le coeur mecanique de votre porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}). Il compense le poids du tablier — entre 60 et 150 kg selon les dimensions — et se deforme elastiquement a chaque cycle d'ouverture et de fermeture. Sa duree de vie, comprise entre 12 000 et 25 000 cycles selon la qualite du fil d'acier, depend directement de la precision du calibrage initial et de l'entretien regulier. Quand un ressort commence a faiblir dans votre garage de ${data.neighborhoods[0]}, les premiers signes sont un tablier qui peine a monter, une porte plus lourde en manoeuvre manuelle ou un recul de quelques centimetres apres fermeture. Nos techniciens reparateurs qui interviennent pres de ${data.landmarks[0]} mesurent la tension residuelle au dynamometre et comparent la valeur au calibrage d'origine. Si le ressort presente une perte de tension superieure a 15 %, le remplacement est preconise avant la rupture. L'operation exige un outillage specifique — barres de tension calibrees, etau de blocage, cle dynamometrique — car l'energie stockee dans un ressort de torsion est considerable et toute manipulation sans precaution est dangereuse. Nos reparateurs le long de ${data.streets[0]} remplacent le ressort en calculant le diametre du fil, le diametre interieur, la longueur et le nombre de spires en fonction du poids exact du tablier. L'equilibrage est verifie sur dix cycles complets avec mesure de l'effort de manoeuvre a chaque position du tablier. Un ressort correctement calibre et pose par un professionnel garantit entre 20 000 et 25 000 cycles sans intervention, soit 8 a 12 ans d'utilisation normale dans les parkings de ${pick(data.neighborhoods, 1)}.`,

  // 1: Cables acier — usure, effilochage, remplacement par paire, tension
  (zone, data, prep) => `Les cables en acier galvanise de votre porte sectionnelle ${prep} ${zone.name} travaillent en permanence sous tension, solidaires des ressorts de torsion via les tambours d'enroulement lateraux. A chaque cycle, les cables s'enroulent et se deroulent sur les tambours, subissant des contraintes de flexion et de frottement aux points de contact. Apres plusieurs milliers de cycles, l'usure se manifeste par un effilochage progressif des torons — de fins brins d'acier se detachent du cable et forment des aiguilles metalliques visibles a l'oeil nu. Dans les parkings de ${data.neighborhoods[0]}, nos reparateurs constatent regulierement des cables dont 20 a 30 % des torons sont rompus, un stade critique ou la rupture brutale peut survenir a tout moment. Un cable qui lache provoque un desequilibre immediat du tablier : la porte penche d'un cote, force sur les rails et peut se bloquer en position semi-ouverte. C'est pourquoi nos techniciens qui interviennent pres de ${data.landmarks[0]} remplacent systematiquement les deux cables simultanement, meme si un seul est endommage. Le cable neuf est pose avec une longueur calculee au centimetre pres, fixe sur les tambours par des serre-cables en inox, puis mis sous tension progressivement. Le reglage final au dynamometre garantit une tension identique des deux cotes, condition indispensable pour un guidage rectiligne du tablier dans les rails le long de ${data.streets[0]}. Chaque remplacement de cable est suivi d'une verification de l'etat des tambours, des paliers de roulement et de l'arbre de torsion, car un cable qui cede peut endommager ces composants adjacents. La garantie de 12 mois couvre les cables, les serre-cables et la main-d'oeuvre associee.`,

  // 2: Panneaux endommages — choc vehicule, deformation, remplacement partiel
  (zone, data, prep) => `Un panneau de porte sectionnelle endommage ${prep} ${zone.name} resulte le plus souvent d'un choc de vehicule lors d'une manoeuvre de parking. Le pare-chocs heurte le panneau inferieur et provoque un enfoncement, une pliure ou une fissure de l'acier double peau qui compromet l'etancheite thermique et le fonctionnement mecanique du tablier. Dans les parkings des immeubles de ${data.neighborhoods[0]}, ou les places sont souvent etroites et les manoeuvres delicates, nos reparateurs constatent ce type de degat chaque semaine. La reparation commence par un diagnostic precis du nombre et de la gravite des panneaux touches. Un enfoncement localise de moins de 15 mm peut parfois etre redresse sans remplacement, a l'aide d'un outillage de debosselage professionnel. Au-dela, le remplacement du panneau est necessaire. Les portes sectionnelles etant conçues par panneaux modulaires, nous intervenons sur un ou deux elements sans toucher aux autres — une operation nettement plus economique que le remplacement complet de la porte. Le reperage de la reference exacte — fabricant, epaisseur (40 ou 42 mm en residentiel, 60 a 80 mm en industriel), profil de nervure (M, L, S), teinte RAL, dimensions — permet de commander une piece strictement identique. Nos fournisseurs Hormann, Novoferm et Crawford maintiennent des stocks de panneaux standards en entrepot regional pres de ${data.landmarks[0]}, ce qui garantit un delai de livraison de 48 a 72 heures pour les modeles courants. Le jour de l'intervention le long de ${data.streets[0]}, le technicien desolidarise les charnieres, retire le panneau abime, insere le neuf, reconnecte les liaisons et verifie l'alignement au laser. En cas de sinistre automobile, nous etablissons un devis conforme aux exigences des assureurs, avec photos avant-apres et bordereau de pieces, pour faciliter la prise en charge dans les coproprietes de ${pick(data.neighborhoods, 1)}.`,

  // 3: Rails et galets — desaxement, usure roulements, realignement
  (zone, data, prep) => `Le systeme de guidage d'une porte sectionnelle ${prep} ${zone.name} repose sur deux rails verticaux et deux rails horizontaux dans lesquels circulent les galets fixes sur les extremites de chaque panneau du tablier. Ce mecanisme, en apparence simple, exige un alignement au millimetre pres pour garantir un fonctionnement silencieux et sans a-coups. Dans les immeubles de ${data.neighborhoods[0]}, le tassement progressif du gros-oeuvre, les vibrations du trafic le long de ${data.streets[0]} et les chocs repetitifs lors des manoeuvres quotidiennes provoquent un desaxement insidieux des rails. Les premiers symptomes sont un raclement metallique, une vibration du tablier ou un effort accru de la motorisation pour deplacer la porte. Nos reparateurs mesurent l'ecart d'alignement au laser — un decalage de seulement 2 mm suffit a user prematurement les galets et a surcharger le moteur. La correction passe par le desserrage des pattes de fixation, le repositionnement du rail a l'aide de cales calibrees et le resserrage au couple prescrit par le fabricant. Les galets en nylon, soumis a des milliers de passages, subissent une usure de profil : leur forme ronde d'origine devient ovale, le jeu dans la gorge du rail augmente et le tablier commence a osciller lateralement. Nos vehicules d'intervention pres de ${data.landmarks[0]} transportent des galets de tous les diametres courants — 50, 65, 75 et 100 mm — a roulement a billes encapsulees pour les modeles haut de gamme ou a axe lisse pour les modeles standard. Le remplacement complet des galets d'un tablier de 4 panneaux — soit 12 a 16 galets — prend environ 45 minutes et transforme radicalement le confort d'utilisation. Chaque galet est graisse au montage avec une graisse au lithium longue duree, et l'ensemble du systeme de guidage est teste sur dix cycles complets dans les garages de ${pick(data.neighborhoods, 1)}.`,

  // 4: Joints et isolation — joints brosse, EPDM, etancheite, infiltrations
  (zone, data, prep) => `L'etancheite d'une porte sectionnelle ${prep} ${zone.name} repose sur un systeme de joints peripheriques qui isole le garage des infiltrations d'air, d'eau et de poussieres. Le joint bas en caoutchouc EPDM, le plus sollicite, assure le contact entre le panneau inferieur et le seuil du sol. Les joints lateraux a brosse ou a levre epousent les irregularites des montants et compensent les dilatations thermiques. Le joint superieur, souvent neglige, complete l'etancheite en haut de l'ouverture. Dans les garages de ${data.neighborhoods[0]}, l'usure de ces joints provoque des courants d'air sensibles, des infiltrations d'eau de pluie qui s'accumulent au sol et une perte d'isolation thermique mesurable — jusqu'a 3 degres de difference entre un garage correctement etanche et un garage dont les joints sont deteriores. Nos reparateurs qui interviennent pres de ${data.landmarks[0]} verifient l'etat de chaque joint lors du diagnostic et procedent au remplacement des elements uses. Le joint bas EPDM est disponible en profils standards compatibles avec les marques Hormann, Novoferm et Crawford, en longueurs de 2 a 6 metres. Sa pose exige un nettoyage prealable du rail de fixation et un ajustement precis de la longueur pour eviter tout jour residuel. Les joints lateraux a brosse en polypropylene haute densite sont remplaces par paire pour garantir une pression de contact uniforme sur toute la hauteur de la porte le long de ${data.streets[0]}. Apres remplacement, nos techniciens effectuent un test de fumee pour verifier l'absence de passage d'air et un test d'arrosage pour valider l'etancheite a l'eau. Cette reparation, souvent sous-estimee, ameliore significativement le confort thermique et la proprete du garage dans les immeubles de ${pick(data.neighborhoods, 1)}.`,

  // 5: Serrure et securite — barillet, anti-relevage, cellules photoelectriques
  (zone, data, prep) => `Le systeme de verrouillage et de securite d'une porte sectionnelle ${prep} ${zone.name} comprend plusieurs dispositifs complementaires qui protegent votre bien et les personnes. Le barillet de serrure exterieur permet la manoeuvre de secours en cas de panne de courant — un acces indispensable dans les parkings de ${data.neighborhoods[0]} ou les coupures d'electricite ne sont pas rares. Lorsque le barillet est grippé, use ou force lors d'une tentative d'intrusion, nos reparateurs le remplacent par un cylindre haute securite a goupilles anti-crochetage, compatible avec le systeme de debrayage du moteur. La barre anti-relevage, fixee sur la traverse basse du tablier, empeche le soulevement exterieur de la porte par un levier ou un pied-de-biche — une protection essentielle contre les effractions dans les garages situes au rez-de-chaussee le long de ${data.streets[0]}. Si la barre est tordue ou desolidarisee de ses fixations, la porte peut etre soulevee de l'exterieur en quelques secondes. Nos techniciens reparent ou remplacent ce dispositif et verifient le bon enclenchement a chaque fermeture. Les cellules photoelectriques, installees de part et d'autre de l'ouverture pres de ${data.landmarks[0]}, detectent la presence d'un obstacle — personne, vehicule, objet — dans la course du tablier et commandent l'inversion immediate du mouvement. Un desalignement, un encrassement des lentilles ou un defaut de cablage neutralise cette protection vitale. Nos reparateurs nettoient, recalibrent et testent ces cellules lors de chaque intervention. Le limiteur d'effort electronique et le parachute anti-chute completent le dispositif de securite — nous verifions la conformite de l'ensemble aux exigences de la norme EN 13241-1 dans chaque garage de ${pick(data.neighborhoods, 1)}.`,
];

// ===============================================
// SEO2 — 6 reparation-specific angles
// ===============================================

const seo2Titles: ((zone: Zone, prep: string) => string)[] = [
  (zone, prep) => `Reparation ou remplacement de porte sectionnelle ${prep} ${zone.name} : le bon choix`,
  (zone, prep) => `Reparation en urgence de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Reparation toutes marques de porte sectionnelle ${prep} ${zone.name}`,
  (zone, prep) => `Devis reparation porte sectionnelle ${prep} ${zone.name} : tarif transparent`,
  (zone, prep) => `Reparation porte sectionnelle de copropriete ${prep} ${zone.name}`,
  (zone, prep) => `Prevention et entretien apres reparation de porte sectionnelle ${prep} ${zone.name}`,
];

const seo2Templates: ContentFn[] = [
  // 0: Reparation vs remplacement — quand reparer, quand remplacer, seuil 40% cout neuf
  (zone, data, prep) => `La question du choix entre reparation et remplacement complet se pose legitimement lorsqu'une porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}) cumule plusieurs dysfonctionnements. Nos techniciens, avec 25 ans d'experience sur le terrain, evaluent objectivement la situation selon des criteres techniques et economiques precis. La regle du seuil de 40 % constitue notre reference : lorsque le cout cumule des reparations necessaires depasse 40 % du prix d'une porte sectionnelle neuve equivalente, le remplacement complet devient plus pertinent a moyen terme. En dessous de ce seuil, la reparation reste largement plus avantageuse. Dans les parkings de ${data.neighborhoods[0]}, nous constatons que 75 % des portes sectionnelles diagnostiquees se pretent a une reparation economiquement viable. Les composants structurels — panneaux, rails, cadre — ont generalement une duree de vie de 25 a 30 ans, tandis que les elements d'usure — ressorts, cables, galets, joints — doivent etre remplaces periodiquement. Nos reparateurs pres de ${data.landmarks[0]} vous presentent systematiquement les deux options chiffrees, avec un comparatif detaille du cout immediat et du cout sur 5 ans. Le remplacement ne se justifie que si la porte est obsolete (pieces non disponibles), si les panneaux presentent de la rouille perforante sur plus de 30 % de la surface, ou si l'isolation thermique est irremediablement degradee. Notre conseil est toujours guide par votre interet le long de ${data.streets[0]}, pas par le montant de la facture.`,

  // 1: Reparation en urgence — porte bloquee ouverte, securisation provisoire, intervention rapide
  (zone, data, prep) => `Une porte sectionnelle bloquee en position ouverte ${prep} ${zone.name} represente un probleme de securite immediat : le garage, le local commercial ou le parking de copropriete est expose aux intrusions, aux intemperies et au vol. Nos techniciens reparateurs, joignables au ${siteConfig.telephone}, interviennent en urgence dans le secteur de ${data.neighborhoods[0]} avec un protocole de securisation en deux temps. Premiere etape : securisation provisoire dans les 30 minutes suivant l'appel. Le technicien bloque mecaniquement le tablier en position fermee a l'aide de serre-joints, d'etais ou de barres de securite temporaires, puis condamne le systeme de motorisation pour empecher toute reouverture accidentelle pres de ${data.landmarks[0]}. Cette securisation tient le temps necessaire a l'approvisionnement d'eventuelles pieces manquantes. Deuxieme etape : reparation definitive, generalement dans la meme intervention si le stock embarque contient les pieces requises, ou sous 24 a 48 heures pour les composants specifiques. Les pannes qui provoquent un blocage en position ouverte sont le plus souvent une rupture de ressort de torsion, un deraillement de cable, un arret du moteur en position haute ou un defaut de capteur de fin de course. Nos reparateurs le long de ${data.streets[0]} maitrisent chacun de ces scenarios et disposent des pieces de remplacement pour les cas les plus frequents. La reparation en urgence est facturee au meme tarif que l'intervention programmee — le deplacement et le diagnostic sont inclus dans le forfait, sans majoration pour les interventions de nuit ou de week-end dans les garages de ${pick(data.neighborhoods, 1)}.`,

  // 2: Reparation toutes marques — Hormann, Novoferm, Crawford, Tubauto, stock pieces
  (zone, data, prep) => `Nos techniciens reparateurs ${prep} ${zone.name} sont formes et certifies sur l'ensemble des marques de portes sectionnelles presentes sur le marche francais et europeen. Hormann, leader mondial avec les gammes LPU 42, LPU 67 et SPU F42, represente environ 35 % du parc installe dans les immeubles de ${data.neighborhoods[0]} — nos vehicules transportent les references de panneaux, ressorts, cables et motorisations SupraMatic et ProMatic specifiques a cette marque. Novoferm, deuxieme acteur du marche, equipe de nombreuses coproprietes le long de ${data.streets[0]} avec ses gammes ISO 20 et ISO 45 — nous disposons des pieces detachees compatibles, y compris les charnieres et galets au profil specifique. Crawford, specialiste des portes sectionnelles industrielles, est present dans les entrepots et locaux commerciaux pres de ${data.landmarks[0]} — nos reparateurs connaissent les particularites des modeles 242 et 542 et leur systeme de ressorts lateraux. Came, FAAC, Somfy, Marantec et Nice completent la liste des marques sur lesquelles nous intervenons quotidiennement. Pour les marques moins courantes — Tubauto, Wayne Dalton, Carteck, Ecostar — nous avons acces a un reseau de fournisseurs specialises qui nous livrent les pieces sous 48 a 72 heures en region parisienne. Chaque piece installee est certifiee d'origine ou de qualite equivalente par le fabricant, et fait l'objet d'une garantie de 12 mois. Notre expertise multi-marques nous permet de reparer plus de 95 % des portes sectionnelles installees dans les garages de ${pick(data.neighborhoods, 1)} sans necessiter de commande speciale.`,

  // 3: Devis reparation transparent — diagnostic sur place, tarif forfaitaire, pas de surprise
  (zone, data, prep) => `La transparence tarifaire est un engagement fondamental de notre service de reparation de portes sectionnelles ${prep} ${zone.name}. Des le premier appel au ${siteConfig.telephone}, notre operateur vous communique le tarif du deplacement et du diagnostic — inclus dans le forfait d'intervention et non facture en supplement. A son arrivee dans votre garage de ${data.neighborhoods[0]}, le technicien realise un bilan technique complet de votre porte sectionnelle : etat des ressorts, cables, galets, rails, panneaux, joints, motorisation et securites. Ce diagnostic, qui dure 20 a 30 minutes, aboutit a un devis ecrit detaillant chaque poste : reference de la piece, prix unitaire, quantite, temps de main-d'oeuvre et montant total TTC. Aucune intervention n'est engagee sans votre accord ecrit. Les reparations courantes pres de ${data.landmarks[0]} — remplacement de galets, ajustement de tension, nettoyage et recalibrage de cellules photoelectriques — sont facturees a partir de 89 euros. Les interventions plus lourdes — remplacement de ressort de torsion, changement de cables, reparation de panneau — sont chiffrees au cas par cas selon la complexite et les pieces necessaires. Le long de ${data.streets[0]}, nos tarifs sont identiques quelle que soit l'heure d'intervention, sans majoration pour le week-end ou les jours feries. Nous acceptons les reglements par carte bancaire, cheque et virement, et etablissons une facture detaillee conforme aux exigences des assureurs et des syndics de copropriete de ${pick(data.neighborhoods, 1)}.`,

  // 4: Reparation copropriete — coordination syndic, acces parking collectif, intervention discrete
  (zone, data, prep) => `La reparation d'une porte sectionnelle en copropriete ${prep} ${zone.name} obeit a des contraintes organisationnelles specifiques. Le syndic, le gardien, les coproprietaires et les locataires sont tous concernes par l'acces au parking collectif, et toute intervention doit etre coordonnee pour minimiser la gene. Notre service dedie aux coproprietes de ${data.neighborhoods[0]} prend en charge l'integralite du processus administratif et technique : reception de la demande du syndic ou du gardien, planification de l'intervention a un horaire convenu, signalisation preventive dans le hall et le parking, reparation dans les delais annonces et nettoyage complet de la zone de travail. Pour les parkings souterrains a forte frequentation le long de ${data.streets[0]}, nous programmons preferentiellement les interventions en milieu de matinee ou en debut d'apres-midi, lorsque le flux de vehicules est minimal. Le technicien installe un balisage temporaire et prevoit une solution d'acces alternatif si la porte doit rester immobilisee plus d'une heure. Apres chaque reparation pres de ${data.landmarks[0]}, un rapport technique detaille est adresse au syndic par email sous format PDF, incluant la description des travaux, les photos avant-apres, les references des pieces utilisees et les recommandations d'entretien. Ce rapport facilite la communication avec les coproprietaires et la justification des depenses lors de l'assemblee generale. Nous proposons des contrats de maintenance collective avec visites trimestrielles et astreinte 24h/24 pour les coproprietes de ${pick(data.neighborhoods, 1)}.`,

  // 5: Prevention apres reparation — contrat entretien, eviter recidive, checklist annuelle
  (zone, data, prep) => `Une reparation reussie ne garantit pas a elle seule la perennite de votre porte sectionnelle ${prep} ${zone.name} (${zone.postalCode}). Sans programme de maintenance preventive, d'autres composants fragilises par l'usure risquent de ceder dans les mois qui suivent. C'est pourquoi nos techniciens proposent systematiquement un contrat d'entretien apres chaque reparation dans ${data.neighborhoods[0]}. Ce contrat comprend deux visites annuelles programmees — au printemps et a l'automne — durant lesquelles un technicien effectue une checklist de 28 points de controle : mesure de la tension des ressorts au dynamometre, inspection des cables toron par toron, verification de l'usure des galets en nylon, controle de l'alignement des rails au laser, test des cellules photoelectriques et de la barre palpeuse, etat des joints d'etancheite, couple de serrage des fixations, graissage des articulations et test complet de la motorisation sur dix cycles. Chaque visite pres de ${data.landmarks[0]} donne lieu a un rapport ecrit avec photos et preconisations, transmis par email sous 24 heures. Les coproprietes le long de ${data.streets[0]} beneficient d'un tarif degressif par porte et d'une priorite d'intervention en cas de panne imprevue entre deux visites. Les statistiques de nos interventions en region parisienne sur les cinq dernieres annees montrent que ce suivi preventif prolonge la duree de vie des composants de 30 a 40 % et reduit le risque de panne de plus de 70 % dans les garages de ${pick(data.neighborhoods, 1)}.`,
];

// ===============================================
// Reparation process — 4 steps per set, 6 sets
// ===============================================

const reparationProcessSets: ((zone: Zone, prep: string) => { step: string; description: string }[])[] = [
  (zone, prep) => [
    { step: "Contact et prise de rendez-vous", description: `Appelez le ${siteConfig.telephone} ou remplissez notre formulaire. Notre equipe organise l'intervention ${prep} ${zone.name} dans le creneau qui vous convient.` },
    { step: "Diagnostic technique complet", description: `Le technicien inspecte chaque composant de votre porte sectionnelle : ressorts, cables, galets, rails, panneaux, motorisation et securites.` },
    { step: "Devis detaille et validation", description: `Un devis ecrit piece par piece vous est presente avant toute intervention. Aucune reparation n'est engagee sans votre accord.` },
    { step: "Reparation et controle qualite", description: `Les pieces defectueuses sont remplacees, l'ensemble est regle et teste sur dix cycles complets. Garantie 12 mois pieces et main-d'oeuvre.` },
  ],
  (zone, prep) => [
    { step: "Appel ou demande en ligne", description: `Contactez-nous au ${siteConfig.telephone} pour decrire le probleme de votre porte sectionnelle ${prep} ${zone.name}. Un conseiller evalue la nature de la panne et planifie l'intervention.` },
    { step: "Inspection sur site", description: `Le reparateur examine l'ensemble du mecanisme avec un equipement de mesure professionnel : dynamometre, laser d'alignement, testeur electronique.` },
    { step: "Proposition de reparation chiffree", description: `Chaque poste est detaille : pieces, main-d'oeuvre, delai. Vous choisissez en connaissance de cause, sans aucune pression commerciale.` },
    { step: "Execution et garantie", description: `Reparation realisee dans les regles de l'art, essai complet et remise d'un certificat d'intervention avec garantie de 12 mois.` },
  ],
  (zone, prep) => [
    { step: "Prise en charge rapide", description: `Un appel au ${siteConfig.telephone} suffit pour programmer l'intervention d'un technicien specialise en reparation de portes sectionnelles ${prep} ${zone.name}.` },
    { step: "Bilan mecanique et electronique", description: `Chaque organe est analyse : etat des ressorts, usure des cables, alignement des rails, fonctionnement du moteur et des securites.` },
    { step: "Reparation ciblee et durable", description: `Seules les pieces reellement defectueuses sont remplacees, par des composants d'origine ou de qualite equivalente certifiee.` },
    { step: "Validation finale", description: `Tests de fonctionnement sur dix cycles, verification des securites, rapport d'intervention et garantie 12 mois remis sur place.` },
  ],
  (zone, prep) => [
    { step: "Signalement du probleme", description: `Appelez le ${siteConfig.telephone} a tout moment. Notre operateur recueille les details de la panne et localise le reparateur le plus proche ${prep} ${zone.name}.` },
    { step: "Diagnostic de precision", description: `Le technicien identifie la cause exacte de chaque dysfonctionnement grace a des instruments de mesure professionnels. Rien n'est laisse au hasard.` },
    { step: "Reparation methodique", description: `Chaque piece defaillante est remplacee selon un protocole precis. Les reglages sont effectues au millimetre pour retrouver les performances d'origine.` },
    { step: "Remise en service et suivi", description: `La porte est testee en conditions reelles, un rapport technique est etabli et des conseils d'entretien vous sont communiques pour prevenir les recidives.` },
  ],
  (zone, prep) => [
    { step: "Demande de reparation", description: `Composez le ${siteConfig.telephone} pour signaler le dysfonctionnement de votre porte sectionnelle ${prep} ${zone.name}. Nous intervenons du lundi au dimanche.` },
    { step: "Expertise approfondie", description: `Le reparateur examine l'ensemble du mecanisme et identifie toutes les pieces a remplacer. Un bilan complet vous est presente.` },
    { step: "Devis ferme avant travaux", description: `Le devis detaille chaque poste de depense. Vous validez le montant avant que la reparation ne commence — aucun supplement imprévu.` },
    { step: "Porte operationnelle garantie", description: `La reparation est finalisee, l'equilibrage verifie, les securites testees. Un certificat d'intervention et une garantie de 12 mois vous sont remis.` },
  ],
  (zone, prep) => [
    { step: "Premier contact", description: `Le ${siteConfig.telephone} est votre ligne directe vers un reparateur specialise ${prep} ${zone.name}. Reponse garantie en moins de 2 minutes, prise de rendez-vous immediate.` },
    { step: "Analyse technique sur place", description: `Le technicien ausculte votre porte sectionnelle avec methode : tests mecaniques, mesures electroniques, verification des securites.` },
    { step: "Reparation professionnelle", description: `Les pieces defaillantes sont remplacees avec des composants certifies. Chaque geste est execute selon les specifications du fabricant.` },
    { step: "Controle et garantie", description: `Essai complet sur dix cycles, controle des securites reglementaires, rapport d'intervention et garantie 12 mois sur les pieces et la main-d'oeuvre.` },
  ],
];

// ===============================================
// FAQ — 6 sets of 5 questions, all reparation-focused
// ===============================================

const faqSets: ((zone: Zone, data: LocalDataEntry, prep: string) => { question: string; answer: string }[])[] = [
  // Set 0: ressorts + cables
  (zone, data, prep) => [
    { question: `Comment savoir si les ressorts de ma porte sectionnelle doivent etre repares ${prep} ${zone.name} ?`, answer: `Plusieurs signes indiquent des ressorts fatigues : la porte est plus lourde en manoeuvre manuelle, le tablier recule de quelques centimetres apres fermeture, le moteur force davantage qu'auparavant. Nos techniciens mesurent la tension residuelle au dynamometre pour evaluer l'usure exacte. Si la perte de tension depasse 15 %, le remplacement est recommande.` },
    { question: `Peut-on remplacer un seul ressort de porte sectionnelle ou faut-il changer la paire ?`, answer: `Pour une porte a ressort de torsion central, il n'y a generalement qu'un seul ressort. Pour les systemes a ressorts lateraux, nous remplasons les deux simultanement pour garantir un equilibrage parfait du tablier. Un seul ressort neuf face a un ressort use cree un desequilibre qui accelere l'usure de l'ensemble.` },
    { question: `Quel est le prix de la reparation d'un cable de porte sectionnelle ${prep} ${zone.name} ?`, answer: `Le remplacement des deux cables, incluant le deplacement, le diagnostic, les pieces et la main-d'oeuvre, demarre a partir de 180 euros. Le tarif exact depend de la longueur des cables, du type de fixation et de la hauteur de la porte. Un devis precis est remis sur place avant toute intervention.` },
    { question: `Combien de temps dure la reparation d'un ressort de torsion ?`, answer: `Le remplacement d'un ressort de torsion prend environ 1 heure, incluant le demontage securise de l'ancien ressort, la pose du neuf, le calibrage de la tension et les tests de fonctionnement sur dix cycles complets.` },
    { question: `Un cable de porte sectionnelle effiloche est-il dangereux ?`, answer: `Oui. Un cable effiloche peut rompre a tout moment sous la tension. La rupture provoque un desequilibre brutal du tablier — la porte penche d'un cote et peut se bloquer ou chuter partiellement. N'utilisez pas votre porte et contactez-nous immediatement au ${siteConfig.telephone}.` },
  ],
  // Set 1: panneaux + esthetique
  (zone, data, prep) => [
    { question: `Peut-on reparer un seul panneau de porte sectionnelle ${prep} ${zone.name} ?`, answer: `Oui, les panneaux sont modulaires. Nous remplacons uniquement la ou les sections endommagees en commandant la reference exacte du fabricant — meme profil, epaisseur, teinte RAL et dimensions. Le delai de livraison est de 48 a 72 heures pour les modeles courants Hormann, Novoferm et Crawford.` },
    { question: `Un panneau de porte sectionnelle enfonce peut-il etre redresse sans remplacement ?`, answer: `Un enfoncement localise de moins de 15 mm peut parfois etre rectifie par debosselage professionnel. Au-dela, le panneau perd son integrite structurelle et son isolation thermique — le remplacement est alors la solution la plus fiable et la plus esthetique.` },
    { question: `Combien coute le remplacement d'un panneau de porte sectionnelle ?`, answer: `Le prix depend de la marque, du modele et des dimensions du panneau. Pour un panneau standard Hormann ou Novoferm en residentiel, comptez a partir de 250 euros piece posee. Nos techniciens etablissent un devis precis apres identification de la reference exacte de votre porte.` },
    { question: `La reparation d'un panneau est-elle prise en charge par l'assurance ?`, answer: `Si le dommage resulte d'un choc de vehicule, votre assurance automobile ou la multirisque habitation peut couvrir la reparation. Nous etablissons un devis conforme aux exigences des assureurs avec photos horodatees et bordereau de pieces.` },
    { question: `Peut-on changer la couleur des panneaux lors de la reparation ?`, answer: `Le remplacement a l'identique est la solution standard. Si vous souhaitez changer de coloris, il faut remplacer l'ensemble des panneaux pour garantir l'homogeneite visuelle. Nous pouvons vous proposer un devis comparatif entre reparation partielle et renovation complete.` },
  ],
  // Set 2: rails + galets + bruit
  (zone, data, prep) => [
    { question: `Ma porte sectionnelle grince et vibre ${prep} ${zone.name}, quelle est la cause ?`, answer: `Un grincement metallique signale generalement des galets uses dont le profil s'est deforme, un rail desaligne ou un manque de lubrification des articulations. Nos techniciens diagnostiquent la cause exacte et procèdent au remplacement des galets, au realignement des rails et a la lubrification de l'ensemble.` },
    { question: `A quelle frequence faut-il remplacer les galets d'une porte sectionnelle ?`, answer: `Les galets en nylon ont une duree de vie de 15 000 a 25 000 cycles selon la qualite et les conditions d'utilisation. Pour un usage residentiel (4 a 8 cycles par jour), cela represente 6 a 10 ans. Un controle visuel annuel permet de detecter l'usure avant qu'elle ne provoque un blocage.` },
    { question: `Comment savoir si les rails de ma porte sectionnelle sont desalignés ?`, answer: `Les signes d'un desalignement sont un frottement metallique, une vibration du tablier, un effort moteur accru ou un deplacement saccade. Nos techniciens mesurent l'ecart au laser — un decalage de 2 mm suffit a perturber le fonctionnement. La correction est rapide et efficace.` },
    { question: `La reparation des rails est-elle complexe ?`, answer: `L'operation necessite un equipement de mesure laser et une bonne connaissance de la mecanique des portes sectionnelles. Le technicien desserre les pattes de fixation, repositionne le rail avec des cales calibrees et resserre au couple prescrit. L'intervention dure environ 45 minutes par rail.` },
    { question: `Peut-on lubrifier soi-meme les rails et galets de sa porte sectionnelle ?`, answer: `La lubrification est l'un des rares gestes d'entretien realisables par un particulier. Utilisez un spray silicone sur les rails et une graisse au lithium sur les galets, les charnieres et les ressorts. Evitez les produits a base de petrole qui attirent la poussiere et encrassent le mecanisme.` },
  ],
  // Set 3: motorisation + electronique
  (zone, data, prep) => [
    { question: `Le moteur de ma porte sectionnelle fait un bruit mais la porte ne bouge pas ${prep} ${zone.name}, que faire ?`, answer: `Le moteur tourne mais n'entraine pas le tablier : cela pointe vers un engrenage casse dans le bloc moteur, une courroie rompue ou un embrayage use. N'insistez pas — coupez l'alimentation et contactez-nous au ${siteConfig.telephone}. Nos techniciens disposent des pieces de remplacement pour Somfy, Hormann, Came et Marantec.` },
    { question: `La carte electronique de mon moteur peut-elle etre reparee plutot que remplacee ?`, answer: `Dans certains cas, le remplacement d'un composant isole — condensateur, relais, fusible — suffit a restaurer le fonctionnement. Nos techniciens testent chaque composant au multimetre avant de proposer un remplacement complet de la carte. Cette approche vous fait economiser 50 a 70 % du cout d'une carte neuve.` },
    { question: `Ma telecommande ne fonctionne plus, est-ce un probleme de motorisation ?`, answer: `Pas necessairement. Commencez par remplacer la pile (CR2032). Si le probleme persiste, la telecommande est peut-etre desappairee du recepteur. Nos techniciens effectuent le reappairage en quelques minutes selon le protocole specifique de votre marque.` },
    { question: `Combien coute la reparation d'un moteur de porte sectionnelle ?`, answer: `Le tarif depend du type de panne. Un remplacement de condensateur ou de relais coute a partir de 120 euros. Le remplacement complet d'un moteur, pose et programmation incluses, varie de 350 a 650 euros selon la marque et la puissance. Devis precis remis sur place.` },
    { question: `Peut-on reparer un moteur de porte sectionnelle de plus de 15 ans ?`, answer: `Tant que les pieces detachees sont disponibles, la reparation est possible et souvent recommandee. Pour les modeles dont les composants ne sont plus fabriques, nous proposons un moteur de remplacement compatible, adapte aux caracteristiques de votre porte et de vos telecommandes.` },
  ],
  // Set 4: copropriete + assurance
  (zone, data, prep) => [
    { question: `La porte du parking de ma copropriete necessite une reparation ${prep} ${zone.name}, qui doit contacter le reparateur ?`, answer: `Le gardien ou le syndic de copropriete peut contacter directement notre service de reparation au ${siteConfig.telephone}. L'intervention est facturee a la copropriete. Nous envoyons un rapport complet au syndic apres chaque reparation pour faciliter la gestion administrative et la communication avec les coproprietaires.` },
    { question: `Mon vehicule a endommage la porte sectionnelle du parking, comment proceder ?`, answer: `Prenez des photos des degats, declarez le sinistre a votre assurance automobile et contactez-nous pour un devis de reparation. Nous etablissons un dossier conforme aux exigences des assureurs — photos horodatees, bordereau de pieces, facture detaillee — pour une prise en charge simplifiee.` },
    { question: `Proposez-vous des contrats de maintenance apres reparation pour les coproprietes ?`, answer: `Oui, nos contrats de maintenance collective comprennent 2 a 4 visites preventives par an, une astreinte 24h/24 avec intervention prioritaire et un tarif degressif par nombre de portes. Le syndic recoit un rapport ecrit apres chaque passage.` },
    { question: `Faut-il un vote en assemblee generale pour autoriser la reparation de la porte du parking ?`, answer: `Les reparations courantes et urgentes relevent generalement du pouvoir du syndic sans vote prealable, dans la limite du budget previsionnel. Pour les reparations lourdes depassant un certain montant, un vote en AG peut etre necessaire. Notre devis detaille facilite la prise de decision.` },
    { question: `La reparation peut-elle se faire sans interrompre l'acces au parking ?`, answer: `Pour la majorite des reparations — remplacement de galets, ajustement de rails, reparation electronique — l'acces est maintenu pendant l'intervention. Seules certaines operations lourdes (remplacement de panneau, changement de ressort) necessitent une immobilisation temporaire d'une a deux heures.` },
  ],
  // Set 5: prevention + duree de vie
  (zone, data, prep) => [
    { question: `Comment eviter une nouvelle panne apres la reparation de ma porte sectionnelle ${prep} ${zone.name} ?`, answer: `Un contrat d'entretien preventif avec deux visites annuelles reduit le risque de panne de plus de 70 %. Entre les visites, verifiez visuellement l'etat des cables et lubrifiez les rails et charnieres au spray silicone tous les 6 mois. Evitez de forcer la porte en cas de blocage et contactez un professionnel.` },
    { question: `Quelle est la duree de vie d'une porte sectionnelle bien entretenue ?`, answer: `Les composants structurels (panneaux, rails, cadre) durent 25 a 30 ans. Les ressorts supportent 15 000 a 25 000 cycles (5 a 12 ans selon l'usage). Les cables, galets et joints doivent etre remplaces tous les 8 a 12 ans. Un entretien regulier prolonge significativement chaque duree de vie.` },
    { question: `L'entretien preventif est-il vraiment rentable par rapport aux reparations ?`, answer: `Absolument. Un contrat d'entretien a 150-200 euros par an permet de detecter et corriger les usures avant qu'elles ne provoquent des pannes couteuses. Le remplacement anticipe d'un galet use (30 euros) evite le remplacement d'un rail deforme (400 euros) que le galet endommage aurait provoque.` },
    { question: `Quels gestes d'entretien puis-je effectuer moi-meme entre deux visites ?`, answer: `Vous pouvez lubrifier les rails au spray silicone, graisser les charnieres et les galets, verifier visuellement l'etat des cables (absence d'effilochage) et nettoyer les cellules photoelectriques avec un chiffon doux. En revanche, ne touchez jamais aux ressorts ni a la tension des cables.` },
    { question: `La garantie de reparation est-elle annulee si je ne prends pas de contrat d'entretien ?`, answer: `Non, la garantie de 12 mois sur notre reparation est inconditionnelle. Le contrat d'entretien est une recommandation pour prolonger la duree de vie de votre equipement et prevenir les pannes futures, mais il n'est en aucun cas une condition de la garantie.` },
  ],
];

// ===============================================
// Main export function
// ===============================================

export function getReparationZoneContent(zone: Zone): ReparationZoneContent {
  const data = localData[zone.slug] || null;
  const preposition = zone.department === "Paris" ? "dans le" : "a";
  const zoneIdx = getZoneIndex(zone);

  const local: LocalDataEntry = data
    ? { landmarks: data.landmarks, streets: data.streets, neighborhoods: data.neighborhoods, metros: data.metros }
    : defaultLocal;

  // Rotate intro among 6 templates
  const introIdx = zoneIdx % 6;
  const rawIntro = introTemplates[introIdx](zone, local, preposition);
  const intro = rawIntro + ` Pour les residents et professionnels du ${zone.postalCode} ${zone.name}, notre equipe garantit une reparation soignee et perenne.`;

  // Rotate SEO1 among 6 templates
  const seo1Idx = zoneIdx % 6;
  const seo1Title = seo1Titles[seo1Idx](zone, preposition);
  const seo1 = seo1Templates[seo1Idx](zone, local, preposition);

  // Rotate SEO2 — offset by 3
  const seo2Idx = (zoneIdx + 3) % 6;
  const seo2Title = seo2Titles[seo2Idx](zone, preposition);
  const seo2 = seo2Templates[seo2Idx](zone, local, preposition);

  // Rotate reparation process
  const processIdx = (zoneIdx + 2) % 6;
  const reparationProcess = reparationProcessSets[processIdx](zone, preposition);

  // Rotate FAQ — offset by 1
  const faqIdx = (zoneIdx + 1) % 6;
  const faq = faqSets[faqIdx](zone, local, preposition);

  return { intro, seo1Title, seo1, seo2Title, seo2, reparationProcess, faq };
}
