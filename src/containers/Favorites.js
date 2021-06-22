import React,{useContext} from 'react' 
import { ProductContext } from '../context/context'
import FavoriteItem from '../components/FavoriteItem/FavoriteItem'
import './Products.css'



const Favorites =props=>{
 
    const products =useContext(ProductContext).products
    
    const favoriteList =products.filter(p=>p.isFavorite)
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




export default Favorites