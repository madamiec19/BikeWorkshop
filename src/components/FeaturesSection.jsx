import { useTranslation, Trans } from "react-i18next";
import { features } from "../constants";

const FeatureSection = () => {
  const { t } = useTranslation();

  return (
    <div
      id="features"
      className="relative mt-20 border-b border-neutral-800 min-h-[800px] scroll-mt-30"
    >
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          {t("features_title_styled")}
          <span className="bg-gradient-to-r from-[var(--color-accent)] to-green-700 text-transparent bg-clip-text">
            {t("features_title")}
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 text-[var(--color-accent)] justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-[var(--color-foreground)] font-semibold">
                  {t(`feature_${index + 1}_title`)}
                </h5>
                <p className="text-md p-2 mb-20 text-[var(--color-foreground)]">
                  {t(`feature_${index + 1}_desc`)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
