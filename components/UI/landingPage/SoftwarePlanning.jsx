import React from 'react'
import classes from '../../../styles/softwareplanning.module.css'

const SoftwarePlanning = () => {
  return (
    <div className={`${classes.sp__box_main}`} id='process'>
        <div className={`${classes.sp__box_mainText}`}>
            <h1>Our Working Process</h1>
        </div>
        <div className={`${classes.sp__main}`}>
            <div className={`${classes.sp__div1}`}>
                <div>
                    <img src='/process1.png' alt="me" width="100%" height="auto"/>
                </div>
                <h5>Planning</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

            </div>
            <div className={`${classes.sp__div2}`}>
                <div>
                    <img src='/process2.png' alt="me" width="80%" height="auto"/>
                </div>
                <h5>Design {'&'} Execution</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                

            </div>
            <div className={`${classes.sp__div3}`}>
                <div>
                    <img src='/process3.png' alt="me" width="100%" height="auto"/>
                </div>
                <h5>Testing</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

            </div>
        </div>
    </div>
  )
}

export default SoftwarePlanning