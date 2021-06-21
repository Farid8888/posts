import React from 'react'
import {connect} from 'react-redux'
import ProductItem from '../components/ProductItem/ProductItem'



const products = props =>{
    const productList=props.products.map(p=>{
        return <ProductItem key={p.id}
                            id={p.id}
                            title={p.title}
                            description={p.description}
                            isFav={p.isFavorite}/>
    })
return(
<main>
    {productList}
</main>
)
}



const mapStateToProps= state=>{
    return{
        products:state.shop.products
    }
}


export default connect(mapStateToProps)(products)
