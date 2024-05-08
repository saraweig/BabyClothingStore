import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import productReducer from "./productReducer";

const allReducers = combineReducers({
    productReducer:productReducer,
    cartReducer:cartReducer
})
export default allReducers;