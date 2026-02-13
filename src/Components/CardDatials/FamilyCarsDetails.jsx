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

const FamilyCarsDetails = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // مصفوفة السيارات العائلية - تأكد من وجود المجلد FamilyCars داخل public
  const familyCars = [
    {
      id: 1,
      name: "Chevrolet Tahoe",
      images: [{ src: "FamilyCars/ChevroletTahoe.png", year: "2024" }],
      specs: { passengers: 8, transmission: "أتوماتيك", engine: "V8" },
      features: ["مثالية للعائلات", "شنطة خلفية واسعة", "شاشات خلفية"],
      rentalOptions: { minAge: 25 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز شيفروليه تاهو",
    },
    {
      id: 2,
      name: "Toyota Land Cruiser",
      images: [{ src: "FamilyCars/ToyotaLandCruiser.png", year: "2023" }],
      specs: {
        passengers: 7,
        transmission: "أتوماتيك",
        engine: "V6 Twin Turbo",
      },
      features: ["ثبات عالي", "فخامة", "مساحة واسعة"],
      rentalOptions: { minAge: 25 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز لاند كروزر",
    },
    {
      id: 3,
      name: "Toyota Prado",
      images: [{ src: "FamilyCars/ToyotaPrado.png", year: "2025" }],
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "V6" },
      features: ["اعتمادية عالية", "تكييف مركزي", "دفع رباعي"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز تويوتا برادو",
    },
    {
      id: 4,
      name: "Nissan Patrol Titanium",
      images: [{ src: "FamilyCars/NissanPatrolTitanium.png", year: "2025" }],
      specs: { passengers: 8, transmission: "أتوماتيك", engine: "V8" },
      features: ["قوة جبارة", "مقاعد جلد", "نظام ترفيه"],
      rentalOptions: { minAge: 25 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز نيسان باترول",
    },
    {
      id: 5,
      name: "Mitsubishi Pajero",
      images: [{ src: "FamilyCars/MitsubishiPajero.png", year: "2022" }],
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "3.8L" },
      features: ["متانة", "اقتصادية", "دفع رباعي"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز باجيرو",
    },
    {
      id: 6,
      name: "Jeep Sport",
      images: [{ src: "FamilyCars/JeepSport.png", year: "2023" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6" },
      features: ["روح المغامرة", "سقف قابل للإزالة", "أداء جبلي"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز جيب سبورت",
    },
    {
      id: 7,
      name: "Jeep Sahara",
      images: [{ src: "FamilyCars/JeepSahara.png", year: "2025" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6" },
      features: ["تصميم أيقوني", "راحة محسنة", "نظام صوتي مميز"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز جيب صحارى",
    },
    {
      id: 8,
      name: "GMC Yukon",
      images: [{ src: "FamilyCars/GMCYukon.png", year: "2025" }],
      specs: { passengers: 8, transmission: "أتوماتيك", engine: "V8" },
      features: ["رحابة فائقة", "تقنيات سلامة", "عزل صوتي"],
      rentalOptions: { minAge: 25 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز جمس يوكن",
    },
    {
      id: 9,
      name: "Jetour T2",
      images: [{ src: "FamilyCars/jetour.png", year: "2026" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "Turbo" },
      features: ["دفع رباعي", "شاشة كبيرة", "كاميرات 360"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز جيتور T2",
    },
  ];

  return (
    <>
      <HomeSidler />

      <Container className="my-5" dir="rtl">
        <Row className="gx-4 gy-4">
          {familyCars.map((car) => (
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

export default FamilyCarsDetails;
