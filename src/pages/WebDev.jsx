import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const trendsSlides = [
  { title: "AI-Powered Personalization", text: "Websites use AI to offer hyper-personalized experiences in real-time." },
  { title: "Mobile-First Development", text: "Dedicated mobile layouts with thumb-friendly navigation are essential." },
  { title: "Voice Search Optimization", text: "Optimize content for conversational voice queries." },
  { title: "Progressive Web Apps", text: "PWAs offer app-like experiences with offline support." },
  { title: "Headless CMS", text: "Backend and frontend separation improves scalability." },
  { title: "Performance & Core Web Vitals", text: "Websites must load under 3 seconds." },
  { title: "Cybersecurity & Privacy", text: "HTTPS and privacy compliance build trust." },
  { title: "Interactive Elements", text: "Micro-interactions and AR/VR improve engagement." },
];

const circleColors = [
  "#f87171", "#fb923c", "#facc15", "#4ade80", 
  "#22d3ee", "#60a5fa", "#a78bfa", "#f472b6"
];

export default function WebDevTrendsCarousel() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [zoomedIndex, setZoomedIndex] = useState(null);
  const sliderMain = useRef(null);

  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", resize);

    const interval = setInterval(() => setAngle(prev => (prev + 0.5) % 360), 30);

    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(interval);
    };
  }, []);

  const mainSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    fade: true,
    arrows: !isMobile,
    beforeChange: (_, next) => setActiveIndex(next),
    afterChange: (current) => {
      setZoomedIndex(current);
      setTimeout(() => setZoomedIndex(null), 2000); // reset zoom after 2 sec
    },
  };

  const getCirclePosition = (idx) => {
    const radius = isMobile ? 80 : 140;
    const anglePer = (360 / trendsSlides.length) * idx;
    const rad = ((anglePer + angle) * Math.PI) / 180;
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);
    return { x, y };
  };

  return (
    <section
      style={{
        position: "relative",
        background: "#1d1f73",
        padding: isMobile ? "80px 10px 50px" : "120px 20px 100px", // increased top padding for back button space
        fontFamily: "Segoe UI, sans-serif",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {/* 🔙 BACK BUTTON TOP LEFT */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: isMobile ? "15px" : "20px",
          left: isMobile ? "15px" : "45px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#22c55e",
          color: "white",
          fontWeight: "bold",
          zIndex: 1000,
        }}
      >
        ← Back to Services
      </button>

      <h2
        style={{
          marginBottom: isMobile ? "50px" : "70px",
          fontSize: isMobile ? "24px" : "36px",
          fontWeight: "bold",
        }}
      >
        Core Website Development Trends
      </h2>

      {/* ROTATING CIRCLES */}
      <div
        style={{
          position: "relative",
          height: isMobile ? "160px" : "240px",
          marginBottom: isMobile ? "60px" : "110px",
        }}
      >
        {trendsSlides.map((slide, idx) => {
          const active = idx === activeIndex;
          const { x, y } = getCirclePosition(idx);

          return (
            <div
              key={idx}
              onClick={() => {
                sliderMain.current.slickGoTo(idx);
                setZoomedIndex(idx);
                setTimeout(() => setZoomedIndex(null), 2000);
              }}
              style={{
                position: "absolute",
                marginTop: "40px",
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) translate(${x}px, ${-y}px) scale(${active ? 1.25 : 1})`,
                width: isMobile ? "70px" : "110px",
                height: isMobile ? "70px" : "110px",
                borderRadius: "50%",
                background: circleColors[idx],
                border: active ? "4px solid #fff" : "2px solid rgba(255,255,255,0.5)",
                boxShadow: active ? `0 0 25px ${circleColors[idx]}aa` : "none",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "10px" : "12px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textAlign: "center",
              }}
            >
              {slide.title}
            </div>
          );
        })}
      </div>

      {/* MAIN CONTENT BOX */}
      <Slider ref={sliderMain} {...mainSettings}>
        {trendsSlides.map((slide, idx) => (
          <div key={idx}>
            <div
              style={{
                background: "#fff",
                color: "#1e3a8a",
                borderRadius: "16px",
                marginTop: "20px",
                padding: isMobile ? "15px 15px" : "20px 25px",
                minHeight: isMobile ? "auto" : "160px",
                lineHeight: 1.5,
                textAlign: "center",
                boxShadow: `0 0 25px ${circleColors[idx]}33`,
                transition: "transform 2s ease",
                transform: zoomedIndex === idx ? "scale(1.2)" : "scale(1)",
              }}
            >
              <h3 style={{ fontSize: isMobile ? "16px" : "20px", marginBottom: "10px" }}>
                {slide.title}
              </h3>
              <p style={{ fontSize: isMobile ? "12px" : "14px" }}>{slide.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
