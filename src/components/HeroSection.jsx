import { useTranslation, Trans } from "react-i18next";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { Button } from "./Button";
import { useFormContext } from "../contexts/FormContext";

const HeroSection = () => {
  const { t } = useTranslation();
  const { openForm } = useFormContext();

  const handleOpenForm = () => {
    openForm();
  };

  return (
    <div
      id="home"
      className="flex flex-col items-center mt-6 lg:mt-20 scroll-mt-60"
    >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-[var(--color-accent)] to-green-700 text-transparent bg-clip-text">
          {t("hero_title_styled")}
        </span>{" "}
        {t("hero_title")}
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        {t("hero_subtitle")}
      </p>
      <div className="flex justify-center my-10">
        <Button onClick={handleOpenForm}>{t("nav_book_visit")}</Button>
        <Button href={"#pricing"} variant="secondary">
          {t("hero_view_offer")}
        </Button>
      </div>
      <div className="flex justify-center mt-10">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[var(--color-accent)] shadow-sm shadow-accent mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          {t("video_fallback")}
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[var(--color-accent)] shadow-sm shadow-accent mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          {t("video_fallback")}
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
