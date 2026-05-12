import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import useTranslation from "../i18n/useTranslation";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const { lang } = useContext(LanguageContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isRTL = lang === "ar";

  const text = t("hero_title");
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden">

      {/* VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-110 brightness-75 contrast-110 saturate-125"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/vedio.mp4" type="video/mp4" />
      </video>

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-24 pt-20 sm:pt-28 md:pt-36">

        {/* TOP CONTENT */}
        <div
          className={`w-full max-w-2xl space-y-6 md:space-y-8 ${
            isRTL ? "ml-auto text-right" : "mr-auto text-left"
          }`}
        >

          {/* TITLE */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold px-2 md:px-3 py-2 text-white leading-snug md:leading-tight whitespace-pre-line min-h-[100px] tracking-wide drop-shadow-lg">
            {displayed}
            <span className="animate-cursor">|</span>
          </h1>

          {/* DESC */}
          <p className="text-gray-200 md:text-lg leading-6 max-w-md md:max-w-lg">
            {t("hero_desc")}
          </p>

          {/* BUTTON */}
          <div className="flex justify-start">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 rounded-xl border border-white/30 text-white font-semibold text-xl relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>

              <span className="relative group-hover:text-black">
                {t("hero_btn")}
              </span>
            </button>
          </div>

          {/* STATS */}
         <div className="grid grid-cols-2 gap-5 pt-2">

  {/* PARTNERS */}
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center h-[160px] flex flex-col justify-center transition duration-300 hover:translate-y-[-4px] hover:bg-white/20 transform-gpu will-change-transform">

    <h3 className="text-2xl md:text-3xl font-bold text-white">
      {t("partners_count")}
    </h3>

    <p className="text-gray-200 text-md mt-2 break-words leading-snug">
      {t("partners_text")}
    </p>

  </div>

  {/* ADVENTURES */}
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center h-[160px] flex flex-col justify-center transition duration-300 hover:translate-y-[-4px] hover:bg-white/20 transform-gpu will-change-transform">

    <h3 className="text-2xl md:text-3xl font-bold text-white">
      {t("adventures_count")}
    </h3>

    <p className="text-gray-200 text-md mt-2 break-words leading-snug">
      {t("adventures_text")}
    </p>

  </div>

</div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }

        .animate-cursor {
          display: inline-block;
          margin-left: 3px;
          animation: cursorBlink 0.8s infinite;
        }
      `}</style>
    </section>
  );
}