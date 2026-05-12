import { translationBases } from "./translationBases.js";
import { destinationsByLang } from "./destinationsBundle.js";
import { adventuresByLang } from "./adventuresLocale.js";
import { pagesByLang } from "./pagesLocale.js";
import { legalByLang } from "./legalBundles.js";

const codes = ["ar", "en", "de", "fr", "ru"];

const translations = Object.fromEntries(
  codes.map((code) => [
    code,
    {
      ...translationBases[code],
      dest: destinationsByLang[code],
      adv: adventuresByLang[code],
      pages: pagesByLang[code],
      legal: legalByLang[code],
    },
  ])
);

export default translations;
