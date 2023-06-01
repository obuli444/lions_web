import React,{useState} from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useFetchCollection } from "../getfirebasedata";
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { Tooltip } from "primereact/tooltip";
export default function Clublistpage() {
  const { fbdbdata: clubdetails } = useFetchCollection("clubdetails");
  const [globalFilter, setGlobalFilter] = useState(null);

  const actionBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
            <Button icon="pi pi-pencil" rounded outlined className="m-r-16" onClick={() => console.log("edit",rowData)} />
            <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => console.log("edit",rowData)} />
        </React.Fragment>
    );
};
const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between w-100">
        <h4 className="m-0">Manage Clubs</h4>
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
        </span>
    </div>
);
const statusBodyTemplate = (rowData) => {
    return <Tag value={rowData.status} severity={getSeverity(rowData.status)}></Tag>;
};
const clubLogoTemplate = (rowdata)=>{
    return (
        <React.Fragment>
           <img src={rowdata.clublogo} alt={rowdata.clubname} width={"50px"}/>
        </React.Fragment>
    );
}
const clubSpecialties = (rowData)=>{
    return (
        <React.Fragment>
            <div className="row m-t-16">
          <div
            className="col col-12 specialities-icons"
            style={{ overflow: "hidden" }}
          >
            <ul>
              {
               rowData.specialties !== undefined &&rowData.specialties !== null &&
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
}
const getSeverity = (status) => {
    switch (status) {
        case 'Active':
            return 'success';

        case 'Inactive':
            return 'danger';
        default:
            return null;
    }
};
  return <React.Fragment>
    {clubdetails!==null?
      <div className="card">
      <DataTable paginator rows={10}   globalFilter={globalFilter} header={header} value={clubdetails} showGridlines tableStyle={{ minWidth: '50rem' }}>
          <Column field="clublogo" sortable header="CLUB LOGO" body={clubLogoTemplate}></Column>
          <Column field="clubname" sortable header="CLUB NAME"></Column>
          <Column field="clubno" sortable header="CLUB NAME"></Column>
          {/* <Column field="specialties" sortable header="SPECIALTIES" body={clubSpecialties} ></Column> */}
          <Column field="clubdistrict" sortable header="CLUB DISTRICT"></Column>
          <Column field="presidentname" sortable header="PRESIDENT NAME"></Column>
          <Column field="status" sortable header="STATUS"  body={statusBodyTemplate}></Column>
          <Column body={actionBodyTemplate} exportable={false}></Column>
      </DataTable>
  </div>:''}
  </React.Fragment>;
}
