import { useContext } from "react"
import { useHistory } from "react-router"
import AuthContext from "../contexts/AuthContext"

const isAuth = (WrappedComponent) => {

    const Component = (props) => {

        const [user, setUser] = useContext(AuthContext);
        const history = useHistory();

        if (!user) {
            history.push('/login');
            return null;
        }

        return <WrappedComponent {...props} />
    }

    return Component;
}

export default isAuth;