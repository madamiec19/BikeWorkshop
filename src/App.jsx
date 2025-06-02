import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Workflow from "./components/Workflow";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import CookieConsent from "react-cookie-consent";

const App = () => {
  const handleAcceptCookie = () => {
    console.log("Zgoda na cookies zaakceptowana!");
  };

  const handleDeclineCookie = () => {
    console.log("Zgoda na cookies odrzucona!");
  };

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
      <CookieConsent
        location="bottom"
        buttonText="Akceptuję"
        cookieName="bikeWorkshopCookieConsent"
        style={{
          background: "#1f2937",
          color: "#e5e7eb",
          fontSize: "14px",
          borderTop: "1px solid #374151",
        }}
        buttonStyle={{
          color: "#ffffff",
          background: "#a3e636",
          fontSize: "14px",
          fontWeight: "600",
          borderRadius: "6px",
          padding: "10px 18px",
        }}
        expires={150}
        debug={false}
        onAccept={handleAcceptCookie}
        enableDeclineButton
        declineButtonText="Odrzucam"
        declineButtonStyle={{
          background: "#4b5563",
          fontSize: "14px",
          fontWeight: "600",
          borderRadius: "6px",
          padding: "10px 18px",
        }}
        onDecline={handleDeclineCookie}
      >
        Ta strona wykorzystuje pliki cookies, aby zapewnić jak najlepsze
        wrażenia.{" "}
        <a
          href="/polityka-prywatnosci"
          style={{ color: "#a3e636", textDecoration: "underline" }}
        >
          Dowiedz się więcej.
        </a>
      </CookieConsent>
    </>
  );
};

export default App;
