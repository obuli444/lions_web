import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useFetchCollection } from "./getfirebasedata";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AppCommonCollections from '../firebase/app-collections';
export default function Resorces() {
  const { fbdbdata: resourcesdistrict } =
    useFetchCollection(AppCommonCollections.resourcescollection[0]);
  const { fbdbdata: resourcesdownload } =
    useFetchCollection(AppCommonCollections.resourcescollection[1]);
  const { fbdbdata: resourcesmobileapp } =
    useFetchCollection(AppCommonCollections.resourcescollection[2]);
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }} className="ourleader-p-t-40 p-l-84">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p className="section-header-title ">Resources</p>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className="resources-section p-l-84">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p className="resoures-title-p ">District resources</p>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className=" p-l-84 p-r-84">
        <Grid container spacing={3}>
          {resourcesdistrict !== null &&
            resourcesdistrict.map((ele, index) => {
              return (
                <Grid item xs={12} md={3} sm={12} key={index}>
                  <Grid container spacing={0} className="resources-grid">
                    <Grid item xs={11} md={11} sm={11}>
                      <p className="resources-district-title">
                        <a href={ele.titlelink} target="_blank">
                          {ele.title}
                        </a>
                      </p>
                    </Grid>
                    <Grid item xs={1} md={1} sm={11}>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className="p-t-40 p-l-84">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p className="resoures-title-p ">Downloads</p>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className=" p-l-84 p-r-84">
        <Grid container spacing={3}>
          {resourcesdownload !== null &&
            resourcesdownload.map((ele, index) => {
              return (
                <Grid item xs={12} md={3} sm={12} key={index}>
                  <Grid container spacing={0} className="resources-grid">
                    <Grid item xs={11} md={11} sm={11}>
                      <p className="resources-district-title">
                        <a href={ele.titlelink} target="_blank">
                          {ele.title}
                        </a>
                      </p>
                    </Grid>
                    <Grid item xs={1} md={1} sm={11}>
                      <span className="material-symbols-outlined">
                        download
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className="p-t-40 p-l-84">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p className="resoures-title-p ">Mobile app</p>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className=" p-l-84 p-r-84 p-b-40">
        <Grid container spacing={2} className="">
          <Grid item xs={12} md={6} sm={12} className="p-a-0">
            {resourcesmobileapp !== null && (
              <img
                src={resourcesmobileapp[0].mobileimage}
                alt={resourcesmobileapp[0].imagetitle}
                className="w-100 "
              />
            )}
          </Grid>
          <Grid item xs={12} md={6} sm={12} className="p-t-0">
            <Grid container spacing={0}>
              <Grid item xs={12} md={12} sm={12}>
                <p className="section-header-title ">
                  Stay Connected with the Lions Club Mobile App
                </p>
              </Grid>
              <Grid item xs={12} md={12} sm={12} className="mobile-description-p">
                <p>
                  The Lions Club Mobile App is the perfect tool for staying
                  up-to-date on everything related to the Lions Club. With the
                  app, you can easily find information about upcoming
                  activities, programs, and initiatives, as well as connect with
                  fellow Lions Club members from around the world.
                </p>
                <br/>
                <p>
                  Here are some of the features you can enjoy with the Lions
                  Club Mobile App:
                </p>
                <ul>
                  <li>
                    Access to the latest news and announcements from the Lions
                    Club
                  </li>
                  <li>
                    A comprehensive calendar of upcoming activities and
                    activities
                  </li>
                  <li>
                    Information about the various programs and initiatives
                    supported by the Lions Club
                  </li>
                  <li>
                    A directory of Lions Club members around the world, with the
                    ability to connect and collaborate with other members{" "}
                  </li>
                  <li>
                  A secure platform for submitting and tracking donations
                    </li>
                    <li>
                    Notifications about important Lions Club updates and initiatives
                    </li>
                </ul>
                <br/>
                <p>With the Lions Club Mobile App, you'll never miss a beat when it comes to staying involved and making a difference. Download the app today and start making a difference in your community and around the world.</p>
              </Grid>
              <Grid item xs={12} md={12} sm={12}>
              <Container fluid>
              <Row>
                <Col xs={5} md={3} sm={5} className="p-a-0">
                  <img src={playstore} alt="playstore"></img>
                </Col>
                <Col xs={7} md={9} sm={7} className="p-a-0">
                  <img src={appstore} alt="appstore"></img>
                </Col>
              </Row>
            </Container>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
