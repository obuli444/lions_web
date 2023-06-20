import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
export default function AppSpinner() {
  const spinnerCount = [1, 2, 3, 4];
  return (
    <div className="">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          {spinnerCount.map((ele, index) => {
            return (
              <Grid key={index} item xs={12} sm={12} md={4} lg={3}>
                <Skeleton variant="rectangular" height={230} style={{margin:"12px"}} />
                <Box>
                  <Skeleton  style={{margin:"12px"}}/>
                  <Skeleton width="60%" style={{margin:"12px"}} />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}
