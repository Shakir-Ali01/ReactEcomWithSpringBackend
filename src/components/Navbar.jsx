import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./../assets/log.PNG";
// import { NavLink } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { getUserFromLocalStorage } from '../auth/HelperAuth';

// import logo from "./../assets/logo9.png";
const CustomNavbar=()=>{
    const [show, setShow] = useState(true);
    const userContext=useContext(UserContext);
    const doLogout=()=>{
      userContext.Logout()
    }
    return (
     <>  
        <Navbar collapseOnSelect expand="lg"  className='bg-navbar-color' variant="dark">
  <Navbar.Brand as={NavLink} to="/">
    <img src={logo} alt="" height={30} width={40}></img>&nbsp;
    RS Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
      <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      <NavDropdown title="Product Categories" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Smart Tvs</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Smart Phone</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Laptops</NavDropdown.Item>
        {/* <NavDropdown.Divider /> */}
      </NavDropdown>
      <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    <Nav>
      {
        (userContext.isLogin)?(<>
        ({userContext.isAdminUser && (
          <>
            <Nav.Link as={NavLink} to="/admin/home">Admin Dashboard</Nav.Link>
          </>
        )})
        <Nav.Link onClick={doLogout}>Logout</Nav.Link>
        <Nav.Link as={NavLink} to="/users/profile">{getUserFromLocalStorage()?.email}</Nav.Link></>)
        :(<><Nav.Link as={NavLink} to="/login">Login</Nav.Link>
        <Nav.Link as={NavLink} to="/register">Sign Up</Nav.Link>
        </>)
      }
    </Nav>
  </Navbar.Collapse>
</Navbar>
     </>
    )
}
export default CustomNavbar;