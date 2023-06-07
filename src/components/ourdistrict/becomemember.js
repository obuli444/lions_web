import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import carousalimg from '../../assets/carousal-img4.png';
export default function Becomeamember() {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={12}>
          <Grid container spacing={2}>
          <Grid item xs={12} md={12} sm={12} className="becomeamemberbg">1</Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>2</Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
