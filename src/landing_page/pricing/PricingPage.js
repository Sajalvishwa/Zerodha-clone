import React from 'react'
import Hero from './Hero';
import Brokerage from './Brokerage';
import Equity from './Equity';


import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function PricingPage() {
  return(
    <>
      <Hero />
      <Brokerage /> 
      <Equity />
       <OpenAccount /> 
    </>
  );
}

export default PricingPage;