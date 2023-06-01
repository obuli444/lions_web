import React from "react";
import { Tooltip } from "primereact/tooltip";

export default function Clubcard(props) {
  const {
    clublogo,
    clubname,
    clubno,
    clubdistrict,
    presidentdetails,
    specialties,
  } = props.clubdetails;
  return (
    <React.Fragment>
      <div className="" style={{ padding: "24px" }}>
        <div className="row ">
          <div className="col col-3" style={{ overflow: "hidden" }}>
            <img src={clublogo} alt={clubname} className="w-100" />
          </div>
          <div className="col col-9 margin-auto">
            <p className="club-list-name m-a-0">{clubname}</p>
            <p className="club-list-no m-a-0">
              <span>{clubno}</span>
              <span className="title-dot">&#x2022;</span>
              <span>{clubdistrict}</span>
            </p>
          </div>
        </div>
        {presidentdetails !== undefined && presidentdetails !== null && (
          <div className="row ">
            <div className="col col-12" style={{ overflow: "hidden" }}>
              <p className="m-t-16 m-a-0">
                <span>
                  {presidentdetails !== null ? (
                    <img
                      src={presidentdetails.presidentprofile}
                      alt={presidentdetails.presidentname}
                      width={"32px"}
                      className="president-img"
                    />
                  ) : (
                    ""
                  )}
                </span>
                <span className="club-list-name p-l-8 p-r-8 p-b-0">
                  {presidentdetails !== null
                    ? presidentdetails.presidentname
                    : ""}
                </span>
                <span className="club-list-no">
                  {presidentdetails.presidentname !== null ? "(President)" : ""}
                </span>
              </p>
            </div>
          </div>
        )}

        <div className="row m-t-16">
          <div
            className="col col-12 specialities-icons"
            style={{ overflow: "hidden" }}
          >
            <ul>
              {specialties !== null &&
                specialties !== undefined &&
                specialties.map((ele, index) => {
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
      </div>
    </React.Fragment>
  );
}
