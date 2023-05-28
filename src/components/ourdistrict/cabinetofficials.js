import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CommonHeader from "../ourdistrict/commonheader";
import viswanathanimage from "../../assets/Viswanathanimage.png";
import { useFetchCollection } from "../getfirebasedata";
import mahadevanimage from "../../assets/mahadevanimage.png";

export default function Cabinetofficials() {
  const { fbdbdata: ourdistrictlogo } = useFetchCollection("ourdistrictlogo");
  const cabinentslist = [
    {
      formtitle: "MJF Lion ",
      name: "Viswanathan",
      designation: "Cabinet Secretary",
      image: viswanathanimage,
    },
    {
      formtitle: "MJF Lion ",
      name: "Er. N. Mahadevan ",
      designation: "Cabinet Treasurer ",
      image: mahadevanimage,
    },
  ];
  return (
    <React.Fragment>
      <CommonHeader
        details={{
          formaltitle: "",
          name: "Cabinet Officials",
          designation: "",
        }}
      />
      <Box sx={{ flexGrow: 1 }} className="p-a-0">
        <Grid container spacing={2} className="p-a-84">
          {cabinentslist.length !== 0 &&
            cabinentslist.map((ele, index) => {
              return (
                <Grid item xs={12} md={6} sm={12} key={index}>
                  <Grid container spacing={3} className="p-a-0">
                    <Grid item xs={12} md={12} sm={12}>
                      <img src={ele.image} alt={ele.name} className="w-100" />
                    </Grid>
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
                              {ele.formtitle}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-l-24">
                            <p className="m-a-0 ourdistrict-main-p main-p-color">
                              {ele.name}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-l-24">
                            <p className="m-a-0 designation-p">
                              {ele.designation}
                            </p>
                          </td>
                        </tr>
                      </table>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </React.Fragment>
  );
}
