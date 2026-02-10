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

  // تأكد أن الـ key هنا يطابق تماماً ما هو موجود في i18n.js
  const slides = [
    { img: imgSlider1, key: "slide1" },
    { img: imgSlider2, key: "slide2" },
    { img: imgSlider3, key: "slide3" },
  ];

  const brands = [
    {
      name: "Bentley",
      logo: "https://www.carlogos.org/car-logos/bentley-logo-2002-download.png",
    },
    {
      name: "Rolls Royce",
      logo: "https://www.carlogos.org/logo/Rolls-Royce-logo-2048x2048.png",
    },
    {
      name: "Mercedes",
      logo: "https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-1920x1080.png",
    },
    {
      name: "BMW",
      logo: "https://www.carlogos.org/car-logos/bmw-logo-1997-download.png",
    },
    {
      name: "cadillac",
      logo: "https://www.carlogos.org/car-logos/cadillac-logo-2021-full-download.png",
    },
    {
      name: "ferrari",
      logo: "https://www.carlogos.org/car-logos/ferrari-logo-2002-download.png",
    },
    {
      name: "Land Rover",
      logo: "https://www.carlogos.org/logo/Land-Rover-logo-2011-1920x1080.png",
    },
    {
      name: "porsche",
      logo: "https://www.carlogos.org/car-logos/porsche-logo-2014-full-download.png",
    },
    {
      name: "Lexus",
      logo: "https://www.carlogos.org/logo/Lexus-logo-1988-1920x1080.png",
    },
    {
      name: "Lamborghini",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/1024px-Lamborghini_Logo.svg.png",
    },
    {
      name: "nissan",
      logo: "https://www.carlogos.org/car-logos/nissan-logo-2020-black.png",
    },
    {
      name: "Toyota",
      logo: "https://www.carlogos.org/car-logos/toyota-logo-2020-europe-download.png",
    },
    {
      name: "jeep",
      logo: "https://www.carlogos.org/car-logos/jeep-logo-1993-download.png",
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
                  {/* تأكد من وجود slider.slide1.title_part1 في ملف i18n */}
                  {t(`slider.${item.key}.title_part1`)}{" "}
                  <span style={{ color: "#fc8b1a" }}>
                    {t(`slider.${item.key}.title_span`)}
                  </span>{" "}
                  {t(`slider.${item.key}.title_part2`)}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="d-none d-md-block fs-5"
                >
                  {t(`slider.${item.key}.desc`)}
                </motion.p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Fade>

      {/* 🏎️ Brands Logo Slider */}
      <section className="bg-white py-5 border-bottom overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mb-5"
        >
          <h1 className="brand-main-title fw-bold text-center mb-3">
            {t("brands_section.title")}
          </h1>
          <div className="title-separator mx-auto">
            <span className="dot"></span>
            <span className="line"></span>
            <span className="dot"></span>
          </div>
        </motion.div>

        <div
          className="d-flex overflow-hidden position-relative pt-1"
          style={{ direction: "ltr" }}
        >
          <motion.div
            className="d-flex align-items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
            style={{ whiteSpace: "nowrap", display: "flex", gap: "45px" }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="brand-item-wrapper"
                style={{
                  width: "130px",
                  flexShrink: 0,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="brand-logo-img"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <style>{`
        .brand-main-title { font-size: 2.4rem; color: #1a1a1a; }
        .title-separator { display: flex; align-items: center; justify-content: center; gap: 12px; width: 250px; }
        .title-separator .line { height: 2px; background: linear-gradient(to right, transparent, #fc8b1a, transparent); flex-grow: 1; }
        .title-separator .dot { width: 8px; height: 8px; background-color: #fc8b1a; border-radius: 50%; }
        .brand-logo-img { width: 100%; height: 75px; object-fit: contain; transition: transform 0.4s; cursor: pointer; }
        .brand-logo-img:hover { transform: scale(1.2); }
        @media (max-width: 767px) {
          .brand-main-title { font-size: 1.5rem; }
          .brand-logo-img { height: 50px; }
        }
      `}</style>
    </div>
  );
};

export default HomeSidler;
