export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  priceTegamino?: string;
  priceMattone?: string;
  pricePiccola?: string;
  priceMedia?: string;
  priceBionda?: string;
  priceRossa?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  description?: string;
  note?: string;
  subsections?: { title: string; items: MenuItem[] }[];
  items?: MenuItem[];
  dualPrice?: boolean;
  dualPriceLabels?: [string, string];
};

export const menuSections: MenuSection[] = [
  {
    id: "bevande",
    title: "Bevande",
    subsections: [
      {
        title: "Bevande",
        items: [
          { name: "Acqua naturale o gasata", price: "€2,00" },
          {
            name: "Bibite",
            description:
              "Coca-Cola, Coca Cola Zero, Estathè pesca o limone, Fanta, Sprite, Chinotto, Lemonsoda",
            price: "€3,50",
          },
          { name: "Spritz (Aperol, Campari, Hugo)", price: "€6,00" },
        ],
      },
      {
        title: "Bevande alla spina",
        items: [
          {
            name: "Birra alla spina bionda",
            pricePiccola: "€4,00",
            priceMedia: "€5,50",
          },
          {
            name: "Birra alla spina rossa",
            pricePiccola: "€4,50",
            priceMedia: "€6,50",
          },
          {
            name: "Panaché bionda",
            pricePiccola: "€3,50",
            priceMedia: "€5,50",
          },
          {
            name: "Panaché rossa",
            pricePiccola: "€4,00",
            priceMedia: "€6,50",
          },
          {
            name: "Coca Cola",
            pricePiccola: "€3,50",
            priceMedia: "€4,50",
          },
        ],
      },
      {
        title: "Birre in bottiglia",
        items: [
          { name: "Weiss 50cl", price: "€7,00" },
          { name: "Menabrea Ambrata 33cl", price: "€5,00" },
          { name: "Menabrea Bionda 33cl", price: "€5,00" },
          { name: "Ichnusa non filtrata 33cl", price: "€6,00" },
          { name: "Birre 33cl", price: "€5,00" },
        ],
      },
      {
        title: "Spillatore da tavolo",
        items: [
          { name: "1 lt", priceBionda: "€14,00", priceRossa: "€17,00" },
          { name: "1,5 lt", priceBionda: "€21,00", priceRossa: "€25,00" },
          { name: "2 lt", priceBionda: "€27,00", priceRossa: "€32,00" },
          { name: "2,5 lt", priceBionda: "€30,00", priceRossa: "€36,00" },
          { name: "3 lt", priceBionda: "€34,00", priceRossa: "€41,00" },
        ],
      },
      {
        title: "Vino Rosso",
        items: [
          { name: "Vino in bottiglia 0,75", price: "€15,00" },
          { name: "Vino in bottiglia 0,75", price: "€20,00" },
          { name: "sfuso 1/4 lt", price: "€5,00" },
          { name: "sfuso 1/2 lt", price: "€7,00" },
          { name: "Calice", price: "€5,00" },
        ],
      },
      {
        title: "Vino Bianco",
        items: [
          { name: "Vino in bottiglia 0,75", price: "€14,00" },
          { name: "Vino in bottiglia 0,75", price: "€16,00" },
          { name: "sfuso 1/4 lt", price: "€5,00" },
          { name: "sfuso 1/2 lt", price: "€7,00" },
          { name: "Calice", price: "€5,00" },
        ],
      },
    ],
  },
  {
    id: "farinata-classica",
    title: "Farinata Classica",
    description:
      "Farina di ceci, acqua, sale, olio di semi di arachide",
    items: [
      { name: "Singola porzione", price: "€5,00" },
      { name: "Doppia porzione", price: "€9,00" },
      { name: "Teglia per 6 persone", price: "€25,00" },
    ],
  },
  {
    id: "farinata-farcita",
    title: "Farinata Farcita",
    description:
      "Farina di ceci, acqua, sale, olio di semi di arachide accompagnata in cottura o meno con ingredienti selezionati",
    subsections: [
      {
        title: "Fuori cottura",
        items: [
          { name: "Gorgonzola fuori cottura", price: "€6,50 a persona" },
          { name: "Stracchino fuori cottura", price: "€6,50 a persona" },
          {
            name: "Prosciutto crudo fuori cottura",
            price: "€7,50 a persona",
          },
          { name: "Lardo fuori cottura", price: "€7,50 a persona" },
        ],
      },
      {
        title: "In cottura (minimo per due persone)",
        items: [
          { name: "Fontina e gorgonzola", price: "€6,50 a persona" },
          {
            name: "Gorgonzola e salsiccia in cottura",
            price: "€6,50 a persona",
          },
          { name: "Salamino in cottura", price: "€6,50 a persona" },
          { name: "Rosmarino in cottura", price: "€6,50 a persona" },
          { name: "Cipolla in cottura", price: "€6,50 a persona" },
          { name: "Zucchine in cottura", price: "€6,50 a persona" },
          {
            name: "Grana e basilico in cottura",
            price: "€6,50 a persona",
          },
          {
            name: "Farinata Farcita teglia per 6 persone",
            price: "€30",
          },
        ],
      },
    ],
  },
  {
    id: "chiacchiere",
    title: "Chiacchiere",
    description: "Piccoli bocconcini di pizza fritta con:",
    items: [
      {
        name: "Bufala, crudo Parma, pomodorini, olive",
        price: "€16,00",
      },
      {
        name: "Burrata, crudo Parma, pomodorini, olive",
        price: "€18,00",
      },
      {
        name: "Tagliere salumi o formaggi o misto",
        price: "€18,00",
      },
    ],
  },
  {
    id: "pizze-classiche",
    title: "Pizze Classiche",
    note: "Impasto maturato per almeno 24 ore, portato a completa maturazione. Impasto integrale ricco di fibre disponibile per €2 in più",
    dualPrice: true,
    dualPriceLabels: ["Tegamino", "Mattone"],
    items: [
      {
        name: "Margerita",
        description: "Pomodoro, mozzarella",
        priceTegamino: "€6,00",
        priceMattone: "€6,50",
      },
      {
        name: "Margherita di bufala",
        description: "Pomodoro, mozzarella di bufala",
        priceTegamino: "€7,50",
        priceMattone: "€8,50",
      },
      {
        name: "Napoli",
        description: "Pomodoro, mozzarella, acciughe",
        priceTegamino: "€7,50",
        priceMattone: "€8,00",
      },
      {
        name: "Prosciutto",
        description: "Pomodoro, mozzarella, prosciutto cotto",
        priceTegamino: "€7,50",
        priceMattone: "€8,00",
      },
      {
        name: "Würstel",
        description: "Pomodoro, mozzarella, wurstel",
        priceTegamino: "€7,50",
        priceMattone: "€8,00",
      },
      {
        name: "Diavola",
        description: "Pomodoro, mozzarella, salamino piccante",
        priceTegamino: "€8,00",
        priceMattone: "€9,00",
      },
      {
        name: "Quattro Stagioni",
        description:
          "Pomodoro, mozzarella, olive, prosciutto, carciofini, funghi",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Formaggi",
        description:
          "Pomodoro, mozzarella, fontina, gorgonzola, emmentaler",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Greca",
        description: "Pomodoro, mozzarella, olive",
        priceTegamino: "€7,50",
        priceMattone: "€8,00",
      },
      {
        name: "Vegetariana",
        description:
          "Pomodoro, mozzarella, carciofi, melanzane e zucchine",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Biancaneve",
        description: "Mozzarella",
        priceTegamino: "€6,00",
        priceMattone: "€6,00",
      },
      {
        name: "Marinara",
        description: "Pomodoro, acciughe, aglio",
        priceTegamino: "€7,00",
        priceMattone: "€7,50",
      },
      {
        name: "Bismarck",
        description: "Pomodoro, mozzarella, prosciutto, uovo",
        priceTegamino: "€9,50",
        priceMattone: "€9,50",
      },
    ],
  },
  {
    id: "pizze-speciali",
    title: "Pizze Speciali",
    note: "Impasto maturato per almeno 24 ore, portato a completa maturazione. Impasto integrale ricco di fibre disponibile per €2 in più",
    dualPrice: true,
    dualPriceLabels: ["Tegamino", "Mattone"],
    items: [
      {
        name: "Linea 1",
        description: "Pomodoro, mozzarella, wurstel, patatine*",
        priceTegamino: "€8,00",
        priceMattone: "€9,00",
      },
      {
        name: "Linea 4",
        description: "Pomodoro, mozzarella, salsiccia, gorgonzola",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 6",
        description: "Pomodoro, mozzarella, stracchino, rucola fuori cottura",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 15",
        description: "Pomodoro, mozzarella, gorgonzola, cipolle",
        priceTegamino: "€8,00",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 16",
        description: "Mozzarella, cipolle, olive, acciughe",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 18",
        description: "Mozzarella di bufala, mortadella (fuori cottura), pistacchi",
        price: "€12,50",
      },
      {
        name: "Linea 21",
        description: "Mozzarella, Scamorza, pomodorini gialli, salsiccia",
        price: "€12,00",
      },
      {
        name: "Linea 43",
        description:
          "Pomodoro, mozz., gorgonzola, speck, radicchio e salsiccia",
        price: "€12,00",
      },
      {
        name: "Linea 45",
        description: "Pomodoro, mozzarella, speck, brie",
        priceTegamino: "€8,50",
        priceMattone: "€9,00",
      },
      {
        name: "Linea 46",
        description:
          "Mozzarella o stracchino, rucola, bresaola fuori cottura",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 53",
        description:
          "Mozzarella di bufala, tonno, pomodori secchi, olive taggiasche",
        price: "€12,00",
      },
      {
        name: "Linea 55",
        description: "Pomodoro, mozzarella, prosciutto cotto, funghi",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 56 (Rossa o Bianca)",
        description:
          "Pomodoro, mozzarella, salsiccia, friarielli",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 57",
        description:
          "Pomodoro, mozzarella, prosciutto cotto, fontina",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 61",
        description:
          "Mozzarella, salsiccia, rucola, Parmigiano a scaglie",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 66",
        description: "Pomodoro, mozzarella, tonno, cipolla",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 67",
        description: "Pomodoro, mozzarella, tonno, carciofini",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 71",
        description: "Mozzarella, gorgonzola, pere, noci",
        priceTegamino: "€10,00",
        priceMattone: "€11,00",
      },
      {
        name: "Linea 73",
        description:
          "Stracchino, pomodorini fuori cottura, olive",
        priceTegamino: "€8,00",
        priceMattone: "€9,00",
      },
      {
        name: "Linea 77",
        description:
          "Mozzarella, prosciutto crudo, gorgonzola, noci",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 78",
        description:
          "Pomodoro, bufala, prosciutto crudo, grana, rucola",
        priceTegamino: "€10,00",
        priceMattone: "€11,00",
      },
      {
        name: "Linea 10",
        description:
          "Base rossa, pomodorini gialli e rossi, stracciatella e speck fuori cottura",
        price: "€13,00",
      },
      {
        name: "Linea 52",
        description:
          "Base bianca, mozzarella fiordilatte, emulsione al basilico, olive taggiasche, patate lesse e pomodori secchi fuori cottura",
        price: "€13,00",
      },
    ],
  },
  {
    id: "focaccia",
    title: "Focaccia al Mattone",
    items: [
      {
        name: "Stracciatella e acciughe",
        price: "€12,00",
      },
      {
        name: "Lardo, miele e noci",
        price: "€12,00",
      },
      {
        name: "Crudo di Parma e bufala",
        price: "€14,00",
      },
      {
        name: "Burrata e crudo di Parma",
        price: "€14,00",
      },
      {
        name: "Focaccia primavera",
        description: "Fiordilatte, pomodorini, rucola",
        price: "€12,00",
      },
      {
        name: "Vegeteriana",
        description:
          "Pomodorini, fior di latte, zucchine, olio evo, origano, melanzane",
        price: "€12,00",
      },
    ],
  },
  {
    id: "calzoni",
    title: "Calzoni",
    items: [
      {
        name: "Calzone Italo",
        description:
          "Pomodoro, mozzarella fiordilatte, prosciutto cotto e pomodoro in crosta",
        price: "€11,00",
      },
      {
        name: "Calzone del Maestro",
        description:
          "Mozzarella fiordilatte, gorgonzola, fontina e parmigiano in crosta",
        price: "€11,00",
      },
    ],
  },
  {
    id: "aggiunte",
    title: "Aggiunte",
    items: [
      { name: "Rinforzo mozzarella", price: "€1,50" },
      { name: "Crudo/speck/bresaola/bufala", price: "€2,50" },
      { name: "Burrata", price: "€4,00" },
      { name: "Altro ingrediente", price: "€2,00" },
    ],
  },
  {
    id: "cucina",
    title: "Cucina",
    items: [
      {
        name: "Antipasto misto",
        description:
          "Battuta di vitello, bufaline, vitello tonnato",
        price: "€15,00",
      },
      {
        name: "Tagliere formaggi o affettati o misto",
        price: "€14,00",
      },
      {
        name: "Battuta di vitello, burrata, scaglie di grana, granelle di nocciola, rucola",
        price: "€16,00",
      },
      {
        name: "Battuta di vitello con misticanza e pomodorini",
        price: "€14,00",
      },
      {
        name: "Roast beef, sedano, grana, noci",
        price: "€13,00",
      },
      {
        name: "Bresaola, rucola e scaglie di grana",
        price: "€13,00",
      },
      {
        name: "Vitello tonnato",
        price: "€13,00",
      },
      {
        name: "Bufala Crudo di Parma e pomodorini",
        price: "€14,00",
      },
      {
        name: "Burrata Crudo di Parma e pomodorini",
        price: "€15,00",
      },
      {
        name: "Milanese di tacchino",
        description: "Patatine fritte* Insalata e pomodori",
        price: "€12,00",
      },
      {
        name: "Roastbeef con patate fritte*",
        price: "€14,00",
      },
      {
        name: "Patatine fritte*",
        price: "€5,00",
      },
    ],
  },
  {
    id: "insalate",
    title: "Insalate",
    items: [
      {
        name: "Insalata Mazzini",
        description:
          "Misticanza, bocconcini di Bufala, tonno, pomodorini, scaglie di grana, mais",
        price: "€12,00",
      },
      {
        name: "Insalata De Gasperi",
        description:
          "Bresaola, rucola, Bocconcini di bufala e gnocco fritto",
        price: "€13,00",
      },
      {
        name: "Insalata Milano",
        description:
          "Milanese di tacchino, pomodorini, scaglie di grana, misticanza",
        price: "€13,00",
      },
      {
        name: "Caprese con bufala",
        price: "€13,00",
      },
      {
        name: "Greca",
        description:
          "Feta, pomodori, cipolle, olive, peperoni, cetrioli",
        price: "€11,00",
      },
      {
        name: "Insalata Niçoise",
        description:
          "Insalata verde, pomodori, olive nere taggiasche, uova, patate, acciughe, tonno, cipolla, capperi.",
        price: "€12,00",
      },
      {
        name: "Proteica",
        description:
          "Fagioli, cipolle, uova sode, tonno, olive taggiasche",
        price: "€11,00",
      },
    ],
  },
  {
    id: "bimbi",
    title: "Per i Bimbi",
    items: [
      {
        name: "Menu Bimbo 1",
        description:
          "Milanese di tacchino, Patatine fritte, Bevanda, Gioco dolce",
        price: "€14,00",
      },
      {
        name: "Menu Bimbo 2",
        description:
          "Pizza baby (Margherita, cotto o wurstel), Bevanda, Gioco dolce",
        price: "€14,00",
      },
    ],
  },
  {
    id: "fine-corsa",
    title: "Fine Corsa",
    subsections: [
      {
        title: "Dolci",
        items: [
          { name: "Dolci alla carta", price: "€6,00" },
          { name: "Affogato al caffè", price: "€6,00" },
          {
            name: "Focaccia o Gnocco fritto alla crema di nocciola",
            description: "Consigliato per 2 persone",
            price: "€10,00",
          },
          { name: "Gelati alla carta", price: "€5,00" },
          { name: "Sorbetti alla carta", price: "€4,00" },
          {
            name: "Gioco dolce gelato per i bimbi",
            description:
              "Gelati di vari gusti all'interno di un pupazzetto",
            price: "€6,00",
          },
          { name: "Frutta", price: "€6,00" },
          { name: "Aggiunte di gelato", price: "€1,50" },
          { name: "Digestivi alla carta", price: "€4,00" },
        ],
      },
      {
        title: "Caffetteria",
        items: [
          {
            name: "Caffè",
            description: "espresso, dec, orzo",
            price: "€2,00",
          },
          { name: "Caffè doppio", price: "€3,50" },
          { name: "Caffè corretto", price: "€2,50" },
          { name: "Cappuccino", price: "€3,00" },
          { name: "The", price: "€3,00" },
        ],
      },
    ],
  },
];

export const copertoPrice = "€2,00";
