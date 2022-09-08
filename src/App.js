import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Contact from "./Components/Pages/Contact"

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>

      <Header />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

