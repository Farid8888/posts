import React,{useContext} from 'react'
import './ProductItem.css'
import Card from '../../UI/Card'
import { ProductContext } from '../../context/context'



const ProductItem = props=>{

const toogle = useContext(ProductContext).toogle



const toogleHandler =(productId)=>{
toogle(productId)
}    

return(
    <Card style={{marginBottom:'1rem'}}>
    <div className='item'>
    <h2 className={props.isFav ? 'isFav' : ''}>{props.title}</h2>
    <p>{props.description}</p>
    <button onClick={()=>toogleHandler(props.id)}
    className={props.isFav ? 'button-outline' : ''} >
        {props.isFav ? 'Un-Favorite' : 'Favorite'}
    </button>
    </div>
    </Card>
)
}






export default ProductItem