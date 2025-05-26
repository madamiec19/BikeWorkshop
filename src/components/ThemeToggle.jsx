import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full bg-card hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
      aria-label="Toggle theme"
    >
      {/* Prosty warunek:
        - Jeśli motyw to 'dark', pokaż ikonę Słońca.
        - W przeciwnym wypadku (gdy jest 'light'), pokaż ikonę Księżyca.
      */}
      {theme === "dark" ? (
        <Sun className="h-6 w-6" />
      ) : (
        <Moon className="h-6 w-6" />
      )}
    </button>
  );
}
