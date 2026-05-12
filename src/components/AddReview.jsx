import React, { useState } from "react";
import useTranslation from "../i18n/useTranslation";

const AddReview = () => {
  const { t, lang } = useTranslation();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // هنا ممكن تبعت البيانات لـ API
    setSubmitted(true);

    // يقفل البوب اب بعد 2 ثانية (اختياري)
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="text-center mt-10" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* زر */}
      <button
        onClick={() => setOpen(true)}
        className="bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition"
      >
        {t("pages.review_add_btn")}
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          
          <div className="bg-white p-6 rounded-2xl w-[90%] md:w-[400px] relative">
            
            {/* زر الإغلاق */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 left-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold mb-4 text-center">
                  {t("pages.review_modal_title")}
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  
                  <input
                    type="text"
                    placeholder={t("pages.review_ph_name")}
                    className="border p-2 rounded-full"
                    required
                  />

                  <input
                    type="email"
                    placeholder={t("pages.review_ph_email")}
                    className="border p-2 rounded"
                    required
                  />

                  <textarea
                    placeholder={t("pages.review_ph_text")}
                    className="border p-2 rounded h-24"
                    required
                  />

                  <button
                    type="submit"
                    className="bg-orange-400 text-white py-2 rounded hover:bg-orange-700"
                  >
                    {t("pages.review_submit")}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <h2 className="text-orange-500 text-xl font-bold">
                  {t("pages.review_thanks")}
                </h2>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default AddReview;
