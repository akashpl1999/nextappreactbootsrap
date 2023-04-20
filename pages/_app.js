import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Comp/Header/Navbar';
import Footer from './Comp/Footer/Footer';

import Foot1 from './Comp/Foot1'


function MyApp({ Component, pageProps }) {



  return(


    <>

        <Navbar/>
        <Component   {...pageProps} />
     
          <Foot1/>
    </>

  ) 
}

export default MyApp
