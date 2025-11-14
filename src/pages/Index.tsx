import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TendenciasSection from "@/components/TendenciasSection";
import CombinaSection from "@/components/CombinaSection";
import ArmarioSection from "@/components/ArmarioSection";
import RenuevaSection from "@/components/RenuevaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TendenciasSection />
        <CombinaSection />
        <ArmarioSection />
        <RenuevaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
