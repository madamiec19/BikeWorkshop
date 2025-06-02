import React, { createContext, useContext, useState } from "react";

const FormContext = createContext(undefined);

export const FormProvider = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openForm = (plan = null) => {
    setSelectedPlan(plan);
    setIsFormOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setSelectedPlan(null);
    document.body.style.overflow = "auto";
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
