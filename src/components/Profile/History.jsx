import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdAdd } from "react-icons/md";

export default function History() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdAdd />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography className='mx-auto lg:mx-start'>HISTORY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2 className=' text-xl font-light my-4'>Order History </h2>
          <div className='orderHistory text-sm font-extralight my-10'>
            You haven't placed any orders yet.
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
