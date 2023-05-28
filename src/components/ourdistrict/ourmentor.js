import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CommonHeader from "../ourdistrict/commonheader";
import { useFetchCollection } from "../getfirebasedata";
import ourmentorheaderimg from "../../assets/ourmentorheader.png";
export default function Ourmentor() {
  const { fbdbdata: ourdistrictourmentor } = useFetchCollection(
    "ourdistrict-ourmentor"
  );
  const { fbdbdata: ourdistrictlogo } = useFetchCollection("ourdistrictlogo");

  return (
    <React.Fragment>
      {ourdistrictourmentor !== null && (
        <CommonHeader
          details={{
            formaltitle: ourdistrictourmentor[0].formaltitle,
            name: ourdistrictourmentor[0].name,
            designation: ourdistrictourmentor[0].designation,
          }}
        />
      )}
      <Box sx={{ flexGrow: 1 }} className="p-a-0">
        <Grid container spacing={0}>
          <Grid item xs={12} md={12} sm={12}>
            <img
              src={ourmentorheaderimg}
              className="w-100"
              alt={
                ourdistrictourmentor !== null
                  ? ourdistrictourmentor[0].name
                  : ""
              }
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className="p-a-0 deatils-info-ourmentor">
        <Grid container spacing={2} className="p-a-84">
          <Grid item xs={12} md={6} sm={12}>
            {ourdistrictourmentor !== null && (
              <img
                src={ourdistrictourmentor[0].detailsimage}
                alt={ourdistrictourmentor[0].name}
                className="w-100 border-radius-8"
              />
            )}
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <Grid container spacing={2} className="">
              <Grid item xs={12} md={12} sm={12}>
                <table>
                  <tr>
                    <td rowspan="3">
                      {ourdistrictlogo !== null && (
                        <img
                          src={ourdistrictlogo[0].internationallogo}
                          alt={"internationallogo"}
                          className="w-100"
                        />
                      )}
                    </td>
                    <td className="p-l-24">
                      <p className="m-a-0 programs-description-text">
                        {ourdistrictourmentor !== null &&
                          ourdistrictourmentor[0].formaltitle}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-l-24">
                      <p className="m-a-0 ourdistrict-main-p main-p-color">
                        {ourdistrictourmentor !== null &&
                          ourdistrictourmentor[0].name}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-l-24">
                      <p className="m-a-0 designation-p">
                        {ourdistrictourmentor !== null &&
                          ourdistrictourmentor[0].designation}
                      </p>
                    </td>
                  </tr>
                </table>
              </Grid>
              <Grid item xs={12} md={12} sm={12} className="p-l-24">
                <p className="m-a-0 designation-p">
                  Past International Director G. Ramaswamy "GR" lives in
                  Coimbatore, India. A member of the Annur Town Lions Club since
                  1985, he has served as Club President, Zone Chairperson,
                  Deputy District Governor and District Governor.
                  <br />   <br />
                  He was an international Director from 1996 to 1998. He has
                  served as LCIF, Sight First and Convention Chairman for
                  Multiple District, Chairperson of the All India District
                  Governors Schooling. In the International Convention
                  Credential Committee thrice, Nominating Committee, Resolution
                  Committee as vice Chairperson and as a Board Committee
                  Appointee for bons dubs international in 1999-2000.<br/><br /> He has
                  sponsored 936 new Lion Members, He has received numerous
                  awards including the 100% Club President Award, the 100%
                  District Governor Award, Guiding Lion Award, Three
                  International President's Certificates of Appreciation,
                  Seventeen International President's Award and an Ambassador of
                  Good Will Awardee, the Highest Honour Granted by the
                  Association to its members. He is also a Progressive Melvin
                  Jones Fellow with 30 Diamonds and a lead gift Donor. He was
                  appointed as International Board Appointee by the
                  International President Naresh Aggarwal in the Year 2017-2018.
                  G. Ramaswamy is an Industrialist, who is profoundly known as
                  'GR, GR' is a member of the well known KG Group of Companies
                  worth US$500 Million Having an annual turnover of US$ 500
                  Million. GR's achievements and contributions towards
                  "educational and religious field" have earned him a Cavalier
                  recognition, His contribution towards the "Development of
                  Small Scale Industries and Management Techniques" has earned
                  him a Doctorate in Industrial Management.<br/>   <br /> His wife Shanthamani
                  is a Progressive Melvin Jones Fellow. His two sons and
                  daughters-in-law are Melvin Jones Fellow and all are Lion
                  Members. He is blessed with three grand children. Every Lions
                  should feel proud that our great Leader 'GR. proved to be
                  liberal donor by promising to contribute One Lakh (100000$)
                  dollars in five years to "LCIF Campaign 100" He has
                  contributed 20000$ dollars as first instalment in July 2019
                  and 2000$ as second instalment in July 2020 and was honoured
                  as <b>"LEAD GIFT DONOR"</b>.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
