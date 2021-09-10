
import { Switch, Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from "react";

import HeaderNavbar from './components/HeaderNavbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthContext from './contexts/AuthContext';
import Episodes from './components/Episodes';
import EpisodeDetails from './components/Episodes/EpisodeDetails';
import LocationDetails from './components/LocationDetails';
import Characters from './components/Characters';


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
                <Route path='/episodes' component={Episodes} />
                <Route path='/episode/details/:id' component={EpisodeDetails} />
                <Route path='/character/origin/:name' component={LocationDetails} />
                <Route path='/character/location/:id' component={LocationDetails} />
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
