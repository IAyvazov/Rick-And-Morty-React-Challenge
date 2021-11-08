import { FC, useContext } from "react"
import { useHistory } from "react-router"
import { AuthContext } from "../contexts/AuthContext"

const isLogged = (WrappedComponent: FC) => {

    const Component: FC = (props) => {

        const user = useContext(AuthContext);
        const history = useHistory();

        if (user) {
            history.push('/');
            return null;
        }

        return <WrappedComponent {...props} />
    }

    return Component;
}

export default isLogged;