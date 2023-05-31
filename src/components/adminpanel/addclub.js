import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MultiSelect } from "primereact/multiselect";
import Base64Convertion from "../common-components/imagetobase64";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import diabetes from "../../assets/specialties/Diabetes.png";
import fundraiser from "../../assets/specialties/Fundraiser.png";
import vision from "../../assets/specialties/Vision.png";
import hunger from "../../assets/specialties/Hunger.png";
import environment from "../../assets/specialties/Environment.png";
import childcancer from "../../assets/specialties/Childcancer.png";

export default function ClubAddandEdit(props) {
  const [clublogourl, setclubLogo] = useState("");
  const [certificateurl, setCertificate] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState(null);

  const specialtieslist = [
    {
      name: "Diabetes",
      code: "diabetes",
      image: diabetes,
    },
    {
      name: "Fund raiser",
      code: "fundraiser",
      image: fundraiser,
    },
    {
      name: "Vision",
      code: "vision",
      image: vision,
    },
    {
      name: "Hunger",
      code: "hunger",
      image: hunger,
    },
    {
      name: "Environment",
      code: "environment",
      image: environment,
    },
    {
      name: "Child cancer",
      code: "childcancer",
      image: childcancer,
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  async function onSubmit(data) {
    console.log(data);
    let collectionRef = collection(db, "clubdetails");
    const {
      clubname,
      clubdistrict,
      chartedon,
      clubno,
      clubsponsered,
      extnchairpersion,
      guidinglions,
      meetinglocation,
      meetingdate,
      meetingtime,
    } = data;
    await addDoc(collectionRef, {
      clubname,
      clubdistrict,
      chartedon,
      clubno,
      clubsponsered,
      extnchairpersion,
      guidinglions,
      meetinglocation,
      meetingdate,
      meetingtime,
      clublogo: clublogourl,
      clubcirtificate: certificateurl,
      specialties: selectedSpecialties,
      status: "Active",
    });
    reset();
    setSelectedSpecialties(null);
  }


  return (
    <React.Fragment>
      <div className="card">
        <TabView>
          <TabPanel header="Club Details">
            <Box sx={{ flexGrow: 1 }} className="">
              <Grid container spacing={0}>
                <Grid item xs={12} md={12}>
                  <Container className={"m-a-0"}>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      autoComplete="off"
                      id="clubform"
                    >
                      <Row className="p-b-16">
                        <Col className="p-a-0 col-6">
                          <div className="p-b-8">
                            <label htmlFor="clubname">Club name</label>
                          </div>
                          <div className="">
                            <input
                              className="form-control"
                              type="text"
                              {...register("clubname", {
                                required: true,
                              })}
                              id="clubname"
                              placeholder="Club name"
                            />
                            {errors.clubname && (
                              <span className="error-span">
                                Club name is required
                              </span>
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row className="p-b-16">
                        <Col className="p-a-0 col-6">
                          <div className="p-b-8">
                            <label htmlFor="clubdistrict">Club District</label>
                          </div>
                          <div className="">
                            <input
                              className="form-control"
                              type="text"
                              {...register("clubdistrict", {
                                required: true,
                              })}
                              id="clubdistrict"
                              placeholder="Club District"
                            />
                            {errors.clubdistrict && (
                              <span className="error-span">
                                Club District is required
                              </span>
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row className="p-b-16">
                        <Col className="p-a-0 col-6">
                          <div className="p-b-8">
                            <label htmlFor="specialties">Specialties</label>
                          </div>
                          <div className="">
                            <MultiSelect
                              value={selectedSpecialties}
                              onChange={(e) => {
                                setSelectedSpecialties(e.value);
                              }}
                              options={specialtieslist}
                              optionLabel="name"
                              placeholder="Select Specialties"
                              maxSelectedLabels={3}
                              className="w-100"
                            />
                            {errors.specialties && (
                              <span className="error-span">
                                Specialties On is required
                              </span>
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row className="p-b-16">
                        <Col className="p-a-0 col-6">
                          <div className="p-b-8">
                            <label htmlFor="chartedon">Charted On</label>
                          </div>
                          <div className="">
                            <input
                              className="form-control"
                              type="date"
                              {...register("chartedon", {
                                required: true,
                              })}
                              id="chartedon"
                              placeholder="Charted On"
                            />
                            {errors.chartedon && (
                              <span className="error-span">
                                Charted On is required
                              </span>
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row className="p-b-16">
                        <Col className="p-a-0 col-6">
                          <div className="p-b-8">
                            <label htmlFor="clubno">Club No</label>
                          </div>
                          <div className="">
                            <input
                              className="form-control"
                              type="text"
                              {...register("clubno", {
                                required: true,
                              })}
                              id="clubno"
                              placeholder="Club No"
                            />
                            {errors.clubno && (
                              <span className="error-span">
                                Club No is required
                              </span>
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row className="p-b-16">
                        <Col className="p-a-0 col-6">
                          <div className="p-b-8">
                            <label htmlFor="clubsponsered">
                              Club Sponsered
                            </label>
                          </div>
                          <div className="">
                            <input
                              className="form-control"
                              type="text"
                              {...register("clubsponsered", {
                                required: false,
                              })}
                              id="clubsponsered"
                              placeholder="Club Sponsered"
                            />
                            {errors.clubsponsered && (
                              <span className="error-span">
                                Club Sponsered is required
                              </span>
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row className="p-b-16">
                        <Col className="p-a-0 col-6">
                          <div className="p-b-8">
                            <label htmlFor="extnchairpersion">
                              Extn.ChairPersion
                            </label>
                          </div>
                          <div className="">
                            <input
                              className="form-control"
                              type="text"
                              {...register("extnchairpersion", {
                                required: false,
                              })}
                              id="extnchairpersion"
                              placeholder="Club Sponsered"
                            />
                            {errors.extnchairpersion && (
                              <span className="error-span">
                                Club Sponsered is required
                              </span>
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row className="p-b-16">
                        <Col className="p-a-0 col-6">
                          <div className="p-b-8">
                            <label htmlFor="guidinglions">Guiding Lions</label>
                          </div>
                          <div className="">
                            <input
                              className="form-control"
                              type="text"
                              {...register("guidinglions", {
                                required: false,
                              })}
                              id="guidinglions"
                              placeholder="Guiding Lions"
                            />
                            {errors.guidinglions && (
                              <span className="error-span">
                                Guiding Lions is required
                              </span>
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row className="p-b-16">
                        <Col className="p-a-0 col-6">
                          <div className="p-b-8">
                            <label htmlFor="meetinglocation">
                              Meeting Location
                            </label>
                          </div>
                          <div className="">
                            <input
                              className="form-control"
                              type="text"
                              {...register("meetinglocation", {
                                required: false,
                              })}
                              id="meetinglocation"
                              placeholder="Meeting Location"
                            />
                            {errors.meetinglocation && (
                              <span className="error-span">
                                Meeting Location is required
                              </span>
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row className="p-b-16">
                        <Col className="p-a-0 col-6">
                          <div className="p-b-8">
                            <label htmlFor="meetingdate">Meeting Date</label>
                          </div>
                          <div className="">
                            <input
                              className="form-control"
                              type="date"
                              {...register("meetingdate", {
                                required: false,
                              })}
                              id="meetingdate"
                              placeholder="Meeting Date"
                            />
                            {errors.meetingdate && (
                              <span className="error-span">
                                Meeting Date is required
                              </span>
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row className="p-b-16">
                        <Col className="p-a-0 col-6">
                          <div className="p-b-8">
                            <label htmlFor="meetingtime">Meeting Time</label>
                          </div>
                          <div className="">
                            <input
                              className="form-control"
                              type="time"
                              {...register("meetingtime", {
                                required: false,
                              })}
                              id="meetingtime"
                              placeholder="Meeting Time"
                            />
                            {errors.meetingtime && (
                              <span className="error-span">
                                Meeting Time is required
                              </span>
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row className="p-b-16">
                        <Col className="p-a-0 col-6">
                          <div className="p-b-8">
                            <label htmlFor="clublogo">Club logo</label>
                          </div>
                          <div className="">
                            <input
                              className="form-control"
                              type="file"
                              {...register("clublogo", {
                                required: true,
                              })}
                              id="clublogo"
                              placeholder="Club logo"
                              accept="image/*"
                              onChange={(e) => {
                                // const confile = Base64Convertion(e.target.files);
                                const selectedfile = e.target.files;
                                if (selectedfile.length > 0) {
                                  const [imageFile] = selectedfile;
                                  const fileReader = new FileReader();
                                  fileReader.onload = () => {
                                    const srcData = fileReader.result;
                                    setclubLogo(srcData);
                                  };
                                  fileReader.readAsDataURL(imageFile);
                                }
                              }}
                            />
                            {errors.clublogo && (
                              <span className="error-span">
                                Club logo is required
                              </span>
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row className="p-b-16">
                        <Col className="p-a-0 col-6">
                          <div className="p-b-8">
                            <label htmlFor="clubcirtificate">
                              Club Certificate Image
                            </label>
                          </div>
                          <div className="">
                            <input
                              className="form-control"
                              accept="image/*"
                              type="file"
                              {...register("clubcirtificate", {
                                required: false,
                              })}
                              id="clubcirtificate"
                              placeholder="Club Certificate Image"
                              onChange={(e) => {
                                const selectedfile = e.target.files;
                                if (selectedfile.length > 0) {
                                  const [imageFile] = selectedfile;
                                  const fileReader = new FileReader();
                                  fileReader.onload = () => {
                                    const srcData = fileReader.result;
                                    setCertificate(srcData);
                                  };
                                  fileReader.readAsDataURL(imageFile);
                                }
                              }}
                            />
                            {errors.clubcirtificate && (
                              <span className="error-span">
                                Club Certificate Image logo is required
                              </span>
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row className="p-b-16">
                        <Col className="p-a-0 p-t-24">
                          <input
                            value={"Save"}
                            type="submit"
                            className="contactus-sendbtn"
                            form="clubform"
                          />
                        </Col>
                      </Row>
                    </form>
                  </Container>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
        </TabView>
      </div>
    </React.Fragment>
  );
}
