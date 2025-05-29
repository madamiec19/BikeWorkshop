import React, { createContext, useContext, useState } from "react";

const FormContext = createContext(undefined);

export const FormProvider = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null); // Przechowa nazwę wybranego pakietu

  const openForm = (plan = null) => {
    setSelectedPlan(plan);
    setIsFormOpen(true);
    document.body.style.overflow = "hidden"; // Zapobiega scrollowaniu tła
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setSelectedPlan(null); // Czyścimy wybrany plan po zamknięciu
    document.body.style.overflow = "auto"; // Przywraca scrollowanie
  };

  return (
    <FormContext.Provider
      value={{ isFormOpen, openForm, closeForm, selectedPlan }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
