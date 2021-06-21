import * as actionTypes from './actionTypes'







export const toogle=(id)=>{
    return{
     type:actionTypes.TOOGLE_FAV,
     productId:id
    }
}
