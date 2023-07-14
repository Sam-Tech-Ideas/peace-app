import React from 'react'

import Hero from '../components/Home/Hero';

import Team from '../components/Team';
import Contact from '../components/Home/Contact';
import Testimonials from '../components/Home/Testionials';

import Services from '../components/Home/Services';
import Stat from '../components/Stat';

const Home = () => {
  return (
    <div>
       <Hero />
            
       <Services />
        <Stat />
        <Team/>
        <Testimonials/>
        <Contact/>
    
    </div>
  );
}

export default Home