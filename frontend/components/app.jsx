import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBarContainer from './navbar/navbar_container' 
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import { AuthRoute, ProtectedRoute, HomeRoute } from '../util/route_util'
import ArticleIndexContainer from './articles/article_index_container'
import SplashContainer from './splash/splash_container'
import LeftNavContainer from './leftnav/left_nav_container'

//Header component was renamed from GreetingContainer 
const App = () => {
  return (
  <>
    <NavBarContainer />
    <div className="side-splash"> 
        <LeftNavContainer />
        <SplashContainer />
        {/* <HomeRoute exact path='/home' /> */}
        <ProtectedRoute exact path='/home' component={ArticleIndexContainer} />
    </div>
    <AuthRoute exact path='/signup' component={SignupFormContainer} />
    <AuthRoute exact path='/login' component={LoginFormContainer} />
  </>
  )
}

export default App;