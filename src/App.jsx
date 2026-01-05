import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ContactHere from "./components/ContactHere";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop component

// SERVICE PAGES
import SearchEngine from "./pages/SearchEngine"; // ✅ Updated import
import SocialMedia from "./pages/SocialMedia";
import GoogleAds from "./pages/GoogleAds";
import WebDev from "./pages/WebDev";
import ContentMarketing from "./pages/ContentMarketing";
import EmailMarketing from "./pages/EmailMarketing";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <ContactHere />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Add ScrollToTop here to handle scroll on route change */}
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/seo" element={<SearchEngine />} /> {/* ✅ Updated usage */}
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/google-ads" element={<GoogleAds />} />
          <Route path="/web-development" element={<WebDev />} />
          <Route path="/content-marketing" element={<ContentMarketing />} />
          <Route path="/email-marketing" element={<EmailMarketing />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
