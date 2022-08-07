import * as React from "react";
import { useSelector } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useUpdateAddressForUserMutation } from "../../services/usersApi";
import { useGetUserByIdQuery } from "../../services/userApi";

export default function EditAddress({ thisAddress }) {
  const { user } = useSelector((state) => state.auth.user);
  const { data } = useGetUserByIdQuery(user._id); //if you want to test add "62ec135c16eeaa1abda160b2"

  const [expanded, setExpanded] = React.useState(false);
  const [updateAddressForUser] = useUpdateAddressForUserMutation();
  const [newAddress, setNewAddress] = React.useState({
    city: thisAddress.city,
    street: thisAddress.street,
    buliding: thisAddress.buliding,
    country: thisAddress.country,
    purpose: thisAddress.purpose,
    _id: thisAddress._id,
  });

  const handleStreet = (event) => {
    setNewAddress({
      ...newAddress,
      street: event.target.value,
    });
  };
  const handleBuildig = (event) => {
    setNewAddress({
      ...newAddress,
      building: event.target.value,
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
  const UpdateAdress = (arrayOfAddress) => {
    const addressArray = arrayOfAddress.map((object) => {
      if (object._id === thisAddress._id) {
        return newAddress;
      } else return thisAddress;
    });
    return addressArray;
  };
  const handleUpdate = async () => {
    await updateAddressForUser({
      ...data.data,
      address: UpdateAdress(data.data.address),
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
      <Accordion className='mb-20 ' expanded={expanded}>
        <AccordionSummary aria-controls='panel1a-content' id='panel1a-header'>
          <button
            onClick={handleChange}
            className='ml-16 py-2 border border-neutral hover:bg-neutral hover:text-white text-center text-sm text-neutral-800  duration-300  px-14'>
            EDIT ADDRESS
          </button>
        </AccordionSummary>
        <AccordionDetails>
          <div className='w-[90%] mx-auto'>
            <div className='p-6 border border-gray-300 sm:rounded-md '>
              <h2 className='my-5 mb-10'>ADD A NEW ADDRESS</h2>

              <div className='mb-6'>
                <label className='block mb-6'>
                  STREET
                  <input
                    className=' border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   '
                    placeholder=''
                    type='text'
                    name='streetName'
                    onChange={handleStreet}
                    value={newAddress.street}
                  />
                </label>
              </div>
              <div className='mb-6'>
                <label className='block mb-6'>
                  BUILDING
                  <input
                    className=' border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   '
                    placeholder=''
                    type='text'
                    name='buildingName'
                    onChange={handleBuildig}
                    value={newAddress.buliding}
                  />
                  <div className='mb-6'>
                    <label className='block mb-6'>
                      CITY
                      <select
                        name='cityName'
                        onChange={handleCity}
                        defaultValue={newAddress.city}
                        className=' border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   '>
                        <option value='mansoura'>mansoura</option>
                        <option value='aga'>aga</option>
                      </select>
                    </label>
                  </div>
                </label>
              </div>
              <div className='mb-6'>
                <label className='block mb-6'>
                  COUNTERY
                  <input
                    className=' border border-slate-300 outline-none text-sm text-nuteral-800  focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   '
                    placeholder='Egypt'
                    type='text'
                    name='name'
                    // value='Egypt'
                    disabled
                  />
                </label>
              </div>
              <div className='mb-6'>
                <label className='block mb-6'>
                  PURPOSE
                  <select
                    name='purpose'
                    onChange={handlePurpose}
                    defaultValue={newAddress.purpose}
                    className=' border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   '>
                    <option value='payment'>Payment</option>
                    <option value='delivery'>Delivery</option>
                  </select>
                </label>
              </div>

              <div className='flex justify-between'>
                <button
                  onClick={handleUpdate}
                  className=' py-2 border border-neutral hover:bg-neutral hover:text-white text-center text-sm text-neutral-800  duration-300  px-14'>
                  UPDATE
                </button>
                <button
                  onClick={handleCancel}
                  className=' py-2 border border-neutral hover:bg-neutral hover:text-white text-center text-sm text-neutral-800  duration-300  px-14'>
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
