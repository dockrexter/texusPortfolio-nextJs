import React, {Fragment} from 'react'
import Footer from '../Footer/Footer'
import NavbarNew from '../Header/Navbar';

const Layout = (props) => {
  return (
    <Fragment>
        <NavbarNew/>
            <div>
                {props.children}
            </div>
        <Footer/>
    </Fragment>
  );
}

export default Layout