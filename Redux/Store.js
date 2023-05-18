import {createStore} from  'redux'
 import rootreducer from './Reducer'
 import { composeWithDevTools } from 'redux-devtools-extension';
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


  const store= createStore(rootreducer, composeWithDevTools())


  
  export default store;