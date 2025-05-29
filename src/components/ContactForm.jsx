import React, { useState, useEffect, Fragment } from "react"; // Dodajemy Fragment
import { useFormContext } from "../contexts/FormContext";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { Button } from "./Button";
import { Dialog, Transition } from "@headlessui/react"; // <-- Import Dialog i Transition

const ContactForm = () => {
  const { isFormOpen, closeForm, selectedPlan } = useFormContext();
  const { t } = useTranslation();

  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    plan: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (isFormOpen) {
      if (selectedPlan) {
        setFormData({
          ...initialFormData,
          plan: selectedPlan,
          message: t("form_message_with_plan", { plan: selectedPlan }),
        });
      } else {
        setFormData({
          ...initialFormData,
          plan: "",
          message: t("form_message_default"),
        });
      }
    } else {
      // Resetuj formularz, gdy jest zamykany bez wysyłania (np. przez kliknięcie tła)
      // jeśli selectedPlan się zmieniłby, gdy formularz był zamknięty.
      // Bezpieczniej jest resetować w closeForm lub handleSubmit.
    }
  }, [isFormOpen, selectedPlan, t]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value };
      if (name === "plan") {
        if (value) {
          newData.message = t("form_message_with_plan", { plan: value });
        } else {
          newData.message = t("form_message_default");
        }
      }
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dane formularza:", formData);
    alert(t("form_submission_alert"));
    closeForm();
    // Resetowanie formularza po wysłaniu jest już w logice closeForm w FormContext
    // lub można je dodać tutaj, jeśli closeForm nie resetuje selectedPlan
    setFormData(initialFormData); // Dodatkowy reset dla pewności
  };

  const planOptions = [
    { value: t("pricing_1_title"), label: t("pricing_1_title") },
    { value: t("pricing_2_title"), label: t("pricing_2_title") },
    { value: t("pricing_3_title"), label: t("pricing_3_title") },
  ];

  return (
    // Używamy Transition.Root do kontrolowania całego stanu przejścia
    <Transition appear show={isFormOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={closeForm}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* ZMIANA TUTAJ: Dodajemy klasę "relative" do Dialog.Panel */}
              <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-card p-6 sm:p-8 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-foreground"
                >
                  {t("form_title")}
                </Dialog.Title>
                {/* Przycisk zamykający jest już poprawnie ostylowany z 'absolute' */}
                <button
                  onClick={closeForm}
                  className="absolute top-4 right-4 p-1 text-foreground/70 hover:text-foreground focus:outline-none"
                  aria-label={t("form_close_button_label")}
                >
                  <X size={24} />
                </button>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* ... (wszystkie pola formularza bez zmian) ... */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1 text-foreground"
                    >
                      {t("form_label_name")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-neutral-600 rounded-md bg-primary text-foreground focus:ring-accent focus:border-accent"
                    />
                  </div>
                  {/* ... (email, phone, plan, message) ... */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1 text-foreground"
                    >
                      {t("form_label_email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-neutral-600 rounded-md bg-primary text-foreground focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-1 text-foreground"
                    >
                      {t("form_label_phone")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-neutral-600 rounded-md bg-primary text-foreground focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="plan"
                      className="block text-sm font-medium mb-1 text-foreground"
                    >
                      {t("form_label_plan_selection")}
                    </label>
                    <select
                      name="plan"
                      id="plan"
                      value={formData.plan}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-neutral-600 rounded-md bg-primary text-foreground focus:ring-accent focus:border-accent"
                    >
                      <option value="" disabled={!!formData.plan}>
                        {t("form_plan_select_placeholder")}
                      </option>
                      {planOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1 text-foreground"
                    >
                      {t("form_label_message")}
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-neutral-600 rounded-md bg-primary text-foreground focus:ring-accent focus:border-accent"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full justify-center text-lg"
                  >
                    {t("form_button_submit")}
                  </Button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactForm;
