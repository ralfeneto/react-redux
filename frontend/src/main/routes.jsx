import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import about from '../common/template/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} />
            <Route path='about' component={about} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)