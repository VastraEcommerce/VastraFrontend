import * as React from 'react';
// import { useSelector } from "react-redux";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import { useUpdateAddressForUserMutation } from "../../services/usersApi";
import { cityData } from './citys';
import {
  useGetMeQuery,
  useUpdateMeMutation,
} from '../../services/currentUserApi';

export default function AddAddress() {
  const userID = window.localStorage.getItem('userId');
  const { data, isLoading, isError } = useGetMeQuery(userID); //if you want to test add "62ec135c16eeaa1abda160b2"

  const [expanded, setExpanded] = React.useState(false);
  const [updateAddressForUser] = useUpdateMeMutation();
  const [newAddress, setNewAddress] = React.useState({
    city: '',
    street: '',
    buliding: '',
    country: 'egypt',
    purpose: 'payment',
  });

  const handleStreet = (event) => {
    setNewAddress({
      ...newAddress,
      street: event.target.value,
    });
  };
  const handleBulidig = (event) => {
    setNewAddress({
      ...newAddress,
      buliding: event.target.value,
    });
  };
  const handleCity = (event) => {
    setNewAddress({
      ...newAddress,
      city: event.target.value,
    });
  };
  const handlePurpose = (event) => {
    setNewAddress({
      ...newAddress,
      purpose: event.target.value,
    });
  };
  const handleSubmit = async () => {
    await updateAddressForUser({
      ...data,
      address: [...data.address, newAddress],
    });
  };
  const handleChange = () => {
    setExpanded(!expanded);
  };
  const handleCancel = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Accordion className="mb-20 " expanded={expanded}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <button
            onClick={handleChange}
            className="ml-16 py-2 border border-neutral hover:bg-neutral hover:text-white text-center text-sm text-neutral-800  duration-300  px-14"
          >
            ADD A NEW ADDRESS
          </button>
        </AccordionSummary>
        {isLoading && <p>loading...</p>}
        {isError && <p>somthing went wrong...</p>}
        {data && (
          <AccordionDetails>
            <div className="w-[90%] mx-auto">
              <div className="p-6 border border-gray-300 sm:rounded-md ">
                <h2 className="my-5 mb-10">ADD A NEW ADDRESS</h2>

                <div className="mb-6">
                  <label className="block mb-6">
                    STREET
                    <input
                      className=" border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   "
                      placeholder=""
                      type="text"
                      name="streetName"
                      onChange={handleStreet}
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <label className="block mb-6">
                    BUILDING
                    <input
                      className=" border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   "
                      placeholder=""
                      type="text"
                      name="buildingName"
                      onChange={handleBulidig}
                    />
                    <div className="mb-6">
                      <label className="block mb-6">
                        CITY
                        <select
                          name="cityName"
                          onChange={handleCity}
                          defaultValue="mansoura"
                          className=" border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   "
                        >
                          {cityData.results.map((city, index) => {
                            return (
                              <option value={city.name} key={index}>
                                {city.name}
                              </option>
                            );
                          })}
                        </select>
                      </label>
                    </div>
                  </label>
                </div>
                <div className="mb-6">
                  <label className="block mb-6">
                    COUNTERY
                    <input
                      className=" border border-slate-300 outline-none text-sm text-nuteral-800  focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   "
                      placeholder="Egypt"
                      type="text"
                      name="name"
                      disabled
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <label className="block mb-6">
                    PURPOSE
                    <select
                      name="purpose"
                      onChange={handlePurpose}
                      defaultValue="payment"
                      className=" border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   "
                    >
                      <option value="payment">Payment</option>
                      <option value="delivery">Delivery</option>
                    </select>
                  </label>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={handleSubmit}
                    className=" py-2 border border-neutral hover:bg-neutral hover:text-white text-center text-sm text-neutral-800  duration-300  px-14"
                  >
                    ADD ADDRESS
                  </button>
                  <button
                    onClick={handleCancel}
                    className=" py-2 border border-neutral hover:bg-neutral hover:text-white text-center text-sm text-neutral-800  duration-300  px-14"
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </AccordionDetails>
        )}
      </Accordion>
    </div>
  );
}
