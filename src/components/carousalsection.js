import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import carousalimgone from "../assets/carousal-img1.png";
import carousalimgtwo from "../assets/carousal-img2.png";
import carousalimgthree from "../assets/carousal-img3.png";
import carousalimgfour from "../assets/carousal-img4.png";
export default function CarousalSection(){
    const carousalItems = [
      {
        imageurl: carousalimgone,
        headerone: `Serve those who in 
        need with lions`,
        paraone: `Together, we can help children, families, and individuals in
         need through our disaster relief fund, vision and hearing 
         screening program, and other initiatives`,
        btntitle: "Learn more",
        btnlink: "/aboutus",
      },
      {
        imageurl: carousalimgtwo,
        headerone: `Leading Lions to 
        Make a Difference`,
        paraone: `Get to know the leader MJF Lion (District Governor) who 
        inspires us to make a difference in the world through our 
        programs and initiatives.`,
        btntitle: "Learn more",
        btnlink: "/ourmentor",
      },
      {
        imageurl: carousalimgthree,
        headerone: `Proudly sponsored by 
        our valued partner`,
        paraone: `Our partnership with them helps us to continue making a 
        positive impact in our community. Thank you for your 
        generous support!`,
        btntitle: "Visit partner",
        btnlink: "/ourmentor",
      },
      {
        imageurl: carousalimgfour,
        headerone: `Protect our planet for 
        the future with lions`,
        paraone: `Join us in making a positive impact on our environment and 
        supporting our efforts to reduce waste, promote 
        sustainability, and protect our natural resources.`,
        btntitle: "Learn more",
        btnlink: "/ourmentor",
      },
    ];
    return<React.Fragment>
    <Carousel interval={4000}>
      {carousalItems.map((ele,index)=>{
        return  <Carousel.Item key={index}>
        <img
          className="d-block w-100 carousal-image"
          src={ele.imageurl}
          alt="ele.imageurl"
        />

        <Carousel.Caption>
          <h3>{ele.headerone}</h3>
          <p>{ele.paraone}</p>
        </Carousel.Caption>
      </Carousel.Item>
      })}
    </Carousel>
    </React.Fragment>
}