import Header from "@/components/sections/main/header";
import Footer from "@/components/sections/main/footer";
import TestimonialsSection from "@/components/sections/home/testimonials";
import HeroSection from "@/components/sections/home/hero";
import ProductsSection from "@/components/sections/home/products";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
