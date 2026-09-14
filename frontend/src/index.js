import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage.js";
import ProductPage from "./landing_page/products/ProductPage.js";
import PricingPage from "./landing_page/pricing/PricingPage.js";
import SupportPage from "./landing_page/support/SupportPage.js";
import Footer from "./landing_page/Footer.js";
import Navbar from "./landing_page/Navbar.js";
import NotFound from "./landing_page/NotFound.js";
import ScrollToTop from "./landing_page/ScrollToTop.jsx";
import Terms from "./landing_page/Terms.jsx";
import Privacy from "./landing_page/Privacy.jsx";
import Policies from "./landing_page/Policies.jsx";
import RiskDisclosure from "./landing_page/RiskDisclosure.jsx";
import EquinoxTrade from "./landing_page/EquinoxTrade";

import "react-toastify/dist/ReactToastify.css";
import { Login, Signup } from "./landing_page/signup/Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/risk-disclosure" element={<RiskDisclosure />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/equinox-trade" element={<EquinoxTrade />} />
    </Routes>

    <Footer />
  </BrowserRouter>,
);
