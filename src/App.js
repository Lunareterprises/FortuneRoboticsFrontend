import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Productsservices from "./pages/Productservices";
import CaseStudies from "./pages/Casestudies";
import Research from "./pages/Research";
import Blog from "./pages/Blog";
import Contact from "./pages/Contactus";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products-services" element={<Productsservices />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/research" element={<Research />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Product-Details" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
