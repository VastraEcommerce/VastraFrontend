import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import AlertDialog from "./DeleteConfirm";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Accordion Head */}
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {/* Accordion Button */}
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>

        <TableCell>{row.brand}</TableCell>
        <TableCell>{row.category}</TableCell>
        <TableCell align="right">{row.ratingsAverage}</TableCell>
        <TableCell align="right">
          <AlertDialog id={row._id} />
        </TableCell>
      </TableRow>

      {/* Accordion Body */}
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Variants
              </Typography>

              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Color</TableCell>
                    <TableCell align="right">Size</TableCell>
                    <TableCell align="right">Stock</TableCell>
                    <TableCell align="right">Price ($)</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.variants.map((variant) =>
                    variant.sizes.map((size) => (
                      <TableRow key={size.size}>
                        <TableCell>
                          {/* {variant.color}{" "} */}
                          <div
                            style={{
                              backgroundColor: variant.color,
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              border: "0.5px solid grey",
                            }}
                          >
                            {" "}
                          </div>
                        </TableCell>
                        <TableCell align="right">{size.size}</TableCell>
                        <TableCell align="right">{size.count}</TableCell>
                        <TableCell align="right">{size.price}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function AllProducts({ products }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <Typography variant="h5">Title</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5">Brand</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5">Categories</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h5">Rating</Typography>
            </TableCell>
            {/* <TableCell align="right">Edit</TableCell> */}
            <TableCell align="right">
              <Typography variant="h5">Delete</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products.map((row, index) => (
            <Row key={row._id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
