import React from "react";

export default function DeleteAddress(props) {
  const handleDelete = () => {};
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
