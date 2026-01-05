import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SocialMedia() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const benefits = [
    "Humanize your business: Turn your brand into an approachable persona.",
    "Drive traffic: Increase website visits and SEO impact.",
    "Generate leads and customers: Through direct platform features.",
    "Increase brand awareness: Build visual identity across platforms.",
    "Build relationships: Engage and network with followers and customers.",
  ];

  const stats = [
    "The average US adult spends 2.25 hours on social media daily.",
    "Over 70% of people recommend businesses they have positive experiences with.",
    "Facebook users click 12 ads on average each month.",
    "81% of people use Instagram to research products and services.",
    "Nearly 80% of Twitter users feel more positive after receiving a reply.",
    "4 out of 5 people on LinkedIn drive business decisions.",
    "46% of TikTok users engage without other distractions.",
  ];

  const socialLinks = [
    {
      name: "Instagram",
      img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
      url: "https://www.instagram.com/",
    },
    {
      name: "Facebook",
      img: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
      url: "https://www.facebook.com/",
    },
    {
      name: "LinkedIn",
      img: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      url: "https://www.linkedin.com/",
    },
    {
      name: "WhatsApp",
      img: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
      url: "https://www.whatsapp.com/",
    },
  ];

  return (
    <section
      style={{
        background: "rgba(10, 13, 175, 1)",
        padding: isMobile ? "40px 16px 50px" : "20px 20px 80px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        {/* ================= HEADER ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "20px",
            alignItems: "center",
            marginBottom: "80px",
          }}
        >
          <div>
            {/* 🔙 BACK BUTTON */}
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

            <h1
              style={{
                color: "white",
                fontSize: isMobile ? "32px" : "58px",
                lineHeight: "1.2",
              }}
            >
              Social Media Marketing
            </h1>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                marginTop: "20px",
                color: "white",
              }}
            >
              Social media marketing is a powerful way for businesses to reach
              prospects and customers using Instagram, Facebook, LinkedIn, and
              WhatsApp.
            </p>

            <button style={buttonStyle} onClick={() => navigate("/contact")}>
              Contact Here
            </button>
          </div>

          {/* IMAGE */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/images/social3.jpg"
              alt="Social Media"
              style={{
                width: isMobile ? "220px" : "300px",
                height: "auto",
                maxWidth: "100%",
                animation: "float 3s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* ================= BENEFITS ================= */}
        <div
          style={{
            background: "#ffffff",
            padding: isMobile ? "30px 16px" : "60px 20px",
            borderRadius: "20px",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "#1e40af",
              fontSize: isMobile ? "22px" : "28px",
            }}
          >
            Benefits of Social Media Marketing
          </h2>

          <ul style={{ lineHeight: "1.9", fontSize: "15px", color: "#1e3a8a" }}>
            {benefits.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* ================= STATISTICS ================= */}
        <div
          style={{
            background: "#dbeafe",
            padding: isMobile ? "30px 16px" : "60px 20px",
            borderRadius: "20px",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "#1e40af",
              fontSize: isMobile ? "22px" : "28px",
            }}
          >
            Social Media Marketing Statistics
          </h2>

          <ul style={{ lineHeight: "1.9", fontSize: "15px", color: "#1e3a8a" }}>
            {stats.map((stat, i) => (
              <li key={i}>{stat}</li>
            ))}
          </ul>
        </div>

        {/* ================= SOCIAL ICONS ================= */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          {socialLinks.map((social, i) => (
            <a key={i} href={social.url} target="_blank" rel="noreferrer">
              <img
                src={social.img}
                alt={social.name}
                style={{
                  ...circleImg,
                  width: isMobile ? "44px" : "50px",
                  height: isMobile ? "44px" : "50px",
                }}
              />
            </a>
          ))}
        </div>
      </div>

      {/* FLOAT ANIMATION */}
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

/* ================= STYLES ================= */
const buttonStyle = {
  marginTop: "10px",
  padding: "14px 36px",
  background: "linear-gradient(120deg, #37f184, #3ea515)",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "16px",
  cursor: "pointer",
};

const backBtnStyle = {
  marginBottom: "20px",
  padding: "10px 24px",
  background: "transparent",
  color: "white",
  border: "2px solid white",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "14px",
};

const circleImg = {
  borderRadius: "50%",
  objectFit: "cover",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
};
