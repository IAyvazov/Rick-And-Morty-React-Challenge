import { Alert } from 'react-bootstrap';
import { IUser } from '../../interfaces/interfaces';
import { useHistory } from 'react-router';
import { useState } from 'react';
import AuthForm from '../AuthForm';

const Register = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        username: '',
    });
    const [error, setError] = useState('');


    const onChangeName = (e: any) => {
        setUser({
            username: e.target.value
        })
    }


    const onRegisterSubmitHandler = (e: any) => {
        e.preventDefault();
        const newUser: IUser = {
            username: user.username,
        }

        if (/[^a-zA-Z]/.test(newUser.username)) {
            setError('Alphabet characters only.')
        } else {

            let users: any = localStorage.getItem('users');

            if (users === null) {
                users=[]
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
            }
            else {
                let oldUsers = JSON.parse(users);
                oldUsers.push(newUser);
                localStorage.setItem('users', JSON.stringify(oldUsers));
            }
            history.push('/login');
        }
    };


    return (
        <div className='mt-5'>
            {
                error ?
                    <Alert variant='danger' className='mt-5'>
                        {error}
                    </Alert> : null
            }
            <AuthForm formName="Register" OnSubmitHandler={onRegisterSubmitHandler} OnChangeName={onChangeName} />
        </div>
    );
};

export default Register;