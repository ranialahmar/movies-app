import {combineReducers} from 'redux';
import productReducer from "../reducers/productReducer";
import categoryReducer from "../reducers/categoryReducer"
const appReducer = combineReducers({
    p:productReducer,
    cat:categoryReducer
});



export default (state, action) => appReducer(state, action);