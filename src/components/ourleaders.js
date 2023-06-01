import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import sectionthreedivider from './../assets/sectionthreedivider.png';
import { useFetchCollection } from "./getfirebasedata";
import { Carousel } from "primereact/carousel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function HomeOurleader(){
  const { fbdbdata: ourleaderssection } =
    useFetchCollection("ourleaderssection");
  const { fbdbdata: ourmissionsectiontitle } = useFetchCollection(
    "ourmissionsectiontitle"
  );
  const { fbdbdata: activitiessection } = useFetchCollection(
    "activitiessection"
  );
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

  const ourleaderTemplate = (leaders) => {
    const { cardimage, name, designation } = leaders;
    return (
      <div className="ourleader-section">
        <Card sx={{ maxWidth: 350 }}>
          <CardMedia sx={{ height: 140 }} image={cardimage} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <span className="programs-header-title">{name}</span>
            </Typography>
            <Typography variant="body2" className="programs-description-text">
              {designation}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  };
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }} className="ourleader-p-t-40">
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
              <span><a className="primary-color" href="/Governorsteam">Learn more</a></span>&nbsp;
              <span className="material-symbols-outlined learnmore-icon verticalalign-bottom">
                east
              </span>
            </p>
          </Grid>
        </Grid>
        <div className="home-programs-carousal ourleaders-carousal padding-top-40">
          <Carousel
            value={ourleaderssection !== null ? ourleaderssection : []}
            numScroll={1}
            circular
            autoplayInterval={10000}
            numVisible={4}
            responsiveOptions={responsiveOptions}
            itemTemplate={ourleaderTemplate}
          />
        </div>
      </Box>
    </React.Fragment>
  );
}