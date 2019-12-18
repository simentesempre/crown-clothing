import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shoppage.component'
import SignInPage from './pages/signinpage/signinpage.component'
import Header from './components/header/header.component'
import { auth } from './firebase/firebase.utils'

import './App.scss'


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    const { currentUser } = this.state
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path={`/`} component={HomePage} />
          <Route path={`/shop`} component={ShopPage} />
          <Route path={`/signin`} component={SignInPage} />
        </Switch>
      </div>
    )
  }
}

export default App
