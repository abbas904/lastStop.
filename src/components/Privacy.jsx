import React from "react";
import Footer from "./Footer";
import privacyBanner from "../assets/insideKingdom/arch0.jpg";
import useTranslation from "../i18n/useTranslation";
import { renderLegalRich } from "../i18n/legal/renderLegalRich";

const Privacy = () => {
  const { raw, lang } = useTranslation();
  const data = raw("legal.privacy");
  const brandLabel = lang === "ar" ? "لاست ستوب" : "Last Stop";
  const dir = lang === "ar" ? "rtl" : "ltr";
  const R = (text) => renderLegalRich(text, brandLabel);

  if (!data?.heroH1) return null;

  return (
    <div className="pt-20 pb-20 overflow-x-hidden bg-gray-50" dir={dir}>
      <div className="relative h-[220px] md:h-[300px] w-full overflow-hidden">
        <img
          src={privacyBanner}
          alt="privacy banner"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0  flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            {data.heroH1}
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8 sm:space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base break-words mb-10">
        <section>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
            {data.section1.title}
          </h2>
          <div className="space-y-4 text-gray-700 leading-8">
            <ul className="list-disc pr-5 space-y-2">
              <li>{R(data.section1.leadItem)}</li>
            </ul>

            {data.section1.paragraphs.map((p, i) => (
              <p key={i} className="text-black">
                {R(p)}
              </p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
            {data.section2.title}
          </h2>

          <ul className="list-disc pr-5 space-y-2">
            {data.section2.items.map((item, i) => (
              <li key={i}>{R(item)}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl lg:text-3xl md:text-2xl font-bold mb-4 text-gray-900">
            {data.section3.title}
          </h2>

          <ul className="list-disc pr-5 space-y-2">
            {data.section3.items.map((item, i) => (
              <li key={i}>{R(item)}</li>
            ))}
          </ul>
        </section>

        <p className="text-black">{R(data.section3.vendorFollow)}</p>

        <section>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
            {data.section4.title}
          </h2>

          <ul className="list-disc pr-5 space-y-2">
            {data.section4.blocks.map((b, i) =>
              b.type === "li" ? (
                <li key={i}>{R(b.text)}</li>
              ) : (
                <p key={i} className="text-black">
                  {R(b.text)}
                </p>
              )
            )}
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl lg:text-3xl md:text-2xl font-bold mb-4 text-gray-900">
            {data.section5.title}
          </h2>

          <ul className="list-disc pr-5 space-y-2">
            {data.section5.items.map((item, i) => (
              <li key={i}>{R(item)}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl lg:text-3xl md:text-2xl font-bold mb-4 text-gray-900">
            {data.section6.title}
          </h2>

          <ul className="list-disc pr-5 space-y-2">
            {data.section6.sharingBlocks.map((b, i) =>
              b.type === "li" ? (
                <li key={i}>{R(b.text)}</li>
              ) : (
                <p key={i} className="text-black">
                  {R(b.text)}
                </p>
              )
            )}
          </ul>
          <h2 className="text-xl sm:text-2xl text-black mb-4 mt-4 lg:text-3xl">
            {data.section6.docTitle}
          </h2>
          <p className="text-black">{R(data.section6.docBody)}</p>
          <h3 className="text-xl sm:text-2xl text-black mb-4 mt-4 lg:text-3xl">
            {data.section6.complaintsTitle}
          </h3>
          <p className="text-black">{R(data.section6.complaintsIntro)}</p>
          <p className="mt-4  text-orange-500 font-bold">
            {R(data.section6.complaintsEmailLine)}
          </p>
          <p className="text-black">{R(data.section6.complaintsOutro)}</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
