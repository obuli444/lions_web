import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useFetchCollection } from "./getfirebasedata";
import sectiontwodivider from "../assets/sectiontwodivider.png";

export default function Hometwittersection() {
  const { fbdbdata: hometwittersection } =
    useFetchCollection("hometwittersection");

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
          <Grid item xs={12}>
            <p className="section-header-title ">
              {hometwittersection !== null
                ? hometwittersection[0].title
                : "Social media feeds"}
            </p>
          </Grid>
        </Grid>
        <Grid container className="p-t-40 align-center-section" spacing={0}>
          <Grid item xs={12} sm={12} md={6}>
           <a class="twitter-timeline" href="https://twitter.com/Lions324d?ref_src=twsrc%5Etfw">Tweets by Lions324d</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
          <img
                src={hometwittersection!==null&& hometwittersection[0].adimage}
                alt="socialmediaad"
                className="section-p-t-12 w-100"
              />
           </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
