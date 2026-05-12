import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import wildBanner from "../assets/adventures/wildbanner.jpg";
import seaBanner from "../assets/adventures/seebaner.jpg";
import allBanner from "../assets/adventures/adventurebanner.jpg";

import hiking from "../assets/adventures/hiking.jpg";
import camel from "../assets/adventures/camel.jpg";
import mountain from "../assets/adventures/mountain.jpg";
import tamea from "../assets/adventures/tamea.jpg";
import biada from "../assets/adventures/biada.jpg";
import desert from "../assets/adventures/desert.jpg";
import diving from "../assets/adventures/diving.jpg";
import snorkeling from "../assets/adventures/snorkeling.jpg";
import seaparty from "../assets/adventures/seaparty.jpg";

import Footer from "../components/Footer";
import useTranslation from "../i18n/useTranslation";

export default function Adventures() {
  const { type } = useParams();
  const navigate = useNavigate();
  const { t, lang } = useTranslation();

  const getHeroContent = () => {
  if (type === "wild") {
    return {
      title: t("pages.adventures_banner_wild_title"),
      desc: t("pages.adventures_banner_wild_desc"),
    };
  }

  if (type === "sea") {
    return {
      title: t("pages.adventures_banner_sea_title"),
      desc: t("pages.adventures_banner_sea_desc"),
    };
  }

  return {
    title: t("pages.adventures_page_title"),
    desc: t("pages.adventures_page_sub"),
  };
};
const hero = getHeroContent();

  const go = (id, t) => {
    navigate(`/adventures/${t}/${id}`);
  };

  const wildActivities = [
    { id: "hiking", img: hiking },
    { id: "camel", img: camel },
    { id: "mountain", img: mountain },
    { id: "tamea", img: tamea },
    { id: "desert", img: desert },
  ];

  const seaActivities = [
    { id: "diving", img: diving },
    { id: "snorkeling", img: snorkeling },
    { id: "seaparty", img: seaparty },
    { id: "cruise", img: biada },
  ];
  const getBanner = () => {
    if (type === "wild") return wildBanner;
    if (type === "sea") return seaBanner;
    return allBanner; // الاتنين
  };
  const prepareLoop = (arr) => {
    if (arr.length < 6) return [...arr, ...arr, ...arr];
    return [...arr, ...arr]; // 🔥 مهم لما العناصر تزيد
  };

  const safeWild = prepareLoop(wildActivities);
  const safeSea = prepareLoop(seaActivities);

  const swiperConfig = {
    modules: [Autoplay],

    loop: true,

    // 🔥 أهم سطرين لحل مشكلة الفراغ
    centeredSlides: true,
    loopFillGroupWithBlank: false,

    grabCursor: true,

    spaceBetween: 18,
    speed: 900,

    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },

    breakpoints: {
      0: { slidesPerView: 1.1 },
      480: { slidesPerView: 1.3 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 3.5 },
    },
  };

  const Card = ({ item, t: advType }) => (
    <div
      onClick={() => go(item.id, advType)}
      className="cursor-pointer group flex flex-col items-center"
    >
      <div className="relative w-[300px] h-[320px] rounded-full overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500">
        <img
          src={item.img}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
      </div>

      <h3 className=" text-center text-xl font-semibold  text-gray-800 group-hover:text-orange-500 transition max-w-[280px] px-2">
        {t(`adv.${item.id}.title`)}
      </h3>
    </div>
  );

  const SliderSection = ({ title, desc, data, t: advType }) => (
    <div className="max-w-6xl mx-auto px-4 mt-16 md:mt-16 mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-4xl  md:text-4xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="text-gray-600 text-md  mt-10 md:text-base leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
          {desc}
        </p>
      </div>

      {/* 🔥 أهم Fix هنا */}
      <div className="w-full ">
        <Swiper {...swiperConfig}>
          {data.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Card item={item} t={advType} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );

  return (
    <div className="pt-16 pb-20 overflow-x-hidden" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* HERO */}
      <div className="relative h-[200px] sm:h-[240px] md:h-[300px] lg:h-[340px]">
        <img src={getBanner()} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
         <h1 className="text-3xl lg:text-6xl  sm:text-2xl font-bold">
  {hero.title}
</h1>


        </div>
      </div>

      {/* WILD */}
      {(type === "wild" || !type) && (
        <SliderSection
          title={t("pages.adventures_banner_wild_title")}
          desc={t("pages.adventures_banner_wild_desc")}
          data={safeWild}
          t="wild"
        />
      )}

      {/* SEA */}
      {(type === "sea" || !type) && (
        <SliderSection
          title={t("pages.adventures_banner_sea_title")}
          desc={t("pages.adventures_banner_sea_desc")}
          data={safeSea}
          t="sea"
        />
      )}

      <Footer />
    </div>
  );
}
