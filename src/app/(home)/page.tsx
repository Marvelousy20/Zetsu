import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ways from "@/components/Ways";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Ways />
      <FAQ />
    </main>
  );
}
