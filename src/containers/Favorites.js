import React from 'react' 
import FavoriteItem from '../components/FavoriteItem/FavoriteItem'
import './Products.css'
import {useStore} from '../hooks/hook'


const Favorites =props=>{
const state = useStore()[0]

    const favoriteList =state.products.filter(p=>p.isFavorite)
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