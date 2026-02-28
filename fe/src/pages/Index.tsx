import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ComparisonTable from "@/components/ComparisonTable";
import Footer from "@/components/Footer";

// B2B Redesign Components (Replacing old sections)
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import MaterialsSection from "@/components/MaterialsSection";
import AccessoriesSection from "@/components/AccessoriesSection";
import TrustedBySection from "@/components/TrustedBySection";
import InstallationGallery from "@/components/InstallationGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TrustedBySection />
        <FeaturesSection />
        <MaterialsSection />
        <AccessoriesSection />
        <InstallationGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
