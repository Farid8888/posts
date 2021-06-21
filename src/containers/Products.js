import React from 'react'
import {connect} from 'react-redux'
import ProductItem from '../components/ProductItem/ProductItem'
import './Products.css'


const products = props =>{
    const productList=props.products.map(p=>{
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



const mapStateToProps= state=>{
    return{
        products:state.shop.products
    }
}


export default connect(mapStateToProps)(products)
