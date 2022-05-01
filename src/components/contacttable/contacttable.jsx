import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useSelector } from "react-redux";

const ContactTable = () => {
  const { contacts } = useSelector((state) => state.contact);

  return (
    <TableContainer
      component={Paper}
      sx={{
        margin: "2rem",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bolder",
              }}
              align="center"
            >
              First Name
            </TableCell>
            <TableCell
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bolder",
              }}
              align="center"
            >
              Last Name
            </TableCell>
            <TableCell
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bolder",
              }}
              align="center"
            >
              Phone Number
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((item) => (
            <TableRow
              key={item.index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{item.firstName}</TableCell>
              <TableCell align="center">{item.lastName}</TableCell>
              <TableCell align="center">{item.phoneNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactTable;
