import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react"; // Dodano useEffect i useCallback
import logo from "../assets/logo.png";
import { navItems } from "../constants"; // Upewnij się, że ten plik jest zaktualizowany (href + i18nKey)
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "./Button";
import { useFormContext } from "../contexts/FormContext";

const Navbar = () => {
  const { t } = useTranslation();
  const { openForm } = useFormContext(); // Pobranie funkcji do otwierania formularza

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Stany i logika dla chowania/pokazywania nawigacji na scrollu
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarScrollThreshold = 80; // Wysokość w px, po przekroczeniu której chowamy navbar. Dostosuj!

  const controlNavbar = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (
      currentScrollY > lastScrollY &&
      currentScrollY > navbarScrollThreshold
    ) {
      // Scrollowanie w dół i przekroczenie progu
      setShowNavbar(false);
    } else if (
      currentScrollY < lastScrollY ||
      currentScrollY <= navbarScrollThreshold
    ) {
      // Scrollowanie w górę lub blisko szczytu strony (lub nie przekroczono progu)
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
  }, [lastScrollY, navbarScrollThreshold]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar, { passive: true });
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);
  // Koniec logiki chowania/pokazywania

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleOpenFormAndToggleDrawer = () => {
    openForm();
    if (mobileDrawerOpen) {
      toggleNavbar(); // Zamknij menu mobilne, jeśli było otwarte
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-800 bg-primary
                 transform transition-transform duration-300 ease-in-out ${
                   // Klasy do animacji
                   showNavbar ? "translate-y-0" : "-translate-y-full" // Pokazanie/ukrycie
                 }`}
    >
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="flex items-center flex-shrink-0"
            onClick={() => mobileDrawerOpen && toggleNavbar()} // Zamyka menu mobilne po kliknięciu logo
          >
            <img className="h-12 w-20 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight text-foreground">
              BikeWorkshop
            </span>
          </a>
          <ul className="hidden lg:flex ml-14 space-x-12 text-foreground">
            {navItems.map(
              (
                item // Usunięty index, jeśli nie jest używany bezpośrednio
              ) => (
                <li key={item.i18nKey}>
                  {" "}
                  {/* Używamy i18nKey jako klucza dla stabilności */}
                  <a
                    href={item.href}
                    className="block py-2 text-[22px] transition-all duration-200 hover:scale-[1.1] hover:drop-shadow-md active:scale-95"
                  >
                    {t(item.i18nKey)}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className="hidden lg:flex justify-center space-x-2 items-center">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              onClick={handleOpenFormAndToggleDrawer}
              variant="primary"
              className="ml-2"
            >
              {t("nav_book_visit")}
            </Button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} aria-label="Toggle mobile menu">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-primary w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item) => (
                <li key={item.i18nKey} className="py-2 text-center">
                  <a
                    href={item.href}
                    className="block py-2 transition-all duration-200 hover:scale-[1.2] hover:drop-shadow-md active:scale-95"
                    onClick={toggleNavbar} // Zamyka menu po kliknięciu linku
                  >
                    {t(item.i18nKey)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center mt-6 space-y-6">
              <Button onClick={handleOpenFormAndToggleDrawer} variant="primary">
                {t("nav_book_visit")}
              </Button>
              <div className="flex space-x-4 mt-4">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
