import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';
import logo from "../Assest/img/Logo.png";
import "./SidebarMobile.scss";

const  SidebarMobile = ()  => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const naviMenu =[{
    id: 1,
    Link: "/",
    menuName: "Home",
 },{
  id: 2,
  Link: "/about",
  menuName: "About",
 },{
  id: 3,
    Link: "/portfolio",
    menuName: "Portfolio",
 },{
  id: 4,
  Link: "/testimonial",
  menuName: "Testimonials",
 },{
  id: 5,
  Link: "/Contact",
  menuName: "Contact",
 }]

const submitHandler = (event) => {
  event.preventDefault();
};

  return (
    <>

      <Button variant="primary" onClick={handleShow} className="mobile-menu">
      <GiHamburgerMenu  />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <Link className="navbar-brand user-logo" to="/">
              <img src={logo} alt="logo" />
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
          <ul className="navbar-nav m-auto  custom-menu ">
              {naviMenu.map((item,index) =>{
                  return(
                    <NavLink className="nav-item navItem" to={item.Link} key={index}>
                  <span>{item.menuName}</span>
                </NavLink>
                  )
              })}
              </ul>
              <form className="d-flex" onSubmit={submitHandler}>
                <button
                  className="btn btn-outline-primary custom-outline-btn-md btn-md"
                  type="submit"
                >
                  Contact Me
                </button>
              </form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SidebarMobile;