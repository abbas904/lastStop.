import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate, useLocation } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

// Images
import riyadh from "../assets/insideKingdom/ryiadh/ryad.jpg";
import jeddah from "../assets/insideKingdom/jeddah/jeddah.jpg";
import alula from "../assets/insideKingdom/AlUla/ula.jpg";
import aljouf from "../assets/insideKingdom/aljouf/jouf.jpg";
import redSea from "../assets/insideKingdom/redsea/sea.jpg";

import bannerHome from "../assets/insideKingdom/thailand.jpg";
import bannerSaudi from "../assets/insideKingdom/saudi.jpg";
import bannerInternational from "../assets/insideKingdom/travel5.jpg";

import cairo from "../assets/insideKingdom/cairo.jpg";
import sharm from "../assets/insideKingdom/sharm.jpg";
import bali from "../assets/insideKingdom/bali.jpg";
import thailand from "../assets/insideKingdom/thailand.jpg";
import spain from "../assets/insideKingdom/spain.jpg";

import Footer from "../components/Footer";
import useTranslation from "../i18n/useTranslation";

export default function Destinations() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, lang } = useTranslation();

  const isRTL = lang === "ar";

  const typeFilter = new URLSearchParams(location.search).get("type");

  // ================= DESTINATIONS =================

  const saudiDestinations = [
    { id: "riyadh", img: riyadh },
    { id: "jeddah", img: jeddah },
    { id: "alula", img: alula },
    { id: "aljouf", img: aljouf },
    { id: "redsea", img: redSea },
  ];

  const internationalDestinations = [
    { id: "cairo", img: cairo },
    { id: "sharm", img: sharm },
    { id: "bali", img: bali },
    { id: "thailand", img: thailand },
    { id: "spain", img: spain },
  ];

  // ================= NAVIGATION =================

  const go = (type, id) => {
    navigate(`/destinations/${type}/${id}`);
  };

  // ================= BANNER =================

  const bannerImage =
    typeFilter === "saudi"
      ? bannerSaudi
      : typeFilter === "international"
      ? bannerInternational
      : bannerHome;

  // ================= FILTER =================

  const showSaudi = typeFilter !== "international";
  const showInternational = typeFilter !== "saudi";

  // ================= CARD =================

  const Card = ({ item, type: destType }) => {
    const name = t(`dest.${destType}.${item.id}.name`);

    return (
      <div
        onClick={() => go(destType, item.id)}
        className="destination-card cursor-pointer"
      >
        <div className="destination-img">
          <img src={item.img} alt={name} />
        </div>

        <div className="destination-overlay"></div>

        <div className="destination-content">
         <h3 className="m-0 leading-none">
  <div className="flex items-center gap-1">
    
    <span className="text-[34px] font-medium text-white">
      {name}
    </span>
  </div>
</h3>
        </div>
      </div>
    );
  };

  // ================= SWIPER CONFIG =================

  const swiperConfig = {
    modules: [Navigation, Autoplay],

    loop: true,
    grabCursor: true,

    observer: true,
    observeParents: true,

    spaceBetween: 15,
    speed: 600,

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      640: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 3,
      },

      1280: {
        slidesPerView: 4,
      },
    },
  };

  // ================= PAGE TITLE =================

  const pageTitle =
    typeFilter === "saudi"
      ? t("pages.destinations_title_saudi")
      : typeFilter === "international"
      ? t("pages.destinations_title_intl")
      : t("pages.destinations_title_all");

  return (
    <div
      className="overflow-x-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* ================= BANNER ================= */}

      <div className="relative w-full h-[50vh]">
        <img
          src={bannerImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl mt-10 font-extrabold">
            {pageTitle}
          </h1>
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="px-4 md:px-8 py-12 space-y-20">

        {/* ================= SAUDI ================= */}

        {showSaudi && (
          <section>
            <h2
              className={`text-3xl font-bold text-black mb-6 ${
                isRTL
                  ? "border-r-4 pr-3"
                  : "border-l-4 pl-3"
              } border-green-500`}
            >
              {t("pages.destinations_saudi_banner_title")}
            </h2>

            <p className="text-gray-700 font-sans mb-10 text-sm md:text-lg leading-7">
              {t("pages.destinations_saudi_banner_body")}
            </p>

            <Swiper
              key={`saudi-${lang}`}
              {...swiperConfig}
              dir={isRTL ? "rtl" : "ltr"}
            >
              {saudiDestinations.map((item) => (
                <SwiperSlide key={item.id}>
                  <Card item={item} type="saudi" />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        )}

        {/* ================= INTERNATIONAL ================= */}

        {showInternational && (
          <section>
            <h2
              className={`text-3xl font-bold text-black mb-6 ${
                isRTL
                  ? "border-r-4 pr-3"
                  : "border-l-4 pl-3"
              } border-gray-500`}
            >
              {t("pages.destinations_intl_heading")}
            </h2>

            <Swiper
              key={`international-${lang}`}
              {...swiperConfig}
              dir={isRTL ? "rtl" : "ltr"}
            >
              {internationalDestinations.map((item) => (
                <SwiperSlide key={item.id}>
                  <Card item={item} type="international" />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}