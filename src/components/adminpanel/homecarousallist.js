import React,{useState} from "react";
import { useFetchCollection } from "../getfirebasedata";
import AppCommonCollections from '../../firebase/app-collections';
import _ from 'lodash';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Message } from 'primereact/message';
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { Tooltip } from "primereact/tooltip";
import { Dialog } from "primereact/dialog";
import { Sidebar } from 'primereact/sidebar';
import { doc, updateDoc,deleteDoc } from 'firebase/firestore';
import { db } from "../../firebase/config";
import moment from "moment";
import Addedithomecarousal from './addeditcarousal';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';


export default function HomeCarousallist() {

    const { fbdbdata: homecarousaldeatsils } = useFetchCollection(AppCommonCollections.homepagecollections[7]);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [visibleaddSlider, setaddSlider] = useState(false);
    const [SelectedSlide,setSelectedSlide] =  useState(null);
    const [setdeleteslide,setDeleteSlide] = useState(false);
    const [playCarousal,setPlayCarousal] = useState(false);

    const statusBodyTemplate = (rowData) => {
      return (
        <Tag value={rowData.sliderstatus} severity={getSeverity(rowData.sliderstatus)}></Tag>
      );
    };

  const closePanel = (data) => {
    setaddSlider(data);
    setSelectedSlide(null);
  };
  const footerDeleteContent = (
    <div>
      <Button
        label="No"
        icon="pi pi-times"
        onClick={() => setDeleteSlide(false)}
        className="p-button-text"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        onClick={() => DeleteSlide()}
        autoFocus
      />
    </div>
  );

  function DeleteSlide(){
    const docRef = doc(db, AppCommonCollections.homepagecollections[7], SelectedSlide.id);
    let updatedObj = SelectedSlide;
    updatedObj["sliderstatus"] = "Inactive";
    updatedObj["statusbtnenabled"] = false;
    updateDoc(docRef,updatedObj);
    setDeleteSlide(false);
    // setDeleteAlert(true);
    // setTimeout(() => {
    //   setDeleteAlert(false);
    // }, 3000);
    setDeleteSlide(null);

  }

    const actionBodyTemplate = (rowData) => {
      return (
        <React.Fragment>
          <Tooltip target=".clubmembers" mouseTrack mouseTrackLeft={10} />
          <Tooltip target=".clubactivities" mouseTrack mouseTrackLeft={10} />
  <div className="align-items-center">
          <Button
            icon="pi pi-pencil"
            rounded
            outlined
            className="edit Slide"
            data-pr-tooltip="Edit Slide"
            severity="secondary"
            onClick={() => {
              setaddSlider(true);
              setSelectedSlide(rowData);
            }}
          />
          {rowData.sliderstatus !== null && rowData.sliderstatus === "Active" && (
            <Button
              icon="pi pi-trash"
              rounded
              outlined
              className={"deleteslider"}
              severity="secondary m-r-16 "
              data-pr-tooltip="Delete Slider"
              onClick={() => {
                setDeleteSlide(true);
                setSelectedSlide(rowData);
              }}
            />
          )}
          </div>
        </React.Fragment>
      );
    };
    const createdAtTemplate = (rowData) => {
      return (
        <React.Fragment>
          {!_.isNil(rowData.createdt)
            ? moment(rowData.createdt.toDate()).format("LLLL")
            : null}
        </React.Fragment>
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
    const sliderimageTemplate = (rowdata) => {
      return (
        <React.Fragment>
          <img src={rowdata.sliderimageurl} alt={rowdata.slidertitle} width={"120px"} />
        </React.Fragment>
      );
    };
    const header = (
      <div className="flex flex-wrap gap-2 align-items-center justify-content-between w-100">
      <h4 className="m-0">Manage Home Slider deatils</h4> 
        <span>
          {!_.isNil(homecarousaldeatsils) &&
          homecarousaldeatsils.filter((ele) => ele.sliderstatus === "Active")
            .length <= 4 ? (
            <Button
              icon="pi pi-plus"
              rounded
              outlined
              className={"addnewslider m-l-16 m-r-16"}
              data-pr-tooltip="Add New Slide"
              label="Add new slide"
              severity="success"
              onClick={() => {
                setSelectedSlide(null);
                setaddSlider(true);
              }}
            />
          ) : (
            <span className="m-r-16">Maximum Active Slides limit reached! </span>
          )}

          <Tooltip target=".addnewslider" mouseTrack mouseTrackLeft={10} />

          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              type="search"
              onInput={(e) => setGlobalFilter(e.target.value)}
              placeholder="Search..."
            />
          </span>
          <span>
        <Button
              icon="pi pi-play"
              rounded
              outlined
              className={"m-l-16"}
              label="Play Carousal"
              severity="help"
              onClick={() => {
                setPlayCarousal(true);
              }}
            />
        </span>
        </span>
      </div>
    );
  return (
    <React.Fragment>
      {!_.isNil(homecarousaldeatsils) ? (
        <div className="card">
          <DataTable
            paginator
            rows={10}
            globalFilter={globalFilter}
            header={header}
            value={homecarousaldeatsils}
            showGridlines
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column
              field="sliderimageurl"
              sortable
              header="SLIDER IMAGE"
              body={sliderimageTemplate}
            ></Column>
            <Column field="slidertitle" sortable header="SLIDER TITLE"></Column>
            <Column
              field="sliderdescription"
              sortable
              header="SLIDER DESCRIPTION"
            ></Column>
            <Column
              field="sliderstatus"
              sortable
              header="STATUS"
              body={statusBodyTemplate}
            ></Column>
            <Column
              field="createdt"
              sortable
              header="CREATED DATE"
              body={createdAtTemplate}
            ></Column>
            <Column body={actionBodyTemplate} exportable={false}></Column>
          </DataTable>
        </div>
      ) : (
        <Row>
          <Col className="col-9">
            <Message
              severity="info"
              className="w-100"
              text="No Records Found"
            />
          </Col>
          <Col>
            <Button
              icon="pi pi-plus"
              rounded
              outlined
              className={"addnewslider m-l-16 m-r-16"}
              data-pr-tooltip="Add New Club"
              severity="success"
              label="Add New Carousal"
              onClick={() => {
                setSelectedSlide(null);
                setaddSlider(true);
              }}
            />
          </Col>
        </Row>
      )}
      {visibleaddSlider && (
        <Sidebar
          visible={visibleaddSlider}
          position="right"
          onHide={() => setaddSlider(false)}
          style={{ width: "50vw" }}
          blockScroll={true}
          dismissable={false}
          header={"Add / Edit Carousal"}
        >
          <Addedithomecarousal
            selectedcarousal={SelectedSlide}
            closePanel={closePanel}
          />
        </Sidebar>
      )}
      {
        <Dialog
          header={"Delete Slide"}
          visible={setdeleteslide}
          style={{ width: "30vw" }}
          onHide={() => setDeleteSlide(false)}
          footer={footerDeleteContent}
          blockScroll={true}
        >
          <h4 className="m-0">Are you sure want to delete Slide ?</h4>
        </Dialog>
      }
      {playCarousal && (
        <Dialog
          header={"Slider Preview"}
          visible={playCarousal}
          style={{ width: "60vw"}}
          position={"top"}
          onHide={() => setPlayCarousal(false)}
          blockScroll={false}
          >
          <Carousel interval={4000}>
            {(homecarousaldeatsils.filter((ele)=>ele.sliderstatus==="Active")).map((ele, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 carousal-image"
                    src={ele.sliderimageurl}
                    alt={ele.slidertitle}
                  />

                  <Carousel.Caption>
                    <Row>
                      <Col><h3>{ele.slidertitle}</h3></Col>
                      <Col></Col>
                    </Row>
                    <Row>
                      <Col>  <p>{ele.sliderdescription}</p></Col>
                      <Col></Col>
                    </Row>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Dialog>
      )}
    </React.Fragment>
  );
}
