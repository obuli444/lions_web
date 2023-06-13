import React,{useState} from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import AppCommonCollections from "../../firebase/app-collections";
import { useFetchCollection } from "../getfirebasedata";
import { Message } from "primereact/message";
import moment from "moment";
import _ from "lodash";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tooltip } from "primereact/tooltip";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";

import { Sidebar } from 'primereact/sidebar';
        

import { Button } from "primereact/button";

export default function ClubActivitieslist() {
  const { fbdbdata: clubdetails } = useFetchCollection(
    AppCommonCollections.clubactivitiescollections[0]
  );
  const [globalFilter, setGlobalFilter] = useState(null);
  const [visibleClubActivities, setClubActivities] = useState(false);
  console.log("clubdetails", clubdetails);
  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between w-100">
      <h4 className="m-0">Manage Club Activities</h4>
      <span>
        <Button
          icon="pi pi-plus"
          rounded
          outlined
          className={"addnewclub m-l-16 m-r-16"}
          data-pr-tooltip="Add New Activity"
          severity="success"
          onClick={() => setClubActivities(true)}
        />
        <Tooltip target=".addnewclub" mouseTrack mouseTrackLeft={10} />

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
  const clubLogoTemplate = (rowdata) => {
    return (
      <React.Fragment>
        <img src={rowdata.bannerimage} alt={rowdata.eventname} width={"150px"} />
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
          className="editclub"
          data-pr-tooltip="Edit Club"
          onClick={() => console.log("edit", rowData)}
        />
         {rowData.status !== null && rowData.status === "Active" && (
          <Button
            icon="pi pi-trash"
            rounded
            outlined
            className={"deleteclub"}
            severity="danger m-r-16 "
            data-pr-tooltip="Delete Club"
            onClick={() => {
            //   setDeleteClub(true);
            //   setSelectedClub(rowData);
            }}
          />
        )}
        </div>
       
       
      </React.Fragment>
    );
  };
  const eventStartdtTemplate = (rowData) => {
    return (
      <React.Fragment>
        {!_.isNil(rowData.eventstartdt)
          ? moment(rowData.eventstartdt.toDate()).format("LLLL")
          : null}
      </React.Fragment>
    );
  };
  const eventEnddtTemplate = (rowData) => {
    return (
      <React.Fragment>
        {!_.isNil(rowData.eventenddt)
          ? moment(rowData.eventenddt.toDate()).format("LLLL")
          : null}
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      {!_.isNil(clubdetails) ? (
            <div className="card">
            <DataTable
              paginator
              rows={10}
              globalFilter={globalFilter}
              header={header}
              value={clubdetails}
              showGridlines
              tableStyle={{ minWidth: "50rem" }}
            >
              <Column
                field="bannerimage"
                sortable
                header="EVENT BANNER"
                body={clubLogoTemplate}
              ></Column>
              <Column field="eventname" sortable header="EVENT NAME"></Column>
              <Column field="category" sortable header="EVENT CATEGORY"></Column>
              <Column field="eventstartdt" sortable header="START DATE" body={eventStartdtTemplate}></Column>
              <Column field="eventenddt" sortable header="END DATE" body={eventEnddtTemplate}></Column>

              <Column
                field="eventvenue"
                sortable
                header="VENUE"
              ></Column>
              <Column
                field="eventinfolocation"
                sortable
                header="EVENT LOCATION"
              ></Column>
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
        <Message severity="info" className="w-100" text="No Records Found" />
      )}

      {visibleClubActivities&& (<Sidebar visible={visibleClubActivities} position="right" onHide={() => setClubActivities(false)}>
    <h2>Top Sidebar</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</Sidebar>
)}
    </React.Fragment>
  );
}
