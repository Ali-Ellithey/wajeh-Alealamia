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
import { useTranslation } from "react-i18next";

// 1. استيراد السلايدر
import HomeSidler from "../Home/HomeSidler";

const EconomyCarsDetails = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // مصفوفة السيارات الاقتصادية والمتنوعة
  const economyCars = [
    {
      id: 1,
      name: "Tyota Yaris",
      images: [{ src: "EconomyCars/ToyotaYaris2022.png", year: "2022" }],
      specs: { passengers: 5, transmission: "CVT", engine: "1.5L" },
      features: ["اقتصادية جداً", "سهلة القيادة", "بلوتوث"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز تويوتا يارس",
    },
    {
      id: 2,
      name: "Toyota Urban",
      images: [{ src: "EconomyCars/ToyotaUrban.png", year: "2024" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L" },
      features: ["دفع أمامي", "توفير وقود", "تصميم عصري"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز تويوتا أوربان",
    },
    {
      id: 3,
      name: "Toyota Rise",
      images: [{ src: "EconomyCars/ToyotaRise.png", year: "2024" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.2L" },
      features: ["SUV صغيرة", "مرونة عالية", "مثالية للمدينة"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز تويوتا رايز",
    },
    {
      id: 4,
      name: "Toyota Cross",
      images: [{ src: "EconomyCars/ToyotaCross2024.png", year: "2024" }],
      specs: { passengers: 5, transmission: "Hybrid", engine: "1.8L" },
      features: ["هجينة", "مساحة واسعة", "شاشة متطورة"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز تويوتا كروس 2024",
    },
    {
      id: 5,
      name: "Toyota Camry",
      images: [{ src: "EconomyCars/ToyotaCamry2026.png", year: "2026" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.5L" },
      features: ["أحدث موديل", "راحة فائقة", "تقنيات سلامة"],
      rentalOptions: { minAge: 21 },
      whatsappLink:
        "https://wa.me/+96590930061?text=أريد حجز تويوتا كامري 2026",
    },
    {
      id: 6,
      name: "Mercedes C200",
      images: [{ src: "EconomyCars/MercedesC200.png", year: "2024" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.0L Turbo" },
      features: ["فخامة", "أداء رياضي", "إضاءة محيطية"],
      rentalOptions: { minAge: 25 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز مرسيدس C200",
    },
    {
      id: 7,
      name: "Lexus ES 250",
      images: [{ src: "EconomyCars/Lexus250ES.png", year: "2024" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.5L" },
      features: ["هدوء تام", "فخامة لكزس", "مقاعد جلد"],
      rentalOptions: { minAge: 25 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز لكزس ES",
    },
    {
      id: 8,
      name: "kia Sportage",
      images: [{ src: "EconomyCars/KiaSportage2026.png", year: "2026" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.0L" },
      features: ["تصميم مستقبلي", "بانوراما", "واسعة"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز كيا سبورتاج",
    },
    {
      id: 9,
      name: "Hyundai Tucson",
      images: [{ src: "EconomyCars/HyundaiTucson26.png", year: "2026" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.0L" },
      features: ["ثبات مميز", "كاميرا خلفية", "شاشة"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز هيونداي توسان",
    },
    {
      id: 10,
      name: "BMW X2",
      images: [{ src: "EconomyCars/BMWX2.png", year: "2024" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "Turbo" },
      features: ["SUV رياضية", "تجربة قيادة فريدة", "براند عالمي"],
      rentalOptions: { minAge: 25 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز بي إم دبليو X2",
    },
    {
      id: 11,
      name: "Dodge Charger",
      images: [{ src: "EconomyCars/DodgeCharger.png", year: "2023" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6" },
      features: ["قوة عضلات", "مظهر هجومي", "نظام صوتي"],
      rentalOptions: { minAge: 25 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز دوج تشارجر",
    },
    {
      id: 12,
      name: "Geely Coolray 2025",
      images: [{ src: "EconomyCars/GeelyCoolray2025.png", year: "2025" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "Turbo" },
      features: ["تقنيات ذكية", "تسارع سريع", "تصميم شبابي"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز جيلي كولراي",
    },
  ];

  return (
    <>
      <HomeSidler />
      <div className="section-header text-center my-5">
        <Container>
          <h2 className="display-5 fw-bold section-title">
            السيارات الاقتصادية
          </h2>
          <div className="title-underline mx-auto"></div>
          <p className="text-muted mt-3 fs-5">
            مجموعة واسعة من السيارات العملية والموفرة للوقود لتناسب احتياجاتك
            اليومية
          </p>
        </Container>
      </div>
      <Container className="my-5" dir="rtl">
        <Row className="gx-4 gy-4">
          {economyCars.map((car) => (
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
                          src={`${import.meta.env.BASE_URL}${imgObj.src}`}
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
                    {car.features.map((feature, fIndex) => (
                      <Badge
                        key={fIndex}
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
        .card-img-container { aspect-ratio: 16 / 9; background-color: #f8f9fa; }
        .card-car-img { width: 100%; height: 100%; object-fit: contain; }
        .year-badge { position: absolute; top: 15px; right: 15px; background-color: #fc8b1a; z-index: 10; padding: 8px 15px; }
        .whatsapp-btn { border-radius: 12px; font-weight: bold; background-color: #28a745; border: none; display: flex; align-items: center; justify-content: center; padding: 12px; transition: 0.3s; }
        .whatsapp-btn:hover { background-color: #218838; transform: scale(1.02); }
        .car-card { transition: transform 0.3s ease; }
        .car-card:hover { transform: translateY(-5px); }
      `}</style>
    </>
  );
};

export default EconomyCarsDetails;
