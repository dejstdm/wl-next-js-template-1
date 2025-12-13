"use client";

import { ProductDetail, ProductOverview } from "@dejstdm/white-label-ui";
import type { ProductItem } from "@dejstdm/white-label-ui";

const recommended: ProductItem[] = [
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
    id: "max-classic",
    title: "MAX Classic",
    description: "<p>Thicker, wavier chips made for maximum crunch.</p>",
    image: "/Lays-2025-12-13/Products/LAYS-MAX-NATURE.png",
    imageAlt: "Lay's MAX Classic chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: "3d-original",
    title: "3D Original",
    description: "<p>Unique, ultra-crispy corn cones with a 3D shape.</p>",
    image: "/Lays-2025-12-13/Products/LAYS-3DS-Nature.png",
    imageAlt: "Lay's 3D Original",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
];

export default function ClassicSaltedProductPage() {
  return (
    <>
      <ProductDetail
        variant="tabs"
        image="/Lays-2025-12-13/Products/LAY'S NATURE 135G.png"
        imageAlt="Lay's Classic Salted chips"
        title="<h1>Lay's Classic Salted</h1>"
        description="<p>Our iconic potato chips: simple, crispy, and perfectly salted. Made for sharing moments, movie nights, and everything in between.</p>"
        ingredients="<p><strong>Ingredients</strong>: Potatoes, vegetable oils (sunflower, rapeseed), salt.</p><p><em>Allergen advice</em>: May contain traces of milk.</p>"
        nutritional="<p><strong>Nutrition</strong>: Typical values per 100g.</p><p>Energy: 2200 kJ / 530 kcal<br/>Fat: 33g<br/>of which saturates: 3g<br/>Carbohydrate: 52g<br/>of which sugars: 1g<br/>Fibre: 4g<br/>Protein: 6g<br/>Salt: 1.3g</p>"
        defaultTab="ingredients"
      />
      <ProductOverview
        headline="You might also like"
        subheadline="<p>Discover more of the Lay's range.</p>"
        layout="grid"
        products={recommended}
      />
    </>
  );
}
