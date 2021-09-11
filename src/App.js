
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
import isAuth from './hoc/isAuth';


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
                <Route path='/' exact component={Characters}>
                </Route>
                <Route path='/episodes' component={isAuth(Episodes)} />
                <Route path='/episode/details/:id' component={isAuth(EpisodeDetails)} />
                <Route path='/character/origin/:name' component={isAuth(LocationDetails)} />
                <Route path='/character/location/:id' component={isAuth(LocationDetails)} />
                <Route path='/characters' component={Characters} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/logout' render={() => {
                    localStorage.removeItem('user');
                    return <Redirect to="/" />
                }} />
            </Switch>

            <Footer/>
        </AuthContext.Provider>
    );
}

export default App;
