import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { HowItWorks } from "@/components/how-it-works"
import { ProductsSection } from "@/components/products-section"
import { CombosSection } from "@/components/combos-section"
import { EnvironmentSection } from "@/components/environment-section"
import { CharitySection } from "@/components/charity-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <ProductsSection />
      <CombosSection />
      <EnvironmentSection />
      {/* <CharitySection /> */}
      {/* <TestimonialsSection /> */}
      {/* <PartnersSection /> */}
      <Footer />
    </main>
  )
}
