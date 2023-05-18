import React from "react";
import { useFetchCollection } from "./getfirebasedata";
import Grid from "@mui/material/Grid";
import ProgramsCards from "../components/programscards";
export default function ProgramandInitiatives() {
  const { fbdbdata: programsdata } = useFetchCollection(
    "programsandinitiatives"
  );
  return (
    <React.Fragment>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexGrow: 1 }}
        className="programs-header-grid"
      >
        {programsdata !== null &&
          programsdata.map((ele, index) => {
            return (
              <Grid
                xs={12}
                sm={12}
                md={4}
                key={index}
                className="programs-body-grid"
              >
                <ProgramsCards programsdetails={ele} key={index} />
              </Grid>
            );
          })}
      </Grid>
    </React.Fragment>
  );
}
