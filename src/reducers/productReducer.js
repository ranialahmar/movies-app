
import { PRODUCTS_ALL} from '../actions/actionTypes'


const initialState={
    p:[]
};

export  default function  productReducer(  state = initialState, action){

    switch(action.type) {
        case PRODUCTS_ALL:
            return {
                ...state,
                p: action.payload
            };
        default:
            return state
    }
}