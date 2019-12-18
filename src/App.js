import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import HatsPage from './pages/hatspage/hatspage.component'
import './App.scss'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={`/`} component={HomePage} />
        <Route path={`/shop/:param`} component={HatsPage} />
      </Switch>
    </div>
  )
}

export default App
