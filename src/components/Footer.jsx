import React from "react";
import { useTranslation } from "react-i18next";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      id="contact"
      className="mt-20 border-t py-10 border-neutral-700 bg-primary text-foreground"
    >
      <div className="container mx-auto px-4">
        {/* Zmieniamy text-left na text-center dla wszystkich rozmiarów ekranu w tej sekcji */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Kolumna Kontakt */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer_contact_title")}
            </h3>
            <ul className="space-y-2 text-sm">
              {/* Zmieniamy md:justify-start na justify-center */}
              <li className="flex items-center justify-center">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                <span>{t("footer_address")}</span>
              </li>
              <li className="flex items-center justify-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <a
                  href={`tel:${t("footer_phone_raw")}`}
                  className="hover:text-accent"
                >
                  {t("footer_phone")}
                </a>
              </li>
              <li className="flex items-center justify-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <a
                  href={`mailto:${t("footer_email_raw")}`}
                  className="hover:text-accent"
                >
                  {t("footer_email")}
                </a>
              </li>
            </ul>
          </div>

          {/* Kolumna Godziny Otwarcia */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer_hours_title")}
            </h3>
            <ul className="space-y-1 text-sm">
              <li>{t("footer_hours_weekdays")}</li>
              <li>{t("footer_hours_saturday")}</li>
              <li>{t("footer_hours_sunday")}</li>
            </ul>
          </div>

          {/* Kolumna Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer_social_title")}
            </h3>
            {/* Zmieniamy md:justify-start na justify-center */}
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 pt-8 border-t border-neutral-800 text-xs text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} BikeWorkshop.{" "}
            {t("footer_copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
