import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const trendsSlides = [
  { title: "AI-Powered Personalization and UX", text: "Websites are leveraging AI to offer hyper-personalized experiences in real-time." },
  { title: "Mobile-First Development", text: "Dedicated mobile layouts with thumb-friendly navigation are essential." },
  { title: "Voice Search Optimization (VSO)", text: "Optimize content for conversational voice queries." },
  { title: "Progressive Web Apps (PWAs)", text: "PWAs offer app-like experiences with offline support." },
  { title: "Headless CMS & API-First Architecture", text: "Backend and frontend separation improves scalability." },
  { title: "Website Performance & Core Web Vitals", text: "Websites must load under 3 seconds." },
  { title: "Cybersecurity & Data Privacy", text: "HTTPS and privacy compliance build trust." },
  { title: "Interactive & Immersive Elements", text: "Micro-interactions and AR/VR improve engagement." },
];

export default function WebDevTrendsCarousel() {
  const navigate = useNavigate(); // ✅ useNavigate hook
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);

    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const trendsSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    arrows: !isMobile,
    fade: true,
    asNavFor: nav2,
    ref: slider1,
    appendDots: dots => (
      <ul style={{ display: "flex", justifyContent: "center", marginTop: "20px", padding: 0 }}>
        {dots.map((dot, i) => (
          <li key={i} style={{ listStyle: "none", margin: "0 6px" }}>
            <button
              style={{
                width: isMobile ? "26px" : "40px",
                height: isMobile ? "26px" : "40px",
                borderRadius: "50%",
                border: "none",
                background: "#83d390",
                color: "#fff",
                opacity: dot.props.className.includes("slick-active") ? 1 : 0.5,
              }}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    ),
  };

  const sideSettings = {
    slidesToShow: isMobile ? 1 : 3,
    centerMode: !isMobile,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    asNavFor: nav1,
    ref: slider2,
  };

  return (
    <section
      style={{
        backgroundColor: "#3a1edaff",
        padding: isMobile ? "20px 16px 50px" : "30px 20px 80px",
        maxWidth: "1200px",
        margin: "auto",
        borderRadius: "12px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* ✅ BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#22c55e",
          color: "white",
          fontWeight: "bold",
        }}
      >
        ← Back to Services
      </button>

      <h2
        style={{
          textAlign: "center",
          marginBottom: isMobile ? "40px" : "80px",
          fontSize: isMobile ? "26px" : "42px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Core Website Development Trends for Digital Marketing
      </h2>

      {/* MAIN CAROUSEL */}
      <Slider {...trendsSettings}>
        {trendsSlides.map(({ title, text }, idx) => (
          <div key={idx}>
            <div
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: isMobile ? "20px" : "40px",
                minHeight: isMobile ? "auto" : "250px",
                color: "#1e3a8a",
                fontSize: isMobile ? "15px" : "18px",
                lineHeight: "1.7",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3 style={{ fontSize: isMobile ? "18px" : "24px", marginBottom: "20px" }}>
                  {title}
                </h3>
                <p>{text}</p>
              </div>

              <div style={{ textAlign: "center", marginTop: "30px" }}>
                <a
                  href="/contact"
                  style={{
                    padding: "10px 22px",
                    background: "#0bb413",
                    color: "#fff",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* SIDE NAV */}
      <div style={{ marginTop: isMobile ? "50px" : "100px" }}>
        <Slider {...sideSettings}>
          {trendsSlides.map(({ title }, idx) => (
            <div key={idx} style={{ padding: "16px" }}>
              <div
                style={{
                  background: "#4e72e9",
                  color: "#fff",
                  borderRadius: "15px",
                  padding: "20px",
                  minHeight: isMobile ? "120px" : "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {title}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
