import React from "react";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";
import Contact from "./Pages/Contact";
import FrequentQuestions from "./Pages/FrequentQuestions";
import DiscountCoupons from "./Pages/DiscountCoupons";
import Shops from "./Pages/Shops";
import Products from "./Pages/Producs";
import Cashback from "./Pages/Cashback";
import Login from "./Pages/Login";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>

      <Header />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/frequent-questions" element={<FrequentQuestions />} />
        <Route path="/coupons" element={<DiscountCoupons />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cashback" element={<Cashback />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

