import React,{useState} from 'react'




export const ProductContext = React.createContext({
products:[],
toogle:(id)=>{}
})


export default props =>{
    const [productsItem, setProductsItem] = useState(
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
    )


const toogleFav = productId=>{
    setProductsItem(curState=>{
        const indexProd = curState.findIndex(p=>p.id === productId)
        const newStatus = !curState[indexProd].isFavorite
        const updatedProducts = [...curState]
        updatedProducts[indexProd]={
            ...curState[indexProd],
            isFavorite:newStatus
        }
        return updatedProducts
    })
}


    return(
    <ProductContext.Provider value={{products:productsItem,toogle:toogleFav}}>
        {props.children}
    </ProductContext.Provider>
)
}



