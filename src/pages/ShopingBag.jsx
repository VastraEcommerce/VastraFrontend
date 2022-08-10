import React from "react";
import EmptyBag from "../components/shopingBag/EmptyBag";
import ProductVeiw from "../components/shopingBag/ProductVeiw";
import CartTotal from "../components/shopingBag/CartTotal";

export default function ShopingBag() {
  const data = true;
  return (
    <>
      {!data && <EmptyBag />}
      {data && (
        <div className=''>
          <h1 className='mb-14 mt-16 text-3xl text-neutral mx-auto text-center'>
            Shopping Bag
          </h1>
          <div className='flex lg:flex-row  lg:justify-evenly flex-col '>
            <div className='mx-auto md:mx-inhert'>
              <ProductVeiw />
            </div>
            <div className='px-6  sm:px-12'>
              <CartTotal />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
