import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { useFetchCollection } from "../getfirebasedata";
export default function Managemembers() {
    const { fbdbdata: clubmemberdetails } = useFetchCollection("club-memberdetails");
    console.log("clubmemberdetails",clubmemberdetails);
    const location = useLocation();
  console.log("location",location);
  return <React.Fragment></React.Fragment>;
}
