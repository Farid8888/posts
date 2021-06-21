import React from 'react'
import {Route} from 'react-router-dom'
import Products from './containers/Products'
import Navigation from './components/Navigation/Navigation'



const app =()=>{
  return(
   <React.Fragment>
     <Navigation/>
     <main>
     <Route path ="/" exact component={Products}/>
     {/* <Route path ="favorites" component/> */}
     </main>
   </React.Fragment>
  )
}

export default app