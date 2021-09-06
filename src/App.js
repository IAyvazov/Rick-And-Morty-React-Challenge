import './App.css';

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HeaderNavbar from './components/HeaderNavbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {

    return (
        <>
            <HeaderNavbar />

            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
            </Switch>
        </>
    );
}

export default App;
