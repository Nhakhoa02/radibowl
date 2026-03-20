import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AbHero } from "./components/ab-hero"
import { AbTeams } from "./components/ab-teams"
import { AbStrength } from "./components/ab-strength"

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20"> {/* Offset for header */}
        <AbHero />
        <AbTeams />
        <AbStrength />
      </div>
      <Footer />
    </main>
  )
}
