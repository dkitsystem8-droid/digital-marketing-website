import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMAGE AND CONTENT DATA
const imageSlides = [
  { img: "/images/ads1.jpg", caption: "Google Ads Campaign" },
  { img: "/images/ads2.jpg", caption: "PPC Ads" },
  { img: "/images/ads3.jpg", caption: "Marketing Dashboard" },
  { img: "/images/ads4.jpg", caption: "SEO Services" },
  { img: "/images/ads5.jpg", caption: "Social Media Marketing" },
  { img: "/images/ads6.jpg", caption: "Email Marketing" },
];

const contentSlides = [
  { title: "AI and Automation in Google Ads", text: "Artificial intelligence drives modern Google Ads campaigns for smarter targeting and optimization." },
  { title: "Privacy-First Advertising", text: "With cookie deprecation, first-party data is crucial for effective campaigns." },
  { title: "Ad Formats & UX", text: "Short-form video and immersive ads dominate engagement across platforms." },
  { title: "Strategic Optimization", text: "Landing page speed, relevance, and ad structure are critical for ROI." },
];

export default function GoogleAdsCarousel() {
  const navigate = useNavigate();
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // IMAGE SLIDER SETTINGS
  const imageSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: isMobile ? 1 : 3,
    autoplay: true,
    arrows: !isMobile,
    asNavFor: nav2,
    ref: slider1,
  };

  // CONTENT SLIDER SETTINGS
  const contentSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    arrows: !isMobile,
    fade: true,
    asNavFor: nav1,
    ref: slider2,
    appendDots: dots => (
      <ul style={{ display: "flex", justifyContent: "center", marginTop: "20px", padding: 0 }}>
        {dots.map((dot, i) => (
          <li key={i} style={{ listStyle: "none", margin: "0 6px" }}>
            <button
              style={{
                width: isMobile ? "32px" : "50px",
                height: isMobile ? "32px" : "50px",
                borderRadius: "50%",
                border: "none",
                background: "#1e40af",
                color: "#fff",
                fontWeight: "bold",
                opacity: dot.props.className.includes("slick-active") ? 1 : 0.5,
                cursor: "pointer",
              }}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    ),
  };

  return (
    <section
      style={{
        background: "rgba(1, 15, 216, 1)",
        padding: isMobile ? "40px 10px 40px" : "30px 10px 50px",
        fontFamily: "Segoe UI, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* BACK BUTTON */}
      <div style={{ textAlign: "left", marginBottom: "20px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            marginBottom: "20px",
            padding: "10px 24px",
            background: "transparent",
            color: "white",
            border: "2px solid white",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
             backgroundColor: "#22c55e",
          }}
        >
          ← Back to Services
        </button>
      </div>

      {/* HEADING */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "60px",
          fontSize: isMobile ? "28px" : "48px",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "#4285F4" }}>G</span>
        <span style={{ color: "#EA4335" }}>o</span>
        <span style={{ color: "#FBBC05" }}>o</span>
        <span style={{ color: "#4285F4" }}>g</span>
        <span style={{ color: "#34A853" }}>l</span>
        <span style={{ color: "#EA4335" }}>e</span>
        <span style={{ color: "#4285F4" }}> Ads</span>
      </h2>

      {/* IMAGE SLIDER */}
      <Slider {...imageSettings}>
        {imageSlides.map((s, i) => (
          <div key={i} style={{ padding: "10px" }}>
            <div
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "20px",
                textAlign: "center",
                minHeight: isMobile ? "200px" : "250px",
              }}
            >
              <img
                src={s.img}
                alt={s.caption}
                style={{
                  maxWidth: "100%",
                  maxHeight: isMobile ? "120px" : "150px",
                  objectFit: "contain",
                  marginBottom: "15px",
                }}
              />
              <strong>{s.caption}</strong>
            </div>
          </div>
        ))}
      </Slider>

      {/* CONTENT SLIDER */}
      <div
        style={{
          marginTop: "40px",
          background: "#fff",
          borderRadius: "20px",
          padding: isMobile ? "20px" : "40px",
          minHeight: isMobile ? "auto" : "320px",
          color: "#1e3a8a",
          fontSize: isMobile ? "15px" : "18px",
          lineHeight: "1.7",
        }}
      >
        <Slider {...contentSettings}>
          {contentSlides.map((c, i) => (
            <div key={i}>
              <h3 style={{ marginBottom: "12px" }}>
                Step {i + 1}: {c.title}
              </h3>
              <p>{c.text}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* FLOAT ANIMATION (OPTIONAL) */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
