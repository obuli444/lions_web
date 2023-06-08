import React, { useState } from "react";
import { useFetchCollection } from "../getfirebasedata";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import moment from "moment";
import _ from "lodash";
import { Tooltip } from "primereact/tooltip";
import { Dialog } from "primereact/dialog";
import AppToast from "../common-components/apptoast";
import { doc, serverTimestamp, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Message } from 'primereact/message';

import AppCommonCollections from "../../firebase/app-collections";

export default function ContactsList() {
  const { fbdbdata: contactusdetails } = useFetchCollection(AppCommonCollections.contactuscollections[0]);
  console.log(AppCommonCollections.contactuscollections[0],contactusdetails);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [visibleDeleteContact, setDeleteContact] = useState(false);
  const [showDeleteAlert, setDeleteAlert] = useState(false);
  const [selectedContactsrow, setSelectedContactsrow] = useState(null);
  const [showBulkDelete, setBulkDelete] = useState(false);
  const [showBulkDeleteAlert, setBulkDeleteAlert] = useState(false);


  const [selectedContact, setSelectedContact] = useState(null);
  const statusBodyTemplate = (rowData) => {
    return (
      <Tag value={rowData.status} severity={getSeverity(rowData?.status)}></Tag>
    );
  };

const footerBulkDeleteContent = (
  <div>
    <Button
      label="No"
      icon="pi pi-times"
      onClick={() => setBulkDelete(false)}
      className="p-button-text"
    />
    <Button
      label="Yes"
      icon="pi pi-check"
      onClick={() => {
        BulkDelete();
      }}
      autoFocus
    />
  </div>
);

const footerDeleteContent = (
  <div>
    <Button
      label="No"
      icon="pi pi-times"
      onClick={() => setDeleteContact(false)}
      className="p-button-text"
    />
    <Button
      label="Yes"
      icon="pi pi-check"
      onClick={() => {
        const docRef = doc(db, AppCommonCollections.contactuscollections[0], selectedContact.id);
        let updatedObj = selectedContact;
        updatedObj["status"] = `${
          selectedContact.status === "Active" ? "Inactive" : "Active"
        }`;
        updatedObj["updateddt"] = serverTimestamp();
        updatedObj["updatedby"] = "Admin";
        updateDoc(docRef, updatedObj);
        setDeleteContact(false);
        setDeleteAlert(true);
        setTimeout(() => {
          setDeleteAlert(false);
        }, 3000);
        setSelectedContact(null);
      }}
      autoFocus
    />
  </div>
);

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
          {!_.isNil(selectedContactsrow) && selectedContactsrow.length !== 0 ? (
            <Button
              icon="pi pi-trash"
              rounded
              outlined
              className={"deletecontact m-l-16"}
              severity={"warning"}
              type="button"
              label="Bulk Delete"
              badge={
                selectedContactsrow !== null ? selectedContactsrow.length : 0
              }
              badgeClassName="p-badge-danger"
              onClick={() => {
                setBulkDelete(true);
              }}
            />
          ) : (
            <Button
              icon="pi pi-trash"
              rounded
              outlined
              severity={"warning"}
              className={"deletecontact m-l-16"}
              disabled
              type="button"
              label="Bulk Delete"
            />
          )}
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
              setSelectedContact(rowData);
              setDeleteContact(true);
            }}
          />
        }
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
  // const updateddtTemplate = (rowData) => {
  //   return (
  //     <React.Fragment>
  //       {!_.isNil(rowData.updateddt)
  //         ? moment(rowData.updateddt.toDate()).format("LLLL")
  //         : null}
  //     </React.Fragment>
  //   );
  // };
  const BulkDelete = () => {
    selectedContactsrow.length !== 0 &&
      selectedContactsrow.map(async (ele) => {
        const docRef = doc(db, AppCommonCollections.contactuscollections[0],ele.id);
        return await deleteDoc(docRef);
      });
      setBulkDelete(false);
      setBulkDeleteAlert(true);
      setTimeout(() => {
        setBulkDeleteAlert(false);
      }, 3000);
      setSelectedContactsrow(null);
  };
  return (
    <React.Fragment>
      {showDeleteAlert && (
        <AppToast
          showAleart={showDeleteAlert}
          icon="mgc_check_circle_fill"
          message={`Contact us Deleted Sucessfully`}
        />
      )}
      {showBulkDeleteAlert&&  <AppToast showAleart={showBulkDeleteAlert} icon="mgc_check_circle_fill" message={`Contactus records Deleted Permanently Sucessfully`} />}

      {contactusdetails !== null ? (
        <div className="card">
          <DataTable
            selection={selectedContactsrow}
            onSelectionChange={(e) => {
              setSelectedContactsrow(e.value);
              console.log("e.value", e.value);
            }}
            dataKey="id"
            paginator
            rows={10}
            globalFilter={globalFilter}
            header={header}
            value={_.orderBy(contactusdetails, ["createdt"], ["desc"])}
            showGridlines
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "3rem" }}
            ></Column>
            <Column field="fullname" sortable header="FULL NAME"></Column>
            <Column field="email" sortable header="Email ID"></Column>
            <Column field="mobileno" sortable header="MOBILE NO"></Column>
            <Column field="message" sortable header="MESSAGE"></Column>
            <Column
              field="createdt"
              sortable
              header="CREATED DATE"
              body={createdAtTemplate}
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
      ):( <Message severity="info" className="w-100" text="No Records Found" />
      )}
      {/* Delete Club */}
      {visibleDeleteContact && (
        <Dialog
          header={`${
            selectedContact.status === "Active"
              ? "Delete Contact"
              : "Activate Contact"
          }`}
          visible={visibleDeleteContact}
          style={{ width: "30vw" }}
          onHide={() => setDeleteContact(false)}
          footer={footerDeleteContent}
        >
          <h4 className="m-0">{`Are you sure want to ${
            selectedContact.status === "Active"
              ? "Delete Contact"
              : "Activate Contact"
          } ?`}</h4>
        </Dialog>
      )}
      {/* Bulk Delete Dialog */}
      {showBulkDelete && (
        <Dialog
          header={`Bulk Delete`}
          visible={showBulkDelete}
          style={{ width: "30vw" }}
          onHide={() => setBulkDelete(false)}
          footer={footerBulkDeleteContent}
        >
          <h4 className="m-0">{`Are you sure want to Delete Permanently ?`}</h4>
        </Dialog>
      )}
    </React.Fragment>
  );
}
