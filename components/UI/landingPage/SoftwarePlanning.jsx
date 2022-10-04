import React from 'react'
import classes from '../../../styles/softwareplanning.module.css'

const SoftwarePlanning = () => {
  return (
    <div className={`${classes.sp__box_main}`} id='process'>
        <div className={`${classes.sp__box_mainText}`}>
            <h1>Our Working Process</h1>
            <hr style={{ borderTop: "3px solid #008bc9",
  width: "100px",
  margin: "1rem auto auto auto"}}/>
        </div>
        <div className={`${classes.sp__main}`}>
            <div className={`${classes.sp__div1}`}>
                <div>
                    <img src='/plan.jpg' alt="me" width="100%" height="auto"/>
                </div>
                <h5>Planning</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

            </div>
            <div className={`${classes.sp__div2}`}>
                <div>
                    <img src='/design.jpg' alt="me" width="100%" height="auto"/>
                </div>
                <h5>Design {'&'} Execution</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                

            </div>
            <div className={`${classes.sp__div3}`}>
                <div>
                    <img src='/test.jpg' alt="me" width="100%" height="auto"/>
                </div>
                <h5>Testing</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

            </div>
        </div>
    </div>
  )
}

export default SoftwarePlanning