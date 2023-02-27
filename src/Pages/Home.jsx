import React from "react";
import "./Home.scss";
import userImg from "../Assest/img/Group 11 1.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const handlerRoute =() =>{
    let path = `/Contact`;
    navigate(path);
   
  }

  return (
    <>
      <div className="row user-wrapper">
        <div className="col-md-12 col-lg-6 order">
          <div className="user-details">
            <motion.span
              className="subtitle text-capitalize d-block"
              initial={{ x: -300, scale: 0.5 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Hey, i am anand
            </motion.span>
            <motion.h1
              className="heading"
              initial={{ x: 300, scale: 0.5 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 1 }}
            >
              I create <span className="work-name">product design</span> and
              brand experience
            </motion.h1>
            <motion.p className="title mb-4"  initial={{ x: 300, scale: 0.5 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 1 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </motion.p>
            <motion.button className="text-capitalize btn btn-primary btn-md get-custom-btn" onClick={handlerRoute} initial={{ x: 300, scale: 0.5 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 1 }}>
              get in touch
            </motion.button>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="user" >
            <img src={userImg} className="fluid-img" alt="user-img"  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
