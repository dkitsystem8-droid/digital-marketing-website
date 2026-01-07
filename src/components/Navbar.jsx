import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  /* RESPONSIVE */
  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* SCROLL SPY – HOME ONLY */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = ["hero", "about", "process"];
    const onScroll = () => {
      let current = "hero";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) current = id;
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  /* ROUTES */
  const goHome = () => {
    closeAll();
    setActiveSection("hero");
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (id) => {
    closeAll();
    setActiveSection(id);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const go = (path) => {
    closeAll();
    setActiveSection("");
    navigate(path);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  /* ACTIVE LOGIC */
  const isHomeActive =
    location.pathname === "/" &&
    (activeSection === "hero" || activeSection === "");

  const isSectionActive = (id) =>
    location.pathname === "/" && activeSection === id;

  const serviceRoutes = [
    "/seo",
    "/social-media",
    "/google-ads",
    "/web-development",
    "/content-marketing",
    "/email-marketing",
  ];

  const isServicesActive = serviceRoutes.some((r) =>
    location.pathname.startsWith(r)
  );

  const isDropActive = (path) => location.pathname === path;

  return (
    <>
      {/* NAVBAR */}
      <div style={navBar}>
        <img
          src="/images/logodrukkas.jpg"
          alt="logo"
          style={{ height: 60, cursor: "pointer", marginLeft: 15 }}
          onClick={goHome}
        />

        {/* DESKTOP */}
        {!isMobile && (
          <div style={menuDesktop}>
            <NavItem active={isHomeActive} onClick={goHome}>Home</NavItem>
            <NavItem active={isSectionActive("about")} onClick={() => scrollToSection("about")}>About</NavItem>
            <NavItem active={isSectionActive("process")} onClick={() => scrollToSection("process")}>Process</NavItem>

            <div
              style={{
                ...navItem,
                color: isServicesActive ? "#2563eb" : "#000",
                borderBottom: isServicesActive ? "2px solid #2563eb" : "none",
              }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Services <FaChevronDown size={12} />

              {servicesOpen && (
                <div style={dropdown}>
                  <DropItem active={isDropActive("/seo")} onClick={() => go("/seo")}>SEO</DropItem>
                  <DropItem active={isDropActive("/social-media")} onClick={() => go("/social-media")}>Social Media</DropItem>
                  <DropItem active={isDropActive("/google-ads")} onClick={() => go("/google-ads")}>Google Ads</DropItem>
                  <DropItem active={isDropActive("/web-development")} onClick={() => go("/web-development")}>Web Development</DropItem>
                  <DropItem active={isDropActive("/content-marketing")} onClick={() => go("/content-marketing")}>Content Marketing</DropItem>
                  <DropItem active={isDropActive("/email-marketing")} onClick={() => go("/email-marketing")}>Email Marketing</DropItem>
                </div>
              )}
            </div>

            <NavItem active={location.pathname === "/contact"} onClick={() => go("/contact")}>
              Contact
            </NavItem>
          </div>
        )}

        {/* MOBILE TOGGLE */}
        {isMobile && (
          <div style={toggleBtn} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}
      </div>

      {/* MOBILE MENU */}
      {isMobile && (
        <div style={{ ...mobileMenu, maxHeight: menuOpen ? "700px" : "0" }}>
          <MobileItem active={isHomeActive} onClick={goHome}>Home</MobileItem>
          <MobileItem active={isSectionActive("about")} onClick={() => scrollToSection("about")}>About</MobileItem>
          <MobileItem active={isSectionActive("process")} onClick={() => scrollToSection("process")}>Process</MobileItem>

          <div
            style={{
              ...mobileItem,
              background: isServicesActive ? "#2563eb" : "#fff",
              color: isServicesActive ? "#fff" : "#000",
            }}
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services <FaChevronDown />
          </div>

          {servicesOpen && (
            <div style={mobileSubMenu}>
              <SubItem active={isDropActive("/seo")} onClick={() => go("/seo")}>SEO</SubItem>
              <SubItem active={isDropActive("/social-media")} onClick={() => go("/social-media")}>Social Media</SubItem>
              <SubItem active={isDropActive("/google-ads")} onClick={() => go("/google-ads")}>Google Ads</SubItem>
              <SubItem active={isDropActive("/web-development")} onClick={() => go("/web-development")}>Web Development</SubItem>
              <SubItem active={isDropActive("/content-marketing")} onClick={() => go("/content-marketing")}>Content Marketing</SubItem>
              <SubItem active={isDropActive("/email-marketing")} onClick={() => go("/email-marketing")}>Email Marketing</SubItem>
            </div>
          )}

          <MobileItem active={location.pathname === "/contact"} onClick={() => go("/contact")}>
            Contact
          </MobileItem>
        </div>
      )}

      <div style={{ height: 80 }} />
    </>
  );
}

/* COMPONENTS */
const NavItem = ({ children, onClick, active }) => (
  <div style={{ ...navItem, color: active ? "#2563eb" : "#000", borderBottom: active ? "2px solid #2563eb" : "none" }} onClick={onClick}>
    {children}
  </div>
);

const DropItem = ({ children, onClick, active }) => (
  <div
    onClick={onClick}
    style={{ ...dropItem, background: active ? "#2563eb" : "#fff", color: active ? "#fff" : "#000" }}
    onMouseEnter={(e) => !active && (e.target.style.background = "#e0ecff")}
    onMouseLeave={(e) => !active && (e.target.style.background = "#fff")}
  >
    {children}
  </div>
);

const MobileItem = ({ children, onClick, active }) => (
  <div onClick={onClick} style={{ ...mobileItem, background: active ? "#2563eb" : "#fff", color: active ? "#fff" : "#000" }}>
    {children}
  </div>
);

const SubItem = ({ children, onClick, active }) => (
  <div onClick={onClick} style={{ ...subItem, background: active ? "#2563eb" : "transparent", color: active ? "#fff" : "#000" }}>
    {children}
  </div>
);

/* STYLES */
const navBar = { position: "fixed", top: 0, width: "100%", height: 80, background: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 30px rgba(0,0,0,0.1)", zIndex: 999 };
const menuDesktop = { display: "flex", gap: 25, marginRight: 60 };
const navItem = { cursor: "pointer", fontWeight: 500, position: "relative" };
const dropdown = { position: "absolute", top: "100%", left: 0, background: "#fff", minWidth: 220, borderRadius: 6, overflow: "hidden", boxShadow: "0 6px 20px rgba(0,0,0,0.15)" };
const dropItem = { padding: "12px 16px", cursor: "pointer", transition: "background 0.2s" };
const toggleBtn = { width: 42, height: 42, background: "#314bdfff", color: "#fff", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 6, marginRight: 20 };
const mobileMenu = { position: "fixed", top: 80, width: "100%", background: "#fff", overflow: "hidden", transition: "max-height 0.3s ease", zIndex: 998 };
const mobileItem = { padding: "14px 20px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between" };
const mobileSubMenu = { background: "#f1f5f9" };
const subItem = { padding: "12px 20px", borderBottom: "1px solid #ddd" };
