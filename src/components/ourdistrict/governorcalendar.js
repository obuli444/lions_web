import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import { useFetchCollection } from "../getfirebasedata";

export default function Governorcalendar() {
//   const { fbdbdata: governercalendar } = useFetchCollection("governercalendar");

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }} className="p-a-0">
        <Grid container spacing={2} className="p-a-84">
          <Grid item xs={12} md={12} sm={12}>
          {
                  <iframe
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showTz=0&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&src=bGlvbnMzMjRkd2ViQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4tZ2IuaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
                    width="100%"
                    height="600"
                    frameborder="0"
                    scrolling="no"
                    title="governercalendar"
                  ></iframe>
                }
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
