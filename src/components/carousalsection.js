import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function CarousalSection(props){
    return<React.Fragment>
      <Carousel interval={3000}>
            {props.carousaldetails
              .filter((ele) => ele.sliderstatus === "Active")
              .map((ele, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 carousal-image"
                      src={ele.sliderimageurl}
                      alt={ele.slidertitle}
                    />

                    <Carousel.Caption>
                      <Row>
                        <Col>
                          <h3>{ele.slidertitle}</h3>
                        </Col>
                        <Col></Col>
                      </Row>
                      <Row>
                        <Col>
                          {" "}
                          <p>{ele.sliderdescription}</p>
                        </Col>
                        <Col></Col>
                      </Row>
                      {ele.sliderbtnenabled && (
                        <Row>
                          <>
                            {" "}
                            <p className="slider-learn-btn">
                              <a href={ele.sliderbtnlink} target="_blank">
                                {" "}
                                {ele.sliderbtntext}
                              </a>
                            </p>
                          </>
                          <Col></Col>
                        </Row>
                      )}
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
          </Carousel>
    </React.Fragment>
}