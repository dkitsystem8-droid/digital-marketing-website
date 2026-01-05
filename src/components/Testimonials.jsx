import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonials = [
    {
      name: "Ravi Kumar",
      title: "Traffic Growth",
      text: "Our website traffic doubled within just three months.",
    },
    {
      name: "Anitha Sharma",
      title: "Professional Service",
      text: "Very professional, clear strategy and ROI focused team.",
    },
    {
      name: "Suresh",
      title: "Business Growth",
      text: "Best digital marketing partner we have worked with.",
    },
    {
      name: "Priya Nair",
      title: "Great Support",
      text: "Excellent support and timely campaign execution.",
    },
  ];

  /* 🔥 MOBILE SLIDER SETTINGS */
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 🔥 2 sec once move
    pauseOnHover: true,
    arrows: false,
  };

  const sectionStyle = {
    padding: "80px 20px",
    background: "linear-gradient(180deg,#e0f2fe,#ffffff)",
    textAlign: "center",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    background: "linear-gradient(135deg, #2563eb, #60a5fa)",
    padding: "30px 25px",
    borderRadius: "20px",
    color: "#ffffff",
    boxShadow: "0 20px 35px rgba(37,99,235,0.35)",
    margin: "15px",
  };

  const Card = ({ item }) => (
    <div style={cardStyle}>
      <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "6px" }}>
        {item.name}
      </h3>

      <div style={{ color: "#fde047", marginBottom: "10px" }}>⭐⭐⭐⭐⭐</div>

      <p
        style={{
          fontWeight: "600",
          marginBottom: "10px",
          fontSize: "15px",
        }}
      >
        {item.title}
      </p>

      <p
        style={{
          fontStyle: "italic",
          lineHeight: "1.6",
          fontSize: "14px",
          opacity: 0.95,
        }}
      >
        “{item.text}”
      </p>
    </div>
  );

  return (
    <section style={sectionStyle}>
      <h2
        style={{
          fontSize: "36px",
          marginBottom: "50px",
          color: "#1e3a8a",
          fontWeight: "bold",
        }}
      >
        What Our Clients Say
      </h2>

      {/* ✅ DESKTOP → GRID */}
      {!isMobile && (
        <div style={gridStyle}>
          {testimonials.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      )}

      {/* ✅ MOBILE → CAROUSEL */}
      {isMobile && (
        <Slider {...sliderSettings}>
          {testimonials.map((item, i) => (
            <div key={i}>
              <Card item={item} />
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
}
