import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Layout from '../components/Layout/Layout';

import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    const threeScript  = document.createElement('script');
    threeScript.setAttribute('id', 'threeScript');
    threeScript.setAttribute('src', "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
    document.getElementsByTagName('head')[0].appendChild(threeScript);

    return ()=>{
      if (threeScript){
        threeScript.remove();
      }
    };
  },[])
  return (
  <Layout>
      <Component {...pageProps}/>
  </Layout>
  );
}

export default MyApp
