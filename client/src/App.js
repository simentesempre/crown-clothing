import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shoppage.component'
import SignInPage from './pages/signinpage/signinpage.component'
import CheckoutPage from './pages/checkout/checkout.component'

import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions'

import './App.scss'


const App = ({ currentUser, setCurrentUser }) => {

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(null)
      }  
    })
    return () => {
      unsubscribeFromAuth()
    }
  }, [setCurrentUser])

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path={`/`} component={HomePage} />
        <Route path={`/shop`} component={ShopPage} />
        <Route exact path={`/checkout`} component={CheckoutPage} />
        <Route exact path={`/signin`} render={() => {
          return currentUser ? <Redirect to={`/`} /> : <SignInPage />
        }} />
      </Switch>
    </div>
  )

}


const mapStateToProps = ({user: {currentUser}}) => ({
  currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
