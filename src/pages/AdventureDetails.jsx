import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import adventuresData from "../data/adventuresData";
import Footer from "../components/Footer";
import useTranslation from "../i18n/useTranslation";

export default function AdventureDetails() {
  const { id } = useParams();
  const { t, lang } = useTranslation();
  const item = adventuresData[id];

  const [mainImg, setMainImg] = useState(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // autoplay control
  const [autoPlay, setAutoPlay] = useState(true);

  const title = t(`adv.${id}.title`);
  const description = t(`adv.${id}.desc`);
  const textAlign = lang === "ar" ? "text-right" : "text-left";
  const barEnd = lang === "ar" ? "ml-auto" : "mr-auto";

  useEffect(() => {
    if (item?.main) {
      setMainImg(item.main);
    }
  }, [item]);

  const images = item?.images || [];
  const mainImage = mainImg || item?.main;

  // 🔥 AUTO SLIDE (كل 3 ثواني)
  useEffect(() => {
    if (!open || !autoPlay || images.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [open, autoPlay, images.length]);

  const openModal = (i) => {
    setIndex(i);
    setOpen(true);
    setAutoPlay(true);
  };

  const next = () => {
    setIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  if (!item) {
    return (
      <div className="min-h-screen pt-28 text-center text-gray-500" dir={lang === "ar" ? "rtl" : "ltr"}>
        {t("pages.area_not_found")}
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="pt-28">

        {/* TITLE */}
        <div className={`max-w-6xl mx-auto px-4 mb-10 ${textAlign}`}>
          <h1 className="text-3xl  font-extrabold text-black">
            {title}
          </h1>
          <div className={`w-16 h-1 bg-orange-500 mt-3 rounded-full ${barEnd}`}></div>
        </div>

        {/* GALLERY */}
        <div className="max-w-6xl mx-auto px-2 grid grid-cols-1 md:grid-cols-3 gap-3 mb-28">

          {/* MAIN IMAGE */}
          <div className="md:col-span-2 overflow-hidden rounded-2xl">
            {mainImage && (
              <img
                src={mainImage}
                alt="main"
                className="w-full h-[280px] sm:h-[360px] md:h-[520px] object-cover hover:scale-105 transition duration-700 cursor-pointer"
                onClick={() => {
                  const i = images.findIndex(img => img === mainImage);
                  openModal(i === -1 ? 0 : i);
                }}
              />
            )}
          </div>

          {/* THUMBNAILS */}
          <div className="grid grid-cols-2 gap-2 h-[280px] sm:h-[360px] md:h-[520px]">

            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => {
                  setMainImg(img);
                  openModal(i);
                }}
                className="rounded-xl overflow-hidden cursor-pointer"
              >
                <img
                  src={img}
                  className={`w-full h-full object-cover hover:scale-110 transition duration-500 ${
                    mainImage === img ? "ring-2 ring-orange-500" : ""
                  }`}
                />
              </div>
            ))}

          </div>
        </div>
        {/* DESCRIPTION */}
<div className="max-w-6xl mx-auto px-4 mb-20">
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

    <div className="border-b">
      <div className={`px-6 py-4 text-sm font-bold text-orange-500 ${textAlign}`}>
        {t("pages.adventure_details_desc")}
      </div>
    </div>

    <div className="p-6 md:p-8">
      <p className={`text-gray-700 leading-8 text-[15px] ${textAlign}`}>
        {description}
      </p>
    </div>

  </div>
</div>
      </div>

      {/* LIGHTBOX */}
      {open && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[999999]"
          onClick={() => setOpen(false)}
        >

          {/* CLOSE */}
        {/* CLOSE */}
<button
  onClick={() => setOpen(false)}
  className="
    fixed top-4 right-4
    z-[99999]
    bg-black/60
    hover:bg-black
    text-white
    w-10 h-10
    rounded-full
    flex items-center justify-center
    text-xl
    transition
  "
>
  ✕
</button>
          {/* AUTO PLAY TOGGLE */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setAutoPlay((p) => !p);
            }}
            className="absolute top-5 left-20 text-white text-sm bg-white/10 px-3 py-1 rounded-full"
          >
            {autoPlay ? t("pages.adventure_lightbox_pause") : t("pages.adventure_lightbox_play")}
          </button>

          {/* PREV */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-6 text-white text-6xl hover:scale-125 transition"
          >
            ‹
          </button>

          {/* IMAGE */}
          <img
            src={images[index]}
            alt="preview"
            onClick={(e) => e.stopPropagation()}
            className="max-w-[92%] max-h-[88vh] object-contain rounded-xl shadow-2xl transition duration-500"
          />

          {/* NEXT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-6 text-white text-6xl hover:scale-125 transition"
          >
            ›
          </button>

        </div>
      )}

      <Footer />
    </div>
  );
}
