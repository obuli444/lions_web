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
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Tooltip } from "primereact/tooltip";
import "primeicons/primeicons.css";
import { InputText } from "primereact/inputtext";
import profileplaceholer from '../../assets/profile-placeholder.svg';
import { doc, updateDoc } from 'firebase/firestore';
import AppCommonCollections from "../../firebase/app-collections";

export default function Managemembers(props) {
  const { fbdbdata: clubmemberdetails } =
    useFetchCollection(AppCommonCollections.clubmembercollections[1]);
  const location = useLocation();
  const [showAddmember, setAddmember] = useState(false);
  const [profileImage, setProfile] = useState(null);
  const [showaddSuccess, setAddsuccess] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [visibleDeletemember, setDeleteMember] = useState(false);
  const [showDeleteAlert,setDeleteAlert]  = useState(false);

  const [selectedMember,setSelectedMember] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/admindashboard">
      Manage Clubs
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      <b>Manage {location.state?.data?.clubname} Members</b>
    </Link>,
  ];
  async function onSubmit(data) {
    let collectionRef = collection(db, AppCommonCollections.clubmembercollections[1]);
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
      profileimage: profileImage ? profileImage : null,
      status: "Active",
      mappedclub: location.state?.data?.clubno,
      clubdetails: {
        clabname: location.state?.data?.clubname,
        clubno: location.state?.data?.clubno,
      },
      createdat: new Date(),
    });
    reset();
    setAddmember(false);
    setAddsuccess(true);
    setTimeout(() => {
      setAddsuccess(false);
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
  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between w-100">
      <h4 className="m-0">Manage Members</h4>
      <span>
        <Button
          icon="pi pi-plus"
          rounded
          outlined
          className={"addnewmember m-l-16 m-r-16"}
          data-pr-tooltip="Add New Member"
          severity="success"
          label="Add New Member"
          onClick={() => {
            setAddmember(true);
          }}
        />
        <Tooltip target=".addnewmember" mouseTrack mouseTrackLeft={10} />

        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            type="search"
            onInput={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
          />
        </span>
      </span>
    </div>
  );

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag value={rowData.status} severity={getSeverity(rowData.status)}></Tag>
    );
  };
  const getSeverity = (status) => {
    switch (status) {
      case "Active":
        return "success";

      case "Inactive":
        return "danger";
      default:
        return null;
    }
  };
  const footerDeleteContent = (
    <div>
        <Button label="No" icon="pi pi-times" onClick={() => setDeleteMember(false)} className="p-button-text" />
        <Button label="Yes" icon="pi pi-check" onClick={() => DeleteMemberdetails()} autoFocus />
    </div>
);
 
function DeleteMemberdetails(){
  const docRef = doc(db, AppCommonCollections.clubmembercollections[1], selectedMember.id);
  let updatedObj = selectedMember;
  updatedObj["status"] = "Inactive";
  updateDoc(docRef, updatedObj);
  setDeleteMember(false);
  setDeleteAlert(true);
  setTimeout(() => {
    setDeleteAlert(false);
  }, 3000);
 setSelectedMember(null);

}

  const clubMemberTemplate = (rowdata) => {
    return (
      <React.Fragment>
        <img
          src={
            !_.isNil(rowdata.profileimage) && rowdata.profileimage !== ""
              ? rowdata.profileimage
              : profileplaceholer
          }
          alt={rowdata.firstname}
          width={"50px"}
        />
      </React.Fragment>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Tooltip target=".clubmembers" mouseTrack mouseTrackLeft={10} />
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="m-r-16 editclub"
          data-pr-tooltip="Edit Club"
          onClick={() =>{}}
        />
        {rowData.status !== null && rowData.status === "Active" && (
          <Button
            icon="pi pi-trash"
            rounded
            outlined
            className={"deletemember"}
            severity="danger m-r-16 "
            data-pr-tooltip="Delete Club"
            onClick={() => {
              setDeleteMember(true);
              setSelectedMember(rowData);
            }}
          />
        )}
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      {showaddSuccess && (
        <AppToast
          showAleart={showaddSuccess}
          icon="mgc_check_circle_fill"
          message={`Member Added Successfully`}
        />
      )}
      {showDeleteAlert&&  <AppToast showAleart={showDeleteAlert} icon="mgc_check_circle_fill" message={`Member Deleted Sucessfully`} />}
      {!_.isNil(clubmemberdetails) ? (
        <div className="card">
          <DataTable
            paginator
            rows={20}
            globalFilter={globalFilter}
            header={header}
            value={clubmemberdetails}
            showGridlines
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column
              field="profileimage"
              sortable
              header="PROFILE IMAGE"
              body={clubMemberTemplate}
            ></Column>
            <Column field="firstname" sortable header="FIRST NAME"></Column>
            <Column field="lastname" sortable header="LAST NAME"></Column>
            <Column field="bloodgroup" sortable header="BLOOD GROUP"></Column>
            <Column field="dob" sortable header="DATE OF BIRTH"></Column>
            <Column
              field="status"
              sortable
              header="STATUS"
              body={statusBodyTemplate}
            ></Column>
            <Column body={actionBodyTemplate} exportable={false}></Column>
          </DataTable>
        </div>
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
                          {...register("profileimage", {
                            required: true,
                          })}
                          placeholder="Profile Image"
                          accept="image/*"
                          onChange={(e) => {
                            const selectedfile = e.target.files;
                            if (selectedfile.length > 0) {
                              const [imageFile] = selectedfile;
                              const fileReader = new FileReader();
                              fileReader.onload = () => {
                                const srcData = fileReader.result;
                                setProfile(srcData);
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
                        <label htmlFor="worklocation">
                          Business Location Address
                        </label>
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
      {/* Delete Club */}
      <Dialog
        header={"Delete Member"}
        visible={visibleDeletemember}
        style={{ width: "30vw" }}
        onHide={() => setDeleteMember(false)}
        footer={footerDeleteContent}
      >
        <h4 className="m-0">Are you sure want to delete member ?</h4>
      </Dialog>
    </React.Fragment>
  );
}
