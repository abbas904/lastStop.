import useTranslation from "../i18n/useTranslation";

export default function FloatingButtons() {
  const { t } = useTranslation();

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/966530303356"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-3 right-2 sm:bottom-6 sm:right-6 z-50
          flex items-center gap-1 sm:gap-3
          bg-green-500 text-white
          px-2 py-2 sm:px-4 sm:py-3
          rounded-full shadow-xl
          hover:bg-green-600 hover:scale-105
          transition-all duration-300
        "
      >
        <span className="text-[11px] sm:text-sm md:text-base font-semibold whitespace-nowrap">
          للدعم والاستفسار
        </span>

        <i className="fab fa-whatsapp text-lg sm:text-2xl"></i>
      </a>

      {/* Gmail */}
      <div className="fixed bottom-3 left-2 sm:bottom-6 sm:left-6 z-50">
        <a
          href="mailto:a.t.s.team@hotmail.com"
          className="
            flex items-center gap-1 sm:gap-3
            bg-[#012d50]
            px-2 py-2 sm:px-4 sm:py-3
            rounded-full shadow-lg
            hover:scale-105
            transition-all duration-300
          "
        >
          <span className="bg-orange-500 text-white text-[9px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
            للحجز
          </span>

          <span className="text-[11px] sm:text-sm md:text-base text-white whitespace-nowrap font-medium">
            {t("pages.home_float_cta")}
          </span>

          <i className="fas fa-envelope text-lg sm:text-2xl text-white"></i>
        </a>
      </div>
    </>
  );
}