import React from "react";
import EmptyBag from "../components/shopingBag/EmptyBag";
import ProductVeiw from "../components/shopingBag/ProductVeiw";
import CartTotal from "../components/shopingBag/CartTotal";
import { useSelector } from "react-redux";

export default function ShopingBag() {
  const Bag = useSelector((state) => state.shoppingBag);
  return (
    <>
      {!Bag.length && <EmptyBag />}
      {Bag.length && (
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
