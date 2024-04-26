import React from "react";
import Home from "./assets/views/Home";
import Contact from "./assets/views/Contact";
import NotFound from "./assets/views/NotFound";
import NavBar from "./assets/componente/NavBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./assets/componente/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
