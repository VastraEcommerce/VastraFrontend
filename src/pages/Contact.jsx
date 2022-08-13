import React, { useState } from "react";
import { Link } from "react-router-dom";

import { cityData } from "../components/address/citys";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState({
    fullNAme: "",
    email: "",
    message: "",
  });

  const handlename = (event) => {
    setContact({
      ...contact,
      fullNAme: event.target.value,
    });
  };
  const handleemail = (event) => {
    setContact({
      ...contact,
      email: event.target.value,
    });
  };
  const handleInstruction = (event) => {
    setContact({
      ...contact,
      message: event.target.value,
    });
  };
  const handleSubmit = () => {
    setOpen(true);
  };
  const handleColse = () => {
    setOpen(false);
  };
  return (
    <>
      {open && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert
            severity='success'
            onClose={() => {
              handleColse();
            }}>
            <AlertTitle>Success</AlertTitle>
            Vastra will Contact with you — <strong>Greetings</strong>
          </Alert>
        </Stack>
      )}
      <div className='flex my-5 justify-evenly items-center'>
        <div>
          <p className='text-3xl font-bold text-neutral '>CONTACT US</p>
          <p className='text-2xl text-neutral '>LET'S Talk...</p>
        </div>
        <div>
          <div className='p-5 text-neutral border border-slate-300 my-8 drop-shadow-md rounded-md'>
            <h1 className='text-lg my-3'>SEND US A MESSAGE</h1>
            <p className='text-sm font-light my-3'>
              Enter your Message and fell free with us.
            </p>
            <div className='mb-6'>
              <label className='block mb-6'>
                FUll Name*
                <input
                  className=' border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   '
                  placeholder=''
                  type='text'
                  name='ZIP'
                  onChange={handlename}
                />
              </label>
            </div>
            <div className='mb-6'>
              <label className='block mb-6'>
                E-MAIL*
                <input
                  className=' border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   '
                  placeholder='user@test.com'
                  type='email'
                  name=''
                  onChange={handleemail}
                />
              </label>
            </div>

            <div className='mb-6'>
              <label className='block mb-6'>
                YOUR MESSAGE HERE
                <textarea
                  onChange={handleInstruction}
                  className='max-h-[6rem] border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   '></textarea>
              </label>
            </div>

            <button
              onClick={handleSubmit}
              className='w-full py-2 border hover:border-neutral bg-neutral hover:bg-white hover:text-neutral text-center text-sm text-white  duration-300  '>
              SEND
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
