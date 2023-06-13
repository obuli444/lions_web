import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!


export default function Appfullcalendar(props) {
  return (
    <React.Fragment>
      <FullCalendar   plugins={[ dayGridPlugin ]}
  initialView="dayGridMonth"
  weekends={true}
  events={[
    { title: 'event 1', date: '2023-06-12' },
    { title: 'event 2', date: '2023-06-13' }
  ]} />
    </React.Fragment>
  );
}
