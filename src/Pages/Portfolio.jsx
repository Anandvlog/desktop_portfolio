import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
// import { Link } from "react-router-dom";
import "./Portfolio.scss";
// import { FiArrowUpRight } from "react-icons/fi";
// import  AhuseImg from "../Assest/img/Image.png"
// import  AppDImg from "../Assest/img/Image-1.png"
// import  EasyRImg from "../Assest/img/Image-12.png"
import CustomSlider from "../Common/CustomSlider";
import TopHeading from "../Common/TopHeading";
const Portfolio = () => {
  return (
    <>
   
        <div className="row">
          <div className="col-md-12">
            <div className="top-divider">
            <TopHeading smallTitle="resent projects" title="My Portfolio" />
              {/* <div className="portfolio-text">
                <span className="text-capitalize">resent projects</span>
                <h2 className="text-capitalize">My Portfolio</h2>
              </div> */}
              <button className="btn btn-danger btn-lg visit-btn">
             
                <AiOutlineGithub /> Visit my github
              </button>
            </div>
          </div>
         <CustomSlider />
          {/* <div className="col-md-4">
            <div className="card portfolio-card">
              <img src={AhuseImg} className="card-img-top" alt="card-img" />
              <div className="card-body">
                <h3 className="card-title">Ahuse</h3>
                <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
                <Link to="#" className="btn btn-white btn-md view-btn">
                View In Github <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card portfolio-card">
              <img src={AppDImg} className="card-img-top" alt="card-img" />
              <div className="card-body">
                <h3 className="card-title">App Dashboard</h3>
                <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
                <Link to="#" className="btn btn-white btn-md view-btn">
                View In Github<FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card portfolio-card">
              <img src={EasyRImg} className="card-img-top" alt="card-img" />
              <div className="card-body">
                <h3 className="card-title">Easy Rent</h3>
                <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
                <Link to="#" className="btn btn-white btn-md view-btn">
                View In Github <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div> */}
        </div>
     
    </>
  );
};

export default Portfolio;
