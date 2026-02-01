import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import ImageServices from "../../Images/rent.png";
import ServicesImage from "../../Images/servies.jpg";
import imegEnd from "../../Images/leading2.8d9acc49266851480fe6.jpg";
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next"; // استيراد الهوك

export const ServicesContent = () => {
  const { t } = useTranslation();

  return (
    <div className="ServicesContent py-5">
      <Container>
        {/* 🚗 الخدمة الأولى: تأجير السيارات */}
        <div className="allItems mb-5">
          <Zoom>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="Images shadow rounded overflow-hidden">
                  <img
                    src={ImageServices}
                    alt={t("services_content.rental.title")}
                    className="w-100"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="textContent p-4 text-center text-lg-start">
                  <i
                    className="fas fa-car fa-3x mb-3"
                    style={{ color: "#fc8b1a" }}
                  ></i>
                  <h4 className="fw-bold">
                    {t("services_content.rental.title")}
                  </h4>
                  <p className="text-muted">
                    {t("services_content.rental.desc")}
                  </p>
                </div>
              </Col>
            </Row>
          </Zoom>
        </div>

        {/* 🛠️ الخدمة الثانية: الصيانة والجاهزية */}
        <div className="allItems mb-5">
          <Zoom>
            <Row className="align-items-center">
              <Col lg={6} className="order-lg-2">
                <div className="Images shadow rounded overflow-hidden">
                  <img
                    src={ServicesImage}
                    alt={t("services_content.maintenance.title")}
                    className="w-100"
                  />
                </div>
              </Col>
              <Col lg={6} className="order-lg-1">
                <div className="textContent p-4 text-center text-lg-start">
                  <i
                    className="fas fa-shield-alt fa-3x mb-3"
                    style={{ color: "#fc8b1a" }}
                  ></i>
                  <h4 className="fw-bold">
                    {t("services_content.maintenance.title")}
                  </h4>
                  <p className="text-muted">
                    {t("services_content.maintenance.desc")}
                  </p>
                </div>
              </Col>
            </Row>
          </Zoom>
        </div>

        {/* 🎖️ الخدمة الثالثة: خدمات بسائق */}
        <div className="allItems mb-5">
          <Zoom>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="Images shadow rounded overflow-hidden">
                  <img
                    src={imegEnd}
                    alt={t("services_content.driver.title")}
                    className="w-100"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="textContent p-4 text-center text-lg-start">
                  <i
                    className="fas fa-user-tie fa-3x mb-3"
                    style={{ color: "#fc8b1a" }}
                  ></i>
                  <h4 className="fw-bold">
                    {t("services_content.driver.title")}
                  </h4>
                  <p className="text-muted">
                    {t("services_content.driver.desc")}
                  </p>
                </div>
              </Col>
            </Row>
          </Zoom>
        </div>
      </Container>
    </div>
  );
};

export default ServicesContent;
