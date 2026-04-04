import React from 'react';
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
    
    const handleSignup = () => {
        navigate("/signup"); // ✅ correct route (case-sensitive)
      };

    return(
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/homeHero.png' alt='Heroimage' className='mb-5'/>
                <h1 className='mt-10'>Invest in everything</h1>
                <p className='mt-2 mb-4'>Online platform to invest in stocks, mutual funds, and more</p> 
                <button onClick={handleSignup} className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
            </div>

        </div>
    );
}

export default Hero;