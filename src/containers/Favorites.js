import React from 'react' 
import {connect} from 'react-redux'
import FavoriteItem from '../components/FavoriteItem/FavoriteItem'
import './Products.css'


const favorites =props=>{
    const favoriteList =props.products.filter(p=>p.isFavorite)
    let content = <p className='placeholder'>Got no favorites yet</p>
    if(favoriteList.length > 0){
        content = (<ul>
            {favoriteList.map(p=>{
                return <FavoriteItem key={p.id}
                                      id={p.id}
                                       title={p.title}
                                       description={p.description}
                                       isFav={p.isFavorite}/>
            })}
        </ul>)
    }
    return content
}

const mapStateToProps=state=>{
    return{
       products:state.shop.products
    }
}


export default connect(mapStateToProps)(favorites)