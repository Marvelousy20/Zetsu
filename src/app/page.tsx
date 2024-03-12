import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ways from "@/components/Ways";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Ways />
    </main>
  );
}
