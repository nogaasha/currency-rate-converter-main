import React from 'react'
import { Switch, Route } from 'react-router'

import Main from './main/main'
import Rates from './rates/rates'


const Root = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Main />} />
        <Route exact path='/rates' component={() => <Rates />} />

      </Switch>
    </div>
  )
}

export default Root