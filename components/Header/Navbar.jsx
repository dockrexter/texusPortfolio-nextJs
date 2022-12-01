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
    path: 'services',
    display: 'Services',
  },
  {
    path: 'product',
    display: 'Products',
  },
  {
    path: 'about',
    display: 'About Us',
  },
  {
    path: 'https://careers.texus.co.uk',
    display: 'Careers',

  },
  
  {
    path: 'contact',
    display: 'Contact Us',
  },
]


const NavbarNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [shadow, setShadow]= useState('');
  const [logo, setLogo] = useState('/texuslogoWhite.png');
  const handleClickLink = (item) => {
    if(item.path === "https://careers.texus.co.uk"){
      window.open("https://careers.texus.co.uk", '_self');
    }
    setIsOpen(false);
  }
  useEffect(()=>{
    const changeColor = () =>{
    if(window.scrollY >= 90){
      setColor('white');
      setTextColor('#000000')
      setShadow('rgba(0, 0, 0, 0.24) 0px 3px 8px');
      setLogo('/texusLogo.png');
      console.log("if")
    }else{
      setColor('transparent');
      setTextColor('white');
      setShadow("");
      setIsOpen(false)
      setLogo('/texuslogoWhite.png');
      console.log("else");
      
      
    }};
    window.addEventListener('scroll', changeColor);
  }, [])
  return (
    <div className={`${classes.NavbarMain}`} style={{background: `${color}`, boxShadow:`${shadow}`, padding: '1rem'}}>
      <Link smooth={true} activeClass="active"
                    to={'home'}
                    spy={true}
                    duration={300} style={{cursor: 'pointer' }}>
        <img src={logo} alt="texus" width="150px" height="auto"/>
      </Link>

      <div className={[classes.nav_items, isOpen && classes.open].join(" ")}>
      {NAV_LINK.map((item,index)=>(
                    <Link key={index}  onClick={()=>handleClickLink(item)} style={{color:isOpen? '#000000' : `${textColor}` }}  smooth={true} activeClass="active"
                    to={item.path}
                    spy={true}
                    duration={300}>
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

export default NavbarNew;