import type { MenuSection } from "./menu-data";

export const menuSectionsEN: MenuSection[] = [
  {
    id: "bevande",
    title: "Drinks",
    subsections: [
      {
        title: "Drinks",
        items: [
          { name: "Still or sparkling water", price: "€2,00" },
          {
            name: "Soft drinks",
            description:
              "Coca-Cola, Coca Cola Zero, Iced tea peach or lemon, Fanta, Sprite, Chinotto, Lemonsoda",
            price: "€3,50",
          },
          { name: "Spritz (Aperol, Campari, Hugo)", price: "€6,00" },
        ],
      },
      {
        title: "Draught Beverages",
        items: [
          {
            name: "Blonde draught beer",
            pricePiccola: "€4,00",
            priceMedia: "€5,50",
          },
          {
            name: "Red draught beer",
            pricePiccola: "€4,50",
            priceMedia: "€6,50",
          },
          {
            name: "Shandy blonde",
            pricePiccola: "€3,50",
            priceMedia: "€5,50",
          },
          {
            name: "Shandy red",
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
        title: "Bottled Beers",
        items: [
          { name: "Weiss 50cl", price: "€7,00" },
          { name: "Menabrea Amber 33cl", price: "€5,00" },
          { name: "Menabrea Blonde 33cl", price: "€5,00" },
          { name: "Ichnusa unfiltered 33cl", price: "€6,00" },
          { name: "Beers 33cl", price: "€5,00" },
        ],
      },
      {
        title: "Table Tap",
        items: [
          { name: "1 lt", priceBionda: "€14,00", priceRossa: "€17,00" },
          { name: "1,5 lt", priceBionda: "€21,00", priceRossa: "€25,00" },
          { name: "2 lt", priceBionda: "€27,00", priceRossa: "€32,00" },
          { name: "2,5 lt", priceBionda: "€30,00", priceRossa: "€36,00" },
          { name: "3 lt", priceBionda: "€34,00", priceRossa: "€41,00" },
        ],
      },
      {
        title: "Red Wine",
        items: [
          { name: "Wine bottle 0.75l", price: "€15,00" },
          { name: "Wine bottle 0.75l", price: "€20,00" },
          { name: "House wine 1/4 lt", price: "€5,00" },
          { name: "House wine 1/2 lt", price: "€7,00" },
          { name: "Glass", price: "€5,00" },
        ],
      },
      {
        title: "White Wine",
        items: [
          { name: "Wine bottle 0.75l", price: "€14,00" },
          { name: "Wine bottle 0.75l", price: "€16,00" },
          { name: "House wine 1/4 lt", price: "€5,00" },
          { name: "House wine 1/2 lt", price: "€7,00" },
          { name: "Glass", price: "€5,00" },
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
      { name: "Singola porzione", price: "€5,00" },
      { name: "Doppia porzione", price: "€9,00" },
      { name: "Teglia per 6 persone", price: "€25,00" },
    ],
  },
  {
    id: "farinata-farcita",
    title: "Stuffed Farinata",
    description:
      "Chickpea flour, water, salt, peanut oil accompanied during or after baking with selected ingredients",
    subsections: [
      {
        title: "Cold Toppings",
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
        title: "Baked toppings (minimum for two people)",
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
    description: "Small bites of fried pizza dough with:",
    items: [
      {
        name: "Bufala, crudo Parma, pomodorini, olive",
        description: "Buffalo mozzarella, Parma ham, cherry tomatoes, olives",
        price: "€16,00",
      },
      {
        name: "Burrata, crudo Parma, pomodorini, olive",
        description: "Burrata, Parma ham, cherry tomatoes, olives",
        price: "€18,00",
      },
      {
        name: "Tagliere salumi o formaggi o misto",
        description: "Cured meats, cheese, or mixed board",
        price: "€18,00",
      },
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
        name: "Margerita",
        description: "Tomato, mozzarella",
        priceTegamino: "€6,00",
        priceMattone: "€6,50",
      },
      {
        name: "Margherita di bufala",
        description: "Tomato, buffalo mozzarella",
        priceTegamino: "€7,50",
        priceMattone: "€8,50",
      },
      {
        name: "Napoli",
        description: "Tomato, mozzarella, anchovies",
        priceTegamino: "€7,50",
        priceMattone: "€8,00",
      },
      {
        name: "Prosciutto",
        description: "Tomato, mozzarella, cooked ham",
        priceTegamino: "€7,50",
        priceMattone: "€8,00",
      },
      {
        name: "Würstel",
        description: "Tomato, mozzarella, frankfurter",
        priceTegamino: "€7,50",
        priceMattone: "€8,00",
      },
      {
        name: "Diavola",
        description: "Tomato, mozzarella, spicy salami",
        priceTegamino: "€8,00",
        priceMattone: "€9,00",
      },
      {
        name: "Quattro Stagioni",
        description:
          "Tomato, mozzarella, olives, ham, artichokes, mushrooms",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Formaggi",
        description:
          "Tomato, mozzarella, fontina, gorgonzola, emmentaler",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Greca",
        description: "Tomato, mozzarella, olives",
        priceTegamino: "€7,50",
        priceMattone: "€8,00",
      },
      {
        name: "Vegetariana",
        description:
          "Tomato, mozzarella, artichokes, aubergine and courgettes",
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
        description: "Tomato, anchovies, garlic",
        priceTegamino: "€7,00",
        priceMattone: "€7,50",
      },
      {
        name: "Bismarck",
        description: "Tomato, mozzarella, ham, egg",
        priceTegamino: "€9,50",
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
        name: "Linea 1",
        description: "Tomato, mozzarella, frankfurter, fries*",
        priceTegamino: "€8,00",
        priceMattone: "€9,00",
      },
      {
        name: "Linea 4",
        description: "Tomato, mozzarella, sausage, gorgonzola",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 6",
        description: "Tomato, mozzarella, stracchino, rocket cold topping",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 15",
        description: "Tomato, mozzarella, gorgonzola, onions",
        priceTegamino: "€8,00",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 16",
        description: "Mozzarella, onions, olives, anchovies",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 18",
        description: "Buffalo mozzarella, mortadella (cold topping), pistachios",
        price: "€12,50",
      },
      {
        name: "Linea 21",
        description: "Mozzarella, Scamorza, yellow cherry tomatoes, sausage",
        price: "€12,00",
      },
      {
        name: "Linea 43",
        description:
          "Tomato, mozz., gorgonzola, speck, radicchio and sausage",
        price: "€12,00",
      },
      {
        name: "Linea 45",
        description: "Tomato, mozzarella, speck, brie",
        priceTegamino: "€8,50",
        priceMattone: "€9,00",
      },
      {
        name: "Linea 46",
        description:
          "Mozzarella or stracchino, rocket, bresaola added after baking",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 53",
        description:
          "Buffalo mozzarella, tuna, sun-dried tomatoes, Taggiasca olives",
        price: "€12,00",
      },
      {
        name: "Linea 55",
        description: "Tomato, mozzarella, cooked ham, mushrooms",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 56 (Rossa o Bianca)",
        description:
          "Tomato, mozzarella, sausage, friarielli",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 57",
        description:
          "Tomato, mozzarella, cooked ham, fontina",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 61",
        description:
          "Mozzarella, sausage, rocket, shaved Parmigiano",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 66",
        description: "Tomato, mozzarella, tuna, onion",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 67",
        description: "Tomato, mozzarella, tuna, artichokes",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 71",
        description: "Mozzarella, gorgonzola, pears, walnuts",
        priceTegamino: "€10,00",
        priceMattone: "€11,00",
      },
      {
        name: "Linea 73",
        description:
          "Stracchino, cherry tomatoes added after baking, olives",
        priceTegamino: "€8,00",
        priceMattone: "€9,00",
      },
      {
        name: "Linea 77",
        description:
          "Mozzarella, prosciutto crudo, gorgonzola, walnuts",
        priceTegamino: "€8,50",
        priceMattone: "€9,50",
      },
      {
        name: "Linea 78",
        description:
          "Tomato, buffalo mozzarella, prosciutto crudo, grana, rocket",
        priceTegamino: "€10,00",
        priceMattone: "€11,00",
      },
      {
        name: "Linea 10",
        description:
          "Red base, yellow and red cherry tomatoes, stracciatella and speck cold topping",
        price: "€13,00",
      },
      {
        name: "Linea 52",
        description:
          "White base, fiordilatte mozzarella, basil emulsion, Taggiasca olives, boiled potatoes and sun-dried tomatoes cold topping",
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
        description: "Stracciatella cheese and anchovies",
        price: "€12,00",
      },
      {
        name: "Lardo, miele e noci",
        description: "Lard, honey and walnuts",
        price: "€12,00",
      },
      {
        name: "Crudo di Parma e bufala",
        description: "Parma ham and buffalo mozzarella",
        price: "€14,00",
      },
      {
        name: "Burrata e crudo di Parma",
        description: "Burrata and Parma ham",
        price: "€14,00",
      },
      {
        name: "Focaccia primavera",
        description: "Fiordilatte, cherry tomatoes, rocket",
        price: "€12,00",
      },
      {
        name: "Vegeteriana",
        description:
          "Cherry tomatoes, fiordilatte, courgettes, extra virgin olive oil, oregano, aubergine",
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
          "Tomato, fiordilatte mozzarella, cooked ham and tomato in crust",
        price: "€11,00",
      },
      {
        name: "Calzone del Maestro",
        description:
          "Fiordilatte mozzarella, gorgonzola, fontina and Parmigiano in crust",
        price: "€11,00",
      },
    ],
  },
  {
    id: "aggiunte",
    title: "Extras",
    items: [
      { name: "Rinforzo mozzarella", description: "Extra mozzarella", price: "€1,50" },
      { name: "Crudo/speck/bresaola/bufala", price: "€2,50" },
      { name: "Burrata", price: "€4,00" },
      { name: "Altro ingrediente", description: "Other ingredient", price: "€2,00" },
    ],
  },
  {
    id: "cucina",
    title: "Kitchen",
    items: [
      {
        name: "Antipasto misto",
        description:
          "Veal tartare, buffalo mozzarella bites, vitello tonnato",
        price: "€15,00",
      },
      {
        name: "Tagliere formaggi o affettati o misto",
        description: "Cheese, cured meats, or mixed board",
        price: "€14,00",
      },
      {
        name: "Battuta di vitello, burrata, scaglie di grana, granelle di nocciola, rucola",
        description: "Veal tartare, burrata, grana shavings, hazelnut crumble, rocket",
        price: "€16,00",
      },
      {
        name: "Battuta di vitello con misticanza e pomodorini",
        description: "Veal tartare with mixed greens and cherry tomatoes",
        price: "€14,00",
      },
      {
        name: "Roast beef, sedano, grana, noci",
        description: "Roast beef, celery, grana, walnuts",
        price: "€13,00",
      },
      {
        name: "Bresaola, rucola e scaglie di grana",
        description: "Bresaola, rocket and grana shavings",
        price: "€13,00",
      },
      {
        name: "Vitello tonnato",
        description: "Veal with tuna sauce",
        price: "€13,00",
      },
      {
        name: "Bufala Crudo di Parma e pomodorini",
        description: "Buffalo mozzarella, Parma ham and cherry tomatoes",
        price: "€14,00",
      },
      {
        name: "Burrata Crudo di Parma e pomodorini",
        description: "Burrata, Parma ham and cherry tomatoes",
        price: "€15,00",
      },
      {
        name: "Milanese di tacchino",
        description: "Fries* Salad and tomatoes",
        price: "€12,00",
      },
      {
        name: "Roastbeef con patate fritte*",
        description: "Roast beef with French fries*",
        price: "€14,00",
      },
      {
        name: "Patatine fritte*",
        description: "French fries*",
        price: "€5,00",
      },
    ],
  },
  {
    id: "insalate",
    title: "Salads",
    items: [
      {
        name: "Insalata Mazzini",
        description:
          "Mixed greens, buffalo mozzarella bites, tuna, cherry tomatoes, grana shavings, corn",
        price: "€12,00",
      },
      {
        name: "Insalata De Gasperi",
        description:
          "Bresaola, rocket, buffalo mozzarella bites and fried dough",
        price: "€13,00",
      },
      {
        name: "Insalata Milano",
        description:
          "Turkey cutlet Milanese-style, cherry tomatoes, grana shavings, mixed greens",
        price: "€13,00",
      },
      {
        name: "Caprese con bufala",
        description: "Caprese with buffalo mozzarella",
        price: "€13,00",
      },
      {
        name: "Greca",
        description:
          "Feta, tomatoes, onions, olives, peppers, cucumbers",
        price: "€11,00",
      },
      {
        name: "Insalata Niçoise",
        description:
          "Green salad, tomatoes, Taggiasca black olives, eggs, potatoes, anchovies, tuna, onion, capers",
        price: "€12,00",
      },
      {
        name: "Proteica",
        description:
          "Beans, onions, hard-boiled eggs, tuna, Taggiasca olives",
        price: "€11,00",
      },
    ],
  },
  {
    id: "bimbi",
    title: "Kids' Menu",
    items: [
      {
        name: "Menu Bimbo 1",
        description:
          "Turkey cutlet Milanese-style, French fries, drink, sweet toy",
        price: "€14,00",
      },
      {
        name: "Menu Bimbo 2",
        description:
          "Baby pizza (Margherita, ham or frankfurter), drink, sweet toy",
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
          { name: "Dolci alla carta", description: "Desserts from the menu", price: "€6,00" },
          { name: "Affogato al caffè", description: "Ice cream drowned in espresso", price: "€6,00" },
          {
            name: "Focaccia o Gnocco fritto alla crema di nocciola",
            description: "Focaccia or fried dough with hazelnut cream — recommended for 2 people",
            price: "€10,00",
          },
          { name: "Gelati alla carta", description: "Ice cream from the menu", price: "€5,00" },
          { name: "Sorbetti alla carta", description: "Sorbets from the menu", price: "€4,00" },
          {
            name: "Gioco dolce gelato per i bimbi",
            description:
              "Assorted ice cream flavours inside a toy figure",
            price: "€6,00",
          },
          { name: "Frutta", description: "Fruit", price: "€6,00" },
          { name: "Aggiunte di gelato", description: "Extra scoop of ice cream", price: "€1,50" },
          { name: "Digestivi alla carta", description: "Digestifs from the menu", price: "€4,00" },
        ],
      },
      {
        title: "Coffee",
        items: [
          {
            name: "Caffè",
            description: "Espresso, decaf, barley coffee",
            price: "€2,00",
          },
          { name: "Caffè doppio", description: "Double espresso", price: "€3,50" },
          { name: "Caffè corretto", description: "Espresso with a shot of liquor", price: "€2,50" },
          { name: "Cappuccino", price: "€3,00" },
          { name: "The", description: "Tea", price: "€3,00" },
        ],
      },
    ],
  },
];

export const copertoPriceEN = "€2,00";
