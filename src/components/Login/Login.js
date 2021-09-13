import AuthForm from '../AuthForm';
import { Alert } from 'react-bootstrap';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../contexts/AuthContext';

const Login = () => {

    const history = useHistory();

    const [user, setUser] = useContext(AuthContext);

    const onSubmitLoginHandler = (e) => {
        e.preventDefault()

        const username =e.target.username.value;

        let oldUsers = localStorage.getItem('users')
        if (!oldUsers) {
            setUser({ error: 'Please check your username' });
            return;
        }

        let oldArr = JSON.parse(oldUsers)

        oldArr.map(arr => {

            if (username.length > 0) {
                if (arr.username === username) {
                    const currUser = {
                        username: username,
                        loggedIn: true,
                    }
                    setUser(currUser);
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
        <div className='mb-5 mt-5'>
            {
                user?.error ?
                    <Alert variant='danger' className='mt-5'>
                        {user.error}
                    </Alert> : null
            }
            <AuthForm formName="Login" OnSubmitHandler={onSubmitLoginHandler} />
        </div>
    );
};

export default Login;