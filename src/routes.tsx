import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Episodes from './components/Episodes';
import EpisodeDetails from './components/Episodes/EpisodeDetails';
import LocationDetails from './components/LocationDetails';
import Characters from './components/Characters';
import Location from './components/Location';
import isAuth from './hoc/isAuth';
import isLogged from './hoc/isLogged';

const Routes = () => {

    return (
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
                return <Redirect to="/" />
            }} />
        </Switch>
    )
};

export default Routes;