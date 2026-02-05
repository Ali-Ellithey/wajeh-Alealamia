import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  Badge,
} from "react-bootstrap";
import {
  FaWhatsapp,
  FaGasPump,
  FaUsers,
  FaCogs,
  FaCalendarAlt,
  FaCheckCircle,
  FaIdCard,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// استيراد صور الكروت (الأسطول)
import img1 from "/public/cars/Roles-roues-B_.jpg";
import img2 from "/public/corfet-22-23.png";

// استيراد صور السلايدر العلوي (Hero Slider)
import imgSlider1 from "/public/غلاف.png";
import imgSlider2 from "/public/فارهة.png";
import imgSlider3 from "/public/رياضية-1.png";

const LuxuryCarsDetails = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // بيانات الماركات للسلايدر المتحرك
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
      name: "Cadillac",
      logo: "https://www.carlogos.org/car-logos/cadillac-logo-2021-full-download.png",
    },
    {
      name: "Ferrari",
      logo: "https://www.carlogos.org/car-logos/ferrari-logo-2002-download.png",
    },
    {
      name: "Land Rover",
      logo: "https://www.carlogos.org/logo/Land-Rover-logo-2011-1920x1080.png",
    },
    {
      name: "Porsche",
      logo: "https://www.carlogos.org/car-logos/porsche-logo-2014-full-download.png",
    },
    {
      name: "Lamborghini",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/1024px-Lamborghini_Logo.svg.png",
    },
  ];

  const slides = [
    {
      img: imgSlider1,
      title: (
        <>
          {t("slider.slide1.title_part1")}{" "}
          <span>{t("slider.slide1.title_span")}</span>{" "}
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
          <span>{t("slider.slide2.title_span")}</span>{" "}
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
          <span>{t("slider.slide3.title_span")}</span>{" "}
          {t("slider.slide3.title_part2")}
        </>
      ),
      desc: t("slider.slide3.desc"),
    },
  ];

  const luxuryCars = [
    {
      id: 1,
      name: "Mustang GT",
      images: [
        { src: img1, year: "2024" },
        { src: img2, year: "2023" },
      ],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V12" },
      features: ["تكييف خلفي", "مقاعد جلد", "نظام صوتي", "شاشات خلفية"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز موستنج",
    },
    {
      id: 2,
      name: "مرسيدس مايباخ",
      images: [
        { src: img1, year: "2024" },
        { src: img2, year: "2022" },
      ],
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "V8" },
      features: ["تكييف خلفي", "مقاعد جلد", "نظام صوتي", "شاشات خلفية"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز مرسيدس مايباخ",
    },
  ];

  return (
    <>
      {/* 🖼️ Section 1: Hero Slider */}
      <section className="hero-section">
        <Container fluid className="px-0">
          <Carousel fade interval={3000} className="main-hero-slider">
            {slides.map((item, index) => (
              <Carousel.Item key={index}>
                <div className="slider-container">
                  <img
                    src={item.img}
                    className="d-block w-100 h-100 slider-image"
                    alt="Luxury_Slider"
                  />
                </div>
                <Carousel.Caption className="custom-caption">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="hero-title"
                  >
                    {item.title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="d-none d-md-block"
                  >
                    {item.desc}
                  </motion.p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* 🏎️ Section 2: Brands Logo Slider (الماركات) */}
      <section className="bg-white py-5 border-bottom overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mb-5 text-center"
        >
          <h2 className="brand-main-title fw-bold mb-3">
            {t("brands_section.title")}
          </h2>
          <div className="title-separator mx-auto">
            <span className="dot"></span>
            <span className="line"></span>
            <span className="dot"></span>
          </div>
        </motion.div>

        <div
          className="d-flex overflow-hidden position-relative pt-4"
          style={{ direction: "ltr" }}
        >
          <motion.div
            className="d-flex align-items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            style={{ whiteSpace: "nowrap", display: "flex", gap: "70px" }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="brand-item-wrapper"
                style={{ width: "130px", flexShrink: 0 }}
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

      {/* 🚗 Section 3: Fleet Cards (السيارات) */}
      <Container className="my-5" dir="rtl">
        <Row className="gx-4 gy-4">
          {luxuryCars.map((car) => (
            <Col key={car.id} xs={12} lg={6}>
              <Card className="shadow-sm border-0 h-100 overflow-hidden car-card">
                <Carousel interval={null} indicators={true}>
                  {car.images.map((imgObj, index) => (
                    <Carousel.Item key={index}>
                      <div className="position-relative card-img-container">
                        <Badge pill className="year-badge">
                          موديل {imgObj.year}
                        </Badge>
                        <img
                          className="d-block w-100 card-car-img"
                          src={imgObj.src}
                          alt={car.name}
                        />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>

                <Card.Body className="text-center p-4">
                  <Card.Title className="fw-bold mb-3 fs-4">
                    {car.name}
                  </Card.Title>

                  <Row className="text-center mb-4 bg-light p-3 rounded mx-0">
                    <Col xs={4}>
                      <FaUsers color="#fc8b1a" size={20} />
                      <div
                        className="mt-1 fw-bold"
                        style={{ fontSize: "13px" }}
                      >
                        {car.specs.passengers} ركاب
                      </div>
                    </Col>
                    <Col xs={4}>
                      <FaCogs color="#fc8b1a" size={20} />
                      <div
                        className="mt-1 fw-bold"
                        style={{ fontSize: "13px" }}
                      >
                        {car.specs.transmission}
                      </div>
                    </Col>
                    <Col xs={4}>
                      <FaGasPump color="#fc8b1a" size={20} />
                      <div
                        className="mt-1 fw-bold"
                        style={{ fontSize: "13px" }}
                      >
                        {car.specs.engine}
                      </div>
                    </Col>
                  </Row>

                  <div className="features-list d-flex flex-wrap justify-content-center gap-2 mb-3">
                    {car.features.map((feature, index) => (
                      <Badge
                        key={index}
                        bg="light"
                        text="dark"
                        className="border-secondary-subtle border text-nowrap"
                        style={{ fontSize: "0.7rem" }}
                      >
                        <FaCheckCircle className="text-warning me-1" />{" "}
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div
                    className="rental-info-box mb-3 p-2 border rounded shadow-sm bg-white"
                    style={{ borderStyle: "dashed" }}
                  >
                    <div className="d-flex justify-content-around mb-2">
                      <span style={{ fontSize: "0.85rem", fontWeight: "600" }}>
                        <FaCalendarAlt className="text-primary me-1" /> يومي
                      </span>
                      <span style={{ fontSize: "0.85rem", fontWeight: "600" }}>
                        <FaCalendarAlt className="text-primary me-1" /> شهري
                      </span>
                      <span style={{ fontSize: "0.85rem", fontWeight: "600" }}>
                        <FaCalendarAlt className="text-primary me-1" /> سنوي
                      </span>
                    </div>
                    <div
                      className="border-top pt-2 text-danger fw-bold"
                      style={{ fontSize: "0.8rem" }}
                    >
                      <FaIdCard className="me-1" /> الحد الأدنى للعمر:{" "}
                      {car.rentalOptions.minAge} سنة
                    </div>
                  </div>

                  <Button
                    variant="success"
                    href={car.whatsappLink}
                    target="_blank"
                    className="whatsapp-btn w-100"
                  >
                    <FaWhatsapp size={24} className="me-2" /> احجزها الآن
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .slider-container {
          position: relative;
          width: 100%;
          height: 70vh;
          overflow: hidden;
          background-color: #000;
        }
        .slider-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .custom-caption {
          bottom: 15%;
          z-index: 10;
        }
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          text-shadow: 2px 2px 15px rgba(0,0,0,0.7);
          color: #fff;
        }
        .hero-title span {
          color: #fc8b1a;
        }

        /* Brands Slider Styling */
        .brand-main-title { font-size: 2.4rem; color: #1a1a1a; }
        .title-separator { display: flex; align-items: center; justify-content: center; gap: 12px; width: 250px; }
        .title-separator .line { height: 2px; background: linear-gradient(to right, transparent, #fc8b1a, transparent); flex-grow: 1; }
        .title-separator .dot { width: 8px; height: 8px; background-color: #fc8b1a; border-radius: 50%; }
        .brand-logo-img { height: 75px; width: 100%; object-fit: contain; filter: grayscale(20%); transition: 0.4s ease; cursor: pointer; }
        .brand-logo-img:hover { filter: grayscale(0%); transform: scale(1.1); }

        /* Fleet Cards Styling */
        .card-img-container { aspect-ratio: 16 / 9; background-color: #f8f9fa; }
        .card-car-img { width: 100%; height: 100%; object-fit: contain; padding: 5px; }
        .year-badge { position: absolute; top: 15px; right: 15px; background-color: #fc8b1a; z-index: 10; padding: 8px 15px; }
        .whatsapp-btn { border-radius: 12px; font-weight: bold; background-color: #28a745; border: none; padding: 12px; transition: 0.3s; }
        .whatsapp-btn:hover { background-color: #218838; transform: scale(1.02); }
        .car-card { transition: transform 0.3s ease; border-radius: 15px; }
        .car-card:hover { transform: translateY(-5px); }

        @media (max-width: 767px) {
          .slider-container { height: 50vh; }
          .hero-title { font-size: 1.6rem; }
          .brand-main-title { font-size: 1.5rem; }
          .brand-logo-img { height: 50px; }
        }
      `}</style>
    </>
  );
};

export default LuxuryCarsDetails;
