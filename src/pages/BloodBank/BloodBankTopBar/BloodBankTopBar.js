import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import "./BloodBankTopBar.scss";
import logo from "../../../assests/icoOrgan.png"

 const BloodBankTopBar = ()=> {

    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.clear();
        toast.success('loggin out',{
            toastId: 'Logout'
        })
        navigate('login')
    }

    const handleAppointments = ()=>{
        navigate('appoint')
    }
    const handleStocks = ()=>{
        navigate('stock')
    }

    const handleRequests = ()=>{
        navigate('request')
    }

  return (
    <Navbar  expand="lg" className="header-cont1">
            <Container>
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
                {/* <Navbar.Brand href="#home">userName</Navbar.Brand> */}
                <Nav.Link id="logout" href="impact">{`Welcome ${localStorage.getItem('blood_bank_name')}`}</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav" className=" ">
                    <Nav className="me-auto  w-100 d-flex align-items-end justify-content-end">
                    <Nav.Link id="basic-nav-dropdown1" onClick={handleAppointments}>Appointments</Nav.Link>
                    <Nav.Link id="basic-nav-dropdown1"  onClick={handleStocks}>STOCK</Nav.Link>
                    <Nav.Link id="basic-nav-dropdown1" onClick={handleRequests}>Requests</Nav.Link>
                    <Nav.Link id="basic-nav-dropdown1" onClick={handleLogout}>Logout</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )

}


export default BloodBankTopBar;
