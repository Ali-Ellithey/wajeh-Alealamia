import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next"; // استيراد الهوك
import ServiceImg1 from "../../Images/Insurance.jpg";
import ServiceImg2 from "../../Images/car-rental1.jpg";
import ServiceImg3 from "../../Images/convenio-500x250.jpg";

export const InvestMents = () => {
  const { t } = useTranslation();
  // نستخدم مفاتيح ثابتة للـ state بدلاً من النصوص العربية
  const [activeTab, setActiveTab] = useState("rental");

  const tabs = {
    rental: {
      img: <img src={ServiceImg2} alt="Car Rental" />,
      title: t("invest.rental.title"),
      description: t("invest.rental.desc"),
      features: t("invest.rental.features", { returnObjects: true }), // جلب المصفوفة
    },
    insurance: {
      img: <img src={ServiceImg1} alt="Comprehensive Insurance" />,
      title: t("invest.insurance.title"),
      description: t("invest.insurance.desc"),
      features: t("invest.insurance.features", { returnObjects: true }),
    },
    legal: {
      img: <img src={ServiceImg3} alt="Legal Contracts" />,
      title: t("invest.legal.title"),
      description: t("invest.legal.desc"),
      features: t("invest.legal.features", { returnObjects: true }),
    },
  };

  return (
    <div className="invest py-5">
      <Container>
        <div className="title text-center mb-5">
          <h6 style={{ color: "#fc8b1a" }}>{t("invest.sub_title")}</h6>
          <h2 className="fw-bold">{t("invest.main_title")}</h2>
        </div>

        <div className="content">
          <div className="allButton d-flex flex-wrap justify-content-center gap-3 mb-4">
            {Object.keys(tabs).map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "warning" : "outline-secondary"}
                className="px-4 py-2 rounded-pill"
                onClick={() => setActiveTab(tab)}
                style={
                  activeTab === tab
                    ? {
                        backgroundColor: "#fc8b1a",
                        border: "none",
                        color: "#white",
                      }
                    : {}
                }
              >
                {t(`invest.tabs.${tab}`)}
              </Button>
            ))}
          </div>

          <div className="tab-details mt-5">
            <Zoom key={activeTab} duration={500}>
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="imgContent shadow-lg rounded overflow-hidden">
                    {tabs[activeTab].img}
                  </div>
                </div>

                <div className="col-lg-6 px-lg-5 text-center text-lg-start">
                  <div className="boxText">
                    <h1 className="fw-bold mb-3" style={{ color: "#fc8b1a" }}>
                      {tabs[activeTab].title}
                    </h1>
                    <p className="text-muted lh-lg mb-4">
                      {tabs[activeTab].description}
                    </p>

                    <ul className="list-unstyled d-inline-block text-start">
                      {Array.isArray(tabs[activeTab].features) &&
                        tabs[activeTab].features.map((feature, i) => (
                          <li key={i} className="mb-2 fw-medium">
                            {feature}
                          </li>
                        ))}
                    </ul>

                    <div className="mt-3">
                      <Button variant="dark" className="px-5 py-2">
                        {t("invest.order_btn")}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InvestMents;
