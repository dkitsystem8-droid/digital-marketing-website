import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* IMAGE DATA */
const imageSlides = [
  { img: "/images/ads1.jpg", caption: "Google Ads Campaign" },
  { img: "/images/ads2.jpg", caption: "PPC Ads" },
  { img: "/images/ads3.jpg", caption: "Marketing Dashboard" },
  { img: "/images/ads4.jpg", caption: "SEO Services" },
  { img: "/images/ads5.jpg", caption: "Social Media Marketing" },
  { img: "/images/ads6.jpg", caption: "Email Marketing" },
];

/* CONTENT DATA */
const contentSlides = [
  {
    title: "AI & Automation",
    text: "AI-powered Google Ads use Smart Bidding, Performance Max, and predictive analytics to optimize targeting, reduce ad spend, and increase conversions in real time."
  },
  {
    title: "Privacy First",
    text: "As third-party cookies phase out, Google Ads relies on first-party data, Consent Mode, and AI-driven conversion modeling to deliver compliant and effective advertising."
  },
  {
    title: "Ad Experience",
    text: "Google Ads now prioritizes user-friendly ad experiences through short-form video, mobile-first creatives, and relevant messaging to boost engagement and Quality Scores."
  },
  {
    title: "Landing Pages",
    text: "Optimized landing pages with fast load times, mobile-first design, clear CTAs, and relevant messaging increase conversions and ROI from Google Ads campaigns."
  },
  {
    title: "Audience Targeting",
    text: "Google Ads leverages AI-driven audience segments, first-party data, and remarketing to ensure ads reach the right users, increasing engagement and conversions."
  },
  {
    title: "Campaign Scaling",
    text: "Using AI, Performance Max, and automated bidding, Google Ads campaigns can be scaled across channels to increase conversions while optimizing spend and ROI."
  },
];

export default function GoogleAdsCarousel() {
  const navigate = useNavigate();

  const sliderImg = useRef(null);
  const sliderContent = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setNav1(sliderImg.current);
    setNav2(sliderContent.current);

    const resize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* IMAGE SLIDER */
  const imageSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: isMobile ? 1 : 3,
    autoplay: true,
    arrows: !isMobile,
    asNavFor: nav2,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  /* CONTENT SLIDER */
  const contentSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    fade: true,
    arrows: !isMobile,
    asNavFor: nav1,
    beforeChange: (_, next) => setActiveIndex(next),
    appendDots: dots => (
      <ul style={{ display: "flex", justifyContent: "center", marginTop: "20px", padding: 0 }}>
        {dots.map((dot, i) => (
          <li key={i} style={{ listStyle: "none", margin: "0 6px" }}>
            <button
              onClick={() => sliderContent.current.slickGoTo(i)}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "none",
                background: i === activeIndex ? "#2563eb" : "#93c5fd",
                color: "#fff",
                fontWeight: "bold",
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
    <section style={{ background: "#010fd8", padding: "40px 10px", minHeight: "100vh" }}>
      
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        style={{
          marginBottom: "30px",
          padding: "10px 22px",
          background: "#22c55e",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ← Back to Services
      </button>

      {/* HEADING */}
      <h2 style={{ textAlign: "center", color: "white", fontSize: isMobile ? "28px" : "48px", marginBottom: "50px" }}>
        Google Ads
      </h2>

      {/* IMAGE SLIDER */}
      <Slider ref={sliderImg} {...imageSettings}>
        {imageSlides.map((s, i) => (
          <div key={i} style={{ padding: "10px", position: "relative" }}>
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: i === activeIndex ? "3px solid #2563eb" : "3px solid transparent",
                position: "relative",
              }}
            >
              <img
                src={s.img}
                alt={s.caption}
                style={{
                  width: "100%",
                  height: isMobile ? "140px" : "180px",
                  objectFit: "cover",
                  filter: "blur(2px) brightness(0.7)",
                }}
              />
              {/* CAPTION */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                fontWeight: "bold",
                fontSize: isMobile ? "14px" : "18px",
                textAlign: "center",
                textShadow: "0 0 8px rgba(0,0,0,0.7)",
              }}>
                {s.caption}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* CONTENT BOX */}
      <div
        style={{
          marginTop: "40px",
          background: "#fff",
          borderRadius: "20px",
          padding: isMobile ? "20px" : "40px",
          border: "4px solid #2563eb",
          boxShadow: "0 0 25px rgba(37,99,235,.6)",
          color: "#1e3a8a",
        }}
      >
        <Slider ref={sliderContent} {...contentSettings}>
          {contentSlides.map((c, i) => (
            <div key={i}>
              <h3 style={{ marginBottom: "12px" }}>Step {i + 1}: {c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
