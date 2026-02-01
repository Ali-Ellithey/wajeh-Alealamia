import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next"; // استيراد الهوك

function BusinessSolutions() {
  const { t } = useTranslation();

  return (
    <div className="businessSolutions">
      <Container>
        {/* تم استبدال direction: "rtl" بكلاسات Bootstrap الذكية */}
        <div className="d-flex align-items-center justify-content-start flex-wrap py-4">
          {/* كلاس text-start في Bootstrap 5 يتغير تلقائياً حسب اتجاه الصفحة */}
          <h4
            className="text-start"
            style={{
              lineHeight: "1.8",
              margin: "0",
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            {t("business.launch_today")}
            <br />
            <span style={{ color: "#fc8b1a" }}>
              {" "}
              {t("business.brand_name")}{" "}
            </span>
            <br />
            {t("business.tagline")}
          </h4>
        </div>
      </Container>
    </div>
  );
}

export default BusinessSolutions;
