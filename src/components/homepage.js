import React, { useState } from "react";
import CarousalSection from '../components/carousalsection';
import Ourmissionsection from '../components/ourmissionsection';
import HomeOurleader from '../components/ourleaders';
import HomeProgramssection from '../components/homeprogramsection';
import Homecomtributors from '../components/communitycontributors';
import { useFetchCollection } from "../components/getfirebasedata";
import AppCommonCollections from '../firebase/app-collections';
import AppSpinner from '../components/common-components/app-spinner';
// import Hometwittersection from '../components/hometwittersection';

export default function Homepage() {
  const { fbdbdata: homecarousaldeatsils } = useFetchCollection(AppCommonCollections.homepagecollections[7]);
  const [loading,setLoading] =  useState(true);
  setTimeout(()=>{
    setLoading(false);
  },4000);

  return (
    <React.Fragment>
      {loading ? (
        <AppSpinner />
      ) : (
        <div className="routing-content">
          {homecarousaldeatsils!==null&& <CarousalSection carousaldetails={homecarousaldeatsils} />}
          <div className="home-page-section">
            <Ourmissionsection />
            <HomeOurleader />
            <HomeProgramssection />
            <Homecomtributors />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
