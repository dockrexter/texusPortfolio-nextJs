import React, { useEffect, useRef, useState } from 'react'
import classes from '../../../styles/landingPage.module.css'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min.js'


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
          <h1>Big Data And Analytics</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button>Estimate Project</button>
        </div>
        <div className={`${classes.hero__image__main}`} >
          {/* <div className={`${classes.hero__image1}`}>
            <img src='/home-two-shape.png' alt="texus" width="100%" height="auto"/>
          <div className={`${classes.hero__image2}`}>
            <img src='/homeshape_all.png' alt="me" width="85%" height="auto"/>
          </div>
          </div> */}
          
          {/* <div className={`${classes.hero__image3}`}>
            <img src='/home-two-shape3.png' alt="me" width="100%" height="auto"/>
          </div>
          <div className={`${classes.hero__image4}`}>
            <img src='/home-two-shape4.png' alt="me" width="100%" height="auto"/>
          </div>
          <div className={`${classes.hero__image5}`}>
            <img src='/home-two-shape1.png' alt="me" width="100%" height="auto"/>
          </div>
          <div className={`${classes.hero__image6}`}>
            <img src='/home-two-shape6.png' alt="me" width="100%" height="auto"/>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default LandingPage