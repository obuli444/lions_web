import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import carousalimgone from "../assets/carousal-img1.png";
import carousalimgtwo from "../assets/carousal-img2.png";
import carousalimgthree from "../assets/carousal-img3.png";
import carousalimgfour from "../assets/carousal-img4.png";
export default function CarousalSection(){
    const carousalItems = [{
        imageurl : carousalimgone,
        headerone : "",
        paraone : "",
        btntitle : "",
        btnlink : ""
    }]
    return<React.Fragment>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousalimgone}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousalimgtwo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousalimgthree}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousalimgfour}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </React.Fragment>
}