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
          { name: "Acqua naturale/frizzante", price: "€2,00" },
          { name: "Coca Cola/Fanta/Sprite", price: "€3,00" },
          { name: "Coca Cola Zero", price: "€3,00" },
          { name: "Chinotto", price: "€3,00" },
          { name: "Thè pesca/limone", price: "€3,00" },
          { name: "Succo di frutta", price: "€2,50" },
          { name: "Aranciata/Limonata San Pellegrino", price: "€3,50" },
        ],
      },
      {
        title: "Bevande alla Spina",
        items: [
          { name: "Coca Cola", pricePiccola: "€2,50", priceMedia: "€4,00" },
          { name: "Fanta", pricePiccola: "€2,50", priceMedia: "€4,00" },
          { name: "Birra Bionda", pricePiccola: "€2,50", priceMedia: "€5,00" },
          { name: "Birra Rossa", pricePiccola: "€3,00", priceMedia: "€5,50" },
        ],
      },
      {
        title: "Birre in Bottiglia",
        items: [
          { name: "Moretti 66cl", price: "€5,00" },
          { name: "Ichnusa 50cl", price: "€4,50" },
          { name: "Corona 33cl", price: "€4,00" },
          { name: "Peroni Chill Lemon 33cl", price: "€4,00" },
        ],
      },
      {
        title: "Spillatore da Tavolo",
        items: [
          { name: "2 Litri", priceBionda: "€13,00", priceRossa: "€15,00" },
          { name: "3 Litri", priceBionda: "€18,00", priceRossa: "€21,00" },
        ],
      },
      {
        title: "Vino Rosso",
        items: [
          {
            name: "Barbera d'Asti DOC",
            description: "bicchiere €3,50 — bottiglia €14,00",
          },
          {
            name: "Dolcetto d'Alba DOC",
            description: "bicchiere €4,00 — bottiglia €16,00",
          },
        ],
      },
      {
        title: "Vino Bianco",
        items: [
          {
            name: "Roero Arneis DOCG",
            description: "bicchiere €4,00 — bottiglia €16,00",
          },
          {
            name: "Gavi DOCG",
            description: "bicchiere €4,50 — bottiglia €18,00",
          },
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
      { name: "Singola", price: "€5,00" },
      { name: "Doppia", price: "€9,00" },
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
          { name: "Gorgonzola", price: "€6,50" },
          { name: "Stracchino", price: "€6,50" },
          { name: "Prosciutto crudo", price: "€7,50" },
          { name: "Lardo", price: "€7,50" },
        ],
      },
      {
        title: "MINIMO PER DUE PERSONE",
        items: [
          { name: "Cipolla", price: "€6,50" },
          { name: "Rosmarino", price: "€6,50" },
          { name: "Peperoni", price: "€6,50" },
          { name: "Salsiccia", price: "€6,50" },
          { name: "Bianchetti", price: "€6,50" },
        ],
      },
      {
        title: "Teglia",
        items: [
          { name: "Teglia per 6 persone", price: "€30,00" },
        ],
      },
    ],
  },
  {
    id: "chiacchiere",
    title: "Chiacchiere",
    description: "Piccoli bocconcini di pizza fritta con:",
    items: [
      { name: "Nutella", price: "€5,00" },
      { name: "Gorgonzola", price: "€5,50" },
      { name: "Prosciutto cotto e mozzarella", price: "€6,00" },
      { name: "Salame e stracchino", price: "€6,00" },
      { name: "Pomodoro, mozzarella e basilico", price: "€5,50" },
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
        name: "Margherita",
        description: "pomodoro, mozzarella",
        priceTegamino: "€6,00",
        priceMattone: "€7,50",
      },
      {
        name: "Napoli",
        description: "pomodoro, mozzarella, acciughe",
        priceTegamino: "€7,00",
        priceMattone: "€8,50",
      },
      {
        name: "Romana",
        description: "pomodoro, mozzarella, acciughe, capperi",
        priceTegamino: "€7,50",
        priceMattone: "€9,00",
      },
      {
        name: "Prosciutto",
        description: "pomodoro, mozzarella, prosciutto cotto",
        priceTegamino: "€7,00",
        priceMattone: "€8,50",
      },
      {
        name: "Funghi",
        description: "pomodoro, mozzarella, funghi",
        priceTegamino: "€7,00",
        priceMattone: "€8,50",
      },
      {
        name: "Prosciutto e funghi",
        description: "pomodoro, mozzarella, prosciutto cotto, funghi",
        priceTegamino: "€7,50",
        priceMattone: "€9,00",
      },
      {
        name: "Quattro stagioni",
        description: "pomodoro, mozzarella, prosciutto, funghi, carciofi, olive",
        priceTegamino: "€8,00",
        priceMattone: "€9,50",
      },
      {
        name: "Capricciosa",
        description:
          "pomodoro, mozzarella, prosciutto, funghi, carciofi, olive, uovo",
        priceTegamino: "€8,50",
        priceMattone: "€10,00",
      },
      {
        name: "Diavola",
        description: "pomodoro, mozzarella, salame piccante",
        priceTegamino: "€7,50",
        priceMattone: "€9,00",
      },
      {
        name: "Tonno",
        description: "pomodoro, mozzarella, tonno, cipolla",
        priceTegamino: "€8,00",
        priceMattone: "€9,50",
      },
      {
        name: "Salsiccia",
        description: "pomodoro, mozzarella, salsiccia",
        priceTegamino: "€7,50",
        priceMattone: "€9,00",
      },
      {
        name: "Quattro formaggi",
        description: "mozzarella, gorgonzola, fontina, parmigiano",
        priceTegamino: "€8,50",
        priceMattone: "€10,00",
      },
      {
        name: "Bismarck",
        description: "pomodoro, mozzarella, prosciutto, uovo",
        priceTegamino: "€8,00",
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
        name: "Linea 18 — La Torinese",
        description: "pomodoro, mozzarella, peperoni, salsiccia, cipolla",
        priceTegamino: "€9,00",
        priceMattone: "€10,50",
      },
      {
        name: "Linea 21 — La Montanara",
        description: "mozzarella, patate, salsiccia, rosmarino",
        priceTegamino: "€9,00",
        priceMattone: "€10,50",
      },
      {
        name: "Linea 43 — La Fermata",
        description:
          "pomodoro, mozzarella, crudo, rucola, parmigiano, pomodorini",
        priceTegamino: "€9,50",
        priceMattone: "€11,00",
      },
      {
        name: "Linea 53 — La Golosa",
        description: "mozzarella, gorgonzola, speck, noci",
        priceTegamino: "€9,50",
        priceMattone: "€11,00",
      },
      {
        name: "Linea Verde",
        description: "mozzarella, zucchine, pomodorini, rucola",
        price: "€9,00",
      },
      {
        name: "Linea Mare",
        description: "pomodoro, mozzarella, tonno, gamberetti, rucola",
        price: "€10,00",
      },
    ],
  },
  {
    id: "focaccia",
    title: "Focaccia al Mattone",
    items: [
      {
        name: "Focaccia classica",
        description: "olio, sale, rosmarino",
        price: "€5,00",
      },
      {
        name: "Focaccia pomodoro e origano",
        price: "€5,50",
      },
      {
        name: "Focaccia prosciutto crudo e stracchino",
        price: "€8,00",
      },
      {
        name: "Focaccia speck e brie",
        price: "€8,50",
      },
      {
        name: "Focaccia tonno, pomodorini e rucola",
        price: "€8,00",
      },
    ],
  },
  {
    id: "calzoni",
    title: "Calzoni",
    items: [
      {
        name: "Calzone classico",
        description: "prosciutto cotto, mozzarella",
        price: "€8,00",
      },
      {
        name: "Calzone farcito",
        description: "prosciutto, funghi, mozzarella, ricotta",
        price: "€9,00",
      },
      {
        name: "Calzone speciale",
        description: "salsiccia, friarielli, provola",
        price: "€9,50",
      },
    ],
  },
  {
    id: "aggiunte",
    title: "Aggiunte",
    items: [
      { name: "Mozzarella di bufala", price: "€2,50" },
      { name: "Prosciutto crudo", price: "€2,00" },
      { name: "Verdure grigliate", price: "€2,00" },
      { name: "Uovo", price: "€1,00" },
      { name: "Olive", price: "€1,00" },
      { name: "Capperi", price: "€1,00" },
      { name: "Acciughe", price: "€1,50" },
      { name: "Gorgonzola", price: "€1,50" },
      { name: "Patatine fritte", price: "€3,50" },
    ],
  },
  {
    id: "cucina",
    title: "Cucina",
    items: [
      { name: "Patatine fritte", price: "€4,00" },
      { name: "Tagliere salumi misti", price: "€10,00" },
      { name: "Tagliere formaggi misti", price: "€10,00" },
      { name: "Bruschette miste (4 pz)", price: "€6,00" },
      { name: "Supplì (3 pz)", price: "€5,00" },
      { name: "Crocchette di patate (4 pz)", price: "€5,00" },
    ],
  },
  {
    id: "insalate",
    title: "Insalate",
    items: [
      { name: "Insalata verde", price: "€4,00" },
      { name: "Insalata mista", price: "€5,00" },
      {
        name: "Insalatona con tonno, mais, pomodorini",
        price: "€7,50",
      },
      {
        name: "Insalatona con pollo, pomodorini, parmigiano",
        price: "€8,00",
      },
    ],
  },
  {
    id: "bimbi",
    title: "Per i Bimbi",
    items: [
      {
        name: "Menu Bimbo A",
        description: "Pizza margherita tegamino + patatine + bibita",
        price: "€14,00",
      },
      {
        name: "Menu Bimbo B",
        description: "Cotoletta + patatine + bibita",
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
          { name: "Tiramisù", price: "€5,00" },
          { name: "Panna cotta", price: "€4,50" },
          { name: "Torta del giorno", price: "€5,00" },
          {
            name: "Nutellone",
            description: "pizza dolce con Nutella",
            price: "€5,50",
          },
        ],
      },
      {
        title: "Gelati",
        items: [
          { name: "Coppa gelato (2 gusti)", price: "€4,00" },
          { name: "Affogato al caffè", price: "€4,50" },
          { name: "Tartufo", price: "€5,00" },
        ],
      },
      {
        title: "Caffetteria",
        items: [
          { name: "Caffè", price: "€1,50" },
          { name: "Caffè decaffeinato", price: "€1,50" },
          { name: "Caffè corretto", price: "€2,50" },
          { name: "Cappuccino", price: "€2,50" },
          { name: "Marocchino", price: "€3,00" },
        ],
      },
      {
        title: "Digestivi",
        items: [
          { name: "Amaro del Capo", price: "€3,50" },
          { name: "Limoncello", price: "€3,50" },
          { name: "Grappa", price: "€3,50" },
          { name: "Mirto", price: "€3,50" },
        ],
      },
    ],
  },
];

export const copertoPrice = "€2,00";
