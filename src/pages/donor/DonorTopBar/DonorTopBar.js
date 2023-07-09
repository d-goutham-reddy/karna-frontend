import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../../assests/icoOrgan.png";



 const DonorTopBar = ()=> {

    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.clear();
        navigate('/donor/login')
    }

  return (
    <Navbar  
    expand="lg"
    className='header-cont-hospital'
    style={{ backgroundColor: '#444343' }}
    >
            <Container>
            <Navbar.Brand >
                        <img
                            src={logo}
                            width={'35'}
                            height={'35'}
                            alt="logo img"
                            id="basic-nav-dropdown-hospital"
                        />
                        <Link to={'home'}
                            id="basic-nav-dropdown-hospital">
                            Karna
                        </Link>
                    </Navbar.Brand>
                {/* <Navbar.Brand href="#home">userName</Navbar.Brand> */}
                <Nav.Link  
                href="/donor/donorHome"
                    id="basic-nav-dropdown-hospital"
                >{localStorage.getItem('donor_name')}</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav" className=" ">
                    <Nav className="me-auto  w-100 d-flex align-items-end justify-content-end">
                    <Nav.Link 
                     href="/donor/impact"
                     id="basic-nav-dropdown-hospital"
                     >YOUR IMPACT</Nav.Link>
                    <Nav.Link  
                    href="/donor/blood-donate"
                    id="basic-nav-dropdown-hospital"
                    >NEW BLOOD DONATE</Nav.Link>
                    <Nav.Link 
                     href="/donor/update"
                     id="basic-nav-dropdown-hospital"
                     >Update</Nav.Link>
                    <Nav.Link 
                    onClick={handleLogout}
                        id="basic-nav-dropdown-hospital"
                    >Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )

}


export default DonorTopBar;
