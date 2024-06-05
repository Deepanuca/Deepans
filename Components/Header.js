import React from 'react';
import '../Components/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Nav, NavLink, Navbar} from 'react-bootstrap';
import logo from '../Assets/Logo.png';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className='bg'>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <NavLink to='/' className='happiness'>HAPPINESS</NavLink>
          <NavLink to='/books' className='books'>BOOKS</NavLink>
          <Navbar.Brand to="/happiness"><Image src={logo} alt='headerLogo' /></Navbar.Brand>
          <NavLink to='/about' className='about'>ABOUT</NavLink>
          <NavLink to='/contact' className='contact'>CONTACT</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Header
