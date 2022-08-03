import React from "react";
import DeleteAddress from "./DeleteAddress";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../services/usersApi";
export default function GetAdress() {
  const user = useSelector((state) => state.register.user);
  //supose to modify the service in get user to send id dynamic
  const { data, isLoading, isSuccess } = useGetUserQuery(user.id);

  return (
    <>
      <h2 className=' my-10 ml-16 text-xl '>YOUR ADRESSES</h2>
      {isLoading && "loading...."}
      {isSuccess && (
        <div>
          {data.data.address.map((address, i) => {
            return (
              <div className='col' key={i}>
                <div className=' my-2 mx-16 flex p-2  border-b '>
                  <p className=' font-light'>City:</p>
                  <p className='mx-auto'>{address.city}</p>
                </div>
                <div className=' my-2 mx-16 flex p-2  border-b '>
                  <p className=' font-light'>Street:</p>
                  <p className='mx-auto'>{address.street}</p>
                </div>
                <div className=' my-2 mx-16 flex p-2  border-b '>
                  <p className=' font-light'>Building:</p>
                  <p className='mx-auto'>{address.building}</p>
                </div>
                <div className=' my-2 mx-16 flex p-2  border-b '>
                  <p className=' font-light'>Countery:</p>
                  <p className='mx-auto'>{address.countery}</p>
                </div>
                <div className=' my-2 mx-16 flex p-2  border-b '>
                  <p className=' font-light'>Purpose:</p>
                  <p className='mx-auto'>{address.purpose}</p>
                </div>
                <DeleteAddress address={address._id} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
