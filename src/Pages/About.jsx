import React from "react";
import "./About.scss";
import strategyImg from "../Assest/img/product-chain 1.png";
import brandingImg from "../Assest/img/tag 1.png";
import designImg from "../Assest/img/feather-pen 1.png";
import webFlowImg from "../Assest/img/feather-pen 11.png";
import aboutImg from "../Assest/img/About Me.png";
import TopHeading from "../Common/TopHeading";

const About = () => {
  const expertis =[{
    id:0,
    img: strategyImg,
    title:"Strategy & Direction",
    paraText:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique..",
  },{
    id:1,
    img: brandingImg,
    title:"Branding & Logo",
    paraText:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique..",
},{
  id:2,
  img: designImg,
  title:"UI & UX Design",
  paraText:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique..",
}];
  return (
    <>
        <div className="row">
          <div className="col-md-12">
            <TopHeading smallTitle= "My Skills" title="My expertise" />
          </div>
          {expertis.map((items,index) =>{
            return(
              <div className="col-md-6 col-lg-4" key={items.id}>
                <div className="card custom-card active">
                  <div className="top-img">
                    <img
                      src={items.img}
                      className="card-img-top"
                      alt="strategy-img"
                    />
                  </div>
                  <div className="ag-courses-item_bg"></div>
                  <div className="card-body p-0">
                    <h3 className="card-title">{items.title}</h3>
                    <p className="card-text">{items.paraText}</p>
                  </div>
                </div>
              </div>
            )
          }) }
          <div className="col-md-12 col-lg-6">
            <div className="about-img">
              <img src={aboutImg} alt="about-img" />
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="about-text">
              <span className="d-block mb-2">About</span>
              <h2>About me</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                varius faucibus massa sollicitudin amet augue. Nibh metus a
                semper purus mauris duis. Lorem eu neque, tristique quis duis.
                Nibh scelerisque ac adipiscing velit non nulla in amet
                pellentesque. <br /> <br /> <br /> Sit turpis pretium eget maecenas.
                Vestibulum dolor mattis consectetur eget commodo vitae. Amet
                pellentesque sit pulvinar lorem mi a, euismod risus r.{" "}
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default About;
