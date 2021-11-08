import { FC, useContext } from "react"
import { useHistory } from "react-router"
import { AuthContext } from "../contexts/AuthContext"
import { ILocationProps } from "../interfaces/interfaces"

const isAuth = (WrappedComponent: FC<ILocationProps>) => {

    const Component: FC<ILocationProps> = (props) => {

        const user = useContext(AuthContext);
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