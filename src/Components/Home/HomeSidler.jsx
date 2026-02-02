import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

// استيراد الصور
import imgSlider1 from "/public/غلاف.png";
import imgSlider2 from "/public/فارهة.png";
import imgSlider3 from "/public/رياضية-1.png";

export const HomeSidler = () => {
  const { t } = useTranslation();

  const slides = [
    { img: imgSlider1, titleKey: "slide1", desc: t("slider.slide1.desc") },
    { img: imgSlider2, titleKey: "slide2", desc: t("slider.slide2.desc") },
    { img: imgSlider3, titleKey: "slide3", desc: t("slider.slide3.desc") },
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
              <div className="slider-container">
                <img
                  src={item.img}
                  className="slider-image"
                  alt={`Slide ${index}`}
                />
                <div className="overlay-gradient"></div>
              </div>

              <Carousel.Caption className="custom-caption">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="fw-bold slider-title"
                >
                  {t(`slider.${item.titleKey}.title_part1`)}{" "}
                  <span style={{ color: "#fc8b1a" }}>
                    {t(`slider.${item.titleKey}.title_span`)}
                  </span>{" "}
                  {t(`slider.${item.titleKey}.title_part2`)}
                </motion.h1>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="line"
                ></motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="d-none d-md-block fs-5"
                >
                  {item.desc}
                </motion.p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Fade>
    </div>
  );
};

export default HomeSidler;
