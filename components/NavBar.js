import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap'
import styles from "../styles/Home.module.css";

let textClass = {
    color: "#ffffff"
}

let navClass = {
    backgroundColor: "#363636"
}

export default function NavBar () {
    return (
        <Navbar style={navClass} expand="lg">
            <Image className={styles.logo} src="gitpod.svg" fluid />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link style={textClass} href="#home"> Home</Nav.Link>
                    <Nav.Link style={textClass} href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}