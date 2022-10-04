import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'
import {ImLinkedin} from 'react-icons/im'
import Link from 'next/link'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={`${classes.footer}`}>
      <div className={`${classes.footer_container}`}>
        <div className={`${classes.footer_row}`}>
          <div className={`${classes.footer_column}`}>
            <h3 style={{color: '#00b0ee'}}>TEXUS.</h3>
            <span style={{margin:'20px 0px'}}>UM 46 Model Town Link Road, Lahore</span>
            <br/>
            <span style={{margin:'20px 0px'}}><strong>Phone:</strong> <span>{" "}+92-3114537947</span></span>
            <br/>
            <span style={{margin:'20px 0px'}}><strong>Email:</strong> <span>{" "}info@texus.co.uk</span></span>
            <div className={`${classes.social_icons}`}>
              <div>
                <BsFacebook size={30}/>
              </div>
              <div>
                <AiFillTwitterCircle size={40}/>
              </div>
              <div>
                <AiFillInstagram size={40}/>
              </div>
              <div>
                <ImLinkedin size={30}/>
              </div>
            </div>
          </div>
          <div className={`${classes.footer_column}`}>
            <h3>Usefull Links</h3>
            <ul>
              <li>
                <Link href='#'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='#'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='#'>
                  Services
                </Link>
              </li>
              <li>
                <Link href='#'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='#'>
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${classes.footer_column}`}>
            <h3>Our Services</h3>
            <ul>
              <li>
                <Link href='#'>
                  Software Design
                </Link>
              </li>
              <li>
                <Link href='#'>
                  Software Development
                </Link>
              </li>
              <li>
                <Link href='#'>
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href='#'>
                  Application Services
                </Link>
              </li>
              <li>
                <Link href='#'>
                  System Integration Service
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${classes.footer_column}`}>
            <h3>Our Newsletter</h3>
          </div>
        </div>
      </div>
      <div className={`${classes.footer_cr}`}>
        <p>© Copyright <strong style={{color: '#00b0ee'}}>Texus.</strong> All Rights Reserved</p>
        <p>Designed by <strong style={{color: '#00b0ee'}}>Texus.</strong></p>
      </div>
    </footer>
  )
}

export default Footer