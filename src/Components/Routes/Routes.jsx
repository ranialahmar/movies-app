import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home'
import Showfilms from '../Showfilms/Showfilms'

const Routes = () => (
  <Switch>
    <Route exact path='/popular' component={Home} />
    <Route exact path='/' render={
      props => (<Showfilms currentPage='All Movies' category='popular'{...props} />
    )} />
    <Route exact path='/search/:query' render={
      props => (<Showfilms currentPage='Search Results' {...props} />
    )} />

  </Switch>
)

export default Routes
