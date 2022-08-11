import React from "react";
// import { useSelector } from "react-redux";
// import { useGetUserByIdQuery } from "../../services/userApi";
import Product from "./Product";

// import EmptyBag from "./Product";

export default function ProductVeiw() {
  // const user = useSelector((state) => state.auth.user);
  // const { data, isLoading, isSuccess, isError } = useGetUserByIdQuery(user._id);
  return (
    <div className='py-8 sm:px-5 w-[100%]'>
      <table className='table text-neutral table-normal w-[100%]'>
        <thead>
          <tr>
            <td className='text-sm font-normal'>PRODUCT</td>
            <td className='text-sm font-normal'>PRICE</td>
            <td className='text-sm font-normal'>QUANTIY</td>
            <td className='text-sm font-normal'>TOTAL</td>
          </tr>
        </thead>
        <tbody>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </tbody>
      </table>
    </div>
  );
}
