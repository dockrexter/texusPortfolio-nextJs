import { Fragment } from 'react';
import LandingPage from '../components/UI/landingPage/LandingPage';
import SoftwarePlanning from '../components/UI/landingPage/SoftwarePlanning';
import AboutUs from '../components/UI/landingPage/AboutUs';
import Services from '../components/UI/landingPage/Services';
import Counter from '../components/UI/landingPage/Counter';
import Products from '../components/UI/landingPage/Products';
import Testimonial from '../components/UI/landingPage/Testimonials';

export default function Home() {
  return (<Fragment>
    <LandingPage/> 
    {/* <Counter/> */}
    <SoftwarePlanning/>
    <AboutUs/>
    <Services/>
    <Products/>
    <Testimonial/>
   
    
  </Fragment>
    
  )
}
