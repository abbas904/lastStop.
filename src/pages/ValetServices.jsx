import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import useTranslation from "../i18n/useTranslation";

// Banner + Image
import banner from "../assets/valet/banner.jpg";
import mainImg from "../assets/valet/main1.png";

// Icons (صورتين فقط)
import icon1 from "../assets/valet/driver.png";
import icon2 from "../assets/valet/parking.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ValetServices = () => {
  const { t, lang } = useTranslation();
  const taStart = lang === "ar" ? "text-right" : "text-left";

  return (
    <div className="w-full overflow-x-hidden bg-white" dir={lang === "ar" ? "rtl" : "ltr"}>

      {/* 🔥 BANNER */}
      <section className="relative w-full h-[40vh] md:h-[65vh]">
        <img
          src={banner}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-6xl font-bold text-center">
            {t("pages.valet_hero")}
          </h1>
        </div>
      </section>

      {/* 🔥 CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* 👉 TEXT (LEFT) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`${taStart} space-y-6`}
          >

            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
              {t("pages.valet_title")}
            </h2>

            <h1 className="text-gray-600 leading-loose text-3xl md:text-base">
              {t("pages.valet_lead")}
            </h1>

            {/* 🔥 ICONS (2 ONLY) */}
            <div className="space-y-4">

              {/* ICON 1 */}
              <div className="flex items-center gap-4 p-5 rounded-xl border border-gray-100
                              hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">

                <img
                  src={icon2}
                  alt="icon"
                  className="w-14 h-14 transition-transform duration-500 group-hover:scale-110"
                />

                <div className={taStart}>
                  <h3 className="font-bold text-xl text-gray-800 text-start">
                    {t("pages.valet_f1t")}
                  </h3>
                  <p className="text-lg text-gray-500">
                    {t("pages.valet_f1d")}
                  </p>
                </div>

              </div>

              {/* ICON 2 */}
              <div className="flex items-center gap-4 p-5 rounded-xl border border-gray-100
                              hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">

                <img
                  src={icon1}
                  alt="icon"
                  className="w-14 h-14 transition-transform duration-500 group-hover:scale-110"
                />

                <div className={taStart}>
                  <h3 className="font-bold text-xl text-start text-gray-800">
                    {t("pages.valet_f2t")}
                  </h3>
                  <p className="text-lg text-gray-500">
                   {t("pages.valet_f2d")}
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* 👉 IMAGE (RIGHT) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src={mainImg}
                alt="valet"
                className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>

        </div>

      </section>

      <Footer />
    </div>
  );
};

export default ValetServices;
