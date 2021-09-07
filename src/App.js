import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

import HeaderNavbar from './components/HeaderNavbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthContext from './contexts/AuthContext';
import { useEffect, useState } from "react";


function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const currUser = localStorage.getItem('user');
        if (currUser) {
            setUser(JSON.parse(currUser))
        }
    }, [])

    return (
        <AuthContext.Provider value={user}>
            <HeaderNavbar />

            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/logout' render={() => {
                    localStorage.removeItem('user');
                    return <Redirect to="/" />
                }} />
            </Switch>
        </AuthContext.Provider>
    );
}

export default App;
