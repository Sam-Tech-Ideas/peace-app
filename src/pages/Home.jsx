import React from 'react'

import Hero from '../components/Home/Hero';

import Team from '../components/Team';
import Contact from '../components/Home/Contact';
import Testimonials from '../components/Home/Testionials';
import Stats from '../components/Stats';
import Services from '../components/Home/Services';

const Home = () => {
  return (
    <div>
       <Hero />
            
       <Services />
        <Stats />
        <Team/>
        <Testimonials/>
        <Contact/>
    
    </div>
  );
}

export default Home