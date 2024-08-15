import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
const Header = () => {
    const routes=[{
        pageName:"Home",
        path:"/"
          },
          {
            pageName:"About",
            path:"/about"
              },
              {
                pageName:"Contact",
                path:"/contact"
                  },
        ]
  return (
    <>
        <Navbar expand="lg"  bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand style={{fontSize:30 , fontWeight:'bold'}}>My Store </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {
            routes.map(({pageName,path},index)=>{
             return <NavLink to={path} className="nav-items">{pageName}</NavLink>

            })
          }
            
          
         
          </Nav>
          <i className="fa-solid fa-cart-shopping cart"></i>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header