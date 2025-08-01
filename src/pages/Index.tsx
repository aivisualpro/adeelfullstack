import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import CaseStudySection from "@/components/CaseStudySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CapabilitiesSection />
      <CaseStudySection />
      <Footer />
    </div>
  );
};

export default Index;
