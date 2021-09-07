import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const Home = (props) =>{

    const authContext = useContext(AuthContext);

    return(
        <h1>hello {authContext?.username}</h1>
    );
};

export default Home;