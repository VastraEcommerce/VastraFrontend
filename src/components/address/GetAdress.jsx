import React from 'react';
import { useSelector } from 'react-redux';
import DeleteAddress from './DeleteAddress';
import EditAddress from './EditAddress';
import { useGetUserQuery } from '../../services/usersApi';
import { selectCurrentUser } from '../../features/auth/authSlice';

export default function GetAdress() {
  const user = useSelector(selectCurrentUser);
  //supose to modify the service in get user to send id dynamic
  const { data, isLoading, isSuccess, isError } = useGetUserQuery(user._id); //if you want to test add "62ec135c16eeaa1abda160b2"
  // console.log(data);

  return (
    <>
      <h2 className=" my-10 ml-16 text-xl ">YOUR ADRESSES</h2>
      {isLoading && <p className="mx-auto my-10">loading...</p>}
      {isError && <p className="mx-auto my-10">Something Went wrong</p>}
      {isSuccess && (
        <div>
          {data.data.address.map((address, i) => {
            return (
              <div className="col" key={i}>
                <div className=" my-2 mx-16 flex p-2  border-b ">
                  <p className=" font-light">Street:</p>
                  <p className="mx-auto">{address.street}</p>
                </div>
                <div className=" my-2 mx-16 flex p-2  border-b ">
                  <p className=" font-light">Buliding:</p>
                  <p className="mx-auto"> {address.buliding}</p>
                </div>
                <div className=" my-2 mx-16 flex p-2  border-b ">
                  <p className=" font-light">City:</p>
                  <p className="mx-auto"> {address.city} </p>
                </div>
                <div className=" my-2 mx-16 flex p-2  border-b ">
                  <p className=" font-light">Country:</p>
                  <p className="mx-auto">{address.country}</p>
                </div>
                <div className=" my-2 mx-16 flex p-2  border-b ">
                  <p className=" font-light">Purpose:</p>
                  <p className="mx-auto">{address.purpose}</p>
                </div>
                <DeleteAddress thisAddress={address} />
                <EditAddress thisAddress={address} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
