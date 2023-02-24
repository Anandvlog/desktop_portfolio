import React from "react";
import "./Testimonial.scss";
import { AiFillStar } from "react-icons/ai";
import clientImg from "../Assest/img/Avatar Image.png";
import clientImg2 from "../Assest/img/Avatar Image-1.png";
import clientImg3 from "../Assest/img/Avatar Image-2.png";
import TopHeading from "../Common/TopHeading";

const Testimonial = () => {
  const customerDetails=[
    {
      id:1,
      heading:"Dianne Russell",
      title:"Starbucks",
      icon: <AiFillStar />,
      pataText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      img: clientImg,
    },{
      id:2,
      heading:"Kristin Watson",
      title:"Louis Vuitton",
      icon: <AiFillStar />,
      pataText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      img:clientImg2,
    },{
      id:3,
      heading:"Kathryn Murphy",
      title:"McDonald's",
      icon: <AiFillStar />,
      pataText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      img:clientImg3,
     
    }
  ];
  return (
    <>
        <div className="row">
          <div className="col-md-12">
          <TopHeading smallTitle="Clients Feedback" title="Customer testimonials"  />
          </div>
          {customerDetails.map((items,index)=>{
            return(
          <div className="col-md-4" key={index}>
            <div className="card custom-card">
              <div className="card-body p-0">
              <div className="ag-courses-item_bg"></div>
              <div className="customer-details">
                <img src={items.img} alt="client-img" className="client-img" />
                <div className="customer-subtext">
                  <h5 className="m-0">{items.heading}</h5>
                  <span className="d-block">{items.title}</span>  
                  <ul className="client-star-rating">
                   <li>
                    {items.icon}
                  </li>
                   <li>
                   {items.icon}
                  </li>
                  <li>
                  {items.icon}
                  </li>
                  <li>
                  {items.icon}
                  </li> 
                  <li>
                  {items.icon}
                  </li>
                </ul>                
                </div>
              </div>
                <p className="card-text">
                 {items.pataText}
                </p>
              </div>
            </div>
          </div>
           )
          }) }
        </div>
    </>
  );
};

export default Testimonial;
