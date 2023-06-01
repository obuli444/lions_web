import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useFetchCollection } from "../getfirebasedata";
import Clubcard from '../ourdistrict/clubcard';
export default function FindaClub() {
  const { fbdbdata: clubdetails } = useFetchCollection("clubdetails");
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }} className="p-a-84">
        <Grid container className="align-center-section" spacing={0}>
          <Grid item xs={2}>
            <p className="section-header-title ">{"Clubs"}</p>
          </Grid>
          <Grid item xs={10} className="text-right">
            <span className="material-symbols-outlined club-searchicon  ">
              search
            </span>
            <input className="club-input p-l-24" type="text"></input>
          </Grid>
        </Grid>
        <Grid container className="p-t-40 " spacing={2}>
          {clubdetails !== null && clubdetails.length !== 0 ? (
            clubdetails.map((element) => {
              if (element.status === "Active" && element.status !== null) {
                return (
                  <Grid item xs={12} md={4} sm={12} key={element.id}>
                    <Grid container spacing={0}>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        sm={12}
                        key={element.id}
                        className="club-card"
                      >
                        <div className="club-divider"></div>
                        <a href={"/"}>
                        <Clubcard clubdetails={element}/>
                        </a>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              }
            })
          ) : (
            <p className="text-center">No Clubs Found</p>
          )}
          <Grid item xs={12} className="p-t-0"></Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
