import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../Assest/img/Logo.png";
import "./Header.scss";
import SidebarMobile from "./SidebarMobile";
const Header = () => {
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
  let navigate = useNavigate();
  const handlerLocation = () =>{
    let path = `/Contact`;
     navigate(path);
  }
  return (
    <>
      <header className="custom-header">  
        <nav className="navbar navbar-expand-lg bg-white navbar-custom">
          <div className="container">
            <Link className="navbar-brand user-logo" to="/">
              <img src={logo} alt="logo" />
            </Link>
             
             <SidebarMobile />
            <button
              className="navbar-toggler no-mobile-menu"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
                  className="btn btn-primary custom-outline-btn-md btn-md"
                  type="submit"
                  onClick={handlerLocation}
                >
                  Contact Me
                </button>
              </form>
            </div>
          </div>
        </nav>
      
      </header>
    </>
  );
};

export default Header;
