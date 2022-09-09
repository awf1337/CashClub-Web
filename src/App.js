import React from "react";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";
import Contact from "./Pages/Contact"

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

