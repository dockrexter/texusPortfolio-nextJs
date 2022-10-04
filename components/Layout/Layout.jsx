import React, {Fragment} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar';

const Layout = (props) => {
  return (
    <Fragment>
        {/* <Header/> */}
        <Navbar/>
            <div>
                {props.children}
            </div>
        <Footer/>
    </Fragment>
  );
}

export default Layout