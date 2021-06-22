import React from'react'

import {initStore} from './hook'



export const configureStore =()=>{
    const actions ={ 
        TOOGLE_FAV:(curState,productId)=>{
        const indexProd = curState.products.findIndex(p=>p.id === productId)
        const newStatus = !curState.products[indexProd].isFavorite
        const updatedProducts = [...curState.products]
        updatedProducts[indexProd]={
            ...curState.products[indexProd],
            isFavorite:newStatus
        }
        return {
        
            products:updatedProducts
        }
    }
}
    initStore(actions,{products:
        [
            {
              id: 'p1',
              title: 'Red Scarf',
              description: 'A pretty red scarf.',
              isFavorite: false
            },
            {
              id: 'p2',
              title: 'Blue T-Shirt',
              description: 'A pretty blue t-shirt.',
              isFavorite: false
            },
            {
              id: 'p3',
              title: 'Green Trousers',
              description: 'A pair of lightly green trousers.',
              isFavorite: false
            },
            {
              id: 'p4',
              title: 'Orange Hat',
              description: 'Street style! An orange hat.',
              isFavorite: false
            }
          ]
        })
}