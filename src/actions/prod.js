
import { PRODUCTS_ALL} from './actionTypes'

import {movies$} from '../data/movies'


export const loadAllMovies=()=>  dispatch=>

{
    movies$.then(
        (res)=>{
            const listeM=[];
            res.map(cat=>{

                    listeM.push({id:cat.id,category:cat.category,title:cat.title,likes:cat.likes,dislikes:cat.dislikes})

            });
            dispatch({type: PRODUCTS_ALL, payload:listeM})
        }
    )


}



/*
export const  loadAllProducts=()=>  dispatch=>
 {
    const res= axios.get("http://localhost:8080/products");
    dispatch({type: PRODUCTS_ALL, prod: res.data});

}

*/
