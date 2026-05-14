import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import destinationsData from "../data/destinationsData";
import Footer from "../components/Footer";
import useTranslation from "../i18n/useTranslation";

export default function DestinationAreas() {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const { t, lang } = useTranslation();

  const city = destinationsData?.[type]?.[id];
  const areas = city?.areas || [];

  const cityName = t(`dest.${type}.${id}.name`);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goDetails = (areaId) => {
    navigate(`/destinations/${type}/${id}/area/${areaId}`);
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div
      className="bg-gray-50 min-h-screen overflow-x-hidden shadow-md hover:shadow-lg"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >

      {/* HERO */}
      <div className="relative h-[35vh] w-full overflow-hidden">
        <img
          src={city?.img}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 "></div>

        <div className="absolute inset-0 flex flex-col items-center mt-16 justify-center text-white text-center px-3">
          <h1 className="text-2xl md:text-5xl font-bold">
            {cityName}
          </h1>

          <div className="w-16 h-1 bg-orange-500 my-3"></div>

         
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-3 md:px-6 py-6 max-w-[1400px] mx-auto ">

        {/* GRID FIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 w-full mt-10 mb-10">

          {areas.map((area, index) => (
            <div
              key={area.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg  border border-gray-300 group transition w-full"
            >

              {/* IMAGE */}
              <div className="overflow-hidden w-full ">
                <img
                  src={area.img}
                
                  className="
                    w-full h-40 sm:h-48 md:h-56
                    object-cover 
                    hover:scale-110 transition duration-500
                    
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-2 space-y-4">

                <h2 className="font-bold mt-2 text-black text-base md:text-xl">
                  {t(`dest.${type}.${id}.areas.${area.id}.name`)}
                </h2>

                <div className="text-gray-500 text-xs md:text-sm">
                  📍 {cityName}
                </div>

                <button
                  onClick={() => goDetails(area.id)}
                  className="w-full bg-black text-white py-2 text-sm rounded-lg hover:bg-orange-500"
                >
                  {t("pages.destination_area_btn")}
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>

     {isOpen && (
  <div
    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-2"
    onClick={() => setIsOpen(false)}
  >

    {/* WRAPPER لازم يكون relative */}
    <div
      className="relative w-full flex justify-center"
      onClick={(e) => e.stopPropagation()}
    >

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setIsOpen(false)}
        className="
          absolute top-2 right-2
          bg-black/60 hover:bg-black/80
          text-white
          w-9 h-9
          rounded-full
          flex items-center justify-center
          text-lg
          z-50
        "
      >
        ✕
      </button>

      {/* IMAGE */}
      <img
        src={areas[currentIndex].img}
        className="
          max-h-[75vh]
          max-w-[95vw]
          object-contain
          rounded-lg
        "
      />

    </div>

    {/* Prev */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        setCurrentIndex((prev) =>
          prev === 0 ? areas.length - 1 : prev - 1
        );
      }}
      className="absolute left-2 md:left-6 text-white text-4xl"
    >
      ‹
    </button>

    {/* Next */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        setCurrentIndex((prev) =>
          prev === areas.length - 1 ? 0 : prev + 1
        );
      }}
      className="absolute right-2 md:right-6 text-white text-4xl"
    >
      ›
    </button>

  </div>
)}

      <Footer />
    </div>
  );
}
