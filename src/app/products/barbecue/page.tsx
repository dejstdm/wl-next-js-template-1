"use client";

import { ProductDetail, ProductOverview } from "@dejstdm/white-label-ui";
import type { ProductItem } from "@dejstdm/white-label-ui";

const recommended: ProductItem[] = [
  {
    id: "classic-salted",
    title: "Classic Salted",
    description: "<p>Simple, crispy, and perfectly salted — our iconic original.</p>",
    image: "/Lays-2025-12-13/Products/LAY'S NATURE 135G.png",
    imageAlt: "Lay's Classic Salted chips",
    buttonLabel: "View product",
    buttonHref: "/products/classic-salted",
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

export default function BarbecueProductPage() {
  return (
    <>
      <ProductDetail
        variant="compact"
        image="/Lays-2025-12-13/Products/LAY'S BBQ 135G.png"
        imageAlt="Lay's Barbecue chips"
        title="<h1>Lay's Barbecue</h1>"
        description="<p>A bold, smoky Barbecue flavor for your favorite sharing moments. Great for parties, movie nights, and anytime you want a little extra kick.</p>"
        ctaLabel="Back to products"
        ctaHref="/products"
        nutritionalTable="<p><strong>Nutrition</strong>: Typical values per 100g.</p><table><thead><tr><th>Nutrient</th><th>Amount</th></tr></thead><tbody><tr><td>Energy</td><td>2200 kJ / 530 kcal</td></tr><tr><td>Fat</td><td>33g</td></tr><tr><td>of which saturates</td><td>3g</td></tr><tr><td>Carbohydrate</td><td>52g</td></tr><tr><td>of which sugars</td><td>2g</td></tr><tr><td>Fibre</td><td>4g</td></tr><tr><td>Protein</td><td>6g</td></tr><tr><td>Salt</td><td>1.4g</td></tr></tbody></table>"
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
