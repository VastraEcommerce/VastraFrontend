import * as React from "react";
import { useSelector } from "react-redux";

import {
  useUpdateAddressForUserMutation,
  useGetUserQuery,
} from "../../services/usersApi";

export default function DeleteAddress({ thisAddress }) {
  const { user } = useSelector((state) => state.register.user);
  const { data } = useGetUserQuery(user._id); //if you want to test add "62ec135c16eeaa1abda160b2"
  console.log(thisAddress);
  const [updateAddressForUser] = useUpdateAddressForUserMutation();

  const DeleteAdress = (arrayOfAddress) => {
    const addressArray = arrayOfAddress.filter((object) => {
      return object._id !== thisAddress._id;
    });
    return addressArray;
  };
  const handleDelete = async () => {
    await updateAddressForUser({
      ...data.data,
      address: DeleteAdress(data.data.address),
    });
    console.log(DeleteAdress(data.data.address));
  };

  return (
    <div className='flex justify-end'>
      <button
        onClick={handleDelete}
        className=' py-2 border border-neutral hover:bg-white text-center bg-neutral hover:text-neutral  text-white text-center text-sm text-neutral-800  duration-300  px-14 mr-10 my-5'>
        DELETE
      </button>
    </div>
  );
}
