import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

export default function ContactHere() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#1e3a8a",
        padding: "120px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* HEADING */}
      <h2
        style={{
          color: "#ffffff",
          fontSize: "36px",
          fontWeight: "800",
          marginBottom: "40px",
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0)" : "translateY(-20px)",
          transition: "all 0.6s ease",
        }}
      >
        Contact Us
      </h2>

      {/* CENTER BUTTON */}
      <button
        onClick={() => navigate("/contact")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "18px 46px",
          background: "linear-gradient(45deg, #22c55e, #4ade80)",
          color: "#fff",
          border: "none",
          borderRadius: "60px",
          fontSize: "20px",
          fontWeight: "700",
          cursor: "pointer",
          boxShadow: "0 0 30px rgba(34,197,94,0.9)",
          animation: "pulse 1.8s infinite",
        }}
      >
        <FaPhoneAlt
          style={{
            color: "#00ff6a",
            fontSize: "22px",
            animation: "iconZoom 1.2s infinite",
          }}
        />
        Contact Here
      </button>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.08); }
            100% { transform: scale(1); }
          }

          @keyframes iconZoom {
            0% { transform: scale(1); }
            50% { transform: scale(1.25); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </section>
  );
}
