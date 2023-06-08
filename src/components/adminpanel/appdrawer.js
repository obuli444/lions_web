import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ContactsList from "../adminpanel/contactslist";
import Clublistpage from "../adminpanel/clublistpage";
import _ from "lodash";
import tenantlogo from '../../assets/tenant-logo.png';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const drawerWidth = 250;

export default function PermanentDrawerLeft() {
  const [selectedLink, setSelectedlink] = React.useState({title:'Home',
  component:'dashboardpage'});
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href='/admindashboard'>
   <i className="pi pi-home"></i>
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      <b>{`Manage ${selectedLink.title} details`}</b>
    </Link>,
  ];
  const componentList = [
    {
      title: "Clubs",
      component: "clublist",
    },
    {
      title: "Contact us",
      component: "contactus",
    },
    {
      title: "Become Member",
      component: "becomamember",
    },
  ];
  return (
    <Box sx={{ display: "flex" }}  className="admin-dashboard-sidenav">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
        
      >
        <Toolbar className="primary-admin-nav">
          <Typography variant="h6" noWrap component="div">
            Lions 324D
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        
        variant="permanent"
        anchor="left"
      >
        <Toolbar className="primary-admin-nav">
          <img src={tenantlogo} alt="lions-log" width={"200px"}></img>
          </Toolbar>
        <Divider />
        <List>
          {componentList.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  setSelectedlink(text);
                }}
              >
                <ListItemText className="admin-navlink" primary={text.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main" 
        className="p-t-84"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
         {selectedLink.component !== "dashboardpage" &&  <Breadcrumbs separator="›" className="p-b-24" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>}
        {console.log("selectedLink", selectedLink)}
        {selectedLink.component === "dashboardpage" && <p>dashboardpage</p>}
        {selectedLink.component === componentList[0].component && <Clublistpage />}
        {selectedLink.component === componentList[1].component && <ContactsList />}
      </Box>
    </Box>
  );
}
