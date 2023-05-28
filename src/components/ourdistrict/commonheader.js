import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useFetchCollection } from "../getfirebasedata";

export default function CommonHeader(props) {
  console.log("props", props);
  const { formaltitle, name, designation } = props.details;
  const { fbdbdata: logodetails } = useFetchCollection("logodetails");
  return (
    <React.Fragment>
      <Box
        sx={{ flexGrow: 1 }}
        className="p-l-84 p-r-84 ourdistrict-commonhead"
      >
        <Grid container spacing={2}>
          <Grid item xs={2} className="text-left">
            {logodetails !== null && (
              <img
                src={logodetails[0].internationallogo}
                alt={"internationallogo"}
              />
            )}
          </Grid>
          <Grid item xs={8} className="text-center margin-auto">
            <p className="m-a-0">
              <span className="ourdistrict-subtitle">{formaltitle}</span>
              <span className="ourdistrict-main-p">{name}</span>
              <span className="ourdistrict-subtitle">{designation}</span>
            </p>
          </Grid>
          <Grid item xs={2} className="text-right">
            {logodetails !== null && (
              <img src={logodetails[0].districtlogo} alt={"districtlogo"} />
            )}
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
