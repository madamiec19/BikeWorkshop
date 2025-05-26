import React from "react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    const currentLanguage = i18n.language;
    const nextLanguage = currentLanguage === "pl" ? "en" : "pl";
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <button
      onClick={handleLanguageChange}
      className="p-2 rounded-md bg-card hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors font-semibold uppercase text-sm"
      aria-label="Change language"
    >
      {i18n.language === "pl" ? "EN" : "PL"}
    </button>
  );
}
