import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { FiArrowUpRight } from "react-icons/fi";
import  AhuseImg from "../Assest/img/Image.png"
import  AppDImg from "../Assest/img/Image-1.png"
import  EasyRImg from "../Assest/img/Image-12.png"
import { Link } from 'react-router-dom';
import "./CustomSlider.scss";


const CustomSlider = () => {
  const UserContent =[
    {
      id: 1,
      title: "Ahuse",
      paraText: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      icon: <FiArrowUpRight />,
      img: AhuseImg,

    },{
      id: 2,
      title: "App Dashboard",
      paraText: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      icon: <FiArrowUpRight />,
      img: AppDImg,
    },{
      id: 3,
      title: "Easy Rent",
      paraText: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      icon: <FiArrowUpRight />,
      img: EasyRImg,
    },
    {
      id: 4,
      title: "Easy Rent",
      paraText: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      icon: <FiArrowUpRight />,
      img: EasyRImg,
    },
  ]



    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
         arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        
      };
  return (
       <>
        <Slider {...settings}>
          {UserContent.map((items,index) =>{
            return(
            <div className="col-md-3" key={index}>
         

            <div className="card portfolio-card" key={index}>
              <img src={items.img} className="card-img-top" alt="card-img" />
              <div className="card-body">
                <h3 className="card-title">{items.title}</h3>
                <p className="card-text">{items.paraText}</p>
                <Link to="#" className="btn btn-white btn-md view-btn">
                View In Github {items.icon}
                </Link>
              </div>
            </div>
           

          
          </div>

            )
          })
          }
          
        </Slider>

       </>
  );
}

export default CustomSlider;