import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetAllUsersQuery } from "../../services/userApi";
import { Typography } from "@mui/material";

const Customers = () => {
  const { data: users } = useGetAllUsersQuery();

  return (
    <>
      {!users ? (
        <p>Loading</p>
      ) : (
        <TableContainer
          sx={{
            m: 5,
          }}
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h5">Name</Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="h5">Email</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default Customers;
