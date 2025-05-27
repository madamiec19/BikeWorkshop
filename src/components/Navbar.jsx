import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "./Button";

const Navbar = () => {
  const { t } = useTranslation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const navTranslationKeys = [
    "nav_about",
    "nav_services",
    "nav_pricing",
    "nav_contact",
  ];

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const buttonMinWidth = "min-w-[140px]";

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-800 bg-primary">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 w-20 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight text-foreground">
              BikeWorkshop
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-foreground">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block py-2 text-[22px] transition-all duration-200 hover:scale-[1.1] hover:drop-shadow-md active:scale-95"
                >
                  {t(navTranslationKeys[index])}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-2 items-center">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button href="#">{t("nav_book_visit")}</Button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-primary w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-2 text-center">
                  <a
                    href={item.href}
                    className="block py-2 transition-all duration-200 hover:scale-[1.2] hover:drop-shadow-md active:scale-95"
                  >
                    {t(navTranslationKeys[index])}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center mt-6 space-y-6">
              <Button href="#">{t("nav_book_visit")}</Button>
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
