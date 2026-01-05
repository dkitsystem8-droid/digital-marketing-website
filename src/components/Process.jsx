import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OurProcess() {
  const processSteps = [
    { title: "Business Discovery", desc: "Understanding your business, goals, customers, and competitors.", img: "/images/business.jpg" },
    { title: "Strategy Planning", desc: "Creating the right marketing strategy based on the insights.", img: "/images/stategy.jpg" },
    { title: "Execution", desc: "Implementing the planned strategy with content, ads, and social media.", img: "/images/ece.jpg" },
    { title: "Optimization", desc: "Monitoring results and improving Ads, SEO, and content for better performance.", img: "/images/seo.jpg" },
    { title: "Growth & Scaling", desc: "Expanding successful strategies for larger impact and new markets.", img: "/images/Growth.jpg" },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [sliderKey, setSliderKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setSliderKey(prev => prev + 1); // force slider re-render
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: !isMobile,
    swipeToSlide: true,
    centerMode: isMobile, // center each slide on mobile
    centerPadding: isMobile ? "0px" : "0px", // no side padding
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "18px",
    padding: "20px",
    minHeight: "340px",
    boxShadow: "0 20px 25px rgba(0,0,0,0.18)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    transition: "0.4s",
  };

  const imgStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "14px",
    marginBottom: "15px",
  };

  return (
    <section
      id="process"
      style={{ padding: "70px 20px", backgroundColor: "#1e3a8a", textAlign: "center" }}
    >
      <h2 style={{ color: "#fff", fontSize: "2rem", marginBottom: "40px" }}>Our Process</h2>

      {/* Slider */}
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        <Slider key={sliderKey} {...settings}>
          {processSteps.map((step, index) => (
            <div key={index} style={{ padding: "10px", boxSizing: "border-box" }}>
              <div
                style={cardStyle}
                onMouseEnter={(e) => !isMobile && (e.currentTarget.style.transform = "translateY(-8px)")}
                onMouseLeave={(e) => !isMobile && (e.currentTarget.style.transform = "translateY(0)")}
              >
                <img src={step.img} alt={step.title} style={imgStyle} />
                <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>{step.title}</h3>
                <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6", margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
