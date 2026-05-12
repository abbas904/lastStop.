import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import useTranslation from "../i18n/useTranslation";
import banner from "../assets/gallery/gallery2.jpg";
import logo from "../assets/about/logo4.png";

// 🔥 الصور
const images = Object.values(
  import.meta.glob("../assets/gallery/photo/laststop/*.{jpg,jpeg,png}", {
    eager: true,
  })
).map((img) => img.default);

// 🎬 فيديو + ريلز
const media = [
  {
    type: "video",
    id: "ySykPxAq2xM",
    thumbnail: "https://img.youtube.com/vi/ySykPxAq2xM/hqdefault.jpg",
  },
  {
    type: "video",
    id: "kxc9YbrTQYg",
    thumbnail: "https://img.youtube.com/vi/kxc9YbrTQYg/hqdefault.jpg",
  },
  {
    type: "short",
    id: "IlkGXyiTOaA",
    thumbnail: "https://img.youtube.com/vi/IlkGXyiTOaA/hqdefault.jpg",
  },
  {
    type: "short",
    id: "IAyIY53M9oA",
    thumbnail: "https://img.youtube.com/vi/IAyIY53M9oA/hqdefault.jpg",
  },
];

export default function PhotoGallery() {
  const { t, lang } = useTranslation();

  const [activeMedia, setActiveMedia] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const swiperRef = useRef(null);

  const nextImage = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // 🔥 مهم: تحديث Swiper عند تغيير اللغة
  useEffect(() => {
    setTimeout(() => {
      swiperRef.current?.swiper?.update();
    }, 150);
  }, [lang]);

  return (
    <div
      className="bg-white text-black overflow-x-hidden w-full"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* ================= BANNER ================= */}
      <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
        <img src={banner} className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl mt-10 font-bold text-center">
            {t("pages.gallery_banner")}
          </h1>
        </div>
      </div>

      <div className="py-16">
        {/* ================= MEDIA ================= */}
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12 tracking-wide">
          {t("pages.gallery_video_heading")}
        </h2>

        <div className="px-2 md:px-6">
          <Swiper
            key={lang} // 🔥 أهم سطر لحل المشكلة
            ref={swiperRef}
            dir={lang === "ar" ? "rtl" : "ltr"} // 🔥 RTL fix
            modules={[Autoplay]}
            loop={true}
            spaceBetween={20}
            speed={1500}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3.5 },
            }}
          >
            {media.map((item, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setActiveMedia(item)}
                  className="relative cursor-pointer rounded-3xl overflow-hidden group h-[260px] md:h-[300px] shadow-lg"
                >
                  <img
                    src={item.thumbnail}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {item.type === "short" ? "REEL" : "VIDEO"}
                  </div>

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      ▶
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ================= TITLE ================= */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mt-24 mb-12 text-center">
          <img src={logo} className="w-10 h-10 md:w-11 md:h-11 object-contain" />

          <h2 className="text-2xl md:text-4xl font-extrabold text-black tracking-wide">
            {t("pages.gallery_brand")}
          </h2>
        </div>

        {/* ================= GALLERY ================= */}
        <div className="px-4 md:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: i * 0.02 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="relative group overflow-hidden rounded-2xl shadow-md"
              >
                <motion.img
                  src={img}
                  className="w-full h-[220px] object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition">
                  <div className="bg-white/90 p-2 rounded-full text-sm">
                    🔍
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= MODALS (كما هي بدون تغيير كبير) ================= */}
        <AnimatePresence>
          {activeMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
              onClick={() => setActiveMedia(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveMedia(null)}
                  className="absolute top-3 right-3 bg-black/70 text-white w-10 h-10 rounded-full"
                >
                  ✖
                </button>

                <iframe
                  className={`w-full ${
                    activeMedia.type === "short" ? "h-[650px]" : "h-[520px]"
                  } rounded-xl`}
                  src={`https://www.youtube.com/embed/${activeMedia.id}`}
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
              onClick={() => setActiveIndex(null)}
            >
              <motion.img
                src={images[activeIndex]}
                className="max-h-[85vh] rounded-xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}