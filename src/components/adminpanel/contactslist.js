import React from "react";
import { useFetchCollection } from "../getfirebasedata";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

export default function ContactsList() {
  const { fbdbdata: contactusdetails } = useFetchCollection("contactusdetails");
  const columns = [
    {
      label: "Fullname",
    },
    {
      label: "Email Id",
    },
    {
      label: "Mobile No",
    },
    {
      label: "Message",
    },
    {
      label: "Status",
    },
    {
      label: "Created Date",
    },
  ];
  console.log("contactusdetails", contactusdetails);
  return (
    <React.Fragment>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 550 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column,index) => (
                  <TableCell
                    key={index}
                    align={"left"}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
            {contactusdetails!==null &&contactusdetails.length!==0 &&
            contactusdetails.map((ele,index)=>{
                console.log("ele",ele)
                return(
                    <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                  >
                    <TableCell >
                        <p>{ele?.fullname}</p>
                    </TableCell>
                    <TableCell >
                        <p>{ele?.email}</p>
                    </TableCell>
                    <TableCell >
                        <p>{ele?.mobileno}</p>
                    </TableCell>
                    <TableCell >
                        <p>{ele?.message}</p>
                    </TableCell>
                    <TableCell >
                        <p>{ele?.status}</p>
                    </TableCell>
                    <TableCell >
                        {/* <p>{ele?.createdt}</p> */}
                    </TableCell>
                  </TableRow>
                )
            })}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>
    </React.Fragment>
  );
}
