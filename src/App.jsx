import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Workflow from "./components/Workflow";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeaturesSection />
        <Workflow />
        <PricingSection />
      </div>
      <Footer />
      <ContactForm />
    </>
  );
};

export default App;
