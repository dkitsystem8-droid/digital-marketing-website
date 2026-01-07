import React from "react";
import { useNavigate } from "react-router-dom";

export default function EmailMarketing() {
  const navigate = useNavigate();

  const card = {
    background: "#fff",
    padding: "30px",
    borderRadius: "18px",
    boxShadow: "0 15px 35px rgba(245, 38, 38, 0.2)",
  };

  return (
    
    <section
      style={{
        padding: "30px 20px",
        background: "linear-gradient(180deg,blue,white)",
        fontFamily: "Segoe UI, sans-serif",
      }}
      
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "90px",
          fontSize: "44px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Email Marketing Trends & Services
      </h2>
      

 {/* Main Grid */}
      <div className="email-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        gap: "50px",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "auto",
      }}>
        {/* LEFT CONTENT */}
        <div style={{ ...card, animation: "leftSlide 1.2s ease" }}>
          <h3 style={{ color: "#2757c0ff" }}>Hyper-Personalization & AI</h3>
          <p>AI-powered product recommendations, lifecycle emails, and dynamic content blocks deliver highly relevant messaging that boosts conversions.</p>

          <h3 style={{ color: "#2563eb", marginTop: "20px" }}>Interactive & Engaging Emails</h3>
          <p>Polls, quizzes, GIFs, surveys, and carousels increase engagement and capture valuable user data.</p>

          <h3 style={{ color: "#2563eb", marginTop: "20px" }}>Video in Emails</h3>
          <p>Product demos, tutorials, and testimonials improve CTR and customer trust.</p>
        </div>

        {/* CENTER EMAIL ICON */}
        <div
          onClick={() => navigate("/contact")}
          className="center-icon"
          style={{
            cursor: "pointer",
            background: "linear-gradient(135deg,#2563eb,#60a5fa)",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 45px rgba(37,99,235,0.6)",
            animation: "pulse 2s infinite",
            textAlign: "center",
            margin: "0 auto", // centers on mobile
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt="Email Marketing"
            style={{ width: "90px", filter: "invert(1)" }}
          />
          <h4 style={{ color: "#fff", marginTop: "12px" }}>Email Marketing</h4>
          <small style={{ color: "#e0f2fe" }}>Click to Contact</small>
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ ...card, animation: "rightSlide 1.2s ease" }}>
          <h3 style={{ color: "#2563eb" }}>Omnichannel Integration</h3>
          <p>Seamlessly connect email with SMS, apps, and social media for a unified customer journey.</p>

          <h3 style={{ color: "#2563eb", marginTop: "20px" }}>Data Privacy & Consent</h3>
          <p>Clear opt-ins, transparent data usage, and privacy-first campaigns build long-term trust.</p>

          <h3 style={{ color: "#2563eb", marginTop: "20px" }}>Mobile-First & Accessibility</h3>
          <p>Optimized layouts and accessible designs ensure reach across all devices.</p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div
        style={{
          maxWidth: "800px",
          margin: "120px auto 0",
          background: "#fff",
          padding: "50px",
          borderRadius: "22px",
          boxShadow: "0 20px 45px rgba(37,99,235,0.25)",
          textAlign: "center",
          animation: "fadeUp 1.5s",
        }}
      >
        <h2 style={{ color: "#2563eb", marginBottom: "20px" }}>
          Need Email Marketing Services?
        </h2>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Our company builds high-converting, AI-driven email marketing campaigns that grow your business and customer loyalty.
        </p>

        <button
          onClick={() => navigate("/contact")}
          style={{
            padding: "16px 34px",
            fontSize: "18px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            background: "linear-gradient(90deg,#2563eb,#60a5fa)",
            boxShadow: "0 10px 25px rgba(37,99,235,0.5)",
          }}
        >
          Contact Here
        </button>
      </div>

      {/* ANIMATIONS & RESPONSIVE */}
      <style>{`
        @keyframes leftSlide {
          from { opacity: 0; transform: translateX(-80px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes rightSlide {
          from { opacity: 0; transform: translateX(80px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .email-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .center-icon {
            width: 150px !important;
            height: 150px !important;
          }
          h2 {
            font-size: 32px !important;
          }
          h3 {
            font-size: 20px !important;
          }
          p {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
