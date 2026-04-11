import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppSection from "@/components/AppSection";
import MediaSection from "@/components/MediaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-gold/30 selection:text-gold">
      <Navbar />
      <Hero />
      <AppSection />
      <MediaSection />
      <Footer />
    </main>
  );
}
