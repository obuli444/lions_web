import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import sectionthreedivider from './../assets/sectionthreedivider.png';
import { useFetchCollection } from "./getfirebasedata";


export default function HomeOurleader(){
  const { fbdbdata: ourleaderssection } =
    useFetchCollection("ourleaderssection");
  const { fbdbdata: ourmissionsectiontitle } = useFetchCollection(
    "ourmissionsectiontitle"
  );
  console.log("ourleaderssection", ourmissionsectiontitle);
  console.log("ourleader", ourleaderssection);
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }} className="p-t-84">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              src={sectionthreedivider}
              alt="divider"
              className="sectiontwodivider"
            />
          </Grid>
        </Grid>
        <Grid container className="p-t-40 align-center-section" spacing={0}>
          <Grid item xs={8}>
            <p className="section-header-title ">
              {ourmissionsectiontitle !== null
                ? ourmissionsectiontitle[0].title
                : "Our Leader and Governors"}
            </p>
          </Grid>
          <Grid item xs={4} className="text-right">
            <p className="learnmore">
              <span>Learn more</span>&nbsp;
              <span className="material-symbols-outlined learnmore-icon verticalalign-bottom">
                east
              </span>
            </p>
          </Grid>
        </Grid>
        {/* {ourleaderssection !== null &&
    <Grid container spacing={2}  sx={{ flexGrow: 1 }}>
         {ourleaderssection.map((ele, index) => {
            return (
                <Grid xs={1} sm={1} md={3}  key={index}>
              <img src={ele.cardimage} alt={ele.name}/>
              </Grid>
          
            );
          })}
   </Grid>
         } */}
      </Box>
    </React.Fragment>
  );
}