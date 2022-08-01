import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

export default function AcountDetails() {
  const [expanded, setExpanded] = React.useState(true);

  const handleChange = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Accordion expanded={expanded} onClick={handleChange} className='mb-20'>
        <AccordionSummary
          expandIcon={<MdAdd />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography className='mx-auto'>ACCOUNT DETAILS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2 className=' text-xl font-light my-10'>Account Details</h2>
          <div className=' my-2 flex p-2  border-b '>
            <p className=' font-light'>FIRST NAME:</p>
            <p className='mx-auto'>{"MOHAMED"}</p>
          </div>
          <div className=' my-2 flex p-2  border-b '>
            <p className=' font-light'>LAST NAME:</p>
            <p className='mx-auto'> {"SHEHTA"}</p>
          </div>
          <div className=' my-2 flex p-2  border-b '>
            <p className=' font-light'>COUNTRY:</p>
            <p className='mx-auto'>{" UNITED STATES"}</p>
          </div>
          <div className='my-14 text-center mb-28'>
            <Link to='/profile/address'> View Addresses ({1})</Link>
          </div>
          <div className='mb-5'>
            <Link
              to='/login'
              className=' py-2 border border-neutral hover:bg-neutral hover:text-white text-center text-sm text-neutral-800  duration-300 mx-auto px-8'>
              LogOut
            </Link>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
