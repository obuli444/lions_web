import React, { useState } from "react";
import { useFetchCollection } from "../getfirebasedata";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { Tooltip } from "primereact/tooltip";
import { Dialog } from "primereact/dialog";
import AppToast from "../common-components/apptoast";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function ContactsList() {
  const { fbdbdata: contactusdetails } = useFetchCollection("contactusdetails");
  const [globalFilter, setGlobalFilter] = useState(null);
  const statusBodyTemplate = (rowData) => {
    return (
      <Tag value={rowData.status} severity={getSeverity(rowData?.status)}></Tag>
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
  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between w-100">
      <h4 className="m-0">Manage Contactus</h4>
      <span>
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

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Tooltip target=".deletecontact" mouseTrack mouseTrackLeft={10} />
        {
          <Button
            icon="pi pi-trash"
            rounded
            outlined
            className={"deletecontact"}
            severity={
              rowData.status !== null && rowData.status === "Active"
                ? `success`
                : "danger"
            }
            data-pr-tooltip={
              rowData.status !== null && rowData.status === "Active"
                ? `Delete Contact`
                : "Activate Contact"
            }
            onClick={() => {
              "";
            }}
          />
        }
      </React.Fragment>
    );
  };
  console.log("contactusdetails", contactusdetails);
  return (
    <React.Fragment>
      {contactusdetails !== null && (
                <div className="card">
                  <DataTable
                    paginator
                    rows={10}
                    globalFilter={globalFilter}
                    header={header}
                    value={contactusdetails}
                    showGridlines
                    tableStyle={{ minWidth: "50rem" }}
                  >
                    <Column
                      field="fullname"
                      sortable
                      header="FULL NAME"
                    ></Column>
                    <Column field="email" sortable header="Email ID"></Column>
                    <Column
                      field="mobileno"
                      sortable
                      header="MOBILE NO"
                    ></Column>
                    <Column field="message" sortable header="MESSAGE"></Column>
                    <Column
                      field="status"
                      sortable
                      header="STATUS"
                      body={statusBodyTemplate}
                    ></Column>
                    <Column
                      body={actionBodyTemplate}
                      exportable={false}
                    ></Column>
                  </DataTable>
                </div>
              )}
    </React.Fragment>
  );
}
