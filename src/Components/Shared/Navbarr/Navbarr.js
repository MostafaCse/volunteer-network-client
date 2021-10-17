import React from 'react';
import './Navbarr.css';
import {
  Link
  } from "react-router-dom";
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import brandLogo from '../../../Images/BrandLogo.png';
const Navbarr = () => {
    return (
        <div>
            <Navbar bg="" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={brandLogo}
                        width="100"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Stack direction="horizontal" gap={3}>
                            <Link className="standardItem" to="/Home" active>Home</Link>
                            <Link className="standardItem" to="" active> Donation</Link>
                            <Link className="standardItem" to="" active>Events</Link>
                            <Link className="standardItem" to="" active>Blogs</Link>

                            <Link style={{ backgroundColor: '#3f90fc', color: 'white' }} className="nav-highlight" to="/RegisterIndirect"active>Register</Link>
                            <Link style={{ backgroundColor: '#434141', color: 'white' }} className="nav-highlight" to="/Dashboard"  active>Admin</Link>
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>   
        </div>
    );
};

export default Navbarr;