import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsHero } from "./components/products-hero"
import { ProductsDishes } from "./components/products-dishes"
import { ProductsSection as ProductsCombos } from "./components/products-combo"

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20"> {/* Offset for header */}
        <ProductsHero />
        <ProductsDishes />
        <ProductsCombos />
      </div>
      <Footer />
    </main>
  )
}
