import { Switch, Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from "react";

import HeaderNavbar from './components/HeaderNavbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import AuthContext from './contexts/AuthContext';
import Episodes from './components/Episodes';
import EpisodeDetails from './components/Episodes/EpisodeDetails';
import LocationDetails from './components/LocationDetails';
import Characters from './components/Characters';
import Location from './components/Location';
import isAuth from './hoc/isAuth';
import isLogged from './hoc/isLogged';

function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const currUser = localStorage.getItem('user');
        if (currUser) {
            setUser(JSON.parse(currUser))
        }
    }, [])

    return (

        <AuthContext.Provider value={[user, setUser]}>

            <HeaderNavbar />

            <Switch>
                <Route path='/' exact component={Characters}>
                </Route>
                <Route path='/episodes' component={isAuth(Episodes)} />
                <Route path='/locations' component={isAuth(Location)} />
                <Route path='/episode/details/:id' component={isAuth(EpisodeDetails)} />
                <Route path='/character/origin/:name' component={isAuth(LocationDetails)} />
                <Route path='/character/location/:name' component={isAuth(LocationDetails)} />
                <Route path='/characters' component={Characters} />
                <Route path='/login' component={isLogged(Login)} />
                <Route path='/register' component={isLogged(Register)} />
                <Route path='/logout' render={() => {
                    localStorage.removeItem('user');
                    setUser(null);
                    return <Redirect to="/" />
                }} />
            </Switch>

            <Footer />

        </AuthContext.Provider>
    );
}

export default App;
