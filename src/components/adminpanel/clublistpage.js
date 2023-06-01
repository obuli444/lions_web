import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useFetchCollection } from "../getfirebasedata";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { Tooltip } from "primereact/tooltip";
import { Dialog } from "primereact/dialog";
import ClubAddandEdit from "../adminpanel/addclub";
import { useNavigate } from "react-router-dom";
import AppToast from '../common-components/apptoast';
import { onSnapshot, query, collection, deleteDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from "../../firebase/config";

export default function Clublistpage() {
  const navigate = useNavigate();
  const { fbdbdata: clubdetails } = useFetchCollection("clubdetails");
  const [globalFilter, setGlobalFilter] = useState(null);
  const [visibleClub, setClubVisible] = useState(false);
  const [visibleDeleteclub, setDeleteClub] = useState(false);
  const [selectedClub,setSelectedClub] = useState(null);
  const [showDeleteAlert,setDeleteAlert]  = useState(false);

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
          onClick={() => console.log("edit", rowData)}
        />
        {rowData.status!==null&&rowData.status==='Active'&&   
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          className={"deleteclub"}
          severity="danger m-r-16 "
          data-pr-tooltip="Delete Club"
          onClick={() => {setDeleteClub(true);
            setSelectedClub(rowData)}}
        />
        
        
        }
      
        <Button
          icon="pi pi-users"
          rounded
          outlined
          className={"clubmembers"}
          severity="help"
          data-pr-tooltip="Manage Members"
          onClick={() => {
            navigate('/managemembers',{replace : true,state:{data:rowData}});

          }}
        />
      </React.Fragment>
    );
  };

  const closePanel = (data) => {
    setClubVisible(data);
  }

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between w-100">
      <h4 className="m-0">Manage Clubs</h4>
      <span>
        <Button
          icon="pi pi-plus"
          rounded
          outlined
          className={"addnewclub m-l-16 m-r-16"}
          data-pr-tooltip="Add New Club"
          severity="success"
          onClick={() => setClubVisible(true)}
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
        <img src={rowdata.clublogo} alt={rowdata.clubname} width={"50px"} />
      </React.Fragment>
    );
  };
  const footerDeleteContent = (
    <div>
        <Button label="No" icon="pi pi-times" onClick={() => setDeleteClub(false)} className="p-button-text" />
        <Button label="Yes" icon="pi pi-check" onClick={() => DeleteClubDetails()} autoFocus />
    </div>
);

const DeleteClubDetails=()=>{
 const docRef = doc(db, "clubdetails", selectedClub.id);
 let updatedObj = selectedClub;
 updatedObj['status']='Inactive';
 updateDoc(docRef, updatedObj);
 setDeleteClub(false);
 setDeleteAlert(true);
 setTimeout(() => {
  setDeleteAlert(false);
}, 3000);
setSelectedClub(null);

}
  const clubSpecialties = (rowData) => {
    return (
      <React.Fragment>
        <div className="row m-t-16">
          <div
            className="col col-12 specialities-icons"
            style={{ overflow: "hidden" }}
          >
            <ul>
              {rowData.specialties !== undefined &&
                rowData.specialties !== null &&
                rowData.specialties.map((ele, index) => {
                  return (
                    <li key={index}>
                      <Tooltip
                        target={`.${ele.code}`}
                        mouseTrack
                        mouseTrackLeft={10}
                      />
                      <img
                        src={ele.image}
                        alt={ele.name}
                        width={"32px"}
                        data-pr-tooltip={ele.name}
                        className={ele.code}
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
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
  return (
    <React.Fragment>
      {showDeleteAlert&&  <AppToast showAleart={showDeleteAlert} icon="mgc_check_circle_fill" message={`Club Deleted Sucessfully`} />}

      {clubdetails !== null ? (
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
              field="clublogo"
              sortable
              header="CLUB LOGO"
              body={clubLogoTemplate}
            ></Column>
            <Column field="clubname" sortable header="CLUB NAME"></Column>
            <Column field="clubno" sortable header="CLUB NAME"></Column>
            {/* <Column field="specialties" sortable header="SPECIALTIES" body={clubSpecialties} ></Column> */}
            <Column
              field="clubdistrict"
              sortable
              header="CLUB DISTRICT"
            ></Column>
            <Column
              field="presidentname"
              sortable
              header="PRESIDENT NAME"
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
        ""
      )}
      <Dialog
        header={"Add/Edit Club"}
        visible={visibleClub}
        style={{ width: "60vw" }}
        onHide={() => setClubVisible(false)}
      >
        <ClubAddandEdit closePanel={closePanel} />
      </Dialog>
      {/* Delete Club */}
      <Dialog header={"Delete Club"} visible={visibleDeleteclub} style={{ width: '30vw' }} onHide={() => setDeleteClub(false)} footer={footerDeleteContent}>
                <h4 className="m-0">
                  Are you sure want to delete club ?
                </h4>
            </Dialog>
    </React.Fragment>
  );
}
