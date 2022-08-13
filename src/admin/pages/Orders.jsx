import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetOrdersForCurrentUserQuery } from "../../services/orderApi";
import { Typography } from "@mui/material";

const orderState = {
  pendingPayment: ["bg-slate-300/50", "text-slate-700"],
  preparing: ["bg-yellow-300/50", "text-yellow-700"],
  shipping: ["bg-blue-300/50", "text-blue-700"],
  completed: ["bg-green-300/50", "text-green-700"],
  canceled: ["bg-red-300/50", "text-red-700"],
};

const Orders = () => {
  const { data: orders } = useGetOrdersForCurrentUserQuery();

  return (
    <>
      {!orders ? (
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
                  <Typography variant="h5">Status</Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="h5">Orderd At</Typography>
                </TableCell>

                <TableCell align="right">
                  <Typography variant="h5">Total Price($)</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <span
                      className={`
                      p-1
                      rounded-md
                      uppercase
                      ${orderState[order.status][0]} ${
                        orderState[order.status][1]
                      }`}
                    >
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    {new Date(order.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell align="right">{order.totalPrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default Orders;
