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
import { FaWhatsapp, FaGasPump, FaUsers, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// استيراد صور الكروت (الأسطول)
import img1 from "../../img_car/سعر-سيارة-بنتلي-بينتايجا-جديدة-.jpg";
import img2 from "../../img_car/5f0d5229e9c27Ford_Bronco_4_door_2021_front_dubai_uae.jpg";

// استيراد صور السلايدر العلوي (Hero Slider)
import imgSlider1 from "/public/غلاف.png";
import imgSlider2 from "/public/فارهة.png";
import imgSlider3 from "/public/رياضية-1.png";

const EconomyCarsDetails = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // إعدادات السلايدر العلوي (نفس نظام صفحة SUV مع الترجمة)
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
      name: "بنتلي بينتايجا",
      images: [
        { src: img1, year: "2024" },
        { src: img2, year: "2023" },
      ],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V12" },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز بنتلي بينتايجا",
    },
    {
      id: 2,
      name: "مرسيدس مايباخ",
      images: [
        { src: img1, year: "2024" },
        { src: img2, year: "2022" },
      ],
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "V8" },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز مرسيدس مايباخ",
    },
  ];

  return (
    <>
      {/* 🖼️ Section 1: Hero Slider (نفس نظام SUV الاحترافي) */}
      <section className="hero-section">
        <Container fluid className="px-0">
          <Carousel fade interval={3000} className="main-hero-slider">
            {slides.map((item, index) => (
              <Carousel.Item key={index}>
                <div className="slider-container">
                  <img
                    src={item.img}
                    className="d-block w-100 slider-image"
                    alt="Luxury_Slider"
                  />
                  <div className="overlay-gradient"></div>
                </div>
                <Carousel.Caption className="custom-caption">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="slider-title" // تأكد من إضافة هذا الكلاس هنا
                  >
                    {item.title}
                  </motion.h1>
                  <div className="line mx-auto"></div>
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

      {/* 🚗 Section 2: Cards Fleet */}
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
        /* --- Hero Slider Styles --- */
        .slider-container {
          position: relative;
          width: 100%;
          height: 70vh; /* طول متناسق للكمبيوتر */
          overflow: hidden;
          background-color: #000;
        }

        .slider-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .overlay-gradient {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
        }

        .custom-caption {
          bottom: 15%;
          z-index: 10;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          text-shadow: 2px 2px 15px rgba(0,0,0,0.7);
        }

        .hero-title span {
          color: #fc8b1a;
        }

        .line {
          width: 120px;
          height: 5px;
          background-color: #fc8b1a;
          margin: 15px auto;
          border-radius: 2px;
        }

        /* --- Mobile Responsiveness --- */
        @media (max-width: 767px) {
          .slider-container {
            height: 50vh;
          }
          .hero-title {
            font-size: 1.6rem;
          }
        }

        /* --- Car Card Styles --- */
        .card-img-container {
          aspect-ratio: 16 / 9;
          background-color: #f8f9fa;
        }
        
        .card-car-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 5px;
        }

        .year-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background-color: #fc8b1a;
          z-index: 10;
          padding: 8px 15px;
        }

        .whatsapp-btn {
          border-radius: 12px;
          font-weight: bold;
          background-color: #28a745;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          transition: 0.3s;
        }

        .whatsapp-btn:hover {
          background-color: #218838;
          transform: scale(1.02);
        }

        .car-card {
          transition: transform 0.3s ease;
        }
        .car-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </>
  );
};

export default EconomyCarsDetails;
