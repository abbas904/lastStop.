import useTranslation from "../i18n/useTranslation";

export default function FloatingButtons() {
  const { t } = useTranslation();

  const baseLink = "font-medium";

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/966530303356"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50
        flex items-center gap-3
        bg-green-500 text-white
        px-4 py-3
        rounded-full shadow-xl
        hover:bg-green-600 hover:scale-105
        transition-all duration-300"
      >
        <span className="text-sm sm:text-base font-semibold whitespace-nowrap">
          للدعم والاستفسار
        </span>

        <i className="fab fa-whatsapp text-2xl"></i>
      </a>

      {/* Gmail */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50">
        <a
          href="mailto:a.t.s.team@hotmail.com"
          className="flex items-center gap-2 sm:gap-3
          bg-[#012d50] px-3 py-2 sm:px-4 sm:py-3
          rounded-full shadow-lg hover:scale-105 transition-all duration-300"
        >
          <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            للحجز
          </span>

          <span
            className={`${baseLink} text-sm sm:text-sm md:text-base text-white whitespace-nowrap`}
          >
            {t("pages.home_float_cta")}
          </span>

          <div className="text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full">
            <i className="fas fa-envelope text-xl sm:text-2xl"></i>
          </div>
        </a>
      </div>
    </>
  );
}