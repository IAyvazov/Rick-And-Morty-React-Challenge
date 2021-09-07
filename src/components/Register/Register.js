import { useHistory } from 'react-router';
import { useState } from 'react';
import AuthForm from '../AuthForm';

const Register = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        username: '',
        isLoggedIn: false
    });

    const onChangeName = (e) => {
        setUser({
            username: e.target.value
        })
    }


    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();
        const newUser = {
            username: user.username,
        }

        if (/[^a-zA-Z]/.test(newUser.username)) {
            return;
        } else {
            let users = localStorage.getItem('users');
            if (users == null) {
                users = [];
                users.push(user);
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
        <AuthForm formName="Register" OnSubmitHandler={onRegisterSubmitHandler} onChangeName={onChangeName} />
    );
};

export default Register;