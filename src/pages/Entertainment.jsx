import React from "react";
import { motion } from "framer-motion";
import headerImg from "../assets/entertainment/banner.jpg";
import bgImage from "../assets/entertainment/9217.jpg";

// hero icons
import icon1 from "../assets/entertainment/icon1.png";
import icon2 from "../assets/entertainment/icon2.png";

// section icons
import icon3 from "../assets/entertainment/icon3.png";
import icon4 from "../assets/entertainment/icon4.png";
import icon5 from "../assets/entertainment/icon5.png";
import icon6 from "../assets/entertainment/icon6.png";
import icon7 from "../assets/entertainment/icon7.png";
import icon8 from "../assets/entertainment/icon8.png";
import icon9 from "../assets/entertainment/icon9.png";

// images
import concert from "../assets/entertainment/ent.jpg";
import folk from "../assets/entertainment/folk2.jpg";
import clown from "../assets/entertainment/clown.jpg";
import team from "../assets/entertainment/team.jpg";
import sports from "../assets/entertainment/sports.jpg";
// footer
import Footer from "../components/Footer";
import useTranslation from "../i18n/useTranslation";

const imgById = {
  "musical-concerts": concert,
  "folk-performances": folk,
  clown,
  team,
  sports,
};

const iconsById = {
  "musical-concerts": [icon1, icon2],
  "folk-performances": [icon3, icon4],
  clown: [icon5, icon6],
  team: [icon7, icon8],
  sports: [icon9, icon1],
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Entertainment = () => {
  const { t, raw, lang } = useTranslation();
  const sectionsRaw = raw("pages.entertainment_sections");
  const sections = Array.isArray(sectionsRaw)
    ? sectionsRaw.map((s) => {
        const iconFiles = iconsById[s.id] || [];
        return {
          ...s,
          image: imgById[s.id],
          icons: (s.icons || []).map((ic, i) => ({
            ...ic,
            icon: iconFiles[i],
          })),
        };
      })
    : [];

  const ta = lang === "ar" ? "text-right" : "text-left";

  return (
    <div
      className="w-full overflow-x-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* HEADER */}
      <section
        className="w-full h-[300px] flex items-center justify-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-4xl md:text-6xl font-bold text-white">
          {t("pages.entertainment_hero")}
        </h1>
      </section>

      {/* SECTIONS */}
      {sections.map((section, index) => (
        <motion.section
          key={section.id}
          id={section.id}
          className="py-10 px-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
            {/* IMAGE */}
            <motion.div
              variants={item}
              className={`${index % 2 === 1 ? "md:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-2xl shadow-xl border-2  border-white">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full aspect-[4/3] object-cover  hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              variants={item}
              className={`${ta} space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}
            >
              <div className="space-y-3">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.4] drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                  {section.title}
                </h2>

                <div className="w-24 h-1 rounded-full bg-orange-400"></div>
              </div>

              <p className="text-white text-md md:text-lg lg:text-xl leading-loose max-w-xl bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl">
                {section.text}
              </p>

              {/* ICONS */}
              <div className="space-y-4">
                {section.icons.map((iconRow, i) => (
                  <motion.div
                    key={i}
                    variants={item}
                    className="flex items-start gap-4 p-5 rounded-xl border border-gray-300 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <img
                      src={iconRow.icon}
                      className="w-14 h-14 transition-transform duration-500   group-hover:scale-x-[-1]"
                      alt=""
                    />

                    <div>
                      <h3 className=" text-black text-lg">{iconRow.title}</h3>
                      <p className="text-sm text-gray-500">{iconRow.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      ))}
      <Footer />
    </div>
  );
};

export default Entertainment;
