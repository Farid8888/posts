import React from 'react' 
import Card from '../../UI/Card'
import './FavoriteItem.css'



const favoriteItem = props=>{
return(
    <Card style ={{marginBottom:'1rem'}}>
        <div className='item'>
           <h2>{props.title}</h2>
           <p>{props.description}</p>
        </div>
    </Card>
)
}


export default favoriteItem


