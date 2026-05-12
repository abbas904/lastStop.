import bookingCancelEn from "./legal/bookingCancelEn.js";
import bookingCancelDe from "./legal/bookingCancelDe.js";
import bookingCancelFr from "./legal/bookingCancelFr.js";
import bookingCancelRu from "./legal/bookingCancelRu.js";
import { termsByLang } from "./legal/termsBundle.js";
import { privacyByLang } from "./legal/privacyBundle.js";

const bookingLocalized = {
  en: {
    heroH1: "Booking & cancellation",
    pageH1: "Booking & cancellation",
    body: bookingCancelEn,
  },
  de: {
    heroH1: "Buchung & Stornierung",
    pageH1: "Buchung & Stornierung",
    body: bookingCancelDe,
  },
  fr: {
    heroH1: "Réservation et annulation",
    pageH1: "Réservation et annulation",
    body: bookingCancelFr,
  },
  ru: {
    heroH1: "Бронирование и отмена",
    pageH1: "Бронирование и отмена",
    body: bookingCancelRu,
  },
};

export const legalByLang = {
  ar: {
    bookingCancel: { mode: "component" },
    terms: termsByLang.ar,
    privacy: privacyByLang.ar,
  },
  en: {
    bookingCancel: bookingLocalized.en,
    terms: termsByLang.en,
    privacy: privacyByLang.en,
  },
  de: {
    bookingCancel: bookingLocalized.de,
    terms: termsByLang.de,
    privacy: privacyByLang.de,
  },
  fr: {
    bookingCancel: bookingLocalized.fr,
    terms: termsByLang.fr,
    privacy: privacyByLang.fr,
  },
  ru: {
    bookingCancel: bookingLocalized.ru,
    terms: termsByLang.ru,
    privacy: privacyByLang.ru,
  },
};
