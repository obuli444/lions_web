import React from "react";
// import CarousalSection from '../components/carousalsection';
import Ourmissionsection from '../components/ourmissionsection';
import HomeOurleader from '../components/ourleaders';
export default function Homepage() {
  return <React.Fragment>
    <div className="home-page-section">
    <Ourmissionsection/>
    <HomeOurleader/>
    </div>
    {/* <CarousalSection/> */}
   
  </React.Fragment>;
}
