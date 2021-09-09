import AuthForm from '../AuthForm';
import { Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router';

const Login = () => {

    const history = useHistory();

    const [user, setUser] = useState({
        username: '',
        loggedIn: false,
    });

    const onChangeName = (e) => {
        setUser(oldUser => ({
            ...oldUser, username: e.target.value
        }))
    };


    const onSubmitLoginHandler = (e) => {
        e.preventDefault()

        let oldUsers = localStorage.getItem('users')
        if(!oldUsers){
            setUser({ error: 'Please check your username' });
            return;
        }
    
        let oldArr = JSON.parse(oldUsers)

        oldArr.map(arr => {

            if (user.username.length > 0) {
                if (arr.username === user.username) {
                    const currUser = {
                        username: user.username,
                        loggedIn: true,
                    }
                    setUser(oldUser => ({
                        ...oldUser, loggedIn: true
                    }));
                    localStorage.setItem('user', JSON.stringify(currUser))
                    history.push('/');
                } else {
                    setUser({ error: 'Please check your username' })
                }
            }
            return null;
        });
    }

    return (
        <>
            {
                user.error ?
                    <Alert variant='danger'>
                        {user.error}
                    </Alert> : null
            }
            <AuthForm formName="Login" onChangeName={onChangeName} OnSubmitHandler={onSubmitLoginHandler} />
        </>
    );
};

export default Login;