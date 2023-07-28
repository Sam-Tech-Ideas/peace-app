import React from "react";
import Hero from "./components/Home/Hero";
import Stats from "./components/Stats";
import Layout from "./components/Layout";
import Down from "./components/Down";
import Stat from "./components/Stat";

import Testimonial from "./components/Home/Testionials";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./components/Success";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <div className="max-w-screen">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/success" element={<Success />} />
            
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
