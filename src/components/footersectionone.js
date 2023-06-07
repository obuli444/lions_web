import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useFetchCollection } from "./getfirebasedata";
import AppCommonCollections from '../firebase/app-collections';

export default function FooterSectionone() {
  const { fbdbdata: footersectionone } =
    useFetchCollection(AppCommonCollections.footercollections[0]);
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }} className="footer-sectionone">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} className="p-a-0">
            {footersectionone !== null && (
              <img
                className="footer-sectionone-img"
                src={footersectionone[0].adimage}
                alt={"footerimage"}
              />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            className="footer-sectionone-text p-a-0"
          >
            <p className="footer-one-title">
              {" "}
              {footersectionone !== null && footersectionone[0].title}
            </p>
            <p className="footer-one-subtitle">
              {" "}
              {footersectionone !== null && footersectionone[0].subtitle}
            </p>
            <p
              className="footer-donate-btn"
              style={{
                background: `${
                  footersectionone !== null
                    ? footersectionone[0].btncolor
                    : "#FACA0E"
                }`,
                border: `1px solid ${
                  footersectionone !== null
                    ? footersectionone[0].btncolor
                    : "#FACA0E"
                }`,
              }}
            >
              {"Donate"}
            </p>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
