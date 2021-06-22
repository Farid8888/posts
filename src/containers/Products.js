import React,{useContext} from 'react'
import {ProductContext} from '../context/context'
import ProductItem from '../components/ProductItem/ProductItem'
import './Products.css'



const Products = props =>{
     
   const products = useContext(ProductContext).products

  

    const productList=products.map(p=>{
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
