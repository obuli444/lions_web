import React from "react";
import CarousalSection from '../components/carousalsection';
import Ourmissionsection from '../components/ourmissionsection';
import HomeOurleader from '../components/ourleaders';
import HomeProgramssection from '../components/homeprogramsection';
import Homecomtributors from '../components/communitycontributors';
// import Hometwittersection from '../components/hometwittersection';
export default function Homepage() {
  return <React.Fragment>
    <div className="routing-content">
    <CarousalSection/>
    <div className="home-page-section">
    <Ourmissionsection/>
    <HomeOurleader/>
    <HomeProgramssection/>
    <Homecomtributors/>
    {/* <Hometwittersection/> */}
    </div>
    </div>
    
    
   
  </React.Fragment>;
}
