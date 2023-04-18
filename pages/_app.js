import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Comp/Header/Navbar';
import Footer from './Comp/Footer/Footer';




function MyApp({ Component, pageProps }) {



  return(


    <>

        <Navbar/>
        <Component {...pageProps} />
        <Footer/>

    
    </>

  ) 
}

export default MyApp
