import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css'

import Introduction from './pages/Introduction'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import Resume from './pages/Resume'




const App = ()=>{
  return(

    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Introduction} />
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/certifications" component={Certifications}/>
      <Route exact path="/resume" component={Resume}/>
    </Switch>
    </BrowserRouter>
    
  )
}

export default App