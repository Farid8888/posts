import React from 'react'
import {Route} from 'react-router-dom'





const app =()=>{
  return(
   <React.Fragment>
     <main>
     <Route path ="/" exact component/>
     <Route path ="favorites" component/>
     </main>
   </React.Fragment>
  )
}

export default app