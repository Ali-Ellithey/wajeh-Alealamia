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

const SuvCarsDetails = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // مصفوفة نظيفة بدون مسافات زائدة في المسارات
  const suvCars = [
    {
      id: 1,
      name: "Mustang GT",
      images: [{ src: "SportsCars/RedMustangGT.png", year: "2024" }],
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "V8" },
      features: ["أداء رياضي", "سقف مكشوف", "نظام صوتي صاخب"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز موستانج GT",
    },
    {
      id: 2,
      name: "Porsche Carrera 911",
      images: [{ src: "SportsCars/PorscheCarrera911.png", year: "2025" }],
      specs: { passengers: 2, transmission: "PDK", engine: "Flat-6" },
      features: ["تسارع رهيب", "ثبات عالي", "فخامة رياضية"],
      rentalOptions: { minAge: 25 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز بورشه كاريرا",
    },
    {
      id: 3,
      name: "McLaren Artura",
      images: [{ src: "SportsCars/McLarenArtura.png", year: "2022" }],
      specs: { passengers: 2, transmission: "أتوماتيك", engine: "Hybrid V6" },
      features: ["تكنولوجيا هجينة", "أبواب مقصية", "وزن خفيف"],
      rentalOptions: { minAge: 25 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز ماكلارين أرتورا",
    },
    {
      id: 4,
      name: "Ford F150",
      images: [{ src: "SportsCars/FordF150.png", year: "2025" }],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "EcoBoost" },
      features: ["دفع رباعي", "قوة سحب", "مساحة ضخمة"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز فورد F150",
    },
    {
      id: 5,
      name: "Corvette C8",
      images: [{ src: "SportsCars/Corvette8C.png", year: "2023" }],
      specs: {
        passengers: 2,
        transmission: "أتوماتيك",
        engine: "V8 Mid-Engine",
      },
      features: ["تصميم سوبر كار", "سقف قابل للإزالة", "شاشات متطورة"],
      rentalOptions: { minAge: 25 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز كورفيت C8",
    },
    {
      id: 6,
      name: "Mini Cooper",
      images: [{ src: "SportsCars/MiniCooper.png", year: "2023" }],
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "Turbo 4" },
      features: ["سهولة الاصطفاف", "تصميم كلاسيكي", "اقتصادية"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز ميني كوبر",
    },
    {
      id: 7,
      name: "Suzuki Jimny",
      images: [{ src: "SportsCars/BlackJimny.png", year: "2025" }],
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "1.5L" },
      features: ["دفع رباعي خفيف", "مثالية للمدينة", "مظهر قوي"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز سوزوكي جيمني",
    },
    {
      id: 8,
      name: "Fiat 500C",
      images: [{ src: "SportsCars/FiatC500.png", year: "2023" }],
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "اقتصادي" },
      features: ["سقف قماشي مكشوف", "أنيقة جداً", "سهلة القيادة"],
      rentalOptions: { minAge: 21 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز فيات 500C",
    },
    {
      id: 9, // تأكد من أن المعرف فريد
      name: "Slingshot R",
      images: [{ src: "SportsCars/SlingshotR.png", year: "2024" }],
      specs: {
        passengers: 2,
        transmission: "Auto-Drive",
        engine: "2.0L 4-Cyl",
      },
      features: [
        "ثلاث عجلات",
        "تجربة قيادة فريدة",
        "نظام صوتي مميز",
        "مكشوفة بالكامل",
      ],
      rentalOptions: { minAge: 25 },
      whatsappLink: "https://wa.me/+96590930061?text=أريد حجز Slingshot R",
    },
  ];

  return (
    <>
      <HomeSidler />
      <div className="section-header text-center my-5">
        <Container>
          <h2 className="display-5 fw-bold section-title">
            السيارات الرياضية والخاصة
          </h2>
          <div className="title-underline mx-auto"></div>
          <p className="text-muted mt-3 fs-5">
            انطلق بقوة مع مجموعتنا المختارة من السيارات الرياضية والسيارات ذات
            الأداء المتميز
          </p>
        </Container>
      </div>
      <Container className="my-5" dir="rtl">
        <Row className="gx-4 gy-4">
          {suvCars.map((car) => (
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
                          // تأكد أن السلاش يوضع بشكل صحيح بين المسار الأساسي ومسار الصورة
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

export default SuvCarsDetails;
