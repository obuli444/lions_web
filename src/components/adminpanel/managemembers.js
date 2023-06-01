import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Form from 'react-bootstrap/Form';

import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router-dom";
import { useFetchCollection } from "../getfirebasedata";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import AppToast from '../common-components/apptoast';


export default function Managemembers() {
  const { fbdbdata: clubmemberdetails } =
    useFetchCollection("club-memberdetails");
  console.log("clubmemberdetails", clubmemberdetails);
  const location = useLocation();
  const [showAddmember, setAddmember] = useState(false);
  const [profileImage,setProfile] = useState(null);
  const [showaddSuccess,setAddsuccess] =  useState(false);
  console.log("location", location);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/clublist">
      Manage Clubs
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      <b>Manage {location.state.data.clubname} Members</b>
    </Link>,
  ];
  async function onSubmit(data) {
    console.log("data", data);
    let collectionRef = collection(db, "club-memberdetails");
    const {
      firstname,
      lastname,
      memberid,
      bloodgroup,
      phoneno,
      emailid,
      occupation,
      dob,
      anniversarydt,
      gender,
      address,
      about,
      position,
      businessname,
      worklocation,
      workmailid,
      workphoneno,
    } = data;
    await addDoc(collectionRef, {
      firstname,
      lastname,
      memberid,
      bloodgroup,
      phoneno,
      emailid,
      occupation,
      dob,
      anniversarydt,
      gender,
      address,
      about,
      position,
      businessname,
      worklocation,
      workmailid,
      workphoneno,
      profileimage: profileImage,
      status: "Active",
      mappedclub: location.state?.data?.clubno,
      clubdetails: {
        clabname: location.state?.data?.clubname,
        clubno:location.state?.data?.clubno,
      },
      createdat: new Date()
    });
    reset();
    setAddmember(false);
    setTimeout(() => {
      setAddmember(false);
    }, 3000);
  }
  const footerContent = (
    <div>
      <Row className="p-b-16 float-left">
        <Col className="p-a-0 p-t-24 p-l-12">
          <input
            value={"Save"}
            type="submit"
            className="contactus-sendbtn"
            form="addmembersform"
          />
        </Col>
      </Row>
    </div>
  );
  return (
    <React.Fragment>
       {showaddSuccess&&  
     <AppToast showAleart={showaddSuccess} icon="mgc_check_circle_fill" message={`Member Added Successfully`} />}
      <Stack spacing={2} className="p-a-24">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      {!_.isNil(clubmemberdetails) &&
      clubmemberdetails.filter(
        (ele) => ele.mappedclub === location.state?.data?.clubno
      ).length !== 0 ? (
        ""
      ) : (
        <Box sx={{ flexGrow: 1 }} className="managemembe-empty">
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <p className="m-a-0 primary-color">
                No {location.state?.data?.clubname} Members Found
              </p>
            </Grid>
            <Grid item xs={6} md={4} className="p-a-0">
              <Button
                label="Add new member"
                icon="pi pi-plus"
                className="float-right"
                onClick={() => {
                  setAddmember(true);
                }}
              />
            </Grid>
          </Grid>
        </Box>
      )}
      <Dialog
        header={`Add members to ${location.state?.data?.clubname} Club`}
        visible={showAddmember}
        style={{ width: "60vw" }}
        onHide={() => setAddmember(false)}
        footer={footerContent}
      >
        <Box sx={{ flexGrow: 1 }} className="">
          <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
              <Container className={"m-a-0"}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  autoComplete="off"
                  id="addmembersform"
                >
                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="firstname">First name</label>
                      </div>
                      <div className="">
                        <input
                          className="form-control"
                          type="text"
                          {...register("firstname", {
                            required: true,
                          })}
                          id="firstname"
                          placeholder="First name"
                        />
                        {errors.firstname && (
                          <span className="error-span">
                            First name is required
                          </span>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="lastname">Last Name</label>
                      </div>
                      <div className="">
                        <input
                          className="form-control"
                          type="text"
                          {...register("lastname", {
                            required: true,
                          })}
                          id="lastname"
                          placeholder="Last Name"
                        />
                        {errors.lastname && (
                          <span className="error-span">
                            Last Name is required
                          </span>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="memberid">Member Id</label>
                      </div>
                      <div className="">
                        <input
                          className="form-control"
                          type="text"
                          {...register("memberid", {
                            required: true,
                          })}
                          id="memberid"
                          placeholder="Member Id"
                        />
                        {errors.memberid && (
                          <span className="error-span">
                            Member Id is required
                          </span>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="bloodgroup">Blood Group</label>
                      </div>
                      <div className="">
                        <input
                          className="form-control"
                          type="text"
                          {...register("bloodgroup", {
                            required: true,
                          })}
                          id="bloodgroup"
                          placeholder="Blood Group"
                        />
                        {errors.bloodgroup && (
                          <span className="error-span">
                            Blood Group is required
                          </span>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="phoneno">Phone No</label>
                      </div>
                      <div className="">
                        <input
                          className="form-control"
                          type="text"
                          {...register("phoneno", {
                            required: true,
                          })}
                          id="phoneno"
                          placeholder="Phone No"
                        />
                        {errors.phoneno && (
                          <span className="error-span">
                            Phone No is required
                          </span>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="emailid">Email Id</label>
                      </div>
                      <div className="">
                        <input
                          className="form-control"
                          type="email"
                          {...register("emailid", {
                            required: true,
                          })}
                          id="emailid"
                          placeholder="Email Id"
                        />
                        {errors.emailid && (
                          <span className="error-span">
                            Email Id is required
                          </span>
                        )}
                      </div>
                    </Col>
                  </Row>

                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="occupation">Occupation</label>
                      </div>
                      <div className="">
                        <input
                          className="form-control"
                          type="text"
                          {...register("occupation", {
                            required: true,
                          })}
                          id="occupation"
                          placeholder="Occupation"
                        />
                        {errors.occupation && (
                          <span className="error-span">
                            Occupation is required
                          </span>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="dob">Date of Birth</label>
                      </div>
                      <div className="">
                        <input
                          className="form-control"
                          type="date"
                          {...register("dob", {
                            required: true,
                          })}
                          id="dob"
                          placeholder="DOB"
                        />
                        {errors.dob && (
                          <span className="error-span">DOB is required</span>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="anniversarydt">Anniversary Date</label>
                      </div>
                      <div className="">
                        <input
                          className="form-control"
                          type="date"
                          {...register("anniversarydt", {
                            required: false,
                          })}
                          id="anniversarydt"
                          placeholder="anniversarydt"
                        />
                        {errors.anniversarydt && (
                          <span className="error-span">
                            Anniversary Date is required
                          </span>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="gender">Gender</label>
                      </div>
                      <div className="">
                        <Form.Select
                          aria-label="Select Gender"
                          id="gender"
                          {...register("gender", {
                            required: true,
                          })}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                        </Form.Select>
                        {errors.gender && (
                          <span className="error-span">
                            Guiding Lions is required
                          </span>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="address">Address</label>
                      </div>
                      <div className="">
                        <Form.Control
                          as="textarea"
                          {...register("address", {
                            required: false,
                          })}
                          id="address"
                          placeholder="Address"
                          style={{ height: "100px" }}
                        />
                        {errors.address && (
                          <span className="error-span">
                            Address is required
                          </span>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="about">About Member</label>
                      </div>
                      <div className="">
                        <Form.Control
                          as="textarea"
                          {...register("about", {
                            required: false,
                          })}
                          id="about"
                          placeholder="About Member"
                          style={{ height: "100px" }}
                        />
                        {errors.about && (
                          <span className="error-span">
                            About Member is required
                          </span>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="position">Member's Position</label>
                      </div>
                      <div className="">
                        <Form.Select
                          aria-label="Select Member's Position"
                          id="position"
                          {...register("position", {
                            required: true,
                          })}
                        >
                          <option value="">Select Member's Position</option>
                          <option value="President">President</option>
                          <option value="Secretary">Secretary</option>
                          <option value="Treasurer">Treasurer</option>
                          <option value="Charter Member">Charter Member</option>
                        </Form.Select>
                        {errors.position && (
                          <span className="error-span">Member's Position</span>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="profileimage">Profile Image</label>
                      </div>
                      <div className="">
                        <input
                          className="form-control"
                          type="file"
                          id="profileimage"
                          placeholder="Profile Image"
                          accept="image/*"
                          onChange={(e) => {
                            const selectedfile = e.target.files;
                            if (selectedfile.length > 0) {
                              const [imageFile] = selectedfile;
                              const fileReader = new FileReader();
                              fileReader.onload = () => {
                                const srcData = fileReader.result;
                                setProfile(srcData)
                              };
                              fileReader.readAsDataURL(imageFile);
                            }
                          }}
                        />
                        {errors.profileimage && (
                          <span className="error-span">
                            Profile Image is required
                          </span>
                        )}
                      </div>
                    </Col>
                  </Row>
                  {/*  */}
                  <hr></hr>
                  <Row className="p-b-16">
                    <Col className="p-a-0">
                      <p>
                        <b>Work / Business Info</b>
                      </p>
                    </Col>
                  </Row>

                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="businessname">Business Name</label>
                      </div>
                      <div className="">
                        <input
                          className="form-control"
                          type="text"
                          {...register("businessname", {
                            required: false,
                          })}
                          id="businessname"
                          placeholder="Business Name"
                        />
                        {errors.businessname && (
                          <span className="error-span">
                            Business Name is required
                          </span>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="workmailid">Business Mail id</label>
                      </div>
                      <div className="">
                        <input
                          className="form-control"
                          type="email"
                          {...register("workmailid", {
                            required: false,
                          })}
                          id="workmailid"
                          placeholder="Business Mail id"
                        />
                        {errors.workmailid && (
                          <span className="error-span">
                            Business Mail id is required
                          </span>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="workphoneno">Business Contact no</label>
                      </div>
                      <div className="">
                        <input
                          className="form-control"
                          type="text"
                          {...register("workphoneno", {
                            required: false,
                          })}
                          id="workphoneno"
                          placeholder="Business Contact no"
                        />
                        {errors.workphoneno && (
                          <span className="error-span">
                            Business Contact no is required
                          </span>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-b-16">
                    <Col className="p-a-0 col-12">
                      <div className="p-b-8">
                        <label htmlFor="worklocation">Business Location Address</label>
                      </div>
                      <div className="">
                        <Form.Control
                          as="textarea"
                          {...register("worklocation", {
                            required: false,
                          })}
                          id="worklocation"
                          placeholder="Business Location Address"
                          style={{ height: "100px" }}
                        />
                        {errors.worklocation && (
                          <span className="error-span">
                            Business Location Address is required
                          </span>
                        )}
                      </div>
                    </Col>
                  </Row>
                </form>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
