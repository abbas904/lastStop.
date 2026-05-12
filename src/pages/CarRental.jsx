import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import useTranslation from "../i18n/useTranslation";
// الصور
import banner from "../assets/rental/renta2.jpg";
import mainImg from "../assets/rental/rental.jpg";

// icons (صور عادية مش React components)
import icon1 from "../assets/rental/icon.jpg";
import icon2 from "../assets/rental/icon2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const CarRental = () => {
  const { t, lang } = useTranslation();
  const ta = lang === "ar" ? "text-right" : "text-left";

  return (
    <div className="w-full overflow-x-hidden" dir={lang === "ar" ? "rtl" : "ltr"}>

      {/* 🔥 BANNER */}
      <div className="relative w-full h-[40vh] md:h-[65vh]">
        <img
          src={banner}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center">
            {t("pages.car_hero")}
          </h1>
        </div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-16">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* 👉 TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`order-2 md:order-1 ${ta}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              {t("pages.car_title")}
            </h2>

            <p className="text-gray-600 leading-loose mb-8 text-sm md:text-base">
             {t("pages.car_lead")}
            </p>

            {/* 🔥 ICONS */}
            <div className="space-y-4">

  {/* ICON 1 */}
  <div className="flex items-start gap-4  p-5 rounded-xl border border-gray-100 bg-white
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">

    <img
      src={icon2}
      alt="icon"
      className="w-14 h-14 transition-transform duration-500 group-hover:scale-110"
    />

    <div className={ta}>
      <h3 className="font-bold text-xl text-gray-800">
        {t("pages.car_f1t")}
      </h3>
      <p className="text-lg text-gray-500">
       {t("pages.car_f1d")}
      </p>
    </div>

  </div>

  {/* ICON 2 */}
  <div className="flex items-start gap-4  p-5 rounded-xl border bg-white
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">

    <img
      src={icon1}
      alt="icon"
      className="w-14 h-14 transition-transform duration-500 group-hover:scale-110"
    />

    <div className={ta}>
      <h3 className="font-bold text-xl text-gray-800">
        {t("pages.car_f2t")}
      </h3>
      <p className="text-lg text-gray-500">
      {t("pages.car_f2d")}
      </p>
    </div>

  </div>

</div>
          </motion.div>

          {/* 👉 IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src={mainImg}
                alt="car"
                className="w-full h-[300px] md:h-[450px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>

        </div>

      </div>
 <Footer/>
    </div>
  );
};

export default CarRental;