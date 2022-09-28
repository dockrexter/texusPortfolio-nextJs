import React, {Fragment} from 'react'
import Header from '../Header/Header'
import Footers from '../Footer/Footer'

const Layout = (props) => {
  return (
    <Fragment>
        <Header/>
            <div>
                {props.children}
            </div>
        <Footers/>
    </Fragment>
  );
}

export default Layout