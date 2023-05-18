import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ProgramsCards(props) {
  const {
    header,
    cardimage,
    headericon,
    title,
    description,
    btnlink,
    donatebtncolor,
    btncolor,
    btntext,
  } = props.programsdetails;
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia sx={{ height: 140 }} image={cardimage} title={header} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span>
              <img width="28px" src={headericon} alt={title} />
            </span>
            &nbsp;
            <span className="programs-header-title">{header}</span>
          </Typography>
          <Typography variant="body2" className="programs-description-text">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <div className="container p-a-0">
            <div className="row">
              <div className="col-4 p-r-0">
                {" "}
                <p
                  className="programs-first-btn"
                  style={{ background: `${btncolor}` }}
                >
                  <a href={btnlink} target="_blank">
                    {btntext}
                  </a>
                </p>
              </div>
              <div className="col p-l-16">
                {" "}
                <p
                  className="program-donate-btn"
                  style={{
                    color: `${donatebtncolor}`,
                    border: `1px solid ${donatebtncolor}`,
                  }}
                >
                  {"Donate"}
                </p>
              </div>
            </div>
          </div>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
