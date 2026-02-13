import React, { useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// --- تصحيح المسارات: حذف كلمة /public/ لتعمل الصور بعد الرفع ---
import luxuryImg from "/Lux.png";
import suvImg from "/sport1.png";
import airportImg from "/aitbotr.jpg";
import vipImg from "/Driver.jpg";
import familyImg from "/BagCar.png";
import economyImg from "/Suv.png";

export const AboutUS = () => {
  const { t, i18n } = useTranslation();

  const sections = useMemo(
    () => [
      {
        id: 1,
        title: t("about.luxury"),
        details: t("about.luxury_details"),
        image: luxuryImg,
      },
      {
        id: 2,
        title: t("about.suv"),
        details: t("about.suv_details"),
        image: suvImg,
      },
      {
        id: 3,
        title: t("about.family"),
        details: t("about.family_details"),
        image: familyImg,
      },
      {
        id: 4,
        title: t("about.economy"),
        details: t("about.economy_details"),
        image: economyImg,
      },
      {
        id: 5,
        title: t("about.airport_basic"),
        details: t("about.airport_details"),
        image: airportImg,
      },
      {
        id: 6,
        title: t("about.vip_service"),
        details: t("about.vip_details"),
        image: vipImg,
      },
    ],
    [t],
  );

  const variants = {
    offscreenLeft: { opacity: 0, x: -50 },
    offscreenRight: { opacity: 0, x: 50 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", bounce: 0.3, duration: 0.8 },
    },
  };

  return (
    <section
      className="AboutUS py-5"
      id="About"
      style={{ overflow: "hidden", backgroundColor: "#fdfdfd" }}
    >
      <Container>
        {/* --- قسم نبذة عن الشركة --- */}
        <Row className="mb-5 pb-5 align-items-center border-bottom">
          <Col lg={12} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h6
                className="text-uppercase mb-3"
                style={{
                  color: "#fc8b1a",
                  letterSpacing: "2px",
                  fontWeight: "bold",
                }}
              >
                {t("about.sub_title")}
              </h6>
              <h2
                className="display-5 fw-bold mb-4"
                style={{ color: "#212741" }}
              >
                {t("about.main_intro_title")}
              </h2>
              <p
                className="mx-auto text-muted mb-4 px-2"
                style={{
                  maxWidth: "800px",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                }}
              >
                {t("about.company_description")}
              </p>

              {/* إحصائيات سريعة */}
              <div className="d-flex justify-content-center gap-3 gap-md-5 flex-wrap mt-4">
                <div className="stat-item text-center">
                  <h4 className="fw-bold mb-0" style={{ color: "#fc8b1a" }}>
                    +10
                  </h4>
                  <small className="text-muted">{t("about.years_exp")}</small>
                </div>
                <div className="stat-item border-start ps-3 ps-md-5 text-center">
                  <h4 className="fw-bold mb-0" style={{ color: "#fc8b1a" }}>
                    +500
                  </h4>
                  <small className="text-muted">{t("about.clients")}</small>
                </div>
                <div className="stat-item border-start ps-3 ps-md-5 text-center">
                  <h4 className="fw-bold mb-0" style={{ color: "#fc8b1a" }}>
                    24/7
                  </h4>
                  <small className="text-muted">{t("about.support")}</small>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* --- عرض الخدمات --- */}
        {sections.map((section, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={section.id} className="section-wrapper mb-5 py-2 py-md-4">
              {/* تعديل flex-lg-row-reverse ليعمل فقط في الشاشات الكبيرة */}
              <Row
                className={`align-items-center g-4 g-md-5 ${!isEven ? "flex-lg-row-reverse" : ""}`}
              >
                {/* عمود الصورة */}
                <Col lg={6} xs={12}>
                  <motion.div
                    initial={isEven ? "offscreenLeft" : "offscreenRight"}
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={variants}
                  >
                    <div className="image-container position-relative px-2 px-md-0">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="main-about-img img-fluid shadow-sm"
                        style={{
                          borderRadius: "20px",
                          width: "100%",
                          height: "auto",
                          maxHeight: "400px", // لمنع الصور الطويلة جداً من تشويه التصميم
                          objectFit: "contain", // يضمن ظهور السيارة كاملة
                          backgroundColor: "#fff",
                        }}
                      />
                    </div>
                  </motion.div>
                </Col>

                {/* عمود النص */}
                <Col lg={6} xs={12} className="px-lg-5">
                  <motion.div
                    initial={isEven ? "offscreenRight" : "offscreenLeft"}
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={variants}
                    className={`section-content ${i18n.language === "ar" ? "text-lg-end" : "text-lg-start"} text-center mt-3 mt-lg-0`}
                  >
                    <h3
                      className="fw-bold mb-3"
                      style={{ color: "#212741", fontSize: "1.6rem" }}
                    >
                      {section.title}
                    </h3>
                    <p
                      className="text-muted detail-text mb-4 px-2 px-lg-0"
                      style={{ lineHeight: "1.7", fontSize: "1rem" }}
                    >
                      {section.details}
                    </p>
                    <Button
                      className="book-btn border-0 shadow px-5 py-2"
                      onClick={() => {
                        const message = encodeURIComponent(
                          `${t("booking_message")}: ${section.title}`,
                        );
                        window.open(
                          `https://wa.me/+96590930061?text=${message}`,
                          "_blank",
                        );
                      }}
                      style={{
                        backgroundColor: "#fc8b1a",
                        borderRadius: "50px",
                        fontWeight: "bold",
                        fontSize: "0.95rem",
                      }}
                    >
                      {t("book_now")}
                    </Button>
                  </motion.div>
                </Col>
              </Row>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default AboutUS;
