import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importuj swoje pliki z tłumaczeniami
import translationEN from "./locales/en/translation.json";
import translationPL from "./locales/pl/translation.json";

i18n
  // Wykrywanie języka przeglądarki
  .use(LanguageDetector)
  // Przekazanie instancji i18n do react-i18next
  .use(initReactI18next)
  // Inicjalizacja i18next
  .init({
    debug: true, // Ustaw na `false` w wersji produkcyjnej
    fallbackLng: "en", // Język używany, gdy wykryty język nie ma tłumaczeń
    interpolation: {
      escapeValue: false, // Niepotrzebne dla Reacta, bo domyślnie chroni przed XSS
    },
    resources: {
      en: {
        translation: translationEN,
      },
      pl: {
        translation: translationPL,
      },
    },
  });

export default i18n;
