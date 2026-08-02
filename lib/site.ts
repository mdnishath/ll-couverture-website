export const site = {
  name: "L.L COUVERTURE",
  tagline: "Couvreur · Charpentier",
  phone: "06 41 26 02 59",
  phoneHref: "tel:+33641260259",
  email: "livaycouverture@gmail.com",
  address: ["77 rue de l'Hermitage", "91290 Arpajon"],
  hours: ["Lun – Ven : 07:00 – 19:00", "Sam : 08:00 – 17:00"],
  area: "Arpajon & Essonne (91)",
  url: "https://ll-couverture-website.vercel.app",
} as const;

export type Service = {
  slug: string;
  /** Libellé court, utilisé dans la navigation et sur les cartes. */
  title: string;
  /** Suffixe affiché en couleur d'accent (ex. « — Urgence »). */
  titleAccent?: string;
  /** Résumé d'une phrase, affiché sur la carte de la grille. */
  short: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  /** Titre de la page dédiée, plus explicite que `title`. */
  h1: string;
  lead: string;
  body: string[];
  includes: string[];
  signsTitle: string;
  signs: { t: string; d: string }[];
  steps: { t: string; d: string }[];
  faq: { q: string; a: string }[];
};

const IMG = "https://api.couverturejjm.com/wp-content/uploads/2026/03";

export const heroImage = `${IMG}/Sage-Roofing-South-West-Our-Services-New-Roofs-Almondsbury-Hero-Image.jpg`;
export const wideImage = `${IMG}/WhatsApp-Image-2026-03-07-at-3.54.22-AM.jpeg`;

