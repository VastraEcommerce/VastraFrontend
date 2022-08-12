import React from 'react';
import CartItem from './CartItem';

export default function ProductVeiw({ data }) {
  return (
    <div className="py-8 sm:px-5 w-[100%]">
      <table className="table text-neutral table-normal w-[100%] text-center">
        <thead>
          <tr>
            <td className="text-sm font-normal">PRODUCT</td>
            <td className="text-sm font-normal">PRODUCT SIZE</td>
            <td className="text-sm font-normal">PRICE</td>
            <td className="text-sm font-normal">QUANTIY</td>
            <td className="text-sm font-normal">TOTAL</td>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => {
            return <CartItem product={product} key={product._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
