import {CAT_ALL} from "../actions/actionTypes";
import {PRODUCTS_NO} from "../actions/actionTypes";

const initialState={
    cat:[]
};

export  default function  categoryReducer( state =initialState, action){

    switch(action.type) {
        case CAT_ALL:
            return {
                ...state,
                cat: action.payload
            };
        default:
            return state
    }
}