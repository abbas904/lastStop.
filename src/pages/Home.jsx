import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Testimonial from "../components/Testemonial";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import useTranslation from "../i18n/useTranslation";

export default function Home() {
  const { t } = useTranslation();

  const [showScrollTop, setShowScrollTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 400);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const baseLink =
  "flex items-center gap-1 text-[#0c0c0c] hover:text-orange-500 text-[18px] whitespace-nowrap transition-all duration-200";
  return (
    
    <>
  <div>
  {/* WhatsApp - Right */}
  <a
    href="https://wa.me/966530303356"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 
    bg-green-500 text-white w-12 h-12 sm:w-14 sm:h-14 
    flex items-center justify-center rounded-full shadow-lg 
    hover:scale-110 transition"
  >
    <i className="fab fa-whatsapp text-xl sm:text-2xl"></i>
  </a>

  {/* Gmail - Left */}
  <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50">
  <a
    href="mailto:a.t.s.team@hotmail.com"
    className="flex items-center gap-2 sm:gap-3
    bg-[#012d50] px-3 py-2 sm:px-4 sm:py-3
    rounded-full shadow-lg hover:scale-105 transition-all duration-300"
  >
    <span
      className={`${baseLink} text-sm sm:text-sm md:text-base text-white whitespace-nowrap`}
    >
      {t("pages.home_float_cta")}
    </span>

    <div className=" text-white w-8 h-8 sm:w-10 sm:h-10
    flex items-center justify-center rounded-full">
      <i className="fas fa-envelope text-xl sm:text-2xl md:text-2xl"></i>
    </div>
  </a>
</div>

</div>
{showScrollTop && (
  <button
    onClick={scrollToTop}
    className="fixed bottom-20 right-13 z-50 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
  >
    <FaArrowUp />
  </button>
)}
      <Navbar />
      <HeroSection />
      <AboutUs/>
      <hr className="border-black mb-10" />
      <Footer/>

    </>
  );
}