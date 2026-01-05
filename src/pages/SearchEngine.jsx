import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SEO() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(to bottom, blue, white)",
        padding: isMobile ? "20px 20px" : "30px 60px",
      }}
    >
      <div style={{ maxWidth: "100%", margin: "auto" }}>

        {/* ================= PAGE 1 ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "40px",
            alignItems: "center",
            marginBottom: isMobile ? "80px" : "160px",
          }}
        >
          {/* LEFT */}
          <div>
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

            <h1
              style={{
          marginBottom: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          
          color: "white",
          fontWeight: "bold",
        }}
            >
              How SEO Works
            </h1>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "2",
                color: "white",
              }}
            >
              Search engines use bots (crawlers) to discover, read, and organize
              content across the internet.
            </p>

            <ul style={{ marginTop: "20px", lineHeight: "1.9", color: "white" }}>
              <li><strong>Crawling:</strong> Bots scan content.</li>
              <li><strong>Indexing:</strong> Data is stored.</li>
              <li><strong>Ranking:</strong> Best results shown.</li>
            </ul>

            <p style={{ marginTop: "20px", color: "#e9da0dff" }}>
              Strong UX and quality content help ranking.
            </p>

            <button onClick={() => navigate("/contact")} style={buttonStyle}>
              Contact Here
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div style={{ textAlign: "center" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888879.png"
              alt="SEO"
              style={{
                width: isMobile ? "200px" : "300px",
                maxWidth: "100%",
                animation: "float 3s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* ================= PAGE 2 ================= */}
        <div
          style={{
            background: "#2c49ecff",
            padding: isMobile ? "30px 20px" : "60px",
            borderRadius: "30px",
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "40px", color: "white" }}>
            Key Types & Components of SEO
          </h2>

          {/* SEO TYPES */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
              gap: "20px",
              marginBottom: "60px",
            }}
          >
            {seoTypes.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "25px",
                  borderRadius: "20px",
                  background: "white",
                }}
              >
                <h3 style={{ color: "#1e40af" }}>{item.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: "1.7" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* BENEFITS */}
          <h2 style={{ textAlign: "center", marginBottom: "20px", color: "white" }}>
            Benefits of SEO
          </h2>

          <ul style={{ lineHeight: "1.9", fontSize: "15px", color: "#f5f116ff" }}>
            <li>Increased Organic Traffic</li>
            <li>Better Trust & Credibility</li>
            <li>Cost Effective</li>
            <li>Better UX</li>
            <li>Targeted Audience</li>
          </ul>

          {/* IMAGE SLIDER */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              overflowX: "auto",
              marginTop: "30px",
            }}
          >
            {["analytics", "raking", "marketing"].map((img, i) => (
              <img
                key={i}
                src={`/images/${img}.jpg`}
                alt=""
                style={{
                  width: isMobile ? "240px" : "320px",
                  borderRadius: "16px",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FLOAT ANIMATION */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

/* ================= DATA ================= */

const seoTypes = [
  { title: "On-Page SEO", desc: "Content & keyword optimization." },
  { title: "Off-Page SEO", desc: "Backlinks & authority." },
  { title: "Technical SEO", desc: "Speed & mobile friendliness." },
  { title: "Local SEO", desc: "Local search visibility." },
];

/* ================= STYLES ================= */

const buttonStyle = {
  marginTop: "30px",
  padding: "14px 36px",
  background: "linear-gradient(120deg, #3bf65a, #80f63b)",
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
