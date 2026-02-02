import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// استيراد مكونات Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// استيراد ستايلات Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// استيراد الصور (تأكد من صحة المسارات)
import imgs from "/public/غلاف.png";
import imgs2 from "/public/رياضية-1.png";
import imgs3 from "/public/فارهة.png";
import imgs4 from "/public/رياضية-1.png";

export const Services = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // تحديث البيانات لتشمل مصفوفة صور لكل كارد
  const fleetData = [
    {
      key: "luxury",
      images: [imgs, imgs2, imgs3], // أضف هنا صور كل قسم
      path: "/luxury-cars-details",
    },
    {
      key: "suv",
      images: [imgs2, imgs4, imgs],
      path: "/suv-cars-details",
    },
    {
      key: "family",
      images: [imgs4, imgs3, imgs2],
      path: "/family-cars-details",
    },
    {
      key: "economy",
      images: [imgs3, imgs, imgs4],
      path: "/economy-cars-details",
    },
  ];

  return (
    <div className="Services py-5" id="Services">
      <Container>
        <div className="title text-center mb-5">
          <h1 className="fw-bold">{t("fleet.title")}</h1>
          <h6
            className="text-muted mx-auto"
            style={{ maxWidth: "800px", lineHeight: "1.8" }}
          >
            {t("fleet.subtitle")}
          </h6>
        </div>

        <Row className="gx-4 gy-4">
          {fleetData.map((item) => (
            <Col key={item.key} xs={12} lg={6}>
              <Card className="h-100 shadow-sm border-0 overflow-hidden">
                {/* السلايدر بدلاً من Card.Img العادي */}
                <div
                  className="card-slider-wrapper"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    effect="fade" // تأثير الانيميشن (Fade)
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    style={{ width: "100%", height: "100%" }}
                  >
                    {item.images.map((imgSrc, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={imgSrc}
                          alt={`${item.key}-${index}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <Card.Body className="d-flex flex-column text-center p-4">
                  <Card.Title className="fw-bold fs-4">
                    {t(`fleet.categories.${item.key}.name`)}
                  </Card.Title>
                  <Card.Text className="text-muted flex-grow-1 fs-5">
                    {t(`fleet.categories.${item.key}.desc`)}
                  </Card.Text>
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Button
                      as={Link}
                      to={item.path}
                      className="w-100 mt-3 fw-bold py-2"
                      style={{
                        backgroundColor: "#fc8b1a",
                        border: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      {t("fleet.more_btn")}
                    </Button>
                  </motion.div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* تنسيقات إضافية لتخصيص شكل الأسهم والنقاط في Swiper */}
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #fc8b1a !important;
          transform: scale(0.6);
        }
        .swiper-pagination-bullet-active {
          background: #fc8b1a !important;
        }
      `}</style>
    </div>
  );
};

export default Services;
