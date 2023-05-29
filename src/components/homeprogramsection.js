import React from "react";
import { Carousel } from "primereact/carousel";
import { useFetchCollection } from "./getfirebasedata";
import ProgramsCards from "../components/programscards";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import sectionfourdivider from './../assets/sectionfourdivider.png';

export default function HomeProgramssection() {
  const { fbdbdata: programsdata } = useFetchCollection(
    "programsandinitiatives"
  );
  const { fbdbdata: programstitle } = useFetchCollection(
    "programssectiontitle"
  );
  console.log("programstitle",programstitle);
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const programsTemplate = (programs) => {
    return (
      <div className="programs-body-grid">
        <ProgramsCards programsdetails={programs} />
      </div>
    );
  };
  return (
    <React.Fragment>
           <Box sx={{ flexGrow: 1 }} className="ourleader-p-t-40">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              src={sectionfourdivider}
              alt="divider"
              className="sectiontwodivider"
            />
          </Grid>
        </Grid>
        <Grid container className="p-t-40 align-center-section" spacing={0}>
          <Grid item xs={8}>
            <p className="section-header-title ">
              {programstitle !== null
                ? programstitle[0].title
                : "Programs and Initiatives"}
            </p>
          </Grid>
          <Grid item xs={4} className="text-right">
            <p className="learnmore">
              <span><a href="/programsandinitiatives" className="primary-color">Learn more</a></span>&nbsp;
              <span className="material-symbols-outlined learnmore-icon verticalalign-bottom">
                east
              </span>
            </p>
          </Grid>
        </Grid>
        <div className="home-programs-carousal padding-top-40">
        <Carousel
          value={programsdata !== null ? programsdata : []}
          numScroll={1}
          circular
          autoplayInterval={3000}
          numVisible={3}
          responsiveOptions={responsiveOptions}
          itemTemplate={programsTemplate}
        />
      </div>
        </Box>
     
    </React.Fragment>
  );
}
