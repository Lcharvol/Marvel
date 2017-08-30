import React from 'react';
import { Route, Redirect } from 'react-router';
import { Switch } from 'react-router-dom';
import CharacterView from './components/CharacterView';
import App from './components/App';
import Auth from './components/Auth';
import Login from './components/Login';

export default (
    <Switch>
        <Route exact path="/" component={() => <Auth><App /></Auth>}/>
        <Route exact path="/characters" component={() => <Auth><App /></Auth>}/>
        <Route exact path="/login" component={Login}/>
        <Route path="/characters/:characterId" component={() => <Auth><CharacterView /></Auth>}/>
        <Redirect from="*" to="/characters" />
    </Switch>
);