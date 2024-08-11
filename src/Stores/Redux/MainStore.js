import { combineReducers, createStore } from "redux";
import ProductReducer from "../Reducers/ProductReducer";

const reducers=combineReducers({product:ProductReducer});
const MainStore=createStore(reducers);

export default MainStore;