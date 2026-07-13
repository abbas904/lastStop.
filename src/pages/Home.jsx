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

 


const baseLink =
  "flex items-center gap-1 text-[#0c0c0c] hover:text-orange-500 text-[18px] whitespace-nowrap transition-all duration-200";
  return (
    
    <>
  
      <Navbar />
      <HeroSection />
      <AboutUs/>
      <hr className="border-black mb-10" />
      <Footer/>

    </>
  );
}