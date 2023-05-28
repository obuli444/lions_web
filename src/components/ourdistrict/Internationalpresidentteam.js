import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CommonHeader from "../ourdistrict/commonheader";

import { useFetchCollection } from "../getfirebasedata";
// Images import
import Briansheehan from "../../assets/Briansheehan.png";
import Douglas from "../../assets/Douglas.png";
import pattihil from "../../assets/Pattihill.png";
import Oliveira from "../../assets/Oliveira.png";
import Apsingh from "../../assets/Apsingh.png";
export default function Internationpresidentteam() {
  const { fbdbdata: ourdistrictlogo } = useFetchCollection("ourdistrictlogo");

  return (
    <React.Fragment>
      <CommonHeader
        details={{
          formaltitle: "",
          name: "International President Team",
          designation: "",
        }}
      />
      {/* Section One */}
      <Box sx={{ flexGrow: 1 }} className="p-a-0 details-info-sectiontwo">
        <Grid container spacing={2} className="p-a-84  m-t-05">
          <Grid item xs={12} md={6} sm={12}>
            <img
              src={Briansheehan}
              alt={"Briansheehan"}
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
                  </tr>
                  <tr>
                    <td className="p-l-24">
                      <p className="m-a-0 ourdistrict-main-p main-p-color">
                        {"Brian Sheehan"}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-l-24">
                      <p className="m-a-0 designation-p">
                        {"International President"}
                      </p>
                    </td>
                  </tr>
                </table>
              </Grid>
              <Grid item xs={12} md={12} sm={12} className="p-l-24">
                <p className="m-a-0 designation-p">
                  Douglas X. Alexander, from Brooklyn, New York, USA, was
                  elected to serve as international president of Lions Clubs
                  International at the association’s 103rd International
                  Convention, June 25 through June 29, 2021. As of June 28,
                  2022, he will serve as Chairperson for Lions Clubs
                  International Foundation (LCIF) through July 11, 2023.
                  <br />
                  <br />
                  Past International President Alexander is a retired vice
                  president for J.P. Morgan Chase Bank
                  <br />
                  <br />A member of the Brooklyn Bedford Stuyvesant Lions Club
                  since 1984, he has held many offices within the association,
                  including club president, zone chair, region chair, vice
                  district governor, district governor, cabinet secretary,
                  cabinet treasurer and DGE group leader.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* Section two */}
      <Box sx={{ flexGrow: 1 }} className="p-a-0 details-info-sectionthree">
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
                  </tr>
                  <tr>
                    <td className="p-l-24">
                      <p className="m-a-0 ourdistrict-main-p main-p-color">
                        {"Douglas X. Alexander"}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-l-24">
                      <p className="m-a-0 designation-p">
                        {
                          " Immediate Past International President, LCIF Chairperson"
                        }
                      </p>
                    </td>
                  </tr>
                </table>
              </Grid>
              <Grid item xs={12} md={12} sm={12}>
                <p className="m-a-0 designation-p">
                  Douglas X. Alexander, from Brooklyn, New York, USA, was
                  elected to serve as international president of Lions Clubs
                  International at the association’s 103rd International
                  Convention, June 25 through June 29, 2021. As of June 28,
                  2022, he will serve as Chairperson for Lions Clubs
                  International Foundation (LCIF) through July 11, 2023.
                  <br />
                  <br />
                  Past International President Alexander is a retired vice
                  president for J.P. Morgan Chase Bank
                  <br />
                  <br />A member of the Brooklyn Bedford Stuyvesant Lions Club
                  since 1984, he has held many offices within the association,
                  including club president, zone chair, region chair, vice
                  district governor, district governor, cabinet secretary,
                  cabinet treasurer and DGE group leader.
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <img
              src={Douglas}
              alt={"Douglas X. Alexander"}
              className="w-100 border-radius-8"
            />
          </Grid>
        </Grid>
      </Box>
      {/* Section Three */}
      <Box sx={{ flexGrow: 1 }} className="p-a-0 deatils-info-ourmentor">
        <Grid container spacing={2} className="p-a-84  m-t-05">
          <Grid item xs={12} md={6} sm={12}>
            <img
              src={pattihil}
              alt={"pattihil"}
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
                  </tr>
                  <tr>
                    <td className="p-l-24">
                      <p className="m-a-0 ourdistrict-main-p main-p-color">
                        {"Dr. Patti Hill"}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-l-24">
                      <p className="m-a-0 designation-p">
                        {"International First Vice President"}
                      </p>
                    </td>
                  </tr>
                </table>
              </Grid>
              <Grid item xs={12} md={12} sm={12} className="p-l-24">
                <p className="m-a-0 designation-p">
                  Dr. Patti Hill from Edmonton, Alberta, Canada was elected to
                  serve as first vice president of Lions Clubs International at
                  the association’s 104th International Convention, June 22
                  through June 28, 2022.
                  <br />
                  <br />
                  Past International President Alexander is a retired vice
                  president for J.P. Morgan Chase BankVice President Hill is
                  president of a consulting firm. With 30 years of experience as
                  a psychologist, she has mentored graduate students and
                  psychologists in training. She has also championed the rights
                  of children and youth who are deaf and/or blind.
                  <br />
                  <br />A member of the Edmonton Host Lions Club since 1990,
                  Vice President Hill has held many offices within the
                  association, including district chairperson for Membership,
                  Environment, Convention and International Cooperation and
                  Understanding.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* Section Four */}
      <Box sx={{ flexGrow: 1 }} className="p-a-0 details-info-sectionfour">
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
                  </tr>
                  <tr>
                    <td className="p-l-24">
                      <p className="m-a-0 ourdistrict-main-p main-p-color">
                        {"Fabrício Oliveira"}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-l-24">
                      <p className="m-a-0 designation-p">
                        {"International Second Vice President"}
                      </p>
                    </td>
                  </tr>
                </table>
              </Grid>
              <Grid item xs={12} md={12} sm={12}>
                <p className="m-a-0 designation-p">
                  Fabrício Oliveira of Catolé do Rocha, Paraiba, Brazil, was
                  elected to serve as second vice president of Lions Clubs
                  International at the association’s 104th International
                  Convention, June 22 through June 28, 2022.
                  <br />
                  <br />
                  Vice President Fabrício is a businessman, with a Post-Graduate
                  Degree in Business Administration (MBA) from Fundação Getúlio
                  Vargas (FGV), and a Degree in Administration
                  <br />
                  <br />
                  member of the Catolé do Rocha Lions Club since 1985, Vice
                  President Fabrício has held many offices within the
                  association, including club president, zone chairperson,
                  region chairperson, district governor, council chairperson,
                  and international director.
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <img
              src={Oliveira}
              alt={"Fabrício Oliveira"}
              className="w-100 border-radius-8"
            />
          </Grid>
        </Grid>
      </Box>
      {/* Section Five */}

      <Box sx={{ flexGrow: 1 }} className="p-a-0 details-info-sectionfive">
        <Grid container spacing={2} className="p-a-84  m-t-05">
          <Grid item xs={12} md={6} sm={12}>
            <img
              src={Apsingh}
              alt={"Apsingh"}
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
                  </tr>
                  <tr>
                    <td className="p-l-24">
                      <p className="m-a-0 ourdistrict-main-p main-p-color">
                        {"A.P.Singh"}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-l-24">
                      <p className="m-a-0 designation-p">
                        {" International Third Vice President"}
                      </p>
                    </td>
                  </tr>
                </table>
              </Grid>
              <Grid item xs={12} md={12} sm={12} className="p-l-24">
                <p className="m-a-0 designation-p">
                  A. P. Singh, of Kolkata, India, was elected to serve as third
                  vice president of Lions Clubs International at the
                  association’s 104th International Convention, June 22 through
                  June 28, 2022.
                  <br />
                  <br />
                  Vice President Singh is a practicing chartered accountant and
                  has family business interests in automobile dealerships.
                  <br />
                  <br />A Lion since 1984 and a member of the Calcutta Vikas
                  Lions Club, Vice President Singh has held many positions
                  within the association, including district governor and
                  council chairperson. He has served as GMT international
                  coordinator for four years and as a member on a number of ad
                  hoc board committees.
                  <br />
                  <br />
                  Vice President Singh has participated in and presented
                  seminars at Area Forums in all constitutional areas. He was
                  the co-chairperson of the Organizing Committee for the ISAAME
                  Forum in Kolkata, India
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
