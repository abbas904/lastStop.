import React from "react";
import Footer from "./Footer";
import banner from "../assets/insideKingdom/term0.jpg";
import useTranslation from "../i18n/useTranslation";
import { renderLegalRich } from "../i18n/legal/renderLegalRich";

const Terms = () => {
  const { raw, lang } = useTranslation();
  const terms = raw("legal.terms");
  const brandLabel = lang === "ar" ? "لاست ستوب" : "Last Stop";
  const dir = lang === "ar" ? "rtl" : "ltr";

  if (!terms?.heroH1) return null;

  return (
    <div className="bg-gray-50 min-h-screen" dir={dir}>
      <div className="relative h-[250px] md:h-[360px] w-full mt-6 overflow-hidden">
        <img
          src={banner}
          alt="terms"
          className="w-full h-full object-cover object-[center_35%]"
        />

        <div className="absolute inset-0  flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            {terms.heroH1}
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm">
          <p className="text-black font-bold lg:text-3xl leading-8 text-pretty md:text-lg">
            {terms.intro}
          </p>
        </div>

        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {terms.sectionTitle}
          </h2>

          <p className="text-gray-800 leading-8 list-disc pr-5 space-y-3">
            {terms.leadParagraph}
          </p>

          <h4 className="font-bold text-2xl sm:text-lg text-gray-800 mt-6">
            {terms.pointsHeading}
          </h4>

          <ul className="list-disc pr-5 space-y-3 text-gray-600 leading-8">
            {terms.listItems.map((item, i) => (
              <li key={i}>{renderLegalRich(item, brandLabel)}</li>
            ))}
          </ul>
        </div>

        <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl">
          <p className="text-gray-700 leading-8">{terms.footerNote}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
