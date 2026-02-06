import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import { HashLink as NavHashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    closeMenu();
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Navbar expanded={expanded} expand="lg" className="navBar" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="app-logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center mx-auto text-center">
            <Nav.Link as={Link} to="/" onClick={closeMenu}>
              {t("home")}
            </Nav.Link>
            <Nav.Link as={NavHashLink} smooth to="/#About" onClick={closeMenu}>
              {t("about_us")}
            </Nav.Link>
            <Nav.Link as={Link} to="/HomeServices" onClick={closeMenu}>
              {t("services")}
            </Nav.Link>
            <Nav.Link
              as={NavHashLink}
              smooth
              to="/#Services"
              onClick={closeMenu}
            >
              {t("our_fleet")}
            </Nav.Link>
            <Nav.Link as={Link} to="/contacted" onClick={closeMenu}>
              {t("contact_us")}
            </Nav.Link>
          </Nav>

          {/* الحاوية المشتركة للأيقونات واللغة */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-1 mt-1 mt-lg-0">
            {/* حاوية أيقونات السوشيال ميديا بستايل الفوتر */}
            <div className="social-icons-wrapper d-flex align-items-center mb-3 mb-lg-0">
              <a
                href="tel:+96590930061"
                onClick={closeMenu}
                className="nav-social-icon phone-icon"
              >
                <i className="fas fa-phone"></i>
              </a>

              <a
                href="https://www.instagram.com/wahajcar2/"
                target="_blank"
                rel="noreferrer"
                className="nav-social-icon instagram-icon"
                onClick={closeMenu}
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://wa.me/+96590930061"
                target="_blank"
                rel="noreferrer"
                className="nav-social-icon whatsapp-icon"
                onClick={closeMenu}
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>

            {/* أزرار تغيير اللغة */}
            <div
              className="d-flex bg-dark p-1"
              style={{ borderRadius: "20px", border: "1px solid #fc8b1a" }}
            >
              <Button
                variant={i18n.language === "ar" ? "warning" : "outline-light"}
                size="sm"
                onClick={() => handleLangChange("ar")}
                className="fw-bold border-0 lang-btn"
                style={{
                  borderRadius: "15px",
                  fontSize: "0.75rem",
                  minWidth: "55px",
                }}
              >
                عربي
              </Button>
              <Button
                variant={i18n.language === "en" ? "warning" : "outline-light"}
                size="sm"
                onClick={() => handleLangChange("en")}
                className="fw-bold border-0 lang-btn"
                style={{
                  borderRadius: "15px",
                  fontSize: "0.75rem",
                  minWidth: "55px",
                }}
              >
                EN
              </Button>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
