"use client";

import { Hero, ProductOverview, TextSection } from "@dejstdm/white-label-ui";
import type { ProductItem } from "@dejstdm/white-label-ui";

const classicProducts: ProductItem[] = [
  {
    id: "classic-salted",
    title: "Classic Salted",
    description: "<p>Our iconic potato chips: simple, crispy, and perfectly salted.</p>",
    image: "/Lays-2025-12-13/Products/LAY'S NATURE 135G.png",
    imageAlt: "Lay's Classic Salted chips",
    buttonLabel: "View product",
    buttonHref: "/products/classic-salted",
  },
  {
    id: "classic-bbq",
    title: "Barbecue",
    description: "<p>A bold, smoky Barbecue flavor for your favorite sharing moments.</p>",
    image: "/Lays-2025-12-13/Products/LAY'S BBQ 135G.png",
    imageAlt: "Lay's Barbecue chips",
    buttonLabel: "View product",
    buttonHref: "/products/barbecue",
  },
  {
    id: "classic-chicken",
    title: "Roast Chicken",
    description: "<p>Rich, savory flavor inspired by classic roast chicken.</p>",
    image: "/Lays-2025-12-13/Products/LAY'S POULET 135G.png",
    imageAlt: "Lay's Roast Chicken flavored chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "classic-paprika",
    title: "Paprika",
    description: "<p>Warm paprika notes with a satisfying crunch.</p>",
    image: "/Lays-2025-12-13/Products/3168930175155 - Lay's Paprika 130g.png",
    imageAlt: "Lay's Paprika chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "classic-cheese",
    title: "Cheese",
    description: "<p>Cheesy, creamy flavor that’s always a crowd-pleaser.</p>",
    image: "/Lays-2025-12-13/Products/3168930175124 - Lay's Emmental 135g.png",
    imageAlt: "Lay's Cheese flavored chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "classic-cream-onion",
    title: "Cream & Onion",
    description: "<p>A smooth, tangy cream flavor paired with a hint of onion.</p>",
    image: "/Lays-2025-12-13/Products/3168930010067 - Lay's Cream & Onion 120g.png",
    imageAlt: "Lay's Cream & Onion chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "classic-salt-vinegar",
    title: "Salt & Vinegar",
    description: "<p>Bright, tangy vinegar balanced with a crisp salt finish.</p>",
    image: "/Lays-2025-12-13/Products/3168930175322 - Lay's Sel & Vinaigre 130g.png",
    imageAlt: "Lay's Salt & Vinegar chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "classic-spicy",
    title: "Spicy",
    description: "<p>A kick of heat for fans of bold flavors.</p>",
    image: "/Lays-2025-12-13/Products/3168930008125 - Lay's Spicy 130g.png",
    imageAlt: "Lay's Spicy chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "classic-bolognese",
    title: "Bolognese",
    description: "<p>Comfort-food vibes with a rich tomato and herb twist.</p>",
    image: "/Lays-2025-12-13/Products/3168930174929 - Lay's Bolognaise 130g.png",
    imageAlt: "Lay's Bolognese flavored chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "classic-cheeseburger",
    title: "Cheeseburger",
    description: "<p>Big burger flavor with an irresistibly crunchy bite.</p>",
    image: "/Lays-2025-12-13/Products/3168930009917 - Lay's Cheeseburger 120g.png",
    imageAlt: "Lay's Cheeseburger flavored chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "classic-mustard-pickles",
    title: "Mustard Pickles",
    description: "<p>Sweet-and-tangy notes inspired by mustard and pickles.</p>",
    image: "/Lays-2025-12-13/Products/3168930175063 - Lay's Moutarde Pickles 135g.png",
    imageAlt: "Lay's Mustard Pickles flavored chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
];

const maxProducts: ProductItem[] = [
  {
    id: "max-classic",
    title: "MAX Classic",
    description: "<p>Thicker, wavier chips made for maximum crunch.</p>",
    image: "/Lays-2025-12-13/Products/LAYS-MAX-NATURE.png",
    imageAlt: "Lay's MAX Classic chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "max-bbq",
    title: "MAX Barbecue",
    description: "<p>MAX crunch meets bold barbecue flavor.</p>",
    image: "/Lays-2025-12-13/Products/LAYS-MAX-BBQ.png",
    imageAlt: "Lay's MAX Barbecue chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
];

const threeDProducts: ProductItem[] = [
  {
    id: "3d-original",
    title: "3D Original",
    description: "<p>Unique, ultra-crispy corn cones with a 3D shape.</p>",
    image: "/Lays-2025-12-13/Products/LAYS-3DS-Nature.png",
    imageAlt: "Lay's 3D Original",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "3d-cheese",
    title: "3D Cheese",
    description: "<p>Cheesy flavor in a fun, crunchy 3D bite.</p>",
    image: "/Lays-2025-12-13/Products/LAYS-3DS-Fromage.png",
    imageAlt: "Lay's 3D Cheese",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "3d-bacon",
    title: "3D Bacon",
    description: "<p>Smoky bacon flavor with a light, crispy crunch.</p>",
    image: "/Lays-2025-12-13/Products/LAYS-3DS-Bacon.png",
    imageAlt: "Lay's 3D Bacon",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "3d-paprika",
    title: "3D Paprika",
    description: "<p>Warm paprika notes in a 3D crunch.</p>",
    image: "/Lays-2025-12-13/Products/LAYS-3DS-Paprika.png",
    imageAlt: "Lay's 3D Paprika",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "3d-peanuts",
    title: "3D Peanuts",
    description: "<p>A tasty peanut twist in a crunchy corn cone.</p>",
    image: "/Lays-2025-12-13/Products/LAYS-3DS-Cacahuetes.png",
    imageAlt: "Lay's 3D Peanuts",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
];

const farmhouseProducts: ProductItem[] = [
  {
    id: "farmhouse-original",
    title: "Farmhouse Original",
    description: "<p>Rustic-style chips with a hearty potato taste and satisfying crunch.</p>",
    image: "/Lays-2025-12-13/Products/3168930168133 - Lay's Paysannes Nature 155g.png",
    imageAlt: "Lay's Farmhouse Original chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "farmhouse-salt-vinegar",
    title: "Farmhouse Salt & Vinegar",
    description: "<p>A bold farmhouse crunch with a bright, tangy finish.</p>",
    image: "/Lays-2025-12-13/Products/3168930176329 - Lay's Paysannes Sel & Vinaigre 120g.png",
    imageAlt: "Lay's Farmhouse Salt & Vinegar chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "farmhouse-tapenade",
    title: "Farmhouse Tapenade",
    description: "<p>Mediterranean-inspired flavor with a generous crunch.</p>",
    image: "/Lays-2025-12-13/Products/3168930177647 - Lay's Paysannes Tapenade 120g.png",
    imageAlt: "Lay's Farmhouse Tapenade chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "farmhouse-black-pepper-cheese",
    title: "Farmhouse Black Pepper & Cheese",
    description: "<p>A bold pairing of black pepper and rich cheese notes.</p>",
    image: "/Lays-2025-12-13/Products/3168930167891 - Lay's Paysannes Fromage du Jura et Poivre Noir 120g.png",
    imageAlt: "Lay's Farmhouse Black Pepper & Cheese chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "farmhouse-caramelized-onion",
    title: "Farmhouse Caramelized Onion",
    description: "<p>Sweet, savory caramelized onion flavor in a rustic crunch.</p>",
    image: "/Lays-2025-12-13/Products/3168930167921 - Lay's Paysannes Oignons de Roscoff Caramelises 120g.png",
    imageAlt: "Lay's Farmhouse Caramelized Onion chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "farmhouse-mushroom",
    title: "Farmhouse Mushroom",
    description: "<p>Deep, savory mushroom flavor with a thick, crunchy bite.</p>",
    image: "/Lays-2025-12-13/Products/3168930177678 - Lay's Paysannes Champignon 120g.png",
    imageAlt: "Lay's Farmhouse Mushroom chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "farmhouse-mustard",
    title: "Farmhouse Mustard",
    description: "<p>Classic mustard flavor paired with a satisfying farmhouse crunch.</p>",
    image: "/Lays-2025-12-13/Products/3168930176350 - Lay's Paysannes Moutarde 120g.png",
    imageAlt: "Lay's Farmhouse Mustard chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "farmhouse-cheese",
    title: "Farmhouse Cheese",
    description: "<p>A generous cheese flavor in a thick, wavy farmhouse cut.</p>",
    image: "/Lays-2025-12-13/Products/3168930167952 - Lay's Paysannes Fromage 120g.png",
    imageAlt: "Lay's Farmhouse Cheese chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "farmhouse-ossau-iraty",
    title: "Farmhouse Ossau-Iraty",
    description: "<p>Inspired by a classic cheese pairing, made for sharing.</p>",
    image: "/Lays-2025-12-13/Products/3168930177616 - Lay's Paysannes Ossau Iraty 120g.png",
    imageAlt: "Lay's Farmhouse Ossau-Iraty chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
];

const bakedProducts: ProductItem[] = [
  {
    id: "oven-baked-original",
    title: "Oven Baked Original",
    description: "<p>Oven baked for a lighter bite, with delicious potato taste.</p>",
    image: "/Lays-2025-12-13/Products/3168930002987 - Lay's Cuites au Four Nature 130g_0.png",
    imageAlt: "Lay's Oven Baked Original chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
];

export default function ProductsZigZagPage() {
  return (
    <>
      <Hero
        backgroundImage="/Lays-2025-12-13/Hero/Lays_Homestyle_Flavours.png"
      />
      <TextSection
        headline="Browse the range"
        text="<p>Explore our chips by range below. The zig-zag layout highlights each product as you scroll.</p>"
      />
      <ProductOverview
        id="range"
        headline="Classic range"
        subheadline="<p>Our most-loved flavors — timeless, crispy, and made for every occasion.</p>"
        layout="zig-zag"
        products={classicProducts}
      />
      <ProductOverview
        headline="MAX range"
        subheadline="<p>Thicker, wavier chips built for maximum crunch.</p>"
        layout="zig-zag"
        products={maxProducts}
      />
      <ProductOverview
        headline="3D range"
        subheadline="<p>Fun, ultra-crispy corn cones with a unique 3D shape.</p>"
        layout="zig-zag"
        products={threeDProducts}
      />
      <ProductOverview
        headline="Farmhouse range"
        subheadline="<p>Rustic-style chips with bold flavors and a hearty crunch.</p>"
        layout="zig-zag"
        products={farmhouseProducts}
      />
      <ProductOverview
        headline="Oven baked"
        subheadline="<p>A lighter bite, baked for delicious crunch.</p>"
        layout="zig-zag"
        products={bakedProducts}
      />
    </>
  );
}
