import React from "react";
// import CarousalSection from '../components/carousalsection';
import Ourmissionsection from '../components/ourmissionsection';
// import HomeOurleader from '../components/ourleaders';
import HomeProgramssection from '../components/homeprogramsection';
import Homecomtributors from '../components/communitycontributors';
export default function Homepage() {
  return <React.Fragment>
    <div className="home-page-section">
    <Ourmissionsection/>
    {/* <HomeOurleader/> */}
    <HomeProgramssection/>
    <Homecomtributors/>
    </div>
    {/* <CarousalSection/> */}
   
  </React.Fragment>;
}
