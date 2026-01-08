import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SEO() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(to bottom, #1e3aff, #ffffff)",
        padding: isMobile ? "20px" : "40px 80px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "auto" }}>

        {/* ================= HERO ================= */}
        <div className="gridHero">
          <div>
            <h1 className="heroTitle">How SEO Works</h1>
            <p className="heroText">
              Search engines crawl, index and rank websites based on quality.
            </p>
            <ul className="heroList">
              <li>Crawling</li>
              <li>Indexing</li>
              <li>Ranking</li>
            </ul>

            {/* CTA BUTTON */}
            <button onClick={() => navigate("/contact")} className="ctaButton">
              <span className="callIcon">📞</span>
              Contact Here
            </button>
          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/888/888879.png"
            alt="seo"
            className="heroImg"
          />
        </div>

        {/* ================= SEO TYPES ================= */}
        <div>
          <h2 className="centerTitle">Key Types of SEO</h2>
          <div className="grid4">
            {seoTypes.map((item, i) => (
              <div key={i} className="hoverCard">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= ADVANCED SEO ================= */}
        <div style={{ marginTop: "120px" }}>
          <h2 className="advancedTitle">Advanced SEO Best Practices</h2>
          <div className="grid2">
            {advancedSEO.map((item, i) => (
              <div
                key={i}
                className="advancedCard"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${item.img})`,
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BENEFITS ================= */}
        <div style={{ marginTop: "120px" }}>
          <h2 className="centerTitle">Benefits of SEO</h2>
          <div className="grid4">
            {benefits.map((b, i) => (
              <div key={i} className="benefitCard">
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CAROUSEL ================= */}
        <div style={{ marginTop: "120px", textAlign: "center" }}>
          <h2 className="centerTitle">SEO Growth Gallery</h2>
          <div className="carouselBox">
            <img src={carouselImages[current]} alt="slide" />
          </div>
        </div>
      </div>

      {/* ================= CSS ================= */}
      <style>{`
        .gridHero{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:30px;
          align-items:center;
          margin-bottom:120px;
        }

        .heroTitle{
          color:white;
          font-size:60px;
          font-weight:900;
        }

        .heroText,.heroList{color:white;line-height:1.8;}
        .heroImg{width:300px;animation:float 3s ease-in-out infinite;}

        .centerTitle{
          text-align:center;
          margin-bottom:40px;
          font-weight:900;
          font-size:30px;
          color:white;
          text-shadow:0 4px 20px rgba(0,0,0,0.4);
        }

        .advancedTitle{
          text-align:center;
          margin-bottom:60px;
          font-size:36px;
          font-weight:900;
          color:white;
        }

        .grid4{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:20px;
        }

        .grid2{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:30px;
        }

        .hoverCard{
          background:white;
          padding:25px;
          border-radius:20px;
          transition:0.4s;
        }
        .hoverCard:hover{
          transform:translateY(-12px) scale(1.05);
          background:lightpink;
        }

        .advancedCard{
          background-size:cover;
          background-position:center;
          color:white;
          padding:10px;
          border-radius:24px;
          min-height:260px;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          text-align:center;
          transition:0.5s;
        }

        .advancedCard h3{
          font-size:34px;
          font-weight:900;
        }

        .advancedCard p{
          font-size:16px;
          font-weight:700;
        }

        .advancedCard:hover{
          transform:translateY(-16px) scale(1.06);
          box-shadow:0 30px 60px rgba(0,0,0,0.6);
        }

        .benefitCard{
          background:lightgreen;
          padding:25px;
          border-radius:20px;
          transition:0.4s;
        }

        .benefitCard h3{
          font-weight:900;
          color:black;
          
        }

        .benefitCard:hover{
          transform:scale(1.05);
          background:white;
        
        }

        .carouselBox{
          max-width:800px;
          margin:auto;
          overflow:hidden;
          border-radius:20px;
        }

        .carouselBox img{
          width:100%;
          height:350px;
          object-fit:cover;
        }

        /* CTA BUTTON */
        .ctaButton{
          margin-top:30px;
          padding:14px 40px;
          background:linear-gradient(120deg,#22c55e,#86efac);
          color:white;
          border:none;
          border-radius:22px;
          font-weight:900;
          cursor:pointer;
          display:inline-flex;
          align-items:center;
          gap:12px;
          transition:0.4s;
          box-shadow:0 12px 30px rgba(34,197,94,0.5);
        }

        .ctaButton:hover{
          transform:scale(1.12);
          background:linear-gradient(120deg,#16a34a,#4ade80);
        }

        .callIcon{
          font-size:20px;
          transition:0.4s;
        }

        .ctaButton:hover .callIcon{
          transform:scale(1.6) rotate(12deg);
        }

        @keyframes float{
          0%{transform:translateY(0);}
          50%{transform:translateY(-15px);}
          100%{transform:translateY(0);}
        }

        @media(max-width:768px){
          .gridHero,.grid2,.grid4{grid-template-columns:1fr;}
          .heroTitle{font-size:38px;}
          .heroImg{width:220px;margin:auto;}
        }
      `}</style>
    </section>
  );
}

/* ================= DATA ================= */

const seoTypes = [
  { title: "On-Page SEO", desc: "Optimize content & meta tags" },
  { title: "Off-Page SEO", desc: "Backlinks & authority" },
  { title: "Technical SEO", desc: "Speed & indexing" },
  { title: "Local SEO", desc: "Local visibility" },
];

const advancedSEO = [
  { title: "Content & Keywords", desc: "Keyword research improves ranking.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
  { title: "W3C Compliance", desc: "Clean code helps SEO.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  { title: "Accessibility", desc: "Reach all users.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
  { title: "On-Page Optimization", desc: "Meta & headings.", img: "https://images.unsplash.com/photo-1505685296765-3a2736de412f" },
  { title: "Off-Page Optimization", desc: "Backlinks matter.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d" },
  { title: "Mobile Optimization", desc: "Mobile first.", img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d" },
];

const benefits = [
  { title: "More Traffic", desc: "Increase visitors" },
  { title: "Brand Trust", desc: "Build credibility" },
  { title: "Cost Effective", desc: "Low long term cost" },
  { title: "Higher Conversion", desc: "Targeted users" },
];

const carouselImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
];
