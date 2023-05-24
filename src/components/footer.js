import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useFetchCollection } from "./getfirebasedata";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import playstore from '../assets/playstore.png';
import  appstore from '../assets/appstore.png';
export default function Footer() {
  const { fbdbdata: footersectionone } =
    useFetchCollection("footeradsectionone");
  const { fbdbdata: footersectiontwo } =
    useFetchCollection("footeradsectiontwo");
  const { fbdbdata: footerlogo } = useFetchCollection("footerlogo");
  return (
    <React.Fragment>
      {/* Sectionone ad with donate content */}
      <Box sx={{ flexGrow: 1 }} className="footer-sectionone">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} className="p-a-0">
            {footersectionone !== null && (
              <img
                className="footer-sectionone-img"
                src={footersectionone[0].adimage}
                alt={"footerimage"}
              />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            className="footer-sectionone-text p-a-0"
          >
            <p className="footer-one-title">
              {" "}
              {footersectionone !== null && footersectionone[0].title}
            </p>
            <p className="footer-one-subtitle">
              {" "}
              {footersectionone !== null && footersectionone[0].subtitle}
            </p>
            <p
              className="footer-donate-btn"
              style={{
                background: `${
                  footersectionone !== null
                    ? footersectionone[0].btncolor
                    : "#FACA0E"
                }`,
                border: `1px solid ${
                  footersectionone !== null
                    ? footersectionone[0].btncolor
                    : "#FACA0E"
                }`,
              }}
            >
              {"Donate"}
            </p>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} className="footer-grid">
          <Grid item xs={12} sm={12} md={12}>
            {footersectiontwo !== null && (
              <img
                src={footersectiontwo[0].adimage}
                alt={"footerimage"}
                width={"100%"}
              />
            )}
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className="footer-sectionone footer-sectiontwo">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={2}>
            {footerlogo !== null && (
              <img
                src={footerlogo[0].logoimage}
                alt={"footerimage"}
                width={"54px"}
              />
            )}
            <p className="footer-grid-title p-t-24 m-a-0">Download app </p>
            <Container fluid>
              <Row>
                <Col xs={5} md={12} sm={6} className="p-a-0 p-t-16">
                  <img src={playstore} alt="playstore"></img>
                </Col>
                <Col xs={7} md={12} sm={6} className="p-a-0 p-t-16">
                  <img src={appstore} alt="appstore"></img>
                </Col>
              </Row>
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <p className="footer-grid-title">International News</p>
            <Container fluid>
              <Row>
                <Col className="p-a-0" xs={12} md={12} sm={12}>
                  <p>
                    <a
                      href="https://www.lionsclubs.org/en/footer/lions-press-center"
                      className="footer-grid-links"
                    >
                      Press center
                    </a>
                  </p>
                </Col>
                <Col className="p-a-0" xs={12} md={12} sm={12}>
                  <p>
                    <a
                      href="https://www.lionsclubs.org/en/blog"
                      className="footer-grid-links"
                    >
                      Service stories
                    </a>
                  </p>
                </Col>
                <Col className="p-a-0" xs={12} md={12} sm={12}>
                  <p>
                    <a
                      href="https://www.lionsclubs.org/en/blog"
                      className="footer-grid-links"
                    >
                      The lions blog
                    </a>
                  </p>
                </Col>
                <Col className="p-a-0" xs={12} md={12} sm={12}>
                  <p>
                    <a
                      href="https://lcoi.in/lm/202302/#p=1"
                      className="footer-grid-links"
                    >
                      The lion magazine
                    </a>
                  </p>
                </Col>
              </Row>
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <p className="footer-grid-title">324 - D</p>
            <Container fluid>
              <Row>
                <Col className="p-a-0" xs={12} md={12} sm={12}>
                  <p>
                    <a href="/" className="footer-grid-links">
                      Contact us
                    </a>
                  </p>
                </Col>
                <Col className="p-a-0" xs={12} md={12} sm={12}>
                  <p>
                    <a href="/" className="footer-grid-links">
                      Donate us
                    </a>
                  </p>
                </Col>
                <Col className="p-a-0" xs={12} md={12} sm={12}>
                  <p>
                    <a href="/" className="footer-grid-links">
                      Activities
                    </a>
                  </p>
                </Col>
                <Col className="p-a-0" xs={12} md={12} sm={12}>
                  <p>
                    <a href="/" className="footer-grid-links">
                      Resources
                    </a>
                  </p>
                </Col>
              </Row>
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <p className="footer-grid-title">International Media</p>
            <Container fluid>
              <Row>
                <Col className="p-a-0" xs={12} md={12} sm={12}>
                  <p>
                    <a
                      href="https://www.lionsclubs.org/en/lions-video-center"
                      className="footer-grid-links"
                    >
                      Video center
                    </a>
                  </p>
                </Col>
                <Col className="p-a-0" xs={12} md={12} sm={12}>
                  <p>
                    <a
                      href="https://www.lionsclubs.org/en/resources-for-members/resource-center/logos-and-emblems"
                      className="footer-grid-links"
                    >
                      Logos
                    </a>
                  </p>
                </Col>
                <Col className="p-a-0" xs={12} md={12} sm={12}>
                  <p>
                    <a
                      href="https://www.lionsclubs.org/en/resources-for-members/brand-guidelines"
                      className="footer-grid-links"
                    >
                      Brand guidelines
                    </a>
                  </p>
                </Col>
              </Row>
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <p className="footer-grid-title">Supprot</p>
            <Container fluid>
              <Row>
                <Col className="p-a-0" xs={12} md={12} sm={12}>
                  <p>
                    <a href="/" className="footer-grid-links">
                      Privacy policy
                    </a>
                  </p>
                </Col>
                <Col className="p-a-0" xs={12} md={12} sm={12}>
                  <p>
                    <a href="/" className="footer-grid-links">
                      Terms of use
                    </a>
                  </p>
                </Col>
                <Col className="p-a-0" xs={12} md={12} sm={12}>
                  <p>
                    <a href="/" className="footer-grid-links">
                      Cookie policy
                    </a>
                  </p>
                </Col>
              </Row>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className="footer-sectionthree">
        <Grid container spacing={2} >
          <Grid item xs={12} sm={12} md={12} >
          <Container fluid className="footer-divider">
              <Row>
                <Col className="p-a-0" xs={12} md={12} sm={12}>
                  <p className="footer-grid-links  footer-copyrights m-a-0 text-center">
                  © 2023 Coimbatore Lions Club. All rights reserved.
                  </p>
                </Col>
                </Row>
                </Container>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
