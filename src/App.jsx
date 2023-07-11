import React from "react";
import Hero from "./components/Home/Hero";
import Stats from "./components/Stats";
import Blog from "./components/Home/Blog";
import Layout from "./components/Layout";
import Down from "./components/Down";
import Stat from "./components/Stat";
import Team from "./components/Team";
import Contact from "./components/Home/Contact";
import Testimonial from "./components/Home/Testionials";
import Services from "./pages/Services";
import About from "./pages/About";

const App = () => {
  return (
    <div className="max-w-screen">
      <Layout>
        {/* <Hero />

        <Services />
        <Stat />
        <Team/>
        <Testimonial/>
        <Contact/>
       */}
         <About/>
      
      </Layout>
    </div>
  );
};

export default App;
