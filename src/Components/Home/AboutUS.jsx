import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

import luxuryImg from "/public/غلاف-موقع.png";
import suvImg from "/public/5f0d5229e9c27Ford_Bronco_4_door_2021_front_dubai_uae.jpg";
import economyImg from "/public/فيات-الإيطالية.jpeg";
import airportImg from "/public/aitbotr.jpg";
import vipImg from "/public/بسائق.jpg";

export const AboutUS = () => {
  const { t } = useTranslation();

  // 2. تحديث البيانات لاستخدام المتغيرات المستوردة
  const tabsData = {
    chauffeur: [
      { image: luxuryImg, title: t("about.luxury") },
      { image: suvImg, title: t("about.suv") },
      { image: economyImg, title: t("about.economy") },
    ],
    airport: [
      { image: airportImg, title: t("about.airport_basic") },
      { image: vipImg, title: t("about.vip_service") },
    ],
    needs: [
      { image: luxuryImg, title: t("about.luxury") },
      { image: suvImg, title: t("about.suv") },
      { image: economyImg, title: t("about.economy") },
    ],
  };

  const [activeTab, setActiveTab] = useState("chauffeur");
  const dataToDisplay = tabsData[activeTab];

  return (
    <div className="AboutUS py-1" id="About">
      <Container>
        <div className="title text-center mb-5">
          <h6 style={{ color: "#fc8b1a" }}>{t("about.sub_title")}</h6>
          <h2 className="fw-bold">{t("about.main_title")}</h2>
        </div>

        <div className="content">
          <Row className="gy-4">
            <Col lg={12} sm={12}>
              <div className="leftText">
                <div className="tabss d-flex justify-content-around p-0 border-bottom mb-4">
                  {Object.keys(tabsData).map((tab) => (
                    <Button
                      key={tab}
                      className={`btn-link rounded-0 border-0 py-3 ${
                        activeTab === tab
                          ? "active border-bottom border-primary border-3 fw-bold"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        flexGrow: 1,
                        textAlign: "center",
                        textDecoration: "none",
                        color: activeTab === tab ? "#fc8b1a" : "#6c757d",
                        backgroundColor: "transparent",
                      }}
                    >
                      {t(`about.tabs.${tab}`)}
                    </Button>
                  ))}
                </div>

                <Zoom key={activeTab}>
                  <div className="TableContent">
                    <Row className="justify-content-center">
                      {dataToDisplay.map((item, index) => (
                        <Col
                          key={index}
                          xs={12}
                          sm={6}
                          lg={4}
                          className="mb-4 d-flex justify-content-center"
                        >
                          <Card
                            className="shadow-sm border-0"
                            style={{
                              borderRadius: "15px",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                backgroundColor: "#f8f9fa",
                              }}
                            >
                              <Card.Img
                                variant="top"
                                src={item.image}
                                alt={item.title}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "contain", // لضمان عدم قص صورة السيارة
                                }}
                              />
                            </div>
                            <Card.Body className="d-flex flex-column justify-content-between text-center">
                              <Card.Title
                                className="fw-bold fs-6"
                                style={{ color: "#212741" }}
                              >
                                {item.title}
                              </Card.Title>
                              <Button
                                variant="primary"
                                style={{
                                  backgroundColor: "#fc8b1a",
                                  border: "none",
                                  borderRadius: "10px",
                                }}
                                className="w-100 mt-auto fw-bold"
                                onClick={() => {
                                  const phoneNumber = "+96590930061"; // ضع رقم الواتساب هنا (بالصيغة الدولية بدون أصفار أو +)
                                  const message = encodeURIComponent(
                                    "مرحباً شركة الوهح، أرغب في الاستفسار عن حجز سيارة.",
                                  );
                                  window.open(
                                    `https://wa.me/${phoneNumber}?text=${message}`,
                                    "_blank",
                                  );
                                }}
                              >
                                {t("book_now")}
                              </Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Zoom>
              </div>
            </Col>

            {/* العمود الأيمن (نص عن الشركة) */}
            <Col lg={12} sm={12}>
              <div
                className="rightText p-4 rounded-4 shadow-sm h-100 border-0"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <h4
                  className="fw-bold mb-4"
                  style={{
                    color: "#212741",
                    borderBottom: "2px solid #fc8b1a",
                    paddingBottom: "10px",
                  }}
                >
                  {t("about.right_side.title")}
                </h4>

                <div
                  className="text-muted"
                  style={{ textAlign: "justify", lineHeight: "1.8" }}
                >
                  {/* 1. سيارات فارهة */}
                  <p>
                    <strong style={{ color: "#fc8b1a" }}>
                      {t("luxury_cars")}
                    </strong>
                    : {t("about.right_side.luxury_text")}
                  </p>

                  {/* 2. سيارات رياضية */}
                  <p>
                    <strong style={{ color: "#fc8b1a" }}>
                      {t("economy_cars")}
                    </strong>
                    : {t("about.right_side.sports_text")}
                  </p>

                  {/* 3. سيارات عائلية كبيرة */}
                  <p>
                    <strong style={{ color: "#fc8b1a" }}>
                      {t("suv_cars")}
                    </strong>
                    : {t("about.right_side.large_family_text")}
                  </p>

                  {/* 4. سيارات عائلية اقتصادية */}
                  <p>
                    <strong style={{ color: "#fc8b1a" }}>
                      {t("family_cars")}
                    </strong>
                    : {t("about.right_side.economy_family_text")}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AboutUS;
