import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "./translations";
import { nestedGet } from "./nestedGet";

export default function useTranslation() {
  const { lang } = useContext(LanguageContext);

  const t = (key) => {
    const v =
      nestedGet(translations[lang], key) ??
      nestedGet(translations.en, key);
    if (v === undefined || v === null) return key;
    if (typeof v === "string" || typeof v === "number") return String(v);
    return key;
  };

  const raw = (key) =>
    nestedGet(translations[lang], key) ??
    nestedGet(translations.en, key);

  return {
    t,
    raw,
    lang,
  };
}
