import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    localStorage.getItem("lang") || "ar"
  );

  const changeLang = (language) => {
    setLang(language);
  };

  useEffect(() => {
    // حفظ اللغة
    localStorage.setItem("lang", lang);

    // RTL / LTR
    document.documentElement.dir =
      lang === "ar" ? "rtl" : "ltr";

    // لغة الصفحة
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, changeLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}