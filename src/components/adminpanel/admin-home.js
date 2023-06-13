import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Appfullcalendar from "./app-fullcalendar";
export default function AdminHome() {
  var myDate = new Date();
  var hrs = myDate.getHours();
  var greettext = "";
  if (hrs < 12) {
    greettext = "Good Morning";
  } else if (hrs >= 12 && hrs <= 17) {
    greettext = "Good Afternoon";
  } else if (hrs >= 17 && hrs <= 24) {
    greettext = "Good Evening";
  }
  return (
    <React.Fragment>
      <h5>
        <b>{greettext} Admin</b>{" "}
      </h5>

      <Box>
      </Box>
    </React.Fragment>
  );
}
