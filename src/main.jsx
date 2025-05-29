import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n";
import { FormProvider } from "./contexts/FormContext.jsx";
import { ThemeProvider } from "./components/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Ustawiamy domyślny motyw na 'system' */}
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <FormProvider>
        <App />
      </FormProvider>
    </ThemeProvider>
  </React.StrictMode>
);
