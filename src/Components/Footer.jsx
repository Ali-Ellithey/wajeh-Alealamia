import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCar,
} from "react-icons/fa";
import { useTranslation } from "react-i18next"; // 1️⃣ استيراد هوك الترجمة

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      className="footer text-white py-5 mt-auto"
      style={{
        borderTop: "4px solid #fc8b1a",
        backgroundColor: "#212741",
      }}
    >
      <Container>
        <Row className="gy-5 align-items-center">
          <Col xs={12} md={4} className="text-center text-md-start">
            <h5 className="mb-4 fw-bold" style={{ color: "#fc8b1a" }}>
              {t("contact_us")}
            </h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-4 fs-2">
              <a
                href="https://wa.me/+96590930061"
                target="_blank"
                rel="noreferrer"
                className="text-white decoration-none"
              >
                <FaWhatsapp
                  className="footer-icon"
                  style={{ transition: "0.3s", cursor: "pointer" }}
                  onMouseOver={(e) => (e.target.style.color = "#25D366")}
                  onMouseOut={(e) => (e.target.style.color = "white")}
                />
              </a>
              <a
                href="https://www.instagram.com/wahajcar2/?igsh=MWJrYnk3dXR1dXl2NQ%3D%3D#"
                target="_blank"
                rel="noreferrer"
                className="text-white decoration-none"
              >
                <FaInstagram
                  className="footer-icon"
                  style={{ transition: "0.3s", cursor: "pointer" }}
                  onMouseOver={(e) => (e.target.style.color = "#E1306C")}
                  onMouseOut={(e) => (e.target.style.color = "white")}
                />
              </a>
              <a href="tel:+96590930061" className="text-white decoration-none">
                <FaPhoneAlt
                  className="footer-icon"
                  style={{ transition: "0.3s", cursor: "pointer" }}
                  onMouseOver={(e) => (e.target.style.color = "#fc8b1a")}
                  onMouseOut={(e) => (e.target.style.color = "white")}
                />
              </a>
            </div>
          </Col>

          <Col
            xs={12}
            md={4}
            className="text-center px-4 border-md-start border-md-end border-secondary"
          >
            <div className="mb-3">
              <FaCar size={45} style={{ color: "#fc8b1a" }} />
            </div>
            <h5 className="fw-bold mb-3" style={{ color: "#fc8b1a" }}>
              {t("about_company")}
            </h5>
            <p className="small lh-lg opacity-75 mb-0">
              {t("footer_description")}
            </p>
          </Col>

          <Col xs={12} md={4} className="text-center text-md-end">
            <h5 className="mb-4 fw-bold" style={{ color: "#fc8b1a" }}>
              {t("our_location")}
            </h5>
            <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-2 mb-2">
              <span className="fs-6 opacity-75">{t("address_details")}</span>
              <FaMapMarkerAlt className="text-danger fs-4" />
            </div>
            <div className="mt-3">
              <p className="small text-muted mb-0">
                <span className="d-block" style={{ color: "#fc8b1a" }}>
                  {t("open_daily")}
                </span>
                <span className="d-block mb-2" style={{ color: "#fc8b1a" }}>
                  {t("working_hours")}
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
