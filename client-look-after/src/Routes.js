import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import CreateDiapers from './components/CreateDiapers'
import EditDiapers from './components/EditDiapers'

const Routes = () => (
    <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/about'} component={About} />
        <Route exact path={'/newdiaper'} component={CreateDiapers} />
        <Route exact path={'/editdiaper/:id'} component={EditDiapers} />
    </Switch>
)

export default Routes