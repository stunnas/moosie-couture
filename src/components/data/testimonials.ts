export interface Testimonial {
  image?: string;
  quote: string;
  name: string[];
  title: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "I love my Whimsi Mug! It brings a smile to my face everymorning.",
    name: ["Jane", "Doe"],
    title: "Acme Inc",
    stars: 5,
  },
  {
    quote:
      "The quality of these mugs is amazing. I can't wait to collect them all!",
    name: ["John", "Doe"],
    title: "Acme Inc",
    stars: 5,
  },
  {
    quote:
      "These mugs are not only adorable, but they also keep my coffee hot for hours.",
    name: ["Sarah", "Anderson"],
    title: "Acme Inc",
    stars: 5,
  },
];

export default testimonials;
