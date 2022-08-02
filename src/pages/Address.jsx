import React from "react";
import AddAddress from "../components/address/AddAddress";
import GetAdress from "../components/address/GetAdress";
import EditAdress from "../components/address/EditAddress";
export default function Address() {
  return (
    <>
      <h1 className='mx-auto my-16 text-2xl '>Your Addresses</h1>
      <AddAddress />
      <GetAdress />
      <EditAdress />
    </>
  );
}
