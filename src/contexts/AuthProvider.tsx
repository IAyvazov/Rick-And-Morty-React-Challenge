import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { IUser} from '../interfaces/interfaces';


const AuthProvider = () => {

    const [user, setUser] = useState<IUser | null>();

    useEffect(() => {
        const currUser = localStorage.getItem('user');
        if (currUser) {
            setUser(JSON.parse(currUser))
        }
    }, [])

    return (
        <AuthContext.Provider value={[user,setUser]} />
    )
}

export default AuthProvider;