import React from "react";
import Container from "react-bootstrap/esm/Container";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import tastImage from "../../img_car/9c264c54af831781aca6d8ad55e3eb57.jpg";
import tastImage2 from "../../img_car/d5284aa743393e61b179fd059870db70.jpg";

export const Testimonials = () => {
  const { t, i18n } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // لجعل السلايدر يدعم الاتجاه من اليمين لليسار برمجياً
    rtl: i18n.language === "ar",
  };

  const testimonialData = [
    {
      image: tastImage,
      text: t("testimonials.slide1.text"),
    },
    {
      image: tastImage2,
      text: t("testimonials.slide2.text"),
    },
  ];

  return (
    <div className="Testimonials py-1" id="Testimonials">
      <Container>
        <div className="title text-center mb-4">
          <h2 className="fw-bold">{t("testimonials.main_title")}</h2>
        </div>
        <div className="content">
          <Slider {...settings}>
            {testimonialData.map((item, index) => (
              <div key={index} className="items">
                <div className="info text-center px-md-5">
                  <i
                    className="fa fa-quote-left mb-3"
                    style={{ color: "#fc8b1a", fontSize: "2rem" }}
                  ></i>
                  <p className="lead" style={{ lineHeight: "1.8" }}>
                    {item.text}
                  </p>
                </div>
                <div className="image text-center mt-4">
                  <img
                    src={item.image}
                    alt="Wahaj Testimonial"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      margin: "0 auto",
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
