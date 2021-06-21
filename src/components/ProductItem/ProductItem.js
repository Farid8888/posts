import React from 'react'
import './ProductItem.css'
import Card from '../../UI/Card'
import {connect} from 'react-redux'
import * as actions from '../../store/index'



const productItem = props=>{

const toogleHandler =(productId)=>{
props.onToogle(productId)
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


const mapDispatchToProps=dispatch=>{
    return{
        onToogle:(id)=> dispatch(actions.toogle(id))
    }
}




export default connect(null,mapDispatchToProps)(productItem)