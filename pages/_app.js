import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Comp/Header/Navbar';
import Footer from './Comp/Footer/Footer';

//import Foot1 from './Comp/Foot1'
import { Provider } from 'react-redux';
import store from '../Redux/Store';

function MyApp({ Component, pageProps }) {



  return (


    <>

      <Provider store={store}>
      
        <Navbar />
        <Component   {...pageProps} />
        <Footer />

      </Provider>

    </>

  )
}

export default MyApp
