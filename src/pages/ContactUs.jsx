import React from "react";
import banner from "../assets/contactus/banner.jpg";
import Footer from "../components/Footer";
import snapchatIcon from "../assets/contactus/snapchat.svg";
import instgramtIcon from "../assets/contactus/instagram.svg";
import { FaYoutube } from "react-icons/fa";

import useTranslation from "../i18n/useTranslation";


const ContactUs = () => {
  const { t, lang } = useTranslation();

  return (
    <div className="bg-white text-black overflow-x-hidden" dir={lang === "ar" ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <div className="relative w-full h-[35vh] sm:h-[45vh] md:h-[60vh] overflow-hidden">
        <img
          src={banner}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold text-center">
            {t("pages.contact_title")}
          </h1>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ================= LEFT ================= */}
        <div className="min-w-0">

          <p className="text-black text-md sm:text-lg leading-7 sm:leading-8 mb-5 sm:mb-6">
            {t("pages.contact_lead")}
          </p>

          <h3 className="text-xl text-black sm:text-2xl font-bold mb-5 sm:mb-6">
            {t("pages.contact_channels")}
          </h3>

          {/* PHONE */}
          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl border hover:shadow-lg transition">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-lg sm:text-xl">
              📞
            </div>
            <div className="min-w-0">
              <h4 className="font-semibold text-black text-sm sm:text-base">{t("pages.contact_phone_lbl")}</h4>
              <p className="text-gray-600 text-sm sm:text-base break-words">
                966530303356+
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl border hover:shadow-lg transition mt-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-lg sm:text-xl">
              ✉️
            </div>
            <div className="min-w-0">
              <h4 className="font-semibold text-black text-sm sm:text-base">{t("pages.contact_email_lbl")}</h4>
              <p className="text-gray-600 text-sm sm:text-base break-words">
                a.t.s.team@hotmail.com
              </p>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl border hover:shadow-lg transition mt-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-lg sm:text-xl">
              📍
            </div>
            <div className="min-w-0">
              <h4 className="font-semibold text-black text-sm sm:text-base">{t("pages.contact_address_lbl")}</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                {t("pages.contact_address_val")}
              </p>
            </div>
          </div>

          {/* ================= SOCIAL ================= */}
       <div className="border rounded-2xl p-5 mt-6 hover:shadow-lg transition bg-white/70 backdrop-blur-sm">

  <h3 className="text-lg sm:text-xl font-bold mb-5 text-center text-black">
    {t("pages.contact_social")}
  </h3>

  <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">

    {/* Instagram 1 */}
    <a
      href="https://www.instagram.com/laststopexperiences?utm_source=qr"
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center hover:scale-110 transition"
    >
      <img
        src={instgramtIcon}
        alt="Instagram"
        className="w-full h-full object-contain"
      />
    </a>

    {/* Instagram 2 */}
    <a
      href="https://www.instagram.com/adventures__team/"
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center hover:scale-110 transition"
    >
      <img
        src={instgramtIcon}
        alt="Instagram"
        className="w-full h-full object-contain"
      />
    </a>

    {/* Snapchat */}
    <a
      href="https://www.snapchat.com/@a_abmfj?invite_id=ETJBU1tr&share_id=lcblJnblRtaGyRFxqoW_AQ&sid=d7d29211d7de48b69a6104eaa23e06be"
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center hover:scale-110 transition"
    >
      <img
        src={snapchatIcon}
        alt="Snapchat"
        className="w-full h-full object-contain rounded-full"
      />
    </a>

    {/* TikTok */}
    <a
      href="https://www.tiktok.com/@adventures__team1"
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-black hover:scale-110 transition"
    >
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M16 3c.6 2.8 2.4 4.5 5 4.8V11c-1.9 0-3.7-.6-5-1.6V16c0 3.5-2.8 6-6.3 6C6.2 22 4 19.8 4 17c0-3 2.5-5.2 5.5-5 .3 0 .6 0 .9.1V15c-.3-.1-.6-.1-.9-.1-1.3 0-2.3 1-2.3 2.3S8.2 19.5 9.5 19.5 12 18.4 12 17V3h4z"/>
      </svg>
    </a>

    {/* YouTube */}
    <a
      href="https://www.youtube.com/@LastStopElite"
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-red-600 text-white hover:scale-110 transition"
    >
      <FaYoutube className="text-lg sm:text-xl" />
    </a>

  </div>
</div>
        </div>

        {/* ================= FORM ================= */}
        <div className="bg-gray-200 p-5 sm:p-6 rounded-2xl shadow-md">

          <h3 className="text-lg text-black sm:text-xl font-bold mb-5 sm:mb-6">
            {t("pages.contact_form_intro")}
          </h3>

          <form className="space-y-4 sm:space-y-6">

            <input className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-black" placeholder={t("pages.contact_ph_name")} />
            <input className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-black" placeholder={t("pages.contact_ph_email")} />
            <input className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-black" placeholder={t("pages.contact_ph_phone")} />

            <textarea
              rows="4"
              className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-black resize-none"
              placeholder={t("pages.contact_ph_message")}
            />

            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
              {t("pages.contact_submit")}
            </button>

          </form>
        </div>

      </div>

      {/* ================= MAP ================= */}
      <div className="w-full h-[220px] sm:h-[320px] md:h-[420px] mb-10 overflow-hidden">
        <iframe
          className="w-full h-full"
          title="map"
          src="https://maps.google.com/maps?q=jeddah&t=m&z=12&output=embed"
        />
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
