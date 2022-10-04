import React, { useEffect, useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import {Container} from 'reactstrap';
import classes from './header.module.css';
 import {FaBars} from 'react-icons/fa'

const NAV_LINK =[
  {
    path: 'home',
    display: 'Home',
  },
  {
    path: 'about',
    display: 'About Us',
  },
  {
    path: 'process',
    display: 'Process',
  },
  {
    path: 'services',
    display: 'Services',
  },
  {
    path: 'blog',
    display: 'Blog',

  },
  
  {
    path: 'contactus',
    display: 'Contact Us',
  },
]

const Header = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transperant');
  const [textColor, setTextColor] = useState('white');
  const [shadow, setShadow]= useState('');
  const [logo, setLogo] = useState('/texuslogoWhite.png');
  const [mobile, setMobile] = useState(false);

  useEffect(()=>{
    const changeColor = () =>{
    if(window.scrollY >= 90){
      setColor('#ffffff');
      setTextColor('#000000')
      setShadow('rgba(0, 0, 0, 0.24) 0px 3px 8px');
      setLogo('/texusLogo.png');
    }else{
      setColor('transparent');
      setTextColor('white');
      setShadow("");
      setLogo('/texuslogoWhite.png');
      
      
    }};
    window.addEventListener('scroll', changeColor);
  }, [])
  return (
    <header 
    style={{background: `${color}`, boxShadow:`${shadow}`}}
    className={`${classes.header}`}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
            <img src={logo} alt="texus" width="15%" height="auto"/>
            <div className={`${classes.nav__menu}`}>
              {NAV_LINK.map((item,index)=>(
                <div key={index}>
                  <Link style={{color: `${textColor}`}}  smooth={true} activeClass="active"
                  to={item.path}
                  spy={true}
                  offset={-90}
                  duration={200}>
                  {item.display}</Link>
                </div>
              ))}

            </div>
            <div className={`${classes.nav__quote}`}>
              <Link href='/#pricing'>
                Free Quote
              </Link>
            </div>
        </div>
        <div className={`${classes.nav__wrapper_mobile}`}>
            <img src={logo} alt="texus" width="25%" height="auto"/>
            <FaBars style={{color: `${textColor}`, cursor:"pointer"}} onClick={()=>setMobile(!mobile)}/>
        </div>
        {mobile && <div className={`${classes.nav__menu_mobile}`}>
              {NAV_LINK.map((item,index)=>(
                <div key={index}>
                  <Link style={{color:"black"}}  smooth={true} activeClass="active"
                  onClick={()=>setMobile(!mobile)}
                  to={item.path}
                  spy={true}
                  offset={-90}
                  duration={200}>
                  {item.display}</Link>
                </div>
              ))}

            </div> }
      </Container>
    </header>
  )
}

export default Header