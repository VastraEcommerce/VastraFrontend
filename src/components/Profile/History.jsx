import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdAdd } from "react-icons/md";
import { useGetOrdersForCurrentUserQuery } from "../../services/orderApi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOrder } from "../../app/features/orderSlice";

const orderState = {
  pendingPayment: ["bg-slate-300/50", "text-slate-700"],
  preparing: ["bg-yellow-300/50", "text-yellow-700"],
  shipping: ["bg-blue-300/50", "text-blue-700"],
  completed: ["bg-green-300/50", "text-green-700"],
  canceled: ["bg-red-300/50", "text-red-700"],
};

export default function History() {
  const {
    data: orders,
    isLoading,
    isError,
    isSuccess,
  } = useGetOrdersForCurrentUserQuery();

  console.log(orders, isSuccess);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showOrder = (order) => {
    dispatch(addOrder(order));
    navigate(`/profile/orders/${order._id}`);
  };
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdAdd />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="mx-auto lg:mx-start">HISTORY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2 className=" text-xl font-light my-4">Order History </h2>
          {isLoading && <p className="mx-auto my-10">loading...</p>}
          {isError && <p className="mx-auto my-10">Something Went wrong</p>}
          {isSuccess && (
            <>
              {!orders.length && (
                <div className="orderHistory text-sm font-extralight my-10">
                  You haven't placed any orders yet.
                </div>
              )}
              {orders.length && (
                <div className="">
                  <div className="flex lg:flex-row  lg:justify-evenly flex-col ">
                    <div className="mx-auto md:mx-inhert">
                      <TableContainer
                        sx={{
                          m: 1,
                        }}
                        component={Paper}
                      >
                        <Table aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell>
                                <Typography variant="h5">Status</Typography>
                              </TableCell>

                              <TableCell>
                                <Typography variant="h5">Orderd At</Typography>
                              </TableCell>

                              <TableCell align="right">
                                <Typography variant="h5">
                                  Total Price($)
                                </Typography>
                              </TableCell>

                              <TableCell>
                                <Typography variant="h5">Show Items</Typography>
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {orders.map((order) => (
                              <TableRow
                                key={order._id}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
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
                                <TableCell align="center">
                                  {order.totalPrice}
                                </TableCell>
                                <TableCell align="center">
                                  <button onClick={() => showOrder(order)}>
                                    Show Order
                                  </button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                    <div className="px-6  sm:px-12"></div>
                  </div>
                </div>
              )}
            </>
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
