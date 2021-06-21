import React from 'react'
import {Route} from 'react-router-dom'
import Products from './containers/Products'
import Navigation from './components/Navigation/Navigation'
import Favorites from './containers/Favorites'


const app =()=>{
  return(
   <React.Fragment>
     <Navigation/>
     <main>
     <Route path ="/" exact component={Products}/>
     <Route path ="/favorites" component={Favorites}/>
     </main>
   </React.Fragment>
  )
}

export default app