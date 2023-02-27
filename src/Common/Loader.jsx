import React from 'react';
import "./Loader.scss";
import loader from "../Assest/img/loader.gif";

const Loader = () => {
  return (
    <div className='loader'>
       <img  src={loader} alt="loader" />
    </div>
  )
}

export default Loader;