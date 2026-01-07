import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { title: "AI-Powered Personalization", text: "Websites use AI to offer hyper-personalized experiences in real-time." },
  { title: "Mobile-First Development", text: "Dedicated mobile layouts with thumb-friendly navigation are essential." },
  { title: "Voice Search Optimization", text: "Optimize content for conversational voice queries." },
  { title: "Progressive Web Apps", text: "PWAs offer app-like experiences with offline support." },
  { title: "Headless CMS", text: "Backend and frontend separation improves scalability." },
  { title: "Performance & Core Web Vitals", text: "Websites must load under 3 seconds." },
  { title: "Cybersecurity & Privacy", text: "HTTPS and privacy compliance build trust." },
  { title: "Interactive Elements", text: "Micro-interactions and AR/VR improve engagement." },
];

export default function WebDevTrendsBoxCarousel() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const settings = {
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 700,
    centerPadding: isMobile ? "0px" : "160px",
    slidesToShow: isMobile ? 1 : 3,
    arrows: !isMobile,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  return (
    <section
      style={{
        position: "relative",
        padding: isMobile ? "30px 10px" : "40px 20px", // 🔽 reduced top padding
        fontFamily: "Segoe UI, sans-serif",
        color: "#fff",
        backgroundImage:
          "linear-gradient(rgba(16,64,177,0.85), rgba(33,80,189,0.9)), url('https://images.unsplash.com/photo-1518770660439-4636190af475')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
     

      {/* HEADING */}
      <h2
        style={{
          textAlign: "center",
          fontSize: isMobile ? "30px" : "44px",
          marginBottom: "30px", // 🔽 reduced
        }}
      >
        Core Website Development Trends
      </h2>

      {/* INTRO CONTENT */}
      <p
        style={{
          maxWidth: "850px",
          margin: "0 auto 60px",
          textAlign: "center",
          fontSize: isMobile ? "13px" : "15px",
          lineHeight: 1.8,
          color: "#e0e7ff",
        }}
      >
        Modern website development is evolving rapidly with new technologies and user expectations.
        Businesses today require fast, secure, and highly interactive digital experiences to stay competitive.
        From AI-driven personalization to mobile-first design strategies, trends focus on user convenience and performance.
        Search behavior is changing with voice assistants, demanding smarter content optimization.
        Progressive Web Apps and headless architectures are redefining scalability and flexibility.
        Understanding these trends helps brands build future-ready websites that convert and retain users.
      </p>

      {/* CAROUSEL */}
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div key={idx}>
                <div
                  onClick={() => sliderRef.current.slickGoTo(idx)}
                  style={{
                    margin: "0 18px",
                    padding: "30px",
                    height: "150px",
                    borderRadius: "18px",
                    background: isActive ? "#e6238ee0" : "#ffffff",
                    color: isActive ? "#fff" : "#1e3a8a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    cursor: "pointer",
                    transform: isActive ? "scale(1.3)" : "scale(0.9)",
                    transition: "all 0.5s ease",
                    boxShadow: isActive
                      ? "0 25px 50px rgba(19,172,172,0.45)"
                      : "0 10px 25px rgba(46,184,104,0.25)",
                  }}
                >
                  <h3 style={{ fontSize: "17px", lineHeight: 1.4 }}>
                    {slide.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* CONTENT BOX */}
      <div
        style={{
          maxWidth: "750px",
          margin: "60px auto 0",
          background: "#ffffff",
          color: "#1e3a8a",
          padding: isMobile ? "36px" : "32px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 25px 45px rgba(0,0,0,0.35)",
        }}
      >
        <h3 style={{ marginBottom: "16px" }}>
          {slides[activeIndex].title}
        </h3>
        <p style={{ fontSize: "14px", lineHeight: 1.7 }}>
          {slides[activeIndex].text}
        </p>
      </div>
    </section>
  );
}
