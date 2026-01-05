import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section style={heroStyle}>
      <div style={overlayStyle} />

      <h1 style={headingStyle(isMobile)}>
        Grow Your Business with Cutting-Edge Digital Marketing Solutions
      </h1>

      {!isMobile && (
        <div style={desktopWrapper}>
          <div style={circleStyle}>
            <p style={circleTextStyle}>
              We help startups and enterprises increase visibility, attract
              high-quality leads, and drive sales.
            </p>
          </div>

          <button
            style={buttonStyleDesktop}
            onClick={() => navigate("/contact")}
          >
            Get Your Free Consultation
          </button>
        </div>
      )}

      {isMobile && (
        <div style={mobileWrapper}>
          <div style={circleStyleMobile}>
            <p style={circleTextStyle}>
              We help startups and enterprises increase visibility, attract
              high-quality leads, and drive sales.
            </p>
          </div>

          <button
            style={buttonStyleMobile}
            onClick={() => navigate("/contact")}
          >
            Get Your Free Consultation
          </button>
        </div>
      )}
    </section>
  );
}

/* ================= STYLES ================= */

const heroStyle = {
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflowX: "hidden",
  backgroundImage: "url('/images/hero.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "80px",
};

const overlayStyle = {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,50,0.35)",
  zIndex: 0,
};

const headingStyle = (isMobile) => ({
  zIndex: 1,
  color: "#fff",
  textAlign: "center",
  fontWeight: 900,
  fontSize: isMobile ? "1.8rem" : "3rem",
  maxWidth: "900px",
  padding: "0 24px",
  textShadow: "0 0 20px #00f0ff",
  marginBottom: isMobile ? "1.2rem" : "2rem", // ✅ FIX
});

/* -------- Desktop -------- */

const desktopWrapper = {
  width: "100%",
  maxWidth: "1200px",
  padding: "0 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  zIndex: 1,
};

const circleStyle = {
  width: "260px",
  height: "260px",
  borderRadius: "50%",
  background: "rgba(0,240,255,0.25)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  boxShadow: "0 0 30px #00f0ff",
  textAlign: "center",
};

/* -------- Mobile -------- */

const mobileWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",          // ✅ FIX
  marginTop: "0.5rem",  // ✅ FIX
  paddingBottom: "1.5rem",
  zIndex: 1,
};

const circleStyleMobile = {
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  background: "rgba(0,240,255,0.25)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "15px",
  marginBottom: "0.5rem", // ✅ FIX
  boxShadow: "0 0 30px #00f0ff",
  textAlign: "center",
};

const circleTextStyle = {
  color: "#fff",
  fontSize: "0.95rem",
  lineHeight: 1.4,
};

/* -------- Buttons -------- */

const buttonStyleDesktop = {
  padding: "16px 40px",
  borderRadius: "50px",
  border: "none",
  fontSize: "1rem",
  fontWeight: 600,
  cursor: "pointer",
  color: "#fff",
  background: "linear-gradient(45deg,#005eff,#00f0ff)",
  boxShadow: "0 0 20px #00f0ff",
};

const buttonStyleMobile = {
  padding: "14px 32px",
  borderRadius: "50px",
  border: "none",
  fontSize: "0.95rem",
  fontWeight: 600,
  cursor: "pointer",
  color: "#fff",
  background: "linear-gradient(45deg,#005eff,#00f0ff)",
  boxShadow: "0 0 20px #00f0ff",
};