export const services: Service[] = [
  {
    slug: "zinguerie",
    title: "Zinguerie",
    short:
      "Façonnage sur mesure du zinc : noues, solins, habillages de cheminée et raccords parfaitement étanches.",
    image: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.35-AM.jpeg`,
    metaTitle: "Zinguerie à Arpajon — noues, solins, habillage de cheminée",
    metaDescription:
      "Travaux de zinguerie à Arpajon et en Essonne : noues, solins, habillages de souche, bandes de rive et descentes. Façonnage sur mesure, devis gratuit sous 24 h.",
    h1: "Zinguerie à Arpajon et en Essonne",
    lead: "La zinguerie, c'est tout ce qui conduit l'eau là où elle doit aller. Un solin mal façonné ou une noue fatiguée, et l'infiltration passe sous la couverture sans que rien ne se voie depuis le sol.",
    body: [
      "Nous façonnons le zinc sur mesure, en atelier ou directement sur le chantier selon la pièce et la géométrie de votre toiture. Zinc naturel, prépatiné ou quartz : le choix se fait avec vous au moment du devis, en fonction de l'exposition et du reste de la couverture.",
      "Sur les maisons anciennes d'Arpajon et des communes voisines, nous reprenons régulièrement des raccords réalisés au mastic ou à la mousse expansive par un précédent intervenant. Ces réparations tiennent un hiver ou deux ; un solin correctement engravé tient trente ans.",
      "Chaque raccord est contrôlé à l'eau avant de quitter le chantier — c'est le seul moyen de vérifier qu'une noue évacue vraiment sur toute sa longueur.",
    ],
    includes: [
      "Noues encaissées et noues ouvertes en zinc",
      "Solins et engravures en pied de mur ou de souche",
      "Habillage complet de souche de cheminée",
      "Bandes de rive, bandeaux et couvertines",
      "Raccords autour des châssis de toit et lanterneaux",
      "Descentes, boîtes à eau et dauphins",
    ],
    signsTitle: "Quand faut-il intervenir ?",
    signs: [
      {
        t: "Humidité au plafond près d'une cheminée",
        d: "Le solin de souche est le premier suspect : il travaille avec les mouvements du conduit.",
      },
      {
        t: "Coulures ou auréoles sur un mur pignon",
        d: "Souvent une bande de rive décollée ou une couvertine fissurée en tête de mur.",
      },
      {
        t: "Zinc verdi ou percé au fond d'une noue",
        d: "Le métal a fait son temps ; une rustine ne fera que déplacer le point de fuite.",
      },
      {
        t: "Mastic ou silicone visible en toiture",
        d: "Signe d'une réparation provisoire faite par un précédent intervenant, à reprendre proprement.",
      },
    ],
    steps: [
      {
        t: "Relevé des points singuliers",
        d: "Nous mesurons chaque solin, noue et souche, et repérons les reprises provisoires à supprimer.",
      },
      {
        t: "Façonnage sur mesure",
        d: "Le zinc est plié aux dimensions relevées, en atelier pour les grandes pièces, sur place pour les ajustements.",
      },
      {
        t: "Pose et contrôle",
        d: "Engravure, fixation, soudure à l'étain, puis essai à l'eau de tous les raccords avant réception.",
      },
    ],
    faq: [
      {
        q: "Zinc naturel ou prépatiné ?",
        a: "Le zinc naturel prend sa patine grise en deux à cinq ans selon l'exposition. Le prépatiné a son aspect définitif dès la pose et coûte un peu plus cher — utile quand la zinguerie est très visible depuis la rue.",
      },
      {
        q: "Combien de temps dure une zinguerie ?",
        a: "Correctement posée et ventilée, elle tient 40 à 60 ans. Ce qui la tue prématurément, c'est le contact avec certains mortiers frais et les stagnations d'eau dans une noue mal pentée.",
      },
      {
        q: "Peut-on faire de la zinguerie sans refaire la toiture ?",
        a: "Oui, dans la grande majorité des cas. Solins, noues et habillages de souche se reprennent indépendamment de la couverture, tant que celle-ci est encore en bon état.",
      },
    ],
  },

  {
    slug: "renovation-toiture",
    title: "Rénovation de Toiture",
    short:
      "Dépose, isolation, écran sous-toiture et pose neuve en tuiles ou ardoises, avec évacuation des gravats.",
    image: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.36-AM.jpeg`,
    metaTitle: "Rénovation de toiture à Arpajon — tuiles, ardoises, isolation",
    metaDescription:
      "Réfection complète de toiture à Arpajon et en Essonne : dépose, contrôle de charpente, écran sous-toiture, tuiles ou ardoises. Devis détaillé poste par poste.",
    h1: "Rénovation de toiture à Arpajon",
    lead: "Refaire une toiture, ce n'est pas seulement reposer des tuiles. C'est vérifier la charpente, poser un écran sous-toiture, reprendre l'isolation quand c'est le bon moment — et évacuer proprement tout ce qui descend.",
    body: [
      "Nous déposons l'ancienne couverture, contrôlons chaque chevron et chaque panne, remplaçons les pièces attaquées, puis reposons en tuiles ou en ardoises selon le bâti et les règles d'urbanisme de la commune.",
      "L'écran de sous-toiture HPV est systématique sur une réfection complète : il protège pendant les travaux et sert de seconde barrière une fois le chantier fini. Sur des combles aménagés, c'est aussi le moment le moins coûteux pour reprendre l'isolation par l'extérieur.",
      "Le chantier est bâché chaque soir et une benne reste sur place pour les gravats. Vous n'aurez jamais une toiture laissée ouverte sans protection.",
    ],
    includes: [
      "Dépose et évacuation de l'ancienne couverture",
      "Contrôle et traitement de la charpente mise à nu",
      "Pose d'un écran de sous-toiture HPV",
      "Liteaunage et contre-liteaunage neufs",
      "Couverture en tuiles plates, mécaniques ou en ardoises",
      "Reprise des points singuliers : faîtage, arêtiers, noues, rives",
      "Isolation par l'extérieur (sarking) en option",
    ],
    signsTitle: "Faut-il rénover ou réparer ?",
    signs: [
      {
        t: "Plus de 5 % des tuiles cassées ou déplacées",
        d: "Au-delà, la réparation ponctuelle revient plus cher que la réfection sur dix ans.",
      },
      {
        t: "Mousse épaisse et tuiles poreuses",
        d: "La tuile a perdu son étanchéité de surface ; le démoussage ne la restaure pas.",
      },
      {
        t: "Infiltrations à plusieurs endroits distincts",
        d: "Le problème n'est plus local : c'est la couverture entière qui arrive en fin de vie.",
      },
      {
        t: "Toiture de plus de 40 ans jamais reprise",
        d: "Un diagnostic s'impose, même en l'absence de fuite visible.",
      },
    ],
    steps: [
      {
        t: "Relevé et diagnostic",
        d: "Montée sur toiture, mesure des surfaces réelles, état de la charpente, photos de chaque point sensible.",
      },
      {
        t: "Choix des matériaux",
        d: "Tuile ou ardoise, teinte, écran, isolation : chaque option est chiffrée séparément sur le devis.",
      },
      {
        t: "Chantier et réception",
        d: "Échafaudage, dépose, pose, nettoyage complet, puis visite de réception avec remise des attestations.",
      },
    ],
    faq: [
      {
        q: "Combien de temps dure une réfection complète ?",
        a: "Comptez 6 à 12 jours pour une maison individuelle de 100 à 150 m² de toiture, selon la complexité et la météo. La durée est annoncée par écrit sur le devis.",
      },
      {
        q: "Faut-il une autorisation en mairie ?",
        a: "Une déclaration préalable de travaux est nécessaire dès que l'aspect extérieur change (teinte ou type de tuile). Nous vous indiquons ce qu'il faut déposer et fournissons les références exactes des matériaux.",
      },
      {
        q: "Puis-je rester chez moi pendant les travaux ?",
        a: "Oui. La zone en cours est bâchée chaque soir et la mise hors d'eau est maintenue en permanence.",
      },
    ],
  },

  {
    slug: "urgence",
    title: "Réparation de Fuite",
    titleAccent: "— Urgence",
    short:
      "Recherche d'infiltration et mise hors d'eau rapide, bâchage provisoire compris si la météo l'impose.",
    image: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.37-AM.jpeg`,
    metaTitle: "Réparation de fuite de toiture en urgence — Arpajon 7j/7",
    metaDescription:
      "Fuite de toiture à Arpajon ou en Essonne ? Intervention sous 24 h, 7j/7 : bâchage, recherche d'infiltration et réparation durable. Appelez le 06 41 26 02 59.",
    h1: "Réparation de fuite de toiture — urgence",
    lead: "Une fuite ne se répare pas là où l'eau tombe. Elle se répare là où elle entre, et les deux points sont rarement au même endroit.",
    body: [
      "Nous intervenons sous 24 h dans un rayon de 30 km autour d'Arpajon, week-end compris. La première visite sert avant tout à mettre hors d'eau : bâchage, calfeutrement provisoire, dégagement des évacuations bouchées.",
      "Vient ensuite la recherche du point d'entrée réel — tuile fendue, solin décollé, noue percée, faîtage ouvert, remontée en pied de mur. Vous recevez les photos avant que nous proposions la réparation définitive.",
      "Si la fuite révèle un problème plus large, nous le disons franchement et chiffrons les deux options : la réparation qui tient quelques années, et la reprise qui règle vraiment le sujet.",
    ],
    includes: [
      "Intervention sous 24 h, 7j/7 week-end compris",
      "Bâchage et mise hors d'eau dès la première visite",
      "Recherche d'infiltration avec compte-rendu photo",
      "Remplacement de tuiles ou d'ardoises cassées",
      "Reprise de solins, de noues et de faîtages",
      "Débouchage de gouttières et de descentes",
      "Rapport écrit utilisable auprès de votre assurance",
    ],
    signsTitle: "Ce qui doit vous alerter",
    signs: [
      {
        t: "Auréole qui s'agrandit au plafond",
        d: "L'eau circule déjà dans l'isolant ; chaque jour d'attente aggrave les dégâts.",
      },
      {
        t: "Goutte-à-goutte dans les combles",
        d: "Appelez avant la prochaine pluie : un bâchage coûte bien moins cher qu'un plafond.",
      },
      {
        t: "Odeur d'humidité ou de moisi à l'étage",
        d: "Une infiltration lente peut durer des mois sans laisser de trace visible.",
      },
      {
        t: "Tuiles au sol après une tempête",
        d: "Même une seule tuile manquante ouvre un passage direct vers la charpente.",
      },
    ],
    steps: [
      {
        t: "Appel et créneau",
        d: "Vous décrivez la situation au téléphone ; nous fixons un créneau sous 24 h, plus tôt si l'eau coule.",
      },
      {
        t: "Mise hors d'eau",
        d: "Bâchage ou calfeutrement provisoire dès la première visite, pour arrêter les dégâts immédiatement.",
      },
      {
        t: "Réparation définitive",
        d: "Devis chiffré avec photos à l'appui, puis reprise durable du point d'entrée identifié.",
      },
    ],
    faq: [
      {
        q: "Intervenez-vous le week-end ?",
        a: "Oui, 7j/7 pour les mises hors d'eau. Le 06 41 26 02 59 est un numéro direct, pas un standard.",
      },
      {
        q: "La fuite est-elle prise en charge par l'assurance ?",
        a: "Cela dépend de son origine : tempête, vétusté ou malfaçon. Nous fournissons un compte-rendu photo et un devis détaillé que vous pouvez transmettre à votre assureur.",
      },
      {
        q: "Le bâchage est-il facturé séparément ?",
        a: "Il est intégré au devis de réparation. S'il n'y a pas de suite, seuls le déplacement et la mise hors d'eau sont facturés — le montant vous est annoncé avant l'intervention.",
      },
    ],
  },

  {
    slug: "rives",
    title: "Rénovation de Rives",
    short:
      "Reprise des rives, planches de bois traitées et bandeaux en aluminium laqué pour une ligne nette.",
    image: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.38-AM.jpeg`,
    metaTitle: "Rénovation de rives de toiture — Arpajon et Essonne",
    metaDescription:
      "Reprise de rives de toiture à Arpajon : planches de rive en bois traité, bandeaux aluminium laqué ou zinc, closoirs et sous-faces. Devis gratuit.",
    h1: "Rénovation de rives de toiture",
    lead: "La rive, c'est la ligne qui borde votre toit. Quand la planche gonfle ou que le bandeau se décolle, ça se voit depuis la rue — et l'eau entre par le côté.",
    body: [
      "Nous déposons les planches de rive abîmées, traitons ou remplaçons le bois, puis habillons en aluminium laqué ou en zinc pour que l'ensemble ne redemande plus d'entretien.",
      "Sur les pavillons des années 70 et 80, très présents dans le secteur, les planches d'origine sont souvent en sapin non traité : elles se gorgent d'eau par les extrémités et pourrissent de l'intérieur. Le remplacement se fait alors sur la longueur complète, pas par morceaux.",
      "La teinte du bandeau est choisie avec vous : elle doit s'accorder aux gouttières, aux descentes et aux menuiseries pour que la façade reste cohérente.",
    ],
    includes: [
      "Dépose des planches de rive dégradées",
      "Remplacement en bois traité classe 3 ou 4",
      "Habillage en aluminium laqué ou en zinc",
      "Reprise des rives de toiture : tuiles à rabat, closoirs",
      "Bandeaux, sous-faces et caissons de débord",
      "Teinte au choix, accordée aux gouttières existantes",
    ],
    signsTitle: "Signes qu'il faut reprendre les rives",
    signs: [
      {
        t: "Bois gris, fendu ou spongieux",
        d: "Le traitement de surface ne suffit plus : la planche doit être déposée.",
      },
      {
        t: "Peinture qui cloque ou s'écaille",
        d: "L'humidité travaille sous la couche de finition depuis un moment déjà.",
      },
      {
        t: "Bandeau décollé ou qui claque au vent",
        d: "La fixation a lâché ; l'eau passe derrière à chaque pluie battante.",
      },
      {
        t: "Tuiles de rive descellées",
        d: "Le closoir ou le mortier a cédé : c'est une entrée d'eau et de nuisibles.",
      },
    ],
    steps: [
      {
        t: "Repérage sur place",
        d: "Nous mesurons les linéaires réels et repérons les zones où le bois est déjà attaqué en profondeur.",
      },
      {
        t: "Dépose et traitement",
        d: "Retrait complet des planches abîmées, contrôle des chevrons en about, traitement du bois conservé.",
      },
      {
        t: "Habillage et finition",
        d: "Pose du bandeau alu ou zinc, reprise des closoirs, nettoyage complet des abords.",
      },
    ],
    faq: [
      {
        q: "Aluminium ou zinc ?",
        a: "L'aluminium laqué offre plus de teintes et ne demande aucun entretien ; le zinc s'impose quand le reste de la zinguerie est déjà en zinc, pour l'homogénéité. Les deux durent des décennies.",
      },
      {
        q: "Faut-il un échafaudage ?",
        a: "Sur un pavillon de plain-pied, une nacelle ou un échafaudage roulant suffit souvent. À l'étage, l'échafaudage fixe est chiffré à part sur le devis.",
      },
      {
        q: "Peut-on reprendre seulement une façade ?",
        a: "Oui. Les rives se traitent façade par façade ; nous commençons généralement par celle qui est la plus exposée à la pluie dominante.",
      },
    ],
  },

  {
    slug: "gouttieres",
    title: "Réparation de Gouttières",
    short:
      "Nettoyage, ressoudure, remplacement de descentes et pose de crapaudines contre les feuilles.",
    image: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.39-AM.jpeg`,
    metaTitle: "Réparation et pose de gouttières — Arpajon, Essonne",
    metaDescription:
      "Gouttières zinc et aluminium à Arpajon : nettoyage, ressoudure, remplacement, reprise de pente, descentes et crapaudines. Intervention rapide, devis gratuit.",
    h1: "Réparation et pose de gouttières",
    lead: "Une gouttière qui déborde, ce n'est pas qu'un bruit d'eau. C'est un pied de mur qui s'humidifie, un enduit qui cloque et, à terme, des remontées dans la maçonnerie.",
    body: [
      "Nous nettoyons, ressoudons, remplaçons ou reposons à neuf, en zinc comme en aluminium. Le diagnostic commence toujours par la pente : une gouttière qui déborde au même endroit à chaque pluie a presque toujours un problème de pente ou de crochet descendu.",
      "Nous vérifions aussi ce qui se passe en bas. Une descente bouchée au niveau du dauphin ou un regard d'évacuation obstrué produit exactement les mêmes symptômes qu'une gouttière percée — et se règle bien plus vite.",
      "Sur les maisons entourées d'arbres, courant à Ollainville, Égly ou Bruyères-le-Châtel, nous posons des crapaudines et, si vous le souhaitez, des protections anti-feuilles pour espacer les nettoyages.",
    ],
    includes: [
      "Nettoyage complet et débouchage des descentes",
      "Ressoudure et reprise d'étanchéité ponctuelle",
      "Remplacement de gouttières pendantes ou havraises",
      "Pose de descentes, coudes et dauphins fonte",
      "Reprise de pente et remplacement des crochets",
      "Crapaudines et protections anti-feuilles",
    ],
    signsTitle: "Ce qui doit vous alerter",
    signs: [
      {
        t: "Débordement systématique au même endroit",
        d: "Pente insuffisante ou crochet descendu, bien plus souvent qu'un percement.",
      },
      {
        t: "Traînée verte sur la façade",
        d: "L'eau ruisselle le long du mur depuis longtemps ; l'enduit finira par se décoller.",
      },
      {
        t: "Herbe ou mousse dans la gouttière",
        d: "Elle est pleine de terreau : le nettoyage est en retard de plusieurs saisons.",
      },
      {
        t: "Bruit d'eau dans le mur, pied de mur humide",
        d: "La descente ou le regard est bouché ; l'eau cherche un autre chemin.",
      },
    ],
    steps: [
      {
        t: "Contrôle et test à l'eau",
        d: "Nous localisons précisément le point de débordement plutôt que de remplacer l'ensemble à l'aveugle.",
      },
      {
        t: "Nettoyage et réparation",
        d: "Retrait des dépôts, débouchage des descentes, ressoudure ou remplacement des éléments concernés.",
      },
      {
        t: "Réglage de la pente",
        d: "Repose des crochets au bon niveau pour que l'eau parte réellement vers la descente.",
      },
    ],
    faq: [
      {
        q: "Tous les combien faut-il nettoyer ses gouttières ?",
        a: "Une fois par an suffit dans la plupart des cas, deux fois si vous avez des arbres à proximité immédiate. Une crapaudine réduit nettement la fréquence.",
      },
      {
        q: "Réparer ou remplacer ?",
        a: "Une gouttière zinc en bon état se ressoude sans problème. Si le fond est percé en plusieurs points ou si le métal est aminci, le remplacement de la longueur revient moins cher à moyen terme.",
      },
      {
        q: "Intervenez-vous sans échafaudage ?",
        a: "Sur la plupart des pavillons, une échelle à crinoline ou une nacelle suffit. Nous vous le précisons au devis pour qu'il n'y ait pas de supplément en cours de chantier.",
      },
    ],
  },

  {
    slug: "charpente",
    title: "Charpente & Toiture",
    short:
      "Traitement, renfort ou remplacement de pièces de charpente traditionnelles et fermettes.",
    image: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.40-AM.jpeg`,
    metaTitle: "Charpente et toiture à Arpajon — traitement, renfort, pose",
    metaDescription:
      "Travaux de charpente à Arpajon et en Essonne : diagnostic, traitement curatif, moisage, remplacement d'abouts de chevrons et pose de charpentes neuves.",
    h1: "Charpente et toiture",
    lead: "Sous les tuiles, c'est le bois qui porte tout. Une panne fendue ou un about de chevron attaqué par l'humidité ne se voit pas d'en bas — mais il finit par se voir sur la ligne du toit.",
    body: [
      "Nous intervenons sur charpente traditionnelle comme sur fermettes industrielles : traitement curatif et préventif, renfort de pièces affaiblies, remplacement d'abouts de chevrons, moisage de pannes, reprise d'entrait.",
      "Le diagnostic se fait depuis les combles quand ils sont accessibles, sinon lors de la dépose de couverture. Nous sondons le bois, repérons les traces d'insectes xylophages ou de champignons, et distinguons ce qui est ancien et stabilisé de ce qui travaille encore.",
      "Sur les longères et les bâtiments anciens du secteur, nous privilégions le renfort et le remplacement partiel plutôt que la dépose complète : c'est moins coûteux et cela préserve le caractère du bâti.",
    ],
    includes: [
      "Diagnostic de charpente avec sondage du bois",
      "Traitement curatif contre insectes et champignons",
      "Remplacement d'abouts de chevrons et de pannes",
      "Moisage et renfort de pièces affaiblies",
      "Reprise d'entraits et de contreventement",
      "Pose de fermettes et de charpentes neuves",
      "Création de trémies pour fenêtres de toit",
    ],
    signsTitle: "Signes d'une charpente fatiguée",
    signs: [
      {
        t: "Ligne de faîtage qui creuse",
        d: "Une panne faîtière fléchit : à surveiller de près, à reprendre rapidement.",
      },
      {
        t: "Sciure fine au sol dans les combles",
        d: "Activité d'insectes xylophages en cours, et non une trace ancienne.",
      },
      {
        t: "Bois qui s'enfonce sous une pointe",
        d: "Le cœur est attaqué même quand la surface paraît encore saine.",
      },
      {
        t: "Tuiles qui se déplacent sans raison",
        d: "Le support bouge : le problème est structurel, pas en couverture.",
      },
    ],
    steps: [
      {
        t: "Visite des combles",
        d: "Sondage du bois, repérage des zones humides et des traces d'insectes, photos à l'appui.",
      },
      {
        t: "Traitement ou renfort",
        d: "Injection et pulvérisation pour le curatif ; moisage ou remplacement pour ce qui est structurel.",
      },
      {
        t: "Contrôle après travaux",
        d: "Vérification des appuis et du contreventement avant repose de la couverture.",
      },
    ],
    faq: [
      {
        q: "Le traitement de charpente est-il garanti ?",
        a: "Oui. Le produit utilisé et sa garantie constructeur sont indiqués sur le devis, et l'intervention entre dans notre assurance décennale.",
      },
      {
        q: "Peut-on renforcer sans tout déposer ?",
        a: "Dans la majorité des cas, oui. Le moisage — doublage d'une pièce par une autre — rend sa résistance à une panne ou à un chevron sans toucher au reste de la charpente.",
      },
      {
        q: "Intervenez-vous sur les fermettes industrielles ?",
        a: "Oui. Les fermettes se reprennent différemment d'une charpente traditionnelle : jamais de découpe sans calcul, et renfort par doublage ou par contreventement complémentaire.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function serviceHref(slug: string): string {
  return `/services/${slug}`;
}

export function serviceLabel(s: Service): string {
  return s.titleAccent ? `${s.title} ${s.titleAccent}` : s.title;
}

export const serviceOptions = [
  "Zinguerie",
  "Rénovation de toiture",
  "Réparation de fuite — urgence",
  "Rénovation de rives",
  "Réparation de gouttières",
  "Charpente & toiture",
];

export type Project = {
  location: string;
  title: string;
  meta: string;
  before: string;
  after: string;
};

export const projects: Project[] = [
  {
    location: "Arpajon · 91",
    title: "Réfection complète en tuiles plates",
    meta: "120 m² · charpente renforcée · 9 jours de chantier",
    before: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.35-AM.jpeg`,
    after: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.36-AM.jpeg`,
  },
  {
    location: "Ollainville · 91",
    title: "Zinguerie et habillage de cheminée",
    meta: "Zinc naturel · noues refaites · 3 jours",
    before: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.37-AM.jpeg`,
    after: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.38-AM.jpeg`,
  },
  {
    location: "Égly · 91",
    title: "Gouttières aluminium et descentes",
    meta: "32 ml · rives reprises · 2 jours",
    before: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.39-AM.jpeg`,
    after: `${IMG}/WhatsApp-Image-2026-03-14-at-2.33.40-AM.jpeg`,
  },
];

export const towns = [
  "Arpajon",
  "Ollainville",
  "Égly",
  "Saint-Germain-lès-Arpajon",
  "La Norville",
  "Bruyères-le-Châtel",
  "Marolles-en-Hurepoix",
  "Leuville-sur-Orge",
  "Longpont-sur-Orge",
  "Montlhéry",
  "Linas",
  "Brétigny-sur-Orge",
];
