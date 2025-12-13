import { Hero, ProductSlider } from "@dejstdm/white-label-ui";
import type { ProductItem } from "@dejstdm/white-label-ui";

const products: ProductItem[] = [
  {
    id: 1,
    title: "Lay's Gourmet",
    description: "<p>With Lay's Gourmet, we pair each flavor with the texture that will best enhance it. Lay's Gourmet, enhance your aperitif.</p>",
    image: "/Lays-2025-12-13/Products/Nature (1)_0.png",
    imageAlt: "Lay's Gourmet chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: 2,
    title: "Lay's Classique",
    description: "<p>Lay's mission is to offer you irresistible chips to brighten up your aperitifs, your summer barbecues or to accompany your picnics.</p>",
    image: "/Lays-2025-12-13/Products/LAY'S NATURE 135G.png",
    imageAlt: "Lay's Classique chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: 3,
    title: "Lay's Recette à l'Ancienne",
    description: "<p>Lay's Recette à l'Ancienne are potatoes cut into thin slices and slowly cooked for more crispiness.</p>",
    image: "/Lays-2025-12-13/Products/lays ancienne nature 155_0.png",
    imageAlt: "Lay's Recette à l'Ancienne chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: 4,
    title: "Lay's Recette Paysanne",
    description: "<p>Crave the generosity of Lay's Recette Paysanne chips! Large wavy, thick chips, terribly crunchy with a good potato taste.</p>",
    image: "/Lays-2025-12-13/Products/3168930168133 - Lay's Paysannes Nature 155g_0.png",
    imageAlt: "Lay's Recette Paysanne chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: 5,
    title: "Lay's Cuites au four",
    description: "<p>Slightly striped for more crispiness, they offer a good potato taste and delicious flavor, while limiting their fat content.</p>",
    image: "/Lays-2025-12-13/Products/3168930002987 - Lay's Cuites au Four Nature 130g_0.png",
    imageAlt: "Lay's Cuites au four chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: 6,
    title: "Lay's Format Individuel",
    description: "<p>Find your favorite flavors in individual format for even more pleasure: ideal to take away for your picnics and barbecues!</p>",
    image: "/Lays-2025-12-13/Products/3168930178590 - Lay's Nature 6 Pack_0.png",
    imageAlt: "Lay's Format Individuel chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: 7,
    title: "Lay's MAX",
    description: "<p>Lay's MAX, the range of wavy chips from Lay's.</p>",
    image: "/Lays-2025-12-13/Products/LAYS-MAX-NATURE.png",
    imageAlt: "Lay's MAX chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
  {
    id: 8,
    title: "Lay's 3D",
    description: "<p>Enjoy Lay's 3D's for your aperitifs: delicious unique & crispy corn cones thanks to their 3-dimensional shape!</p>",
    image: "/Lays-2025-12-13/Products/LAYS-3DS-Nature.png",
    imageAlt: "Lay's 3D chips",
    buttonLabel: "Learn more",
    buttonHref: "#",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        backgroundImage="/Lays-2025-12-13/Hero/JR01_Lays_Banners_FINAL 1.jpg"
        headline="Lay's"
        body="<p>Irresistible chips to brighten up your aperitifs, your summer barbecues, and your picnics.</p>"
        buttonLabel="Discover our products"
        buttonHref="#products"
      />
      <ProductSlider
        id="products"
        headline="Our Products"
        subheadline="<p>Discover our complete range of Lay's chips, each with its own unique flavor and texture to enhance your moments of sharing.</p>"
        products={products}
      />
    </>
  );
}
