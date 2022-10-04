import React, { useState, useEffect } from "react";
import classes from "./navbar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

const NAV_LINK =[
  {
    path: 'home',
    display: 'Home',
  },
  
  {
    path: 'process',
    display: 'Process',
  },
  {
    path: 'about',
    display: 'About Us',
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


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [shadow, setShadow]= useState('');
  const [logo, setLogo] = useState('/texuslogoWhite.png');
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
      setIsOpen(false)
      setLogo('/texuslogoWhite.png');
      
      
    }};
    window.addEventListener('scroll', changeColor);
  }, [])
  return (
    <div className={`${classes.Navbar}`} style={{background: `${color}`, boxShadow:`${shadow}`, padding: '1rem'}}>
      <img src={logo} alt="texus" width="150px" height="auto" style={{marginLeft: "3rem"}}/>
      <div className={[classes.nav_items, isOpen && classes.open].join(" ")}>
      {NAV_LINK.map((item,index)=>(
                  <Link key={index}  onClick={()=>setIsOpen(false)} style={{color:isOpen? '#000000' : `${textColor}` }}  smooth={true} activeClass="active"
                  to={item.path}
                  spy={true}
                  offset={-90}
                  duration={200}>
                  {item.display}</Link>

              ))}
      </div>
      <div className={`${classes.nav__quote}`} style={{marginRight: "3rem"}}>
              <Link href='/#pricing'>
                Free Quote
              </Link>
            </div>
      
      <div
        className={[classes.nav_toggle, isOpen && classes.open].join(" ")}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`${classes.bar}`}>
        </div>
      </div>
    </div>
  );
};

export default Navbar;