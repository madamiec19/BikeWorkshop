import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

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
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          {/* SEKCJA Z ZAMIENIONĄ KOLEJNOŚCIĄ */}
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            {/* Przełącznik motywu jest teraz pierwszy (po lewej) */}
            <ThemeToggle />
            <a
              href="#"
              className="bg-accent hover:opacity-90 py-2 px-3 rounded-md transition text-white"
            >
              Umów wizytę
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          // Menu mobilne
          <div className="fixed right-0 z-20 bg-primary w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 text-center">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center mt-6 space-y-6">
              <a
                href="#"
                className="bg-accent hover:opacity-90 py-2 px-3 rounded-md transition"
              >
                Umów wizytę
              </a>
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
