import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import locationicon from "../../assets/locationline.svg";
import phoneicon from '../../assets/phone_line.svg';

export default function Contactus() {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }} className="p-a-84">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={12} className="contact-us-sectionone">
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} sm={12}>
                <p className="section-header-title contactus-title">
                  Connect with us and join<br></br>
                  the roar of service
                </p>
              </Grid>
              <Grid item xs={12} md={12} sm={12}>
                <p className="contactus-subtitle">
                  We're always happy to hear from you. We believe in serving our
                  communities and making a positive impact on the world. If you
                  have any questions or comments about our club or our
                  activities, please don't hesitate to reach out to us.
                </p>
              </Grid>
              <Grid item xs={12} md={12} sm={12}></Grid>
              <Grid item xs={12} md={12} sm={12} className="p-t-0">
                <p className="our-office programs-header-title">Our Office</p>
              </Grid>
              <Grid item xs={12} md={12} sm={12} className="p-t-0">
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      title="contactmap"
                      class="gmap_iframe"
                      width="100%"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com/maps?width=600&amp;height=202&amp;hl=en&amp;q=2, Moonstone Apts, 65 E Linking Rd, Next To Standard Chartered Bank, Santacruz, Karnataka&amp;t=p&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={12} sm={12}>
                <table>
                  <tr>
                    <td valign="top">
                      <img src={locationicon}  alt="location icon"></img>
                    </td>
                    <td><p className="contactus-subtitle location-address">Lions club international District 324 - D</p></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><p className="contactus-subtitle location-address">2, Moonstone Apts, 65 E Linking Rd, Next To Standard Chartered Bank, Santacruz, Karnataka</p></td>
                  </tr>
                  <tr>
                    <td valign="top"> <img src={phoneicon} alt="phoneicon"></img></td>
                    <td><p className="contactus-subtitle location-address">7889455212</p></td>
                  </tr>
                </table>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} sm={12} className="contactus-sectiontwo"></Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
