import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import destinationsData from "../data/destinationsData";
import Footer from "../components/Footer";
import useTranslation from "../i18n/useTranslation";

export default function AreaDetails() {
  const { type, id, areaId } = useParams();
  const { t, lang } = useTranslation();
  const [activeTab, setActiveTab] = useState("desc");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const areaPath = `dest.${type}.${id}.areas.${areaId}`;
  const areaName = t(`${areaPath}.name`);
  const areaDescription = t(`${areaPath}.description`);

  // منع الـ scroll خلف الـ modal
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // منع الـ horizontal scroll في الصفحة كلها
  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    return () => {
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
    };
  }, []);

  const city = destinationsData?.[type]?.[id];
  const area = city?.areas?.find((a) => a.id === areaId);

  if (!area) {
    return (
      <div className="text-center mt-20 text-gray-500">
        {t("pages.area_not_found")}
      </div>
    );
  }

  const images = [area.img, ...(area.images || [])];
  const textAlign = lang === "ar" ? "text-right" : "text-left";

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((p) => (p === images.length - 1 ? 0 : p + 1));
  };

  return (
    <div
      style={{ overflowX: "hidden", width: "100%" }}
      className="bg-gray-50 min-h-screen"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div
        style={{ overflowX: "hidden", width: "100%" }}
        className="pt-20 md:pt-28"
      >

        {/* TITLE */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6 md:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gray-800 leading-snug">
            {areaName}
          </h1>
          <div className="w-12 md:w-16 h-1 bg-orange-500 mt-2 md:mt-3 rounded-full" />
        </div>

        {/* GALLERY */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 md:mb-20">
          <div className="flex flex-col lg:flex-row gap-3 md:gap-4">

            {/* الصورة الرئيسية */}
            <div
              onClick={() => openModal(0)}
              className="w-full lg:w-2/3 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer flex-shrink-0"
            >
              <img
                src={images[0]}
                alt={areaName}
                className="w-full object-cover h-[200px] sm:h-[260px] md:h-[360px] lg:h-[500px] hover:brightness-90 transition-all duration-300"
              />
            </div>

            {/* الصور الجانبية */}
            <div className="w-full lg:w-1/3 min-w-0">

              {/* موبايل: أفقي */}
              <div
                className="flex lg:hidden gap-2 pb-1"
                style={{
                  overflowX: "auto",
                  overflowY: "hidden",
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  maxWidth: "100%",
                }}
              >
                {images.slice(1).map((img, i) => (
                  <div
                    key={i}
                    onClick={() => openModal(i + 1)}
                    style={{ flexShrink: 0, width: "100px", height: "75px" }}
                    className="rounded-xl overflow-hidden cursor-pointer"
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* ديسكتوب: شبكة 2×2 */}
              <div className="hidden lg:grid grid-cols-2 gap-2 h-[500px]">
                {images.slice(1, 5).map((img, i) => (
                  <div
                    key={i}
                    onClick={() => openModal(i + 1)}
                    className="rounded-xl overflow-hidden cursor-pointer"
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover hover:brightness-90 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <div className="border-b flex gap-5 md:gap-8 text-sm md:text-lg font-semibold">
            <button
              onClick={() => setActiveTab("desc")}
              className={`pb-3 border-b-2 transition-colors ${
                activeTab === "desc"
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {t("pages.area_tab_description")}
            </button>
          </div>

          <div className="mt-5 md:mt-8 bg-white p-4 sm:p-6 md:p-10 rounded-xl md:rounded-2xl shadow-sm text-gray-700">
            {activeTab === "desc" && (
              <p className={`text-sm sm:text-base text-black md:text-lg leading-7 md:leading-9 ${textAlign}`}>
                {areaDescription}
              </p>
            )}
          </div>
        </div>

      </div>

      {/* MODAL */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100dvh",
            backgroundColor: "rgba(0,0,0,0.93)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            touchAction: "none",
          }}
        >
          {/* زرار السابق */}
          <button
            onClick={prevImage}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10000,
              background: "rgba(255,255,255,0.15)",
              border: "none",
              borderRadius: "50%",
              width: "42px",
              height: "42px",
              color: "white",
              fontSize: "28px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            ‹
          </button>

          {/* الصورة */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              padding: "56px 62px",
              boxSizing: "border-box",
            }}
          >
            <img
              src={images[currentIndex]}
              alt={areaName}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                borderRadius: "10px",
                display: "block",
              }}
            />
          </div>

          {/* زرار التالي */}
          <button
            onClick={nextImage}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10000,
              background: "rgba(255,255,255,0.15)",
              border: "none",
              borderRadius: "50%",
              width: "42px",
              height: "42px",
              color: "white",
              fontSize: "28px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            ›
          </button>

          {/* زرار الإغلاق */}
          <button
            onClick={() => setIsOpen(false)}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              zIndex: 10000,
              background: "rgba(255,255,255,0.15)",
              border: "none",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>

          {/* عداد الصور */}
          <div
            style={{
              position: "absolute",
              bottom: "14px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "rgba(255,255,255,0.6)",
              fontSize: "13px",
              whiteSpace: "nowrap",
            }}
          >
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
