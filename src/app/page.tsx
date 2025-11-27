import { Hero, TextSection, ProductSlider, FAQ } from "@dejstdm/white-label-ui";

const products = [
  {
    id: "1",
    name: "Lay's Bugles Nacho Cheese",
    description: "<p>Delicious cone-shaped snack with authentic nacho cheese flavor. Perfect for snacking anytime, anywhere. 150g pack.</p>",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9cbbb97b27784086a538ac468ac265d8%2Fd01038b542374362b34d1d615b9baabf?format=webp&width=800",
    badge: "Popular",
  },
  {
    id: "2",
    name: "Lay's Pizza Hut Margherita",
    description: "<p>Iconic partnership flavor featuring authentic Pizza Hut Margherita taste. A unique culinary experience in every chip. 150g pack.</p>",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9cbbb97b27784086a538ac468ac265d8%2F967ef68d8c9d465f9eb107610c5c9d06?format=webp&width=800",
    badge: "Special Edition",
  },
  {
    id: "3",
    name: "Lay's Oven Salted",
    description: "<p>Classic taste made from the oven. Crispy and lightly salted for a wholesome snacking experience. 50% less fat. 150g pack.</p>",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9cbbb97b27784086a538ac468ac265d8%2Fde990b3e9ec84113b6acc5e21b846627?format=webp&width=800",
  },
  {
    id: "4",
    name: "Lay's Salted",
    description: "<p>The authentic Lay's taste you love. Made from 100% natural potatoes with just the right amount of salt. 150g pack.</p>",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9cbbb97b27784086a538ac468ac265d8%2Fc761a01a7f0b4b48aee1fa3b9e261f5c?format=webp&width=800",
    badge: "Classic",
  },
  {
    id: "5",
    name: "Lay's MAX Roasted Onion & Sour Cream",
    description: "<p>Max crunch with maximum taste. Bold roasted onion flavor combined with creamy sour cream. For those who want it all. 110g pack.</p>",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9cbbb97b27784086a538ac468ac265d8%2Fb9d7834a20b04922bdfeb0cb97957f40?format=webp&width=800",
    badge: "New",
  },
  {
    id: "6",
    name: "Lay's Bugles Nacho Cheese XL",
    description: "<p>Extra-large value pack with the irresistible cone-shaped snack in nacho cheese flavor. Perfect for families and gatherings. 125g pack.</p>",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9cbbb97b27784086a538ac468ac265d8%2F514a7e8b96b64d5cb452c58836e3f274?format=webp&width=800",
  },
];

const faqItems = [
  {
    question: "What makes Lay's chips special?",
    answer: "<p>Lay's uses only the finest potatoes combined with carefully selected ingredients to create the perfect crispy snack. Our commitment to quality and taste has made us a beloved snack choice worldwide for over 75 years.</p>",
  },
  {
    question: "How are Lay's products made?",
    answer: "<p>Lay's chips are made from fresh potatoes that are sliced, washed, and fried to achieve the perfect crispiness. We then season them with quality ingredients to create delicious flavors. Our production follows strict quality standards to ensure every chip meets our taste and safety requirements.</p>",
  },
  {
    question: "Are Lay's products available in different flavors?",
    answer: "<p>Absolutely! We offer a wide variety of flavors to suit every taste preference, from classic salted to specialty flavors. Whether you prefer traditional tastes or bold new combinations, there's a Lay's flavor for everyone.</p>",
  },
  {
    question: "What is the Nutri-Score system?",
    answer: "<p>The Nutri-Score is a color-coded nutritional label system that helps consumers make healthier food choices at a glance. It rates products from A (healthiest) to E (least healthy). Many Lay's products feature Nutri-Score labeling to help you make informed choices.</p>",
  },
  {
    question: "Are Lay's products suitable for vegetarians?",
    answer: "<p>Most Lay's products are suitable for vegetarians, as they are made from potatoes, oil, and seasonings. However, we recommend checking individual product labels, as some specialty flavors may contain ingredients derived from animal sources.</p>",
  },
  {
    question: "Where can I find nutritional information for Lay's products?",
    answer: "<p>Detailed nutritional information is available on every Lay's product package, including calorie content, fat, protein, and carbohydrates. You can also visit our website for comprehensive nutritional data on all our products.</p>",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        headline="Crunch into Flavor"
        body="<p>Discover the world of Lay's premium snacks. From classic flavors to exciting new combinations, find your perfect crunch.</p>"
        buttonLabel="Explore Products"
        buttonHref="#products"
      />
      <TextSection
        headline="Our Products"
        text="<p>Lay's offers a diverse range of delicious snacks crafted from the finest potatoes. Whether you're looking for a classic taste or an adventurous flavor, our collection has something for everyone. Each bite is a promise of quality, taste, and the perfect crunch.</p>"
      />
      <ProductSlider products={products} />
      <TextSection
        headline="Why Choose Lay's?"
        text="<p>For over 75 years, Lay's has been a trusted name in snacking. We're committed to using quality ingredients and innovative flavors to create snacks that bring joy to families around the world. Our dedication to taste, quality, and sustainability sets us apart in the snack industry.</p>"
      />
      <FAQ items={faqItems} headline="Frequently Asked Questions" />
    </>
  );
}
