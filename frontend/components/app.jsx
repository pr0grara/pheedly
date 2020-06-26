import React from 'react'
import { Route } from 'react-router-dom'
import GreetingContainer from './greeting/greeting_container' 
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import ArticleContainer from './articles/article_container'
import NavBarContainer from './nav_bar/nav_bar_container'

const App = () => {
  ////debugger
  return (
  <>
    <header>
      <GreetingContainer />
    </header>
    <AuthRoute exact path='/signup' component={SignupFormContainer} />
    <AuthRoute exact path='/login' component={LoginFormContainer} />
    <ArticleContainer />
  </>
  )
}

export default App;