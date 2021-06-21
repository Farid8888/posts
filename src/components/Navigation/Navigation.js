import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from  './Navigation.module.css'



const navigation =()=>{
return (
    <header className={classes.Main}>
        <nav>
            <ul>
                <li>
                  <NavLink activeStyle={{color:'slateblue'}} to ="/" exact>All Products</NavLink>
                </li>
                <li>
                <NavLink activeStyle={{color:'slateblue'}}  to = "/favorites">Favorites</NavLink>
                </li>
            </ul>
        </nav>
    </header>
)
}

export default navigation