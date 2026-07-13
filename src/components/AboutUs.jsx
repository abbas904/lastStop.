import React from "react";
import useTranslation from "../i18n/useTranslation";

import aboutImg from "../assets/about/bg.jpg";
import leader from "../assets/about/leader.jpg";

import logo8 from "../assets/about/main1_cropped.png";
import logo2 from "../assets/about/logo2.png";
import logo3 from "../assets/about/logo3.png";
import logo4 from "../assets/about/logo4.png";
import AddReview from "./AddReview";
import Testimonial from "../components/Testemonial";
import FooterLinks from "./FooterLinks ";

const LogoCard = ({ logo, isBig = false }) => (
  <div className="
    bg-white rounded-xl shadow-md
    flex items-center justify-center
    p-2 sm:p-3
    w-20 h-20
    sm:w-28 sm:h-28
    md:w-36 md:h-36
    lg:w-44 lg:h-40
    overflow-hidden
  ">
    <img
      src={logo}
      alt="logo"
      className={`object-contain transition-all duration-300 ${
      isBig ? "w-[130%] h-[130%]" : "w-full h-full"
      }`}
    />
  </div>
);

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center">
      {/* Background */}
      <img
        src={aboutImg}
        className="absolute inset-0 w-full h-full object-cover bg-no-repeat"
        alt="bg"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/90" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-20 py-16 space-y-14">
        {/* MAIN CARD */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-14 py-10 text-white space-y-16">
          {/* TITLE */}
          <div className="text-center space-y-6">
            <div className="space-y-3">
              <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-white">
                {t("about_title")}
              </h1>
              <div className="mt-3 w-20 h-[3px] bg-orange-400 mx-auto rounded-full shadow-lg animate-pulse"></div>
            </div>

            <p className="max-w-3xl mx-auto text-sm md:text-lg">
              {t("about_desc")
                .split(/(73105437|7025517793)/g)
                .map((part, i) =>
                  part === "73105437" || part === "7025517793" ? (
                    <span key={i} className="text-orange-400 font-semibold">
                      {part}
                    </span>
                  ) : (
                    part
                  ),
                )}
            </p>
          </div>

          {/* CEO SECTION */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-6">
              <img
                src={leader}
                className="w-28 h-28 object-cover rounded-xl shadow-lg"
                alt="leader"
              />
              <h2 className="text-2xl md:text-4xl font-bold tracking-wide">
                {t("ceo_title")}
              </h2>
            </div>

            <div className="text-center max-w-xl space-y-3">
              <p className="max-w-3xl mx-auto text-sm md:text-lg">
                {t("ceo_desc")}
              </p>
              <span className="text-orange-300 font-semibold text-lg md:text-xl tracking-wider uppercase">
                {t("ceo_name")}
              </span>
            </div>
          </div>
        </div>

        {/* LOGOS */}
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 sm:gap-6">

         

          {/* باقي اللوغوهات */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
          <LogoCard logo={logo8} isBig={true} />
            <LogoCard logo={logo3} />
              <LogoCard logo={logo4} />
            
          </div>

        </div>

        {/* TESTIMONIAL + FOOTER */}
        <div className="max-w-6xl mx-auto">
          <Testimonial />
          <AddReview />
          <FooterLinks />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
