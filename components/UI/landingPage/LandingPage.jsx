import React, { useEffect, useRef, useState } from 'react'
import classes from '../../../styles/landingPage.module.css'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min.js'
import Typewriter from 'typewriter-effect'


const LandingPage = () => {
  const [vantaEffect, setVantaEffcet] = useState(0);
  const vantaRef = useRef(null);
  useEffect(()=>{
    if(!vantaEffect){
      setVantaEffcet(GLOBE({
        el:vantaRef.current,
        THREE
      }))
    }
    return () =>{
      if(vantaEffect) vantaEffect.destroy();
    };
  },[vantaEffect])
  
  return (
    <div className={`${classes.hero}`} id='home' ref={vantaRef}>
      
      <div className={`${classes.hero__main}`}>
        <div className={`${classes.hero__text}`}>
          <h1>Work in every single aspect of{" "}</h1>
          <h1 style={{color:"#00b0ee"}}><Typewriter
          style={{color: "blue"}}
          options={{
            strings: ['SDLC.', 'Innovation.'],
            autoStart: true,
            loop: true,
          }}
          /></h1>
          
            <p>Texus is a family of Gold class Software Engineers</p>
            <button>Estimate Project</button>
        </div>
          <div className={`${classes.hero__image__main}`} >
        </div>
      </div>
    </div>
  )
}

export default LandingPage