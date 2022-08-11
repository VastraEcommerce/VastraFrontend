import React from "react";
import { Link } from "react-router-dom";

export default function EmptyBag() {
  return (
    <div className='mx-auto text-center my-36'>
      <h1 className='py-3 text-3xl text-neutral font-bold '>
        Shopping Bag is Empty
      </h1>
      <p className='text-neutral font-light'>Your shopping bag is empty. </p>
      <div className='my-8'>
        <Link
          to='/products'
          className='px-16 py-2 border border-neutral hover:bg-neutral hover:text-white text-center  text-neutral   text-sm  duration-300 '>
          {" "}
          CONTINUE SHOPPING
        </Link>
      </div>
    </div>
  );
}
