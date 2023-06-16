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
import Addedithomecarousal from './addeditcarousal';

export default function HomeCarousallist() {

    const { fbdbdata: homecarousaldeatsils } = useFetchCollection(AppCommonCollections.homepagecollections[7]);
    console.log("homecarousaldeatsils",homecarousaldeatsils);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [visibleaddSlider, setaddSlider] = useState(false);

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
    const sliderimageTemplate = (rowdata) => {
      return (
        <React.Fragment>
          <img src={rowdata.clublogo} alt={rowdata.clubname} width={"50px"} />
        </React.Fragment>
      );
    };
    const header = (
      <div className="flex flex-wrap gap-2 align-items-center justify-content-between w-100">
        <h4 className="m-0">Manage Home Slider deatils</h4>
        <span>
          <Button
            icon="pi pi-plus"
            rounded
            outlined
            className={"addnewslider m-l-16 m-r-16"}
            data-pr-tooltip="Add New Club"
            severity="success"
            onClick={() => {setaddSlider(true);}}
          />
          <Tooltip target=".addnewslider" mouseTrack mouseTrackLeft={10} />
  
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
  return <React.Fragment>
    {!_.isNil(homecarousaldeatsils) ? (  <div className="card">
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
              field="sliderimage"
              sortable
              header="SLIDER IMAGE"
              body={sliderimageTemplate}
            ></Column>
            <Column field="slidertitle" sortable header="SLIDER TITLE"></Column>
            <Column field="slidersubtitle" sortable header="SLIDER SUB-TITLE"></Column>
            <Column
              field="status"
              sortable
              header="STATUS"
              body={statusBodyTemplate}
            ></Column>
          </DataTable>
        </div>): (<Message severity="info" className="w-100" text="No Records Found" />)}
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
          <Addedithomecarousal/>
        </Sidebar>
      )}
  </React.Fragment>;
}
