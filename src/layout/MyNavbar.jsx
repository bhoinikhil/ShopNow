
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { FaOpencart } from "react-icons/fa";
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from "../assets/shopnow.png"
import { createContext, useState } from 'react';
import Search from './Search';

 export const searchData = createContext()

function MyNavbar({cartId}) {
 const[search,setSearch] =useState("")
console.log();


  // setSearch("nikhil")
  return (
    <>
      <Navbar expand="lg" className=" bg-primary navbar-dark ">
        <Container fluid className=' container  d-flex align-item-center '>
          <Navbar.Brand to="/" className='fs-4'><img src={logo} alt="logo" className='logo' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-auto my-lg-0 d-flex w-50 d-flex justify-content-around align-item-center text-decoration-none" style={{ maxHeight: '300px' }} navbarScroll>
              <NavLink to="/"><span className="text-light fs-5">Home</span></NavLink>
              <NavLink to="/men"><span className="text-light fs-5">Men</span></NavLink>
              <NavLink to="/women"><span className="text-light fs-5">Women</span></NavLink>
              <NavLink to="/kids"><span className="text-light fs-5">Kids</span></NavLink>
              <NavLink to="/about"><span className="text-light fs-5">About</span></NavLink>
              <NavLink to="/seller"><span className="text-light fs-5">Seller</span></NavLink>
              <NavLink to="/account"><span className="text-light fs-5">Account</span></NavLink>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={(ele) => { setSearch(ele.target.value) }} />
              {/* <Button variant="outline-danger">Search</Button> */}
            </Form>
            <NavLink to="/cart"><span className="text-light fs-5 p-2 me-2 fs-3 text-bold position-relative"><FaOpencart /> <span className='cart-count'>{cartId.length}</span></span></NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container  my-0">
        <searchData.Provider value={search}>
           <Search/>
        </searchData.Provider>
      </div>


    </>
  );
}

export default MyNavbar;

