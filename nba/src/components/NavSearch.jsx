import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavSearch.css';
import { Link } from 'react-router-dom';
import LightDarkMode from './LightDarkMode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import AuthController from './AuthController';

function NavSearch() {

    return (
        <Container fluid>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>

                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="./src/assets/basketball.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' '}Player<strong>Stats</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            // style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* <NavDropdown title="Stats" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/get-stats">Get Player Stats</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/compare-stats">Compare Stats</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown> */}
                            <Nav.Link as={Link} to="/get-stats">
                                Player
                            </Nav.Link>
                            <Nav.Link as={Link} to="/compare-stats">
                                Team
                            </Nav.Link>
                            <Nav.Link>
                                Community
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>

                        <Nav variant="underline" defaultActiveKey="/home">
                            <Nav.Item>
                                <AuthController />
                            </Nav.Item>
                            <Nav.Item>
                                <LightDarkMode />
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
}

export default NavSearch;