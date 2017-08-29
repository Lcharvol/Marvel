import React from 'react';
import { Route, Redirect } from 'react-router';
import { Switch } from 'react-router-dom'
import CharacterView from './components/CharacterView';
import App from './components/App';

export default (
    <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/characters" component={App}/>
        <Route path="/characters/:characterId" component={CharacterView}/>
        <Redirect from="*" to="/characters" />
    </Switch>
);