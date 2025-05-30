import { useTranslation, Trans } from "react-i18next";
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";

const Workflow = () => {
  const { t } = useTranslation();

  const checklistKeys = ["1", "2", "3", "4"]; // Iterujemy po numerach kluczy

  return (
    <div id="workflow" className="mt-20 scroll-mt-60">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mb-10 mt-6 tracking-wide">
        {t("workflow_title")}
        <span className="bg-gradient-to-r from-[var(--color-accent)] to-green-700 text-transparent bg-clip-text">
          {t("workflow_title_styled")}
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img
            className="rounded-2xl border-4 border-[var(--color-accent)]"
            src={codeImg}
            alt="Rower w serwisie"
          />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistKeys.map((key) => (
            <div key={key} className="flex mb-12">
              <div className="text-[var(--color-accent)] mx-6 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl font-semibold">
                  {t(`checklist_${key}_title`)}
                </h5>
                <p className="text-md text-foreground">
                  {t(`checklist_${key}_desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
