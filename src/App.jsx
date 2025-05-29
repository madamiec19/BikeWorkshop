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
    // Tutaj możesz np. zainicjować Google Analytics lub inne skrypty,
    // które wymagają zgody na cookies.
    console.log("Zgoda na cookies zaakceptowana!");
    // Przykład: if (typeof window.gtag === 'function') { window.gtag('consent', 'update', { 'analytics_storage': 'granted' }); }
  };
  // Funkcja wywoływana po odrzuceniu (jeśli przycisk odrzucenia jest włączony)
  const handleDeclineCookie = () => {
    console.log("Zgoda na cookies odrzucona!");
    // Tutaj możesz np. ustawić domyślne, ograniczone działanie analityki.
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
        location="bottom" // Pozycja banera: "bottom", "top", "none"
        buttonText="Akceptuję"
        cookieName="bikeWorkshopCookieConsent" // Nazwa ciasteczka przechowującego zgodę
        style={{
          background: "#1f2937",
          color: "#e5e7eb",
          fontSize: "14px",
          borderTop: "1px solid #374151",
        }} // Style dla kontenera (Tailwind-like)
        buttonStyle={{
          color: "#ffffff",
          background: "#a3e636",
          fontSize: "14px",
          fontWeight: "600",
          borderRadius: "6px",
          padding: "10px 18px",
        }}
        expires={150} // Czas wygaśnięcia ciasteczka zgody w dniach
        debug={false} // Ustaw na true, aby baner pokazywał się przy każdym odświeżeniu podczas dewelopmentu
        onAccept={handleAcceptCookie}
        // Aby dodać przycisk odrzucenia:
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
        // Możesz dodać link do Polityki Prywatności/Cookies
        // overlay // jeśli chcesz tło przyciemniające stronę
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
