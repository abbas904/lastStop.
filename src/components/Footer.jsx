import useTranslation from "../i18n/useTranslation";
import snapchatIcon from "../assets/contactus/snapchat.svg";
import instgramtIcon from "../assets/contactus/instagram.svg";
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import qr from "../assets/footer/barkod.jpg";

import pay1 from "../assets/footer/payment1.jpg";
import pay2 from "../assets/footer/payment2.png";
import pay3 from "../assets/footer/payment3.png";
import sa from "../assets/footer/sa.jpg";
import at from "../assets/footer/AT.jpg";

export default function Footer() {
  const { t } = useTranslation();
  const [showPayment, setShowPayment] = useState(false);
  const links = [
    { label: t("terms"), path: "/terms", icon: FaPhone },
    { label: t("privacy"), path: "/privacy", icon: FaEnvelope },
    {
      label: t("booking_cancel"),
      path: "/booking-cancel",
      icon: FaMapMarkerAlt,
    },
  ];

  return (
    <footer className="bg-white">
      <hr className="border-black mb-6 sm:mb-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">

        {/* GRID: موبايل عمودين، تابلت 3، ديسكتوب 5 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10 items-start">

          {/* PAYMENTS */}
          <div>
            <h2 className="text-sm sm:text-base lg:text-xl font-bold mb-3 sm:mb-4 text-black">
              {t("pages.footer_payments")}
            </h2>

            <div className="flex flex-col gap-2 sm:gap-3 items-start">
              <img
                src={pay1}
                onClick={() => setShowPayment(true)}
                className="w-16 sm:w-20 lg:w-28 object-contain cursor-pointer hover:scale-105 transition"
                alt="payment 1"
              />
              <img
                src={pay2}
                className="w-16 sm:w-20 lg:w-28 object-contain cursor-pointer hover:scale-105 transition"
                alt="payment 2"
              />
              <img
                src={pay3}
                className="w-16 sm:w-20 lg:w-28 object-contain cursor-pointer hover:scale-105 transition"
                alt="payment 3"
              />
            </div>
          </div>

          {/* GUIDE */}
          <div className="mb-6 sm:mb-10 w-full">
            <h2 className="text-sm sm:text-base lg:text-xl font-bold mb-3 sm:mb-6 text-black">
              {t("pages.footer_guide_title")}
            </h2>

            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm lg:text-base text-gray-600">
              <div>
                <p className="text-gray-900">
                  <span className="font-bold text-gray-700 text-xs sm:text-sm lg:text-base">
                    {t("pages.footer_name_label")}
                  </span>{" "}
                  {t("pages.footer_guide_name")}
                </p>

                <p className="text-gray-900">
                  <span className="font-bold text-gray-700 text-xs sm:text-sm lg:text-base">
                    {t("pages.footer_license_label")}
                  </span>{" "}
                  40002089
                </p>
              </div>

              <p className="text-gray-600 font-sans text-xs sm:text-sm lg:text-base">
                <span className="font-bold text-gray-700">
                  {t("pages.footer_crowd_label")}
                </span>{" "}
                2604130104
              </p>
            </div>
          </div>

          {/* MEMBERS */}
          <div>
            <h2 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 text-black">
              {t("pages.footer_member_title")}
            </h2>

            <div className="flex flex-col gap-2">
              <img src={sa} className="w-20 sm:w-24 lg:w-32" alt="SA" />
              <img src={at} className="w-20 sm:w-24 lg:w-32" alt="AT" />
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h2 className="text-sm sm:text-base lg:text-xl text-black font-bold mb-3 sm:mb-4">
              {t("contact")}
            </h2>

            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm lg:text-base">
              {links.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i}>
                    <Link
                      to={item.path}
                      className="flex items-center gap-1 sm:gap-2 hover:text-orange-500 transition"
                    >
                      <span className="text-orange-500 text-base sm:text-xl p-1 sm:p-2">
                        <Icon />
                      </span>
                      <span className="leading-tight">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* QR — على الموبايل يمتد على عرض كامل */}
          <div
            className="flex flex-col items-center text-center
              col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1"
          >
            <img
              src={qr}
              className="w-24 sm:w-28 md:w-32 mx-auto rounded-xl shadow border p-2"
              alt="QR Code"
            />
            <h2 className="text-sm sm:text-base lg:text-lg text-black font-bold mb-3 mt-3">
              {t("pages.footer_scan")}
            </h2>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2">
              {[
                {
                  href: "https://www.instagram.com/adventures__team/",
                  icon: instgramtIcon,
                },
                {
                  href: "https://www.instagram.com/laststop.ksa/",
                  icon: instgramtIcon,
                },
                {
                  href: "https://www.snapchat.com/@a_abmfj?invite_id=ETJBU1tr&share_id=lcblJnblRtaGyRFxqoW_AQ&sid=d7d29211d7de48b69a6104eaa23e06be",
                  icon: snapchatIcon,
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full overflow-hidden"
                >
                  <img
                    src={item.icon}
                    className="w-[70%] h-[70%] object-contain rounded-full"
                    alt="social icon"
                  />
                </a>
              ))}

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@adventures__team1?_r=1&_t=ZS-95yRREKlDhi"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-black overflow-hidden"
              >
                <svg
                  className="w-[55%] h-[55%] text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 3c.6 2.8 2.4 4.5 5 4.8V11c-1.9 0-3.7-.6-5-1.6V16c0 3.5-2.8 6-6.3 6C6.2 22 4 19.8 4 17c0-3 2.5-5.2 5.5-5 .3 0 .6 0 .9.1V15c-.3-.1-.6-.1-.9-.1-1.3 0-2.3 1-2.3 2.3S8.2 19.5 9.5 19.5 12 18.4 12 17V3h4z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@LastStopElite"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-red-600 text-white hover:scale-110 transition-all duration-300"
              >
                <FaYoutube className="text-base sm:text-xl" />
              </a>
            </div>
          </div>

        </div>
      </div>

      <hr className="border-black mt-6 sm:mt-10" />

      <div className="text-center text-xs sm:text-sm py-3 sm:py-4 mt-2 sm:mt-4 px-4">
        {t("pages.footer_copyright")}
      </div>

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-3xl p-5 sm:p-6 w-full max-w-sm sm:max-w-md relative shadow-2xl">
            {/* close button */}
            <button
              onClick={() => setShowPayment(false)}
              className="absolute top-3 left-3 text-gray-500 hover:text-black text-2xl"
            >
              ×
            </button>

            <h2 className="text-sm sm:text-base md:text-xl font-bold mb-3 sm:mb-4 text-black leading-snug break-words pt-4">
              {t("pages.footer_card_title")}
            </h2>

            <form className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder={t("pages.footer_card_holder_ph")}
                className="w-full border rounded-xl p-2.5 sm:p-3 text-sm sm:text-base outline-none focus:border-orange-400"
              />

              <input
                type="text"
                placeholder={t("pages.footer_card_number_ph")}
                maxLength={19}
                className="w-full border rounded-xl p-2.5 sm:p-3 text-sm sm:text-base outline-none focus:border-orange-400"
              />

              <div className="flex gap-2 sm:gap-3">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-1/2 border rounded-xl p-2.5 sm:p-3 text-sm sm:text-base outline-none focus:border-orange-400"
                />

                <input
                  type="text"
                  placeholder="CVV"
                  maxLength={4}
                  className="w-1/2 border rounded-xl p-2.5 sm:p-3 text-sm sm:text-base outline-none focus:border-orange-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 sm:py-3 text-sm sm:text-base rounded-xl transition"
              >
                {t("pages.footer_card_submit")}
              </button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
}