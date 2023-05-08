import { combineReducers } from "redux";
import cartreducer from "./Cartreducer";


 const rootreducer = combineReducers({
    cart:cartreducer
 });
 export default rootreducer