import React from 'react'
import { Route } from 'react-router-dom'
import GreetingContainer from './greeting/greeting_container' 
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import ArticleContainer from './articles/article_container'
import NavBarContainer from './nav_bar/nav_bar_container'
import Splash from './splash/splash'
import SidebarContainer from './sidebar/sidebar_container'

//Header component was renamed from GreetingContainer 
const App = () => {
  //debugger
  return (
  <>
    <header>
      <GreetingContainer />
      <SidebarContainer />
    </header>
    <Route exact path='/' component={Splash} />
    <AuthRoute exact path='/signup' component={SignupFormContainer} />
    <AuthRoute exact path='/login' component={LoginFormContainer} />
    <AuthRoute exact path='/articles' component={ArticleContainer} />
  </>
  )
}

export default App;