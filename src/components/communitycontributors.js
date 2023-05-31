import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import sectionfivedivider from "./../assets/sectionfivedivider.png";
import contributorsone from '../assets/contributorsone.png';
import contributorstwo from '../assets/contributorstwo.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    imgPath: contributorsone,
  },
  {
    imgPath: contributorstwo,
  },
];
export default function Homecomtributors() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }} className="p-t-84">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              src={sectionfivedivider}
              alt="divider"
              className="sectiontwodivider"
            />
          </Grid>
        </Grid>
        <Grid container className="p-t-40 align-center-section" spacing={0}>
          <Grid item xs={8}>
            <p className="section-header-title ">{"Community Contributors"}</p>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ maxWidth: '100%', flexGrow: 1 }} className="p-t-40">
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: '100%',
                  display: 'block',
                  maxWidth: '100%',
                  minWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    
    </Box>
    </React.Fragment>
  );
}
