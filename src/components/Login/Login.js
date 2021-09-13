import AuthForm from '../AuthForm';
import { Alert } from 'react-bootstrap';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import { useState } from 'react';

const Login = () => {

    const history = useHistory();

    const [user, setUser] = useContext(AuthContext);
    const [error,setError] = useState();

    const onSubmitLoginHandler = (e) => {
        e.preventDefault()

        const username = e.target.username.value;

        let oldUsers = localStorage.getItem('users')
        if (!oldUsers) {
            setError({ error: 'Please check your username' });
            return null;
        }

        let oldArr = JSON.parse(oldUsers)

        oldArr.map(arr => {

            if (username.length > 0) {
                console.log('username',username);
                console.log('arr.username',arr.username);
                if (arr.username === username) {
                    const currUser = {
                        username: username,
                    }
                    console.log('if',currUser);
                    setUser(currUser);
                    localStorage.setItem('user', JSON.stringify(currUser))
                    history.push('/');
                } else {
                    setError({ error: 'Please check your username' })
                    console.log('error',user);
                }
            }
            return null;
        });
    }

    return (
        <div className='mb-5 mt-5'>
            {
                console.log('html',user),
                error ?
                    <Alert variant='danger' className='mt-5'>
                        {error.error}
                    </Alert> : null
            }
            <AuthForm formName="Login" OnSubmitHandler={onSubmitLoginHandler} />
        </div>
    );
};

export default Login;