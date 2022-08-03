import React from "react";
import DeleteAddress from "./DeleteAddress";
export default function GetAdress() {
  return (
    <>
      <h2 className=' my-10 ml-16 text-xl '>YOUR ADRESSES</h2>
      <div className=' my-2 mx-16 flex p-2  border-b '>
        <p className=' font-light'>City:</p>
        <p className='mx-auto'>Cairo</p>
      </div>
      <div className=' my-2 mx-16 flex p-2  border-b '>
        <p className=' font-light'>Street:</p>
        <p className='mx-auto'>Elglaa</p>
      </div>
      <div className=' my-2 mx-16 flex p-2  border-b '>
        <p className=' font-light'>Building:</p>
        <p className='mx-auto'>23</p>
      </div>
      <div className=' my-2 mx-16 flex p-2  border-b '>
        <p className=' font-light'>Countery:</p>
        <p className='mx-auto'>Egypt</p>
      </div>
      <div className=' my-2 mx-16 flex p-2  border-b '>
        <p className=' font-light'>Purpose:</p>
        <p className='mx-auto'>Payment</p>
      </div>
      <DeleteAddress />
    </>
  );
}
