import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CommonHeader from "../ourdistrict/commonheader";
import { useFetchCollection } from "../getfirebasedata";
import mohanheaderimage from '../../assets/mohanheaderimage.png';
import mohandetailsimage from '../../assets/mohandetailsimage.png';
import johnpeterimage from '../../assets/johnpeterimage.png';
import sundharam from '../../assets/sundharamimage.png';
export default function Governorsteam() {
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
            name: "R. Mohankumar",
            designation: "District Governor",
          }}
        />
      )}
      <Box sx={{ flexGrow: 1 }} className="p-a-0">
        <Grid container spacing={0}>
          <Grid item xs={12} md={12} sm={12}>
            <img
              src={mohanheaderimage}
              className="w-100"
              alt={
                "R. Mohankumar"
              }
            />
          </Grid>
        </Grid>
      </Box>
     
      <Box sx={{ flexGrow: 1 }} className="p-a-0 deatils-info-ourmentor">
        <Grid container spacing={2} className="p-a-84">
          <Grid item xs={12} md={6} sm={12}>
              <img
                src={mohandetailsimage}
                alt={"R. Mohankumar"}
                className="w-100 border-radius-8"
              />
            
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <Grid container spacing={2} className="">
              <Grid item xs={12} md={12} sm={12}>
                <table>
                  <tr>
                    <td rowSpan="3">
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
                        {"R. Mohankumar"}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-l-24">
                      <p className="m-a-0 designation-p">
                        {"District Governor"}
                      </p>
                    </td>
                  </tr>
                </table>
              </Grid>
              <Grid item xs={12} md={12} sm={12} className="p-l-24">
                <p className="m-a-0 designation-p">
                  PMJF R. Mohankumar, Son of (Late) Mr. P Rathinaswamy & Mrs. R.
                  Ruckmani was born on February 03, 1970 in Coimbatore.<br/><br/> After
                  completing his schooling at RKS Ka Nilayam, he went on to
                  pursue his Diploma in VLB Janakiammal Polytechnic, Coimbatore.
                  Married to MJF M. Nirmala on August 27, 1998 and blessed with
                  two daughters Lion M. Shamyukthaa and M.N. Dhakshithaa.<br/><br/> PMJF
                  R.Mohankumar officiates as the Founder, Managing Director of
                  Cheran Machines India Private Limited-Textile Garment Printing
                  Machine Manufacturers & Exporters Having stayed in the
                  industry for 29 years, he has strived todiversity and grow his
                  business across regions and nations.<br/><br/>  Joined Lionism in the year
                  2000, as a member of Lions Club of Annur Town, Mohankumar has
                  involved himself in vanous service programmes and activities.
                  Being a catalyst in organising diverse health camps and
                  donation drives, he has always committed to the Lion motto of
                  serving the community.<br/><br/>  Lion R. Mohankumar has served in
                  various positions at the Club and District Levels. He was
                  positioned as the Treasure Secretary, President and the
                  Director of the Club. He later was promoted as the LCIF
                  Coordinator in the years that came At the District Level, Lion
                  R.Mohankumar served as the District Chairperson, Zone
                  Chairperson, Region Chairperson, GLT Coordinator and Cabinet
                  Treasurer. <br/><br/> The leader has held various positions as the
                  Observer at Youth Assembly, the United Nations, Member at
                  Masonic, The Grand Lodge of India, Member at CODISSIA, Member
                  at SGIA, India and as Trustee at LCI District 3240 Charitable
                  Trust and llango Educational Trust.<br/><br/>  Beneficiary of various
                  awards and accolades in the District and the International
                  levels remarkably, International President Leadership Medals,
                  RC Par Excellence Award Outstanding Zone Chairperson, Best
                  District Chairperson and other Appreciation awards.<br/><br/>  Attended
                  various Lion activities including RLLI, ALLI, TTW, RDI
                  Multiple Conventions, ISSAME Forum & International Convention.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* Section two */}
      <Box sx={{ flexGrow: 1 }} className="p-a-0 details-info-sectiontwo">
        <Grid container spacing={2} className="p-a-84 m-t-05">
        <Grid item xs={12} md={6} sm={12}>
            <Grid container spacing={2} className="">
              <Grid item xs={12} md={12} sm={12}>
                <table>
                  <tr>
                    <td rowSpan="3">
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
                        {"P. JOHN PETER"
                         }
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-l-24">
                      <p className="m-a-0 designation-p">
                        {"Past District Governor"}
                      </p>
                    </td>
                  </tr>
                </table>
              </Grid>
              <Grid item xs={12} md={12} sm={12}>
                <p className="m-a-0 designation-p">
                P. John Peter, who was inducted into the Lions Movement by former Governor Vincent Vedaraj in 1998-99, served as PRO of the district in 2010-11.<br/><br/>
                He is a special addition to this Lions district by serving as the District Treasurer in 2011-12. Apart from that, he has performed very well in various responsibilities as the District President over the years. <br/><br/>
                In 2014-15, P. John Peter who took over as the Independence Day District President, hoisted National Flag along with the portraits of 126 national leaders for a 3 1/2 kilometer stretch on the Coimbatore Race course. The exhibit was a milestone event in the history of our Lions District.<br/><br/>
                GLT Co ordinator of the district in 2017-18 and performed very well and did credit to that responsibility.
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
              <img
                src={johnpeterimage}
                alt={"P. JOHN PETER"}
                className="w-100 border-radius-8"
              />
            
          </Grid>
         
        </Grid>
      </Box>
      {/* Section Three */}
      <Box sx={{ flexGrow: 1 }} className="p-a-0 details-info-sectionthree">
        <Grid container spacing={2} className="p-a-84  m-t-05">
        <Grid item xs={12} md={6} sm={12}>
              <img
                src={sundharam}
                alt={"Shanmuga sundaram"}
                className="w-100 border-radius-8"
              />
            
          </Grid>
        <Grid item xs={12} md={6} sm={12}>
            <Grid container spacing={2} className="">
              <Grid item xs={12} md={12} sm={12}>
                <table>
                  <tr>
                    <td rowSpan="3">
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
                        {"Shanmuga sundaram"
                         }
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-l-24">
                      <p className="m-a-0 designation-p">
                        {"First Vice District Governor" }
                      </p>
                    </td>
                  </tr>
                </table>
              </Grid>
              <Grid item xs={12} md={12} sm={12} className="p-l-24">
                <p className="m-a-0 designation-p">
                Dr. N. Shanmugasundaram joined the Lions Movement in 1991 and served as Treasurer, Secretary, President for two terms and as a Director and has been a source of pride and growth for the association. He turned all his family members into MJF family, was the District President in Lions District and twice the Zonal President and took pride in conducting outstanding Zonal Meetings.<br/><br/>
                On the request of Governor MJF K. Guppusamy for the year 2021-22, the GLT Coordinator took charge and with the approval of the Governor, Presidents, Secretaries, Treasurers from around 80 associations conducted PST Schooling at Gem Park Hotel, Ooty in a never-before-seen manner. Local and ward leaders participated and benefited. <br/><br/>
                He organized the GAT Conclave training which was attended by 150 new members participated and trained at Co-India Auditorium in collaboration with GMT Coordinator.
                </p>
              </Grid>
            </Grid>
          </Grid>
        
         
        </Grid>
      </Box>
    </React.Fragment>
  );
}
