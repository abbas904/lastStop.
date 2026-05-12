import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import user1 from "../assets/Testemonial/test1.jpg";
import user2 from "../assets/Testemonial/test2.jpg";
import user3 from "../assets/Testemonial/test3.jpg";
import user4 from "../assets/Testemonial/test4.jpg";
import user5 from "../assets/Testemonial/test5.jpg";

import useTranslation from "../i18n/useTranslation";

export default function Testimonials() {
  const { t, raw, lang } = useTranslation();

  const reviews = raw("testimonials");
  const list = Array.isArray(reviews) ? reviews : [];

  const images = [user1, user2, user3, user4, user5];

  const isRTL = lang === "ar";

  return (
    <section
      className="testimonials-section"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h2 className="section-title">
        {t("testimonials_title")}
      </h2>

      <Swiper
        key={lang} // 🔥 أهم سطر (يعيد بناء السلايدر عند تغيير اللغة)
        dir={isRTL ? "rtl" : "ltr"} // 🔥 مهم جدًا لـ Swiper
        modules={[Autoplay]}
        loop={true}
        speed={900}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {list.map((item, i) => (
          <SwiperSlide key={item.name || i}>
            <div className="testimonial-card">

              <div className="quote-float">❝</div>

              <div className="user">
                <img
                  src={images[i] ?? images[0]}
                  alt={item.name}
                />
                <div>
                  <h4 className="text-black">{item.name}</h4>
                  <span>{item.city}</span>
                </div>
              </div>

              <div className="stars">★★★★★</div>

              <p className="content">{item.text}</p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}