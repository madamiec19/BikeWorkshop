import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./Button"; // Importujemy reużywalny komponent przycisku

const PricingSection = () => {
  const { t } = useTranslation();

  // Definiujemy klucze dla 3 pakietów cenowych, które mamy w plikach json
  const pricingKeys = ["1", "2", "3"];

  return (
    <div className="mt-20 border-b border-neutral-800 pb-12">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          {t("pricing_title_styled")}
          <span className="bg-gradient-to-r from-accent to-green-700 text-transparent bg-clip-text">
            {t("pricing_title")}
          </span>
        </h2>
        <p className="mt-4 text-lg text-neutral-500">{t("pricing_subtitle")}</p>
      </div>
      <div className="flex flex-wrap justify-center mt-10">
        {pricingKeys.map((key) => {
          const isFeatured = key === "2";
          return (
            <div key={key} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div
                className={`p-8 border rounded-xl h-full flex flex-col transition-all duration-300 ${
                  isFeatured
                    ? "border-accent shadow-accent/20 shadow-lg"
                    : "border-neutral-700"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  {t(`pricing_${key}_title`)}
                </h3>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold tracking-tight">
                    {t(`pricing_${key}_price`)}
                  </span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {/* Zakładamy, że każdy pakiet ma 4 cechy */}
                  {[1, 2, 3, 4].map((featureKey) => (
                    <li key={featureKey} className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0" />
                      <span>{t(`pricing_${key}_feature_${featureKey}`)}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="#"
                  variant={isFeatured ? "primary" : "secondary"}
                  className="w-full justify-center"
                >
                  {t("pricing_button_text")}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingSection;
