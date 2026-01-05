import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate

export default function ContentMarketing() {
  const navigate = useNavigate(); // ✅ useNavigate hook

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      style={{
        padding: "30px 20px 80px 20px",
        maxWidth: "100%",
        margin: "auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#0f172a",
        lineHeight: 1.6,
        background: "linear-gradient(180deg, #173ad6ff 0%, #e0f2fe 100%)",
        borderRadius: "20px",
      }}
    >
      {/* ✅ Back Button */}
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

      {/* Heading */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "44px",
          fontWeight: "bold",
          marginBottom: "60px",
          color: "white",
          textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
        }}
      >
        Content Marketing Strategies
      </h1>

      {/* Hero image */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828925.png"
          alt="Content Marketing"
          style={{
            width: "180px",
            animation: "float 3s infinite ease-in-out",
            filter: "drop-shadow(0 0 10px #3b82f6)",
          }}
        />
      </div>

      {/* Description */}
      <p style={{ textAlign: "center", marginBottom: "60px", fontSize: "18px" }}>
        Blogs, articles, and content strategies that build trust and increase conversions.
      </p>

      {/* Content Sections */}
      <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
        <section
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
            transition: "transform 0.3s",
          }}
        >
          <h2 style={{ color: "#2563eb", marginBottom: "15px" }}>
            1. Contacting Content Marketing Agencies
          </h2>
          <p>
            Content marketing agencies have teams of writers and strategists who specialize in producing trending, SEO-optimized content for businesses.
          </p>
          <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
            <li>Identify Agencies: Search online directories or review industry lists.</li>
            <li>Reach Out Directly: Most agencies have a "Contact Us" page or dedicated email.</li>
            <li>Example Contact: Content Whale, Techmagnate, Markiverse.</li>
          </ul>
        </section>

        <section
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
            transition: "transform 0.3s",
          }}
        >
          <h2 style={{ color: "#2563eb", marginBottom: "15px" }}>
            2. Networking with Professionals on LinkedIn
          </h2>
          <p>
            LinkedIn is a great platform to connect with content creators, managers, and digital strategists.
          </p>
          <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
            <li>Search Strategically: Use keywords like "Content Strategist" or "Digital Marketing Content Developer".</li>
            <li>Send Personalized Messages: Reference specific work or shared interests.</li>
          </ul>
        </section>

        <section
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
            transition: "transform 0.3s",
          }}
        >
          <h2 style={{ color: "#2563eb", marginBottom: "15px" }}>
            3. Engaging with In-House Teams and Experts
          </h2>
          <p>
            Follow major digital marketing companies and experts via blogs, webinars, and virtual events.
          </p>
          <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
            <li>Industry Blogs: Neil Patel, HubSpot, Digital Marketing Institute.</li>
            <li>Webinars/Events: Participate to network and find collaboration opportunities.</li>
          </ul>
        </section>

        <section
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
            transition: "transform 0.3s",
          }}
        >
          <h2 style={{ color: "#2563eb", marginBottom: "15px" }}>
            Key Practices for Successful Outreach
          </h2>
          <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
            <li>Personalize Your Message.</li>
            <li>Be Clear and Concise.</li>
            <li>Focus on Mutual Benefit.</li>
            <li>Be Professional.</li>
          </ul>
        </section>
      </div>

      {/* Contact Form */}
      <div
  style={{
    marginTop: "80px",
    textAlign: "center",
  }}
>
  <button
    onClick={() => navigate("/contact")}
    style={{
      padding: "20px 50px",
      fontSize: "22px",
      fontWeight: "bold",
      color: "#fff",
      background: "linear-gradient(90deg, #22c55e, #16a34a)",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      boxShadow:
        "0 0 15px rgba(34, 197, 94, 0.6), 0 0 30px rgba(22, 163, 74, 0.4)",
      animation: "float 2.5s ease-in-out infinite",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Call icon */}
    <span style={{ fontSize: "28px" }}>📞</span>
    Contact Here

    {/* Shine effect */}
    <span
      style={{
        position: "absolute",
        top: 0,
        left: "-75%",
        width: "50%",
        height: "100%",
        background:
          "linear-gradient(120deg, rgba(255,255,255,0.2), rgba(255,255,255,0.6), rgba(255,255,255,0.2))",
        transform: "skewX(-25deg)",
        animation: "shine 2s infinite",
      }}
    ></span>
  </button>

  {/* Animations */}
  <style>{`
    @keyframes float {
      0% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-8px) scale(1.05); }
      100% { transform: translateY(0) scale(1); }
    }

    @keyframes shine {
      0% { left: -75%; }
      50% { left: 100%; }
      100% { left: 100%; }
    }
  `}</style>
</div>
    </section>
  );
}
