import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import useTranslation from "../i18n/useTranslation";

export default function FooterLinks() {
  const { lang } = useContext(LanguageContext);
  const { t } = useTranslation();

  const isRTL = lang === "ar";

  const links = [
    { key: "bookingCancel", path: "/booking-cancel" },
    { key: "privacy", path: "/privacy" },
    { key: "terms", path: "/terms" },
  ];

  return (
    <div className="w-full flex justify-center py-10">
      <ul
        className={`flex flex-wrap items-center justify-center gap-10 text-white text-3xl md:text-xl ${
          isRTL ? "flex-row-reverse" : ""
        }`}
      >
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>
              {t(`footer.${link.key}`)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}