import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useFetchCollection } from "../getfirebasedata";

export default function FindaClub() {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }} className="p-a-84">
        <Grid container className="align-center-section" spacing={0}>
          <Grid item xs={2}>
            <p className="section-header-title ">{"Clubs"}</p>
          </Grid>
          <Grid item xs={10} className="text-right">
            <span class="material-symbols-outlined">search</span>
            <input className="club-input p-l-24" type="text"></input>
          </Grid>
        </Grid>
        <Grid container className="p-t-40 " spacing={2}>
          <Grid item xs={12} className="p-t-0"></Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
