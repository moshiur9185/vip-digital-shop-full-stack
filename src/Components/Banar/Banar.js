import React from 'react';
import "./Banar.css";
import { Slide } from "react-slideshow-image";
import { Link } from 'react-router-dom';

const styleSheet = {
  backgroundColor: "#ffffff",
  width: "90%",
  height: "50vh",
  borderRadius: "10px",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.527)",
  filter: "saturate(200%)",
}
const Banar = () => {
    return (
        <div className="text">
        <Slide className="header-bg py-5">
          <div className="each-slide">
            <div className="row align-items-center">
              <div className="col-md-5 ml-md-5 pl-md-5 m-sm-2 text-md-start">
                <p className="fst-italic">
                  Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
                  Nobis temporibus molestias eaque aut, <br /> eaque aut aperiam
                  ipsum.
                </p>
                <h5 className="fst-italic">$ 1199</h5>
                <Link to="/product"><button className="btn button">Buy Now</button></Link>
                
              </div>
              <div className="col-md-6 pt-3  text-center">
                <img
                  style={styleSheet}
                  src="https://i.ibb.co/g6GhTNf/Xiaomi-Mi-Mix-Fold-4.jpg"
                  alt="#"
                />
              </div>
            </div>
          </div>
  
          <div className="each-slide">
            <div className="row align-items-center">
              <div className="col-md-5 ml-md-5 pl-md-5 m-sm-2 text-md-start">
                <p className="fst-italic">
                  Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
                  Nobis temporibus molestias eaque aut, <br /> eaque aut aperiam
                  ipsum.
                </p>
                <h5 className="fst-italic">$ 700</h5>
                <Link to="/product"><button className="btn button">Buy Now</button></Link>
              </div>
              <div className="col-md-6 pt-3  text-center">
                <img
                  style={styleSheet}
                  src="https://i.ibb.co/1Zdg57P/One-Plus-8-T-1.jpg" alt="#"
                />
              </div>
            </div>
          </div>
  
          <div className="each-slide">
            <div className="row align-items-center">
              <div className="col-md-5 ml-md-5 pl-md-5 m-sm-2 text-md-start">
                <p className=" fst-italic">
                  Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
                  Nobis temporibus molestias eaque aut, <br /> eaque aut aperiam
                  ipsum.
                </p>
                <h5 className="fst-italic">3,500 TK</h5>
                <Link to="/product"><button className="btn button">Buy Now</button></Link>
              </div>
              <div className="col-md-6 pt-3  text-center">
                <img
                  style={styleSheet}
                  src="https://digitalcontent.api.tesco.com/v2/media/homepage/ec8b2abf-d391-4bfb-89d2-6214d2152549/2249-TescoMobile-PAYG-Stamp-Alcatel-3082X-+Grey.jpeg"
                  alt="#"
                />
              </div>
            </div>
          </div>
        </Slide>
      </div>
    );
};

export default Banar;