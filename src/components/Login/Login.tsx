import AuthForm from '../AuthForm';
import { Alert } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useState, ChangeEvent } from 'react';
import { IUser } from '../../interfaces/interfaces';

const Login = () => {

    const history = useHistory();
    const [error, setError] = useState('');

    const onSubmitLoginHandler = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        const username: string = e.target.username.value;

        let oldUsers = localStorage.getItem('users')
        if (!oldUsers) {
            setError('Please check your username');
            return null;
        }

        let oldArr = JSON.parse(oldUsers)

        oldArr.map((arr: IUser) => {

            if (username.length > 0) {
                if (arr.username === username) {
                    const currUser: IUser = {
                        username: username,
                    }
                    localStorage.setItem('user', JSON.stringify(currUser))
                    history.push('/');
                } else {
                    setError('Please check your username')
                }
            }
            return null;
        });
    }

    return (
        <div className='mb-5 mt-5'>
            {
                error ?
                    <Alert variant='danger' className='mt-5'>
                        {error}
                    </Alert> : null
            }
            <AuthForm formName="Login" OnSubmitHandler={onSubmitLoginHandler} />
        </div>
    );
};

export default Login;