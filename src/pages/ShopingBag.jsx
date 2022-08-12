import React from "react";
import EmptyBag from "../components/shopingBag/EmptyBag";
import ProductVeiw from "../components/shopingBag/ProductVeiw";
import CartTotal from "../components/shopingBag/CartTotal";
import { useGetAllCartItemsForCurrentUserQuery } from "../services/cartItemsApi";

export default function ShopingBag() {
  const { data, isLoading, isError, isSuccess } =
    useGetAllCartItemsForCurrentUserQuery();
  return (
    <>
      {isLoading && <p className='mx-auto my-10'>loading...</p>}
      {isError && <p className='mx-auto my-10'>Something Went wrong</p>}
      {isSuccess && (
        <>
          {!data.length && <EmptyBag />}
          {data.length && (
            <div className=''>
              <h1 className='mb-14 mt-16 text-3xl text-neutral mx-auto text-center'>
                Shopping Bag
              </h1>
              <div className='flex lg:flex-row  lg:justify-evenly flex-col '>
                <div className='mx-auto md:mx-inhert'>
                  <ProductVeiw data={data} />
                </div>
                <div className='px-6  sm:px-12'>
                  <CartTotal />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
