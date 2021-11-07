import HeaderNavbar from './components/HeaderNavbar';
import Footer from './components/Footer';
import Routes from './routes';
import { useState, useEffect } from 'react';
import { AuthContext } from './contexts/AuthContext';

const App = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const currUser = localStorage.getItem('user');
        if (currUser) {
            console.log(currUser);
            
            setUser(JSON.parse(currUser))
        }
    }, [])

    return (

        <AuthContext.Provider value={user} >

            <HeaderNavbar />

            <Routes />

            <Footer />

        </AuthContext.Provider>
    );
}

export default App;
