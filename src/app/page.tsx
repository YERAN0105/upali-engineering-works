import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import About from "@/components/About";
import VehicleValuation from "@/components/VehicleValuation";
import SpareParts from "@/components/SpareParts";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import Branches from "@/components/Branches";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <VehicleValuation />
        <SpareParts />
        <WhyChooseUs />
        <Team />
        <Branches />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
