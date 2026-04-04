import React from 'react'
import Pricing from './Pricing';
import Education from './Education';
import Stats from './Stats';
import Hero from './Hero';
import Award from './Award';


import OpenAccount from '../OpenAccount';


function HomePage() {
    return(
        <>
       
        <Hero />
        <Award />  
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount /> 
        
        </>
    );
}

export default HomePage;