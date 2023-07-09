import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from "../../../assests/icoOrgan.png";


 const AdminTopBar = ()=> {

    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem('admin_id')
        localStorage.removeItem('admin_name')
        localStorage.removeItem('admin_is_logged');
        localStorage.removeItem('admin_email');
        toast.success('Logging out ',{
            toastId: 'admin Logout'
        })
        setTimeout(navigate('login'),6000);
    }   


  return (
    <Navbar  expand="lg" className='header-cont'>
        <Link to={'home'} style={{ all: 'unset', cursor: 'pointer' }}>
                    <Navbar.Brand >
                        <img
                            src={logo}
                            width={'35'}
                            height={'35'}
                            alt="logo img"
                            id="basic-nav-dropdown" />
                        <Link to={'home'}
                            id="basic-nav-dropdown">
                            Karna
                        </Link>

                    </Navbar.Brand></Link>
            <Container className=''>
                {/* <Navbar.Brand href="#home">userName</Navbar.Brand> */}
                <Nav.Link 
                id="basic-nav-dropdown"
                 href="/">
                    {localStorage.getItem('admin_email')}</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse
                id="basic-nav-dropdown"
                className=" ">
                    <Nav 
                    className="me-auto  w-100 d-flex align-items-end justify-content-end">
                        <Nav.Link 
                        id="basic-nav-dropdown"
                            onClick={handleLogout}>LOGOUT
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )

}


export default AdminTopBar;
