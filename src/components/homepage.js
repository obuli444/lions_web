import React from "react";
// import CarousalSection from '../components/carousalsection';
import Ourmissionsection from '../components/ourmissionsection';
import HomeOurleader from '../components/ourleaders';
import ProgramandInitiatives from '../components/programandinitiativespage';
export default function Homepage() {
  return <React.Fragment>
    <div className="home-page-section">
    <Ourmissionsection/>
    <HomeOurleader/>
    <ProgramandInitiatives/>
    </div>
    {/* <CarousalSection/> */}
   
  </React.Fragment>;
}
