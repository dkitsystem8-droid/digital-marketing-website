import React from "react";
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
        },
      },
    ],
  };

  const cardStyle = {
    background: "#ffffff",
    borderRadius: "18px",
    padding: "20px",
    minHeight: "340px",
    boxShadow: "0 20px 25px rgba(0,0,0,0.18)",
    textAlign: "center",
    transition: "0.4s",
    display: "flex",
    flexDirection: "column",
    margin: "10px",
  };

  const imgStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "14px",
    marginBottom: "15px",
  };

  const stepIndicator = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "40px",
    flexWrap: "wrap",
  };

  const stepCircle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#2563eb",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    margin: "0 auto 5px",
  };

  return (
    <section
      id="process" // ✅ Important for Navbar scroll
      style={{ padding: "70px 20px", backgroundColor: "#1e3a8a", textAlign: "center" }}
    >
      <h2 style={{ color: "#fff", fontSize: "2rem", marginBottom: "40px" }}>Our Process</h2>

      {/* Optional Step Circles */}
      <div style={stepIndicator}>
        {processSteps.map((step, index) => (
          <div key={index} style={{ color: "#fff", textAlign: "center" }}>
            <div style={stepCircle}>{index + 1}</div>
            <div style={{ fontSize: "14px" }}>{step.title}</div>
          </div>
        ))}
      </div>

      <div style={{ margin: "0 auto", overflow: "hidden" }}>
        <Slider {...settings}>
          {processSteps.map((step, index) => (
            <div key={index} style={{ padding: "20px 15px 40px", boxSizing: "border-box" }}>
              <div
                style={cardStyle}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
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
