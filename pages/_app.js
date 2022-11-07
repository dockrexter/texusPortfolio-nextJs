import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Layout from '../components/Layout/Layout';

import { useEffect } from 'react';
import LoaderScreen from '../components/loader/LoaderScreen';
import { useState } from 'react';
import { motion } from 'framer-motion';


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);


    setTimeout(() => {
      setLoading(false);
    }, 2000);

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
    <>
        {loading && <LoaderScreen loader={loading}/>}
      {!loading &&(<motion.div
          initial={{ opacity: 0}}
          whileInView={{ y: [100,90,80,60, 50,40,30,20,10, 0,0], opacity: 1 }}
          transition={{ duration: 0.5 }}>
          {!loading && <Layout>
            <Component {...pageProps}/>
          </Layout>}
    </motion.div>)}
  </>
  );
}

export default MyApp
