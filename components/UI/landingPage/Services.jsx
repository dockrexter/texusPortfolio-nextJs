import React from 'react'
import classes from '../../../styles/services.module.css'

const SERVICES = [
    {
        service: "Software Development"
    },
    {
        service: "Automatic Optimization"
    },
    {
        service: "Application Services"
    },
    {
        service: "Data Analytics"
    },
    {
        service: "IT Security Services"
    },
    {
        service: "System Integration Service"
    },
    {
        service: "Help Desk Services"
    },
    {
        service: "API Integration Service"
    },
]

const Services = () => {
  return (
        <div className={`${classes.service}`} id='services'>
            <h1>Services</h1>
            <div className={`${classes.service__main}`}>
                <div className={`${classes.service__featured}`}>
                    <p>Our featured Services</p>
                    <h1>Software Developement Services</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices Lorem Ipsum is simply dummy text.</span>
                    <div className={`${classes.service__featured__main}`}>
                        {SERVICES.map((data, index)=>
                            <div key={index} className={`${classes.service__featured__sub}`}>
                                <h5>{data.service}</h5>
                            </div>
                        )}
                    </div>
                </div>
                <div className={`${classes.service__image}`}>
                    <img src='/software-development1.png' alt="me" width="100%" height="auto"/>
                </div>
            </div>
        </div>
  )
}

export default Services