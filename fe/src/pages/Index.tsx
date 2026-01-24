import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ProductSection from "@/components/ProductSection";
import ComparisonTable from "@/components/ComparisonTable";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ProductSection />
        <ComparisonTable />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
