import { useContext, useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AuthContext from "../../contexts/AuthContext";


const HeaderNavbar = () => {

    const [currUser,setUser] = useState({});

    const user = useContext(AuthContext);
    
    useEffect(() => {
        if (!user) {
            return;
        }
        setUser(user);
    },[user])

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Rick&Morty</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                {
                    user ? (
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/episodes">Episodes</Nav.Link>
                                <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
                            </Nav>
                            <Nav>
                                <Navbar.Brand as={Link} to="/">{currUser.username}</Navbar.Brand>
                                <Nav.Link as={Link} to="/logout" >Logout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    )
                        : (
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                </Nav>
                                <Nav>
                                    <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        )
                }
            </Container>
        </Navbar>
    );
};

export default HeaderNavbar;