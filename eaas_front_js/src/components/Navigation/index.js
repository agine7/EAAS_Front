import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import './styles.css';
import {useAuth0} from "@auth0/auth0-react";
import AuthenticationButton from "./authentication";

const Navigation = () => {
    const { loginWithRedirect } = useAuth0();

    const { isAuthenticated } = useAuth0();
    console.log(isAuthenticated);
    return (
        <Navbar bg="light">
            <Container className="nav_container">
                <Navbar.Brand href="#home">EAAS</Navbar.Brand>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#submissions">Submissions</Nav.Link>
                    <Nav.Link className="btn" onClick={() => loginWithRedirect({screen_hint: "signup"})}>Sign Up</Nav.Link>
                    <AuthenticationButton />
            </Container>
        </Navbar>
    )
};
export default Navigation;
