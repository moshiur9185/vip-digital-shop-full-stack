import React, { useContext, useState } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from "../../App";
import { isLoggedIn, loggedInInfo } from '../Login/LoginManager';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // is logged in
  const isLogged = isLoggedIn();

  // sign out button Handle 
  const signOut = () => {
      setLoggedInUser({});
      sessionStorage.removeItem('token');
  };

  const loggedUser = loggedInInfo()
  return (
    <div>
      <Navbar bg="success" expand="lg">
                <Container>
                    <Navbar.Brand href="/home" style={{color: 'white'}}>VIP DIGITAL SHOP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="nav-link text-white" to="/home">Home</Link>
                            <Link className="nav-link text-white" to="/order">Order</Link>
                            <Link className="nav-link text-white" to="/home">Deals</Link>
                            <Link className="nav-link text-white" to="/addProduct">Admin</Link> 
                        </Nav>
                        {
                    loggedInUser.email || isLogged ? <button style={{textDecoration: "none", color: "white" }} className="nav-item btn px-4 h-75  bg-secondary" onClick={signOut}> Sign Out</button> :
                    <Link to="/login"><button style={{textDecoration: "none", color: "white" }} className="nav-item btn px-4 h-75 bg-secondary">Sign In</button></Link>
                } 
                    </Navbar.Collapse>
                </Container>
             
            </Navbar>
    </div>
  );
};

export default Header;
