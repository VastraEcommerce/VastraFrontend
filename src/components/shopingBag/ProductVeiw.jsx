import React from "react";
import { useSelector } from "react-redux";

import Product from "./Product";

export default function ProductVeiw() {
  const shoppingBaag = useSelector((state) => state.shoppingBag);
  console.log(shoppingBaag);
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
          {shoppingBaag.map((product, index) => {
            return <Product product={product.payload} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
