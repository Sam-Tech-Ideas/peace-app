import React from "react";
import Hero from "./components/Home/Hero";
import Stats from "./components/Stats";
import Services from "./components/Home/Services";
import Blog from "./components/Home/Blog";
import Layout from "./components/Layout";
import Down from "./components/Down";
import Stat from "./components/Stat";
import Team from "./components/Team";
import Contact from "./components/Home/Contact";

const App = () => {
  return (
    <div className="max-w-screen">
      <Layout>
        <Hero />

        <Services />
        <Stat />
        <Team/>
        <Contact/>
      
      </Layout>
    </div>
  );
};

export default App;
