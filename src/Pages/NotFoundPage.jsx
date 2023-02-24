import React from 'react'
import { useNavigate } from 'react-router-dom';
import NotFoundImg from "../Assest/img/notfoundpage.jpg";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  let navigate = useNavigate();
  const routeChange = () =>{
    let path = `/`;
     navigate(path);
  }
  return (
    <div className='not_found_wrapper'>
         <img src={NotFoundImg} alt="NotFoundImg" />
        <button className='text-cap btn btn-md btn-primary' onClick={routeChange}>Back to Home pages</button>
    </div>
  )
}

export default NotFoundPage;