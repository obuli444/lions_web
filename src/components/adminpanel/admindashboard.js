import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Clublistpage from "../adminpanel/clublistpage";
import ContactsList from '../adminpanel/contactslist';


export default function Admindashboard() {
  return (
    <React.Fragment>
      <TabView>
        <TabPanel header="Manage Club Details" className="p-a-0">
            <Clublistpage/>
        </TabPanel>
        <TabPanel
          header="Manage Become Member Details"
          className="p-a-0"
        ></TabPanel>
        <TabPanel
          header="Manage Contactus Details"
          className="p-a-0"
        >
          <ContactsList/>
        </TabPanel>
      </TabView>
    </React.Fragment>
  );
}
