import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Refund from "./pages/Refund";
import Shipping from "./pages/Shipping";
import ScrollToTop from "./ScrollToTop"; // Import the ScrollToTop component

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop /> {/* Use ScrollToTop here */}
      <div className="pt-16 container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/refundcancel" element={<Refund />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
