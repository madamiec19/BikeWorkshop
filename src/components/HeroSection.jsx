import { useTranslation, Trans } from "react-i18next"; // <-- Import
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { Button } from "./Button";

const HeroSection = () => {
  const { t } = useTranslation(); // <-- Inicjalizacja hooka

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        {/* Użycie <Trans> do tłumaczenia tekstu z gradientem */}
        <span className="bg-gradient-to-r from-accent to-green-700 text-transparent bg-clip-text">
          {t("hero_title_styled")}
        </span>{" "}
        {t("hero_title")}
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        {/* Użycie t() do tłumaczenia podtytułu */}
        {t("hero_subtitle")}
      </p>
      <div className="flex justify-center my-10">
        <Button href={"#"}>
          {t("nav_book_visit")} {/* Tłumaczenie przycisku */}
        </Button>
        <Button href={"#"} variant="secondary">
          {t("hero_view_offer")} {/* Tłumaczenie przycisku */}
        </Button>
      </div>
      <div className="flex justify-center mt-10">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-accent shadow-sm shadow-accent mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          {t("video_fallback")}
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-accent shadow-sm shadow-accent mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          {t("video_fallback")}
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
