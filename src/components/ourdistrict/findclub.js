import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useFetchCollection } from "../getfirebasedata";
import { Tooltip } from 'primereact/tooltip';

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
                        <div className="" style={{ padding: "24px" }}>
                          <div className="row ">
                            <div
                              className="col col-3"
                              style={{ overflow: "hidden" }}
                            >
                              <img
                                src={element.clublogo}
                                alt={clubdetails.clubname}
                              />
                            </div>
                            <div className="col col-9 margin-auto">
                              <p className="club-list-name m-a-0">
                                {element.clubname}
                              </p>
                              <p className="club-list-no m-a-0">
                                <span>{element.clubno}</span>
                                <span className="title-dot">&#x2022;</span>
                                <span>{element.clubdistrict}</span>
                              </p>
                            </div>
                          </div>
                          {
                            element.presidentdetails!==undefined&&element.presidentdetails!==null&& <div className="row ">
                            <div
                              className="col col-12"
                              style={{ overflow: "hidden" }}
                            >
                              <p className="m-t-16 m-a-0">
                                <span>
                                  {element.presidentdetails !== null ? (
                                    <img
                                      src={element.presidentdetails.presidentprofile}
                                      alt={element.presidentname}
                                      width={"32px"}
                                      className="president-img"
                                    />
                                  ) : (
                                    ""
                                  )}
                                </span>
                                <span className="club-list-name p-l-8 p-r-8 p-b-0">
                                  {element.presidentdetails !== null
                                    ? element.presidentdetails.presidentname
                                    : ""}
                                </span>
                                <span className="club-list-no">
                                  {element.presidentdetails.presidentname !== null
                                    ? "(President)"
                                    : ""}
                                </span>
                              </p>
                            </div>
                          </div>

                          }
                         
                          <div className="row m-t-16">
                            <div
                              className="col col-12 specialities-icons"
                              style={{ overflow: "hidden" }}
                            >
                              <ul>
                                {element.specialties !== null &&
                                  element.specialties !== undefined &&
                                  element.specialties.map((ele, index) => {
                                    return (
                                      <li key={index}>
                                        <Tooltip
                                          target={`.${ele.code}`}
                                          mouseTrack
                                          mouseTrackLeft={10}
                                        />
                                        <img
                                          src={ele.image}
                                          alt={ele.name}
                                          width={"32px"}
                                          data-pr-tooltip={ele.name}
                                          className={ele.code}
                                        />
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                        </div>
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
