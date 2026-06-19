import type { MenuSection } from "./menu-data";

export const menuSectionsEN: MenuSection[] = [
  {
    id: "bevande",
    title: "Drinks",
    subsections: [
      {
        title: "Soft Drinks",
        items: [
          { name: "Still/Sparkling Water", price: "€2,00" },
          { name: "Coca Cola/Fanta/Sprite", price: "€3,00" },
          { name: "Coca Cola Zero", price: "€3,00" },
          { name: "Chinotto", price: "€3,00" },
          { name: "Iced Tea (peach/lemon)", price: "€3,00" },
          { name: "Fruit Juice", price: "€2,50" },
          { name: "San Pellegrino Orangeade/Lemonade", price: "€3,50" },
        ],
      },
      {
        title: "Draught Beverages",
        items: [
          { name: "Coca Cola", pricePiccola: "€2,50", priceMedia: "€4,00" },
          { name: "Fanta", pricePiccola: "€2,50", priceMedia: "€4,00" },
          { name: "Blonde Beer", pricePiccola: "€2,50", priceMedia: "€5,00" },
          { name: "Red Beer", pricePiccola: "€3,00", priceMedia: "€5,50" },
        ],
      },
      {
        title: "Bottled Beers",
        items: [
          { name: "Moretti 66cl", price: "€5,00" },
          { name: "Ichnusa 50cl", price: "€4,50" },
          { name: "Corona 33cl", price: "€4,00" },
          { name: "Peroni Chill Lemon 33cl", price: "€4,00" },
        ],
      },
      {
        title: "Table Tap",
        items: [
          { name: "2 Litres", priceBionda: "€13,00", priceRossa: "€15,00" },
          { name: "3 Litres", priceBionda: "€18,00", priceRossa: "€21,00" },
        ],
      },
      {
        title: "Red Wine",
        items: [
          {
            name: "Barbera d'Asti DOC",
            description: "glass €3,50 — bottle €14,00",
          },
          {
            name: "Dolcetto d'Alba DOC",
            description: "glass €4,00 — bottle €16,00",
          },
        ],
      },
      {
        title: "White Wine",
        items: [
          {
            name: "Roero Arneis DOCG",
            description: "glass €4,00 — bottle €16,00",
          },
          {
            name: "Gavi DOCG",
            description: "glass €4,50 — bottle €18,00",
          },
        ],
      },
    ],
  },
  {
    id: "farinata-classica",
    title: "Classic Farinata",
    description:
      "Chickpea flour, water, salt, peanut oil",
    items: [
      { name: "Single", price: "€5,00" },
      { name: "Double", price: "€9,00" },
      { name: "Tray for 6 people", price: "€25,00" },
    ],
  },
  {
    id: "farinata-farcita",
    title: "Stuffed Farinata",
    description:
      "Chickpea flour, water, salt, peanut oil accompanied with selected ingredients",
    subsections: [
      {
        title: "Cold toppings",
        items: [
          { name: "Gorgonzola", price: "€6,50" },
          { name: "Stracchino", price: "€6,50" },
          { name: "Prosciutto crudo", price: "€7,50" },
          { name: "Lard", price: "€7,50" },
        ],
      },
      {
        title: "MINIMUM FOR TWO PEOPLE",
        items: [
          { name: "Onion", price: "€6,50" },
          { name: "Rosemary", price: "€6,50" },
          { name: "Peppers", price: "€6,50" },
          { name: "Sausage", price: "€6,50" },
          { name: "Whitebait", price: "€6,50" },
        ],
      },
      {
        title: "Tray",
        items: [
          { name: "Tray for 6 people", price: "€30,00" },
        ],
      },
    ],
  },
  {
    id: "chiacchiere",
    title: "Chiacchiere",
    description: "Small bites of fried pizza dough with:",
    items: [
      { name: "Nutella", price: "€5,00" },
      { name: "Gorgonzola", price: "€5,50" },
      { name: "Ham and mozzarella", price: "€6,00" },
      { name: "Salami and stracchino", price: "€6,00" },
      { name: "Tomato, mozzarella and basil", price: "€5,50" },
    ],
  },
  {
    id: "pizze-classiche",
    title: "Classic Pizzas",
    note: "Dough aged for at least 24 hours, brought to full maturation. Wholemeal dough rich in fibre available for €2 extra",
    dualPrice: true,
    dualPriceLabels: ["Tegamino", "Mattone"],
    items: [
      {
        name: "Margherita",
        description: "tomato, mozzarella",
        priceTegamino: "€6,00",
        priceMattone: "€7,50",
      },
      {
        name: "Napoli",
        description: "tomato, mozzarella, anchovies",
        priceTegamino: "€7,00",
        priceMattone: "€8,50",
      },
      {
        name: "Romana",
        description: "tomato, mozzarella, anchovies, capers",
        priceTegamino: "€7,50",
        priceMattone: "€9,00",
      },
      {
        name: "Prosciutto",
        description: "tomato, mozzarella, cooked ham",
        priceTegamino: "€7,00",
        priceMattone: "€8,50",
      },
      {
        name: "Funghi",
        description: "tomato, mozzarella, mushrooms",
        priceTegamino: "€7,00",
        priceMattone: "€8,50",
      },
      {
        name: "Prosciutto e funghi",
        description: "tomato, mozzarella, cooked ham, mushrooms",
        priceTegamino: "€7,50",
        priceMattone: "€9,00",
      },
      {
        name: "Quattro stagioni",
        description: "tomato, mozzarella, ham, mushrooms, artichokes, olives",
        priceTegamino: "€8,00",
        priceMattone: "€9,50",
      },
      {
        name: "Capricciosa",
        description:
          "tomato, mozzarella, ham, mushrooms, artichokes, olives, egg",
        priceTegamino: "€8,50",
        priceMattone: "€10,00",
      },
      {
        name: "Diavola",
        description: "tomato, mozzarella, spicy salami",
        priceTegamino: "€7,50",
        priceMattone: "€9,00",
      },
      {
        name: "Tonno",
        description: "tomato, mozzarella, tuna, onion",
        priceTegamino: "€8,00",
        priceMattone: "€9,50",
      },
      {
        name: "Salsiccia",
        description: "tomato, mozzarella, sausage",
        priceTegamino: "€7,50",
        priceMattone: "€9,00",
      },
      {
        name: "Quattro formaggi",
        description: "mozzarella, gorgonzola, fontina, parmesan",
        priceTegamino: "€8,50",
        priceMattone: "€10,00",
      },
      {
        name: "Bismarck",
        description: "tomato, mozzarella, ham, egg",
        priceTegamino: "€8,00",
        priceMattone: "€9,50",
      },
    ],
  },
  {
    id: "pizze-speciali",
    title: "Specialty Pizzas",
    note: "Dough aged for at least 24 hours, brought to full maturation. Wholemeal dough rich in fibre available for €2 extra",
    dualPrice: true,
    dualPriceLabels: ["Tegamino", "Mattone"],
    items: [
      {
        name: "Linea 18 — La Torinese",
        description: "tomato, mozzarella, peppers, sausage, onion",
        priceTegamino: "€9,00",
        priceMattone: "€10,50",
      },
      {
        name: "Linea 21 — La Montanara",
        description: "mozzarella, potatoes, sausage, rosemary",
        priceTegamino: "€9,00",
        priceMattone: "€10,50",
      },
      {
        name: "Linea 43 — La Fermata",
        description:
          "tomato, mozzarella, prosciutto crudo, rocket, parmesan, cherry tomatoes",
        priceTegamino: "€9,50",
        priceMattone: "€11,00",
      },
      {
        name: "Linea 53 — La Golosa",
        description: "mozzarella, gorgonzola, speck, walnuts",
        priceTegamino: "€9,50",
        priceMattone: "€11,00",
      },
      {
        name: "Linea Verde",
        description: "mozzarella, courgettes, cherry tomatoes, rocket",
        price: "€9,00",
      },
      {
        name: "Linea Mare",
        description: "tomato, mozzarella, tuna, prawns, rocket",
        price: "€10,00",
      },
    ],
  },
  {
    id: "focaccia",
    title: "Focaccia al Mattone",
    items: [
      {
        name: "Classic Focaccia",
        description: "olive oil, salt, rosemary",
        price: "€5,00",
      },
      {
        name: "Focaccia with tomato and oregano",
        price: "€5,50",
      },
      {
        name: "Focaccia with prosciutto crudo and stracchino",
        price: "€8,00",
      },
      {
        name: "Focaccia with speck and brie",
        price: "€8,50",
      },
      {
        name: "Focaccia with tuna, cherry tomatoes and rocket",
        price: "€8,00",
      },
    ],
  },
  {
    id: "calzoni",
    title: "Calzoni",
    items: [
      {
        name: "Classic Calzone",
        description: "cooked ham, mozzarella",
        price: "€8,00",
      },
      {
        name: "Stuffed Calzone",
        description: "ham, mushrooms, mozzarella, ricotta",
        price: "€9,00",
      },
      {
        name: "Special Calzone",
        description: "sausage, broccoli rabe, provola cheese",
        price: "€9,50",
      },
    ],
  },
  {
    id: "aggiunte",
    title: "Extras",
    items: [
      { name: "Buffalo mozzarella", price: "€2,50" },
      { name: "Prosciutto crudo", price: "€2,00" },
      { name: "Grilled vegetables", price: "€2,00" },
      { name: "Egg", price: "€1,00" },
      { name: "Olives", price: "€1,00" },
      { name: "Capers", price: "€1,00" },
      { name: "Anchovies", price: "€1,50" },
      { name: "Gorgonzola", price: "€1,50" },
      { name: "French fries", price: "€3,50" },
    ],
  },
  {
    id: "cucina",
    title: "Kitchen",
    items: [
      { name: "French fries", price: "€4,00" },
      { name: "Mixed cured meats board", price: "€10,00" },
      { name: "Mixed cheese board", price: "€10,00" },
      { name: "Mixed bruschetta (4 pcs)", price: "€6,00" },
      { name: "Supplì — rice croquettes (3 pcs)", price: "€5,00" },
      { name: "Potato croquettes (4 pcs)", price: "€5,00" },
    ],
  },
  {
    id: "insalate",
    title: "Salads",
    items: [
      { name: "Green salad", price: "€4,00" },
      { name: "Mixed salad", price: "€5,00" },
      {
        name: "Large salad with tuna, corn, cherry tomatoes",
        price: "€7,50",
      },
      {
        name: "Large salad with chicken, cherry tomatoes, parmesan",
        price: "€8,00",
      },
    ],
  },
  {
    id: "bimbi",
    title: "Kids' Menu",
    items: [
      {
        name: "Kids' Menu A",
        description: "Margherita pizza tegamino + fries + soft drink",
        price: "€14,00",
      },
      {
        name: "Kids' Menu B",
        description: "Chicken cutlet + fries + soft drink",
        price: "€14,00",
      },
    ],
  },
  {
    id: "fine-corsa",
    title: "Last Stop",
    subsections: [
      {
        title: "Desserts",
        items: [
          { name: "Tiramisù", price: "€5,00" },
          { name: "Panna cotta", price: "€4,50" },
          { name: "Cake of the day", price: "€5,00" },
          {
            name: "Nutellone",
            description: "sweet pizza with Nutella",
            price: "€5,50",
          },
        ],
      },
      {
        title: "Ice Cream",
        items: [
          { name: "Ice cream cup (2 flavours)", price: "€4,00" },
          { name: "Affogato al caffè", price: "€4,50" },
          { name: "Tartufo", price: "€5,00" },
        ],
      },
      {
        title: "Coffee",
        items: [
          { name: "Espresso", price: "€1,50" },
          { name: "Decaf espresso", price: "€1,50" },
          { name: "Espresso corretto (with liquor)", price: "€2,50" },
          { name: "Cappuccino", price: "€2,50" },
          { name: "Marocchino", price: "€3,00" },
        ],
      },
      {
        title: "Digestifs",
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

export const copertoPriceEN = "€2,00";
