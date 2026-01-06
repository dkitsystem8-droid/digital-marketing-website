import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const googleReviewLink =
    "https://www.google.com/maps/place/Durkkas+Innovations+Pvt.+Ltd";

  const testimonials = [
    {
      name: "DHANRAJ S",
      role: "Local Guide · 159 reviews",
      rating: 5,
      text: "It",
      time: "3 years ago",
    },
    {
      name: "Vel Raj",
      role: "Local Guide · 3 reviews",
      rating: 5,
      text: "Excellent service and great support team.",
      time: "2 years ago",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const cardStyle = {
    background:
      "linear-gradient(135deg,#ffffff,#f0f9ff,#ffffff)",
    backgroundSize: "300% 300%",
    animation: "cardShine 6s ease infinite",
    borderRadius: "18px",
    padding: "25px",
    boxShadow: "0 25px 55px rgba(37,99,235,0.35)",
    textAlign: "left",
    transition: "transform 0.3s ease",
  };

  const Stars = ({ count }) => (
    <div style={{ color: "#facc15", fontSize: "18px" }}>
      {"★".repeat(count)}
    </div>
  );

  const Card = ({ item }) => (
    <div style={cardStyle}>
      <Stars count={item.rating} />

      <p style={{ fontStyle: "italic", margin: "12px 0" }}>
        “{item.text}”
      </p>

      <h4 style={{ margin: 0 }}>{item.name}</h4>
      <small style={{ color: "#475569" }}>
        {item.role} • {item.time}
      </small>

      {/* GOOGLE REVIEWS BUTTON */}
      <div style={{ marginTop: "18px" }}>
        <a
          href={googleReviewLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "10px 18px",
            borderRadius: "8px",
            background:
              "linear-gradient(90deg,#2563eb,#60a5fa,#2563eb)",
            backgroundSize: "200% 200%",
            animation: "shine 3s linear infinite",
            color: "#ffffff",
            fontWeight: "600",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          View Google Reviews →
        </a>
      </div>
    </div>
  );

  return (
    <section
      style={{
        padding: "80px 20px",
        textAlign: "center",
        background:
          "linear-gradient(120deg,#1e3a8a,#3b82f6,#e0f2fe,#3b82f6,#1e3a8a)",
        backgroundSize: "400% 400%",
        animation: "bgShine 10s ease infinite",
      }}
    >
      {/* 🔥 KEYFRAMES */}
      <style>
        {`
          @keyframes bgShine {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes shine {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }

          @keyframes cardShine {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <h2
        style={{
          fontSize: isMobile ? "26px" : "36px",
          marginBottom: "40px",
          color: "#ffffff",
          fontWeight: "bold",
          textShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        What Our Clients Say
      </h2>

      {/* DESKTOP GRID */}
      {!isMobile && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {testimonials.map((t, i) => (
            <Card key={i} item={t} />
          ))}
        </div>
      )}

      {/* MOBILE SLIDER */}
      {isMobile && (
        <Slider {...sliderSettings}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ padding: "0 10px" }}>
              <Card item={t} />
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
}
