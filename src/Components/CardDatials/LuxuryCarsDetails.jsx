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

const LuxuryCarsDetails = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // المصفوفة المدمجة بأسماء الملفات الجديدة
  const luxuryCars = [
    {
      id: 1,
      name: "Rolls-Royce Cullinan",
      images: [{ src: "LuxCars/Rolls-RoyceCullinan.png", year: "2023" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V12" },
      features: ["فخامة مطلقة", "مقاعد مساج", "نظام رؤية ليلية", "سقف نجوم"],
      rentalOptions: { minAge: 25 },
      whatsappLink:
        "https://wa.me/+96590930061?text=أريد حجز رولز رويس كولينان",
    },
    {
      id: 2,
      name: "Range Rover Vogue",
      images: [{ src: "LuxCars/RangeRoverVogue24.png", year: "2024" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8" },
      features: ["ثلاجة", "مقاعد كهربائية", "نظام صوتي ميريديان", "فتحة سقف"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز رينج روفر فوج",
    },
    {
      id: 3,
      name: "Mercedes G-Class 500",
      images: [{ src: "LuxCars/G-Class500.png", year: "2022" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8 Biturbo" },
      features: [
        "دفع رباعي",
        "شاشات ديجيتال",
        "إضاءة محيطية",
        "نظام عادم رياضي",
      ],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز مرسيدس جي كلاس",
    },
    {
      id: 4,
      name: "Lexus LX 600",
      images: [{ src: "LuxCars/LexusLX600.png", year: "2025" }],
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "V6 Turbo" },
      features: ["نظام زحف", "تكييف مركزي", "شاشات خلفية", "ثلاجة"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز لكزس LX600",
    },
    {
      id: 5,
      name: "Cadillac Escalade 600",
      images: [{ src: "LuxCars/CadillacEscalade600.png", year: "2025" }],
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "V8" },
      features: ["نظام صوتي AKG", "شاشة OLED منحنية", "سعة تخزين ضخمة"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز كاديلاك اسكاليد",
    },
    {
      id: 6,
      name: "BMW 740",
      images: [{ src: "LuxCars/BMW740.png", year: "2025" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "TwinPower" },
      features: ["شاشة سينما خلفية", "تحكم باللمس", "ركن ذاتي"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز بي إم دبليو 740",
    },
    {
      id: 7,
      name: "Range Rover Sport",
      images: [{ src: "LuxCars/RangeRoverSportR.png", year: "2023" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8 Dynamic" },
      features: ["ثبات عالي", "تصميم رياضي", "كاميرات 360", "هيدروليك"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز رينج روفر سبورت",
    },
    {
      id: 8,
      name: "Land Rover Defender",
      images: [{ src: "LuxCars/LandRoverDefenderW.png", year: "2023" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "P400" },
      features: ["قدرات وعرة", "تصميم عصري", "دفع رباعي مستمر"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز ديفندر أبيض",
    },
    {
      id: 9,
      name: "Land Rover Defender",
      images: [{ src: "LuxCars/LandRoverDefenderG.png", year: "2025" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6" },
      features: ["إطارات جبلية", "كاميرا مرايا", "حزمة الطرق الوعرة"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز ديفندر رمادي",
    },
    {
      id: 10,
      name: "BMW M Power",
      images: [{ src: "LuxCars/BMWMPower.png", year: "2025" }],
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "M Sport" },
      features: ["تسارع رهيب", "كراسي رياضية", "فرامل كربون"],
      rentalOptions: { minAge: 21 },
      whatsappLink:
        "https://wa.me/+96590930061?text=أريد حجز بي إم دبليو M Power",
    },
    {
      id: 11,
      name: "Ford Bronco",
      images: [{ src: "LuxCars/FordBronco.png", year: "2022" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "EcoBoost" },
      features: ["سقف قابل للإزالة", "نظام GOAT मोड", "أداء صحراوي"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز فورد برونكو",
    },
    {
      id: 12,
      name: "Rox 01",
      images: [{ src: "LuxCars/Rox01.png", year: "2026" }],
      specs: {
        passengers: 7,
        transmission: "أتوماتيك",
        engine: "Electric/Hybrid",
      },
      features: ["تكنولوجيا ذكية", "مساحة داخلية واسعة", "شاشات لمس"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز Rox 01",
    },
  ];

  return (
    <>
      <HomeSidler />
      <div className="section-header text-center my-5">
        <Container>
          <h2 className="display-5 fw-bold section-title">السيارات الفارهة</h2>
          <div className="title-underline mx-auto"></div>
          <p className="text-muted mt-3 fs-5">
            تجربة قيادة استثنائية مع أفخم الماركات العالمية المصممة لرفاهيتك
          </p>
        </Container>
      </div>
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
                          // التعديل الهام لضمان ظهور الصور في GitHub Pages
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

export default LuxuryCarsDetails;
