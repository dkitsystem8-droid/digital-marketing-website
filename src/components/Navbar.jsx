import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* HOME / LOGO */
  const goHome = () => {
    setActiveSection("");
    setMenuOpen(false);
    setServicesOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
      }, 350);
    } else {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* ABOUT / PROCESS */
  const scrollToSection = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
    setServicesOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 350);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* ROUTE */
  const go = (path) => {
    navigate(path);
    setActiveSection("");
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const isHomeActive = location.pathname === "/" && activeSection === "";
  const isSectionActive = (id) => activeSection === id;

  const isServicesActive =
    servicesHover ||
    location.pathname.startsWith("/seo") ||
    location.pathname.startsWith("/social-media") ||
    location.pathname.startsWith("/google-ads") ||
    location.pathname.startsWith("/web-development") ||
    location.pathname.startsWith("/content-marketing") ||
    location.pathname.startsWith("/email-marketing");

  return (
    <>
      {/* NAVBAR */}
      <div style={navBar}>
        {/* LOGO */}
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

            {/* SERVICES */}
            <div
              style={{
                ...navItem,
                color: isServicesActive ? "#2563eb" : "#000",
                borderBottom: isServicesActive ? "2px solid #2563eb" : "none",
              }}
              onMouseEnter={() => { setServicesHover(true); setServicesOpen(true); }}
              onMouseLeave={() => { setServicesHover(false); setServicesOpen(false); }}
            >
              Services <FaChevronDown size={12} />
              {servicesOpen && (
                <div style={dropdown}>
                  <DropItem onClick={() => go("/seo")}>SEO</DropItem>
                  <DropItem onClick={() => go("/social-media")}>Social Media</DropItem>
                  <DropItem onClick={() => go("/google-ads")}>Google Ads</DropItem>
                  <DropItem onClick={() => go("/web-development")}>Web Development</DropItem>
                  <DropItem onClick={() => go("/content-marketing")}>Content Marketing</DropItem>
                  <DropItem onClick={() => go("/email-marketing")}>Email Marketing</DropItem>
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
        <div
          style={{
            ...mobileMenu,
            maxHeight: menuOpen ? "650px" : "0",
          }}
        >
          <MobileItem active={isHomeActive} onClick={goHome}>Home</MobileItem>
          <MobileItem active={isSectionActive("about")} onClick={() => scrollToSection("about")}>About</MobileItem>
          <MobileItem active={isSectionActive("process")} onClick={() => scrollToSection("process")}>Process</MobileItem>

          <div
            style={{
              ...mobileItem,
              background: isServicesActive ? "#2563eb" : "#fff",
              color: isServicesActive ? "#fff" : "#000",
              fontWeight: isServicesActive ? 600 : 400,
            }}
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services <FaChevronDown />
          </div>

          {servicesOpen && (
            <div style={mobileSubMenu}>
              <SubItem onClick={() => go("/seo")}>SEO</SubItem>
              <SubItem onClick={() => go("/social-media")}>Social Media</SubItem>
              <SubItem onClick={() => go("/google-ads")}>Google Ads</SubItem>
              <SubItem onClick={() => go("/web-development")}>Web Development</SubItem>
              <SubItem onClick={() => go("/content-marketing")}>Content Marketing</SubItem>
              <SubItem onClick={() => go("/email-marketing")}>Email Marketing</SubItem>
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
  <div
    onClick={onClick}
    style={{
      ...navItem,
      color: active ? "#2563eb" : "#000",
      borderBottom: active ? "2px solid #2563eb" : "none",
    }}
  >
    {children}
  </div>
);

const DropItem = ({ children, onClick }) => (
  <div
    onClick={onClick}
    style={dropItem}
    onMouseEnter={(e) => { e.target.style.background = "#2563eb"; e.target.style.color = "#fff"; }}
    onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#000"; }}
  >
    {children}
  </div>
);

const MobileItem = ({ children, onClick, active }) => (
  <div
    onClick={onClick}
    style={{
      ...mobileItem,
      background: active ? "#2563eb" : "#fff",
      color: active ? "#fff" : "#000",
      fontWeight: active ? 600 : 400,
    }}
  >
    {children}
  </div>
);

const SubItem = ({ children, onClick }) => (
  <div style={subItem} onClick={onClick}>{children}</div>
);

/* STYLES */
const navBar = {
  position: "fixed",
  top: 0,
  width: "100%",
  height: 80,
  background: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "0 2px 30px rgba(0,0,0,0.1)",
  zIndex: 999,
};

const menuDesktop = { display: "flex", gap: 25, marginRight: 60 };
const navItem = { cursor: "pointer", fontWeight: 500, position: "relative" };

const dropdown = {
  position: "absolute",
  top: "100%",
  left: 0,
  background: "#fff",
  minWidth: 200,
  borderRadius: 6,
  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
};

const dropItem = { padding: "14px 16px", cursor: "pointer" };

const toggleBtn = {
  width: 42,
  height: 42,
  background: "#314bdfff",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 6,
  cursor: "pointer",
  marginRight: 20,
};

const mobileMenu = {
  position: "fixed",
  top: 80,
  width: "100%",
  background: "#fff",
  overflow: "hidden",
  transition: "max-height 0.3s ease",
  zIndex: 998,
};

const mobileItem = {
  padding: "14px 20px",
  borderBottom: "1px solid #eee",
  display: "flex",
  justifyContent: "space-between",
};

const mobileSubMenu = { background: "#f1f5f9" };

const subItem = {
  padding: "12px 20px",
  borderBottom: "1px solid #ddd",
};
