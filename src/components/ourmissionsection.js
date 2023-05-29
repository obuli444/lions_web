import React  from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useFetchCollection } from "./getfirebasedata";
import sectiontwodivider from '../assets/sectiontwodivider.png';
import homesectiontwo from '../assets/homesectiontwo.png';
export default function Ourmissionsection(){
    const { fbdbdata: ourmissiondata } = useFetchCollection("ourmission");
    return (
      <React.Fragment>
        <Box sx={{ flexGrow: 1 }} className="p-t-84">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                src={sectiontwodivider}
                alt="divider"
                className="sectiontwodivider"
              />
            </Grid>
          </Grid>
          <Grid container className="p-t-40 align-center-section" spacing={0}>
            <Grid item xs={8}>
              <p className="section-header-title ">
                {ourmissiondata !== null
                  ? ourmissiondata[0].title
                  : "Our Mission"}
              </p>
            </Grid>
            <Grid item xs={4} className="text-right">
              <p className="learnmore">
                <span><a href="/aboutus" className="primary-color">Learn more</a></span>&nbsp;
                <span className="material-symbols-outlined learnmore-icon verticalalign-bottom">east</span>
              </p>
            </Grid>
          </Grid>
          <Grid container className="p-t-40 "  spacing={2}>
            <Grid item xs={12} className="p-t-0">
              <img
                src={homesectiontwo}
                alt="homesectiontwo"
                className="w-100 section-p-t-12"
              />
            </Grid>
          </Grid>
          <Grid container className="p-t-40 align-center-section" spacing={0}>
            <Grid item xs={12}>
              <p className="sectiontwo-description">
                {ourmissiondata !== null
                  ? ourmissiondata[0].description
                  : "To empower volunteers to serve their communities, meet humanitarian needs, encourage peace, and promote international understanding through Lions clubs.This mission is achieved through various initiatives and programs that focus on serving the community, such as vision and hearing programs, disaster relief, diabetes awareness and prevention, and youth programs. The Lions Club encourages volunteerism and provides its members with the tools and resources they need to make a positive impact in their communities"}
              </p>
            </Grid>
          </Grid>
        </Box>
      </React.Fragment>
    );
}