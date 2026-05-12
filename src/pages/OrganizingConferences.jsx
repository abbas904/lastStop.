import React from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Banner
import banner from "../assets/insideKingdom/expo2.jpg";
import ready from "../assets/gallery/adventures.jpeg";
// Images
import locationImg from "../assets/conferences/location.jpg";
import influencersImg from "../assets/conferences/info0.jpg";
import crowdImg from "../assets/conferences/crowd.png";
import organizersImg from "../assets/conferences/orgnaizors3.jpg";
import securityImg from "../assets/conferences/security.jpg";

import useTranslation from "../i18n/useTranslation";

const serviceImages = [
  locationImg,
  influencersImg,
  crowdImg,
  organizersImg,
  securityImg,
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const OrganizingConferences = () => {
  const { t, raw, lang } = useTranslation();
  const services = raw("pages.organizing_services");
  const cards = Array.isArray(services)
    ? services.map((s, i) => ({
        ...s,
        img: serviceImages[i] ?? serviceImages[0],
      }))
    : [];

  return (
    <div className="w-full  overflow-x-hidden" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* HERO */}
      <div className="relative w-full h-[35vh] sm:h-[50vh] md:h-[50vh] overflow-hidden">
        <img src={banner} alt="" className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex items-center justify-center  px-4">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-2xl sm:text-4xl md:text-6xl font-extrabold text-center"
          >
            {t("pages.organizing_title")}
          </motion.h1>
        </div>
      </div>

      {/* DESCRIPTION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16  md:mt-10 py-10 md:py-10 text-center"
      >
        <p className="elementor-description max-w-[90%] sm:max-w-2xl md:max-w-3xl mx-auto font-extrabold sm:text-lg md:text-xl leading-relaxed md:leading-loose">
          {t("pages.organizing_lead_p1")}{" "}
          {t("pages.organizing_lead_p2")}{" "}
          {t("pages.organizing_lead_p3")}{" "}
          {t("pages.organizing_lead_p4")}
        </p>
      </motion.div>

      {/* CARDS */}
      {/* CARDS */}
      <div
        className="
  max-w-7xl mx-auto
  px-4 sm:px-6 md:px-10 lg:px-16
  pb-20 md:pb-28
  mt-10 md:mt-20
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
  gap-10 md:gap-14
"
      >
        {cards.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group flex flex-col"
          >
            {/* IMAGE FULL */}
            <div className="w-full h-72 md:h-80 lg:h-96 overflow-hidden rounded-2xl">
              <img
                src={item.img}
                alt={item.title}
                className="
      w-full h-full object-cover
      group-hover:scale-105
      transition duration-500
    "
              />
            </div>

            {/* TEXT OUTSIDE */}
            <div className="mt-5 text-center px-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm  md:text-lg">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div
        className="relative py-16 md:py-24 px-6 text-center mb-10 text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${ready})`,
        }}
      >
        {/* طبقة تغميق عشان النص يبقى واضح */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* المحتوى */}
        <div className="relative z-10">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4">
            {t("pages.organizing_cta_title")}
          </h2>

          <p className="text-gray-200 mb-6 text-sm sm:text-base md:text-lg">
            {t("pages.organizing_cta_sub")}
          </p>

          <Link
            to="/contact"
            className="bg-white text-black px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition inline-block"
          >
            {t("pages.organizing_cta_btn")}
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrganizingConferences;
