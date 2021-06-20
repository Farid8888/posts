import React from 'react'
import {NavLink} from 'react-router-dom'



const navigation =()=>{
return (
    <header>
        <nav>
            <ul>
                <li>
                  <NavLink path ="/" exact>All Products</NavLink>
                </li>
                <li>
                <NavLink path = "/favorites">Favorites</NavLink>
                </li>
            </ul>
        </nav>
    </header>
)
}

export default navigation