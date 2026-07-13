import { NavLink, Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import useTranslation from "../i18n/useTranslation";
import { useState, useContext, useRef } from "react";

export default function Navbar() {
  const travelTimeout = useRef(null);
  const adventureTimeout = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const [travelOpen, setTravelOpen] = useState(false);
  const [adventureOpen, setAdventureOpen] = useState(false);

  const [langOpenDesktop, setLangOpenDesktop] = useState(false);
  const [langOpenMobile, setLangOpenMobile] = useState(false);

  const { changeLang, lang } = useContext(LanguageContext);
  const { t } = useTranslation();

  const languages = [
    { code: "ar", label: "AR", flag: "/flags/sa.png" },
    { code: "en", label: "EN", flag: "/flags/us.png" },
    { code: "fr", label: "FR", flag: "/flags/fr.png" },
    { code: "ru", label: "RU", flag: "/flags/ru.png" },
    { code: "de", label: "DE", flag: "/flags/de.png" },
  ];

  const currentLang = languages.find((l) => l.code === lang);

  const baseLink =
    "px-2 lg:px-3 py-2 text-[13px] lg:text-[15px] hover:text-orange-500 transition whitespace-normal text-center leading-tight break-words";

  const handleChangeLang = (code) => {
    changeLang(code);
    setLangOpenDesktop(false);
    setLangOpenMobile(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[999] bg-white border-b shadow-sm">

      {/* MAIN BAR */}
      <div className="max-w-[1500px] mx-auto h-16 px-3 lg:px-6 flex items-center justify-between gap-3">

        {/* LOGO */}
        <Link to="/" className="flex-shrink-0">
          <img src="/main3-remove.png" className="h-16 lg:h-20 w-auto object-contain" />
        </Link>

        {/* NAV CENTER */}
        <div className="hidden md:flex items-center gap-2 flex-1 justify-center min-w-0">

          <NavLink to="/" className={baseLink}>{t("home")}</NavLink>

          {/* TRAVEL */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (travelTimeout.current) clearTimeout(travelTimeout.current);
              setTravelOpen(true);
            }}
            onMouseLeave={() => {
              travelTimeout.current = setTimeout(() => setTravelOpen(false), 200);
            }}
          >
            <div className={baseLink + " cursor-pointer"}>{t("travel")} ▼</div>

            {travelOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-white border shadow-lg rounded-lg z-50">
                <NavLink to="/destinations?type=saudi" className="block px-4 py-2 hover:bg-orange-50">
                  {t("travel_inside")}
                </NavLink>
                <NavLink to="/destinations?type=international" className="block px-4 py-2 hover:bg-orange-50">
                  {t("travel_international")}
                </NavLink>
              </div>
            )}
          </div>

          {/* ADVENTURES */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (adventureTimeout.current) clearTimeout(adventureTimeout.current);
              setAdventureOpen(true);
            }}
            onMouseLeave={() => {
              adventureTimeout.current = setTimeout(() => setAdventureOpen(false), 200);
            }}
          >
            <div className={baseLink + " cursor-pointer"}>{t("adventures")} ▼</div>

            {adventureOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-white border shadow-lg rounded-lg z-50">
                <NavLink to="/adventures/wild" className="block px-4 py-2 hover:bg-orange-50">
                  {t("adventures_wild")}
                </NavLink>
                <NavLink to="/adventures/sea" className="block px-4 py-2 hover:bg-orange-50">
                  {t("adventures_sea")}
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/entertainment" className={baseLink}>{t("entertainment")}</NavLink>
          <NavLink to="/organizing-conferences" className={baseLink}>{t("organizing_conferences")}</NavLink>
          <NavLink to="/cars" className={baseLink}>{t("cars")}</NavLink>
          <NavLink to="/valet" className={baseLink}>{t("valetServices")}</NavLink>
          <NavLink to="/gallery" className={baseLink}>{t("gallery")}</NavLink>
          <NavLink to="/contact" className={baseLink}>{t("contact")}</NavLink>
        </div>

        {/* DESKTOP LANGUAGE */}
        <div className="relative hidden md:block">
          <button
            onClick={() => setLangOpenDesktop(!langOpenDesktop)}
            className="flex items-center gap-2 px-3 py-1 border rounded-md"
          >
            <img src={currentLang?.flag} className="w-5 h-5 rounded-full" />
            <span className="text-sm">{currentLang?.label}</span>
          </button>

          {langOpenDesktop && (
            <div className="absolute right-0 top-full mt-2 w-40 bg-white border shadow-lg rounded-lg z-50">
              {languages.map((l) => (
                <div
                  key={l.code}
                  onClick={() => handleChangeLang(l.code)}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <img src={l.flag} className="w-5 h-5 rounded-full" />
                  {l.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* MOBILE TOP BAR (LANG + MENU) */}
        <div className="md:hidden flex items-center gap-2">

          {/* LANGUAGE BUTTON */}
          <div className="relative">
            <button
              onClick={() => setLangOpenMobile(!langOpenMobile)}
              className="flex items-center gap-1 px-2 py-1 border rounded-md"
            >
              <img src={currentLang?.flag} className="w-5 h-5 rounded-full" />
              <span className="text-sm">{currentLang?.label}</span>
            </button>

            {langOpenMobile && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white border shadow-lg rounded-lg z-50">
                {languages.map((l) => (
                  <div
                    key={l.code}
                    onClick={() => handleChangeLang(l.code)}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <img src={l.flag} className="w-5 h-5 rounded-full" />
                    {l.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl"
          >
            ☰
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
  <div className="md:hidden px-5 py-4 flex flex-col gap-3 border-t bg-white">

    <NavLink
      to="/"
      className={baseLink}
      onClick={() => setIsOpen(false)}
    >
      {t("home")}
    </NavLink>

    <details>
      <summary className={baseLink + " cursor-pointer"}>{t("travel")}</summary>
      <div className="pl-4 flex flex-col">
        <NavLink
          to="/destinations?type=saudi"
          className={baseLink}
          onClick={() => setIsOpen(false)}
        >
          {t("travel_inside")}
        </NavLink>

        <NavLink
          to="/destinations?type=international"
          className={baseLink}
          onClick={() => setIsOpen(false)}
        >
          {t("travel_international")}
        </NavLink>
      </div>
    </details>

    <details>
      <summary className={baseLink + " cursor-pointer"}>{t("adventures")}</summary>
      <div className="pl-4 flex flex-col">
        <NavLink
          to="/adventures/wild"
          className={baseLink}
          onClick={() => setIsOpen(false)}
        >
          {t("adventures_wild")}
        </NavLink>

        <NavLink
          to="/adventures/sea"
          className={baseLink}
          onClick={() => setIsOpen(false)}
        >
          {t("adventures_sea")}
        </NavLink>
      </div>
    </details>

    <NavLink
      to="/entertainment"
      className={baseLink}
      onClick={() => setIsOpen(false)}
    >
      {t("entertainment")}
    </NavLink>

    <NavLink
      to="/organizing-conferences"
      className={baseLink}
      onClick={() => setIsOpen(false)}
    >
      {t("organizing_conferences")}
    </NavLink>

    <NavLink
      to="/cars"
      className={baseLink}
      onClick={() => setIsOpen(false)}
    >
      {t("cars")}
    </NavLink>

    <NavLink
      to="/valet"
      className={baseLink}
      onClick={() => setIsOpen(false)}
    >
      {t("valetServices")}
    </NavLink>

    <NavLink
      to="/gallery"
      className={baseLink}
      onClick={() => setIsOpen(false)}
    >
      {t("gallery")}
    </NavLink>

    <NavLink
      to="/contact"
      className={baseLink}
      onClick={() => setIsOpen(false)}
    >
      {t("contact")}
    </NavLink>

  </div>
)}
    </nav>
  );
}