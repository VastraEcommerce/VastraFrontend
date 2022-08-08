import React from "react";

import Product from "./Product";

export default function ProductVeiw() {
  return (
    <div className='py-8 px-5'>
      <table className='table'>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTIY</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <Product />
        </tbody>
      </table>
    </div>
  );
}
