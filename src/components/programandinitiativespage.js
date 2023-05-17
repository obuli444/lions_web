import React from "react";
import { useFetchCollection } from "./getfirebasedata";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProgramandInitiatives() {
  const { fbdbdata: programsdata } = useFetchCollection(
    "programsandinitiatives"
  );
  console.log("programsdata", programsdata);
  return (
    <React.Fragment>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexGrow: 1 }} className="programs-header-grid"
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
                <Card sx={{ maxWidth: 350 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={ele.cardimage}
                    title={ele.header}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <span>
                        <img
                          width="28px"
                          src={ele.headericon}
                          alt={ele.title}
                        />
                      </span>
                      &nbsp;
                      <span className="programs-header-title">
                        {ele.header}
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="programs-description-text"
                    >
                      {ele.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <div class="container p-a-0">
                      <div class="row">
                        <div class="col-4 p-r-0">
                          {" "}
                          <p
                            className="programs-first-btn"
                            style={{ background: `${ele.btncolor}` }}
                          >
                            <a href={ele.btnlink} target="_blank">
                              {ele.btntext}
                            </a>
                          </p>
                        </div>
                        <div class="col p-l-16">
                          {" "}
                          <p
                            className="program-donate-btn"
                            style={{
                              color: `${ele.donatebtncolor}`,
                              border: `1px solid ${ele.donatebtncolor}`,
                            }}
                          >
                            {"Donate"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* <Button
                      size="small"
                      href={ele.btnlink}
                      target="_blank"
                      style={{ background: `${ele.btncolor} !important` }}
                      className="programs-first-btn"
                    >
                      {ele.btntext}
                    </Button>
                    <Button size="small">{"Donate"}</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </React.Fragment>
  );
}
