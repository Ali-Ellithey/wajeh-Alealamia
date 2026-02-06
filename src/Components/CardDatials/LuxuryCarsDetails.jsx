import React, { useEffect } from "react"; // إزالة الاستيراد المكرر لـ React
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

// 1. استيراد السلايدر (تأكد من صحة المسار)
import HomeSidler from "../Home/HomeSidler";

// استيراد صور الكروت
import img1 from "../../img_car/سعر-سيارة-بنتلي-بينتايجا-جديدة-.jpg";
import img2 from "../../img_car/5f0d5229e9c27Ford_Bronco_4_door_2021_front_dubai_uae.jpg";

const LuxuryCarsDetails = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const luxuryCars = [
    {
      id: 1,
      name: "بنتلي بينتايجا",
      images: [
        { src: img1, year: "2024" },
        { src: img2, year: "2023" },
      ],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V12" },
      features: ["تكييف خلفي", "مقاعد جلد", "نظام صوتي", "شاشات خلفية"],
      rentalOptions: { minAge: 21 },
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
      features: ["تكييف خلفي", "مقاعد جلد", "نظام صوتي", "شاشات خلفية"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز مرسيدس مايباخ",
    },
  ];

  return (
    <>
      {/* استدعاء السلايدر الموحد */}
      <HomeSidler />

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

                  {/* قائمة المميزات - تم نقلها داخل الـ Card.Body لتعمل بشكل صحيح */}
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

                  {/* نظام الإيجار - داخل الـ Card.Body */}
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
        .card-car-img { width: 100%; height: 100%; object-fit: contain; padding: 5px; }
        .year-badge { position: absolute; top: 15px; right: 15px; background-color: #fc8b1a; z-index: 10; padding: 8px 15px; }
        .whatsapp-btn { border-radius: 12px; font-weight: bold; background-color: #28a745; border: none; display: flex; align-items: center; justify-content: center; padding: 12px; transition: 0.3s; }
        .whatsapp-btn:hover { background-color: #218838; transform: scale(1.02); }
        .car-card { transition: transform 0.3s ease; }
        .car-card:hover { transform: translateY(-5px); }
      `}</style>
    </>
  );
};

export default LuxuryCarsDetails;
