import React from "react";
import Hero from "./components/Home/Hero";
import Stats from "./components/Stats";
import Layout from "./components/Layout";
import Down from "./components/Down";
import Stat from "./components/Stat";
import Team from "./components/Team";
import Contact from "./components/Home/Contact";
import Testimonial from "./components/Home/Testionials";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="max-w-screen">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />  
            </Routes>

        </BrowserRouter>
        
        
      
      </Layout>
    </div>
  );
};

export default App;
