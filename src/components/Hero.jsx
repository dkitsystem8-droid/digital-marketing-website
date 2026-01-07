import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [hoverBtn, setHoverBtn] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const screenshots = [
    "/images/digital2.jpg",
    "/images/socialmedia.jpg",
    "/images/social3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  /* ================= STYLES ================= */

  const heroSection = {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    padding: isMobile ? "30px 18px" : "80px 70px",
    backgroundColor: "#0b1c4d",
    color: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
    gap: isMobile ? "40px" : "60px",
  };

  const leftSide = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: isMobile ? "center" : "flex-start",
    textAlign: isMobile ? "center" : "left",
  };

  const subHeading = {
    fontSize: isMobile ? "0.9rem" : "1.4rem",
    marginBottom: "16px",
    fontWeight: 600,
    color: "#00f0ff",
    letterSpacing: "0.8px",
  };

  const heading = {
    fontSize: isMobile ? "2rem" : "3.8rem",
    fontWeight: 900,
    lineHeight: "1.15",
    marginBottom: "22px",
    maxWidth: "620px",
  };

  const description = {
    fontSize: "1rem",
    lineHeight: "1.75",
    color: "#ccefff",
    maxWidth: "520px",
    marginBottom: "38px",
    padding: isMobile ? "0 10px" : "0",
    boxSizing: "border-box",
  };

  const button = {
    padding: isMobile ? "15px 38px" : "18px 44px",
    borderRadius: "60px",
    border: "none",
    background: "linear-gradient(45deg, #005eff, #00f0ff)",
    color: "#fff",
    fontSize: "1.05rem",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: hoverBtn
      ? "0 0 40px #00f0ff"
      : "0 0 24px #00f0ff",
    transform: hoverBtn ? "scale(1.1)" : "scale(1)",
    transition: "all 0.35s ease",
  };

  const rightSide = {
    flex: 1,
    width: "100%",
    maxWidth: "620px",
    height: isMobile ? "250px" : "380px",
    borderRadius: "18px",
    backgroundImage: `url(${screenshots[currentScreenshot]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
  };

  /* ================= JSX ================= */

  return (
     <section id="hero" style={heroSection}>
      {/* LEFT CONTENT */}
      <div style={leftSide}>
        <div style={subHeading}>PREMIUM WEB DESIGN AGENCY</div>

        <h1 style={heading}>WE GROW BRANDS ONLINE</h1>

        <p style={description}>
          Custom Websites, Branding & Digital Marketing to elevate your business
          and create a strong online presence that converts visitors into
          customers.
        </p>

        <button
          style={button}
          onMouseEnter={() => setHoverBtn(true)}
          onMouseLeave={() => setHoverBtn(false)}
          onClick={() => navigate("/contact")}
        >
          REQUEST A QUOTE →
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div style={rightSide}></div>
    </section>
  );
}
