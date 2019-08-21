import {CAT_ALL} from "./actionTypes";
import {movies$} from "../data/movies";

export const loadAllCategories=()=>dispatch=>

{
    movies$.then(
        (res)=>{
            const liste=[];
            liste.push({text:res[0].category,value:res[0].category})
            console.log(res);
            res.map(cat=>{
                const f=liste.find(elt=>
                    elt.text === cat.category);
               if( f=== undefined){
                   liste.push({text:cat.category,value:cat.category})
               }
                    
                })

            dispatch({type: CAT_ALL, payload:liste})
            console.log(liste)

            });

        }



