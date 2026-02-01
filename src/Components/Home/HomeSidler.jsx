import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// استيراد الصور
import imgSlider1 from "../../img_car/cars/mustang.png";
import imgSlider2 from "../../img_car/corfet-22-23.png";
import imgSlider3 from "../../img_car/cars/askled.png";

export const HomeSidler = () => {
  const { t } = useTranslation();

  const slides = [
    {
      img: imgSlider1,
      title: (
        <>
          {t("slider.slide1.title_part1")}{" "}
          <span style={{ color: "#fc8b1a" }}>
            {t("slider.slide1.title_span")}
          </span>{" "}
          {t("slider.slide1.title_part2")}
        </>
      ),
      desc: t("slider.slide1.desc"),
    },
    {
      img: imgSlider2,
      title: (
        <>
          {t("slider.slide2.title_part1")}{" "}
          <span style={{ color: "#fc8b1a" }}>
            {t("slider.slide2.title_span")}
          </span>{" "}
          {t("slider.slide2.title_part2")}
        </>
      ),
      desc: t("slider.slide2.desc"),
    },
    {
      img: imgSlider3,
      title: (
        <>
          {t("slider.slide3.title_part1")}{" "}
          <span style={{ color: "#fc8b1a" }}>
            {t("slider.slide3.title_span")}
          </span>{" "}
          {t("slider.slide3.title_part2")}
        </>
      ),
      desc: t("slider.slide3.desc"),
    },
  ];

  return (
    <div className="home-slider-wrapper">
      <Fade triggerOnce>
        <Carousel
          fade
          interval={4000}
          pause={false}
          controls={true}
          indicators={true}
        >
          {slides.map((item, index) => (
            <Carousel.Item key={index}>
              <div
                className="slider-container"
                style={{
                  position: "relative",
                  height: "100vh",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.img}
                  className="d-block w-100 h-100 slider-image"
                  alt={`Slide ${index}`}
                  style={{ objectFit: "cover" }}
                />
                <div
                  className="overlay-gradient"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.4)",
                  }}
                ></div>
              </div>

              <Carousel.Caption
                className="custom-caption"
                style={{ bottom: "25%", left: "5%", right: "5%" }}
              >
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="fw-bold"
                  style={{
                    fontSize: window.innerWidth < 768 ? "1.8rem" : "3.5rem",
                  }}
                >
                  {item.title}
                </motion.h1>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="line mx-auto my-2"
                  style={{ height: "3px", backgroundColor: "#fc8b1a" }}
                ></motion.div>

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="d-none d-md-block fs-5"
                >
                  {item.desc}
                </motion.p>

                {/* حاوية الأزرار - أصغر وأكثر تناسقاً */}
                <div
                  className="btBg d-flex flex-nowrap justify-content-center gap-2 mt-4 mx-auto"
                  style={{ maxWidth: "320px", width: "90%" }}
                >
                  {/* زر احجز الآن */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{ flex: "1" }}
                  >
                    <Button
                      variant="success"
                      className="w-100 fw-bold shadow-sm d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#25D366",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "0.9rem", // حجم موحد وصغير
                        height: "42px", // ارتفاع أقل ليصبح الزر أصغر
                        whiteSpace: "nowrap",
                        padding: "0 10px",
                      }}
                      onClick={() => {
                        const phoneNumber = "+96590930061";
                        const message = encodeURIComponent(
                          "مرحباً شركة الوهج، أرغب في الاستفسار عن حجز سيارة.",
                        );
                        window.open(
                          `https://wa.me/${phoneNumber}?text=${message}`,
                          "_blank",
                        );
                      }}
                    >
                      {t("book_now")}
                    </Button>
                  </motion.div>

                  {/* زر اتصل بنا */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{ flex: "1" }}
                  >
                    <Button
                      as={Link}
                      to="/contacted"
                      className="w-100 fw-bold shadow-sm text-white d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#fc8b1a",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "0.9rem", // نفس حجم الخط بالضبط
                        height: "42px", // نفس الارتفاع بالضبط
                        whiteSpace: "nowrap",
                        padding: "0 10px",
                      }}
                    >
                      {t("contact_us")}
                    </Button>
                  </motion.div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Fade>
    </div>
  );
};

export default HomeSidler;
