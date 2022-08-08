import React from "react";
import EmptyBag from "../components/shopingBag/EmptyBag";
import ProductVeiw from "../components/shopingBag/ProductVeiw";

export default function ShopingBag() {
  const data = false;
  return (
    <>
      <div className=''>
        <ProductVeiw />
      </div>
      {data && <EmptyBag />}
    </>
  );
}
