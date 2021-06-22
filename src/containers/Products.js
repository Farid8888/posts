import React from 'react'
import ProductItem from '../components/ProductItem/ProductItem'
import './Products.css'
import {useStore} from '../hooks/hook'


const Products = props =>{

const state = useStore()[0]

    const productList=state.products.map(p=>{
        return <ProductItem key={p.id}
                            id={p.id}
                            title={p.title}
                            description={p.description}
                            isFav={p.isFavorite}/>
    })
return(
<ul className='products-list'>
    {productList}
</ul>
)
}






export default Products
