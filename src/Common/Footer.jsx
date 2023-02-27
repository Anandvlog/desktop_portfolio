import React from 'react';
import logo from "../Assest/img/Logo.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer className='custom-footer'>
     <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='footer-heading'>
            <Link to="/">
            <img src={logo}  alt="logo" />
            </Link>
            <ul>
              <li><Link to="#"><FaFacebook />   </Link> </li>
              <li><Link to="#"><AiFillGithub /></Link></li>
              <li><Link to="#"><AiFillInstagram /></Link></li>
              <li><Link to="#"><AiFillTwitterCircle /></Link></li>
            </ul>
          </div>
          <hr />
          <div className='footer-inner-details'>
            <p className='mb-0 text-capitalize'>made with <GoHeart className='text-danger' /> by Anand</p>
            <ul>
              <li><Link to="#">Privacy policy</Link></li>
              <li><Link to="#">Terms of Service</Link></li>
              <li><Link to="#">Cookies Settings</Link></li>
            </ul>
          </div>
        </div>

      </div>
    
     </div>

    </footer>

    </>
  )
}

export default Footer